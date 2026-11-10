import { NAV_ITEMS } from '../routes';

export default function Sidebar({ route, onNavigate }) {
  return (
    <aside className="constant-sidebar">
      <div className="brand">
        <div className="brand-mark"><i className="bi bi-mortarboard-fill" /></div>
        <div>
          <div className="brand-title">FMGE</div>
          <span className="brand-subtitle">Admin Panel</span>
        </div>
      </div>
      <nav className="constant-nav" aria-label="Primary navigation">
        {NAV_ITEMS.map(([id, label, icon]) => (
          <button key={id} type="button" className={id === route ? 'active' : undefined}
            aria-current={id === route ? 'page' : undefined} onClick={() => onNavigate(id)}>
            <i className={`bi bi-${icon}`} />{label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
