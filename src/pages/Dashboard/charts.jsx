import { useId } from 'react';
import { DAYS, REGISTRATIONS, LOGINS, REVENUE, SALES } from './data';

const linePath = (values, x, y) => values.map((v, i) => `${i ? 'L' : 'M'}${x(i)} ${y(v)}`).join('');

function XAxisLabels({ x, y }) {
  return DAYS.map((d) => (
    <text key={d} x={x(d - 1)} y={y} textAnchor="middle">Apr {d}</text>
  ));
}

/** Bars (registrations) + line (logins) */
export function TrendChart() {
  const L = 44, R = 655, T = 8, B = 170, H = B - T;
  const y = (v) => B - (v / 500) * H;
  const x = (i) => L + 8 + (i * (R - L - 16)) / 30;
  return (
    <svg viewBox="0 0 660 215" role="img" aria-label="Student registrations and logins for April">
      {[0, 100, 200, 300, 400, 500].map((v) => (
        <g key={v}>
          <line x1={L} x2={R} y1={y(v)} y2={y(v)} stroke="#e5eef5" />
          <text x={L - 8} y={y(v) + 4} textAnchor="end">{v}</text>
        </g>
      ))}
      {REGISTRATIONS.map((_, i) => <line key={i} x1={x(i)} x2={x(i)} y1={T} y2={B} stroke="#eef4f8" />)}
      {REGISTRATIONS.map((v, i) => (
        <rect key={i} x={x(i) - 5} y={y(v)} width="10" height={B - y(v)} rx="1.5"
          fill={i % 3 === 0 ? '#1d4fa8' : '#0f3f95'} opacity={i === 2 ? 0.6 : 1} />
      ))}
      <path d={linePath(LOGINS, x, y)} fill="none" stroke="#1ea7e8" strokeWidth="2.2" />
      {LOGINS.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r="3.2" fill="#1ea7e8" stroke="#fff" strokeWidth="1" />)}
      <XAxisLabels x={x} y={B + 22} />
    </svg>
  );
}

/** Revenue + sales lines with an area fill under sales */
export function RevenueChart() {
  const gradientId = useId();
  const L = 36, R = 552, T = 8, B = 122, H = B - T;
  const y = (v) => B - (v / 4) * H;
  const x = (i) => L + (i * (R - L)) / 30;
  return (
    <svg viewBox="0 0 560 160" role="img" aria-label="Revenue and sales for April">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#19c3b0" stopOpacity=".35" />
          <stop offset="1" stopColor="#19c3b0" stopOpacity=".02" />
        </linearGradient>
      </defs>
      {['0', '1L', '2L', '3L', '4L'].map((t, i) => (
        <g key={t}>
          <line x1={L} x2={R} y1={y(i)} y2={y(i)} stroke="#e5eef5" />
          <text x={L - 8} y={y(i) + 4} textAnchor="end">{t}</text>
        </g>
      ))}
      <path d={`${linePath(SALES, x, y)}L${R} ${B}L${L} ${B}Z`} fill={`url(#${gradientId})`} />
      <path d={linePath(SALES, x, y)} fill="none" stroke="#19c3b0" strokeWidth="2" />
      <path d={linePath(REVENUE, x, y)} fill="none" stroke="#0f4fb0" strokeWidth="2" />
      {REVENUE.map((v, i) => <circle key={`r${i}`} cx={x(i)} cy={y(v)} r="2.8" fill="#0f4fb0" stroke="#fff" strokeWidth="1" />)}
      {SALES.map((v, i) => <circle key={`s${i}`} cx={x(i)} cy={y(v)} r="2.8" fill="#19c3b0" stroke="#fff" strokeWidth="1" />)}
      <XAxisLabels x={x} y={B + 22} />
    </svg>
  );
}

/** CSS conic-gradient donut with a legend */
export function DonutSummary({ total, label, segments }) {
  let acc = 0;
  const stops = segments.map((s, i) => {
    const from = acc; acc += s.pct;
    return `${s.ring ?? s.color} ${from}%${i === segments.length - 1 ? '' : ` ${acc}%`}`;
  }).join(',');
  return (
    <div className="donutbox">
      <div className="donut" style={{ background: `conic-gradient(${stops})` }}>
        <div><b>{total}</b>{label}</div>
      </div>
      <div className="ds">
        {segments.map((s) => (
          <div key={s.label}>
            <i style={{ background: s.color }} />{s.label}<b>{s.value}</b><span>({s.pct}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}
