import { createRoot } from 'react-dom/client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import App from './App';

// Note: no <StrictMode>. Pages that still use a legacy.js script run it once on mount, and
// StrictMode's dev-only double mount would attach those listeners twice.
createRoot(document.getElementById('root')).render(<App />);
