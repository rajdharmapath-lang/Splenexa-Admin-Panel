import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function CreateCouponPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-create-coupon" ref={ref}>
      <main>
        <div className="top">
          <label className="search">
            <i className="bi bi-search"></i>
            <input placeholder="Search students, coupons, products..." />
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
                Create Coupon &amp; Offer
                {" "}
                <i className="bi bi-tag-fill"></i>
              </h1>
              <p>
                Create discount coupons and special offers for FMGE students.
              </p>
            </div>
            <div className="hr">
              <div className="back">
                <i className="bi bi-arrow-left"></i>
                Back to Coupons &amp; Offers
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
              <div className="card">
                <h3 style={{ marginBottom: "10px" }}>
                  <i className="bi bi-file-earmark-text-fill"></i>
                  Basic Details
                </h3>
                <label className="f">
                  Coupon Type
                  {" "}
                  <s>
                    *
                  </s>
                </label>
                <div className="types" id="types">
                  <div className="ty on">
                    <i className="bi bi-percent"></i>
                    <div>
                      <b>
                        Discount Coupon
                      </b>
                      <small>
                        Give percentage or flat discount
                      </small>
                    </div>
                  </div>
                  <div className="ty">
                    <i className="bi bi-gift-fill"></i>
                    <div>
                      <b>
                        Special Offer
                      </b>
                      <small>
                        Free course access, bundle or other offers
                      </small>
                    </div>
                  </div>
                </div>
                <div className="gr">
                  <div>
                    <label className="f">
                      Coupon Code
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <input className="in" id="code" defaultValue="FMGE30" />
                  </div>
                  <button className="gen" id="gen">
                    <i className="bi bi-arrow-repeat"></i>
                    Generate
                  </button>
                  <div style={{ marginLeft: "-12px" }}>
                    <label className="f">
                      Coupon Name
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <input className="in" id="nm" defaultValue="FMGE Special Offer" />
                  </div>
                </div>
                <label className="f" style={{ marginTop: "14px" }}>
                  Description
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
                  <div className="b" contentEditable="true">
                    Get 30% discount on FMGE Full Course. Limited period offer for serious aspirants.
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "12px" }}>
                  <i className="bi bi-percent" style={{ background: "#1d6fe8", color: "#fff", borderRadius: "50%", width: "24px", height: "24px", fontSize: "13px", display: "grid", placeItems: "center" }}></i>
                  Discount Configuration
                </h3>
                <div className="dc">
                  <div>
                    <label className="f">
                      Discount Type
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <label className="rd">
                      <input type="radio" name="d" defaultChecked />
                      <span className="c"></span>
                      Percentage Discount
                    </label>
                    <label className="rd">
                      <input type="radio" name="d" />
                      <span className="c"></span>
                      Flat Discount
                    </label>
                  </div>
                  <div>
                    <label className="f">
                      Discount Value
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <div className="val">
                      <input id="dv" defaultValue="30" />
                      <span>
                        %
                      </span>
                    </div>
                    <div className="help">
                      Enter value between 1 and 100.
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      Maximum Discount
                      {" "}
                      <span>
                        (Optional)
                      </span>
                    </label>
                    <div className="val">
                      <input defaultValue="5000" />
                      <span className="w">
                        ₹
                      </span>
                    </div>
                    <div className="help">
                      Maximum discount amount per order.
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "12px" }}>
                  <i className="bi bi-layers-fill"></i>
                  Applicability
                </h3>
                <div className="ap">
                  <div>
                    <label className="f">
                      Applicable Products
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <div className="sl" style={{ height: "36px", padding: "0 8px" }}>
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
                        <span className="tg2">
                          Live Classes
                          {" "}
                          <i className="bi bi-x-lg"></i>
                        </span>
                      </div>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      Applicable Subjects
                      {" "}
                      <span>
                        (Optional)
                      </span>
                    </label>
                    <div className="sl" style={{ height: "36px" }}>
                      <select>
                        <option>
                          All Subjects
                        </option>
                        <option>
                          Medicine
                        </option>
                      </select>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  </div>
                </div>
                <div className="ap2">
                  <div>
                    <label className="f">
                      Minimum Purchase Amount
                      {" "}
                      <span>
                        (Optional)
                      </span>
                    </label>
                    <div className="val" style={{ height: "34px" }}>
                      <input defaultValue="1000" />
                      <span className="w">
                        ₹
                      </span>
                    </div>
                    <div className="help">
                      Order must be at least this amount.
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      User Eligibility
                    </label>
                    <div className="sl" style={{ height: "36px" }}>
                      <select>
                        <option>
                          All Students
                        </option>
                        <option>
                          New Students
                        </option>
                      </select>
                      <i className="bi bi-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "6px" }}>
                  <i className="bi bi-person-fill"></i>
                  Usage Limits
                </h3>
                <div className="ul">
                  <div>
                    <label className="f">
                      Total Usage Limit
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <input className="in" defaultValue="500" />
                    <div className="help" style={{ fontSize: "9px" }}>
                      Total number of times this coupon can be used.
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      Per User Limit
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <input className="in" defaultValue="1" />
                    <div className="help" style={{ fontSize: "9px" }}>
                      Each student can use this coupon maximum this many times.
                    </div>
                  </div>
                  <div className="tgl" style={{ marginTop: "8px" }}>
                    <label className="sw">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        First Purchase Only
                      </b>
                      <small>
                        Allow only for first purchase by a student.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="stack">
              <div className="card">
                <h3 style={{ marginBottom: "12px" }}>
                  <i className="bi bi-calendar2-week-fill"></i>
                  Validity Period
                </h3>
                <div className="vd">
                  <div>
                    <label className="f">
                      Start Date
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <div className="dt">
                      01 Apr 2024
                      <i className="bi bi-calendar3"></i>
                    </div>
                  </div>
                  <div>
                    <label className="f">
                      End Date
                      {" "}
                      <s>
                        *
                      </s>
                    </label>
                    <div className="dt">
                      30 Apr 2024
                      <i className="bi bi-calendar3"></i>
                    </div>
                  </div>
                </div>
                <div className="tgl">
                  <label className="sw big">
                    <input type="checkbox" defaultChecked />
                    <span></span>
                  </label>
                  <div style={{ marginTop: "0" }}>
                    <b style={{ fontSize: "12px", marginBottom: "2px" }}>
                      Active
                    </b>
                    <small style={{ fontSize: "11px", color: "#1a5db0" }}>
                      Coupon will be valid within the selected period
                    </small>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "12px" }}>
                  <i className="bi bi-eye-fill"></i>
                  Offer Preview
                </h3>
                <div className="pvw">
                  <div className="tx">
                    <h2 id="pc">
                      FMGE30
                    </h2>
                    <p id="pn">
                      FMGE Special Offer
                    </p>
                    <span className="pill">
                      Get
                      {" "}
                      <span id="pv">
                        30
                      </span>
                      % OFF
                    </span>
                    <span className="pr">
                      on FMGE Full Course
                    </span>
                  </div>
                  <div className="bk">
                    <i className="bi bi-journals"></i>
                  </div>
                  <div className="rb">
                    LIMITED TIME
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 style={{ marginBottom: "6px" }}>
                  <i className="bi bi-gear-fill"></i>
                  Additional Settings
                </h3>
                <div className="as">
                  <div className="tgl">
                    <label className="sw">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Allow Combination
                      </b>
                      <small>
                        Allow with other offers
                      </small>
                    </div>
                  </div>
                  <div className="tgl">
                    <label className="sw">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Auto Apply (Campaign)
                      </b>
                      <small>
                        Apply automatically if eligible
                      </small>
                    </div>
                  </div>
                  <div className="tgl">
                    <label className="sw">
                      <input type="checkbox" defaultChecked />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Show in Homepage
                      </b>
                      <small>
                        Display in offers section
                      </small>
                    </div>
                  </div>
                  <div className="tgl">
                    <label className="sw">
                      <input type="checkbox" defaultChecked />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Show on Checkout Page
                      </b>
                      <small>
                        Display on checkout page
                      </small>
                    </div>
                  </div>
                  <div className="tgl">
                    <label className="sw">
                      <input type="checkbox" defaultChecked />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Send Notification
                      </b>
                      <small>
                        Notify students about this offer
                      </small>
                    </div>
                  </div>
                  <div className="tgl">
                    <label className="sw">
                      <input type="checkbox" />
                      <span></span>
                    </label>
                    <div>
                      <b>
                        Featured Offer
                      </b>
                      <small>
                        Highlight in featured section
                      </small>
                    </div>
                  </div>
                </div>
                <div className="note">
                  <i className="bi bi-info-circle-fill"></i>
                  Make sure the coupon code is unique and all details are correct before publishing.
                </div>
              </div>
              <div className="btns">
                <div className="btn">
                  <i className="bi bi-file-earmark-text"></i>
                  Save as Draft
                </div>
                <div className="btn p">
                  <i className="bi bi-send"></i>
                  Create Coupon / Offer
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(CreateCouponPage);
