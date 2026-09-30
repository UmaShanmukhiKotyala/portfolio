// ============================================================
// Uma Shanmukhi Portfolio
// Add your real profile/project URLs below.
// ============================================================

const links = {
  github: "https://github.com/UmaShanmukhiKotyala/",
  linkedin: "https://www.linkedin.com/in/kotyala-uma-shanmukhi-557085321/",
  leetcode: "https://leetcode.com/u/kumashanmukhi/",
  expense: "https://umashanmukhikotyala.github.io/expense-tracker/",
  todo: "https://umashanmukhikotyala.github.io/todo-alarm/"
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.dataset.link;
  if (links[key]) {
    el.href = links[key];
    if (!links[key].includes("YOUR_")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  }
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
