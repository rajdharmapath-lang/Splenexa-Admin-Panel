import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function NotificationsPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-notifications" ref={ref}>
      <div className="app">
        <div className="main">
          <header className="topbar">
            <div className="search">
              <i className="bi bi-search"></i>
              <input placeholder="Search students, topics, videos, payments..." />
            </div>
            <div className="top-r">
              <div className="bell">
                <i className="bi bi-bell"></i>
                <span>
                  3
                </span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="avatar">
                  A
                </div>
                <div className="who">
                  <b>
                    Admin
                  </b>
                  <small>
                    Super Admin
                  </small>
                </div>
                <i className="bi bi-chevron-down ms-2"></i>
              </div>
            </div>
          </header>
          <div className="content">
            <div className="page-head">
              <i className="bi bi-bell-fill"></i>
              <div>
                <h1>
                  Notifications
                </h1>
                <p>
                  Send and manage notifications for students and users.
                </p>
              </div>
              <div className="daterange">
                <i className="bi bi-calendar3"></i>
                01 Apr 2024 - 30 Apr 2024
                <i className="bi bi-chevron-down"></i>
              </div>
            </div>
            <section className="stats">
              <div className="stat">
                <div className="ic">
                  <i className="bi bi-send-fill"></i>
                </div>
                <small>
                  Total Sent
                </small>
                <strong>
                  1,248
                </strong>
                <div className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  12%
                  {" "}
                  <span>
                    vs last month
                  </span>
                </div>
              </div>
              <div className="stat">
                <div className="ic">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <small>
                  Delivered
                </small>
                <strong>
                  1,203
                </strong>
                <div className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  15%
                  {" "}
                  <span>
                    vs last month
                  </span>
                </div>
              </div>
              <div className="stat">
                <div className="ic">
                  <i className="bi bi-eye-fill"></i>
                </div>
                <small>
                  Opened
                </small>
                <strong>
                  892
                </strong>
                <div className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  18%
                  {" "}
                  <span>
                    vs last month
                  </span>
                </div>
              </div>
              <div className="stat">
                <div className="ic">
                  <i className="bi bi-people-fill"></i>
                </div>
                <small>
                  Active Subscribers
                </small>
                <strong>
                  2,916
                </strong>
                <div className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  22%
                  {" "}
                  <span>
                    vs last month
                  </span>
                </div>
              </div>
            </section>
            <div className="cols">
              <section className="panel">
                <div className="tabs">
                  <a href="#" className="active">
                    <i className="bi bi-bell-fill"></i>
                    All Notifications
                  </a>
                  {" "}
                  <a href="#">
                    <i className="bi bi-camera-video-fill"></i>
                    Live Class
                  </a>
                  {" "}
                  <a href="#">
                    <i className="bi bi-calendar-check"></i>
                    Daily Practice
                  </a>
                  {" "}
                  <a href="#">
                    <i className="bi bi-file-earmark-text-fill"></i>
                    New Content
                  </a>
                  {" "}
                  <a href="#">
                    <i className="bi bi-gear-fill"></i>
                    System
                  </a>
                </div>
                <div className="filters">
                  <div className="f-search">
                    <i className="bi bi-search"></i>
                    <input placeholder="Search notification title or content..." />
                  </div>
                  <div className="sel">
                    All Types
                    {" "}
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <div className="sel w2">
                    All Status
                    {" "}
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <div className="sel" style={{ minWidth: "100px", borderColor: "#e3eff6", color: "#aab" }}>
                    <span></span>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <div className="sel" style={{ minWidth: "0", gap: "10px" }}>
                    <i className="bi bi-calendar3"></i>
                    Select Date Range
                  </div>
                  <button className="btn-create" id="create-notification-button" type="button">
                    <i className="bi bi-plus-lg"></i>
                    Create Notification
                  </button>
                </div>
                <div className="table-wrap">
                  <table className="nt">
                    <thead>
                      <tr>
                        <th style={{ width: "34px", textAlign: "center" }}>
                          <input type="checkbox" />
                        </th>
                        <th style={{ width: "30px" }}>
                          #
                        </th>
                        <th style={{ minWidth: "210px" }}>
                          Title
                          {" "}
                          <i className="bi bi-chevron-down ms-1"></i>
                        </th>
                        <th>
                          Type
                        </th>
                        <th>
                          Audience
                        </th>
                        <th>
                          Scheduled Date
                        </th>
                        <th>
                          Status
                        </th>
                        <th>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          1
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#1f7bf0" }}>
                              <i className="bi bi-camera-video-fill"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                Live Class Reminder
                              </b>
                              <span>
                                Your live class on Anatomy starts soon...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-live">
                            Live Class
                          </span>
                        </td>
                        <td>
                          All Students
                        </td>
                        <td>
                          30 Apr 2024
                          <br />
                          07:00 PM
                        </td>
                        <td>
                          <span className="st s-sent">
                            Sent
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#7c4dff" }}>
                              <i className="bi bi-calendar-check"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                Daily Practice Alert
                              </b>
                              <span>
                                Complete your daily practice for better...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-daily">
                            Daily Practice
                          </span>
                        </td>
                        <td>
                          All Students
                        </td>
                        <td>
                          29 Apr 2024
                          <br />
                          09:00 AM
                        </td>
                        <td>
                          <span className="st s-sent">
                            Sent
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          3
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#14c2b0" }}>
                              <i className="bi bi-file-earmark-text-fill"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                New Study Material
                              </b>
                              <span>
                                Biochemistry PDF is now available...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-new">
                            New Content
                          </span>
                        </td>
                        <td>
                          All Students
                        </td>
                        <td>
                          28 Apr 2024
                          <br />
                          11:30 AM
                        </td>
                        <td>
                          <span className="st s-sent">
                            Sent
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          4
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#e8318a" }}>
                              <i className="bi bi-megaphone-fill"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                Special Offer
                              </b>
                              <span>
                                Get 20% discount on Test Series...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-offer">
                            Offer
                          </span>
                        </td>
                        <td>
                          All Students
                        </td>
                        <td>
                          26 Apr 2024
                          <br />
                          04:00 PM
                        </td>
                        <td>
                          <span className="st s-sch">
                            Scheduled
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          5
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#f9a12b" }}>
                              <i className="bi bi-info-circle"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                System Maintenance
                              </b>
                              <span>
                                The app will be under maintenance...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-sys">
                            System
                          </span>
                        </td>
                        <td>
                          All Students
                        </td>
                        <td>
                          24 Apr 2024
                          <br />
                          10:00 PM
                        </td>
                        <td>
                          <span className="st s-sent">
                            Sent
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          6
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#14c2b0" }}>
                              <i className="bi bi-camera-video-fill"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                Test Series Available
                              </b>
                              <span>
                                New test series is now active for Practice...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-gen">
                            General
                          </span>
                        </td>
                        <td>
                          All Students
                        </td>
                        <td>
                          22 Apr 2024
                          <br />
                          09:00 AM
                        </td>
                        <td>
                          <span className="st s-sent">
                            Sent
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          7
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#7c4dff" }}>
                              <i className="bi bi-calendar-check"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                Upcoming Webinar
                              </b>
                              <span>
                                Join our expert webinar on FMGE strategy...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-live">
                            Live Class
                          </span>
                        </td>
                        <td>
                          Premium Users
                        </td>
                        <td>
                          20 Apr 2024
                          <br />
                          06:00 PM
                        </td>
                        <td>
                          <span className="st s-exp">
                            Expired
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align="center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          8
                        </td>
                        <td>
                          <div className="d-flex gap-3 align-items-center">
                            <div className="ticon" style={{ background: "#e8318a" }}>
                              <i className="bi bi-bell-fill"></i>
                            </div>
                            <div className="ttl">
                              <b>
                                Welcome Message
                              </b>
                              <span>
                                Welcome to FMGE! Start your learning...
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge-t t-gen">
                            General
                          </span>
                        </td>
                        <td>
                          New Users
                        </td>
                        <td>
                          18 Apr 2024
                          <br />
                          10:00 AM
                        </td>
                        <td>
                          <span className="st s-sent">
                            Sent
                          </span>
                        </td>
                        <td>
                          <div className="act">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-three-dots-vertical dots"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tfoot">
                  <span>
                    Showing 1 to 8 of 8 notifications
                  </span>
                  <div className="pager">
                    <span>
                      <i className="bi bi-chevron-left"></i>
                    </span>
                    <span className="cur">
                      1
                    </span>
                    <span>
                      <i className="bi bi-chevron-right"></i>
                    </span>
                  </div>
                </div>
              </section>
              <aside className="side-r">
                <div className="box">
                  <h6>
                    <i className="bi bi-eye-fill"></i>
                    Notification Preview
                  </h6>
                  <div className="preview">
                    <div className="pv-card">
                      <div className="pv-top">
                        <div className="pv-logo">
                          <i className="bi bi-mortarboard-fill"></i>
                        </div>
                        <div>
                          <b>
                            FMGE
                          </b>
                          <div className="pv-title mt-1">
                            Live Class Reminder
                          </div>
                        </div>
                        <span className="now">
                          Now
                        </span>
                      </div>
                      <div className="pv-body">
                        Your live class on Anatomy starts soon.
                        <br />
                        Join 5 minutes early to avoid any issues.
                      </div>
                      <button className="btn-view">
                        View Class
                      </button>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <h6>
                    <i className="bi bi-file-earmark-text-fill"></i>
                    Notification Details
                  </h6>
                  <dl className="dl">
                    <dt>
                      Title
                    </dt>
                    <dd>
                      Live Class Reminder
                    </dd>
                    <dt>
                      Type
                    </dt>
                    <dd>
                      <span className="badge-t t-live">
                        Live Class
                      </span>
                    </dd>
                    <dt>
                      Audience
                    </dt>
                    <dd>
                      All Students
                    </dd>
                    <dt>
                      Scheduled Date
                    </dt>
                    <dd style={{ fontWeight: "500" }}>
                      30 Apr 2024, 07:00 PM
                    </dd>
                    <dt>
                      Status
                    </dt>
                    <dd>
                      <span className="sent-pill">
                        Sent
                      </span>
                    </dd>
                    <dt>
                      Created By
                    </dt>
                    <dd>
                      Admin
                    </dd>
                  </dl>
                  <div className="tips">
                    <b>
                      <i className="bi bi-info-circle-fill"></i>
                      Quick Tips
                    </b>
                    <ul>
                      <li>
                        Use clear and short messages.
                      </li>
                      <li>
                        Schedule notifications at the right time.
                      </li>
                      <li>
                        You can send to specific user groups.
                      </li>
                      <li>
                        Track delivery and open rates for better engagement.
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(NotificationsPage);
