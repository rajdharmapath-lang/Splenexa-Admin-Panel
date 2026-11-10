import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function UploadPdfPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-upload-pdf" ref={ref}>
      <main className="main">
        <header className="topbar">
          <input className="search" placeholder="Search PDFs, subjects, topics, files..." aria-label="Search PDFs" />
          <div className="top-spacer"></div>
          <button className="top-btn" aria-label="Notifications">
            ♧
          </button>
          <div className="profile">
            <div className="avatar">
              AK
            </div>
            <div className="profile-copy">
              <b>
                Admin Kumar
              </b>
              <small>
                Administrator
              </small>
            </div>
          </div>
        </header>
        <section className="content">
          <div className="heading">
            <div>
              <h1>
                Create PDF
              </h1>
              <p>
                Create and configure PDF study material. Add details, set access and publish to students.
              </p>
            </div>
            <div className="actions">
              <select className="control">
                <option>
                  Last 30 Days
                </option>
                <option>
                  Last 7 Days
                </option>
                <option>
                  Last 90 Days
                </option>
                <option>
                  Custom Range
                </option>
              </select>
              <a className="btn" href="#" data-fmge-back="PDF Management">
                â† Back to PDF Management
              </a>
            </div>
          </div>
          <div id="formError" className="error" role="alert"></div>
          <form id="pdfForm" noValidate>
            <div className="grid two">
              <div>
                <div className="card">
                  <div className="section-title">
                    <h2>
                      PDF Details
                    </h2>
                    <span>
                      Required fields *
                    </span>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="materialTitle">
                      Material Title *
                    </label>
                    <input className="control" id="materialTitle" required style={{ width: "100%" }} defaultValue="FMGE Rapid Revision Notes" placeholder="FMGE Rapid Revision Notes" />
                  </div>
                  <div className="form-grid">
                    <div className="field">
                      <label className="label" htmlFor="subject">
                        Subject *
                      </label>
                      <select className="control" id="subject" required style={{ width: "100%" }}>
                        <option value="">
                          Select subject
                        </option>
                        <option>
                          Anatomy
                        </option>
                        <option>
                          Physiology
                        </option>
                        <option>
                          Biochemistry
                        </option>
                        <option>
                          Microbiology
                        </option>
                        <option>
                          Pathology
                        </option>
                        <option>
                          Pharmacology
                        </option>
                        <option>
                          Forensic Medicine
                        </option>
                        <option>
                          PSM
                        </option>
                        <option>
                          Ophthalmology
                        </option>
                        <option>
                          ENT
                        </option>
                        <option>
                          Medicine
                        </option>
                        <option>
                          Surgery
                        </option>
                        <option>
                          Obs and Gynge
                        </option>
                        <option>
                          Pediatrics
                        </option>
                        <option>
                          Anaesthesia
                        </option>
                        <option>
                          Dermatology
                        </option>
                        <option>
                          Psychiatry
                        </option>
                        <option>
                          Orthopaedics
                        </option>
                        <option>
                          Radiology
                        </option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="topic">
                        Topic *
                      </label>
                      <select className="control" id="topic" required disabled style={{ width: "100%" }}>
                        <option value="">
                          Select subject first
                        </option>
                      </select>
                      <div className="helper">
                        Topics come from the selected academic subject.
                      </div>
                    </div>
                  </div>
                  <div className="form-grid">
                    <div className="field">
                      <label className="label" htmlFor="instructor">
                        Instructor
                      </label>
                      <select className="control" id="instructor" style={{ width: "100%" }}>
                        <option>
                          Select instructor
                        </option>
                        <option>
                          Dr. Mehta
                        </option>
                        <option>
                          Dr. Sharma
                        </option>
                        <option>
                          Dr. Rao
                        </option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor="language">
                        Language
                      </label>
                      <select className="control" id="language" style={{ width: "100%" }}>
                        <option>
                          English
                        </option>
                        <option>
                          Hindi
                        </option>
                        <option>
                          English + Hindi
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">
                      Description *
                    </label>
                    <div className="editor-toolbar">
                      <button type="button" data-command="bold">
                        <b>
                          B
                        </b>
                      </button>
                      <button type="button" data-command="italic">
                        <i>
                          I
                        </i>
                      </button>
                      <button type="button" data-command="underline">
                        <u>
                          U
                        </u>
                      </button>
                      <button type="button" data-command="insertUnorderedList">
                        • List
                      </button>
                      <button type="button" data-command="createLink">
                        Link
                      </button>
                    </div>
                    <div id="description" className="editor" contentEditable="true" role="textbox" aria-label="PDF description"></div>
                  </div>
                </div>
                <div className="card">
                  <div className="section-title">
                    <h2>
                      PDF File Upload
                    </h2>
                    <span>
                      PDF only · proposed maximum 100 MB
                    </span>
                  </div>
                  <div className="dropzone" id="pdfDropzone">
                    <div>
                      <strong>
                        â˜ Drag and drop your PDF file here
                      </strong>
                      <span>
                        Or click Browse Files to select a PDF
                      </span>
                      <input id="pdfFile" type="file" accept=".pdf,application/pdf" />
                    </div>
                  </div>
                  <p id="fileMeta" className="notice">
                    FMGE_Rapid_Revision_Notes.pdf · 12.4 MB · Example uploaded file
                  </p>
                  <div className="upload-controls">
                    <button type="button" className="btn" id="pauseUpload" disabled>
                      Pause
                    </button>
                    <button type="button" className="btn" id="retryUpload" disabled>
                      Retry
                    </button>
                    <button type="button" className="btn danger" id="cancelUpload" disabled>
                      Cancel
                    </button>
                  </div>
                </div>
                <div className="card image-workflow" id="imageWorkflow">
                  <div className="section-title">
                    <h2>
                      Image PDF Page Builder
                    </h2>
                    <span>
                      JPG, PNG or WebP
                    </span>
                  </div>
                  <div className="dropzone" id="imageDropzone">
                    <div>
                      <strong>
                        â˜ Add multiple page images
                      </strong>
                      <span>
                        Reorder, rotate or remove pages before conversion
                      </span>
                      <input id="imageFiles" type="file" accept="image/jpeg,image/png,image/webp" multiple />
                    </div>
                  </div>
                  <div id="imageList" className="image-list"></div>
                  <div className="conversion" id="conversion">
                    <div className="progress-label">
                      <span>
                        Image-to-PDF conversion
                      </span>
                      <b id="conversionPercent">
                        0%
                      </b>
                    </div>
                    <div className="progress">
                      <i id="conversionBar" style={{ width: "0%" }}></i>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="section-title">
                    <h2>
                      PDF Preview
                    </h2>
                    <span id="pageLabel">
                      1 / 3 · 100%
                    </span>
                  </div>
                  <div className="reader">
                    <div className="reader-page">
                      <strong>
                        FMGE STUDY MATERIAL
                      </strong>
                      <span>
                        Rapid Revision Notes
                      </span>
                      <span>
                        Medicine · Surgery · Pathology
                      </span>
                    </div>
                  </div>
                  <div className="reader-controls">
                    <button type="button" className="btn" id="previousPage">
                      â† Previous
                    </button>
                    <button type="button" className="btn" id="zoomOut">
                      −
                    </button>
                    <button type="button" className="btn" id="zoomIn">
                      +
                    </button>
                    <button type="button" className="btn" id="nextPage">
                      Next →
                    </button>
                    <button type="button" className="btn" id="fullscreen">
                      Full screen
                    </button>
                  </div>
                  <p className="helper">
                    Illustrative preview. Production viewing must use a secure document viewer and respect permissions.
                  </p>
                </div>
                <div className="card">
                  <div className="section-title">
                    <h2>
                      Access &amp; Availability
                    </h2>
                    <span>
                      Backend enforced
                    </span>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="courseAccess">
                      Course Access *
                    </label>
                    <select className="control" id="courseAccess" multiple required style={{ width: "100%", height: "100px" }}>
                      <option>
                        PLAN A
                      </option>
                      <option>
                        PLAN B
                      </option>
                      <option>
                        PLAN C
                      </option>
                      <option>
                        PDF
                      </option>
                    </select>
                    <div className="helper">
                      Hold Ctrl/Cmd to select multiple products.
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="accessType">
                      Access Type *
                    </label>
                    <select className="control" id="accessType" required style={{ width: "100%" }}>
                      <option value="">
                        Select access type
                      </option>
                      <option>
                        Subscription Only
                      </option>
                      <option>
                        Free Preview
                      </option>
                      <option>
                        Paid PDF (Individual Purchase)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="card">
                  <div className="section-title">
                    <h2>
                      PDF Settings
                    </h2>
                  </div>
                  <label className="check-row">
                    <input id="allowDownload" type="checkbox" defaultChecked />
                    {" "}
                    Allow Download
                  </label>
                  <label className="check-row">
                    <input id="showCurriculum" type="checkbox" defaultChecked />
                    {" "}
                    Show in Curriculum
                  </label>
                  <label className="check-row">
                    <input id="featuredMaterial" type="checkbox" />
                    {" "}
                    Featured Material
                  </label>
                  <label className="check-row">
                    <input id="enableComments" type="checkbox" />
                    {" "}
                    Enable Comments
                  </label>
                  <p className="notice backend-note">
                    Download restrictions must be enforced server-side. A frontend toggle cannot protect content by itself.
                  </p>
                </div>
                <div className="card">
                  <div className="section-title">
                    <h2>
                      Publishing Options
                    </h2>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor="publishingStatus">
                      Publishing Status *
                    </label>
                    <select className="control" id="publishingStatus" required style={{ width: "100%" }}>
                      <option>
                        Draft
                      </option>
                      <option>
                        Publish Now
                      </option>
                      <option>
                        Schedule Publish
                      </option>
                    </select>
                  </div>
                  <div className="field" id="scheduleField" hidden>
                    <label className="label" htmlFor="scheduleDate">
                      Schedule Date and Time
                    </label>
                    <input className="control" id="scheduleDate" type="datetime-local" style={{ width: "100%" }} />
                  </div>
                  <div className="actions">
                    <button type="button" className="btn" id="draftButton">
                      Save as Draft
                    </button>
                    <button type="submit" className="btn primary" id="publishButton">
                      Publish PDF
                    </button>
                  </div>
                </div>
                <div className="card published-summary" id="publishedSummary">
                  <div className="section-title">
                    <h2>
                      Publication Summary
                    </h2>
                    <span className="badge">
                      Ready
                    </span>
                  </div>
                  <div className="status-line">
                    <span>
                      Material
                    </span>
                    <b id="summaryTitle"></b>
                  </div>
                  <div className="status-line">
                    <span>
                      Status
                    </span>
                    <b>
                      Published
                    </b>
                  </div>
                  <div className="status-line">
                    <span>
                      Assigned products
                    </span>
                    <b id="summaryCourses"></b>
                  </div>
                  <div className="actions" style={{ marginTop: "12px" }}>
                    <button type="button" className="btn">
                      View PDF
                    </button>
                    <a className="btn" href="#" data-fmge-back="PDF Management">
                      Return to PDF Management
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <div className="modal" id="savedModal" hidden>
        <div className="modal-box">
          <div className="modal-head">
            <h2 id="savedTitle">
              PDF saved
            </h2>
            <button className="close" data-close="">
              ×
            </button>
          </div>
          <p id="savedMessage" className="notice"></p>
          <button className="btn primary" data-close="">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(UploadPdfPage);
