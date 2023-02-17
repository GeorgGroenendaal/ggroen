---
title: 'Code snippet: Deploying a SvelteKit static site to GitHub Pages using workflows'
date: '17-2-2023'
tags: ['web development', 'sveltekit', 'ssr', 'github pages']
description: 'Learn how to deploy SvelteKit static sites to GitHub Pages using workflows with this short code snippet.'
---

Previously, to deploy a website on GitHub Pages, you had to build the site locally and then push the resulting files to a specific folder. However, many developers prefer not to have a build folder in their repository. Luckily, as of this writing, GitHub Pages supports actions and workflows that can be used to deploy your site. Unfortunately, documentation on how to use this feature with SvelteKit is lacking. Therefore, I have written a short code snippet that explains how to deploy SvelteKit static sites to GitHub Pages using workflows.

To get started, create a new file named .github/workflows/deploy.yml and paste the following code into it:

```yml
name: Build Pages

permissions:
  contents: read
  pages: write
  id-token: write

on:
  push:
    branches: ['master']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3.6.0
        with:
          node-version: 18.13.0
      - name: Install dependencies and build
        run: |
          npm install
          npm run build
      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v1.0.7
        with:
          path: build/
      - name: Deploy GitHub Pages site
        uses: actions/deploy-pages@v1.2.4
```

This code sets up a GitHub Pages deployment workflow. It specifies the necessary permissions to read the contents of your repository and write to GitHub Pages, and defines the build process for your SvelteKit site. This workflow will be triggered on every push to the master branch of your repository.

I hope this code snippet helps you deploy your SvelteKit static site to GitHub Pages. In the future, I plan to release the code for this website as a template, so stay tuned!
