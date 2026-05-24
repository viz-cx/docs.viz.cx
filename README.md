# docs.viz.cx

This repository is a **deploy pipeline only**. The documentation content lives in
[`viz-blockchain/viz-cpp-node`](https://github.com/viz-blockchain/viz-cpp-node) under `docs/`.

On every push to `docs/**` in viz-cpp-node, a `repository_dispatch` event triggers
the workflow in `.github/workflows/mirror-and-deploy.yml`, which builds the VitePress
site from viz-cpp-node@master and deploys it to GitHub Pages at https://docs.viz.cx.

## Edit the docs

Open a PR against [viz-blockchain/viz-cpp-node](https://github.com/viz-blockchain/viz-cpp-node).

## Trigger a rebuild manually

Actions → "Mirror viz-cpp-node docs and deploy" → Run workflow.

## Legacy

The previous VuePress v1 site is preserved on the [`legacy-vuepress`](https://github.com/viz-cx/docs.viz.cx/tree/legacy-vuepress) branch. It is no longer maintained.
