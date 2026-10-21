// ==========================================
// 1. قاعدة بيانات مدرسة الأخوّة الابتدائية
// ==========================================
const DB_KEY = "ALUKHUWAH_SCHOOL_DB_V5";

const defaultDatabase = {
  users: [
    {
      username: "محمد بدران",
      password: "1234",
      role: "admin",
      title: "مدير المدرسة",
      allowedSubjects: [],
    },
    {
      username: "أحمد",
      password: "1234",
      role: "teacher",
      title: "معلم رياضيات",
      allowedSubjects: ["الرياضيات"],
    },
    {
      username: "سعاد",
      password: "1234",
      role: "teacher",
      title: "معلمة لغة عربية",
      allowedSubjects: ["اللغة العربية"],
    },
  ],
  classes: [
    {
      id: 1,
      name: "الصف الأول",
      section: "الشعبة أ",
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [
        {
          id: 101,
          code: "ST101",
          name: "عمر خالد العلي",
          grades: [95, 90, 88, 92, 96, 89, 94],
        },
        {
          id: 102,
          code: "ST102",
          name: "سارة محمد الحسن",
          grades: ["ممتاز", "جيد جداً", 91, 84, "ممتاز", 87, 92],
        },
        {
          id: 103,
          code: "ST103",
          name: "يوسف سامر النجار",
          grades: ["", "", "", "", "", "", ""],
        },
      ],
    },
    {
      id: 2,
      name: "الصف الثاني",
      section: "الشعبة أ",
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [
        {
          id: 201,
          code: "ST201",
          name: "كريم طارق الصالح",
          grades: [78, 82, 80, 75, 88, 84, 90],
        },
        {
          id: 202,
          code: "ST202",
          name: "ليان فراس الخطيب",
          grades: [92, 94, 89, 91, 95, 93, 96],
        },
      ],
    },
    {
      id: 3,
      name: "الصف الثالث",
      section: "الشعبة أ",
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [
        {
          id: 301,
          code: "ST301",
          name: "حمزة مازن القاسم",
          grades: [88, 79, 85, 82, 90, 86, 89],
        },
        {
          id: 302,
          code: "ST302",
          name: "نور الهدى عبد الله",
          grades: [96, 95, 92, 94, 98, 91, 97],
        },
      ],
    },
    {
      id: 4,
      name: "الصف الرابع",
      section: "الشعبة أ",
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [
        {
          id: 401,
          code: "ST401",
          name: "زيد رامي المنصور",
          grades: [81, 84, 77, 80, 85, 79, 88],
        },
        {
          id: 402,
          code: "ST402",
          name: "مريم عادل الشامي",
          grades: [90, 87, 93, 89, 94, 92, 95],
        },
      ],
    },
    {
      id: 5,
      name: "الصف الخامس",
      section: "الشعبة أ",
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [
        {
          id: 501,
          code: "ST501",
          name: "بلال أنس السعيد",
          grades: [74, 70, 78, 72, 80, 75, 82],
        },
        {
          id: 502,
          code: "ST502",
          name: "جنى وسيم الأحمد",
          grades: [89, 91, 86, 88, 92, 90, 93],
        },
      ],
    },
    {
      id: 6,
      name: "الصف السادس",
      section: "الشعبة أ",
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [
        {
          id: 601,
          code: "ST601",
          name: "عبد الرحمن إياد بكري",
          grades: [93, 96, 91, 90, 95, 92, 94],
        },
        {
          id: 602,
          code: "ST602",
          name: "حلا حسام الدين",
          grades: [84, 82, 87, 85, 89, 86, 90],
        },
      ],
    },
    {
      id: 7,
      name: "الصف السابع",
      section: "الشعبة أ",
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [
        {
          id: 701,
          code: "ST701",
          name: "محمد ياسر الحلبي",
          grades: [97, 98, 95, 96, 99, 94, 98],
        },
        {
          id: 702,
          code: "ST702",
          name: "رغد عماد الزين",
          grades: [86, 85, 88, 84, 91, 87, 89],
        },
      ],
    },
  ],
};

