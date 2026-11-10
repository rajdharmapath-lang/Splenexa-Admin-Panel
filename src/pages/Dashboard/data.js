export const DAYS = [1, 5, 10, 15, 20, 25, 30];

export const REGISTRATIONS = [95,120,170,140,160,130,180,110,150,170,190,160,200,140,185,210,170,200,215,180,150,170,160,140,190,300,230,250,200,260,345];
export const LOGINS = [130,150,180,170,200,185,215,190,175,205,225,195,215,230,215,240,235,230,245,255,225,235,240,275,265,300,310,330,360,375,395];

export const REVENUE = [.3,.4,.45,.6,.5,.55,.6,.8,.7,.85,1.0,.9,1.1,1.25,1.4,1.25,1.5,1.7,1.55,1.4,1.45,1.7,1.9,2.1,1.8,2.0,2.4,2.5,3.0,3.1,3.6];
export const SALES = REVENUE.map((v, i) => Math.max(.1, v * .82 - .05 + (i % 4 === 0 ? .1 : 0)));

export const KPIS = [
  { icon: 'people-fill', title: 'Total Students', value: '3,482', change: '12%', note: '+372 this month' },
  { icon: 'box-arrow-in-right', title: 'Student Logins', value: '2,916', change: '18%', note: '+447 this month' },
  { icon: 'cart-fill', title: 'Total Sales', value: '₹ 58,21,000', change: '28%', note: 'Incl. taxes & add-ons' },
];

export const PAYMENT_STATUS = {
  total: '842', label: 'Payments',
  segments: [
    { label: 'Successful', value: '718', pct: 85, color: '#1fb57f' },
    { label: 'Pending', value: '74', pct: 9, color: '#f7b731' },
    { label: 'Failed', value: '50', pct: 6, color: '#f44336' },
  ],
};

export const PRODUCT_OVERVIEW = {
  total: '3,482', label: 'Students',
  segments: [
    { label: 'Full Course', value: '1,482', pct: 43, color: '#0a56a8' },
    { label: 'Test Series', value: '1,024', pct: 29, color: '#1ea7e8' },
    { label: 'Study Material', value: '684', pct: 20, color: '#5bbcf5' },
    { label: 'Live Classes', value: '292', pct: 8, color: '#2fd4b5', ring: '#7fe6cc' },
  ],
};

export const TOP_PRODUCTS = [
  { name: 'FMGE Full Course', amount: '₹ 28,21,000', sales: 412 },
  { name: 'Test Series', amount: '₹ 12,44,000', sales: 286 },
  { name: 'Study Material', amount: '₹ 6,32,000', sales: 198, highlight: true },
  { name: 'Live Classes', amount: '₹ 5,18,000', sales: 126 },
];

export const RECENT_LOGINS = [
  { name: 'Aarav Sharma', email: 'aarav.sharma@gmail.com', time: '30 Apr 2024, 10:24 AM' },
  { name: 'Priya Singh', email: 'priya.singh@outlook.com', time: '30 Apr 2024, 09:18 AM' },
  { name: 'Rahul Verma', email: 'rahul.verma@gmail.com', time: '30 Apr 2024, 08:56 AM' },
  { name: 'Simran Kaur', email: 'simran.kaur@gmail.com', time: '29 Apr 2024, 10:12 PM' },
  { name: 'Aditya Patel', email: 'aditya.patel@gmail.com', time: '29 Apr 2024, 09:43 PM' },
];

export const RECENT_PAYMENTS = [
  { name: 'Neha Gupta', product: 'FMGE Full Course', amount: '₹ 14,999', status: 'Success', date: '30 Apr 2024' },
  { name: 'Karan Mehta', product: 'Test Series', amount: '₹ 4,999', status: 'Success', date: '30 Apr 2024' },
  { name: 'Riya Nair', product: 'Study Material', amount: '₹ 2,499', status: 'Success', date: '29 Apr 2024' },
  { name: 'Vikram Reddy', product: 'Live Classes', amount: '₹ 6,999', status: 'Pending', date: '29 Apr 2024' },
  { name: 'Pooja Sharma', product: 'Test Series', amount: '₹ 4,999', status: 'Failed', date: '28 Apr 2024' },
];

export const STATUS_CLASS = { Success: 'ok', 'Logged In': 'ok', Pending: 'pd', Failed: 'fl' };
