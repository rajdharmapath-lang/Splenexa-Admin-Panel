import { memo, useState } from 'react';
import { TrendChart, RevenueChart, DonutSummary } from './charts';
import {
  KPIS, PAYMENT_STATUS, PRODUCT_OVERVIEW, TOP_PRODUCTS, RECENT_LOGINS, RECENT_PAYMENTS, STATUS_CLASS,
} from './data';
import './styles.css';

const Icon = ({ name }) => <i className={`bi bi-${name}`} />;
const Legend = ({ items }) => (
  <div className="lg">
    {items.map(([label, color]) => <span key={label}><i style={{ background: color }} />{label}</span>)}
  </div>
);
const Pill = ({ status }) => <span className={`pill ${STATUS_CLASS[status]}`}>{status}</span>;

function KpiCard({ icon, title, value, change, note }) {
  return (
    <div className="card kpi">
      <div className="ic"><Icon name={icon} /></div>
      <div>
        <h4>{title}</h4>
        <div className="n">{value}</div>
        <span className="up"><Icon name="arrow-up" /> {change}</span> <small>{note}</small>
      </div>
    </div>
  );
}

function ChartCard({ title, legend, children }) {
  const [period, setPeriod] = useState('Last 30 Days');
  return (
    <div className="card">
      <div className="ch">
        <h3>{title}</h3>
        <select value={period} onChange={(event) => setPeriod(event.target.value)} aria-label={`${title} period`}>
          <option>Last 30 Days</option>
          <option>Last 60 Days</option>
          <option>Last 90 Days</option>
          <option>Last 6 Months</option>
          <option>Last 1 Year</option>
        </select>
      </div>
      <Legend items={legend} />
      {children}
    </div>
  );
}

function DataTable({ title, viewAllHref, columns, rows }) {
  return (
    <div className="card">
      <div className="ch"><h3>{title}</h3><a className="va" href={viewAllHref}>View All</a></div>
      <div className="tw">
        <table>
          <thead><tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
          <tbody>{rows.map((cells, i) => (
            <tr key={i}><td>{i + 1}</td>{cells.map((c, j) => <td key={j}>{c}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}

function DashboardPage() {
  const [startDate, setStartDate] = useState('2024-04-01');
  const [endDate, setEndDate] = useState('2024-04-30');
  return (
    <div className="pg pg-dashboard">
      <main>
        <div className="top">
          <label className="search">
            <Icon name="search" />
            <input placeholder="Search students, topics, videos, payments..." />
          </label>
          <div className="r">
            <div className="bell"><Icon name="bell-fill" /><em>3</em></div>
            <div className="me">
              <div className="av">A</div>
              <div><b>Admin</b>Super Admin</div>
              <Icon name="chevron-down" />
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="hd">
            <div>
              <h1>Good Morning, Admin 👋</h1>
              <p>Here&rsquo;s what&rsquo;s happening with your FMGE application platform today.</p>
            </div>
            <div className="date" aria-label="Dashboard date range">
              <Icon name="calendar-event" />
              <input aria-label="Start date" type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
              <span>–</span>
              <input aria-label="End date" type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
            </div>
          </div>

          <div className="g kpis">{KPIS.map((k) => <KpiCard key={k.title} {...k} />)}</div>

          <div className="g row2">
            <ChartCard title="Student Registration & Login Trend" legend={[['Registrations', '#1ea7e8'], ['Logins', '#0a3b8c']]}>
              <TrendChart />
            </ChartCard>
            <ChartCard title="Revenue & Sales Overview" legend={[['Revenue', '#0a3b8c'], ['Sales', '#19c3b0']]}>
              <div className="big">₹ 52,38,000 <small><Icon name="arrow-up" /> 24% <span>vs previous period</span></small></div>
              <RevenueChart />
            </ChartCard>
          </div>

          <div className="g row3">
            <div className="card"><div className="ch"><h3>Payment Status</h3><a className="va" href="#fmge-payments">View All</a></div><DonutSummary {...PAYMENT_STATUS} /></div>
            <div className="card tp">
              <div className="ch"><h3>Top Selling Products</h3><a className="va" href="#fmge-payments">View All</a></div>
              {TOP_PRODUCTS.map((p, i) => (
                <div key={p.name}>
                  <span className={`rk${p.highlight ? ' y' : ''}`}>{i + 1}</span>{p.name}
                  <span className="p">{p.amount}</span><span className="r">{p.sales} sales</span>
                </div>
              ))}
            </div>
            <div className="card"><div className="ch"><h3>Application &amp; Product Overview</h3><a className="va" href="#fmge-question-bank">View All</a></div><DonutSummary {...PRODUCT_OVERVIEW} /></div>
          </div>

          <div className="g row4">
            <DataTable title="Recent Student Logins" viewAllHref="#fmge-students" columns={['#', 'Student Name', 'Email', 'Login Time', 'Status']}
              rows={RECENT_LOGINS.map((r) => [r.name, r.email, r.time, <Pill key="s" status="Logged In" />])} />
            <DataTable title="Recent Payments" viewAllHref="#fmge-payments" columns={['#', 'Student Name', 'Product', 'Amount', 'Status', 'Date']}
              rows={RECENT_PAYMENTS.map((r) => [r.name, r.product, r.amount, <Pill key="s" status={r.status} />, r.date])} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(DashboardPage);
