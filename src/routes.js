import { lazy } from 'react';

// [route id, label shown on in-page buttons, component]
const ROUTE_TABLE = [
  ['fmge-dashboard', 'Dashboard', lazy(() => import('./pages/Dashboard'))],
  ['fmge-students', 'Students', lazy(() => import('./pages/Students'))],
  ['fmge-payments', 'Payments', lazy(() => import('./pages/Payments'))],
  ['fmge-question-bank', 'Question Bank', lazy(() => import('./pages/QuestionBank'))],
  ['fmge-videos', 'Videos', lazy(() => import('./pages/Videos'))],
  ['fmge-pdf-management', 'PDF Management', lazy(() => import('./pages/PdfManagement'))],
  ['fmge-coupons', 'Coupons & Offers', lazy(() => import('./pages/Coupons'))],
  ['fmge-create-coupon', 'Create Coupon', lazy(() => import('./pages/CreateCoupon'))],
  ['fmge-upload-video', 'Upload Video', lazy(() => import('./pages/UploadVideo'))],
  ['fmge-upload-pdf', 'Upload PDF', lazy(() => import('./pages/UploadPdf'))],
  ['fmge-add-question', 'Add Question', lazy(() => import('./pages/AddQuestion'))],
  ['fmge-student-performance', 'Student Performance', lazy(() => import('./pages/StudentPerformance'))],
  ['fmge-notifications', 'Notifications', lazy(() => import('./pages/Notifications'))],
  ['fmge-create-notification', 'Create Notification', lazy(() => import('./pages/CreateNotification'))],
  ['fmge-create-test', 'Create Test', lazy(() => import('./pages/CreateTest'))],
];

export const PAGES = Object.fromEntries(ROUTE_TABLE.map(([id, , C]) => [id, C]));
export const DEFAULT_ROUTE = 'fmge-dashboard';

// Sidebar entries (route id, label, bootstrap-icons name)
export const NAV_ITEMS = [
  ['fmge-dashboard', 'Dashboard', 'house-door-fill'],
  ['fmge-students', 'Students', 'person-fill'],
  ['fmge-payments', 'Payments', 'credit-card-2-front-fill'],
  ['fmge-question-bank', 'Question Bank', 'database-fill'],
  ['fmge-videos', 'Videos', 'play-circle-fill'],
  ['fmge-pdf-management', 'PDF Management', 'file-earmark-text-fill'],
  ['fmge-coupons', 'Coupons & Offers', 'tags-fill'],
  ['fmge-notifications', 'Notifications', 'bell-fill'],
];

// Labels that in-page buttons/links post to navigate (carried over from the iframe version)
const ALIASES = {
  'Coupons and Offers': 'fmge-coupons',
  'Back to Notifications': 'fmge-notifications',
  'Back to PDF Management': 'fmge-pdf-management',
  'FMGE Admin Panel': 'fmge-dashboard',
};
const LABEL_TO_ROUTE = { ...Object.fromEntries(ROUTE_TABLE.map(([id, label]) => [label, id])), ...ALIASES };

export const routeFromHash = () => {
  const id = window.location.hash.slice(1).split('?')[0];
  return PAGES[id] ? id : DEFAULT_ROUTE;
};
export const navigate = (route) => {
  const id = route.split('?')[0];
  if (PAGES[id]) window.location.hash = route;
};

/** Same contract as the old iframe `parent.postMessage({ type: 'fmge-page', label })`. */
export const navigateFromMessage = (data) => {
  if (data && data.type === 'fmge-page' && LABEL_TO_ROUTE[data.label]) navigate(LABEL_TO_ROUTE[data.label]);
};
