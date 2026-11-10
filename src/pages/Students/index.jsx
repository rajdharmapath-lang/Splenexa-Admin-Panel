import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function StudentsPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-students" ref={ref}>
      <main className="main-area">
        <header className="topbar">
          <label className="search-wrap" aria-label="Search students and admin data">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-4-4"></path>
            </svg>
            {" "}
            <input className="top-search" id="global-search" type="search" placeholder="Search students, topics, videos, payments..." autoComplete="off" />
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
            {" "}
            <svg className="profile-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m7 10 5 5 5-5"></path>
            </svg>
          </button>
        </header>
        <div className="page-content">
          <section id="students-home" aria-labelledby="students-title">
            <div className="page-heading">
              <div>
                <div className="title-row">
                  <span className="title-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="10" cy="7" r="4"></circle>
                      <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </span>
                  <div>
                    <div className="eyebrow">
                      Student management
                    </div>
                    <h1 id="students-title">
                      Students
                    </h1>
                  </div>
                </div>
                <p>
                  Manage student accounts, course access, and learning activity.
                </p>
              </div>
              <div className="heading-actions">
                <label className="sr-only" htmlFor="list-date-range">
                  Registration date range
                </label>
                {" "}
                <select className="control date-range" id="list-date-range">
                  <option value="all">
                    All registration dates
                  </option>
                  <option value="30">
                    Registered in 30 days
                  </option>
                  <option value="90">
                    Registered in 90 days
                  </option>
                </select>
              </div>
            </div>
            <p className="mock-notice">
              Illustrative mockup data only — student counts, names, and contact details are not actual records.
            </p>
            <div className="summary-grid" aria-label="Student summary">
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="10" cy="7" r="4"></circle>
                    <path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Total Students
                  </div>
                  <div className="summary-value">
                    3,482
                  </div>
                  <div className="summary-meta positive">
                    ↑ 12% +372 this month
                  </div>
                </div>
              </article>
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 17l5-5-5-5m5 5H3m11-9h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Active Logins
                  </div>
                  <div className="summary-value">
                    2,916
                  </div>
                  <div className="summary-meta positive">
                    ↑ 18% +447 this month
                  </div>
                </div>
              </article>
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="8" r="4"></circle>
                    <path d="M3 21v-2a6 6 0 0 1 12 0v2m3-11v6m-3-3h6"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    New Registrations
                  </div>
                  <div className="summary-value">
                    642
                  </div>
                  <div className="summary-meta positive">
                    ↑ 16% +89 this month
                  </div>
                </div>
              </article>
              <article className="card summary-card">
                <span className="summary-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 9 10-5 10 5-10 5L2 9Z"></path>
                    <path d="M6 11v5c3.5 3 8.5 3 12 0v-5m4-2v7"></path>
                  </svg>
                </span>
                <div>
                  <div className="summary-label">
                    Completed Courses
                  </div>
                  <div className="summary-value">
                    1,238
                  </div>
                  <div className="summary-meta positive">
                    ↑ 22% +225 this month
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
                    Inactive Students
                  </div>
                  <div className="summary-value">
                    284
                  </div>
                  <div className="summary-meta negative">
                    ↓ 6% -18 this month
                  </div>
                </div>
              </article>
            </div>
            <section className="card filter-bar" aria-label="Filter student records">
              <label className="search-control" aria-label="Search by name, email or phone">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="m20 20-4-4"></path>
                </svg>
                {" "}
                <input className="filter-search" id="student-search" type="search" placeholder="Search by name, email or phone..." autoComplete="off" />
              </label>
              {" "}
              <label className="sr-only" htmlFor="course-filter">
                Filter by course
              </label>
              {" "}
              <select className="control" id="course-filter">
                <option value="">
                  All Courses
                </option>
                <option>
                  FMGE Full Course
                </option>
                <option>
                  Test Series
                </option>
                <option>
                  Study Material
                </option>
                <option>
                  Live Classes
                </option>
              </select>
              {" "}
              <label className="sr-only" htmlFor="status-filter">
                Filter by account status
              </label>
              {" "}
              <select className="control" id="status-filter">
                <option value="">
                  All Statuses
                </option>
                <option>
                  Active
                </option>
                <option>
                  Inactive
                </option>
                <option>
                  Pending
                </option>
              </select>
              {" "}
              <label className="sr-only" htmlFor="login-filter">
                Filter by last login
              </label>
              {" "}
              <select className="control" id="login-filter">
                <option value="">
                  Any Last Login
                </option>
                <option value="1">
                  Within 24 hours
                </option>
                <option value="7">
                  Within 7 days
                </option>
                <option value="30">
                  Within 30 days
                </option>
                <option value="never">
                  Never logged in
                </option>
              </select>
              {" "}
              <button className="button button-secondary button-reset" id="reset-filters" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7v5h-5M4 17v-5h5"></path>
                  <path d="M5.5 9a7 7 0 0 1 11.7-2L20 12M4 12l2.8 5a7 7 0 0 0 11.7-2"></path>
                </svg>
                Reset
              </button>
              {" "}
              <button className="button button-primary button-add" id="add-student-button" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                Add Student
              </button>
            </section>
            <section className="card table-card" aria-labelledby="student-list-title">
              <div className="table-heading">
                <div>
                  <h2 id="student-list-title">
                    Student List
                  </h2>
                  <p id="selection-label">
                    Browse, manage, and review student accounts.
                  </p>
                </div>
                <div className="table-heading-actions">
                  <button className="button button-secondary" id="export-button" type="button">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5 5 5 5-5m-5 5V3"></path>
                    </svg>
                    Export
                  </button>
                </div>
              </div>
              <div className="table-wrap">
                <table className="student-table">
                  <thead>
                    <tr>
                      <th className="check-cell">
                        <input id="select-all" type="checkbox" aria-label="Select all students on this page" />
                      </th>
                      <th>
                        #
                      </th>
                      <th>
                        Student Name
                      </th>
                      <th>
                        Email
                      </th>
                      <th>
                        Phone
                      </th>
                      <th>
                        Enrolled Course
                      </th>
                      <th>
                        Registration Date
                      </th>
                      <th>
                        Last Login
                      </th>
                      <th>
                        Status
                      </th>
                      <th>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody id="student-rows"></tbody>
                </table>
              </div>
              <div className="table-footer">
                <div className="table-count" id="table-count" aria-live="polite"></div>
                <nav className="pagination" id="pagination" aria-label="Student list pages"></nav>
              </div>
            </section>
          </section>
          <section id="performance-page" hidden aria-labelledby="performance-title">
            <div className="page-heading performance-heading">
              <div>
                <div className="title-row">
                  <button className="back-button" id="back-to-students" type="button" aria-label="Back to students">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6M9 12h12"></path>
                    </svg>
                  </button>
                  <div>
                    <div className="eyebrow">
                      Student learning analytics
                    </div>
                    <h1 id="performance-title">
                      Student Performance
                    </h1>
                  </div>
                </div>
                <p>
                  Review course progress, learning activity, and performance history.
                </p>
              </div>
              <div className="heading-actions">
                <label className="sr-only" htmlFor="performance-range">
                  Performance date range
                </label>
                {" "}
                <select className="control date-range" id="performance-range" defaultValue="7">
                  <option value="1">
                    Today
                  </option>
                  <option value="7">
                    Last 7 days
                  </option>
                  <option value="30">
                    Last 30 days
                  </option>
                  <option value="custom">
                    Custom period
                  </option>
                </select>
              </div>
            </div>
            <div className="custom-dates" id="performance-custom-dates" hidden style={{ justifyContent: "flex-end", marginBottom: "10px" }}>
              <label className="sr-only" htmlFor="performance-from">
                Performance from date
              </label>
              <input className="date-input" id="performance-from" type="date" />
              {" "}
              <label className="sr-only" htmlFor="performance-to">
                Performance to date
              </label>
              <input className="date-input" id="performance-to" type="date" />
            </div>
            <section className="card student-overview" aria-label="Selected student overview">
              <div className="profile-summary">
                <span className="avatar" id="performance-avatar">
                  AS
                </span>
                <div>
                  <h2 id="performance-name">
                    Aarav Sharma
                  </h2>
                  <span className="status-pill active" id="performance-status">
                    Active
                  </span>
                  <p id="performance-email">
                    student@example.com
                  </p>
                  <label className="sr-only" htmlFor="performance-course">
                    Course performance
                  </label>
                  <select className="performance-course-select" id="performance-course"></select>
                </div>
              </div>
              <div className="overview-metric">
                <div className="metric-label">
                  Course Progress
                </div>
                <div className="course-overview">
                  <div className="progress-ring" id="course-ring" style={{ "--progress": "68" }}>
                    <span id="course-percent">
                      68%
                    </span>
                  </div>
                  <div>
                    <div className="metric-value" id="lessons-completed" style={{ margin: "0", fontSize: "13px" }}>
                      68 of 100
                    </div>
                    <div className="metric-sub">
                      lessons completed
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-metric">
                <div className="metric-label">
                  Videos Watched
                </div>
                <div className="metric-value">
                  <span id="videos-completed">
                    42
                  </span>
                </div>
                <div className="metric-sub">
                  of
                  {" "}
                  <span id="videos-total">
                    58
                  </span>
                  {" "}
                  videos completed
                </div>
              </div>
              <div className="overview-metric">
                <div className="metric-label">
                  Total Watch Hours
                </div>
                <div className="metric-value">
                  <span id="watch-hours">
                    18.5
                  </span>
                  {" "}
                  hrs
                </div>
                <div className="metric-sub">
                  of
                  {" "}
                  <span id="available-hours">
                    40
                  </span>
                  {" "}
                  hrs available
                </div>
              </div>
              <div className="overview-metric">
                <div className="metric-label">
                  Last Login
                </div>
                <div className="metric-value" id="last-login-date" style={{ fontSize: "12px" }}>
                  30 Apr 2024
                </div>
                <div className="metric-sub" id="last-login-time">
                  10:24 AM
                </div>
              </div>
              <div className="performance-actions">
                <button className="button button-secondary" id="view-student-profile" type="button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M5 21v-2a7 7 0 0 1 14 0v2"></path>
                  </svg>
                  View Full Profile
                </button>
              </div>
            </section>
            <nav className="card tabs" role="tablist" aria-label="Student performance sections">
              <button className="tab-button" id="tab-overview" type="button" role="tab" data-tab="overview" aria-controls="performance-overview" aria-selected="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1v-9Z"></path>
                </svg>
                Overview
              </button>
              {" "}
              <button className="tab-button" id="tab-sessions" type="button" role="tab" data-tab="sessions" aria-controls="performance-detail" aria-selected="false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="5" width="18" height="16" rx="2"></rect>
                  <path d="M16 3v4M8 3v4M3 10h18"></path>
                </svg>
                Attended Sessions
              </button>
              {" "}
              <button className="tab-button" id="tab-videos" type="button" role="tab" data-tab="videos" aria-controls="performance-detail" aria-selected="false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="13" height="14" rx="2"></rect>
                  <path d="m16 10 5-3v10l-5-3"></path>
                  <path d="m8 10 4 2-4 2v-4Z" fill="currentColor"></path>
                </svg>
                Completed Videos
              </button>
              {" "}
              <button className="tab-button" id="tab-report" type="button" role="tab" data-tab="report" aria-controls="performance-report" aria-selected="false">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 20V10m5 10V4m5 16v-7m5 7V7"></path>
                </svg>
                Performance Report
              </button>
            </nav>
            <div id="performance-overview" role="tabpanel" aria-labelledby="tab-overview">
              <div className="perf-grid">
                <article className="card perf-card">
                  <div className="card-title-row">
                    <h3>
                      Course Progress
                    </h3>
                    <button className="text-link" type="button" data-tab-jump="report">
                      View All Subjects
                    </button>
                  </div>
                  <div className="subject-list" id="subject-progress-list"></div>
                </article>
                <article className="card perf-card">
                  <div className="card-title-row">
                    <h3>
                      Video Watch Summary
                    </h3>
                  </div>
                  <div className="video-breakdown">
                    <div className="video-donut" id="video-donut" role="img" aria-label="Video completion summary">
                      <div className="donut-center">
                        <strong id="donut-completed">
                          42
                        </strong>
                        <span>
                          Videos completed
                        </span>
                      </div>
                    </div>
                    <ul className="legend-list">
                      <li className="legend-row">
                        <span className="legend-dot"></span>
                        <span>
                          Completed
                        </span>
                        <strong id="video-completed-count">
                          42
                        </strong>
                      </li>
                      <li className="legend-row">
                        <span className="legend-dot progress"></span>
                        <span>
                          In Progress
                        </span>
                        <strong id="video-progress-count">
                          8
                        </strong>
                      </li>
                      <li className="legend-row">
                        <span className="legend-dot not-started"></span>
                        <span>
                          Not Started
                        </span>
                        <strong id="video-not-started-count">
                          8
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="total-videos">
                    <span>
                      Total videos available
                    </span>
                    <strong id="video-total-summary">
                      58
                    </strong>
                  </div>
                </article>
                <article className="card perf-card">
                  <div className="card-title-row">
                    <h3>
                      Top Watched Videos
                    </h3>
                    <button className="text-link" type="button" data-tab-jump="videos">
                      View All
                    </button>
                  </div>
                  <div className="video-list" id="top-videos"></div>
                </article>
              </div>
              <div className="bottom-grid">
                <article className="card sessions-card">
                  <div className="card-title-row">
                    <h3>
                      Attended Sessions
                    </h3>
                    <button className="text-link" type="button" data-tab-jump="sessions">
                      View All
                    </button>
                  </div>
                  <div className="table-wrap">
                    <table className="sessions-table">
                      <thead>
                        <tr>
                          <th>
                            Date
                          </th>
                          <th>
                            Session Name
                          </th>
                          <th>
                            Type
                          </th>
                          <th>
                            Duration
                          </th>
                          <th>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody id="overview-sessions"></tbody>
                    </table>
                  </div>
                  <div className="info-note">
                    Learning activity is illustrative. Actual watch time and completion require playback tracking and backend event records.
                  </div>
                </article>
                <article className="card score-card">
                  <div className="card-title-row">
                    <h3>
                      Performance Score
                    </h3>
                    <button className="text-link" type="button" data-tab-jump="report">
                      View Detailed Report
                    </button>
                  </div>
                  <div className="score-overview">
                    <div className="video-donut score-donut" id="score-donut">
                      <div className="donut-center">
                        <strong id="overall-score">
                          72%
                        </strong>
                        <span>
                          Overall Score
                        </span>
                      </div>
                    </div>
                    <div className="score-list" id="score-list"></div>
                  </div>
                </article>
              </div>
            </div>
            <section id="performance-detail" role="tabpanel" aria-labelledby="tab-sessions tab-videos" hidden>
              <div className="card perf-card" style={{ marginTop: "12px" }}>
                <div className="activity-toolbar">
                  <div>
                    <h3 id="activity-title" style={{ margin: "0", fontSize: "13px" }}>
                      Attended Sessions
                    </h3>
                    <div className="metric-sub">
                      Activity recorded for this student during the selected period.
                    </div>
                  </div>
                  <div className="activity-tabs" id="activity-tabs">
                    <button type="button" data-activity-range="1" aria-pressed="false">
                      Day
                    </button>
                    {" "}
                    <button type="button" data-activity-range="7" aria-pressed="true">
                      Week
                    </button>
                    {" "}
                    <button type="button" data-activity-range="30" aria-pressed="false">
                      Month
                    </button>
                    {" "}
                    <button type="button" data-activity-range="custom" aria-pressed="false">
                      Custom
                    </button>
                  </div>
                </div>
                <div className="custom-dates" id="activity-custom-dates" hidden style={{ marginBottom: "12px" }}>
                  <label className="sr-only" htmlFor="activity-from">
                    Activity from date
                  </label>
                  <input className="date-input" id="activity-from" type="date" />
                  {" "}
                  <label className="sr-only" htmlFor="activity-to">
                    Activity to date
                  </label>
                  <input className="date-input" id="activity-to" type="date" />
                </div>
                <div className="table-wrap">
                  <table className="sessions-table">
                    <thead id="activity-head"></thead>
                    <tbody id="activity-rows"></tbody>
                  </table>
                </div>
                <div className="empty-row" id="activity-empty" hidden style={{ padding: "22px", textAlign: "center", color: "#7892a9" }}>
                  No activity recorded for this date range.
                </div>
              </div>
            </section>
            <section id="performance-report" role="tabpanel" aria-labelledby="tab-report" hidden>
              <div className="card perf-card" style={{ marginTop: "12px" }}>
                <div className="card-title-row">
                  <h3>
                    Performance Report
                  </h3>
                  <span className="metric-sub">
                    Subject-wise progress and assessment summary
                  </span>
                </div>
                <div className="report-summary">
                  <div className="report-tile">
                    <span>
                      Overall score
                    </span>
                    <strong id="report-score">
                      72%
                    </strong>
                  </div>
                  <div className="report-tile">
                    <span>
                      Lessons completed
                    </span>
                    <strong id="report-lessons">
                      68 / 100
                    </strong>
                  </div>
                  <div className="report-tile">
                    <span>
                      Attended sessions
                    </span>
                    <strong id="report-sessions">
                      18
                    </strong>
                  </div>
                </div>
                <div className="subject-list" id="report-subject-list"></div>
                <div className="info-note">
                  Performance figures are sample UI data. Connect assessment results and student activity records for an accurate report.
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
      <div className="modal-backdrop" id="student-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-header">
            <div>
              <h2 id="modal-title">
                Add Student
              </h2>
              <p id="modal-description">
                Create a student profile for the admin panel.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form id="student-form">
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="form-name">
                  Full name *
                </label>
                <input className="form-control" id="form-name" name="name" required maxLength="80" placeholder="e.g. Ananya Rao" />
              </div>
              <div className="form-field">
                <label htmlFor="form-email">
                  Email address *
                </label>
                <input className="form-control" id="form-email" name="email" type="email" required maxLength="120" placeholder="student@example.com" />
              </div>
              <div className="form-field">
                <label htmlFor="form-phone">
                  Phone number *
                </label>
                <input className="form-control" id="form-phone" name="phone" type="tel" required maxLength="20" placeholder="+91 98765 43210" />
              </div>
              <div className="form-field">
                <label htmlFor="form-course">
                  Enrolled course *
                </label>
                <select className="form-control" id="form-course" name="course" required>
                  <option value="">
                    Choose a course
                  </option>
                  <option>
                    FMGE Full Course
                  </option>
                  <option>
                    Test Series
                  </option>
                  <option>
                    Study Material
                  </option>
                  <option>
                    Live Classes
                  </option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="form-status">
                  Account status
                </label>
                <select className="form-control" id="form-status" name="status">
                  <option>
                    Active
                  </option>
                  <option>
                    Inactive
                  </option>
                  <option>
                    Pending
                  </option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="form-registration">
                  Registration date
                </label>
                <input className="form-control" id="form-registration" name="registrationDate" type="date" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="button button-secondary" type="button" data-close-modal="">
                Cancel
              </button>
              <button className="button button-primary" id="save-student" type="submit">
                Add Student
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="modal-backdrop" id="details-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="details-title">
          <div className="modal-header">
            <div>
              <h2 id="details-title">
                Student Profile
              </h2>
              <p>
                Illustrative student account details.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="details-grid" id="student-details"></div>
          <div className="modal-footer">
            <button className="button button-secondary" type="button" data-close-modal="">
              Close
            </button>
            <button className="button button-primary" id="details-performance" type="button">
              View Performance
            </button>
          </div>
        </section>
      </div>
      <div className="modal-backdrop" id="subscription-history-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="subscription-history-title">
          <div className="modal-header">
            <div>
              <h2 id="subscription-history-title">
                Subscription History
              </h2>
              <p id="subscription-history-description">
                Plans and course access for this student.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="table-wrap">
            <table className="history-table">
              <thead>
                <tr>
                  <th>
                    Course
                  </th>
                  <th>
                    Plan
                  </th>
                  <th>
                    Start date
                  </th>
                  <th>
                    End date
                  </th>
                  <th>
                    Amount
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody id="subscription-history-rows"></tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button className="button button-secondary" type="button" data-close-modal="">
              Close
            </button>
            <button className="button button-primary" id="history-add-subscription" type="button">
              Add Manual Subscription
            </button>
          </div>
        </section>
      </div>
      <div className="modal-backdrop" id="manual-subscription-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="manual-subscription-title">
          <div className="modal-header">
            <div>
              <h2 id="manual-subscription-title">
                Add Manual Subscription
              </h2>
              <p id="manual-subscription-description">
                Grant course access to a student.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form id="manual-subscription-form">
            <div className="form-grid">
              <div className="form-field full">
                <label htmlFor="subscription-course">
                  Course *
                </label>
                <select className="form-control" id="subscription-course" name="course" required>
                  <option value="">
                    Choose a course
                  </option>
                  <option>
                    FMGE Full Course
                  </option>
                  <option>
                    Test Series
                  </option>
                  <option>
                    Study Material
                  </option>
                  <option>
                    Live Classes
                  </option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="subscription-plan">
                  Plan duration *
                </label>
                <select className="form-control" id="subscription-plan" name="plan" required defaultValue="12">
                  <option value="3">
                    3 months
                  </option>
                  <option value="6">
                    6 months
                  </option>
                  <option value="12">
                    12 months
                  </option>
                  <option value="lifetime">
                    Lifetime access
                  </option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="subscription-amount">
                  Amount (₹)
                </label>
                <input className="form-control" id="subscription-amount" name="amount" type="number" min="0" step="1" defaultValue="0" required />
              </div>
              <div className="form-field">
                <label htmlFor="subscription-start">
                  Start date *
                </label>
                <input className="form-control" id="subscription-start" name="startDate" type="date" required />
              </div>
              <div className="form-field">
                <label htmlFor="subscription-end">
                  End date
                </label>
                <input className="form-control" id="subscription-end" name="endDate" type="date" />
                <span className="form-hint">
                  Calculated from the selected plan. Lifetime plans have no end date.
                </span>
              </div>
            </div>
            <div className="confirm-warning">
              This is a UI preview. No payment is collected and no account access is changed on a server.
            </div>
            <div className="modal-footer">
              <button className="button button-secondary" type="button" data-close-modal="">
                Cancel
              </button>
              <button className="button button-primary" type="submit">
                Add Subscription
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="modal-backdrop" id="reset-course-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="reset-course-title">
          <div className="modal-header">
            <div>
              <h2 id="reset-course-title">
                Reset Course Progress
              </h2>
              <p id="reset-course-description">
                Choose which course to restart for this student.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="form-field">
            <label htmlFor="reset-course-select">
              Course to reset
            </label>
            <select className="form-control" id="reset-course-select"></select>
          </div>
          <div className="confirm-warning">
            This clears the selected course’s progress, completed and in-progress videos, watch time, and scores so the student can start fresh. Course enrollment and subscription access are kept.
          </div>
          <div className="modal-footer">
            <button className="button button-secondary" type="button" data-close-modal="">
              Cancel
            </button>
            <button className="button button-danger" id="confirm-reset-course" type="button">
              Reset Progress
            </button>
          </div>
        </section>
      </div>
      <div className="modal-backdrop" id="delete-student-modal" role="presentation">
        <section className="modal" role="dialog" aria-modal="true" aria-labelledby="delete-student-title">
          <div className="modal-header">
            <div>
              <h2 id="delete-student-title">
                Delete Student
              </h2>
              <p>
                Confirm this action before removing the student.
              </p>
            </div>
            <button className="close-button" type="button" data-close-modal="" aria-label="Close dialog">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m18 6-12 12M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <p className="confirm-message" id="delete-student-message"></p>
          <div className="confirm-warning">
            This only removes the illustrative record from this page session. A real application should confirm the action on the server and apply your data-retention policy.
          </div>
          <div className="modal-footer">
            <button className="button button-secondary" type="button" data-close-modal="">
              Cancel
            </button>
            <button className="button button-danger" id="confirm-delete-student" type="button">
              Delete Student
            </button>
          </div>
        </section>
      </div>
      <div className="toast" id="toast" role="status" aria-live="polite"></div>
    </div>
  );
}

export default memo(StudentsPage);
