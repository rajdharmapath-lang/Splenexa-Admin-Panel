import { useEffect, useRef } from 'react';
import { navigateFromMessage } from '../routes';

const bind = (target, key) => {
  const value = target[key];
  return typeof value === 'function' ? value.bind(target) : value;
};

/**
 * Runs a page's original imperative script against the page's own DOM.
 *
 * Gives the script scoped versions of `document`, `window`, `parent` and the timers so it behaves as
 * it did inside the iframe: lookups stay inside the page, `document.body` is the page root (so
 * appended nodes keep their scoped styles), scrolling targets the page scroller, and every listener
 * or timer it registers is removed when the page unmounts.
 *
 * Returns a ref to attach to the page's root element. Pages can be migrated to normal React state
 * one at a time by deleting their legacy.js and this hook call.
 */
export default function useLegacyScript(init) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    const scroller = document.getElementById('page-scroller') || document.documentElement;
    const cleanups = [];
    const listen = (target) => (type, fn, options) => {
      target.addEventListener(type, fn, options);
      cleanups.push(() => target.removeEventListener(type, fn, options));
    };
    const timer = (set, clear) => (fn, ms, ...args) => {
      const id = set(fn, ms, ...args);
      cleanups.push(() => clear(id));
      return id;
    };
    const setTimeoutShim = timer(window.setTimeout.bind(window), window.clearTimeout.bind(window));
    const setIntervalShim = timer(window.setInterval.bind(window), window.clearInterval.bind(window));

    const body = new Proxy(root, {
      get: (t, k) => (k === 'style' ? scroller.style : bind(t, k)),
    });
    const doc = new Proxy(document, {
      get(t, k) {
        switch (k) {
          case 'body': return body;
          case 'addEventListener': return listen(t);
          case 'getElementById': return (id) => root.querySelector(`#${CSS.escape(id)}`);
          case 'querySelector': return (s) => root.querySelector(s);
          case 'querySelectorAll': return (s) => root.querySelectorAll(s);
          default: return bind(t, k);
        }
      },
    });
    const win = new Proxy(window, {
      get(t, k) {
        switch (k) {
          case 'document': return doc;
          case 'addEventListener': return listen(t);
          case 'scrollTo': return (...a) => scroller.scrollTo(...a);
          case 'setTimeout': return setTimeoutShim;
          case 'setInterval': return setIntervalShim;
          default: return bind(t, k);
        }
      },
    });
    const parent = { postMessage: navigateFromMessage };

    try {
      init(doc, win, parent, setTimeoutShim, setIntervalShim);
    } catch (error) {
      // The iframe version swallowed script errors (the rest of the page kept working); keep that
      // behaviour so one failing line cannot unmount the whole app.
      console.error(`[legacy script] ${error.message}`, error);
    }
    return () => cleanups.forEach((fn) => fn());
  }, [init]);

  return ref;
}