function loadDatabase() {
  const saved = localStorage.getItem(DB_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    parsed.classes.forEach((cls, cIdx) => {
      if (!cls.subjects)
        cls.subjects = [...defaultDatabase.classes[0].subjects];
      cls.students.forEach((st, sIdx) => {
        if (!st.code) st.code = `ST${cIdx + 1}0${sIdx + 1}`;
      });
    });
    parsed.users.forEach((u) => {
      if (!u.title) u.title = u.role === "admin" ? "مدير المدرسة" : "معلم";
      if (!u.allowedSubjects) u.allowedSubjects = [];
    });
    return parsed;
  } else {
    localStorage.setItem(DB_KEY, JSON.stringify(defaultDatabase));
    return JSON.parse(JSON.stringify(defaultDatabase));
  }
}

function saveDatabase() {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  showSaveIndicator();
}

function showSaveIndicator() {
  const badge = document.getElementById("save-status");
  badge.textContent = "⏳ جاري الحفظ...";
  setTimeout(() => {
    badge.textContent = "✓ تم الحفظ في قاعدة البيانات";
  }, 300);
}

let db = loadDatabase();
let currentUser = null;
let selectedClassId = null;

function isAdmin() {
  return currentUser && currentUser.role === "admin";
}

function canEditSubject(subjectName) {
  if (isAdmin()) return true;
  if (!currentUser || currentUser.role !== "teacher") return false;
  const teacherObj = db.users.find((u) => u.username === currentUser.username);
  if (
    !teacherObj ||
    !teacherObj.allowedSubjects ||
    teacherObj.allowedSubjects.length === 0
  ) {
    return true;
  }
  return teacherObj.allowedSubjects.includes(subjectName);
}

// ==========================================
// 2. عناصر واجهة المستخدم
// ==========================================
const mainHeader = document.getElementById("main-header");
const loginPage = document.getElementById("login-page");
const classesPage = document.getElementById("classes-page");
const adminDashboardPage = document.getElementById("admin-dashboard-page");
const studentsPage = document.getElementById("students-page");
const studentReportPage = document.getElementById("student-report-page");

const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const welcomeUser = document.getElementById("welcome-user");
const userRoleBadge = document.getElementById("user-role-badge");
const navAdminPanelBtn = document.getElementById("nav-admin-panel-btn");
const exportClassXlsxBtn = document.getElementById("export-class-xlsx-btn");
const addStudentForm = document.getElementById("add-student-form");
const adminClassSubjectsPanel = document.getElementById(
  "admin-class-subjects-panel",
);

const classesGrid = document.getElementById("classes-grid");
const tableHeadersRow = document.getElementById("table-headers-row");
const studentsTableBody = document.getElementById("students-table-body");
const currentClassTitle = document.getElementById("current-class-title");

// ==========================================
// 3. تسجيل دخول الموظفين والاستعلام للطلاب
// ==========================================
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const matchedUser = db.users.find(
    (u) => u.username === username && u.password === password,
  );

  if (matchedUser) {
    currentUser = {
      username: matchedUser.username,
      role: matchedUser.role,
      title: matchedUser.title,
      allowedSubjects: matchedUser.allowedSubjects,
    };
    loginError.classList.add("hidden");
    applyUserPermissionsUI();
    showPage("classes");
  } else {
    loginError.classList.remove("hidden");
  }
});

// بحث الطالب بالكود الشخصي
document
  .getElementById("student-search-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const codeInput = document
      .getElementById("student-code-input")
      .value.trim()
      .toUpperCase();
    const searchError = document.getElementById("student-search-error");

    let foundStudent = null;
    let foundClass = null;

    db.classes.forEach((cls) => {
      cls.students.forEach((st) => {
        if (st.code && st.code.toUpperCase() === codeInput) {
          foundStudent = st;
          foundClass = cls;
        }
      });
    });

    if (foundStudent && foundClass) {
      searchError.classList.add("hidden");
      renderStudentReportPage(foundStudent, foundClass);
      showPage("report");
    } else {
      searchError.classList.remove("hidden");
    }
  });

