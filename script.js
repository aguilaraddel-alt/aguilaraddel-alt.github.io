"use strict";
const menuButton = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#navigation");
const desktop = matchMedia("(min-width: 1100px)");
function setMenu(open) {
  navigation.hidden = !open && !desktop.matches;
  menuButton.setAttribute("aria-expanded", String(open));
}
function adaptMenu() { menuButton.hidden = desktop.matches; setMenu(false); }
menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
navigation.addEventListener("click", event => { if (event.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && !desktop.matches && menuButton.getAttribute("aria-expanded") === "true") { setMenu(false); menuButton.focus(); } });
desktop.addEventListener("change", adaptMenu);
adaptMenu();
const themeButton = document.querySelector("#theme-toggle");
themeButton.hidden = false;
let dark = matchMedia("(prefers-color-scheme: dark)").matches;
function applyTheme(value) {
  dark = value;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  themeButton.setAttribute("aria-pressed", String(dark));
  themeButton.textContent = dark ? "Light theme" : "Dark theme";
}
themeButton.addEventListener("click", () => applyTheme(!dark));
applyTheme(dark);
// Round-trip the project data as JSON before rendering the gallery.
const projects = JSON.parse(JSON.stringify([
  {title:"Workshop Directory",category:"web",summary:"A sample directory that organizes local learning sessions into clear, scannable cards.",detail:"Concept: combine topic filters, readable schedules, and a responsive card grid to make browsing easier."},
  {title:"Cloud Study Planner",category:"cloud",summary:"A sample interface for organizing cloud topics and practical study sessions.",detail:"Concept: group compute, storage, and governance topics into a weekly plan with explicit progress labels."},
  {title:"Reading Tracker",category:"web",summary:"A sample reading-list concept focused on simple organization and accessible controls.",detail:"Concept: categorize books by reading status and show descriptive feedback when the selected category changes."}
]));
function renderProjects(category) {
  const gallery = document.querySelector("#project-gallery");
  gallery.replaceChildren();
  const selected = projects.filter(project => category === "all" || project.category === category);
  selected.forEach((project) => {
    const card = document.createElement("article"); card.className = "card";
    const illustration = document.createElement("img");
    illustration.src = `images/project${projects.indexOf(project) + 1}.jpg`;
    illustration.alt = `${project.title}: three-step sample interface planning diagram`;
    illustration.width = 720;
    illustration.height = 420;
    illustration.loading = "lazy";
    const body = document.createElement("div"); body.className = "card-body";
    const tag = document.createElement("p"); tag.className = "tag"; tag.textContent = "Sample concept / " + (project.category === "web" ? "Web design" : "Cloud concepts");
    const heading = document.createElement("h3"); heading.textContent = project.title;
    const summaryText = document.createElement("p"); summaryText.textContent = project.summary;
    const details = document.createElement("details"); const summary = document.createElement("summary"); summary.textContent = "Explore the concept";
    const description = document.createElement("p"); description.textContent = project.detail;
    details.append(summary,description); body.append(tag,heading,summaryText,details); card.append(illustration,body); gallery.append(card);
  });
  document.querySelector("#project-count").textContent = `${selected.length} sample ${selected.length === 1 ? "project" : "projects"} shown`;
}
document.querySelector("#project-filter").addEventListener("change",event => renderProjects(event.target.value));
renderProjects("all");
const form = document.querySelector("#contact-form");
form.noValidate = true; // Custom feedback supplements the HTML5 constraint attributes.
const status = document.querySelector("#form-status");
const preview = document.createElement("section");
preview.id = "message-preview";
preview.setAttribute("aria-label", "Message preview");
preview.hidden = true;
form.append(preview);
function validateField(field) {
  let message = "";
  if (!field.checkValidity()) message = field.type === "checkbox" ? "Please acknowledge that this is a preview." : field.type === "email" ? "Enter a valid email address." : `Enter ${field.id === "name" ? "a name of 2–80" : "a message of 10–1200"} characters.`;
  if (field.type !== "checkbox" && field.type !== "email" && field.value.trim().length < field.minLength) message = "Please add meaningful text; spaces alone are not enough.";
  document.querySelector(`#${field.id}-error`).textContent = message;
  field.setAttribute("aria-invalid", String(Boolean(message)));
  return !message;
}
form.addEventListener("submit",event => {
  event.preventDefault();
  const fields = [form.elements.name,form.elements.email,form.elements.message,document.querySelector("#demo")];
  const invalid = fields.filter(field => !validateField(field));
  preview.replaceChildren();
  preview.hidden = true;
  if (invalid.length) { status.textContent = "Please correct the highlighted fields. Nothing has been sent."; invalid[0].focus(); return; }
  const heading = document.createElement("h3");
  heading.textContent = "Your message preview";
  const subject = document.createElement("p");
  subject.textContent = `${form.elements.topic.value} / ${form.elements.purpose.value}`;
  const message = document.createElement("p");
  message.className = "preview-text";
  message.textContent = form.elements.message.value.trim();
  preview.append(heading, subject, message);
  preview.hidden = false;
  status.textContent = `Thanks, ${form.elements.name.value.trim()}. Your ${form.elements.topic.value.toLowerCase()} message is ready to preview. Nothing was sent or saved.`;
});
form.addEventListener("reset",() => { document.querySelectorAll(".error").forEach(item => item.textContent = ""); form.querySelectorAll("[aria-invalid]").forEach(field => field.removeAttribute("aria-invalid")); status.textContent = ""; preview.replaceChildren(); preview.hidden = true; });
