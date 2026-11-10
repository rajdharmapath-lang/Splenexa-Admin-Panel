import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function PdfManagementPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-pdf-management" ref={ref}>
      <main>
        <div className="top">
          <label className="search">
            <i className="bi bi-search"></i>
            <input placeholder="Search PDFs, subjects, topics, files..." />
          </label>
          <div className="r">
            <div className="bell">
              <i className="bi bi-bell"></i>
              <em>
                6
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
                PDF Management
                {" "}
                <i className="bi bi-file-earmark-pdf-fill"></i>
              </h1>
              <p>
                Upload, organize and manage FMGE PDF study material. Track downloads and student engagement.
              </p>
            </div>
            <div className="date">
              <i className="bi bi-calendar-event"></i>
              01 Apr 2024 - 30 Apr 2024
              {" "}
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
          <div className="g kpis">
            <div className="card kpi">
              <div className="ic">
                <i className="bi bi-file-earmark-pdf-fill"></i>
              </div>
              <div>
                <h4>
                  Total PDFs
                </h4>
                <div className="n">
                  684
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  18%
                </span>
                {" "}
                <small>
                  +104 this month
                </small>
              </div>
            </div>
            <div className="card kpi">
              <div className="ic b">
                <i className="bi bi-download"></i>
              </div>
              <div>
                <h4>
                  Total Downloads
                </h4>
                <div className="n">
                  1,84,260
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  26%
                </span>
                {" "}
                <small>
                  +32,480 this month
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
                  3,42,580
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  21%
                </span>
                {" "}
                <small>
                  +44,210 this month
                </small>
              </div>
            </div>
            <div className="card kpi">
              <div className="ic">
                <i className="bi bi-people-fill"></i>
              </div>
              <div>
                <h4>
                  Unique Readers
                </h4>
                <div className="n">
                  18,920
                </div>
                <span className="up">
                  <i className="bi bi-arrow-up"></i>
                  {" "}
                  24%
                </span>
                {" "}
                <small>
                  +3,120 this month
                </small>
              </div>
            </div>
            <div className="card kpi">
              <div className="ic b">
                <i className="bi bi-cloud-arrow-up-fill"></i>
              </div>
              <div>
                <h4>
                  Storage Used
                </h4>
                <div className="n">
                  42 GB
                </div>
                <small style={{ color: "var(--ink)" }}>
                  of 200 GB (21%)
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
                  PDF Views &amp; Download Trend
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
                  PDF Views
                </span>
                <span>
                  <i style={{ background: "#1ea7e8" }}></i>
                  Downloads
                </span>
              </div>
              <svg className="trend-svg" viewBox="0 0 640 214" role="img" aria-label="PDF views and downloads trend">
                <g className="grid">
                  <path d="M48 22H575M48 54H575M48 86H575M48 118H575M48 150H575"></path>
                  <path d="M48 22V150M82 22V150M116 22V150M150 22V150M184 22V150M218 22V150M252 22V150M286 22V150M320 22V150M354 22V150M388 22V150M422 22V150M456 22V150M490 22V150M524 22V150M558 22V150"></path>
                </g>
                <g>
                  <text x="40" y="26" textAnchor="end">
                    10K
                  </text>
                  <text x="40" y="58" textAnchor="end">
                    8K
                  </text>
                  <text x="40" y="90" textAnchor="end">
                    6K
                  </text>
                  <text x="40" y="122" textAnchor="end">
                    4K
                  </text>
                  <text x="40" y="154" textAnchor="end">
                    0
                  </text>
                  <text x="588" y="26">
                    500
                  </text>
                  <text x="588" y="58">
                    400
                  </text>
                  <text x="588" y="90">
                    300
                  </text>
                  <text x="588" y="122">
                    200
                  </text>
                  <text x="588" y="154">
                    0
                  </text>
                  <text x="48" y="177" textAnchor="middle">
                    Apr 1
                  </text>
                  <text x="116" y="177" textAnchor="middle">
                    Apr 5
                  </text>
                  <text x="218" y="177" textAnchor="middle">
                    Apr 10
                  </text>
                  <text x="320" y="177" textAnchor="middle">
                    Apr 15
                  </text>
                  <text x="422" y="177" textAnchor="middle">
                    Apr 20
                  </text>
                  <text x="524" y="177" textAnchor="middle">
                    Apr 25
                  </text>
                  <text x="558" y="177" textAnchor="middle">
                    Apr 30
                  </text>
                </g>
                <g className="bar">
                  <path d="M54 150V132H66V150ZM88 150V123H100V150ZM122 150V114H134V150ZM156 150V105H168V150ZM190 150V119H202V150ZM224 150V98H236V150ZM258 150V108H270V150ZM292 150V84H304V150ZM326 150V104H338V150ZM360 150V93H372V150ZM394 150V76H406V150ZM428 150V88H440V150ZM462 150V69H474V150ZM496 150V55H508V150ZM530 150V44H542V150ZM564 150V52H576V150Z"></path>
                </g>
                <path className="line" d="M60 126L94 117L128 105L162 97L196 91L230 77L264 91L298 81L332 86L366 72L400 68L434 56L468 62L502 44L536 51L570 31"></path>
                <g className="dot">
                  <circle cx="60" cy="126" r="3"></circle>
                  <circle cx="94" cy="117" r="3"></circle>
                  <circle cx="128" cy="105" r="3"></circle>
                  <circle cx="162" cy="97" r="3"></circle>
                  <circle cx="196" cy="91" r="3"></circle>
                  <circle cx="230" cy="77" r="3"></circle>
                  <circle cx="264" cy="91" r="3"></circle>
                  <circle cx="298" cy="81" r="3"></circle>
                  <circle cx="332" cy="86" r="3"></circle>
                  <circle cx="366" cy="72" r="3"></circle>
                  <circle cx="400" cy="68" r="3"></circle>
                  <circle cx="434" cy="56" r="3"></circle>
                  <circle cx="468" cy="62" r="3"></circle>
                  <circle cx="502" cy="44" r="3"></circle>
                  <circle cx="536" cy="51" r="3"></circle>
                  <circle cx="570" cy="31" r="3"></circle>
                </g>
              </svg>
            </div>
            <div className="card">
              <div className="ch">
                <h3>
                  Top Performing PDFs
                </h3>
                <select>
                  <option>
                    Last 30 Days
                  </option>
                </select>
              </div>
              <svg className="performance-svg" viewBox="0 0 640 214" role="img" aria-label="Top performing PDFs">
                <g>
                  <rect className="thumb" x="0" y="12" width="58" height="34" rx="3"></rect>
                  <rect className="thumb" x="0" y="52" width="58" height="34" rx="3"></rect>
                  <rect className="thumb" x="0" y="92" width="58" height="34" rx="3"></rect>
                  <rect className="thumb" x="0" y="132" width="58" height="34" rx="3"></rect>
                  <rect className="thumb" x="0" y="172" width="58" height="34" rx="3"></rect>
                  <text x="29" y="34" textAnchor="middle" fill="#fff">
                    PDF
                  </text>
                  <text x="29" y="74" textAnchor="middle" fill="#fff">
                    PDF
                  </text>
                  <text x="29" y="114" textAnchor="middle" fill="#fff">
                    PDF
                  </text>
                  <text x="29" y="154" textAnchor="middle" fill="#fff">
                    PDF
                  </text>
                  <text x="29" y="194" textAnchor="middle" fill="#fff">
                    PDF
                  </text>
                  <text x="72" y="33">
                    Rapid Revision Notes
                  </text>
                  <text x="72" y="73">
                    Medicine Important Topics
                  </text>
                  <text x="72" y="113">
                    FMGE Previous Papers
                  </text>
                  <text x="72" y="153">
                    Pathology Quick Notes
                  </text>
                  <text x="72" y="193">
                    Pharmacology Essential Topics
                  </text>
                  <rect className="bar" x="285" y="18" width="205" height="21"></rect>
                  <rect className="bar alt" x="285" y="58" width="154" height="21"></rect>
                  <rect className="bar light" x="285" y="98" width="113" height="21"></rect>
                  <rect className="bar pale" x="285" y="138" width="91" height="21"></rect>
                  <rect className="bar soft" x="285" y="178" width="66" height="21"></rect>
                  <text x="500" y="33">
                    18,456 views
                  </text>
                  <text x="449" y="73">
                    13,920 views
                  </text>
                  <text x="408" y="113">
                    10,542 views
                  </text>
                  <text x="386" y="153">
                    8,820 views
                  </text>
                  <text x="361" y="193">
                    6,410 views
                  </text>
                </g>
              </svg>
            </div>
          </div>
          <div className="g row3">
            <div className="card">
              <h3>
                PDF Category Distribution
              </h3>
              <div className="donutbox">
                <div className="donut" style={{ background: "conic-gradient(#0a56a8 0 28%,#2da6f0 28% 52%,#1fb57f 52% 71%,#f9a823 71% 87%,#f44f4f 87%)" }}>
                  <div>
                    <b>
                      684
                    </b>
                    PDFs
                  </div>
                </div>
                <div className="ds">
                  <div>
                    <i style={{ background: "#0a56a8" }}></i>
                    Medicine
                    <b>
                      196
                    </b>
                    <span>
                      (28%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#2da6f0" }}></i>
                    Surgery
                    <b>
                      164
                    </b>
                    <span>
                      (24%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#1fb57f" }}></i>
                    Anatomy
                    <b>
                      130
                    </b>
                    <span>
                      (19%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#f9a823" }}></i>
                    Pathology
                    <b>
                      110
                    </b>
                    <span>
                      (16%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="ch">
                <h3>
                  Recent Uploads
                </h3>
                <a href="#" style={{ color: "#0b5cc4" }}>
                  View All
                </a>
              </div>
              <div className="ru">
                <div>
                  <span className="rk">
                    1
                  </span>
                  <span className="thumb">
                    <i className="bi bi-file-earmark-pdf-fill"></i>
                  </span>
                  <span>
                    Cardiology Notes
                  </span>
                  <span className="d">
                    28 Apr 2024
                  </span>
                </div>
                <div>
                  <span className="rk">
                    2
                  </span>
                  <span className="thumb">
                    <i className="bi bi-file-earmark-pdf-fill"></i>
                  </span>
                  <span>
                    Respiratory Overview
                  </span>
                  <span className="d">
                    27 Apr 2024
                  </span>
                </div>
                <div>
                  <span className="rk">
                    3
                  </span>
                  <span className="thumb">
                    <i className="bi bi-file-earmark-pdf-fill"></i>
                  </span>
                  <span>
                    Antibiotics Points
                  </span>
                  <span className="d">
                    26 Apr 2024
                  </span>
                </div>
                <div>
                  <span className="rk">
                    4
                  </span>
                  <span className="thumb">
                    <i className="bi bi-file-earmark-pdf-fill"></i>
                  </span>
                  <span>
                    ENT Clinical Cases
                  </span>
                  <span className="d">
                    25 Apr 2024
                  </span>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>
                PDF Status
              </h3>
              <div className="donutbox">
                <div className="donut" style={{ background: "conic-gradient(#12b27a 0 84%,#f9a823 84% 91%,#2d88f0 91% 97%,#8b4fe0 97%)" }}>
                  <div>
                    <b>
                      684
                    </b>
                    PDFs
                  </div>
                </div>
                <div className="ds">
                  <div>
                    <i style={{ background: "#12b27a" }}></i>
                    Published
                    <b>
                      574
                    </b>
                    <span>
                      (84%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#f9a823" }}></i>
                    Processing
                    <b>
                      48
                    </b>
                    <span>
                      (7%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#2d88f0" }}></i>
                    Draft
                    <b>
                      41
                    </b>
                    <span>
                      (6%)
                    </span>
                  </div>
                  <div>
                    <i style={{ background: "#8b4fe0" }}></i>
                    Scheduled
                    <b>
                      21
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
                All PDFs
              </h3>
              <label className="fi">
                <i className="bi bi-search"></i>
                <input placeholder="Search by title, subject, topic..." />
              </label>
              <div className="fi sel">
                All Subjects
                {" "}
                <i className="bi bi-chevron-down"></i>
              </div>
              <div className="fi sel">
                All Status
                {" "}
                <i className="bi bi-chevron-down"></i>
              </div>
              <div className="fi sel">
                Latest First
                {" "}
                <i className="bi bi-chevron-down"></i>
              </div>
              <button className="btn" id="create-pdf-button" type="button">
                <i className="bi bi-plus-lg"></i>
                Create PDF
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
                      PDF Title
                    </th>
                    <th>
                      Subject
                    </th>
                    <th>
                      Topic
                    </th>
                    <th>
                      Pages
                    </th>
                    <th>
                      Downloads
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
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>
                      FMGE Rapid Revision Notes
                    </td>
                    <td>
                      Medicine
                    </td>
                    <td>
                      Cardiology
                    </td>
                    <td>
                      120
                    </td>
                    <td>
                      18,456
                    </td>
                    <td>
                      28 Apr 2024
                    </td>
                    <td>
                      <span className="pill ok">
                        Published
                      </span>
                    </td>
                    <td className="acts">
                      <i className="bi bi-eye"></i>
                      <i className="bi bi-pencil-fill"></i>
                      <i className="bi bi-three-dots-vertical"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2
                    </td>
                    <td>
                      Respiratory System Overview
                    </td>
                    <td>
                      Medicine
                    </td>
                    <td>
                      Pulmonology
                    </td>
                    <td>
                      86
                    </td>
                    <td>
                      13,920
                    </td>
                    <td>
                      27 Apr 2024
                    </td>
                    <td>
                      <span className="pill ok">
                        Published
                      </span>
                    </td>
                    <td className="acts">
                      <i className="bi bi-eye"></i>
                      <i className="bi bi-pencil-fill"></i>
                      <i className="bi bi-three-dots-vertical"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3
                    </td>
                    <td>
                      FMGE Previous Year Papers
                    </td>
                    <td>
                      All Subjects
                    </td>
                    <td>
                      Question Papers
                    </td>
                    <td>
                      240
                    </td>
                    <td>
                      10,542
                    </td>
                    <td>
                      26 Apr 2024
                    </td>
                    <td>
                      <span className="pill draft">
                        Draft
                      </span>
                    </td>
                    <td className="acts">
                      <i className="bi bi-eye"></i>
                      <i className="bi bi-pencil-fill"></i>
                      <i className="bi bi-three-dots-vertical"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(PdfManagementPage);