function applyUserPermissionsUI() {
  if (isAdmin()) {
    welcomeUser.textContent = `مرحباً، سيادة ${currentUser.username}`;
    userRoleBadge.textContent = "👑 صلاحية كاملة (المدير)";
    userRoleBadge.className = "role-badge role-admin";
    navAdminPanelBtn.classList.remove("hidden");
    exportClassXlsxBtn.classList.remove("hidden");
    addStudentForm.classList.remove("hidden");
    adminClassSubjectsPanel.classList.remove("hidden");
    renderTeachersListForAdmin();
    renderTeacherSubjectsCheckboxes();
  } else {
    const teacherTitle = currentUser.title ? ` (${currentUser.title})` : "";
    welcomeUser.textContent = `مرحباً، الأستاذ/ة ${currentUser.username}${teacherTitle}`;
    userRoleBadge.textContent = `👨‍🏫 معلم: ${currentUser.title || "عام"}`;
    userRoleBadge.className = "role-badge role-teacher";
    navAdminPanelBtn.classList.add("hidden");
    exportClassXlsxBtn.classList.add("hidden");
    addStudentForm.classList.add("hidden");
    adminClassSubjectsPanel.classList.add("hidden");
  }
}

document.getElementById("logout-btn").addEventListener("click", function () {
  currentUser = null;
  selectedClassId = null;
  loginForm.reset();
  showPage("login");
});

document
  .getElementById("back-to-login-btn")
  .addEventListener("click", function () {
    showPage("login");
  });

navAdminPanelBtn.addEventListener("click", function () {
  showPage("admin-dashboard");
  if (sideMenu.classList.contains("open")) {
    toggleMobileMenu();
  }
});

document
  .getElementById("back-from-admin-btn")
  .addEventListener("click", function () {
    showPage("classes");
  });

// ==========================================
// 4. صلاحيات المدير (نقل الطلاب، المواد، المعلمون)
// ==========================================

// توليد قائمة الاختيار لشيك بوكس المواد الدراسية الفريدة في المدرسة
function renderTeacherSubjectsCheckboxes() {
  const container = document.getElementById("teacher-subjects-checkboxes");
  if (!container) return;
  container.innerHTML = "";

  // استخراج قائمة فريدة بجميع المواد الموجودة في كل الصفوف
  let allSubjectsSet = new Set();
  db.classes.forEach((cls) => {
    if (cls.subjects) {
      cls.subjects.forEach((subj) => allSubjectsSet.add(subj));
    }
  });

  if (allSubjectsSet.size === 0) {
    container.innerHTML =
      "<small style='color:var(--text-muted);'>لا توجد مواد دراسية مسجلة حالياً.</small>";
    return;
  }

  allSubjectsSet.forEach((subj) => {
    const label = document.createElement("label");
    label.className = "subject-checkbox-label";
    label.innerHTML = `
      <input type="checkbox" name="teacher-subject-item" value="${subj}">
      <span>${subj}</span>
    `;
    container.appendChild(label);
  });
}

