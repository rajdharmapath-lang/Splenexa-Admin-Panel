import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function UploadVideoPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-upload-video" ref={ref}>
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
                Upload Video
                {" "}
                <i className="bi bi-cloud-arrow-up-fill"></i>
              </h1>
              <p>
                Upload and configure FMGE video content. Add details, set access and publish to students.
              </p>
            </div>
            <div className="hr">
              <div className="back">
                <i className="bi bi-arrow-left"></i>
                Back to Videos
              </div>
              <div className="date">
                <i className="bi bi-calendar-event"></i>
                01 Apr 2024 - 30 Apr 2024
                {" "}
                <i className="bi bi-chevron-down" style={{ marginLeft: "6px" }}></i>
              </div>
            </div>
          </div>
          <div className="cols">
            <div className="stack">
              <div className="card" style={{ paddingBottom: "12px" }}>
                <h3>
                  <i className="bi bi-file-earmark-text-fill"></i>
                  Video Details
                </h3>
                <label className="f">
                  Video Title
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <input className="in" placeholder="Enter video title (e.g. Cardiovascular System - Part 1)" />
                <div className="g2">
                  <div>
                    <label className="f">
                      Subject
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <div className="sl">
                      <select>
                        <option>
                          Select Subject
                        </option>
                        <option>
                          Medicine
                        </option>
                        <option>
                          Surgery
                        </option>
                      </select>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      Topic
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <div className="sl">
                      <select>
                        <option>
                          Select Topic
                        </option>
                        <option>
                          Cardiology
                        </option>
                      </select>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      Instructor
                    </label>
                    <div className="sl">
                      <select>
                        <option>
                          Select Instructor
                        </option>
                      </select>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      Language
                    </label>
                    <div className="sl">
                      <select>
                        <option>
                          English
                        </option>
                        <option>
                          Hindi
                        </option>
                      </select>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  </div>
                </div>
                <label className="f">
                  Description
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <div className="ed">
                  <div className="tb">
                    <span>
                      Normal
                      {" "}
                      <i className="bi bi-chevron-expand" style={{ fontSize: "10px" }}></i>
                    </span>
                    <b>
                      B
                    </b>
                    <i style={{ fontFamily: "serif", fontWeight: "600" }}>
                      I
                    </i>
                    <u style={{ fontWeight: "600" }}>
                      U
                    </u>
                    <span className="sep"></span>
                    <i className="bi bi-list-ul"></i>
                    <i className="bi bi-list-ol"></i>
                    <span className="sep"></span>
                    <i className="bi bi-link-45deg"></i>
                  </div>
                  <div className="b" contentEditable="true" data-ph="Enter video description, key points, learning objectives..."></div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "0" }}>
                  <i className="bi bi-cloud-arrow-up-fill"></i>
                  Video File Upload
                </h3>
                <div className="dz" id="video-dropzone" tabIndex="0" role="button" aria-controls="video-file">
                  <input id="video-file" type="file" accept="video/mp4,video/quicktime,video/x-msvideo,video/x-matroska" />
                  <i className="bi bi-cloud-arrow-up"></i>
                  <span>
                    Drag and drop your video file here
                    <br />
                    or click to browse
                  </span>
                  <strong className="file-name" id="video-file-name"></strong>
                </div>
                <div className="sup">
                  Supported formats: MP4, MOV, AVI, MKV
                  {" "}
                  <b>
                    |
                  </b>
                  {" "}
                  Max file size: 5 GB
                </div>
              </div>
              <div className="card">
                <div className="tn">
                  <div>
                    <h3 style={{ marginBottom: "8px", fontSize: "15.5px", gap: "24px" }}>
                      <i className="bi bi-image-fill" style={{ color: "var(--navy)" }}></i>
                      Video Thumbnail
                    </h3>
                    <div className="dz">
                      <i className="bi bi-image"></i>
                      <b style={{ fontWeight: "500" }}>
                        Upload Thumbnail
                      </b>
                      <small>
                        JPG, PNG (1280×720)
                      </small>
                    </div>
                  </div>
                  <div>
                    <div className="pvh">
                      Preview
                    </div>
                    <div className="pv">
                      <i className="bi bi-play-circle-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stack">
              <div className="card">
                <h3 style={{ marginBottom: "6px" }}>
                  <i className="bi bi-arrow-repeat"></i>
                  Upload Progress
                </h3>
                <div className="up">
                  <div className="th">
                    <i className="bi bi-heart-pulse-fill"></i>
                  </div>
                  <div className="m">
                    <b>
                      cardiovascular_system_part1.mp4
                    </b>
                    <div>
                      <span>
                        2.4 GB of 3.1 GB (77%)
                      </span>
                      <span>
                        12.5 MB/s
                      </span>
                    </div>
                    <div className="pbar">
                      <i></i>
                    </div>
                  </div>
                  <i className="bi bi-x-lg"></i>
                </div>
                <div className="note">
                  <i className="bi bi-info-circle-fill"></i>
                  Please keep this page open until the upload is complete.
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "6px" }}>
                  <i className="bi bi-lock-fill" style={{ color: "#0a2f78" }}></i>
                  Access &amp; Availability
                </h3>
                <div className="row" style={{ alignItems: "center", marginTop: "8px" }}>
                  <label className="f" style={{ margin: "0" }}>
                    Course Access
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="sl" style={{ height: "41px" }}>
                    <div className="tags">
                      <span className="tg2">
                        FMGE Full Course
                        {" "}
                        <i className="bi bi-x-lg"></i>
                      </span>
                      <span className="tg2">
                        Test Series
                        {" "}
                        <i className="bi bi-x-lg"></i>
                      </span>
                      <span className="tg2">
                        Study Material
                        {" "}
                        <i className="bi bi-x-lg"></i>
                      </span>
                    </div>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </div>
                <div className="row">
                  <label className="f">
                    Access Type
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div>
                    <label className="rd">
                      <input type="radio" name="a" defaultChecked />
                      <span className="c"></span>
                      <span>
                        <b>
                          Subscription Only
                        </b>
                        <small>
                          Only students with active subscription can watch
                        </small>
                      </span>
                    </label>
                    {" "}
                    <label className="rd">
                      <input type="radio" name="a" />
                      <span className="c"></span>
                      <span>
                        <b>
                          Free Preview
                        </b>
                        <small>
                          Available for all students
                        </small>
                      </span>
                    </label>
                    {" "}
                    <label className="rd">
                      <input type="radio" name="a" />
                      <span className="c"></span>
                      <span>
                        <b>
                          Paid Video (Pay Per View)
                        </b>
                        <small>
                          Students need to purchase this video separately
                        </small>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="card pub-c">
                <h3 style={{ marginBottom: "8px" }}>
                  <i className="bi bi-gear-fill" style={{ color: "#0a2f78" }}></i>
                  Publishing Options
                </h3>
                <div className="pub">
                  <label className="f" style={{ marginTop: "2px" }}>
                    Video Status
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  {" "}
                  <label className="rd">
                    <input type="radio" name="p" />
                    <span className="c"></span>
                    <span>
                      <b>
                        Draft
                      </b>
                      <small>
                        Save as draft (not visible to students)
                      </small>
                    </span>
                  </label>
                  {" "}
                  <label className="rd">
                    <input type="radio" name="p" defaultChecked />
                    <span className="c"></span>
                    <span>
                      <b>
                        Publish Now
                      </b>
                      <small>
                        Make this video available immediately
                      </small>
                    </span>
                  </label>
                  {" "}
                  <label className="rd">
                    <input type="radio" name="p" />
                    <span className="c"></span>
                    <span>
                      <b>
                        Schedule Publish
                      </b>
                      <small>
                        Set a future date and time
                      </small>
                    </span>
                  </label>
                </div>
                <div className="sd">
                  <label className="f" style={{ margin: "0" }}>
                    Schedule Date &amp; Time
                  </label>
                  <div className="in">
                    <i className="bi bi-calendar3"></i>
                    Select date and time
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "6px" }}>
                  <i className="bi bi-gear-fill" style={{ color: "#0a2f78" }}></i>
                  Additional Settings
                </h3>
                <div className="sg">
                  <div className="tg">
                    <label className="sw">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Allow Download
                      </b>
                      <small>
                        Allow students to download this video
                      </small>
                    </div>
                  </div>
                  <div className="tg">
                    <label className="sw">
                      <input type="checkbox" defaultChecked />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Enable Comments
                      </b>
                      <small>
                        Allow students to comment
                      </small>
                    </div>
                  </div>
                  <div className="tg">
                    <label className="sw">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Featured Video
                      </b>
                      <small>
                        Show this video on homepage or featured section
                      </small>
                    </div>
                  </div>
                  <div className="tg">
                    <label className="sw">
                      <input type="checkbox" defaultChecked />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Show in Course Curriculum
                      </b>
                      <small>
                        Include this video in selected courses
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btns">
                <button className="btn" id="save-video-draft" type="button">
                  <i className="bi bi-file-earmark-text"></i>
                  Save as Draft
                </button>
                <button className="btn p" id="publish-video" type="button">
                  <i className="bi bi-send"></i>
                  Publish Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="sr-only" id="video-upload-status" aria-live="polite"></div>
    </div>
  );
}

export default memo(UploadVideoPage);
