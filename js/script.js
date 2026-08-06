/* =====================================================================
   Malik Muhammad Muzammil — Portfolio
   script.js  (vanilla JavaScript, no dependencies)
   ===================================================================== */

/* =====================================================================
   ★ EDIT YOUR INFORMATION HERE ★
   Everything below is the only place you need to change your details.
   ===================================================================== */
const CONFIG = {
  name: "Malik Muhammad Muzammil",
  title: "Software Engineering Student",
  email: "muzzamilbwp@gmail.com",
  github: "https://github.com/malikk-muzammil",
  linkedin: "https://www.linkedin.com/in/muzammil666/",
  // Put your PDF here: assets/resume/Malik-Muhammad-Muzammil-CV.pdf
  cv: "assets/resume/Malik-Muhammad-Muzammil-CV.pdf",
};

/* Skills — add or remove items freely. */
const SKILLS = [
  { category: "Programming", items: ["C", "C++"] },
  { category: "Web", items: ["HTML", "CSS"] },
  {
    category: "Core Concepts",
    items: [
      "Programming Fundamentals",
      "Object-Oriented Programming",
      "Problem Solving",
      { label: "Data Structures & Algorithms", learning: true },
    ],
  },
  // To remove the Tools card, delete this whole object.
  { category: "Tools", items: ["Git", "GitHub", "Visual Studio Code"] },
];

/* Learning journey — status: "done" | "now" | "next" */
const JOURNEY = [
  { title: "Programming Fundamentals", status: "done", note: "Logic, control flow, functions, structured programming." },
  { title: "C / C++", status: "done", note: "Core language foundation used across my academic projects." },
  { title: "Object-Oriented Programming", status: "done", note: "Classes, objects, and designing programs around them." },
  { title: "Data Structures & Algorithms", status: "now", note: "Currently learning — my main focus this semester." },
  { title: "Web Development", status: "next", note: "Basic HTML and CSS, continuing to build on it." },
  { title: "More Advanced Software Development", status: "next", note: "The longer-term direction I'm working towards." },
];

/* Projects — add new projects by copying one object.
   Leave github/demo as "" and the button is hidden automatically. */
const PROJECTS = [
  {
    title: "Console-Based Quiz Game",
    tech: "C++",
    description:
      "A console-based quiz game developed in C++ to practice programming fundamentals, user interaction, conditional logic, loops, functions, and score management.",
    tags: ["C++", "Programming Fundamentals", "Console Application"],
    github: "",
    demo: "",
  },
  {
    title: "Chess Game",
    tech: "C++ / Object-Oriented Programming",
    description:
      "A console-based chess game developed using C++ and object-oriented programming concepts. The project applies classes, objects, functions, and program logic to represent and manage game components and functionality.",
    tags: ["C++", "OOP", "Game Logic", "Console Application"],
    github: "",
    demo: "",
  },
  {
    title: "Student Management System",
    tech: "C++",
    description:
      "A student management system created as an academic programming project to practice data handling, program structure, and application logic.",
    tags: ["C++", "Management System", "Programming"],
    github: "",
    demo: "",
  },
  {
    title: "Hospital Management System",
    tech: "C++",
    description:
      "A hospital management system developed as an academic project to practice programming concepts, data organization, and application logic in a practical management scenario.",
    tags: ["C++", "Management System", "Programming"],
    github: "",
    demo: "",
  },
];

/* Currently learning topics */
const LEARNING_TOPICS = [
  "Arrays",
  "Linked Lists",
  "Stacks",
  "Queues",
  "Trees",
  "Searching",
  "Sorting",
  "Algorithmic Thinking",
];

/* =====================================================================
   Helpers
   ===================================================================== */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
}

/* =====================================================================
   Bind personal information from CONFIG
   ===================================================================== */