window.transferStudent = function (studentId) {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  const studentIndex = currentClass.students.findIndex(
    (s) => s.id === studentId,
  );
  if (studentIndex === -1) return;
  const student = currentClass.students[studentIndex];

  const otherClasses = db.classes.filter((c) => c.id !== selectedClassId);
  if (otherClasses.length === 0) {
    alert("لا توجد صفوف أخرى لنقل الطالب إليها!");
    return;
  }

  let promptText = `نقل الطالب: (${student.name})\nاختر رقم الصف المراد النقل إليه:\n`;
  otherClasses.forEach((cls, idx) => {
    promptText += `${idx + 1}: ${cls.name} (${cls.section || "الشعبة أ"})\n`;
  });

  const choice = prompt(promptText);
  if (!choice) return;
  const choiceNum = parseInt(choice) - 1;
  if (isNaN(choiceNum) || choiceNum < 0 || choiceNum >= otherClasses.length) {
    alert("رقم الصف غير صحيح!");
    return;
  }

  const targetClass = otherClasses[choiceNum];

  currentClass.students.splice(studentIndex, 1);

  while (student.grades.length < targetClass.subjects.length) {
    student.grades.push("");
  }
  if (student.grades.length > targetClass.subjects.length) {
    student.grades = student.grades.slice(0, targetClass.subjects.length);
  }

  targetClass.students.push(student);
  saveDatabase();
  renderStudentsTable();
  alert(
    `تم نقل الطالب (${student.name}) بنجاح إلى ${targetClass.name} (${targetClass.section || "الشعبة أ"})!`,
  );
};

function renderClassSubjectsManager() {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  const container = document.getElementById("class-subjects-chips");
  container.innerHTML = "";

  currentClass.subjects.forEach((subj, idx) => {
    const chip = document.createElement("div");
    chip.className = "subject-chip";
    chip.innerHTML = `
            <span>${subj}</span>
            <button class="delete-subject-btn" title="حذف المادة" onclick="deleteClassSubject(${idx})">×</button>
        `;
    container.appendChild(chip);
  });
}

document
  .getElementById("add-class-subject-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isAdmin()) return;

    const input = document.getElementById("new-subject-name");
    const subName = input.value.trim();
    if (!subName) return;

    const currentClass = db.classes.find((c) => c.id === selectedClassId);
    if (!currentClass) return;

    currentClass.subjects.push(subName);
    currentClass.students.forEach((st) => {
      if (!st.grades) st.grades = [];
      while (st.grades.length < currentClass.subjects.length) {
        st.grades.push("");
      }
    });

    saveDatabase();
    input.value = "";
    renderClassSubjectsManager();
    renderStudentsTable();
    renderTeacherSubjectsCheckboxes();
  });

window.deleteClassSubject = function (subjectIndex) {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  if (currentClass.subjects.length <= 1) {
    alert("لا يمكن حذف جميع المواد! يجب أن تبقى مادة واحدة على الأقل.");
    return;
  }

  if (
    !confirm(
      `هل أنت متأكد من حذف مادة (${currentClass.subjects[subjectIndex]}) من هذا الصف؟`,
    )
  )
    return;

  currentClass.subjects.splice(subjectIndex, 1);
  currentClass.students.forEach((st) => {
    if (st.grades) st.grades.splice(subjectIndex, 1);
  });

  saveDatabase();
  renderClassSubjectsManager();
  renderStudentsTable();
  renderTeacherSubjectsCheckboxes();
};

document
  .getElementById("add-class-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isAdmin()) return;

    const nameInput = document.getElementById("new-class-name");
    const sectionInput = document.getElementById("new-class-section");
    const name = nameInput.value.trim();
    const section = sectionInput.value.trim();

    if (!name || !section) return;

    db.classes.push({
      id: Date.now(),
      name: `الصف ${name}`,
      section: section,
      subjects: [
        "اللغة العربية",
        "الرياضيات",
        "العلوم",
        "اللغة الإنجليزية",
        "التربية الإسلامية",
        "الاجتماعيات",
        "الحاسوب",
      ],
      students: [],
    });

    saveDatabase();
    nameInput.value = "";
    sectionInput.value = "";
    renderClassesList();
    renderTeacherSubjectsCheckboxes();
  });

window.deleteClass = function (event, classId) {
  event.stopPropagation();
  if (!isAdmin()) return;

  const targetClass = db.classes.find((c) => c.id === classId);
  if (!targetClass) return;

  if (
    !confirm(
      `هل أنت متأكد من حذف (${targetClass.name} - ${targetClass.section}) بجميع طلابه؟`,
    )
  )
    return;

  db.classes = db.classes.filter((c) => c.id !== classId);
  saveDatabase();
  renderClassesList();
  renderTeacherSubjectsCheckboxes();
};

