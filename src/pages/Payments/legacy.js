// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
const DAY_MS = 86400000;
    const subjects = [
      "Anatomy", "Physiology", "Biochemistry", "Microbiology", "Pathology",
      "Pharmacology", "Forensic Medicine", "PSM", "Ophthalmology", "ENT",
      "Medicine", "Surgery", "Obs and Gynge", "Pediatrics", "Anaesthesia",
      "Dermatology", "Psychiatry", "Orthopaedics", "Radiology"
    ];
    const products = [
      { id: "pdf-library", name: "PDF", validity: 365, activation: "After payment verification", status: "Active" },
      { id: "image-based-test", name: "Image Based", validity: 365, activation: "After payment verification", status: "Active" },
      { id: "video-library", name: "Video", validity: 365, activation: "After payment verification", status: "Active" }
    ];
    const plans = [
      { id: "plan-a", name: "PLAN A", productIds: ["image-based-test", "video-library"], baseFee: 0, discount: 0, validity: 365, paymentMode: "One-time", activation: "After payment verification", status: "Draft" },
      { id: "plan-b", name: "PLAN B", productIds: ["pdf-library", "video-library"], baseFee: 0, discount: 0, validity: 365, paymentMode: "One-time", activation: "After payment verification", status: "Draft" },
      { id: "plan-c", name: "PLAN C", productIds: ["pdf-library", "image-based-test"], baseFee: 0, discount: 0, validity: 365, paymentMode: "One-time", activation: "After payment verification", status: "Draft" }
    ];
    try {
      const savedPlans = JSON.parse(window.sessionStorage.getItem("fmge-payment-plans") || "null");
      if (Array.isArray(savedPlans)) plans.splice(0, plans.length, ...savedPlans);
    } catch (error) {
      console.error("Could not load saved fee plans.", error);
    }
    const students = [
      { id: "STU-001", name: "Neha Gupta", email: "neha.gupta@gmail.com" },
      { id: "STU-002", name: "Karan Mehta", email: "karan.mehta@yahoo.com" },
      { id: "STU-003", name: "Riya Nair", email: "riya.nair@gmail.com" },
      { id: "STU-004", name: "Vikram Reddy", email: "vikram.reddy@gmail.com" },
      { id: "STU-005", name: "Pooja Sharma", email: "pooja.sharma@gmail.com" }
    ];
    const now = new Date();
    const daysAgo = days => {
      const date = new Date();
      date.setHours(12, 0, 0, 0);
      date.setDate(date.getDate() - days);
      return date.toISOString().slice(0, 10);
    };
    const timestampDaysAgo = (days, hour, minute) => {
      const date = new Date();
      date.setHours(hour, minute, 0, 0);
      date.setDate(date.getDate() - days);
      return date.toISOString();
    };
    const transactions = [
      { id: "TXN-240430-01", gatewayReference: "pay_demo_a71e42", date: timestampDaysAgo(0, 10, 24), student: "Neha Gupta", studentId: "STU-001", product: "Q Bank (19 Subjects)", productId: "q-bank-19", baseFee: 4999, discountPercent: 0, discountAmount: 0, amount: 4999, tax: 0, paymentMethod: "UPI · Illustrative", status: "Success", refundHistory: [], entitlementStatus: "Active" },
      { id: "TXN-240430-02", gatewayReference: "pay_demo_b93c14", date: timestampDaysAgo(0, 9, 18), student: "Karan Mehta", studentId: "STU-002", product: "Grand Test", productId: "grand-test", baseFee: 999, discountPercent: 0, discountAmount: 0, amount: 999, tax: 0, paymentMethod: "Card · Illustrative", status: "Success", refundHistory: [], entitlementStatus: "Active" },
      { id: "TXN-240429-03", gatewayReference: "pay_demo_f35a90", date: timestampDaysAgo(1, 6, 45), student: "Riya Nair", studentId: "STU-003", product: "Subject-wise Test (19 Subjects)", productId: "subject-wise-test", baseFee: 2999, discountPercent: 0, discountAmount: 0, amount: 2999, tax: 0, paymentMethod: "UPI · Illustrative", status: "Pending", refundHistory: [], entitlementStatus: "Not granted" },
      { id: "TXN-240429-04", gatewayReference: "pay_demo_62bc18", date: timestampDaysAgo(1, 4, 12), student: "Vikram Reddy", studentId: "STU-004", product: "PDF", productId: "pdf-library", baseFee: 1999, discountPercent: 0, discountAmount: 0, amount: 1999, tax: 0, paymentMethod: "Net banking · Illustrative", status: "Success", refundHistory: [], entitlementStatus: "Active" },
      { id: "TXN-240428-05", gatewayReference: "pay_demo_09de23", date: timestampDaysAgo(2, 11, 37), student: "Pooja Sharma", studentId: "STU-005", product: "PLAN A", productId: "plan-a", baseFee: 14999, discountPercent: 10, discountAmount: 1499.9, amount: 13499, tax: 0, paymentMethod: "Card · Illustrative", status: "Failed", refundHistory: [], entitlementStatus: "Not granted" },
      { id: "TXN-240425-06", gatewayReference: "pay_demo_35bc17", date: timestampDaysAgo(5, 15, 5), student: "Neha Gupta", studentId: "STU-001", product: "Image-based Test", productId: "image-based-test", baseFee: 1999, discountPercent: 0, discountAmount: 0, amount: 1999, tax: 0, paymentMethod: "UPI · Illustrative", status: "Refunded", refundHistory: [{ date: timestampDaysAgo(3, 11, 20), amount: 1999, reference: "ref_demo_4999" }], entitlementStatus: "Revoked" },
      { id: "TXN-240422-07", gatewayReference: "pay_demo_0da419", date: timestampDaysAgo(8, 8, 30), student: "Karan Mehta", studentId: "STU-002", product: "PLAN B", productId: "plan-b", baseFee: 6999, discountPercent: 0, discountAmount: 0, amount: 6999, tax: 0, paymentMethod: "UPI · Illustrative", status: "Success", refundHistory: [], entitlementStatus: "Active" },
      { id: "TXN-240418-08", gatewayReference: "pay_demo_c179aa", date: timestampDaysAgo(12, 13, 14), student: "Riya Nair", studentId: "STU-003", product: "Video", productId: "video-library", baseFee: 4999, discountPercent: 0, discountAmount: 0, amount: 4999, tax: 0, paymentMethod: "Card · Illustrative", status: "Success", refundHistory: [], entitlementStatus: "Active" },
      { id: "TXN-240410-09", gatewayReference: "pay_demo_e308cd", date: timestampDaysAgo(20, 7, 40), student: "Vikram Reddy", studentId: "STU-004", product: "Image Bank", productId: "image-bank", baseFee: 1499, discountPercent: 0, discountAmount: 0, amount: 1499, tax: 0, paymentMethod: "UPI · Illustrative", status: "Success", refundHistory: [], entitlementStatus: "Active" },
      { id: "TXN-240405-10", gatewayReference: "pay_demo_a915f0", date: timestampDaysAgo(25, 16, 25), student: "Pooja Sharma", studentId: "STU-005", product: "PLAN C", productId: "plan-c", baseFee: 19999, discountPercent: 0, discountAmount: 0, amount: 19999, tax: 0, paymentMethod: "Card · Illustrative", status: "Success", refundHistory: [], entitlementStatus: "Active" }
    ];
    const entitlements = [
      { id: "ENT-1001", student: "Neha Gupta", studentId: "STU-001", product: "Q Bank (19 Subjects)", productId: "q-bank-19", subjects: ["Anatomy", "Physiology"], activation: "Immediate after verification", validity: 365, start: daysAgo(20), status: "Active", expiryReminders: true },
      { id: "ENT-1002", student: "Karan Mehta", studentId: "STU-002", product: "Grand Test", productId: "grand-test", activation: "Immediate after verification", validity: 365, start: daysAgo(45), status: "Active", expiryReminders: true },
      { id: "ENT-1003", student: "Riya Nair", studentId: "STU-003", product: "Subject-wise Test (19 Subjects)", productId: "subject-wise-test", subjects: ["Medicine"], activation: "Immediate after verification", validity: 365, start: daysAgo(15), status: "Active", expiryReminders: true },
      { id: "ENT-1004", student: "Vikram Reddy", studentId: "STU-004", product: "PDF", productId: "pdf-library", activation: "Immediate after verification", validity: 365, start: daysAgo(62), status: "Active", expiryReminders: true },
      { id: "ENT-1005", student: "Pooja Sharma", studentId: "STU-005", product: "Q Bank (19 Subjects)", productId: "q-bank-19", planName: "PLAN A", subjects, activation: "After payment verification", validity: 365, start: daysAgo(5), status: "Active", expiryReminders: true },
      { id: "ENT-1006", student: "Pooja Sharma", studentId: "STU-005", product: "Grand Test", productId: "grand-test", planName: "PLAN A", activation: "After payment verification", validity: 365, start: daysAgo(5), status: "Active", expiryReminders: true }
    ];
    const coupons = [
      { code: "PDF10", discount: 10, product: "PDF", expiry: daysAgo(-30), redemptions: 128, status: "Published" },
      { code: "IMAGE5", discount: 5, product: "Image Based", expiry: daysAgo(-15), redemptions: 76, status: "Published" },
      { code: "VIDEO15", discount: 15, product: "Video", expiry: daysAgo(2), redemptions: 34, status: "Draft" }
    ];
    const studentColors = ["#18aaba", "#8164ec", "#138eba", "#0f73b8", "#f0a332"];
    const pageSize = 6;
    let activeTab = "fees";
    let editingPlanId = null;
    let selectedPlanProductIds = [];
    let selectedPlanSubjects = {};
    let selectedPlanTests = {};
    let selectedTransactionId = null;
    let transactionPage = 1;
    let toastTimer;

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
    }
    function initials(name) { return name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase(); }
    function formatDate(value) {
      if (!value) return "—";
      return new Date(`${String(value).slice(0, 10)}T12:00:00`).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
    }
    function formatDateTime(value) {
      const date = new Date(value);
      return `${date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })} ${date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`;
    }
    function formatRupees(value, decimals = 0) {
      return `₹${Number(value || 0).toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
    }
    function statusClass(status) { return String(status).toLowerCase().replace(/\s+/g, "-"); }
    function finalFee(product) { return Math.round(product.baseFee * (1 - product.discount / 100)); }
    function productValidity() { return 365; }
    function productIcon(product) {
      const icons = {
        full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v14H4zM8 9h8m-8 4h8m-8 4h5"/></svg>',
        test: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6m-6 4h6m-6 4h3"/></svg>',
        "image-based-test": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m21 15-5-5L5 20"/></svg>',
        video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3"/><path d="m8 10 4 2-4 2v-4Z" fill="currentColor"/></svg>',
        pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h8l5 5v13H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M14 3v5h5M8 13h8m-8 4h5"/></svg>',
        live: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="m8 3 4 3 4-3m-7 9 3 2 3-2"/></svg>'
      };
      return icons[product.id] || icons.full;
    }
    function productCell(product, note = "") {
      const subjectDetails = product.subjects
        ? `<details class="subject-dropdown"><summary>View ${product.subjects.length} subjects</summary><span>${product.subjects.map(escapeHtml).join(" · ")}</span></details>`
        : "";
      return `<div class="product-cell"><span class="product-icon">${productIcon(product)}</span><div class="product-copy">${escapeHtml(product.name)}${note ? `<small>${escapeHtml(note)}</small>` : ""}${subjectDetails}</div></div>`;
    }
    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("is-visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
    }
    function syncQuestionBankProducts() {
      let questionBankProducts;
      let questionBankSubjects;
      let questionBankTests;
      try {
        questionBankProducts = JSON.parse(window.sessionStorage.getItem("fmge-question-bank-products") || "[]");
        questionBankSubjects = JSON.parse(window.sessionStorage.getItem("fmge-question-bank-subjects") || "[]");
        questionBankTests = JSON.parse(window.sessionStorage.getItem("fmge-question-bank-tests") || "[]");
      } catch (error) {
        console.error("Could not load Question Bank products, subjects, or tests for payment access.", error);
        showToast("Question Bank products and tests could not be loaded. Refresh and try again.");
        return;
      }
      if (!Array.isArray(questionBankProducts) || !Array.isArray(questionBankSubjects) || !Array.isArray(questionBankTests)) {
        console.error("Question Bank product, subject, and test data must be stored as arrays.");
        showToast("Question Bank product or test data is invalid and could not be loaded.");
        return;
      }
      products.splice(0, products.length, ...products.filter(product => !product.fromQuestionBank));
      const knownProductIds = new Set(products.map(product => product.id));
      questionBankProducts.forEach(questionBankProduct => {
        if (!questionBankProduct || typeof questionBankProduct.id !== "string" || typeof questionBankProduct.name !== "string") {
          console.warn("Skipping an invalid Question Bank product in payment access.");
          return;
        }
        if (knownProductIds.has(questionBankProduct.id)) {
          console.warn(`Skipping duplicate Question Bank product ID: ${questionBankProduct.id}`);
          return;
        }
        knownProductIds.add(questionBankProduct.id);
        const productSubjects = [...new Set(questionBankSubjects
          .filter(subject => subject?.productId === questionBankProduct.id && typeof subject.name === "string")
          .map(subject => subject.name))];
        const productTests = questionBankTests
          .filter(test => test?.productId === questionBankProduct.id && typeof test.id === "string" && typeof test.title === "string")
          .map(test => ({ id: test.id, title: test.title }));
        products.push({
          id: questionBankProduct.id,
          name: questionBankProduct.name,
          accessType: questionBankProduct.accessType,
          ...(productSubjects.length ? { subjects: productSubjects } : {}),
          tests: productTests,
          validity: 365,
          activation: "After payment verification",
          status: questionBankProduct.isActive === false ? "Inactive" : "Active",
          fromQuestionBank: true
        });
      });
    }
    function closeModals() {
      document.querySelectorAll(".modal-backdrop.is-open").forEach(modal => modal.classList.remove("is-open"));
      document.body.style.overflow = "";
    }
    function getProduct(productId) { return products.find(product => product.id === productId); }
    function getPlan(planId) { return plans.find(plan => plan.id === planId); }
    function persistPlans() {
      try {
        window.sessionStorage.setItem("fmge-payment-plans", JSON.stringify(plans));
        return true;
      } catch (error) {
        console.error("Could not persist fee plan changes.", error);
        showToast("Fee plan could not be saved in this browser. Check available storage and try again.");
        return false;
      }
    }
    function planSubjectsFor(plan, productId) {
      const product = getProduct(productId);
      if (!product?.subjects) return [];
      return plan.productSubjects?.[productId] || [...product.subjects];
    }
    function planTestsFor(plan, productId) {
      const product = getProduct(productId);
      if (!product?.fromQuestionBank) return [];
      if (Object.prototype.hasOwnProperty.call(plan.productTests || {}, productId)) {
        const selectedIds = new Set(plan.productTests[productId]);
        return product.tests.filter(test => selectedIds.has(test.id));
      }
      return [...product.tests];
    }
    function setTab(tab) {
      activeTab = tab;
      document.querySelectorAll("[data-tab]").forEach(button => button.setAttribute("aria-selected", String(button.dataset.tab === tab)));
      document.querySelectorAll(".tab-panel").forEach(panel => { panel.hidden = panel.id !== `panel-${tab}`; });
      if (tab === "transactions") renderTransactions();
      if (tab === "access") renderAccessTable();
      if (tab === "discounts") renderCoupons();
    }

    function renderFees() {
      const query = document.getElementById("global-search").value.trim().toLowerCase();
      const visiblePlans = plans.filter(plan => {
        const searchable = `${plan.name} ${plan.productIds.map(id => getProduct(id)?.name || "").join(" ")}`.toLowerCase();
        return !query || searchable.includes(query);
      });
      document.getElementById("fee-rows").innerHTML = visiblePlans.length ? visiblePlans.map(plan => {
        const includedProducts = plan.productIds.map(id => getProduct(id)).filter(Boolean);
        const productsLabel = includedProducts.length ? `<div class="plan-products-list">${includedProducts.map(product => {
          const includedSubjects = planSubjectsFor(plan, product.id);
          const subjectCount = product.subjects?.length || 0;
          const subjectLabel = product.subjects
            ? includedSubjects.length === subjectCount ? `All ${subjectCount} subjects` : `${includedSubjects.length} of ${subjectCount} subjects`
            : "";
          const includedTests = planTestsFor(plan, product.id);
          const testLabel = product.fromQuestionBank ? `${includedTests.length} of ${product.tests.length} tests` : "";
          return `<div>${escapeHtml(product.name)}${product.subjects ? `<details class="subject-dropdown"><summary>${subjectLabel}</summary><span>${includedSubjects.map(escapeHtml).join(" · ") || "No subjects selected"}</span></details>` : ""}${product.fromQuestionBank ? `<details class="subject-dropdown"><summary>${escapeHtml(testLabel)}</summary><span>${includedTests.map(test => escapeHtml(test.title)).join(" · ") || "No tests selected"}</span></details>` : ""}</div>`;
        }).join("")}</div>` : "Add products before publishing";
        const planIsPriced = plan.baseFee > 0;
        return `
        <tr><td><strong>${escapeHtml(plan.name)}</strong></td><td>${productsLabel}</td><td class="money">${planIsPriced ? formatRupees(plan.baseFee) : "Not set"}</td>
          <td>${planIsPriced ? `${plan.discount}%` : "—"}</td><td class="money"><strong>${planIsPriced ? formatRupees(finalFee(plan)) : "Not set"}</strong></td><td>${plan.validity} days</td>
          <td>${escapeHtml(plan.paymentMode)}</td><td><span class="status-pill ${statusClass(plan.status)}">${escapeHtml(plan.status)}</span></td>
          <td><div class="fee-actions"><button class="round-action" type="button" data-action="edit-fee" data-id="${plan.id}" aria-label="Edit ${escapeHtml(plan.name)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/></svg></button><button class="round-action" type="button" data-action="preview-fee" data-id="${plan.id}" aria-label="Preview ${escapeHtml(plan.name)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></button><div class="more-wrap"><button class="round-action" type="button" data-action="more-fee" data-id="${plan.id}" aria-label="More actions for ${escapeHtml(plan.name)}" aria-expanded="false"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg></button><div class="more-menu" data-fee-menu="${plan.id}" hidden><button type="button" data-action="toggle-fee" data-id="${plan.id}">${plan.status === "Published" ? "Unpublish plan" : "Publish plan"}</button><button type="button" class="danger-action" data-action="delete-fee" data-id="${plan.id}">Delete plan</button></div></div></div></td>
        </tr>`;
      }).join("") : '<tr class="empty-row"><td colspan="9">No fee plans match your search.</td></tr>';
    }

    function renderAccessSummary() {
      document.getElementById("access-summary-rows").innerHTML = products.map(product => `
        <tr><td><div class="access-product"><span class="product-icon">${productIcon(product)}</span>${escapeHtml(product.name)}${product.fromQuestionBank ? '<small class="product-subject-note">Question Bank product</small>' : ""}</div></td>
          <td>${escapeHtml(product.activation === "After payment verification" ? "Immediate after verification" : product.activation)}</td><td>${product.validity} days</td><td>Enabled</td>
          <td><span class="status-pill ${statusClass(product.status)}">${escapeHtml(product.status)}</span></td>
          <td><button class="round-action" type="button" data-action="access-product-details" data-id="${product.id}" aria-label="View ${escapeHtml(product.name)} access rules"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg></button></td></tr>`).join("");
    }

    function entitlementExpiry(entitlement) {
      if (!entitlement.start) return "";
      const date = new Date(`${entitlement.start}T12:00:00`);
      date.setDate(date.getDate() + Number(entitlement.validity));
      return date.toISOString().slice(0, 10);
    }
    function renderAccessTable() {
      const queries = [document.getElementById("access-search").value, document.getElementById("global-search").value].map(value => value.trim().toLowerCase()).filter(Boolean);
      const status = document.getElementById("access-status-filter").value;
      const rows = entitlements.filter(item => {
        const searchable = `${item.student} ${item.product} ${item.planName || ""} ${item.studentId}`.toLowerCase();
        return queries.every(query => searchable.includes(query)) && (!status || item.status === status);
      });
      document.getElementById("access-rows").innerHTML = rows.length ? rows.map(item => `
        <tr><td><span class="transaction-name">${escapeHtml(item.student)}</span><small style="display:block;margin-top:3px;color:#8299ae;font-size:8px">${escapeHtml(item.studentId)}</small></td>
          <td>${escapeHtml(item.product)}${item.planName ? `<small class="product-subject-note">Plan: ${escapeHtml(item.planName)}</small>` : ""}${item.subjects?.length ? `<small class="product-subject-note">${item.subjects.map(escapeHtml).join(", ")}</small>` : ""}${item.tests?.length ? `<small class="product-subject-note">Tests: ${item.tests.map(escapeHtml).join(", ")}</small>` : ""}</td><td>${escapeHtml(item.activation)}</td><td>${item.validity} days</td><td>${formatDate(entitlementExpiry(item))}</td>
          <td><span class="status-pill ${statusClass(item.status)}">${escapeHtml(item.status)}</span></td>
          <td><div class="access-menu"><button class="round-action" type="button" data-action="entitlement-menu" data-id="${item.id}" aria-label="Manage entitlement for ${escapeHtml(item.student)}" aria-expanded="false"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg></button><div class="more-menu" data-entitlement-menu="${item.id}" hidden>
            <button type="button" data-action="extend-entitlement" data-id="${item.id}">Extend 30 days</button>
            <button type="button" data-action="revoke-entitlement" data-id="${item.id}">${item.status === "Revoked" ? "Reactivate" : "Revoke access"}</button>
          </div></div></td></tr>`).join("") : '<tr class="empty-row"><td colspan="7">No product entitlements match these filters.</td></tr>';
    }

    function inDateRange(transaction) {
      const range = document.getElementById("date-range").value;
      const date = new Date(transaction.date);
      if (range === "all") return true;
      if (range === "custom") {
        const from = document.getElementById("date-from").value;
        const to = document.getElementById("date-to").value;
        if (!from || !to || from > to) return false;
        const day = date.toISOString().slice(0, 10);
        return day >= from && day <= to;
      }
      return (Date.now() - date.getTime()) / DAY_MS <= Number(range);
    }
    function filteredTransactions() {
      const queries = [document.getElementById("transaction-search").value, document.getElementById("global-search").value].map(value => value.trim().toLowerCase()).filter(Boolean);
      const status = document.getElementById("transaction-status-filter").value;
      return transactions.filter(transaction => {
        const searchable = `${transaction.id} ${transaction.gatewayReference} ${transaction.student} ${transaction.product}`.toLowerCase();
        const searchMatches = queries.every(query => searchable.includes(query));
        return searchMatches && (!status || transaction.status === status) && inDateRange(transaction);
      });
    }
    function renderRecentTransactions() {
      const query = document.getElementById("global-search").value.trim().toLowerCase();
      const latest = [...transactions].filter(transaction => {
        const searchable = `${transaction.id} ${transaction.gatewayReference} ${transaction.student} ${transaction.product}`.toLowerCase();
        return inDateRange(transaction) && (!query || searchable.includes(query));
      }).sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
      document.getElementById("recent-transaction-rows").innerHTML = latest.length ? latest.map(transaction => `
        <tr><td>${formatDateTime(transaction.date)}</td><td><button class="transaction-open transaction-name" type="button" data-action="transaction-details" data-id="${transaction.id}">${escapeHtml(transaction.student)}</button></td>
          <td>${escapeHtml(transaction.product.replace(/^FMGE /, ""))}</td><td class="money">${formatRupees(transaction.amount)}</td>
          <td><span class="status-pill ${statusClass(transaction.status)}">${escapeHtml(transaction.status)}</span></td></tr>`).join("")
        : '<tr class="empty-row"><td colspan="5">No transactions in this date range.</td></tr>';
    }
    function renderTransactions() {
      const all = filteredTransactions();
      const pageCount = Math.max(1, Math.ceil(all.length / pageSize));
      transactionPage = Math.min(transactionPage, pageCount);
      const start = (transactionPage - 1) * pageSize;
      const pageRows = all.slice(start, start + pageSize);
      document.getElementById("all-transaction-rows").innerHTML = pageRows.length ? pageRows.map(transaction => `
        <tr><td>${formatDateTime(transaction.date)}</td><td><button class="transaction-open transaction-name" type="button" data-action="transaction-details" data-id="${transaction.id}">${escapeHtml(transaction.student)}</button></td>
          <td>${escapeHtml(transaction.product)}</td><td class="money">${formatRupees(transaction.amount)}</td>
          <td><span class="status-pill ${statusClass(transaction.status)}">${escapeHtml(transaction.status)}</span></td><td>${escapeHtml(transaction.id)}</td></tr>`).join("")
        : '<tr class="empty-row"><td colspan="6">No transactions match these filters.</td></tr>';
      document.getElementById("transaction-count").textContent = all.length ? `Showing ${start + 1}–${Math.min(start + pageSize, all.length)} of ${all.length} transactions` : "Showing 0 transactions";
      renderTransactionPagination(pageCount);
    }
    function renderTransactionPagination(pageCount) {
      const nav = document.getElementById("transaction-pagination");
      if (pageCount <= 1) { nav.innerHTML = ""; return; }
      nav.innerHTML = `<button class="page-button" type="button" data-page="${transactionPage - 1}" ${transactionPage === 1 ? "disabled" : ""} aria-label="Previous page">‹</button>${Array.from({ length: pageCount }, (_, index) => `<button class="page-button${transactionPage === index + 1 ? " current" : ""}" type="button" data-page="${index + 1}" aria-label="Page ${index + 1}">${index + 1}</button>`).join("")}<button class="page-button" type="button" data-page="${transactionPage + 1}" ${transactionPage === pageCount ? "disabled" : ""} aria-label="Next page">›</button>`;
    }

    const chartColors = ["#10b98b", "#8b5bea", "#ff9a35", "#fa5571", "#26a6ea"];
    function renderChart() {
      const metric = document.getElementById("chart-metric").value;
      const relevantTransactions = transactions.filter(transaction => transaction.status === "Success" && inDateRange(transaction));
      const activeEntitlements = entitlements.filter(item => item.status === "Active");
      const metricItems = metric === "plans" ? plans : products;
      const values = metricItems.map(item => {
        if (metric === "plans") return item.status === "Published" ? 1 : 0;
        if (metric === "sales") return relevantTransactions.filter(transaction => transaction.productId === item.id).length;
        if (metric === "revenue") return relevantTransactions.filter(transaction => transaction.productId === item.id).reduce((sum, transaction) => sum + transaction.amount, 0);
        return activeEntitlements.filter(entitlement => entitlement.productId === item.id).length;
      });
      const total = values.reduce((sum, value) => sum + value, 0);
      const labels = {
        plans: { title: "Published plans", center: "Published plans" },
        sales: { title: "Successful sales by product", center: "Successful sales" },
        revenue: { title: "Net successful collections by product", center: "Collections" },
        entitlements: { title: "Active entitlements by product", center: "Active access" }
      }[metric];
      document.getElementById("chart-subtitle").textContent = labels.title;
      document.getElementById("donut-label").textContent = labels.center;
      document.getElementById("donut-total").textContent = metric === "revenue" ? formatRupees(total) : String(total);
      const nonZero = values.map((value, index) => ({ value, index })).filter(item => item.value > 0);
      let angle = 0;
      const segments = nonZero.map(({ value, index }) => {
        const start = angle;
        angle += total ? value / total * 100 : 0;
        return `${chartColors[index % chartColors.length]} ${start}% ${angle}%`;
      });
      document.getElementById("product-donut").style.background = segments.length ? `conic-gradient(${segments.join(",")})` : "#e4eff7";
      document.getElementById("product-donut").setAttribute("aria-label", `${labels.title}; total ${metric === "revenue" ? formatRupees(total) : total}`);
      document.getElementById("product-legend").innerHTML = metricItems.map((item, index) =>
        `<li class="legend-row"><span class="legend-dot" style="background:${chartColors[index % chartColors.length]}"></span><span>${escapeHtml(item.name.replace(/^FMGE /, ""))}</span><strong>${metric === "revenue" ? formatRupees(values[index]) : values[index]}</strong></li>`
      ).join("");
    }

    function renderCoupons() {
      document.getElementById("coupon-rows").innerHTML = coupons.length ? coupons.map(coupon => `
        <tr><td><strong style="color:#012169">${escapeHtml(coupon.code)}</strong></td><td>${coupon.discount}% off</td><td>${escapeHtml(coupon.product)}</td><td>${formatDate(coupon.expiry)}</td><td>${coupon.redemptions}</td><td><span class="status-pill ${statusClass(coupon.status)}">${escapeHtml(coupon.status)}</span></td><td><button class="round-action" type="button" data-action="toggle-coupon" data-code="${escapeHtml(coupon.code)}" aria-label="Toggle ${escapeHtml(coupon.code)}">${coupon.status === "Published" ? "✓" : "↗"}</button></td></tr>`).join("")
        : '<tr class="empty-row"><td colspan="7">No coupons created yet.</td></tr>';
    }

    function setSelectOptions(select, options, placeholder) {
      select.innerHTML = `<option value="">${escapeHtml(placeholder)}</option>` + options.map(option => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("");
    }
    function renderAccessProductOptions() {
      document.getElementById("access-product-options").innerHTML = products.map(product => `
        <div class="product-choice">
          <label><input type="checkbox" name="accessProducts" value="${escapeHtml(product.id)}" ${product.status === "Inactive" ? "disabled" : ""}> ${escapeHtml(product.name)}${product.accessType ? ` · ${escapeHtml(product.accessType)}` : ""}${product.status !== "Active" ? ` · ${escapeHtml(product.status)}` : ""}${product.fromQuestionBank ? " · Question Bank" : ""}</label>
          ${product.subjects ? `<details class="subject-dropdown"><summary>Choose subjects (${product.subjects.length})</summary><div class="subject-options">${product.subjects.map((subject, index) => `
            <label class="subject-choice"><input type="checkbox" name="accessSubjects-${escapeHtml(product.id)}" value="${escapeHtml(subject)}" id="access-subject-${escapeHtml(product.id)}-${index}"> ${escapeHtml(subject)}</label>`).join("")}</div></details>` : ""}
        </div>`).join("");
    }
    function renderAccessPlanOptions() {
      document.getElementById("access-plan-options").innerHTML = plans.length ? plans.map(plan => {
        const included = plan.productIds.map(id => getProduct(id)?.name).filter(Boolean);
        const description = included.length ? included.map(product => {
          const details = [];
          if (product.subjects) details.push(`${planSubjectsFor(plan, product.id).length}/${product.subjects.length} subjects`);
          if (product.fromQuestionBank) details.push(`${planTestsFor(plan, product.id).length}/${product.tests.length} tests`);
          return details.length ? `${product.name} (${details.join(", ")})` : product.name;
        }).join(", ") : "No products added yet";
        return `<div class="product-choice"><label><input type="checkbox" name="accessPlans" value="${escapeHtml(plan.id)}" ${included.length ? "" : "disabled"}> ${escapeHtml(plan.name)}${plan.status === "Draft" ? " · Draft" : ""}</label><span class="form-hint">${escapeHtml(description)}</span></div>`;
      }).join("") : '<span class="plan-product-empty">No plans created yet.</span>';
    }
    function openAccessModal() {
      syncQuestionBankProducts();
      setSelectOptions(document.getElementById("access-student"), students.map(student => ({ value: student.id, label: `${student.name} · ${student.id}` })), "Choose a student");
      document.getElementById("access-form").reset();
      renderAccessProductOptions();
      renderAccessPlanOptions();
      document.getElementById("access-start").value = daysAgo(0);
      document.getElementById("access-validity").value = "365";
      document.getElementById("access-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.getElementById("access-student").focus();
    }
    function renderPlanProductChips() {
      const container = document.getElementById("plan-product-chips");
      const selectedProducts = selectedPlanProductIds.map(id => getProduct(id)).filter(Boolean);
      container.innerHTML = selectedProducts.length
        ? selectedProducts.map(product => {
          if (!product.subjects && !product.fromQuestionBank) {
            return `<div class="plan-product-entry"><span class="plan-product-chip">${escapeHtml(product.name)}<button type="button" data-remove-plan-product="${escapeHtml(product.id)}" aria-label="Remove ${escapeHtml(product.name)} from plan">×</button></span></div>`;
          }
          const selectedSubjects = selectedPlanSubjects[product.id] || [];
          const allSubjectsSelected = product.subjects && selectedSubjects.length === product.subjects.length;
          const selectedTests = selectedPlanTests[product.id] || [];
          const allTestsSelected = product.fromQuestionBank && product.tests.length > 0 && selectedTests.length === product.tests.length;
          return `<div class="plan-product-entry" data-plan-product-entry="${escapeHtml(product.id)}">
            <span class="plan-product-chip">${escapeHtml(product.name)}<button type="button" data-remove-plan-product="${escapeHtml(product.id)}" aria-label="Remove ${escapeHtml(product.name)} from plan">×</button></span>
            ${product.subjects ? `<label class="plan-subject-toggle"><input type="checkbox" data-select-all-subjects="${escapeHtml(product.id)}" ${allSubjectsSelected ? "checked" : ""}> Include all ${product.subjects.length} subjects</label>
            <div class="plan-subject-options"${allSubjectsSelected ? " hidden" : ""}>${product.subjects.map((subject, index) => `
              <label class="subject-choice"><input type="checkbox" data-plan-subject="${escapeHtml(product.id)}" value="${escapeHtml(subject)}" id="plan-subject-${escapeHtml(product.id)}-${index}" ${selectedSubjects.includes(subject) ? "checked" : ""}> ${escapeHtml(subject)}</label>`).join("")}</div>
            <span class="form-hint">${allSubjectsSelected ? `All ${product.subjects.length} subjects included` : `${selectedSubjects.length} subject${selectedSubjects.length === 1 ? "" : "s"} selected`}</span>` : ""}
            ${product.fromQuestionBank ? `<label class="plan-subject-toggle"><input type="checkbox" data-select-all-tests="${escapeHtml(product.id)}" ${allTestsSelected ? "checked" : ""} ${product.tests.length ? "" : "disabled"}> Enable all ${product.tests.length} tests</label>
            <div class="plan-subject-options plan-test-options">${product.tests.map((test, index) => `
              <label class="subject-choice"><input type="checkbox" data-plan-test="${escapeHtml(product.id)}" value="${escapeHtml(test.id)}" id="plan-test-${escapeHtml(product.id)}-${index}" ${selectedTests.includes(test.id) ? "checked" : ""}> ${escapeHtml(test.title)}</label>`).join("") || '<span class="form-hint">No tests have been created for this product.</span>'}</div>
            <span class="form-hint">${allTestsSelected ? `All ${product.tests.length} tests enabled` : `${selectedTests.length} of ${product.tests.length} tests enabled`}</span>` : ""}
          </div>`;
        }).join("")
        : '<span class="plan-product-empty">No products added yet.</span>';
    }
    function openFeeForm(plan = null) {
      syncQuestionBankProducts();
      editingPlanId = plan ? plan.id : null;
      const form = document.getElementById("fee-form");
      form.reset();
      document.getElementById("fee-product").innerHTML = `<option value="">Choose a product to add</option>${products.map(item => `<option value="${escapeHtml(item.id)}" ${item.status === "Inactive" ? "disabled" : ""}>${escapeHtml(item.name)}${item.fromQuestionBank ? " · Question Bank" : ""}${item.status === "Inactive" ? " · Inactive" : ""}</option>`).join("")}`;
      document.getElementById("fee-modal-title").textContent = plan ? "Edit Fee Plan" : "Create Fee Plan";
      document.getElementById("fee-modal-description").textContent = plan ? "Update the plan name, included products, price, and validity." : "Name the plan, add one or more products, and configure its price and validity.";
      document.getElementById("fee-save-button").textContent = plan ? "Save Changes" : "Create Fee Plan";
      if (plan) {
        form.elements.planName.value = plan.name;
        form.elements.baseFee.value = plan.baseFee;
        form.elements.discount.value = plan.discount;
        form.elements.validity.value = plan.validity;
        form.elements.paymentMode.value = plan.paymentMode === "One-time" ? "One-time payment" : plan.paymentMode;
        form.elements.status.value = plan.status;
        selectedPlanProductIds = [...plan.productIds];
        selectedPlanSubjects = Object.fromEntries(plan.productIds.filter(id => getProduct(id)?.subjects).map(id => [id, [...planSubjectsFor(plan, id)]]));
        selectedPlanTests = Object.fromEntries(plan.productIds.filter(id => getProduct(id)?.fromQuestionBank).map(id => [id, planTestsFor(plan, id).map(test => test.id)]));
      } else {
        form.elements.planName.value = "";
        form.elements.baseFee.value = "0";
        form.elements.discount.value = "0";
        form.elements.validity.value = "365";
        form.elements.paymentMode.value = "One-time payment";
        form.elements.status.value = "Draft";
        selectedPlanProductIds = [];
        selectedPlanSubjects = {};
        selectedPlanTests = {};
      }
      renderPlanProductChips();
      document.getElementById("fee-product").value = "";
      updateFeePreview();
      document.getElementById("fee-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.getElementById("fee-plan-name").focus();
    }
    function updateFeePreview() {
      const form = document.getElementById("fee-form");
      const base = Math.max(0, Number(form.elements.baseFee.value) || 0);
      const discount = Math.min(100, Math.max(0, Number(form.elements.discount.value) || 0));
      const discountAmount = base * discount / 100;
      document.getElementById("fee-preview-base").textContent = formatRupees(base, 2);
      document.getElementById("fee-preview-discount").textContent = `−${formatRupees(discountAmount, 2)}`;
      document.getElementById("fee-preview-final").textContent = formatRupees(Math.round(base - discountAmount));
    }
    function previewFeePlan(plan) {
      const details = [
        ["Plan", plan.name],
        ["Included products", plan.productIds.map(id => {
          const product = getProduct(id);
          if (!product) return "";
          const tests = planTestsFor(plan, id);
          return `${product.name}${product.fromQuestionBank ? ` (${tests.map(test => test.title).join(", ") || "No tests enabled"})` : ""}`;
        }).filter(Boolean).join(", ") || "No products added"],
        ["Payment model", plan.paymentMode],
        ["Validity", `${plan.validity} days`], ["Status", plan.status]
      ];
      document.getElementById("preview-title").textContent = plan.name;
      document.getElementById("fee-preview-details").innerHTML = details.map(([label, value]) => `<div class="detail-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
      document.getElementById("preview-base").textContent = formatRupees(plan.baseFee, 2);
      document.getElementById("preview-discount").textContent = `${plan.discount}% · −${formatRupees(plan.baseFee * plan.discount / 100, 2)}`;
      document.getElementById("preview-final").textContent = formatRupees(finalFee(plan));
      document.getElementById("preview-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    function openTransaction(transaction) {
      selectedTransactionId = transaction.id;
      const purchasedPlan = getPlan(transaction.productId);
      const details = [
        ["Transaction ID", transaction.id], ["Gateway reference", transaction.gatewayReference],
        ["Date & time", formatDateTime(transaction.date)], ["Student", `${transaction.student} · ${transaction.studentId}`],
        ["Product", transaction.product], ["Payment method", transaction.paymentMethod],
        ["Transaction status", transaction.status], ["Fee plan validity", `${purchasedPlan?.validity || getProduct(transaction.productId)?.validity || productValidity(transaction.product)} days`],
        ...(purchasedPlan ? [["Plan products", purchasedPlan.productIds.map(id => getProduct(id)?.name).filter(Boolean).join(", ")]] : [])
      ];
      document.getElementById("transaction-title").textContent = `Transaction ${transaction.id}`;
      document.getElementById("transaction-details").innerHTML = details.map(([label, value]) => `<div class="detail-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
      document.getElementById("transaction-breakdown").innerHTML = `
        <div class="calculation-row"><span>Base fee</span><strong>${formatRupees(transaction.baseFee, 2)}</strong></div>
        <div class="calculation-row"><span>Discount (${transaction.discountPercent}%)</span><strong>−${formatRupees(transaction.discountAmount, 2)}</strong></div>
        <div class="calculation-row"><span>Taxes</span><strong>${formatRupees(transaction.tax, 2)}</strong></div>
        <div class="calculation-row total"><span>Amount charged</span><strong>${formatRupees(transaction.amount)}</strong></div>
        <div class="calculation-row"><span>Refund history</span><strong>${transaction.refundHistory.length ? transaction.refundHistory.map(refund => `${formatRupees(refund.amount)} on ${formatDate(refund.date)} · ${escapeHtml(refund.reference)}`).join("<br>") : "No refunds recorded"}</strong></div>`;
      const relatedEntitlements = entitlements.filter(item => item.studentId === transaction.studentId && (
        purchasedPlan ? item.planName?.split(", ").includes(purchasedPlan.name) : item.productId === transaction.productId
      ));
      const entitlementDetails = relatedEntitlements.length
        ? [["Entitlements", relatedEntitlements.map(item => `${item.product} · ${item.status} · expires ${formatDate(entitlementExpiry(item))}`).join("; ")]]
        : [["Purchased product", transaction.product], ["Entitlement status", transaction.entitlementStatus], ["Access rule", "Grant only after verified successful payment"]];
      document.getElementById("transaction-entitlement").innerHTML = entitlementDetails.map(([label, value]) => `<div class="detail-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
      document.getElementById("transaction-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.querySelector("#transaction-modal [data-close-modal]").focus();
    }
    function updateSummary() {
      const inPeriod = transactions.filter(inDateRange);
      const successful = inPeriod.filter(transaction => transaction.status === "Success");
      const pending = inPeriod.filter(transaction => transaction.status === "Pending");
      const failed = inPeriod.filter(transaction => transaction.status === "Failed");
      const revenue = successful.reduce((sum, transaction) => sum + transaction.amount, 0);
      const pendingAmount = pending.reduce((sum, transaction) => sum + transaction.amount, 0);
      const activeCount = entitlements.filter(item => item.status === "Active").length;
      document.getElementById("summary-revenue").textContent = formatRupees(revenue);
      document.getElementById("summary-success").textContent = String(successful.length);
      document.getElementById("summary-pending").textContent = String(pending.length);
      document.getElementById("summary-pending-amount").textContent = formatRupees(pendingAmount);
      document.getElementById("summary-failed").textContent = String(failed.length);
      document.getElementById("summary-entitlements").textContent = activeCount.toLocaleString("en-IN");
    }

    document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => setTab(button.dataset.tab)));
    document.querySelectorAll("[data-tab-jump]").forEach(button => button.addEventListener("click", () => setTab(button.dataset.tabJump)));
    document.getElementById("date-range").addEventListener("change", event => {
      document.getElementById("custom-dates").hidden = event.target.value !== "custom";
      updateSummary();
      renderChart();
      renderRecentTransactions();
      if (activeTab === "transactions") { transactionPage = 1; renderTransactions(); }
    });
    ["date-from", "date-to"].forEach(id => document.getElementById(id).addEventListener("change", () => {
      const from = document.getElementById("date-from").value;
      const to = document.getElementById("date-to").value;
      if (from && to && from > to) { showToast("The end date must be on or after the start date."); return; }
      updateSummary();
      renderChart();
      renderRecentTransactions();
      if (activeTab === "transactions") { transactionPage = 1; renderTransactions(); }
    }));
    document.getElementById("chart-metric").addEventListener("change", renderChart);
    document.getElementById("global-search").addEventListener("input", () => {
      syncQuestionBankProducts();
      renderFees();
      renderAccessTable();
      renderRecentTransactions();
      transactionPage = 1;
      renderTransactions();
    });
    document.getElementById("fee-form").addEventListener("input", updateFeePreview);
    document.getElementById("fee-form").addEventListener("change", updateFeePreview);
    document.getElementById("fee-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const planName = form.elements.planName.value.trim();
      if (!planName) {
        showToast("Enter a plan name.");
        return;
      }
      const existing = editingPlanId ? getPlan(editingPlanId) : plans.find(item => item.name.toLowerCase() === planName.toLowerCase());
      if (!selectedPlanProductIds.length) {
        showToast("Add at least one product to this plan.");
        return;
      }
      if (selectedPlanProductIds.some(id => getProduct(id)?.subjects && !selectedPlanSubjects[id]?.length)) {
        showToast("Select at least one subject for each subject-based product.");
        return;
      }
      if (form.elements.status.value === "Published" && Number(form.elements.baseFee.value) <= 0) {
        showToast("Set a base fee above ₹0 before publishing this plan.");
        return;
      }
      if (plans.some(item => item.name.toLowerCase() === planName.toLowerCase() && item.id !== editingPlanId)) {
        showToast("A plan already exists with that name.");
        return;
      }
      const previousPlan = existing ? { ...existing } : null;
      const plan = existing || { id: `plan-${Date.now()}` };
      Object.assign(plan, {
        name: planName,
        productIds: [...selectedPlanProductIds],
        productSubjects: Object.fromEntries(selectedPlanProductIds
          .filter(id => getProduct(id)?.subjects)
          .map(id => [id, [...(selectedPlanSubjects[id] || [])]])),
        productTests: Object.fromEntries(selectedPlanProductIds
          .filter(id => getProduct(id)?.fromQuestionBank)
          .map(id => [id, [...(selectedPlanTests[id] || [])]])),
        baseFee: Number(form.elements.baseFee.value),
        discount: Number(form.elements.discount.value) || 0,
        validity: Number(form.elements.validity.value),
        paymentMode: form.elements.paymentMode.value === "One-time payment" ? "One-time" : form.elements.paymentMode.value,
        activation: "After payment verification",
        status: form.elements.status.value
      });
      if (!existing) plans.push(plan);
      if (!persistPlans()) {
        if (existing) {
          Object.keys(plan).forEach(key => delete plan[key]);
          Object.assign(plan, previousPlan);
        } else {
          plans.pop();
        }
        return;
      }
      closeModals();
      renderFees();
      renderChart();
      setTab("fees");
      showToast(existing ? `${plan.name} updated with ${plan.productIds.length} products in this preview.` : `${plan.name} created with ${plan.productIds.length} products in this preview.`);
      editingPlanId = null;
      selectedPlanProductIds = [];
    });
    document.getElementById("add-plan-product").addEventListener("click", () => {
      const select = document.getElementById("fee-product");
      const product = getProduct(select.value);
      if (!product) {
        showToast("Choose a course product to add to this plan.");
        return;
      }
      if (selectedPlanProductIds.includes(product.id)) {
        showToast(`${product.name} is already in this plan.`);
        return;
      }
      selectedPlanProductIds.push(product.id);
      if (product.subjects) selectedPlanSubjects[product.id] = [...product.subjects];
      if (product.fromQuestionBank) selectedPlanTests[product.id] = product.tests.map(test => test.id);
      select.value = "";
      renderPlanProductChips();
    });
    document.getElementById("plan-product-chips").addEventListener("change", event => {
      const allToggle = event.target.closest("[data-select-all-subjects]");
      if (allToggle) {
        const product = getProduct(allToggle.dataset.selectAllSubjects);
        if (!product?.subjects) return;
        selectedPlanSubjects[product.id] = allToggle.checked ? [...product.subjects] : [];
        renderPlanProductChips();
        return;
      }
      const subjectToggle = event.target.closest("[data-plan-subject]");
      if (subjectToggle) {
        const productId = subjectToggle.dataset.planSubject;
        const selection = new Set(selectedPlanSubjects[productId] || []);
        if (subjectToggle.checked) selection.add(subjectToggle.value);
        else selection.delete(subjectToggle.value);
        selectedPlanSubjects[productId] = getProduct(productId).subjects.filter(subject => selection.has(subject));
        renderPlanProductChips();
        return;
      }
      const selectAllTests = event.target.closest("[data-select-all-tests]");
      if (selectAllTests) {
        const product = getProduct(selectAllTests.dataset.selectAllTests);
        selectedPlanTests[product.id] = selectAllTests.checked ? product.tests.map(test => test.id) : [];
        renderPlanProductChips();
        return;
      }
      const testToggle = event.target.closest("[data-plan-test]");
      if (testToggle) {
        const productId = testToggle.dataset.planTest;
        const selection = new Set(selectedPlanTests[productId] || []);
        if (testToggle.checked) selection.add(testToggle.value);
        else selection.delete(testToggle.value);
        selectedPlanTests[productId] = getProduct(productId).tests.filter(test => selection.has(test.id)).map(test => test.id);
        renderPlanProductChips();
      }
    });
    document.getElementById("plan-product-chips").addEventListener("click", event => {
      const button = event.target.closest("[data-remove-plan-product]");
      if (!button) return;
      selectedPlanProductIds = selectedPlanProductIds.filter(id => id !== button.dataset.removePlanProduct);
      delete selectedPlanSubjects[button.dataset.removePlanProduct];
      delete selectedPlanTests[button.dataset.removePlanProduct];
      renderPlanProductChips();
    });
    document.getElementById("fee-rows").addEventListener("click", event => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      const plan = getPlan(button.dataset.id);
      if (!plan) return;
      if (button.dataset.action !== "more-fee") {
        document.querySelectorAll("[data-fee-menu]").forEach(menu => { menu.hidden = true; });
        document.querySelectorAll('[data-action="more-fee"]').forEach(trigger => trigger.setAttribute("aria-expanded", "false"));
      }
      if (button.dataset.action === "more-fee") {
        const menu = document.querySelector(`[data-fee-menu="${plan.id}"]`);
        const open = menu.hidden;
        document.querySelectorAll("[data-fee-menu]").forEach(other => { other.hidden = true; });
        document.querySelectorAll('[data-action="more-fee"]').forEach(trigger => trigger.setAttribute("aria-expanded", "false"));
        menu.hidden = !open;
        button.setAttribute("aria-expanded", String(open));
      } else if (button.dataset.action === "edit-fee") openFeeForm(plan);
      else if (button.dataset.action === "preview-fee") previewFeePlan(plan);
      else if (button.dataset.action === "toggle-fee") {
        if (plan.status !== "Published" && (!plan.productIds.length || plan.baseFee <= 0)) {
          showToast("Add products and set a base fee before publishing this plan.");
          return;
        }
        const previousStatus = plan.status;
        plan.status = plan.status === "Published" ? "Draft" : "Published";
        if (!persistPlans()) {
          plan.status = previousStatus;
          return;
        }
        renderFees(); renderChart();
        showToast(`${plan.name} is now ${plan.status.toLowerCase()} in this preview.`);
      } else if (button.dataset.action === "delete-fee") {
        if (!window.confirm(`Delete ${plan.name} from this preview?`)) return;
        const planIndex = plans.indexOf(plan);
        plans.splice(planIndex, 1);
        if (!persistPlans()) {
          plans.splice(planIndex, 0, plan);
          return;
        }
        renderFees(); renderChart();
        showToast(`${plan.name} removed from this preview.`);
      }
    });
    document.getElementById("access-search").addEventListener("input", renderAccessTable);
    document.getElementById("access-status-filter").addEventListener("change", renderAccessTable);
    document.getElementById("access-product-options").addEventListener("change", event => {
      if (!event.target.matches('input[name="accessProducts"]')) return;
      const subjectDetails = event.target.closest(".product-choice").querySelector("details");
      if (subjectDetails) subjectDetails.open = event.target.checked;
    });
    document.getElementById("access-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const student = students.find(item => item.id === form.elements.student.value);
      const selectedPlans = Array.from(form.querySelectorAll('input[name="accessPlans"]:checked'))
        .map(input => getPlan(input.value))
        .filter(Boolean);
      const directlySelectedProducts = Array.from(form.querySelectorAll('input[name="accessProducts"]:checked'))
        .map(input => getProduct(input.value))
        .filter(Boolean);
      if (!student || (!selectedPlans.length && !directlySelectedProducts.length)) {
        showToast("Select a student and at least one course product or plan.");
        return;
      }
      const grantedProducts = new Map();
      selectedPlans.forEach(plan => plan.productIds.forEach(productId => {
        const product = getProduct(productId);
        if (!product) return;
        const grant = grantedProducts.get(product.id) || { product, planNames: new Set(), viaPlan: true, directSelected: false, subjects: new Set(), testIds: new Set() };
        grant.planNames.add(plan.name);
        grant.viaPlan = true;
        planSubjectsFor(plan, productId).forEach(subject => grant.subjects.add(subject));
        planTestsFor(plan, productId).forEach(test => grant.testIds.add(test.id));
        grantedProducts.set(product.id, grant);
      }));
      directlySelectedProducts.forEach(product => {
        const grant = grantedProducts.get(product.id) || { product, planNames: new Set(), viaPlan: false, directSelected: true, subjects: new Set(), testIds: new Set() };
        grant.directSelected = true;
        product.tests?.forEach(test => grant.testIds.add(test.id));
        if (product.subjects) {
          Array.from(form.querySelectorAll(`input[name="accessSubjects-${product.id}"]:checked`))
            .forEach(input => grant.subjects.add(input.value));
        }
        grantedProducts.set(product.id, grant);
      });
      const grants = Array.from(grantedProducts.values()).map(grant => {
        return {
          ...grant,
          subjects: grant.product.subjects ? grant.product.subjects.filter(subject => grant.subjects.has(subject)) : [],
          tests: grant.product.tests?.filter(test => grant.testIds.has(test.id)).map(test => test.title) || []
        };
      });
      if (grants.some(grant => grant.product.subjects && grant.directSelected && !grant.viaPlan && !grant.subjects.length)) {
        showToast("Choose at least one subject for each individually selected subject-based product.");
        return;
      }
      const start = form.elements.start.value;
      const validity = Number(form.elements.validity.value);
      grants.forEach((grant, index) => {
        entitlements.unshift({
          id: `ENT-${Date.now()}-${index}`,
          student: student.name, studentId: student.id,
          product: grant.product.name, productId: grant.product.id,
          ...(grant.planNames.size ? { planName: Array.from(grant.planNames).join(", ") } : {}),
          ...(grant.subjects.length ? { subjects: grant.subjects } : {}),
          ...(grant.tests.length ? { tests: grant.tests } : {}),
          activation: "Manual admin grant",
          validity,
          start,
          status: "Active",
          expiryReminders: true
        });
      });
      closeModals();
      renderAccessTable(); renderAccessSummary(); updateSummary(); renderChart();
      showToast(`${grants.length} course product${grants.length === 1 ? "" : "s"} preview access granted to ${student.name}.`);
    });
    document.getElementById("access-rows").addEventListener("click", event => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      const entitlement = entitlements.find(item => item.id === button.dataset.id);
      if (!entitlement) return;
      if (button.dataset.action === "entitlement-menu") {
        const menu = document.querySelector(`[data-entitlement-menu="${entitlement.id}"]`);
        const open = menu.hidden;
        document.querySelectorAll("[data-entitlement-menu]").forEach(other => { other.hidden = true; });
        menu.hidden = !open;
        button.setAttribute("aria-expanded", String(open));
      } else if (button.dataset.action === "extend-entitlement") {
        entitlement.validity += 30;
        renderAccessTable(); updateSummary(); renderChart();
        showToast(`${entitlement.student} access extended by 30 days in this preview.`);
      } else if (button.dataset.action === "revoke-entitlement") {
        entitlement.status = entitlement.status === "Revoked" ? "Active" : "Revoked";
        renderAccessTable(); updateSummary(); renderChart();
        showToast(`${entitlement.product} access ${entitlement.status.toLowerCase()} for ${entitlement.student} in this preview.`);
      }
    });
    document.getElementById("transaction-search").addEventListener("input", () => { transactionPage = 1; renderTransactions(); });
    document.getElementById("transaction-status-filter").addEventListener("change", () => { transactionPage = 1; renderTransactions(); });
    document.getElementById("transaction-pagination").addEventListener("click", event => {
      const button = event.target.closest("[data-page]");
      if (!button || button.disabled) return;
      transactionPage = Number(button.dataset.page);
      renderTransactions();
    });
    document.getElementById("recent-transaction-rows").addEventListener("click", event => {
      const button = event.target.closest("[data-action='transaction-details']");
      if (button) {
        const transaction = transactions.find(item => item.id === button.dataset.id);
        if (transaction) openTransaction(transaction);
      }
    });
    document.getElementById("all-transaction-rows").addEventListener("click", event => {
      const button = event.target.closest("[data-action='transaction-details']");
      if (button) {
        const transaction = transactions.find(item => item.id === button.dataset.id);
        if (transaction) openTransaction(transaction);
      }
    });
    document.getElementById("export-transactions").addEventListener("click", () => {
      const rows = filteredTransactions();
      if (!rows.length) { showToast("No transactions match the current filters."); return; }
      const columns = ["Transaction ID", "Gateway Reference", "Date", "Student", "Student ID", "Product", "Base Fee", "Discount Percent", "Discount Amount", "Tax", "Amount", "Payment Method", "Status", "Entitlement Status"];
      const quote = value => {
        const text = String(value ?? "");
        const safeText = /^[\u0000-\u0020]*[=+\-@]/.test(text) ? `'${text}` : text;
        return `"${safeText.replace(/"/g, '""')}"`;
      };
      const data = rows.map(item => [item.id, item.gatewayReference, item.date, item.student, item.studentId, item.product, item.baseFee, item.discountPercent, item.discountAmount, item.tax, item.amount, item.paymentMethod, item.status, item.entitlementStatus].map(quote).join(","));
      const blob = new Blob(["\uFEFF" + [columns.map(quote).join(","), ...data].join("\r\n")], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url; link.download = "fmge-transactions.csv";
      document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(`Exported ${rows.length} illustrative transaction${rows.length === 1 ? "" : "s"}.`);
    });
    document.getElementById("coupon-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const code = form.elements.code.value.trim().toUpperCase();
      if (coupons.some(coupon => coupon.code.toUpperCase() === code)) {
        form.elements.code.setCustomValidity("This coupon code already exists.");
        form.elements.code.reportValidity();
        form.elements.code.addEventListener("input", () => form.elements.code.setCustomValidity(""), { once: true });
        return;
      }
      const product = getProduct(form.elements.product.value);
      if (!product) { showToast("Select a valid product for the coupon."); return; }
      coupons.unshift({ code, discount: Number(form.elements.discount.value), product: product.name, expiry: form.elements.expiry.value, redemptions: 0, status: "Published" });
      closeModals();
      renderCoupons();
      showToast(`Coupon ${code} created in this preview.`);
    });
    document.getElementById("coupon-rows").addEventListener("click", event => {
      const button = event.target.closest("[data-action='toggle-coupon']");
      if (!button) return;
      const coupon = coupons.find(item => item.code === button.dataset.code);
      if (!coupon) return;
      coupon.status = coupon.status === "Published" ? "Draft" : "Published";
      renderCoupons();
      showToast(`${coupon.code} is now ${coupon.status.toLowerCase()} in this preview.`);
    });
    document.querySelectorAll("[data-action='create-fee']").forEach(button => button.addEventListener("click", () => openFeeForm()));
    document.querySelectorAll("[data-action='grant-access']").forEach(button => button.addEventListener("click", openAccessModal));
    document.querySelectorAll("[data-action='create-coupon']").forEach(button => button.addEventListener("click", () => {
      const form = document.getElementById("coupon-form");
      form.reset();
      syncQuestionBankProducts();
      setSelectOptions(document.getElementById("coupon-product"), products.map(product => ({ value: product.id, label: product.name })), "Choose a product");
      document.getElementById("coupon-expiry").value = daysAgo(-30);
      document.getElementById("coupon-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.getElementById("coupon-code").focus();
    }));
    document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModals));
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => { if (event.target === backdrop) closeModals(); }));
    document.addEventListener("click", event => {
      if (!event.target.closest(".top-action-wrap")) {
        document.getElementById("notification-popover").hidden = true;
        document.getElementById("notification-button").setAttribute("aria-expanded", "false");
      }
      if (!event.target.closest(".more-wrap") && !event.target.closest(".access-menu")) {
        document.querySelectorAll("[data-fee-menu], [data-entitlement-menu]").forEach(menu => { menu.hidden = true; });
        document.querySelectorAll('[data-action="more-fee"], [data-action="entitlement-menu"]').forEach(button => button.setAttribute("aria-expanded", "false"));
      }
    });
    document.getElementById("notification-button").addEventListener("click", () => {
      const popover = document.getElementById("notification-popover");
      const open = popover.hidden;
      popover.hidden = !open;
      document.getElementById("notification-button").setAttribute("aria-expanded", String(open));
      if (open) {
        document.getElementById("notification-count").hidden = true;
        document.getElementById("notification-button").setAttribute("aria-label", "Notifications, no unread alerts");
      }
    });
    document.getElementById("profile-button").addEventListener("click", () => showToast("Admin profile menu is a UI preview."));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeModals(); });

    renderFees();
    renderAccessSummary();
    renderAccessTable();
    renderRecentTransactions();
    renderCoupons();
    updateSummary();
    renderChart();
}
