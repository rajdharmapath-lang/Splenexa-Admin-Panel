import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function CreateTestPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-create-test" ref={ref}>
      <main>
        <div className="top">
          <label className="search">
            <i className="bi bi-search" style={{ color: "#0a2f78" }}></i>
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
              <i className="bi bi-clipboard2-check-fill"></i>
              <div>
                <h1>
                  <span id="create-flow-title">Create Test</span>
                </h1>
                <p>
                  Set up a new test with schedule, marks, duration, and notifications.
                </p>
              </div>
            </div>
            <button className="back" id="back-to-question-bank" type="button">
              <i className="bi bi-arrow-left"></i>
              Back to Tests
            </button>
          </div>
          <div className="workflow" aria-label="Question management flow">
            <span>1. Products</span>
            <i className="bi bi-chevron-right"></i>
            <span className="active">2. Create Test</span>
            <i className="bi bi-chevron-right"></i>
            <span>3. Create Question</span>
          </div>
          <div className="card">
            <h3>
              <i className="bi bi-card-text"></i>
              Test Details
            </h3>
            <p className="create-test-description" id="create-test-description"></p>
            <div className="g2" style={{ marginBottom: "22px" }}>
              <div>
                <label className="f" id="test-name-label">
                  Select Product
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <div className="sl">
                  <select id="test-product">
                    <option value="">
                      Select product
                    </option>
                    <option>
                      FMGE Q-Bank
                    </option>
                    <option>
                      Grand Test Series
                    </option>
                    <option>
                      Subject Wise Test
                    </option>
                    <option>
                      Image Based Test
                    </option>
                  </select>
                  <i className="bi bi-chevron-down"></i>
                </div>
              </div>
              <div>
                <label className="f">
                  Test Name
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <input className="in" id="test-name" placeholder="Enter test name" />
              </div>
            </div>
            <div className="parent-subject-toggle" id="parent-subject-toggle-field">
              <div>
                <b>Add a topic under this test</b>
                <p>When enabled, questions are grouped under the test name and topic.</p>
              </div>
              <label className="sw" htmlFor="use-parent-subject">
                <input id="use-parent-subject" type="checkbox" aria-label="Add a topic under this test" />
                <span></span>
              </label>
            </div>
            <div className="g2" id="test-topic-field" style={{ marginBottom: "22px" }}>
              <div>
                <label className="f" htmlFor="test-topic">
                  Topic Name
                  <s>*</s>
                </label>
                <input className="in" id="test-topic" placeholder="Enter topic name" />
              </div>
            </div>
            <div className="g2">
              <div className="dtb">
                <div className="dh">
                  <label className="f">
                    Start Date &amp; Time
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="en">
                    <label className="sw">
                      <input type="checkbox" defaultChecked />
                      <span></span>
                    </label>
                    Enable
                  </div>
                </div>
                <div className="dr">
                  <label>
                    <i className="bi bi-calendar3"></i>
                    <input placeholder="Select date" onFocus={(event) => { (function () { this.type='date' }).call(event.currentTarget); }} onBlur={(event) => { (function () { if(!this.value)this.type='text' }).call(event.currentTarget); }} />
                  </label>
                  <label>
                    <i className="bi bi-clock"></i>
                    <input placeholder="Select time" onFocus={(event) => { (function () { this.type='time' }).call(event.currentTarget); }} onBlur={(event) => { (function () { if(!this.value)this.type='text' }).call(event.currentTarget); }} />
                    <i className="bi bi-chevron-down ch"></i>
                  </label>
                </div>
              </div>
              <div className="dtb">
                <div className="dh">
                  <label className="f">
                    End Date &amp; Time
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="en">
                    <label className="sw">
                      <input type="checkbox" defaultChecked />
                      <span></span>
                    </label>
                    Enable
                  </div>
                </div>
                <div className="dr">
                  <label>
                    <i className="bi bi-calendar3"></i>
                    <input placeholder="Select date" onFocus={(event) => { (function () { this.type='date' }).call(event.currentTarget); }} onBlur={(event) => { (function () { if(!this.value)this.type='text' }).call(event.currentTarget); }} />
                  </label>
                  <label>
                    <i className="bi bi-clock"></i>
                    <input placeholder="Select time" onFocus={(event) => { (function () { this.type='time' }).call(event.currentTarget); }} onBlur={(event) => { (function () { if(!this.value)this.type='text' }).call(event.currentTarget); }} />
                    <i className="bi bi-chevron-down ch"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="row4">
              <div>
                <label className="f" htmlFor="total-question-count">
                  Questions in Selection
                </label>
                <input className="in" id="total-question-count" type="number" defaultValue="0" readOnly style={{ fontWeight: "600" }} />
              </div>
              <div>
                <label className="f">
                  Total Mark
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <input className="in" id="total-marks" value="0" readOnly style={{ fontWeight: "600" }} />
              </div>
              <div>
                <label className="f">
                  Mark for 1 Question
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <input className="in" id="marks-per-question" type="number" min="0" step="any" defaultValue="0" style={{ fontWeight: "600" }} />
              </div>
              <div>
                <label className="f">
                  Negative Mark (for 1 Question)
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <input className="in" id="negative-marking" type="number" min="0" step="any" defaultValue="0" style={{ fontWeight: "600" }} />
              </div>
              <div className="duration-field">
                <div className="duration-toggle">
                  <label className="f" htmlFor="duration-enabled">Set a time limit</label>
                  <label className="sw" htmlFor="duration-enabled">
                    <input id="duration-enabled" type="checkbox" defaultChecked aria-label="Set a time limit" />
                    <span></span>
                  </label>
                </div>
                <div className="dur" id="duration-controls">
                  <div className="sl">
                    <select id="hh"></select>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <span>
                    Hours
                  </span>
                  <div className="sl">
                    <select id="mm"></select>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <span>
                    Minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ paddingBottom: "18px" }}>
            <h3 style={{ marginBottom: "2px" }}>
              <i className="bi bi-bell-fill"></i>
              Notification Schedule
            </h3>
            <div className="sub">
              Send notifications to students about this test.
            </div>
            <div id="nots"></div>
            <button className="add" id="add">
              <i className="bi bi-plus-lg"></i>
              Add Notification
            </button>
            <hr />
            <div className="fb">
            <div className="btn" id="cancel-create-test">
                Cancel
              </div>
              <div className="btn p" id="create-test-submit">
                <i className="bi bi-plus-lg"></i>
                Create Test
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(CreateTestPage);