document
  .getElementById("clear-all-grades-btn")
  .addEventListener("click", function () {
    if (!isAdmin()) return;

    if (
      !confirm(
        "تحذير للمدير:\nهل تريد تصفير جميع العلامات في كافة الصفوف والشعب؟\n(ملاحظة: ستتم المحافظة على أسماء الطلاب وأكوادهم).",
      )
    )
      return;

    db.classes.forEach((cls) => {
      cls.students.forEach((st) => {
        st.grades = new Array(cls.subjects.length).fill("");
      });
    });

    saveDatabase();
    renderClassesList();
    alert("تم تصفير جميع العلامات بنجاح!");
  });

function renderTeachersListForAdmin() {
  if (!isAdmin()) return;
  const listContainer = document.getElementById("teachers-list");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  db.users
    .filter((u) => u.role === "teacher")
    .forEach((t) => {
      const subsText =
        t.allowedSubjects && t.allowedSubjects.length > 0
          ? t.allowedSubjects.join(", ")
          : "جميع المواد";
      const chip = document.createElement("div");
      chip.className = "teacher-chip";
      chip.innerHTML = `
            <div>
              <strong>👨‍🏫 ${t.username}</strong> (${t.password})<br>
              <small><b>الصفة:</b> ${t.title || "غير محدد"} | <b>المواد المسموحة:</b> ${subsText}</small>
            </div>
            <button class="delete-teacher-btn" onclick="deleteTeacher('${t.username}')">×</button>
        `;
      listContainer.appendChild(chip);
    });
}

document
  .getElementById("add-teacher-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (!isAdmin()) return;

    const username = document
      .getElementById("new-teacher-username")
      .value.trim();
    const password = document
      .getElementById("new-teacher-password")
      .value.trim();
    const title = document.getElementById("new-teacher-title").value.trim();

    // جمع المواد المحددة من الشيك بوكس
    const checkboxes = document.querySelectorAll(
      'input[name="teacher-subject-item"]:checked',
    );
    const allowedSubjects = Array.from(checkboxes).map((cb) => cb.value);

    if (!username || !password || !title) return;
    if (db.users.some((u) => u.username === username)) {
      alert("اسم المستخدم موجود مسبقاً!");
      return;
    }

    db.users.push({
      username,
      password,
      role: "teacher",
      title,
      allowedSubjects,
    });
    saveDatabase();
    document.getElementById("new-teacher-username").value = "";
    document.getElementById("new-teacher-password").value = "";
    document.getElementById("new-teacher-title").value = "";

    // إزالة التحديد عن الشيك بوكس
    document
      .querySelectorAll('input[name="teacher-subject-item"]')
      .forEach((cb) => (cb.checked = false));

    renderTeachersListForAdmin();
  });

window.deleteTeacher = function (username) {
  if (!isAdmin()) return;
  if (!confirm(`هل أنت متأكد من حذف حساب المعلم (${username})؟`)) return;

  db.users = db.users.filter(
    (u) => !(u.username === username && u.role === "teacher"),
  );
  saveDatabase();
  renderTeachersListForAdmin();
};

// ==========================================
// 5. تصدير نتائج Excel (XLSX)
// ==========================================
function buildClassSheetData(cls) {
  const headerRow = [
    "الرقم",
    "كود الطالب",
    "اسم الطالب",
    "الصف",
    "الشعبة",
    ...cls.subjects,
    "المجموع",
    "المعدل المئوي (%)",
  ];

  const rows = [headerRow];

  cls.students.forEach((student, idx) => {
    const { total, avg } = calculateStudentStats(student.grades);
    const gradesRow = [];
    cls.subjects.forEach((_, i) => {
      gradesRow.push(
        student.grades[i] !== "" && student.grades[i] !== undefined
          ? student.grades[i]
          : "",
      );
    });
    rows.push([
      idx + 1,
      student.code || "",
      student.name,
      cls.name,
      cls.section || "الشعبة أ",
      ...gradesRow,
      total,
      `${avg}%`,
    ]);
  });

  return rows;
}

