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

### FAQS
#### What are the steps to clone and run this boilerplate?
Create a new directory on your machine: `mkdir ~/Desktop/my-app`.
Open the directory using terminal: `cd my-app`.
Clone this repository: `git clone https://github.com/tpkahlon/npm-app.git .`.
Run: `npm i`
#### What if I get Administrative authentication errors?
Use the following command: `sudo chown -R $(whoami) ~/.npm`.
Works on Mac/Linux.
#### How to remove UNCSS feature?
In the `package.json` file:
Please remove `uncss` from `autoprefixer` task. In the same file, Please remove `uncss_bootstrap` and `uncss_style` tasks.
In the `app/pug/_layouts/default.pug` file: 
Rename location for following stylesheets: `bootstrap.min.css to bootstrap.css` and `style.min.css to style.css`.
Go to root path of your application, Run the following command: `npm uninstall --save-dev uncss` to remove uncss plugin and dependencies.
