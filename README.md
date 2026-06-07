# CodeSnippets.ca Jekyll Site

A polished Jekyll version of the CodeSnippets.ca static site. It keeps the original visual direction, removes the fragile local `fetch()` dependency, and generates snippet pages from Jekyll collections.

## Structure

```text
.
├── _config.yml
├── _data/snippets.json
├── _includes/
├── _layouts/
├── _snippets/
├── assets/
├── snippets/index.html
├── about.html
└── index.html
```

## How snippets work

Each snippet has a Markdown file in `_snippets/` with front matter:

```yaml
---
title: Node: Read a Large File Line-by-Line
slug: node-read-large-file-line-by-line
language: JavaScript
category: Node.js
difficulty: Beginner
tags: [node, streams, files]
description: Read a large text file safely using Node.js streams.
gist_url: https://gist.github.com/your-username/example
featured: true
---
```

The `_data/snippets.json` file is included as a lightweight database reference, but the generated pages use the `_snippets` collection so the site works on static hosting without fetching JSON in the browser.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://localhost:4000
```

## Deploy

This should work on GitHub Pages, Cloudflare Pages, Netlify, or any static host that can build Jekyll.

For Cloudflare Pages, use:

```text
Build command: bundle exec jekyll build
Output directory: _site
```

## Updating content

1. Add or edit a file in `_snippets/`.
2. Update the `gist_url` to point to the canonical GitHub Gist.
3. Set `featured: true` for snippets that should appear on the homepage.
4. Rebuild and deploy.