document
  .getElementById("export-all-xlsx-btn")
  .addEventListener("click", function () {
    if (!isAdmin()) return;
    if (typeof XLSX === "undefined") {
      alert("مكتبة الإكسل غير متوفرة حالياً.");
      return;
    }

    const workbook = XLSX.utils.book_new();
    db.classes.forEach((cls, index) => {
      const sheetData = buildClassSheetData(cls);
      const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
      worksheet["!views"] = [{ rightToLeft: true }];
      let sheetName = `${cls.name} - ${cls.section || index + 1}`.substring(
        0,
        31,
      );
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    });

    XLSX.writeFile(workbook, "نتائج_مدرسة_الأخوة_الابتدائية_الشاملة.xlsx");
  });

exportClassXlsxBtn.addEventListener("click", function () {
  if (!isAdmin()) return;
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  const workbook = XLSX.utils.book_new();
  const sheetData = buildClassSheetData(currentClass);
  const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
  worksheet["!views"] = [{ rightToLeft: true }];

  const sheetName = `${currentClass.name} ${currentClass.section || ""}`
    .trim()
    .substring(0, 31);
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  XLSX.writeFile(
    workbook,
    `نتائج_${currentClass.name}_${currentClass.section || ""}.xlsx`,
  );
});

// ==========================================
// 6. عرض الصفوف الدراسية وجدول الطلاب
// ==========================================
function renderClassesList() {
  classesGrid.innerHTML = "";

  db.classes.forEach((cls) => {
    const sectionName = cls.section || "الشعبة أ";
    const deleteBtnHTML = isAdmin()
      ? `<button class="delete-class-btn" onclick="deleteClass(event, ${cls.id})">حذف الصف</button>`
      : "";

    const card = document.createElement("div");
    card.className = "class-card";
    card.innerHTML = `
            <div class="card-top-bar">
                <span class="class-badge">📌 ${sectionName}</span>
                ${deleteBtnHTML}
            </div>
            <h3>${cls.name}</h3>
            <p>اضغط لفتح قائمة الطلاب ورصد العلامات والتقديرات</p>
            <div class="class-stats">
                <span>👥 عدد الطلاب: ${cls.students.length}</span>
                <span>📚 ${cls.subjects.length} مواد</span>
            </div>
        `;
    card.addEventListener("click", () => openClassPage(cls.id));
    classesGrid.appendChild(card);
  });
}

function openClassPage(classId) {
  selectedClassId = classId;
  const currentClass = db.classes.find((c) => c.id === classId);
  if (!currentClass) return;

  const sectionLabel = currentClass.section ? ` (${currentClass.section})` : "";
  currentClassTitle.textContent = `كشف العلامات والتقديرات: ${currentClass.name}${sectionLabel}`;
  renderClassSubjectsManager();
  renderStudentsTable();
  showPage("students");
}

function renderTableHeaders() {
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  let subjectsHeadersHTML = "";
  currentClass.subjects.forEach((subj) => {
    subjectsHeadersHTML += `<th>${subj}</th>`;
  });

  const adminHeaderCell = isAdmin() ? `<th>إجراءات المدير</th>` : "";

  tableHeadersRow.innerHTML = `
        <th>#</th>
        <th>كود الطالب</th>
        <th class="student-name-col">اسم الطالب</th>
        ${subjectsHeadersHTML}
        <th>المجموع</th>
        <th>المعدل</th>
        ${adminHeaderCell}
    `;
}

