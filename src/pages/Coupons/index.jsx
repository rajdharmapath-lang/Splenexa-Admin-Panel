import { memo } from 'react';
import useLegacyScript from '../../legacy/useLegacyScript';
import init from './legacy';
import './styles.css';

function CouponsPage() {
  const ref = useLegacyScript(init);
  return (
    <div className="pg pg-coupons" ref={ref}>
      <main>
        <div className="top">
          <label className="search">
            <i className="bi bi-search"></i>
            <input placeholder="Search coupons, offers, codes..." />
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
            <div>
              <h1>
                Coupons &amp; Offers
                {" "}
                <i className="bi bi-tag-fill"></i>
              </h1>
              <p>
                Create and manage discount coupons, special offers and promotional campaigns for FMGE students.
              </p>
            </div>
            <div className="date">
              <i className="bi bi-calendar-event"></i>
              01 Apr 2024 - 30 Apr 2024
              {" "}
              <i className="bi bi-chevron-down" style={{ marginLeft: "8px" }}></i>
            </div>
          </div>
          <div className="lay">
            <div className="left">
              <div className="g kpis">
                <div className="card kpi">
                  <div className="ic">
                    <i className="bi bi-tags-fill"></i>
                  </div>
                  <div>
                    <h4>
                      Total Coupons
                    </h4>
                    <div className="n">
                      48
                    </div>
                    <small>
                      +6 this month
                    </small>
                  </div>
                </div>
                <div className="card kpi">
                  <div className="ic b">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div>
                    <h4>
                      Total Redemptions
                    </h4>
                    <div className="n">
                      1,862
                    </div>
                    <span className="up">
                      <i className="bi bi-arrow-up"></i>
                      {" "}
                      24%
                    </span>
                    {" "}
                    <small>
                      +456 this month
                    </small>
                  </div>
                </div>
                <div className="card kpi">
                  <div className="ic b">
                    <i className="bi bi-currency-rupee"></i>
                  </div>
                  <div>
                    <h4>
                      Total Discount Given
                    </h4>
                    <div className="n">
                      ₹ 4,82,500
                    </div>
                    <span className="up">
                      <i className="bi bi-arrow-up"></i>
                      {" "}
                      18%
                    </span>
                    {" "}
                    <small>
                      +₹1,20,000 this month
                    </small>
                  </div>
                </div>
                <div className="card kpi">
                  <div className="ic">
                    <i className="bi bi-cart-fill"></i>
                  </div>
                  <div>
                    <h4>
                      Revenue from Coupons
                    </h4>
                    <div className="n">
                      ₹ 18,24,000
                    </div>
                    <span className="up">
                      <i className="bi bi-arrow-up"></i>
                      {" "}
                      32%
                    </span>
                    {" "}
                    <small>
                      +₹4,40,000 this month
                    </small>
                  </div>
                </div>
              </div>
              <div className="g r2">
                <div className="card">
                  <div className="ch">
                    <h3>
                      Coupon Redemptions Trend
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
                      Redemptions
                    </span>
                    <span>
                      <i style={{ background: "#19c3b0" }}></i>
                      Discount Amount (₹)
                    </span>
                  </div>
                  <svg id="c1" viewBox="0 0 520 170"></svg>
                </div>
                <div className="card">
                  <div className="ch">
                    <h3>
                      Top Performing Coupons
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
              <div className="g r3">
                <div className="card">
                  <h3>
                    Coupon Type Distribution
                  </h3>
                  <div className="db">
                    <div className="donut" style={{ background: "conic-gradient(#1d6fe8 0 37.5%,#2fc4b0 37.5% 62.5%,#f9a823 62.5% 79%,#8b4fe0 79% 91.5%,#f44f4f 91.5%)" }}>
                      <div>
                        <b>
                          48
                        </b>
                        Coupons
                      </div>
                    </div>
                    <div className="ds">
                      <div>
                        <i style={{ background: "#1d6fe8" }}></i>
                        Percentage Discount
                        <b>
                          18
                        </b>
                      </div>
                      <div>
                        <i style={{ background: "#2fc4b0" }}></i>
                        Flat Discount
                        <b>
                          12
                        </b>
                      </div>
                      <div>
                        <i style={{ background: "#f9a823" }}></i>
                        Free Course Access
                        <b>
                          8
                        </b>
                      </div>
                      <div>
                        <i style={{ background: "#8b4fe0" }}></i>
                        Bundle Offer
                        <b>
                          6
                        </b>
                      </div>
                      <div>
                        <i style={{ background: "#f44f4f" }}></i>
                        Live Class Offer
                        <b>
                          4
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="ch">
                    <h3>
                      Recent Coupon Activity
                    </h3>
                    <a className="va" href="#">
                      View All
                    </a>
                  </div>
                  <div className="tw">
                    <table>
                      <thead>
                        <tr>
                          <th>
                            #
                          </th>
                          <th>
                            Code
                          </th>
                          <th>
                            Student
                          </th>
                          <th>
                            Product
                          </th>
                          <th>
                            Discount
                          </th>
                          <th>
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody id="ra"></tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="fl">
                  <h3>
                    All Coupons
                  </h3>
                  <label className="fi s">
                    <i className="bi bi-search" style={{ color: "#0a2f78" }}></i>
                    <input placeholder="Search coupons..." />
                  </label>
                  <div className="fi" style={{ width: "110px" }}>
                    All Status
                    {" "}
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <div className="fi" style={{ width: "110px" }}>
                    Latest First
                    {" "}
                    <i className="bi bi-chevron-down"></i>
                  </div>
                  <button className="btn p" id="create-coupon-button" type="button">
                    <i className="bi bi-plus-lg"></i>
                    Create Coupon
                  </button>
                </div>
                <div className="tw">
                  <table style={{ minWidth: "760px" }}>
                    <thead>
                      <tr>
                        <th>
                          Coupon Code
                        </th>
                        <th>
                          Coupon Name
                        </th>
                        <th>
                          Type
                        </th>
                        <th>
                          Discount
                        </th>
                        <th>
                          Products
                        </th>
                        <th>
                          Usage
                        </th>
                        <th>
                          Validity
                        </th>
                        <th>
                          Status
                        </th>
                        <th>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody id="ac"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default memo(CouponsPage);
