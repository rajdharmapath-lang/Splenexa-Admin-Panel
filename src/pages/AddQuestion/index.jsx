import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function AddQuestionPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-add-question" ref={ref}>
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
          <div className="bc">
            <i className="bi bi-house-door-fill h"></i>
            <i className="bi bi-chevron-right"></i>
            Question Bank
            <i className="bi bi-chevron-right"></i>
            <b id="question-breadcrumb-label">
              Add Question
            </b>
          </div>
          <div className="hd">
            <div className="l">
              <i className="bi bi-list-task"></i>
              <div>
                <h1 id="question-page-title">
                  Add New Question
                </h1>
                <p>
                  Create and manage questions for your FMGE platform.
                </p>
              </div>
            </div>
            <button className="back" id="back-to-question-bank" type="button">
              <i className="bi bi-arrow-left"></i>
              Back to Question Bank
            </button>
          </div>
          <div className="cols">
            <div className="card edit-question-card">
              <h3>
                <i className="bi bi-file-earmark-text-fill"></i>
                Question Text
              </h3>
              <div className="sec edit-section">
                <div className="ed rich-editor">
                  <div className="tb rich-toolbar" data-tb=""></div>
                  <div
                    className="body rich-body"
                    contentEditable="true"
                    data-placeholder="Type your question here..."
                    suppressContentEditableWarning
                  >
                  </div>
                </div>
                <div>
                  <div className="att" data-att=""></div>
                </div>
              </div>
              <h3>
                <i className="bi bi-patch-check-fill"></i>
                Options
              </h3>
              <div className="opts edit-options" id="opts"></div>
              <h3>
                <i className="bi bi-file-earmark-text-fill"></i>
                Explanation
              </h3>
              <div className="sec edit-section">
                <div className="ed rich-editor">
                  <div className="tb rich-toolbar" data-tb=""></div>
                  <div
                    className="body e rich-body"
                    contentEditable="true"
                    data-placeholder="Write a detailed explanation for the answer..."
                    suppressContentEditableWarning
                  >
                  </div>
                </div>
                <div>
                  <div className="att" data-att=""></div>
                </div>
              </div>
            </div>
            <div className="card edit-meta-card">
              <h3>
                <i className="bi bi-gear-fill"></i>
                Question Metadata
              </h3>
              <p className="metadata-intro">Fill in the details about your question.</p>
              <div className="f2">
                <div>
                  <label className="f" htmlFor="product-type">
                    Product Type
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="sl">
                    <i className="bi bi-database-fill"></i>
                    <select id="product-type" required>
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
                    <span className="metadata-value" id="product-type-value"></span>
                  </div>
                </div>
                <div>
                  <label className="f" htmlFor="subject">
                    Subject
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="sl">
                    <i className="bi bi-capsule-pill"></i>
                    <select id="subject" required>
                      <option>
                        Medicine
                      </option>
                      <option>
                        Anatomy
                      </option>
                      <option>
                        Physiology
                      </option>
                      <option>
                        Surgery
                      </option>
                      <option>
                        Pathology
                      </option>
                      <option>
                        Pharmacology
                      </option>
                      <option>
                        Pediatrics
                      </option>
                      <option>
                        OBG
                      </option>
                      <option>
                        Radiology
                      </option>
                    </select>
                    <span className="metadata-value" id="subject-value"></span>
                  </div>
                </div>
                <div>
                  <label className="f" htmlFor="topic">
                    Topic
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="sl">
                    <i className="bi bi-heart-pulse-fill"></i>
                    <select id="topic" required>
                      <option>
                        Cardiology
                      </option>
                      <option>
                        Hypertension
                      </option>
                      <option>
                        Respiratory System
                      </option>
                      <option>
                        Renal System
                      </option>
                      <option>
                        Infectious Diseases
                      </option>
                      <option>
                        Clinical Pharmacology
                      </option>
                    </select>
                    <span className="metadata-value" id="topic-value"></span>
                  </div>
                </div>
                <div>
                  <label className="f" htmlFor="difficulty">
                    Difficulty Level
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="sl">
                    <i className="bi bi-bar-chart-fill"></i>
                    <select id="difficulty" required defaultValue="Medium">
                      <option>
                        Easy
                      </option>
                      <option>
                        Medium
                      </option>
                      <option>
                        Hard
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="f" htmlFor="question-status">
                    Status
                    {" "}
                    <s>
                      *
                    </s>
                  </label>
                  <div className="sl">
                    <b className="dot"></b>
                    <select id="question-status" required defaultValue="Active">
                      <option>
                        Active
                      </option>
                      <option>
                        Inactive
                      </option>
                      <option>
                        Draft
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <hr style={{ border: "0", borderTop: "1px solid var(--line)", margin: "4px 0 12px" }} />
              <div className="ca">
                <i className="bi bi-info-circle-fill"></i>
                <div>
                  <b>
                    Correct Answer
                  </b>
                  <span id="ans">
                    Option 2 (Secondary hypertension)
                  </span>
                </div>
              </div>
              <div className="tg">
                <i className="bi bi-tags-fill"></i>
                Tags
                {" "}
                <span>
                  (Optional)
                </span>
              </div>
              <div className="ti">
                <input placeholder="Add tags (e.g. hypertension, cardiovascular)" />
                <i className="bi bi-plus-lg"></i>
              </div>
              <div className="tips">
                <h5>
                  <i className="bi bi-lightbulb-fill"></i>
                  Quick Tips
                </h5>
                <ul>
                  <li>
                    Use high-quality images (clear and readable).
                  </li>
                  <li>
                    Add detailed explanations for better learning.
                  </li>
                  <li>
                    Choose the correct product and subject for proper categorization.
                  </li>
                  <li>
                    Set the right difficulty level to maintain quality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <span>
            Last updated: 30 Apr 2024 • 10:24 AM
          </span>
          <span className="sp"></span>
          <button className="btn" id="save-question-draft" type="button">
            <i className="bi bi-file-earmark-text"></i>
            Save as Draft
          </button>
          <button className="btn p" id="publish-question" type="button">
            <i className="bi bi-send"></i>
            Publish Question
          </button>
        </div>
      </main>
    </div>
  );
}

export default memo(AddQuestionPage);