function renderStudentsTable() {
  renderTableHeaders();
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  studentsTableBody.innerHTML = "";

  currentClass.students.forEach((student, index) => {
    const tr = document.createElement("tr");
    const { total, avg } = calculateStudentStats(student.grades);

    let inputsHTML = "";
    currentClass.subjects.forEach((subj, i) => {
      const val = student.grades[i] !== undefined ? student.grades[i] : "";
      const isAllowed = canEditSubject(subj);
      const disabledAttr = isAllowed
        ? ""
        : "disabled title='غير مسموح لك بتعبئة هذه المادة'";
      const disabledClass = isAllowed ? "" : "disabled-grade-input";

      inputsHTML += `
                <td>
                    <input 
                        type="text" 
                        list="estimations-list"
                        class="grade-input ${disabledClass}" 
                        placeholder="درجة أو تقدير"
                        value="${val}" 
                        ${disabledAttr}
                        oninput="updateGrade(${student.id}, ${i}, this.value)"
                    >
                </td>
            `;
    });

    let adminActionsCell = "";
    if (isAdmin()) {
      adminActionsCell = `
        <td>
          <div class="admin-row-actions">
            <button class="btn btn-cyan btn-sm" onclick="transferStudent(${student.id})" title="نقل الطالب إلى صف آخر">نقل</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${student.id})">حذف</button>
          </div>
        </td>
      `;
    }

    tr.innerHTML = `
            <td>${index + 1}</td>
            <td><b>${student.code || "--"}</b></td>
            <td class="student-name-col">${student.name}</td>
            ${inputsHTML}
            <td class="total-cell" id="total-${student.id}">${total}</td>
            <td><span class="avg-badge" id="avg-${student.id}">${avg}%</span></td>
            ${adminActionsCell}
        `;

    studentsTableBody.appendChild(tr);
  });
}

function parseGradeValue(val) {
  if (val === "" || val === undefined || val === null) return null;
  if (!isNaN(val)) return Number(val);

  const textVal = String(val).trim();
  if (textVal === "ممتاز") return 95;
  if (textVal === "جيد جداً" || textVal === "جيد جدا") return 85;
  if (textVal === "جيد") return 75;
  if (textVal === "متوسط") return 65;
  if (textVal === "ضعيف") return 50;

  const parsed = Number(textVal);
  return isNaN(parsed) ? 0 : parsed;
}

window.updateGrade = function (studentId, subjectIndex, value) {
  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  const student = currentClass.students.find((s) => s.id === studentId);
  if (!student) return;

  let cleanValue = value.trim();
  if (cleanValue !== "") {
    if (!isNaN(cleanValue)) {
      let num = Number(cleanValue);
      if (num > 100) num = 100;
      if (num < 0) num = 0;
      cleanValue = num;
    }
  }

  student.grades[subjectIndex] = cleanValue;
  saveDatabase();

  const { total, avg } = calculateStudentStats(student.grades);
  document.getElementById(`total-${studentId}`).textContent = total;
  document.getElementById(`avg-${studentId}`).textContent = `${avg}%`;
};

function calculateStudentStats(grades) {
  let total = 0;
  let enteredCount = 0;

  if (!grades) return { total: 0, avg: "0.0" };

  grades.forEach((g) => {
    if (g !== "" && g !== undefined && g !== null) {
      const numericVal = parseGradeValue(g);
      if (numericVal !== null) {
        total += numericVal;
        enteredCount++;
      }
    }
  });

  const avg = enteredCount > 0 ? (total / grades.length).toFixed(1) : "0.0";
  return { total, avg };
}

addStudentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!isAdmin()) return;

  const nameInput = document.getElementById("new-student-name");
  const codeInput = document.getElementById("new-student-code");
  const studentName = nameInput.value.trim();
  const studentCode = codeInput.value.trim().toUpperCase();

  if (!studentName || !studentCode) return;

  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  if (!currentClass) return;

  let codeExists = false;
  db.classes.forEach((cls) => {
    cls.students.forEach((st) => {
      if (st.code && st.code.toUpperCase() === studentCode) codeExists = true;
    });
  });

  if (codeExists) {
    alert("كود الطالب هذا مستخدم مسبقاً لطالب آخر!");
    return;
  }

  currentClass.students.push({
    id: Date.now(),
    code: studentCode,
    name: studentName,
    grades: new Array(currentClass.subjects.length).fill(""),
  });

  saveDatabase();
  nameInput.value = "";
  codeInput.value = "";
  renderStudentsTable();
});

