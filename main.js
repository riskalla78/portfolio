function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle("light-theme");
  const isLightTheme = html.classList.contains("light-theme");
  localStorage.setItem("theme", isLightTheme ? "light" : "dark");
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.classList.toggle(
    "light-theme",
    currentTheme === "light"
  );
} else {
  const prefersLightTheme = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  document.documentElement.classList.toggle("light-theme", prefersLightTheme);
  localStorage.setItem("theme", prefersLightTheme ? "light" : "dark");
}

document.querySelector("#toggle-theme").addEventListener("click", toggleTheme);
document.querySelector("#scroll-down").addEventListener("click", () => {
  window.scrollTo({ top: document.querySelector("#sobre-mim").offsetTop - 20 });
});
