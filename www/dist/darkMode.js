(() => { document.addEventListener("DOMContentLoaded", () => { let t = document.querySelector(".theme-controller"), o = document.querySelector("nav"), a = e => { document.body.setAttribute("data-theme", e), o && o.setAttribute("data-theme", e), t && (t.checked = e === "dark") }, r = window.matchMedia("(prefers-color-scheme: dark)").matches, d = localStorage.getItem("theme") || (r ? "dark" : "light"); a(d), t && t.addEventListener("change", e => { let c = e.target.checked ? "dark" : "light"; a(c), localStorage.setItem("theme", c) }) }); })();
//# sourceMappingURL=darkMode.js.map