window.deleteStudent = function (studentId) {
  if (!isAdmin()) return;
  if (!confirm("هل أنت متأكد من حذف هذا الطالب وسجل درجاته؟")) return;

  const currentClass = db.classes.find((c) => c.id === selectedClassId);
  currentClass.students = currentClass.students.filter(
    (s) => s.id !== studentId,
  );
  saveDatabase();
  renderStudentsTable();
};

document
  .getElementById("back-to-classes-btn")
  .addEventListener("click", function () {
    showPage("classes");
  });

// ==========================================
// 7. عرض شهادة الطالب الفردية
// ==========================================
function renderStudentReportPage(student, cls) {
  document.getElementById("rep-student-name").textContent = student.name;
  document.getElementById("rep-student-code").textContent =
    student.code || "--";
  document.getElementById("rep-student-class").textContent =
    `${cls.name} (${cls.section || "الشعبة أ"})`;

  const tbody = document.getElementById("report-grades-tbody");
  tbody.innerHTML = "";

  cls.subjects.forEach((subj, idx) => {
    const val =
      student.grades[idx] !== undefined && student.grades[idx] !== ""
        ? student.grades[idx]
        : "لم ترصد بعد";
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td><b>${subj}</b></td>
            <td>${val}</td>
        `;
    tbody.appendChild(tr);
  });

  const { total, avg } = calculateStudentStats(student.grades);
  const maxPoints = cls.subjects.length * 100;
  document.getElementById("rep-total").textContent = `${total} / ${maxPoints}`;
  document.getElementById("rep-avg").textContent = `${avg}%`;
}

function showPage(pageName) {
  loginPage.classList.add("hidden");
  classesPage.classList.add("hidden");
  adminDashboardPage.classList.add("hidden");
  studentsPage.classList.add("hidden");
  studentReportPage.classList.add("hidden");

  if (pageName === "login") {
    mainHeader.classList.add("hidden");
    loginPage.classList.remove("hidden");
  } else if (pageName === "classes") {
    mainHeader.classList.remove("hidden");
    classesPage.classList.remove("hidden");
    renderClassesList();
  } else if (pageName === "admin-dashboard") {
    mainHeader.classList.remove("hidden");
    adminDashboardPage.classList.remove("hidden");
    renderTeachersListForAdmin();
    renderTeacherSubjectsCheckboxes();
  } else if (pageName === "students") {
    mainHeader.classList.remove("hidden");
    studentsPage.classList.remove("hidden");
  } else if (pageName === "report") {
    mainHeader.classList.add("hidden");
    studentReportPage.classList.remove("hidden");
  }
}

document.getElementById("reset-db-btn").addEventListener("click", function () {
  if (!isAdmin()) return;
  if (confirm("تحذير للمدير: هل تريد إعادة ضبط المصنع ومسح كافة البيانات؟")) {
    localStorage.removeItem(DB_KEY);
    db = loadDatabase();
    renderTeachersListForAdmin();
    renderClassesList();
  }
});

// ==========================================
// 8. التحكم بالقائمة الجانبية في شاشات الجوال
// ==========================================
const menuToggleBtn = document.getElementById("menu-toggle-btn");
const sideMenu = document.getElementById("side-menu");
const menuOverlay = document.getElementById("menu-overlay");

function toggleMobileMenu() {
  sideMenu.classList.toggle("open");
  menuOverlay.classList.toggle("open");
}

if (menuToggleBtn && menuOverlay) {
  menuToggleBtn.addEventListener("click", toggleMobileMenu);
  menuOverlay.addEventListener("click", toggleMobileMenu);
}

document.getElementById("logout-btn").addEventListener("click", function () {
  if (sideMenu.classList.contains("open")) {
    toggleMobileMenu();
  }
});