function bindConfig() {
  $$('[data-bind="name"]').forEach((el) => (el.textContent = CONFIG.name));
  $$('[data-bind="email"]').forEach((el) => (el.textContent = CONFIG.email));
  $$('[data-bind="email-link"]').forEach((el) => (el.href = `mailto:${CONFIG.email}`));
  $$('[data-bind="github"]').forEach((el) => (el.href = CONFIG.github));
  $$('[data-bind="linkedin"]').forEach((el) => (el.href = CONFIG.linkedin));
  $$('[data-bind="cv"]').forEach((el) => (el.href = CONFIG.cv));
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

/* =====================================================================
   Renderers
   ===================================================================== */
function renderTag(item) {
  const label = typeof item === "string" ? item : item.label;
  const isLearning = typeof item === "object" && item.learning;
  return `<li class="tag${isLearning ? " tag--learning" : ""}">${escapeHtml(label)}${
    isLearning ? " · Learning" : ""
  }</li>`;
}

function renderSkills() {
  const grid = $("#skills-grid");
  if (!grid) return;
  grid.innerHTML = SKILLS.map(
    (group) => `
      <article class="skillcard reveal">
        <h3>${escapeHtml(group.category)}</h3>
        <ul class="tags">${group.items.map(renderTag).join("")}</ul>
      </article>`
  ).join("");
}

function renderJourney() {
  const list = $("#journey-list");
  if (!list) return;
  const statusText = { done: "Completed", now: "Currently learning", next: "Next / ongoing" };
  list.innerHTML = JOURNEY.map(
    (step) => `
      <li class="tl tl--${step.status} reveal">
        <h3 class="tl__title">${escapeHtml(step.title)}${
      step.status === "now" ? '<span class="chip chip--accent">Currently learning</span>' : ""
    }</h3>
        <p class="tl__status">${escapeHtml(statusText[step.status])} — ${escapeHtml(step.note)}</p>
      </li>`
  ).join("");
}

function renderProjects() {
  const grid = $("#projects-grid");
  if (!grid) return;
  grid.innerHTML = PROJECTS.map((project, index) => {
    const number = String(index + 1).padStart(2, "0");
    const githubBtn = project.github
      ? `<a class="btn btn--ghost btn--sm" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer">GitHub</a>`
      : "";
    const demoBtn = project.demo
      ? `<a class="btn btn--primary btn--sm" href="${escapeHtml(project.demo)}" target="_blank" rel="noopener noreferrer">View Project<svg class="btn__arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>`
      : "";
    const actions = githubBtn + demoBtn;

    return `
      <article class="project reveal">
        <p class="project__num">Project ${number}</p>
        <h3 class="project__title">${escapeHtml(project.title)}</h3>
        <p class="project__tech">${escapeHtml(project.tech)}</p>
        <p class="project__desc">${escapeHtml(project.description)}</p>
        <ul class="tags project__tags">${project.tags.map(renderTag).join("")}</ul>
        ${actions ? `<div class="project__actions">${actions}</div>` : ""}
      </article>`;
  }).join("");
}

function renderLearningTopics() {
  const list = $("#learning-topics");
  if (!list) return;
  list.innerHTML = LEARNING_TOPICS.map((topic) => renderTag({ label: topic, learning: false })).join("");
}

/* =====================================================================
   Navigation (mobile menu, scrolled state, active link)
   ===================================================================== */
function initNav() {
  const nav = $("#nav");
  const toggle = $("#nav-toggle");
  const links = $("#nav-links");
  if (!nav || !toggle || !links) return;

  const closeMenu = () => {
    links.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };

  toggle.addEventListener("click", () => {
    const willOpen = !links.classList.contains("is-open");
    links.classList.toggle("is-open", willOpen);
    toggle.classList.toggle("is-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.setAttribute("aria-label", willOpen ? "Close menu" : "Open menu");
  });

  $$(".nav__links a", nav).forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initActiveSection() {
  const navLinks = $$(".nav__link");
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* =====================================================================
   Reveal on scroll
   ===================================================================== */
function initReveal() {
  const items = $$(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
  );

  items.forEach((item) => observer.observe(item));
}

/* =====================================================================
   Back to top
   ===================================================================== */
function initBackToTop() {
  const button = $("#totop");
  if (!button) return;

  const onScroll = () => button.classList.toggle("is-visible", window.scrollY > 600);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  button.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });
}

/* =====================================================================
   Init
   ===================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  bindConfig();
  renderSkills();
  renderJourney();
  renderProjects();
  renderLearningTopics();
  initNav();
  initActiveSection();
  initReveal();
  initBackToTop();
});
