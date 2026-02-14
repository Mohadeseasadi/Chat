const menuBtns = document.querySelectorAll(".menu-btn");
const forms = document.querySelectorAll(".form");
const mainMenu = document.getElementById("mainMenu");
const backBtn = document.getElementById("backBtn");
const formLogo = document.getElementById("formLogo");

function showForm(formId, iconClass) {
  mainMenu.style.opacity = 0;
  setTimeout(() => (mainMenu.style.display = "none"), 300);

  forms.forEach((f) => f.classList.remove("active"));

  const targetForm = document.getElementById(formId);
  targetForm.classList.add("active");

  // show header
  formLogo.innerHTML = `<i class="fa ${iconClass}"></i>`;
  document.querySelector(".form-header").classList.add("active");

  localStorage.setItem("activeForm", formId);
}

function showMainMenu() {
  forms.forEach((f) => f.classList.remove("active"));
  mainMenu.style.display = "flex";
  setTimeout(() => (mainMenu.style.opacity = 1), 10);
  document.querySelector(".form-header").classList.remove("active");

  localStorage.removeItem("activeForm");
}

document.addEventListener("DOMContentLoaded", () => {
  const activeForm = localStorage.getItem("activeForm");
  if (activeForm) {
    const btn = Array.from(menuBtns).find((b) => b.dataset.form === activeForm);
    if (btn) showForm(activeForm, btn.innerHTML);
  } else {
    forms.forEach((f) => f.classList.remove("active"));
    mainMenu.style.display = "flex";
    mainMenu.style.opacity = 1;
    document.querySelector(".form-header").classList.remove("active");
  }
});

menuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const formId = btn.dataset.form;
    const icon = btn.dataset.icon;
    showForm(formId, icon);
  });
});

backBtn.addEventListener("click", () => {
  showMainMenu();
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".menu-btn");

  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.style.animation = "slideUp 0.6s ease forwards";
    }, index * 150);
  });
});
