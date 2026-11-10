import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function PaymentsPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-payments" ref={ref}>
      <div className="app-shell">
        <main className="main-area" id="payments">
          <header className="topbar">
            <label className="search-wrap" aria-label="Search payments and dashboard data">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="m20 20-4-4"></path>
              </svg>
              <input className="top-search" id="global-search" type="search" placeholder="Search students, products, transaction IDs..." autoComplete="off" />
            </label>
            <div className="topbar-spacer"></div>
            <div className="top-action-wrap">
              <button className="icon-button" id="notification-button" type="button" aria-label="Notifications, 3 unread" aria-expanded="false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12a2 2 0 0 0 4 0"></path>
                </svg>
                <span className="notification-count" id="notification-count">
                  3
                </span>
              </button>
              <div className="popover" id="notification-popover" hidden>
                <strong>
                  Notifications
                </strong>
                <p>
                  This is a UI preview. Connect your backend to show live alerts.
                </p>
              </div>
            </div>
            <button className="profile-button" id="profile-button" type="button" aria-label="Admin profile">
              <span className="avatar" aria-hidden="true">
                A
              </span>
              <span className="profile-copy">
                <strong>
                  Admin
                </strong>
                <span>
                  Super Admin
                </span>
              </span>
              <svg className="profile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m7 10 5 5 5-5"></path>
              </svg>
            </button>
          </header>
          <div className="page-content">
            <section className="page-heading" aria-labelledby="page-title">
              <div>
                <div className="title-row">
                  <span className="title-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                      <path d="M3 10h18m-12 5h.01"></path>
                    </svg>
                  </span>
                  <div>
                    <div className="eyebrow">
                      Payments &amp; access
                    </div>
                    <h1 id="page-title">
                      Payments &amp; Fee Management
                    </h1>
                  </div>
                </div>
                <p>
                  Manage product pricing, student entitlements, and payment transactions.
                </p>
              </div>
              <div className="heading-actions">
                <label className="sr-only" htmlFor="date-range">
                  Payment reporting period
                </label>
                <select className="control date-range" id="date-range" defaultValue="30">
                  <option value="7">
                    Last 7 days
                  </option>
                  <option value="30">
                    Last 30 days
                  </option>
                  <option value="90">
                    Last 90 days
                  </option>
                  <option value="all">
                    All time
                  </option>
                  <option value="custom">
                    Custom period
                  </option>
                </select>
                <div id="custom-dates" hidden style={{ display: "flex", gap: "5px" }}>
                  <label className="sr-only" htmlFor="date-from">
                    From date
                  </label>
                  <input className="control" id="date-from" type="date" aria-label="From date" />
                  <label className="sr-only" htmlFor="date-to">
                    To date
                  </label>
                  <input className="control" id="date-to" type="date" aria-label="To date" />
                </div>
              </div>
            </section>
            <p className="mock-notice">
              Illustrative mockup data only — payments, revenue, fee plans, and access records are not actual application data.
            </p>
            <section className="summary-grid" aria-label="Payment summary">
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20m5-16H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Total Revenue
                  </div>
                  <div className="summary-value" id="summary-revenue">
                    ₹52,38,000
                  </div>
                  <div className="summary-meta">
                    <span className="positive">
                      ↑ 24%
                    </span>
                    {" "}
                    vs previous period
                  </div>
                </div>
              </article>
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="M3 10h18m-12 5h3"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Successful Payments
                  </div>
                  <div className="summary-value" id="summary-success">
                    718
                  </div>
                  <div className="summary-meta">
                    <span className="positive">
                      ↑ 18%
                    </span>
                    {" "}
                    vs previous period
                  </div>
                </div>
              </article>
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 7v5l3 2"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Pending Payments
                  </div>
                  <div className="summary-value" id="summary-pending">
                    0
                  </div>
                  <div className="summary-meta">
                    <span className="attention" id="summary-pending-amount">
                      ₹0
                    </span>
                    {" "}
                    awaiting verification
                  </div>
                </div>
              </article>
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="m9 9 6 6m0-6-6 6"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Failed Payments
                  </div>
                  <div className="summary-value" id="summary-failed">
                    50
                  </div>
                  <div className="summary-meta">
                    <span className="negative">
                      ↓ 12%
                    </span>
                    {" "}
                    vs previous period
                  </div>
                </div>
              </article>
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="10" cy="7" r="4"></circle>
                    <path d="M20 8v6m-3-3h6"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Paid Product Access
                  </div>
                  <div className="summary-value" id="summary-entitlements">
                    2,916
                  </div>
                  <div className="summary-meta">
                    <span className="positive">
                      ↑ 22%
                    </span>
                    {" "}
                    active entitlements
                  </div>
                </div>
              </article>
            </section>
            <div className="main-grid">
              <div className="primary-column">
                <nav className="card tabs" role="tablist" aria-label="Payment management sections">
                  <button className="tab-button" type="button" role="tab" data-tab="fees" aria-selected="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 2v20m5-16H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    Course Plans &amp; Pricing
                  </button>
                  {" "}
                  <button className="tab-button" type="button" role="tab" data-tab="access" aria-selected="false">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"></path>
                    </svg>
                    Product Access
                  </button>
                  {" "}
                  <button className="tab-button" type="button" role="tab" data-tab="transactions" aria-selected="false">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v16H4zM8 8h8m-8 4h8m-8 4h5"></path>
                    </svg>
                    Transactions
                  </button>
                  {" "}
                  <button className="tab-button" type="button" role="tab" data-tab="discounts" aria-selected="false">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m20.6 13.4-7.2 7.2a2 2 0 0 1-2.8 0L3 13V4h9l8.6 6.6a2 2 0 0 1 0 2.8Z"></path>
                      <circle cx="8" cy="9" r="1.2"></circle>
                    </svg>
                    Coupons &amp; Discounts
                  </button>
                </nav>
                <section className="tab-panel card panel" id="panel-fees" role="tabpanel">
                  <div className="panel-heading">
                    <div>
                      <h2>
                        Course Plans &amp; Pricing
                      </h2>
                      <p>
                        Bundle multiple course products into PLAN A, PLAN B, PLAN C, or a new plan.
                      </p>
                    </div>
                    <button className="button button-primary" type="button" data-action="create-fee">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                      Create Fee Plan
                    </button>
                  </div>
                  <div className="table-wrap">
                    <table className="fee-table">
                      <thead>
                        <tr>
                          <th>
                            Plan Name
                          </th>
                          <th>
                            Included Products
                          </th>
                          <th>
                            Base Fee
                          </th>
                          <th>
                            Discount
                          </th>
                          <th>
                            Final Fee
                          </th>
                          <th>
                            Validity
                          </th>
                          <th>
                            Payment Mode
                          </th>
                          <th>
                            Status
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody id="fee-rows"></tbody>
                    </table>
                  </div>
                  <p className="section-note">
                    Plans can combine PDF, Image Based, Video, and active products created in Question Bank. Configure the plan price and validity before publishing.
                  </p>
                </section>
                <section className="tab-panel card panel" id="panel-access" role="tabpanel" hidden>
                  <div className="panel-heading">
                    <div>
                      <h2>
                        Product Access &amp; Permissions
                      </h2>
                      <p>
                        Grant individual products or a complete multi-product plan to one student.
                      </p>
                    </div>
                    <button className="button button-primary" type="button" data-action="grant-access">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                      Grant Product Access
                    </button>
                  </div>
                  <div className="filter-bar">
                    <input className="filter-search" id="access-search" type="search" placeholder="Filter by student or product..." aria-label="Filter product access" />
                    <label className="sr-only" htmlFor="access-status-filter">
                      Filter entitlement status
                    </label>
                    <select className="control" id="access-status-filter">
                      <option value="">
                        All statuses
                      </option>
                      <option>
                        Active
                      </option>
                      <option>
                        Expired
                      </option>
                      <option>
                        Revoked
                      </option>
                    </select>
                  </div>
                  <div className="table-wrap">
                    <table className="access-table">
                      <thead>
                        <tr>
                          <th>
                            Student
                          </th>
                          <th>
                            Product
                          </th>
                          <th>
                            Access After Payment
                          </th>
                          <th>
                            Duration
                          </th>
                          <th>
                            Expires
                          </th>
                          <th>
                            Status
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody id="access-rows"></tbody>
                    </table>
                  </div>
                  <p className="section-note">
                    Each selected product creates its own entitlement. Question Bank products created in the Question Bank are available here automatically.
                  </p>
                </section>
                <section className="tab-panel card panel" id="panel-transactions" role="tabpanel" hidden>
                  <div className="panel-heading">
                    <div>
                      <h2>
                        Payment Transactions
                      </h2>
                      <p>
                        Review transaction status and open a payment’s full detail.
                      </p>
                    </div>
                    <button className="button button-secondary" id="export-transactions" type="button">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"></path>
                      </svg>
                      Export
                    </button>
                  </div>
                  <div className="filter-bar">
                    <input className="filter-search" id="transaction-search" type="search" placeholder="Search students, products, transaction IDs..." aria-label="Search transactions" />
                    <label className="sr-only" htmlFor="transaction-status-filter">
                      Filter by transaction status
                    </label>
                    <select className="control" id="transaction-status-filter">
                      <option value="">
                        All statuses
                      </option>
                      <option>
                        Success
                      </option>
                      <option>
                        Pending
                      </option>
                      <option>
                        Failed
                      </option>
                      <option>
                        Refunded
                      </option>
                    </select>
                  </div>
                  <div className="table-wrap">
                    <table className="transaction-table">
                      <thead>
                        <tr>
                          <th>
                            Date
                          </th>
                          <th>
                            Student Name
                          </th>
                          <th>
                            Product
                          </th>
                          <th>
                            Amount
                          </th>
                          <th>
                            Status
                          </th>
                          <th>
                            Transaction ID
                          </th>
                        </tr>
                      </thead>
                      <tbody id="all-transaction-rows"></tbody>
                    </table>
                  </div>
                  <div className="table-footer">
                    <span id="transaction-count"></span>
                    <nav className="pagination" id="transaction-pagination" aria-label="Transaction pages"></nav>
                  </div>
                  <p className="section-note">
                    Click a transaction to review its gateway reference, fee and discount breakdown, payment method, refund history, and related entitlement.
                  </p>
                </section>
                <section className="tab-panel card panel" id="panel-discounts" role="tabpanel" hidden>
                  <div className="panel-heading">
                    <div>
                      <h2>
                        Coupons &amp; Discounts
                      </h2>
                      <p>
                        Manage promotional codes and product-specific offers.
                      </p>
                    </div>
                    <button className="button button-primary" type="button" data-action="create-coupon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                      Create Coupon
                    </button>
                  </div>
                  <div className="table-wrap">
                    <table className="fee-table">
                      <thead>
                        <tr>
                          <th>
                            Coupon Code
                          </th>
                          <th>
                            Offer
                          </th>
                          <th>
                            Product
                          </th>
                          <th>
                            Valid Until
                          </th>
                          <th>
                            Redemptions
                          </th>
                          <th>
                            Status
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody id="coupon-rows"></tbody>
                    </table>
                  </div>
                </section>
                <section className="card access-card" aria-labelledby="access-summary-title">
                  <div className="panel-heading">
                    <div>
                      <h2 id="access-summary-title">
                        Product Access &amp; Permissions
                      </h2>
                      <p>
                        Access duration is set per product; payment verification controls activation.
                      </p>
                    </div>
                    <button className="view-all" type="button" data-tab-jump="access">
                      Manage Access
                    </button>
                  </div>
                  <div className="table-wrap">
                    <table className="access-table">
                      <thead>
                        <tr>
                          <th>
                            Product
                          </th>
                          <th>
                            Access After Payment
                          </th>
                          <th>
                            Duration
                          </th>
                          <th>
                            Expiry Reminders
                          </th>
                          <th>
                            Status
                          </th>
                          <th>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody id="access-summary-rows"></tbody>
                    </table>
                  </div>
                  <p className="section-note">
                    Backend workflow: verify the gateway payment, grant the purchased product only, set expiry, and revoke or restrict access when it expires or is refunded.
                  </p>
                </section>
              </div>
              <aside className="secondary-column" aria-label="Payment quick actions and reports">
                <section className="card quick-card">
                  <div className="panel-heading">
                    <div>
                      <h2>
                        Quick Actions
                      </h2>
                      <p>
                        Common payment administration tasks.
                      </p>
                    </div>
                  </div>
                  <div className="quick-grid">
                    <button className="quick-action" type="button" data-action="create-fee">
                      <span className="quick-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14"></path>
                        </svg>
                      </span>
                      <strong>
                        Create Fee Plan
                      </strong>
                      <span>
                        Add a product and its pricing
                      </span>
                    </button>
                    {" "}
                    <button className="quick-action" type="button" data-action="create-coupon">
                      <span className="quick-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m20.6 13.4-7.2 7.2a2 2 0 0 1-2.8 0L3 13V4h9l8.6 6.6a2 2 0 0 1 0 2.8Z"></path>
                          <circle cx="8" cy="9" r="1.2"></circle>
                        </svg>
                      </span>
                      <strong>
                        Manage Discounts
                      </strong>
                      <span>
                        Create coupons and offers
                      </span>
                    </button>
                    {" "}
                    <button className="quick-action" type="button" data-action="grant-access">
                      <span className="quick-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="10" cy="7" r="4"></circle>
                          <path d="M20 8v6m-3-3h6"></path>
                        </svg>
                      </span>
                      <strong>
                        Product Access
                      </strong>
                      <span>
                        Grant student entitlement
                      </span>
                    </button>
                    {" "}
                    <button className="quick-action" type="button" data-tab-jump="transactions">
                      <span className="quick-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16v16H4zM8 8h8m-8 4h8m-8 4h5"></path>
                        </svg>
                      </span>
                      <strong>
                        View Transactions
                      </strong>
                      <span>
                        Review payment history
                      </span>
                    </button>
                  </div>
                </section>
                <section className="card donut-card">
                  <div className="panel-heading">
                    <div>
                      <h2>
                        Fee Plan Summary
                      </h2>
                      <p id="chart-subtitle">
                        Configured products by fee plan
                      </p>
                    </div>
                    <label className="sr-only" htmlFor="chart-metric">
                      Fee summary chart metric
                    </label>
                    <select className="control select-metric" id="chart-metric">
                      <option value="plans">
                        Fee plans
                      </option>
                      <option value="sales">
                        Sales by product
                      </option>
                      <option value="revenue">
                        Revenue by product
                      </option>
                      <option value="entitlements">
                        Active entitlements
                      </option>
                    </select>
                  </div>
                  <div className="donut-layout">
                    <div className="donut" id="product-donut" role="img" aria-label="Configured product fee plans">
                      <div className="donut-center">
                        <strong id="donut-total">
                          5
                        </strong>
                        <span id="donut-label">
                          Fee plans
                        </span>
                      </div>
                    </div>
                    <ul className="legend-list" id="product-legend"></ul>
                  </div>
                </section>
                <section className="card panel transaction-card">
                  <div className="panel-heading">
                    <div>
                      <h2>
                        Recent Transactions
                      </h2>
                      <p>
                        Latest illustrative payment activity.
                      </p>
                    </div>
                    <button className="view-all" type="button" data-tab-jump="transactions">
                      View All
                    </button>
                  </div>
                  <div className="table-wrap">
                    <table className="transaction-table">
                      <thead>
                        <tr>
                          <th>
                            Date
                          </th>
                          <th>
                            Student Name
                          </th>
                          <th>
                            Product
                          </th>
                          <th>
                            Amount
                          </th>
                          <th>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody id="recent-transaction-rows"></tbody>
                    </table>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </main>
      </div>
      <div className="modal-backdrop" id="fee-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="fee-modal-title">
          <div className="modal-header">
            <div>
              <h2 id="fee-modal-title">
                Create Fee Plan
              </h2>
              <p id="fee-modal-description">
                Name the plan, add one or more products, and configure its price and access terms.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form id="fee-form">
            <div className="form-grid">
              <div className="form-field full">
                <label htmlFor="fee-plan-name">
                  Plan Name *
                </label>
                <input className="form-control" id="fee-plan-name" name="planName" maxLength="60" required placeholder="e.g. PLAN A" />
              </div>
              <div className="form-field full">
                <label htmlFor="fee-product">
                  Add Product
                </label>
                <div className="plan-product-picker">
                  <select className="form-control" id="fee-product">
                    <option value="">
                      Choose a product to add
                    </option>
                  </select>
                  <button className="button button-secondary" id="add-plan-product" type="button">
                    ＋ Add Product
                  </button>
                </div>
                <div className="plan-product-chips" id="plan-product-chips" aria-live="polite"></div>
                <span className="form-hint">
                  Products with subjects let you include all subjects or choose specific ones.
                </span>
              </div>
              <div className="form-field">
                <label htmlFor="fee-base">
                  Base fee (₹) *
                </label>
                <div className="input-prefix">
                  <span>
                    ₹
                  </span>
                  <input className="form-control" id="fee-base" name="baseFee" type="number" min="0" step="0.01" defaultValue="14999" required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="fee-discount">
                  Discount (%)
                </label>
                <input className="form-control" id="fee-discount" name="discount" type="number" min="0" max="100" step="0.01" defaultValue="10" />
              </div>
              <div className="form-field">
                <label htmlFor="fee-validity">
                  Product validity (days) *
                </label>
                <input className="form-control" id="fee-validity" name="validity" type="number" min="1" step="1" defaultValue="365" required />
              </div>
              <div className="form-field">
                <label htmlFor="fee-mode">
                  Payment model *
                </label>
                <select className="form-control" id="fee-mode" name="paymentMode" required>
                  <option>
                    One-time payment
                  </option>
                  <option>
                    Installments
                  </option>
                  <option>
                    Subscription
                  </option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="fee-status">
                  Plan status
                </label>
                <select className="form-control" id="fee-status" name="status">
                  <option>
                    Published
                  </option>
                  <option>
                    Draft
                  </option>
                </select>
              </div>
            </div>
            <div className="calculation-box">
              <div className="calculation-row">
                <span>
                  Base fee
                </span>
                <strong id="fee-preview-base">
                  ₹14,999.00
                </strong>
              </div>
              <div className="calculation-row">
                <span>
                  Discount amount
                </span>
                <strong id="fee-preview-discount">
                  −₹1,499.90
                </strong>
              </div>
              <div className="calculation-row total">
                <span>
                  Final fee before taxes
                </span>
                <strong id="fee-preview-final">
                  ₹13,499
                </strong>
              </div>
            </div>
            <p className="section-note">
              The preview rounds the final price to the nearest rupee. Checkout should use a consistent server-side rounding and tax policy.
            </p>
            <div className="modal-footer">
              <button className="button button-secondary" type="button" data-close-modal="">
                Cancel
              </button>
              <button className="button button-primary" id="fee-save-button" type="submit">
                Create Fee Plan
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="modal-backdrop" id="preview-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="preview-title">
          <div className="modal-header">
            <div>
              <h2 id="preview-title">
                Fee Plan Preview
              </h2>
              <p>
                Illustrative checkout price before applicable taxes.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="details-list" id="fee-preview-details"></div>
          <div className="calculation-box">
            <div className="calculation-row">
              <span>
                Base fee
              </span>
              <strong id="preview-base"></strong>
            </div>
            <div className="calculation-row">
              <span>
                Discount
              </span>
              <strong id="preview-discount"></strong>
            </div>
            <div className="calculation-row total">
              <span>
                Final fee before taxes
              </span>
              <strong id="preview-final"></strong>
            </div>
          </div>
          <div className="info-note">
            Publishing a fee plan here does not create backend pricing or checkout access. Implement server-side plan storage, validation, and payment entitlements before taking payments.
          </div>
          <div className="modal-footer">
            <button className="button button-secondary" type="button" data-close-modal="">
              Close
            </button>
          </div>
        </section>
      </div>
      <div className="modal-backdrop" id="transaction-modal" role="presentation">
        <section className="modal modal-wide" role="dialog" aria-modal="true" aria-labelledby="transaction-title">
          <div className="modal-header">
            <div>
              <h2 id="transaction-title">
                Transaction Details
              </h2>
              <p>
                Illustrative payment record. Verify payment status with the gateway before granting access.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="details-list" id="transaction-details"></div>
          <div className="calculation-box" id="transaction-breakdown"></div>
          <h3 style={{ margin: "15px 0 8px", fontSize: "12px" }}>
            Related product entitlement
          </h3>
          <div className="details-list" id="transaction-entitlement"></div>
          <div className="info-note">
            A verified product payment grants that product; a verified plan payment grants every product included in that plan. Refunds and expiries should follow the backend access policy.
          </div>
          <div className="modal-footer">
            <button className="button button-secondary" type="button" data-close-modal="">
              Close
            </button>
          </div>
        </section>
      </div>
      <div className="modal-backdrop" id="access-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="access-modal-title">
          <div className="modal-header">
            <div>
              <h2 id="access-modal-title">
                Grant Course Product Access
              </h2>
              <p>
                Choose a complete plan or select any number of individual products. Question Bank products are available here automatically.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form id="access-form">
            <div className="form-grid">
              <div className="form-field full">
                <label htmlFor="access-student">
                  Student *
                </label>
                <select className="form-control" id="access-student" name="student" required></select>
              </div>
              <div className="form-field full">
                <span className="form-field-label">
                  Assign a complete plan
                </span>
                <div className="product-choice-list" id="access-plan-options"></div>
                <span className="form-hint">
                  Selecting a plan grants every product included in that plan.
                </span>
              </div>
              <div className="form-field full">
                <span className="form-field-label">
                  Individual products (optional)
                </span>
                <div className="product-choice-list" id="access-product-options"></div>
                <span className="form-hint">
                  There is no five-product limit. Select any combination of products and plans.
                </span>
              </div>
              <div className="form-field">
                <label htmlFor="access-start">
                  Activation date *
                </label>
                <input className="form-control" id="access-start" name="start" type="date" required />
              </div>
              <div className="form-field">
                <label htmlFor="access-validity">
                  Validity (days) *
                </label>
                <input className="form-control" id="access-validity" name="validity" type="number" min="1" step="1" required />
              </div>
            </div>
            <div className="confirm-warning" style={{ marginTop: "12px" }}>
              This is a mockup action and does not grant live student access. In production, issue access only after authorization and verified payment or documented admin approval.
            </div>
            <div className="modal-footer">
              <button className="button button-secondary" type="button" data-close-modal="">
                Cancel
              </button>
              <button className="button button-primary" type="submit">
                Grant Preview Access
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="modal-backdrop" id="coupon-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="coupon-modal-title">
          <div className="modal-header">
            <div>
              <h2 id="coupon-modal-title">
                Create Coupon
              </h2>
              <p>
                Add an illustrative product-specific discount code.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form id="coupon-form">
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="coupon-code">
                  Coupon code *
                </label>
                <input className="form-control" id="coupon-code" name="code" maxLength="24" pattern={"[A-Za-z0-9_\\-]+"} required placeholder="FMGE10" />
              </div>
              <div className="form-field">
                <label htmlFor="coupon-discount">
                  Discount (%) *
                </label>
                <input className="form-control" id="coupon-discount" name="discount" type="number" min="1" max="100" required defaultValue="10" />
              </div>
              <div className="form-field full">
                <label htmlFor="coupon-product">
                  Applicable product *
                </label>
                <select className="form-control" id="coupon-product" name="product" required></select>
              </div>
              <div className="form-field">
                <label htmlFor="coupon-expiry">
                  Expiry date *
                </label>
                <input className="form-control" id="coupon-expiry" name="expiry" type="date" required />
              </div>
              <div className="form-field">
                <label htmlFor="coupon-limit">
                  Redemption limit
                </label>
                <input className="form-control" id="coupon-limit" name="limit" type="number" min="1" defaultValue="100" />
              </div>
            </div>
            <div className="info-note">
              Validate coupon rules, stacking, expiration, and redemption limits on your backend at checkout.
            </div>
            <div className="modal-footer">
              <button className="button button-secondary" type="button" data-close-modal="">
                Cancel
              </button>
              <button className="button button-primary" type="submit">
                Create Coupon
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="toast" id="toast" role="status" aria-live="polite"></div>
    </div>
  );
}

export default memo(PaymentsPage);
