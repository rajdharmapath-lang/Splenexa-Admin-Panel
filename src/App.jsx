import { Suspense, useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { PAGES, navigate, routeFromHash } from './routes';

export default function App() {
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    const onHashChange = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => { document.getElementById('page-scroller')?.scrollTo(0, 0); }, [route]);

  const Page = PAGES[route];
  return (
    <>
      <Sidebar route={route} onNavigate={navigate} />
      {/* page-frame is the size container for @container rules and the containing block for the
          pages' fixed overlays; page-scroller is the scroll area (same layout as the old iframe). */}
      <div className="page-frame">
        <div className="page-scroller" id="page-scroller">
          <Suspense fallback={null}><Page key={route} /></Suspense>
        </div>
      </div>
    </>
  );
}
