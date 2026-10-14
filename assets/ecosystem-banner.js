// Navigation banner shared by the sparse-ir documentation sites.
// Each site loads this file from https://spm-lab.github.io/assets/ecosystem-banner.js,
// so the links are maintained here, in one place.
(function () {
  "use strict";
  if (window.__spmEcosystemBanner) return;
  window.__spmEcosystemBanner = true;

  var TOP = "https://spm-lab.github.io/";
  var HUB = "https://spm-lab.github.io/sparse-ir-doc/";
  var links = [
    ["Overview", HUB],
    ["History", HUB + "src/history_comparison.html"],
    ["Notation", HUB + "src/notation.html"],
    ["Tutorial", "https://spm-lab.github.io/sparse-ir-tutorial/"],
    ["Python", "https://sparse-ir.readthedocs.io/"],
    ["Julia", "https://spm-lab.github.io/SparseIR.jl/stable/"],
    ["Rust / C / Fortran", "https://spm-lab.github.io/sparse-ir-rs/"]
  ];

  var path = window.location.pathname;
  var archivedV1 = /\/sparse-ir-tutorial-v1(-mirror)?\//.test(path);

  var css =
    ".spm-eco{box-sizing:border-box;margin:0 0 1.2em;padding:.6em .9em;border-left:4px solid #1f5fbf;" +
    "background:rgba(31,95,191,.09);border-radius:4px;font:14px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:inherit}" +
    ".spm-eco a{color:inherit;text-decoration:underline;text-underline-offset:2px}" +
    ".spm-eco a:hover{color:#1f5fbf}" +
    ".spm-eco .spm-eco-title{font-weight:700;margin-right:.5em}" +
    ".spm-eco .spm-eco-links a{margin-right:.75em;white-space:nowrap}" +
    ".spm-eco .spm-eco-top{float:right;margin-left:1em;font-weight:600;white-space:nowrap}" +
    ".spm-eco.spm-eco-warn{border-left-color:#c2410c;background:rgba(194,65,12,.12)}" +
    "@media (max-width:600px){.spm-eco .spm-eco-top{float:none;display:block;margin:0 0 .3em}}";

  function build() {
    var box = document.createElement("div");
    box.className = "spm-eco" + (archivedV1 ? " spm-eco-warn" : "");
    box.setAttribute("role", "navigation");
    box.setAttribute("aria-label", "sparse-ir ecosystem");

    var top = document.createElement("a");
    top.className = "spm-eco-top";
    top.href = TOP;
    top.textContent = "↑ SpM-lab home";
    box.appendChild(top);

    var title = document.createElement("span");
    title.className = "spm-eco-title";
    if (archivedV1) {
      title.textContent = "Archived: this tutorial is for sparse-ir v1 and is no longer maintained.";
      box.appendChild(title);
      var cur = document.createElement("a");
      cur.href = "https://spm-lab.github.io/sparse-ir-tutorial/";
      cur.textContent = "Go to the current tutorial";
      box.appendChild(cur);
      return box;
    }
    title.textContent = "Part of the sparse-ir ecosystem:";
    box.appendChild(title);

    var span = document.createElement("span");
    span.className = "spm-eco-links";
    for (var i = 0; i < links.length; i++) {
      var a = document.createElement("a");
      a.href = links[i][1];
      a.textContent = links[i][0];
      span.appendChild(a);
    }
    box.appendChild(span);
    return box;
  }

  function insert() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    // Content containers of the documentation generators in use:
    // Jupyter Book (pydata theme), Sphinx RTD theme, Documenter.jl, mdBook.
    var selectors = [".bd-article", ".wy-nav-content", "#documenter article.content", "#content main"];
    var target = null;
    for (var i = 0; i < selectors.length && !target; i++) {
      target = document.querySelector(selectors[i]);
    }
    var box = build();
    if (target) {
      target.insertBefore(box, target.firstChild);
    } else {
      box.style.margin = "0";
      box.style.borderRadius = "0";
      document.body.insertBefore(box, document.body.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insert);
  } else {
    insert();
  }
})();
