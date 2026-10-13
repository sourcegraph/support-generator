# Support Generator — publishing repository

The public address remains **https://sourcegraph.github.io/support-generator/**.
Existing bookmarks continue to use this repository's GitHub Pages site.

## Development has moved

Source, tests, build configuration, and publishing instructions now live in
**[sourcegraph/support → cmd/support-generator](https://github.com/sourcegraph/support/tree/main/cmd/support-generator)**.
Make all new changes there. See its [README](https://github.com/sourcegraph/support/blob/main/cmd/support-generator/README.md)
for local development, command verification, publishing, and rollback.

The source files remaining on this branch are historical, not the current app.
Do not use this repository's old `npm run deploy`: it would replace the current
site with the legacy build. Publish from the monorepo instead.

## Hosting and preserved history

- `gh-pages` remains the GitHub Pages source, at `/`. It receives built files
  through ordinary fast-forward commits from the monorepo's publishing script.
- The deployed `source-revision.txt` identifies the monorepo commit used to build
  the site. No source development or cross-repository CI secret is needed here.
- All original branches and Git history remain intact. Do not archive or delete
  this repository: it is still the hosting destination for the existing address.
- [`pre-monorepo-source`](https://github.com/sourcegraph/support-generator/tree/pre-monorepo-source)
  preserves the original source snapshot and its history.
- [`pre-monorepo-pages`](https://github.com/sourcegraph/support-generator/tree/pre-monorepo-pages)
  preserves the old deployed site, verified byte-for-byte before migration.
  [Download the old site ZIP](https://github.com/sourcegraph/support-generator/archive/refs/tags/pre-monorepo-pages.zip).

The [monorepo rollback instructions](https://github.com/sourcegraph/support/blob/main/cmd/support-generator/README.md#publishing-and-rollback)
restore a previous site with a new commit, without rewriting deployment history.
