# Overview
Web App Kit is a boilerplate to create Front-End web applications based on Bootstrap. It has all the essential tools for building high-quality, cross-platform, responsive web pages.

### Features
| Feature | Summary |
| --- | --- |
| NPM Scripts | Workflow for this boilerplate is based on Damon Bauer's article: [Why NPM Scripts?](https://css-tricks.com/why-npm-scripts). Generate, minify and concatenate JavaScript, HTML, CSS, Images, Icons using one commmand to help keep your workflow straightforward. Run `npm i` or `npm run install` or `npm run all` to kickstart boilerplate.
| PUG Templating Engine | Support for PUG to create inter-connected HTML pages on the fly [PUG](https://pugjs.org/api/getting-started.html). Please use the following tool to convert HTML templates to PUG instantly: [PUG Converter](https://hadijaveed.github.io/All-Convertors).
| Responsive | A responsive starter kit optimized for many devices and screens. Powered by [Bootstrap Sass](http://getbootstrap.com).
| SCSS | Compile SCSS based stylesheets into CSS, bringing support for variables, mixins and more. Run `npm run scss`.
| HTML Linting | HTML Linting is done using [HTML Inspector](https://cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.2/html-inspector.js). Please check your Browser console for HTML based errors.
| SCSS Linting | SCSS Linting is done using [Stylelint](https://www.npmjs.com/package/stylelint).
| JavaScript Linting | JavaScript Linting is done using [ESLint](https://eslint.org).
| Cross Device Sync | [BrowserSync](https://www.browsersync.io) server for viewing your site locally while you develop.
| Offline Support | Support for fetching Google Web Fonts locally to maintain your site's fonts for Intranet based applications using [Google Fonts Plugin](https://www.npmjs.com/package/gulp-google-webfonts).
| NPM Plugins | Usage of [NPM Library](https://www.npmjs.com/package/package) to fetch addon libraries like jQuery, Bootstrap etc.
| Addons | [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select) library included with this boilerplate.

## Administrative authentication
### `No sudo prefix required`
  `sudo chown -R $(whoami) ~/.npm`

  Works for Linux/Unix.

## Favicon
### `This task has two steps: Generate and Update HTML.`
  `npm run favicon-generate | npm run favicon-html`

  Generate takes a lot of time and runs once in entire cycle. Update HTML will update all production files when any change has occured.
