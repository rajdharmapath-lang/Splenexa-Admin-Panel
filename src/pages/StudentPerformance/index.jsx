import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function StudentPerformancePage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-student-performance" ref={ref}>
      <main>
        <div className="top">
          <label className="search">
            <i className="bi bi-search"></i>
            <input placeholder="Search students, topics, videos, payments..." />
          </label>
          <div className="r">
            <div className="bell">
              <i className="bi bi-bell"></i>
              <em>
                3
              </em>
            </div>
            <div className="me">
              <div className="av">
                A
              </div>
              <div>
                <b>
                  Admin
                </b>
                Super Admin
              </div>
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="hd">
            <div className="l">
              <i className="bi bi-arrow-left"></i>
              <div>
                <h1>
                  Student Performance
                </h1>
                <p>
                  Track individual student progress, completed videos, and attended sessions.
                </p>
              </div>
            </div>
            <div className="date">
              <i className="bi bi-calendar-event"></i>
              01 Apr 2024 - 30 Apr 2024
              {" "}
              <i className="bi bi-chevron-down" style={{ marginLeft: "8px" }}></i>
            </div>
          </div>
          <div className="card prof">
            <div className="big" id="studentInitials">
              AS
            </div>
            <div className="pi">
              <h2 id="studentName">
                Aarav Sharma
                {" "}
                <span className="st">
                  Active
                </span>
              </h2>
              <div>
                <i className="bi bi-envelope-fill"></i>
                <span id="studentEmail">
                  aarav.sharma@gmail.com
                </span>
              </div>
              <div>
                <i className="bi bi-telephone-fill"></i>
                <span id="studentPhone">
                  +91 98765 43210
                </span>
              </div>
              <div>
                <i className="bi bi-mortarboard-fill"></i>
                <span id="studentCourse">
                  FMGE Full Course
                </span>
              </div>
            </div>
            <div className="tiles">
              <div className="tile" style={{ flex: "1.45" }}>
                <div className="ring">
                  <b>
                    68%
                  </b>
                </div>
                <div>
                  <h5>
                    Course Progress
                  </h5>
                  <small style={{ display: "block", marginBottom: "4px" }}>
                    68 of 100
                  </small>
                  <small>
                    lessons completed
                  </small>
                </div>
              </div>
              <div className="tile" style={{ flex: "1.2" }}>
                <div className="ti">
                  <i className="bi bi-play-btn-fill"></i>
                </div>
                <div>
                  <h5>
                    Videos Watched
                  </h5>
                  <div className="v">
                    42
                  </div>
                  <small>
                    of 58 videos
                  </small>
                </div>
              </div>
              <div className="tile" style={{ flex: "1.35" }}>
                <div className="ti">
                  <i className="bi bi-clock"></i>
                </div>
                <div>
                  <h5>
                    Total Watch Hours
                  </h5>
                  <div className="v">
                    18.5 hrs
                  </div>
                  <small>
                    of 40 hrs
                  </small>
                </div>
              </div>
              <div className="tile" style={{ flex: "1", alignItems: "flex-start", flexDirection: "column", gap: "6px" }}>
                <h5 style={{ marginBottom: "0" }}>
                  Last Login
                </h5>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  <i className="bi bi-calendar3" style={{ fontSize: "18px", color: "var(--navy)" }}></i>
                  <div style={{ fontSize: "11.5px" }}>
                    30 Apr 2024
                    <br />
                    <small>
                      10:24 AM
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="vp">
              <i className="bi bi-person"></i>
              View Full Profile
            </div>
          </div>
          <div className="card tabs">
            <span>
              <i className="bi bi-house-door-fill"></i>
              Overview
            </span>
            <span>
              <i className="bi bi-calendar2-check-fill"></i>
              Attended Sessions
            </span>
            <span className="on">
              <i className="bi bi-camera-video-fill"></i>
              Completed Videos
            </span>
            <span>
              <i className="bi bi-bar-chart-fill"></i>
              Performance Report
            </span>
          </div>
          <div className="cols">
            <div>
              <div className="sub">
                <div className="card">
                  <div className="ch">
                    <h3>
                      Course Progress
                    </h3>
                    <a className="va" href="#">
                      View All Courses
                    </a>
                  </div>
                  <div className="cp">
                    <div className="ci" style={{ background: "linear-gradient(135deg,#4aa3ff,#2a6fe8)" }}>
                      <i className="bi bi-capsule-pill"></i>
                    </div>
                    <div>
                      <b>
                        Medicine
                      </b>
                      <div className="bar">
                        <i style={{ width: "75%", background: "#12b886" }}></i>
                      </div>
                    </div>
                    <span className="p">
                      75%
                    </span>
                    <span className="m">
                      15 / 20 lessons
                    </span>
                    <i className="bi bi-chevron-right a"></i>
                  </div>
                  <div className="cp">
                    <div className="ci" style={{ background: "linear-gradient(135deg,#9a6bff,#6a3fe0)" }}>
                      <i className="bi bi-scissors"></i>
                    </div>
                    <div>
                      <b>
                        Surgery
                      </b>
                      <div className="bar">
                        <i style={{ width: "60%", background: "#8b5cf6" }}></i>
                      </div>
                    </div>
                    <span className="p">
                      60%
                    </span>
                    <span className="m">
                      12 / 20 lessons
                    </span>
                    <i className="bi bi-chevron-right a"></i>
                  </div>
                  <div className="cp">
                    <div className="ci" style={{ background: "linear-gradient(135deg,#ff6b8b,#f0386b)" }}>
                      <i className="bi bi-gender-female"></i>
                    </div>
                    <div>
                      <b>
                        OBG
                      </b>
                      <div className="bar">
                        <i style={{ width: "50%", background: "#f0486f" }}></i>
                      </div>
                    </div>
                    <span className="p">
                      50%
                    </span>
                    <span className="m">
                      10 / 20 lessons
                    </span>
                    <i className="bi bi-chevron-right a"></i>
                  </div>
                  <div className="cp">
                    <div className="ci" style={{ background: "linear-gradient(135deg,#ffb347,#f59a1a)" }}>
                      <i className="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div>
                      <b>
                        Pediatrics
                      </b>
                      <div className="bar">
                        <i style={{ width: "45%", background: "#f9a23b" }}></i>
                      </div>
                    </div>
                    <span className="p">
                      45%
                    </span>
                    <span className="m">
                      9 / 20 lessons
                    </span>
                    <i className="bi bi-chevron-right a"></i>
                  </div>
                  <div className="cp">
                    <div className="ci" style={{ background: "linear-gradient(135deg,#2fd4a0,#12b07f)" }}>
                      <i className="bi bi-virus"></i>
                    </div>
                    <div>
                      <b>
                        Pathology
                      </b>
                      <div className="bar">
                        <i style={{ width: "30%", background: "#12b886" }}></i>
                      </div>
                    </div>
                    <span className="p">
                      30%
                    </span>
                    <span className="m">
                      6 / 20 lessons
                    </span>
                    <i className="bi bi-chevron-right a"></i>
                  </div>
                </div>
                <div className="card">
                  <h3 style={{ marginBottom: "6px" }}>
                    Video Watch Summary
                  </h3>
                  <hr style={{ border: "0", borderTop: "1px solid var(--line)", margin: "10px 0 6px" }} />
                  <div className="dn">
                    <div className="donut" style={{ background: "conic-gradient(#12b886 0 72.4%,#3b82f6 72.4% 86.2%,#9db1d6 86.2%)" }}>
                      <div>
                        <b>
                          42
                        </b>
                        Videos
                        <br />
                        Completed
                      </div>
                    </div>
                    <div className="ds">
                      <div>
                        <i style={{ background: "#12b886" }}></i>
                        Completed
                        <b>
                          42
                        </b>
                      </div>
                      <div>
                        <i style={{ background: "#3b82f6" }}></i>
                        In Progress
                        <b>
                          8
                        </b>
                      </div>
                      <div>
                        <i style={{ background: "#6b86c4" }}></i>
                        Not Started
                        <b>
                          8
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="tot">
                    <span>
                      Total Videos Available
                    </span>
                    <b>
                      58
                    </b>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="ch">
                  <h3>
                    <i className="bi bi-calendar2-week"></i>
                    Attended Sessions
                  </h3>
                  <span style={{ fontSize: "9px" }}>
                    Total Sessions Attended:
                    {" "}
                    <b style={{ fontWeight: "500", fontSize: "10px" }}>
                      18 / 25
                    </b>
                    {" "}
                    <a className="va" href="#">
                      View All
                    </a>
                  </span>
                </div>
                <div className="tw">
                  <table>
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
                    <tbody id="ses"></tbody>
                  </table>
                </div>
                <div className="note">
                  <i className="bi bi-info-circle-fill"></i>
                  The performance data is based on the student's activity, including attended live sessions, completed videos, and test results.
                </div>
              </div>
            </div>
            <div className="stack">
              <div className="card">
                <div className="ch">
                  <h3>
                    <i className="bi bi-camera-reels-fill"></i>
                    Top Watched Videos
                  </h3>
                  <a className="va" href="#">
                    View All
                  </a>
                </div>
                <div id="vids"></div>
              </div>
              <div className="card" style={{ paddingBottom: "22px" }}>
                <div className="ch" style={{ marginBottom: "0" }}>
                  <h3>
                    <i className="bi bi-bar-chart-fill"></i>
                    Performance Score
                  </h3>
                  <a className="va" href="#">
                    View Detailed Report
                  </a>
                </div>
                <div className="ps">
                  <div className="donut">
                    <div>
                      <b>
                        72%
                      </b>
                      Overall Score
                    </div>
                  </div>
                  <div className="rows" id="sc"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(StudentPerformancePage);
