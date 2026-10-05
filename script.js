(function () {
  "use strict";

  // Basic copy deterrence. This does not provide DRM-level protection.
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("selectstart", function (e) {
    if (!e.target.closest("input, textarea")) e.preventDefault();
  });

  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  document.addEventListener("copy", function (e) {
    e.preventDefault();
  });

  document.addEventListener("cut", function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();
    const blocked =
      (e.ctrlKey || e.metaKey) && ["c", "x", "u", "s", "a"].includes(key);

    if (blocked) {
      e.preventDefault();
    }
  });

  // Theme
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("marwa-theme");

  if (savedTheme === "dark") document.body.classList.add("dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "marwa-theme",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  // Reader font size
  let fontSize = parseFloat(localStorage.getItem("marwa-font-size")) || 1.25;
  document.documentElement.style.setProperty("--reading-size", fontSize + "rem");

  const fontUp = document.getElementById("fontUp");
  const fontDown = document.getElementById("fontDown");

  function setFontSize(value) {
    fontSize = Math.max(1.05, Math.min(1.65, value));
    document.documentElement.style.setProperty("--reading-size", fontSize + "rem");
    localStorage.setItem("marwa-font-size", fontSize);
  }

  if (fontUp) fontUp.addEventListener("click", () => setFontSize(fontSize + 0.1));
  if (fontDown) fontDown.addEventListener("click", () => setFontSize(fontSize - 0.1));

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();