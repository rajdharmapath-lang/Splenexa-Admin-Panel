import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function CreateNotificationPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-create-notification" ref={ref}>
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
            <a href="#" className="back">
              <i className="bi bi-arrow-left"></i>
              Back to Notifications
            </a>
            <div className="page-head">
              <i className="bi bi-bell-fill"></i>
              <div>
                <h1>
                  Create Notification
                </h1>
                <p>
                  Send and manage notifications for students and users.
                </p>
              </div>
            </div>
            <div className="grid">
              <div>
                <section className="card-w">
                  <div className="sec-t">
                    <span className="num">
                      1
                    </span>
                    Notification Details
                  </div>
                  <label className="l" htmlFor="title">
                    Notification Title
                    {" "}
                    <em>
                      *
                    </em>
                  </label>
                  {" "}
                  <input id="title" className="in" placeholder="Enter notification title" />
                  <div className="row2">
                    <div>
                      <label className="l">
                        Notification Type
                        {" "}
                        <em>
                          *
                        </em>
                      </label>
                      <div className="has-ic">
                        <i className="bi bi-send l"></i>
                        {" "}
                        <select className="in">
                          <option>
                            Live Class
                          </option>
                          <option>
                            Daily Practice
                          </option>
                          <option>
                            New Content
                          </option>
                          <option>
                            Offer
                          </option>
                          <option>
                            System
                          </option>
                          <option>
                            General
                          </option>
                        </select>
                        {" "}
                        <i className="bi bi-chevron-down r"></i>
                      </div>
                    </div>
                    <div>
                      <label className="l">
                        Audience
                        {" "}
                        <em>
                          *
                        </em>
                      </label>
                      <div className="has-ic">
                        <i className="bi bi-people-fill l"></i>
                        {" "}
                        <select className="in">
                          <option>
                            All Students
                          </option>
                          <option>
                            Premium Users
                          </option>
                          <option>
                            New Users
                          </option>
                        </select>
                        {" "}
                        <i className="bi bi-chevron-down r"></i>
                      </div>
                    </div>
                    <div>
                      <label className="l">
                        Priority
                      </label>
                      <div className="has-ic">
                        <i className="bi bi-flag-fill l"></i>
                        {" "}
                        <select className="in">
                          <option>
                            Normal
                          </option>
                          <option>
                            High
                          </option>
                          <option>
                            Low
                          </option>
                        </select>
                        {" "}
                        <i className="bi bi-chevron-down r"></i>
                      </div>
                    </div>
                    <div>
                      <label className="l">
                        Schedule Date &amp; Time
                      </label>
                      <div className="sub">
                        <div className="has-ic">
                          <i className="bi bi-calendar3 l"></i>
                          <input className="in" defaultValue="30 Apr 2024" />
                        </div>
                        <div className="has-ic">
                          <i className="bi bi-clock l"></i>
                          <input className="in" defaultValue="10:00 AM" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card-w">
                  <div className="sec-t">
                    <span className="num">
                      2
                    </span>
                    Message Content
                  </div>
                  <div className="msg-grid">
                    <div>
                      <label className="l" style={{ marginBottom: "0" }}>
                        Message
                        {" "}
                        <em>
                          *
                        </em>
                      </label>
                      <div className="editor">
                        <div className="tb">
                          <i className="bi bi-type-bold"></i>
                          <i className="bi bi-type-italic"></i>
                          <i className="bi bi-type-underline"></i>
                          {" "}
                          <span className="sz">
                            14
                            {" "}
                            <i className="bi bi-chevron-down" style={{ fontSize: "8px" }}></i>
                          </span>
                          {" "}
                          <i className="bi bi-eraser"></i>
                          <i className="bi bi-text-left"></i>
                          <i className="bi bi-list-ul"></i>
                          <i className="bi bi-text-right"></i>
                          {" "}
                          <i className="bi bi-justify"></i>
                          <i className="bi bi-list-ol"></i>
                          <i className="bi bi-link-45deg"></i>
                          <i className="bi bi-image"></i>
                          {" "}
                          <i className="bi bi-x-lg x"></i>
                        </div>
                        <textarea id="msg" placeholder="Type your notification message here..." />
                      </div>
                    </div>
                    <div>
                      <label className="l" style={{ fontSize: "12px", marginBottom: "0" }}>
                        Attach Image
                        {" "}
                        <span style={{ fontWeight: "400" }}>
                          (Optional)
                        </span>
                      </label>
                      <div className="drop">
                        <i className="bi bi-cloud-arrow-up"></i>
                        Drag &amp; drop an image here
                        <br />
                        or
                        <br />
                        <button type="button">
                          Choose File
                        </button>
                      </div>
                      <div className="drop-n">
                        Supported formats: JPG, PNG, GIF
                        <br />
                        (Max size: 5MB)
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card-w">
                  <div className="sec-t" style={{ fontSize: "15px" }}>
                    <span className="num">
                      3
                    </span>
                    Additional Options
                  </div>
                  <div className="add-opt">
                    <div className="sw">
                      <div className="form-check form-switch p-0 m-0">
                        <input className="form-check-input m-0" type="checkbox" role="switch" defaultChecked />
                      </div>
                      <div>
                        <b>
                          Add Call to Action Button
                        </b>
                        <small>
                          Redirect users to a specific page or link.
                        </small>
                      </div>
                    </div>
                    <div className="row2" style={{ marginTop: "0", gap: "24px" }}>
                      <div>
                        <label className="sm-l">
                          Button Text
                          {" "}
                          <em>
                            *
                          </em>
                        </label>
                        <input className="in sm" defaultValue="View Details" />
                      </div>
                      <div>
                        <label className="sm-l">
                          Link URL
                          {" "}
                          <em>
                            *
                          </em>
                        </label>
                        <input className="in sm" placeholder="https://example.com" />
                      </div>
                    </div>
                  </div>
                  <div className="foot">
                    <button className="btn-c" type="button">
                      Cancel
                    </button>
                    {" "}
                    <button className="btn-s" type="button">
                      <i className="bi bi-send"></i>
                      Send Notification
                    </button>
                  </div>
                </section>
              </div>
              <aside>
                <div className="pv">
                  <div className="sec-t">
                    <i className="bi bi-eye-fill"></i>
                    Notification Preview
                  </div>
                  <div className="pv-bg">
                    <div className="pv-card">
                      <div className="pv-top">
                        <div className="pv-ic">
                          <i className="bi bi-bell-fill"></i>
                        </div>
                        <b>
                          FMGE Admin
                        </b>
                        <span>
                          10:00 AM
                        </span>
                      </div>
                      <div className="pv-t">
                        Live Class Reminder
                      </div>
                      <p className="pv-b">
                        Your live class on Anatomy starts soon.
                        <br />
                        Join 5 minutes early to avoid any issues.
                      </p>
                      <div className="pv-btn">
                        View Details
                        {" "}
                        <i className="bi bi-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tips">
                  <div className="sec-t">
                    <i className="bi bi-lightbulb-fill"></i>
                    Quick Tips
                  </div>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Keep the message short and clear.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Use a relevant notification type.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Select the right audience to avoid confusion.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      Schedule notifications for better engagement.
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill"></i>
                      You can preview the notification before sending.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CreateNotificationPage);
