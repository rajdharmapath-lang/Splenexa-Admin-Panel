import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function VideosPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-videos" ref={ref}>
      <main>
        <div className="top">
          <label className="search">
            <i className="bi bi-search"></i>
            <input placeholder="Search videos, subjects, topics, instructors..." />
          </label>
          <div className="r">
            <div className="bell">
              <i className="bi bi-bell"></i>
              <em>
                8
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
            <div>
              <h1>
                Video Management
                {" "}
                <i className="bi bi-play-circle-fill"></i>
              </h1>
              <p>
                Upload, organize and manage FMGE video content. Track views, watch time and student engagement.
              </p>
            </div>
            <div className="date">
              <i className="bi bi-calendar-event"></i>
              01 Apr 2024 - 30 Apr 2024
              {" "}
              <i className="bi bi-chevron-down" style={{ marginLeft: "8px" }}></i>
            </div>
          </div>
          <div className="g kpis">
            <div className="card kpi">
              <div className="ic">
                <i className="bi bi-camera-video-fill"></i>
              </div>
              <div>
                <h4>
                  Total Videos
                </h4>
                <div className="n">
                  1,482
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  15%
                </span>
                {" "}
                <small>
                  +192 this month
                </small>
              </div>
            </div>
            <div className="card kpi">
              <div className="ic b">
                <i className="bi bi-eye-fill"></i>
              </div>
              <div>
                <h4>
                  Total Views
                </h4>
                <div className="n">
                  2,38,560
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  28%
                </span>
                {" "}
                <small>
                  +52,480 this month
                </small>
              </div>
            </div>
            <div className="card kpi">
              <div className="ic b">
                <i className="bi bi-clock-fill"></i>
              </div>
              <div>
                <h4>
                  Total Watch Time
                </h4>
                <div className="n">
                  18,245 hrs
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  32%
                </span>
                {" "}
                <small>
                  +4,432 hrs
                </small>
              </div>
            </div>
            <div className="card kpi">
              <div className="ic">
                <i className="bi bi-people-fill"></i>
              </div>
              <div>
                <h4>
                  Unique Viewers
                </h4>
                <div className="n">
                  12,480
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  24%
                </span>
                {" "}
                <small>
                  +2,420 this month
                </small>
              </div>
            </div>
            <div className="card kpi">
              <div className="ic b">
                <i className="bi bi-cloud-arrow-up-fill"></i>
              </div>
              <div style={{ flex: "1" }}>
                <h4>
                  Storage Used
                </h4>
                <div className="n">
                  126 GB
                </div>
                <small style={{ color: "var(--ink)", fontSize: "11px" }}>
                  of 500 GB (25%)
                </small>
                <div className="sb">
                  <i></i>
                </div>
              </div>
            </div>
          </div>
          <div className="g row2">
            <div className="card">
              <div className="ch">
                <h3>
                  Video Views &amp; Watch Time Trend
                </h3>
                <select>
                  <option>
                    Last 30 Days
                  </option>
                </select>
              </div>
              <div className="lg">
                <span>
                  <i style={{ background: "#0a3b8c" }}></i>
                  Video Views
                </span>
                <span>
                  <i style={{ background: "#1ea7e8" }}></i>
                  Watch Time (Hours)
                </span>
              </div>
              <svg id="c1" viewBox="0 0 640 175"></svg>
            </div>
            <div className="card">
              <div className="ch">
                <h3>
                  Top Performing Videos
                </h3>
                <select>
                  <option>
                    Last 30 Days
                  </option>
                </select>
              </div>
              <div className="tp" id="tp"></div>
            </div>
          </div>
          <div className="g row3">
            <div className="card">
              <h3>
                Video Category Distribution
              </h3>
              <div className="donutbox">
                <div className="donut" style={{ background: "conic-gradient(#0a56a8 0 28%,#2da6f0 28% 52%,#1fb57f 52% 71%,#f9a823 71% 87%,#f44f4f 87%)" }}>
                  <div>
                    <b>
                      1,482
                    </b>
                    Videos
                  </div>
                </div>
                <div className="ds">
                  <div>
                    <i style={{ background: "#0a56a8" }}></i>
                    Medicine
                    <b>
                      420
                    </b>
                    <span>
                      (28%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#2da6f0" }}></i>
                    Surgery
                    <b>
                      360
                    </b>
                    <span>
                      (24%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#1fb57f" }}></i>
                    Anatomy
                    <b>
                      280
                    </b>
                    <span>
                      (19%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#f9a823" }}></i>
                    Pathology
                    <b>
                      240
                    </b>
                    <span>
                      (16%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#f44f4f" }}></i>
                    Pharmacology
                    <b>
                      182
                    </b>
                    <span>
                      (12%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card ru">
              <div className="ch" style={{ marginBottom: "4px" }}>
                <h3>
                  Recent Uploads
                </h3>
                <a className="va" href="#">
                  View All
                </a>
              </div>
              <div id="ru" style={{ display: "block" }}></div>
            </div>
            <div className="card">
              <h3>
                Video Status
              </h3>
              <div className="donutbox">
                <div className="donut" style={{ background: "conic-gradient(#12b27a 0 84%,#f9a823 84% 91%,#2d88f0 91% 97%,#8b4fe0 97%)" }}>
                  <div>
                    <b>
                      1,482
                    </b>
                    Videos
                  </div>
                </div>
                <div className="ds">
                  <div>
                    <i style={{ background: "#12b27a" }}></i>
                    Published
                    <b>
                      1,240
                    </b>
                    <span>
                      (84%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#f9a823" }}></i>
                    Processing
                    <b>
                      102
                    </b>
                    <span>
                      (7%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#2d88f0" }}></i>
                    Draft
                    <b>
                      84
                    </b>
                    <span>
                      (6%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#8b4fe0" }}></i>
                    Scheduled
                    <b>
                      56
                    </b>
                    <span>
                      (3%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="fl">
              <h3>
                All Videos
              </h3>
              <label className="fi s">
                <i className="bi bi-search"></i>
                <input placeholder="Search by title, subject, instructor..." />
              </label>
              <div className="fi sel" style={{ width: "136px" }}>
                All Subjects
                {" "}
                <i className="bi bi-chevron-down"></i>
              </div>
              <div className="fi sel" style={{ width: "128px" }}>
                All Status
                {" "}
                <i className="bi bi-chevron-down"></i>
              </div>
              <div className="fi sel" style={{ width: "136px" }}>
                Latest First
                {" "}
                <i className="bi bi-chevron-down"></i>
              </div>
              <button className="btn" id="upload-video-button" type="button">
                <i className="bi bi-plus-lg"></i>
                Upload Video
              </button>
            </div>
            <div className="tw">
              <table>
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      Thumbnail
                    </th>
                    <th>
                      Video Title
                    </th>
                    <th>
                      Subject
                    </th>
                    <th>
                      Topic
                    </th>
                    <th>
                      Duration
                    </th>
                    <th>
                      Views
                    </th>
                    <th>
                      Upload Date
                    </th>
                    <th>
                      Status
                    </th>
                    <th>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody id="rows"></tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(VideosPage);
