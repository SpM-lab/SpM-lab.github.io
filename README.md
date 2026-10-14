# SpM-lab.github.io

Source of <https://spm-lab.github.io/>, the entry page for the SpM-lab software.
Plain HTML, served by GitHub Pages from `main`; no build step.

- `index.html`, `assets/site.css`: the top page.
- `assets/ecosystem-banner.js`: the navigation banner that the sparse-ir documentation sites
  (sparse-ir-doc, sparse-ir-tutorial, sparse-ir, SparseIR.jl, sparse-ir-rs) load from this site.
  Edit the links here and every site picks them up.
- `sparse-ir-tutorial-v2/`: redirects from the old tutorial URLs to `/sparse-ir-tutorial/`.
- `404.html`: also redirects unknown `/sparse-ir-tutorial-v2/...` paths.
