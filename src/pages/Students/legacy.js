// Behaviour carried over unchanged from the original HTML page.
// Runs once after the JSX markup mounts; `document`, `window`, `parent` and timers are
// scoped shims provided by useLegacyScript (see src/legacy/useLegacyScript.js).
export default function init(document, window, parent, setTimeout, setInterval) {
const DAY_MS = 86400000;
    const dateDaysAgo = days => {
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
    const students = [
      { id: 1, name: "Aarav Sharma", email: "aarav.sharma@gmail.com", phone: "+91 98765 43210", course: "FMGE Full Course", registrationDate: dateDaysAgo(25), lastLogin: timestampDaysAgo(0, 10, 24), status: "Active", progress: 68, completedVideos: 42, inProgressVideos: 8, watchHours: 18.5, score: 72 },
      { id: 2, name: "Priya Singh", email: "priya.singh@outlook.com", phone: "+91 87654 32109", course: "Test Series", registrationDate: dateDaysAgo(23), lastLogin: timestampDaysAgo(0, 9, 18), status: "Active", progress: 82, completedVideos: 37, inProgressVideos: 4, watchHours: 14.2, score: 86 },
      { id: 3, name: "Rahul Verma", email: "rahul.verma@gmail.com", phone: "+91 96543 21098", course: "Study Material", registrationDate: dateDaysAgo(21), lastLogin: timestampDaysAgo(0, 8, 56), status: "Active", progress: 54, completedVideos: 26, inProgressVideos: 9, watchHours: 11.7, score: 64 },
      { id: 4, name: "Simran Kaur", email: "simran.kaur@gmail.com", phone: "+91 94321 09876", course: "Live Classes", registrationDate: dateDaysAgo(19), lastLogin: timestampDaysAgo(1, 22, 12), status: "Active", progress: 75, completedVideos: 34, inProgressVideos: 5, watchHours: 16.3, score: 78 },
      { id: 5, name: "Aditya Patel", email: "aditya.patel@outlook.com", phone: "+91 93210 98765", course: "Test Series", registrationDate: dateDaysAgo(18), lastLogin: timestampDaysAgo(1, 21, 43), status: "Active", progress: 49, completedVideos: 19, inProgressVideos: 6, watchHours: 8.8, score: 58 },
      { id: 6, name: "Neha Gupta", email: "neha.gupta@gmail.com", phone: "+91 91234 56789", course: "FMGE Full Course", registrationDate: dateDaysAgo(16), lastLogin: timestampDaysAgo(2, 19, 21), status: "Active", progress: 91, completedVideos: 51, inProgressVideos: 3, watchHours: 27.1, score: 92 },
      { id: 7, name: "Karan Mehta", email: "karan.mehta@yahoo.com", phone: "+91 99887 66554", course: "Test Series", registrationDate: dateDaysAgo(14), lastLogin: timestampDaysAgo(35, 18, 18), status: "Inactive", progress: 22, completedVideos: 9, inProgressVideos: 3, watchHours: 4.1, score: 42 },
      { id: 8, name: "Riya Nair", email: "riya.nair@gmail.com", phone: "+91 88990 11223", course: "Study Material", registrationDate: dateDaysAgo(12), lastLogin: timestampDaysAgo(3, 17, 46), status: "Active", progress: 63, completedVideos: 29, inProgressVideos: 7, watchHours: 12.4, score: 69 },
      { id: 9, name: "Vikram Reddy", email: "vikram.reddy@gmail.com", phone: "+91 77665 44332", course: "Live Classes", registrationDate: dateDaysAgo(10), lastLogin: timestampDaysAgo(5, 16, 12), status: "Active", progress: 38, completedVideos: 17, inProgressVideos: 5, watchHours: 7.3, score: 51 },
      { id: 10, name: "Pooja Sharma", email: "pooja.sharma@gmail.com", phone: "+91 70123 45678", course: "Test Series", registrationDate: dateDaysAgo(8), lastLogin: null, status: "Pending", progress: 0, completedVideos: 0, inProgressVideos: 0, watchHours: 0, score: 0 },
      { id: 11, name: "Ananya Rao", email: "ananya.rao@gmail.com", phone: "+91 88776 55443", course: "FMGE Full Course", registrationDate: dateDaysAgo(6), lastLogin: timestampDaysAgo(8, 14, 5), status: "Inactive", progress: 31, completedVideos: 12, inProgressVideos: 4, watchHours: 5.6, score: 47 },
      { id: 12, name: "Ishaan Joshi", email: "ishaan.joshi@gmail.com", phone: "+91 77889 99001", course: "Study Material", registrationDate: dateDaysAgo(3), lastLogin: timestampDaysAgo(1, 11, 38), status: "Active", progress: 57, completedVideos: 22, inProgressVideos: 6, watchHours: 9.5, score: 66 }
    ];
    const courses = ["FMGE Full Course", "Test Series", "Study Material", "Live Classes"];
    const subjects = ["Medicine", "Surgery", "OBG", "Pediatrics", "Pathology"];
    const subjectBases = [75, 68, 62, 58, 55];
    const videos = [
      { title: "Cardiovascular System - Part 1", duration: "42:35", days: 0, state: "Completed" },
      { title: "Respiratory System - Anatomy", duration: "36:20", days: 2, state: "Completed" },
      { title: "Pharmacology - Antimicrobials", duration: "28:15", days: 5, state: "Completed" },
      { title: "Biochemistry - Carbohydrate Metabolism", duration: "32:40", days: 8, state: "Completed" },
      { title: "Pathology - Cell Injury", duration: "25:30", days: 10, state: "In Progress" },
      { title: "Renal System - Clinical Review", duration: "39:10", days: 14, state: "Completed" },
      { title: "Neuroanatomy - Essentials", duration: "31:45", days: 22, state: "Not Started" }
    ];
    const sessionTemplates = [
      { days: 0, name: "Cardiovascular System - Live Class", type: "Live Class", duration: "1.5 hrs" },
      { days: 2, name: "Medicine - Doubt Clearing Session", type: "Live Class", duration: "1 hr" },
      { days: 5, name: "Test Series - Paper 3", type: "Test Series", duration: "2 hrs" },
      { days: 8, name: "Anatomy - Video Lecture", type: "Video Lecture", duration: "45 mins" },
      { days: 12, name: "Pathology - Live Class", type: "Live Class", duration: "1.5 hrs" },
      { days: 18, name: "Test Series - Paper 2", type: "Test Series", duration: "2 hrs" },
      { days: 27, name: "Pharmacology - Review Session", type: "Live Class", duration: "1 hr" },
      { days: 42, name: "Surgery - Video Lecture", type: "Video Lecture", duration: "50 mins" }
    ];
    const pageSize = 5;
    let currentPage = 1;
    let selectedStudentId = null;
    let selectedPerformanceCourse = null;
    let pendingResetStudentId = null;
    let pendingDeleteStudentId = null;
    let editStudentId = null;
    let activeTab = "overview";
    let activityRange = "7";
    let toastTimer;

    const studentRows = document.getElementById("student-rows");
    const courseFilter = document.getElementById("course-filter");
    const statusFilter = document.getElementById("status-filter");
    const loginFilter = document.getElementById("login-filter");
    const listDateRange = document.getElementById("list-date-range");
    const studentSearch = document.getElementById("student-search");
    const globalSearch = document.getElementById("global-search");
    const studentModal = document.getElementById("student-modal");
    const detailsModal = document.getElementById("details-modal");
    const performancePage = document.getElementById("performance-page");
    const studentsHome = document.getElementById("students-home");

    function addMonthsToDate(dateString, months) {
      if (!dateString || months === "lifetime") return "";
      const date = new Date(`${dateString}T12:00:00`);
      date.setMonth(date.getMonth() + Number(months));
      return date.toISOString().slice(0, 10);
    }
    function ensureSubscriptions(student) {
      if (!Array.isArray(student.subscriptions)) {
        student.subscriptions = [{
          course: student.course,
          plan: `${student.course} Access`,
          startDate: student.registrationDate,
          endDate: addMonthsToDate(student.registrationDate, 12),
          amount: 0,
          status: student.status === "Active" ? "Active" : student.status,
          source: "Original enrollment"
        }];
      }
      return student.subscriptions;
    }
    function getStudentCourses(student) {
      return [...new Set([student.course, ...ensureSubscriptions(student).map(subscription => subscription.course)].filter(Boolean))];
    }
    function ensureCourseMetrics(student) {
      if (!student.courseMetrics) {
        student.courseMetrics = {
          [student.course]: {
            progress: student.progress,
            completedVideos: student.completedVideos,
            inProgressVideos: student.inProgressVideos,
            watchHours: student.watchHours,
            score: student.score
          }
        };
      }
      getStudentCourses(student).forEach(course => {
        if (!student.courseMetrics[course]) {
          student.courseMetrics[course] = { progress: 0, completedVideos: 0, inProgressVideos: 0, watchHours: 0, score: 0 };
        }
      });
      return student.courseMetrics;
    }
    function courseMetricsFor(student, course) {
      const metrics = ensureCourseMetrics(student)[course] || { progress: 0, completedVideos: 0, inProgressVideos: 0, watchHours: 0, score: 0 };
      if (course === student.course) {
        Object.assign(metrics, {
          progress: student.progress,
          completedVideos: student.completedVideos,
          inProgressVideos: student.inProgressVideos,
          watchHours: student.watchHours,
          score: student.score
        });
      }
      return metrics;
    }
    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      })[char]);
    }
    function initials(name) {
      return name.trim().split(/\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase();
    }
    function formatDate(dateString) {
      if (!dateString) return "—";
      return new Date(`${dateString.slice(0, 10)}T12:00:00`).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
    }
    function formatLogin(value) {
      if (!value) return "Never";
      const date = new Date(value);
      return `${date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}, ${date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`;
    }
    function loginDaysAgo(value) {
      if (!value) return Infinity;
      return Math.floor((Date.now() - new Date(value).getTime()) / DAY_MS);
    }
    function courseClass(course) {
      if (course === "Test Series") return "test";
      if (course === "Study Material") return "study";
      if (course === "Live Classes") return "live";
      return "";
    }
    function studentIcon(name, index) {
      const colors = ["#18b9ad", "#8164ec", "#1299bd", "#187bd0", "#f0a332", "#0c8ec0"];
      const color = colors[index % colors.length];
      return `<span class="avatar" style="background:${color}" aria-hidden="true">${escapeHtml(initials(name))}</span>`;
    }
    function getFilteredStudents() {
      const query = studentSearch.value.trim().toLowerCase();
      const selectedCourse = courseFilter.value;
      const selectedStatus = statusFilter.value;
      const selectedLogin = loginFilter.value;
      const registrationDays = listDateRange.value;
      const globalQuery = globalSearch.value.trim().toLowerCase();
      const phoneQuery = query.replace(/[^\d+]/g, "");
      return students.filter(student => {
        const searchable = `${student.name} ${student.email} ${student.phone}`.toLowerCase();
        const searchMatches = (!query && !globalQuery) ||
          (Boolean(query) && (searchable.includes(query) || (phoneQuery.length > 3 && student.phone.replace(/[^\d+]/g, "").includes(phoneQuery)))) ||
          (Boolean(globalQuery) && searchable.includes(globalQuery));
        if (!searchMatches) return false;
        if (selectedCourse && student.course !== selectedCourse) return false;
        if (selectedStatus && student.status !== selectedStatus) return false;
        const lastLoginDays = loginDaysAgo(student.lastLogin);
        if (selectedLogin === "never" && student.lastLogin) return false;
        if (selectedLogin && selectedLogin !== "never" && (!student.lastLogin || lastLoginDays > Number(selectedLogin))) return false;
        if (registrationDays !== "all" && (Date.now() - new Date(`${student.registrationDate}T00:00:00`).getTime()) / DAY_MS > Number(registrationDays)) return false;
        return true;
      });
    }
    function actionIcon(name) {
      const icons = {
        view: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
        edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/></svg>',
        more: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="12" cy="19" r="1.8"/></svg>',
        performance: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m8 14 4-4 3 3 5-7"/></svg>'
      };
      return icons[name];
    }
    function renderStudentTable() {
      const filtered = getFilteredStudents();
      const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
      currentPage = Math.min(currentPage, pageCount);
      const start = (currentPage - 1) * pageSize;
      const visibleStudents = filtered.slice(start, start + pageSize);
      studentRows.innerHTML = visibleStudents.length ? visibleStudents.map((student, index) => `
        <tr data-student-id="${student.id}">
          <td class="check-cell"><input class="student-select" type="checkbox" aria-label="Select ${escapeHtml(student.name)}" value="${student.id}"></td>
          <td>${start + index + 1}</td>
          <td><div class="student-cell">${studentIcon(student.name, start + index)}<span><strong>${escapeHtml(student.name)}</strong><small>Student ID: STU-${String(student.id).padStart(4, "0")}</small></span></div></td>
          <td class="email-cell">${escapeHtml(student.email)}</td>
          <td>${escapeHtml(student.phone)}</td>
          <td><span class="course-pill ${courseClass(student.course)}">${escapeHtml(student.course)}</span></td>
          <td>${formatDate(student.registrationDate)}</td>
          <td>${formatLogin(student.lastLogin)}</td>
          <td><span class="status-pill ${student.status.toLowerCase()}">${escapeHtml(student.status)}</span></td>
          <td><div class="action-cell">
            <button class="action-button" type="button" data-action="view" data-id="${student.id}" aria-label="View ${escapeHtml(student.name)}">${actionIcon("view")}</button>
            <button class="action-button" type="button" data-action="edit" data-id="${student.id}" aria-label="Edit ${escapeHtml(student.name)}">${actionIcon("edit")}</button>
            <button class="action-button performance" type="button" data-action="performance" data-id="${student.id}" aria-label="View ${escapeHtml(student.name)} performance">${actionIcon("performance")}</button>
            <div class="more-wrap"><button class="action-button" type="button" data-action="more" data-id="${student.id}" aria-label="More actions for ${escapeHtml(student.name)}" aria-expanded="false">${actionIcon("more")}</button>
              <div class="more-menu" data-menu-id="${student.id}" hidden>
                <button type="button" data-action="performance" data-id="${student.id}">${actionIcon("performance")}Student Performance</button>
                <button type="button" data-action="view" data-id="${student.id}">${actionIcon("view")}View Profile</button>
                <button type="button" data-action="subscription-history" data-id="${student.id}">Subscription History</button>
                <button type="button" data-action="add-subscription" data-id="${student.id}">Add Manual Subscription</button>
                <button type="button" data-action="reset-course" data-id="${student.id}">Reset Course</button>
                <span class="menu-divider" aria-hidden="true"></span>
                <button type="button" data-action="toggle-status" data-id="${student.id}">${student.status === "Active" ? "Mark Inactive" : "Mark Active"}</button>
                <button class="danger-action" type="button" data-action="delete-student" data-id="${student.id}">Delete User</button>
              </div>
            </div>
          </div></td>
        </tr>`).join("") : '<tr class="empty-row"><td colspan="10">No students match these filters. Try changing your search or filters.</td></tr>';
      document.getElementById("table-count").textContent = filtered.length
        ? `Showing ${start + 1}–${Math.min(start + pageSize, filtered.length)} of ${filtered.length} matching students`
        : "Showing 0 students";
      document.getElementById("select-all").checked = false;
      const selectedCount = studentRows.querySelectorAll(".student-select:checked").length;
      document.getElementById("selection-label").textContent = selectedCount ? `${selectedCount} student${selectedCount === 1 ? "" : "s"} selected on this page.` : "Browse, manage, and review student accounts.";
      renderPagination(pageCount);
    }
    function renderPagination(pageCount) {
      const host = document.getElementById("pagination");
      if (pageCount <= 1) { host.innerHTML = ""; return; }
      const makeButton = (label, page, disabled = false, current = false, aria = "") =>
        `<button class="page-button${current ? " current" : ""}" type="button" data-page="${page}" ${disabled ? "disabled" : ""} ${current ? 'aria-current="page"' : ""} ${aria ? `aria-label="${aria}"` : ""}>${label}</button>`;
      let html = makeButton("‹", currentPage - 1, currentPage === 1, false, "Previous page");
      const pages = new Set([1, pageCount, currentPage, currentPage - 1, currentPage + 1].filter(page => page >= 1 && page <= pageCount));
      let previous = 0;
      [...pages].sort((a, b) => a - b).forEach(page => {
        if (previous && page - previous > 1) html += '<span class="page-ellipsis" aria-hidden="true">…</span>';
        html += makeButton(String(page), page, false, page === currentPage, `Page ${page}`);
        previous = page;
      });
      html += makeButton("›", currentPage + 1, currentPage === pageCount, false, "Next page");
      host.innerHTML = html;
    }
    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("is-visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2800);
    }
    function findStudent(id) {
      return students.find(student => student.id === Number(id));
    }

    function openStudentForm(student = null) {
      editStudentId = student?.id ?? null;
      const form = document.getElementById("student-form");
      form.reset();
      document.getElementById("modal-title").textContent = student ? "Edit Student" : "Add Student";
      document.getElementById("modal-description").textContent = student ? "Update this illustrative student profile." : "Create a student profile for the admin panel.";
      document.getElementById("save-student").textContent = student ? "Save Changes" : "Add Student";
      if (student) {
        form.elements.name.value = student.name;
        form.elements.email.value = student.email;
        form.elements.phone.value = student.phone;
        form.elements.course.value = student.course;
        form.elements.status.value = student.status;
        form.elements.registrationDate.value = student.registrationDate;
      } else {
        form.elements.registrationDate.value = dateDaysAgo(0);
      }
      studentModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.getElementById("form-name").focus();
    }
    function studentDetailMarkup(student) {
      const values = [
        ["Name", student.name], ["Student ID", `STU-${String(student.id).padStart(4, "0")}`],
        ["Email", student.email], ["Phone", student.phone], ["Course access", student.course],
        ["Registration date", formatDate(student.registrationDate)], ["Last login", formatLogin(student.lastLogin)],
        ["Account status", student.status]
      ];
      return values.map(([label, value]) => `<div class="detail-item"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
    }
    function openStudentDetails(student) {
      selectedStudentId = student.id;
      document.getElementById("details-title").textContent = student.name;
      document.getElementById("student-details").innerHTML = studentDetailMarkup(student);
      detailsModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.querySelector("#details-modal [data-close-modal]").focus();
    }
    function openSubscriptionHistory(student) {
      selectedStudentId = student.id;
      const subscriptions = ensureSubscriptions(student);
      document.getElementById("subscription-history-title").textContent = `${student.name} — Subscription History`;
      document.getElementById("subscription-history-description").textContent = `${subscriptions.length} subscription record${subscriptions.length === 1 ? "" : "s"} · illustrative preview`;
      document.getElementById("subscription-history-rows").innerHTML = subscriptions.length ? subscriptions.map(subscription => `
        <tr><td>${escapeHtml(subscription.course)}</td><td>${escapeHtml(subscription.plan)}</td><td>${formatDate(subscription.startDate)}</td>
          <td>${subscription.endDate ? formatDate(subscription.endDate) : "Lifetime"}</td><td>₹${Number(subscription.amount || 0).toLocaleString("en-IN")}</td>
          <td><span class="status-pill ${String(subscription.status).toLowerCase() === "active" ? "active" : String(subscription.status).toLowerCase() === "pending" ? "pending" : "inactive"}">${escapeHtml(subscription.status)}</span></td></tr>`).join("")
        : '<tr class="empty-row"><td colspan="6">No subscription history is available.</td></tr>';
      document.getElementById("subscription-history-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.querySelector("#subscription-history-modal [data-close-modal]").focus();
    }
    function openManualSubscription(student) {
      selectedStudentId = student.id;
      const form = document.getElementById("manual-subscription-form");
      form.reset();
      form.elements.startDate.value = dateDaysAgo(0);
      updateSubscriptionEndDate();
      document.getElementById("manual-subscription-description").textContent = `Grant course access to ${student.name}.`;
      document.getElementById("manual-subscription-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.getElementById("subscription-course").focus();
    }
    function openResetCourse(student) {
      pendingResetStudentId = student.id;
      const select = document.getElementById("reset-course-select");
      select.innerHTML = `<option value="__all__">All courses</option>${getStudentCourses(student).map(course => `<option value="${escapeHtml(course)}">${escapeHtml(course)}</option>`).join("")}`;
      document.getElementById("reset-course-description").textContent = `Reset learning activity for ${student.name}.`;
      document.getElementById("reset-course-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      select.focus();
    }
    function openDeleteStudent(student) {
      pendingDeleteStudentId = student.id;
      document.getElementById("delete-student-message").textContent = `Delete ${student.name} (${student.email}) from this student list? This action cannot be undone in the current page session.`;
      document.getElementById("delete-student-modal").classList.add("is-open");
      document.body.style.overflow = "hidden";
      document.getElementById("confirm-delete-student").focus();
    }
    function closeModals() {
      document.querySelectorAll(".modal-backdrop.is-open").forEach(modal => modal.classList.remove("is-open"));
      document.body.style.overflow = "";
    }
    function renderSubjects(student, metrics) {
      const variation = (student.id * 7) % 13;
      const subjectValues = subjectBases.map((baseline, index) => Math.min(100, Math.max(0, Math.round(metrics.score + baseline - 64 + ((variation + index * 3) % 17) - 8))));
      document.getElementById("subject-progress-list").innerHTML = subjects.map((subject, index) => {
        const progress = Math.min(100, Math.round(metrics.progress * (0.65 + subjectValues[index] / 180)));
        const lessons = Math.round(progress / 5);
        return `<div class="subject-row"><span class="subject-icon" aria-hidden="true">${subject.slice(0, 1)}</span><div><div class="subject-name">${subject}</div><div class="subject-progress-track"><div class="subject-progress-fill" style="width:${progress}%"></div></div></div><span class="subject-percent">${progress}%<small style="display:block;margin-top:3px;color:#8599ab;font-size:8px">${lessons} / 20</small></span></div>`;
      }).join("");
      document.getElementById("score-list").innerHTML = subjects.map((subject, index) =>
        `<div class="score-row"><span class="legend-dot" style="background:${["#499dff","#8c67ed","#f45b88","#f4a43c","#16b98d"][index]}"></span><span>${subject}</span><div class="score-track"><span style="width:${subjectValues[index]}%"></span></div><strong>${subjectValues[index]}%</strong></div>`
      ).join("");
      document.getElementById("report-subject-list").innerHTML = subjects.map((subject, index) =>
        `<div class="subject-row"><span class="subject-icon" aria-hidden="true">${subject.slice(0, 1)}</span><div><div class="subject-name">${subject}</div><div class="subject-progress-track"><div class="subject-progress-fill" style="width:${subjectValues[index]}%"></div></div></div><span class="subject-percent">${subjectValues[index]}%<small style="display:block;margin-top:3px;color:#8599ab;font-size:8px">Assessment score</small></span></div>`
      ).join("");
      document.getElementById("overall-score").textContent = `${metrics.score}%`;
      document.getElementById("report-score").textContent = `${metrics.score}%`;
      document.getElementById("score-donut").style.background = `conic-gradient(#15bc95 0 ${metrics.score}%, #d8ebf3 ${metrics.score}% 100%)`;
      document.getElementById("report-lessons").textContent = `${metrics.progress} / 100`;
    }
    function renderVideos(student, metrics) {
      const total = 58;
      const inProgress = Math.min(metrics.inProgressVideos, total - metrics.completedVideos);
      const notStarted = Math.max(0, total - metrics.completedVideos - inProgress);
      document.getElementById("videos-completed").textContent = metrics.completedVideos;
      document.getElementById("videos-total").textContent = total;
      document.getElementById("video-total-summary").textContent = total;
      document.getElementById("donut-completed").textContent = metrics.completedVideos;
      document.getElementById("video-completed-count").textContent = metrics.completedVideos;
      document.getElementById("video-progress-count").textContent = inProgress;
      document.getElementById("video-not-started-count").textContent = notStarted;
      const completedPercent = metrics.completedVideos / total * 100;
      const progressPercent = inProgress / total * 100;
      document.getElementById("video-donut").style.background = `conic-gradient(#13b989 0 ${completedPercent}%, #4299ff ${completedPercent}% ${completedPercent + progressPercent}%, #d2e0eb ${completedPercent + progressPercent}% 100%)`;
      document.getElementById("top-videos").innerHTML = videos.slice(0, 5).map(video => `
        <div class="video-row"><span class="video-thumb" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 5 11 7-11 7V5Z"/></svg></span>
          <span><span class="video-name">${video.title}</span><span class="video-meta">${video.duration} &nbsp; Watched ${formatDate(dateDaysAgo(video.days))}, 09:15 AM</span></span>
          <span class="video-state ${video.state === "In Progress" ? "in-progress" : ""}">${video.state}</span></div>`).join("");
    }
    function sessionDate(session) {
      const date = new Date();
      date.setHours(12, 0, 0, 0);
      date.setDate(date.getDate() - session.days);
      return date.toISOString().slice(0, 10);
    }
    function filteredSessions(range) {
      const fromInput = document.getElementById("activity-from").value || document.getElementById("performance-from").value;
      const toInput = document.getElementById("activity-to").value || document.getElementById("performance-to").value;
      const now = new Date();
      return sessionTemplates.filter(session => {
        const dateString = sessionDate(session);
        if (range === "custom") {
          if (!fromInput || !toInput || fromInput > toInput) return false;
          return dateString >= fromInput && dateString <= toInput;
        }
        return session.days < Number(range) && dateString <= now.toISOString().slice(0, 10);
      });
    }
    function renderSessionRows(target, range, headers = true) {
      const sessions = filteredSessions(range);
      if (headers) {
        document.getElementById("activity-head").innerHTML = "<tr><th>Date</th><th>Session Name</th><th>Type</th><th>Duration</th><th>Status</th></tr>";
        document.getElementById("activity-rows").innerHTML = sessions.length ? sessions.map(session =>
          `<tr><td>${formatDate(sessionDate(session))}</td><td>${session.name}</td><td>${session.type}</td><td>${session.duration}</td><td><span class="status-pill active">Attended</span></td></tr>`
        ).join("") : "";
        document.getElementById("activity-empty").hidden = sessions.length > 0;
      } else {
        target.innerHTML = sessions.slice(0, 5).map(session =>
          `<tr><td>${formatDate(sessionDate(session))}</td><td>${session.name}</td><td>${session.type}</td><td>${session.duration}</td><td><span class="status-pill active">Attended</span></td></tr>`
        ).join("");
        document.getElementById("report-sessions").textContent = sessions.length;
      }
      return sessions;
    }
    function populatePerformance(student) {
      document.getElementById("performance-name").textContent = student.name;
      document.getElementById("performance-avatar").textContent = initials(student.name);
      document.getElementById("performance-email").textContent = student.email;
      const courseSelect = document.getElementById("performance-course");
      const availableCourses = getStudentCourses(student);
      courseSelect.innerHTML = availableCourses.map(course => `<option value="${escapeHtml(course)}">${escapeHtml(course)}</option>`).join("");
      selectedPerformanceCourse = availableCourses.includes(selectedPerformanceCourse) ? selectedPerformanceCourse : student.course;
      courseSelect.value = selectedPerformanceCourse;
      const metrics = courseMetricsFor(student, selectedPerformanceCourse);
      const status = document.getElementById("performance-status");
      status.textContent = student.status;
      status.className = `status-pill ${student.status.toLowerCase()}`;
      document.getElementById("course-percent").textContent = `${metrics.progress}%`;
      document.getElementById("course-ring").style.setProperty("--progress", metrics.progress);
      document.getElementById("lessons-completed").textContent = `${metrics.progress} of 100`;
      document.getElementById("watch-hours").textContent = metrics.watchHours.toFixed(1);
      document.getElementById("available-hours").textContent = "40";
      document.getElementById("last-login-date").textContent = student.lastLogin ? formatDate(student.lastLogin) : "Never";
      document.getElementById("last-login-time").textContent = student.lastLogin ? new Date(student.lastLogin).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "No login recorded";
      document.getElementById("performance-title").textContent = `${student.name} — Performance`;
      renderSubjects(student, metrics);
      renderVideos(student, metrics);
      renderSessionRows(document.getElementById("overview-sessions"), "30", false);
      document.getElementById("performance-range").value = "7";
      activityRange = "7";
      document.querySelectorAll("[data-activity-range]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.activityRange === activityRange)));
    }
    function refreshPerformanceCourse(student) {
      const metrics = courseMetricsFor(student, selectedPerformanceCourse);
      document.getElementById("course-percent").textContent = `${metrics.progress}%`;
      document.getElementById("course-ring").style.setProperty("--progress", metrics.progress);
      document.getElementById("lessons-completed").textContent = `${metrics.progress} of 100`;
      document.getElementById("watch-hours").textContent = metrics.watchHours.toFixed(1);
      renderSubjects(student, metrics);
      renderVideos(student, metrics);
    }
    function showPerformance(student) {
      selectedStudentId = student.id;
      selectedPerformanceCourse = student.course;
      closeModals();
      populatePerformance(student);
      studentsHome.hidden = true;
      performancePage.hidden = false;
      document.getElementById("performance-overview").hidden = false;
      document.getElementById("performance-detail").hidden = true;
      document.getElementById("performance-report").hidden = true;
      activeTab = "overview";
      document.querySelectorAll("[data-tab]").forEach(button => button.setAttribute("aria-selected", String(button.dataset.tab === activeTab)));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function showPerformanceTab(tab) {
      activeTab = tab;
      document.querySelectorAll("[data-tab]").forEach(button => button.setAttribute("aria-selected", String(button.dataset.tab === tab)));
      document.getElementById("performance-overview").hidden = tab !== "overview";
      document.getElementById("performance-detail").hidden = tab !== "sessions" && tab !== "videos";
      document.getElementById("performance-report").hidden = tab !== "report";
      if (tab === "sessions" || tab === "videos") {
        document.getElementById("activity-title").textContent = tab === "sessions" ? "Attended Sessions" : "Video Activity & Watch Time";
        document.getElementById("activity-tabs").hidden = tab !== "sessions";
        document.getElementById("activity-custom-dates").hidden = tab !== "sessions" || activityRange !== "custom";
        renderActivityTab(tab);
      }
      if (tab === "report" && selectedStudentId) renderSessionRows(document.getElementById("overview-sessions"), "30", false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function renderActivityTab(tab) {
      const rows = document.getElementById("activity-rows");
      const head = document.getElementById("activity-head");
      if (tab === "sessions") {
        renderSessionRows(rows, activityRange);
      } else {
        head.innerHTML = "<tr><th>Video</th><th>Duration</th><th>Last activity</th><th>Watch time</th><th>Status</th></tr>";
        const fromInput = document.getElementById("activity-from").value || document.getElementById("performance-from").value;
        const toInput = document.getElementById("activity-to").value || document.getElementById("performance-to").value;
        const visibleVideos = activityRange === "custom"
          ? videos.filter(video => fromInput && toInput && fromInput <= toInput && dateDaysAgo(video.days) >= fromInput && dateDaysAgo(video.days) <= toInput)
          : videos.filter(video => video.days < Number(activityRange));
        rows.innerHTML = visibleVideos.length ? visibleVideos.map((video, index) => {
          const student = findStudent(selectedStudentId);
          const state = video.state === "Not Started" ? "Not Started" : video.state;
          const watchMinutes = video.state === "Completed" ? Math.max(12, 20 + ((student.id * 11 + index * 7) % 31)) : state === "In Progress" ? 14 : 0;
          return `<tr><td>${video.title}</td><td>${video.duration}</td><td>${formatDate(dateDaysAgo(video.days))}</td><td>${watchMinutes ? `${watchMinutes} mins` : "—"}</td><td><span class="video-state ${state === "In Progress" ? "in-progress" : ""}" style="${state === "Not Started" ? "color:#657f98;background:#edf4f9" : ""}">${state}</span></td></tr>`;
        }).join("") : "";
        document.getElementById("activity-empty").hidden = visibleVideos.length > 0;
      }
    }
    function switchActivityRange(range) {
      activityRange = range;
      document.getElementById("activity-custom-dates").hidden = range !== "custom";
      document.querySelectorAll("[data-activity-range]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.activityRange === range)));
      renderActivityTab(activeTab);
    }

    [studentSearch, globalSearch, courseFilter, statusFilter, loginFilter, listDateRange].forEach(control => {
      control.addEventListener("input", () => { currentPage = 1; renderStudentTable(); });
      control.addEventListener("change", () => { currentPage = 1; renderStudentTable(); });
    });
    document.getElementById("reset-filters").addEventListener("click", () => {
      studentSearch.value = "";
      globalSearch.value = "";
      courseFilter.value = "";
      statusFilter.value = "";
      loginFilter.value = "";
      listDateRange.value = "all";
      currentPage = 1;
      renderStudentTable();
    });
    document.getElementById("pagination").addEventListener("click", event => {
      const button = event.target.closest("[data-page]");
      if (!button || button.disabled) return;
      currentPage = Number(button.dataset.page);
      renderStudentTable();
    });
    studentRows.addEventListener("click", event => {
      const button = event.target.closest("[data-action]");
      if (!button) return;
      const student = findStudent(button.dataset.id);
      if (!student) return;
      const action = button.dataset.action;
      if (action !== "more") {
        const menu = studentRows.querySelector(`[data-menu-id="${student.id}"]`);
        const trigger = studentRows.querySelector(`[data-action="more"][data-id="${student.id}"]`);
        if (menu) menu.hidden = true;
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      }
      if (action === "more") {
        const menu = studentRows.querySelector(`[data-menu-id="${student.id}"]`);
        const isOpen = menu.hidden;
        studentRows.querySelectorAll(".more-menu").forEach(item => { item.hidden = true; });
        studentRows.querySelectorAll('[data-action="more"]').forEach(item => item.setAttribute("aria-expanded", "false"));
        menu.hidden = !isOpen;
        button.setAttribute("aria-expanded", String(isOpen));
      } else if (action === "view") openStudentDetails(student);
      else if (action === "edit") openStudentForm(student);
      else if (action === "performance") showPerformance(student);
      else if (action === "subscription-history") openSubscriptionHistory(student);
      else if (action === "add-subscription") openManualSubscription(student);
      else if (action === "reset-course") openResetCourse(student);
      else if (action === "delete-student") openDeleteStudent(student);
      else if (action === "toggle-status") {
        student.status = student.status === "Active" ? "Inactive" : "Active";
        renderStudentTable();
        showToast(`${student.name} marked ${student.status.toLowerCase()} in this preview.`);
      }
    });
    document.addEventListener("click", event => {
      if (!event.target.closest(".more-wrap")) {
        studentRows.querySelectorAll(".more-menu").forEach(menu => { menu.hidden = true; });
        studentRows.querySelectorAll('[data-action="more"]').forEach(button => button.setAttribute("aria-expanded", "false"));
      }
      const popover = document.getElementById("notification-popover");
      if (!event.target.closest(".top-action-wrap")) {
        popover.hidden = true;
        document.getElementById("notification-button").setAttribute("aria-expanded", "false");
      }
    });
    document.getElementById("select-all").addEventListener("change", event => {
      studentRows.querySelectorAll(".student-select").forEach(checkbox => { checkbox.checked = event.target.checked; });
      const selected = studentRows.querySelectorAll(".student-select:checked").length;
      document.getElementById("selection-label").textContent = selected ? `${selected} student${selected === 1 ? "" : "s"} selected on this page.` : "Browse, manage, and review student accounts.";
    });
    studentRows.addEventListener("change", event => {
      if (!event.target.matches(".student-select")) return;
      const boxes = [...studentRows.querySelectorAll(".student-select")];
      document.getElementById("select-all").checked = boxes.length > 0 && boxes.every(checkbox => checkbox.checked);
      const selected = boxes.filter(checkbox => checkbox.checked).length;
      document.getElementById("selection-label").textContent = selected ? `${selected} student${selected === 1 ? "" : "s"} selected on this page.` : "Browse, manage, and review student accounts.";
    });
    document.getElementById("add-student-button").addEventListener("click", () => openStudentForm());
    document.getElementById("student-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const email = form.elements.email.value.trim().toLowerCase();
      const duplicate = students.find(student => student.email.toLowerCase() === email && student.id !== editStudentId);
      if (duplicate) {
        form.elements.email.setCustomValidity("This email is already in the student list.");
        form.elements.email.reportValidity();
        form.elements.email.addEventListener("input", () => form.elements.email.setCustomValidity(""), { once: true });
        return;
      }
      const data = {
        name: form.elements.name.value.trim(),
        email,
        phone: form.elements.phone.value.trim(),
        course: form.elements.course.value,
        status: form.elements.status.value,
        registrationDate: form.elements.registrationDate.value || dateDaysAgo(0)
      };
      if (editStudentId) {
        const student = findStudent(editStudentId);
        if (student.course !== data.course) {
          ensureCourseMetrics(student);
          const nextMetrics = student.courseMetrics[data.course] || { progress: 0, completedVideos: 0, inProgressVideos: 0, watchHours: 0, score: 0 };
          Object.assign(student, nextMetrics);
          student.courseMetrics[data.course] = nextMetrics;
        }
        Object.assign(student, data);
        showToast(`${student.name} updated in this preview.`);
      } else {
        const student = { id: Math.max(0, ...students.map(item => item.id)) + 1, ...data, lastLogin: null, progress: 0, completedVideos: 0, inProgressVideos: 0, watchHours: 0, score: 0 };
        students.unshift(student);
        showToast(`${student.name} added to this preview.`);
      }
      closeModals();
      currentPage = 1;
      studentSearch.value = "";
      globalSearch.value = "";
      courseFilter.value = "";
      statusFilter.value = "";
      loginFilter.value = "";
      listDateRange.value = "all";
      renderStudentTable();
    });
    document.getElementById("history-add-subscription").addEventListener("click", () => {
      const student = findStudent(selectedStudentId);
      if (!student) return;
      closeModals();
      openManualSubscription(student);
    });
    function updateSubscriptionEndDate() {
      const form = document.getElementById("manual-subscription-form");
      const isLifetime = form.elements.plan.value === "lifetime";
      form.elements.endDate.disabled = isLifetime;
      form.elements.endDate.value = isLifetime ? "" : addMonthsToDate(form.elements.startDate.value, form.elements.plan.value);
    }
    document.getElementById("subscription-plan").addEventListener("change", updateSubscriptionEndDate);
    document.getElementById("subscription-start").addEventListener("change", updateSubscriptionEndDate);
    document.getElementById("manual-subscription-form").addEventListener("submit", event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const student = findStudent(selectedStudentId);
      if (!student) {
        closeModals();
        showToast("The selected student is no longer available.");
        return;
      }
      const duration = form.elements.plan.value;
      const course = form.elements.course.value;
      const months = duration === "lifetime" ? "Lifetime" : `${duration} month${duration === "1" ? "" : "s"}`;
      const subscription = {
        course,
        plan: `${months} Manual Access`,
        startDate: form.elements.startDate.value,
        endDate: duration === "lifetime" ? "" : addMonthsToDate(form.elements.startDate.value, duration),
        amount: Number(form.elements.amount.value),
        status: "Active",
        source: "Manual"
      };
      ensureSubscriptions(student).push(subscription);
      ensureCourseMetrics(student);
      if (!student.courseMetrics[course]) student.courseMetrics[course] = { progress: 0, completedVideos: 0, inProgressVideos: 0, watchHours: 0, score: 0 };
      closeModals();
      renderStudentTable();
      showToast(`Manual ${course} subscription added for ${student.name}.`);
      openSubscriptionHistory(student);
    });
    document.getElementById("confirm-reset-course").addEventListener("click", () => {
      const student = findStudent(pendingResetStudentId);
      if (!student) {
        closeModals();
        showToast("The selected student is no longer available.");
        return;
      }
      const selectedCourse = document.getElementById("reset-course-select").value;
      const coursesToReset = selectedCourse === "__all__" ? getStudentCourses(student) : [selectedCourse];
      const metricsByCourse = ensureCourseMetrics(student);
      const freshMetrics = { progress: 0, completedVideos: 0, inProgressVideos: 0, watchHours: 0, score: 0 };
      coursesToReset.forEach(course => { metricsByCourse[course] = { ...freshMetrics }; });
      if (coursesToReset.includes(student.course)) Object.assign(student, freshMetrics);
      const resetLabel = selectedCourse === "__all__" ? "all courses" : selectedCourse;
      closeModals();
      renderStudentTable();
      if (!performancePage.hidden && selectedStudentId === student.id) {
        selectedPerformanceCourse = selectedCourse === "__all__" ? student.course : selectedCourse;
        populatePerformance(student);
      }
      pendingResetStudentId = null;
      showToast(`${student.name} can start ${resetLabel} fresh. Subscription access was kept.`);
    });
    document.getElementById("confirm-delete-student").addEventListener("click", () => {
      const studentIndex = students.findIndex(student => student.id === pendingDeleteStudentId);
      if (studentIndex < 0) {
        closeModals();
        showToast("The selected student is no longer available.");
        return;
      }
      const [deletedStudent] = students.splice(studentIndex, 1);
      closeModals();
      if (!performancePage.hidden && selectedStudentId === deletedStudent.id) {
        performancePage.hidden = true;
        studentsHome.hidden = false;
        selectedStudentId = null;
      }
      pendingDeleteStudentId = null;
      renderStudentTable();
      showToast(`${deletedStudent.name} was removed from this page session.`);
    });
    document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModals));
    document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => {
      if (event.target === backdrop) closeModals();
    }));
    document.getElementById("details-performance").addEventListener("click", () => {
      const student = findStudent(selectedStudentId);
      if (student) showPerformance(student);
    });
    document.getElementById("performance-course").addEventListener("change", event => {
      const student = findStudent(selectedStudentId);
      if (!student) return;
      selectedPerformanceCourse = event.target.value;
      refreshPerformanceCourse(student);
    });
    document.getElementById("view-student-profile").addEventListener("click", () => {
      const student = findStudent(selectedStudentId);
      if (student) openStudentDetails(student);
    });
    document.getElementById("export-button").addEventListener("click", () => {
      const records = getFilteredStudents();
      if (!records.length) { showToast("There are no matching students to export."); return; }
      const columns = ["Student ID", "Student Name", "Email", "Phone", "Enrolled Course", "Registration Date", "Last Login", "Status"];
      const quote = value => {
        const text = String(value ?? "");
        const safeText = /^[\u0000-\u0020]*[=+\-@]/.test(text) ? `'${text}` : text;
        return `"${safeText.replace(/"/g, '""')}"`;
      };
      const rows = records.map(student => [
        `STU-${String(student.id).padStart(4, "0")}`, student.name, student.email, student.phone,
        student.course, student.registrationDate, student.lastLogin ? new Date(student.lastLogin).toISOString() : "", student.status
      ].map(quote).join(","));
      const blob = new Blob(["\uFEFF" + [columns.map(quote).join(","), ...rows].join("\r\n")], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "fmge-students.csv";
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(`Exported ${records.length} illustrative student record${records.length === 1 ? "" : "s"}.`);
    });
    document.getElementById("back-to-students").addEventListener("click", () => {
      performancePage.hidden = true;
      studentsHome.hidden = false;
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => showPerformanceTab(button.dataset.tab)));
    document.querySelectorAll("[data-tab-jump]").forEach(button => button.addEventListener("click", () => showPerformanceTab(button.dataset.tabJump)));
    document.getElementById("performance-range").addEventListener("change", event => {
      const custom = event.target.value === "custom";
      document.getElementById("performance-custom-dates").hidden = !custom;
      if (event.target.value !== "custom") {
        activityRange = event.target.value;
        document.querySelectorAll("[data-activity-range]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.activityRange === activityRange)));
      } else {
        activityRange = "custom";
        document.querySelectorAll("[data-activity-range]").forEach(button => button.setAttribute("aria-pressed", String(button.dataset.activityRange === "custom")));
      }
      if (activeTab === "sessions" || activeTab === "videos") renderActivityTab(activeTab);
    });
    ["activity-from", "activity-to", "performance-from", "performance-to"].forEach(id => {
      document.getElementById(id).addEventListener("change", () => {
        const from = document.getElementById("activity-from").value || document.getElementById("performance-from").value;
        const to = document.getElementById("activity-to").value || document.getElementById("performance-to").value;
        if (from && to && from > to) {
          showToast("The end date must be on or after the start date.");
          return;
        }
        if (activeTab === "sessions" || activeTab === "videos") renderActivityTab(activeTab);
      });
    });
    document.querySelectorAll("[data-activity-range]").forEach(button => button.addEventListener("click", () => {
      switchActivityRange(button.dataset.activityRange);
      document.getElementById("performance-range").value = button.dataset.activityRange;
    }));
    document.getElementById("notification-button").addEventListener("click", () => {
      const popover = document.getElementById("notification-popover");
      const isOpen = popover.hidden;
      popover.hidden = !isOpen;
      document.getElementById("notification-button").setAttribute("aria-expanded", String(isOpen));
      if (isOpen) {
        document.getElementById("notification-count").hidden = true;
        document.getElementById("notification-button").setAttribute("aria-label", "Notifications, no unread alerts");
      }
    });
    document.getElementById("profile-button").addEventListener("click", () => showToast("Admin profile menu is a UI preview."));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeModals();
    });

    renderStudentTable();
}
