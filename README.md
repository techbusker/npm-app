# Overview
Web App Kit is a boilerplate to create Front-End web applications based on Bootstrap. It has all the essential tools for building high-quality, cross-platform, responsive web pages.

### Technologies used
---
![HTML5](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/html-64.png)&nbsp;&nbsp;![CSS3](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-64.png)&nbsp;&nbsp;![Node](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/nodejs-64.png)&nbsp;&nbsp;![Bootstrap](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/boostrap-64.png)&nbsp;&nbsp;![SASS](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/sass-64.png)&nbsp;&nbsp;![jQuery](https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/jquery-64.png)

### Features
---
| Feature | Summary |
| --- | --- |
| NPM Scripts | Workflow for this boilerplate is based on Damon Bauer's article: [Why NPM Scripts?](https://css-tricks.com/why-npm-scripts). Generate, minify and concatenate JavaScript, HTML, CSS, Images, Icons using one commmand to help keep your workflow straightforward. Run `npm i` or `npm run install` or `npm run all` to kickstart boilerplate.
| PUG Templating Engine | Support for PUG to create inter-connected HTML pages on the fly [PUG](https://pugjs.org/api/getting-started.html). Please use the following tool to convert HTML templates to PUG instantly: [PUG Converter](https://hadijaveed.github.io/All-Convertors).
| Responsive | A responsive starter kit optimized for many devices and screens. Powered by [Bootstrap Sass](http://getbootstrap.com).
| SCSS | Compile SCSS based stylesheets into CSS, bringing support for variables, mixins and more. Run `npm run scss`.
| HTML Linting | HTML Linting is done using [HTML Inspector](https://cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.2/html-inspector.js). Please check your Browser console for HTML based errors.
| SCSS Linting | SCSS Linting is done using [Stylelint](https://www.npmjs.com/package/stylelint).
| JavaScript Linting | JavaScript Linting is done using [ESLint](https://eslint.org).
| Bootstrap Linting | Bootstrap Linting is done using [Bootlint](https://www.npmjs.com/package/bootlint).
| Cross Device Sync | [BrowserSync](https://www.browsersync.io) server for viewing your site locally while you develop.
| Offline Support | Support for fetching Google Web Fonts locally to maintain your site's fonts for Intranet based applications using [Google Fonts Plugin](https://www.npmjs.com/package/gulp-google-webfonts).
| NPM Plugins | Usage of [NPM Library](https://www.npmjs.com/package/package) to fetch addon libraries like jQuery, Bootstrap etc.
| Addons | [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select), [FontAwesome](http://fontawesome.io/icons), [Real Favicon](http://realfavicongenerator.net), [jQuery](http://jquery.com), [HTML5Shiv](https://www.npmjs.com/package/html5shiv), [Humans file generator](https://www.npmjs.com/package/gulp-humans), [Robots file generator](https://www.npmjs.com/package/gulp-robots) libraries included with this boilerplate.

### FAQS
---
#### 1. What are the steps to clone and run this boilerplate?
1.  Create a new directory on your machine: `mkdir ~/Desktop/my-app`.
2.  Open the directory using terminal: `cd my-app`.
3.  Clone this repository: `git clone https://github.com/tpkahlon/npm-app.git .`.
4.  Run: `npm i`.
#### 2. What if I get Administrative authentication errors?
*Works on Mac/Linux.*  
Use the following command: `sudo chown -R $(whoami) ~/.npm`.
#### 3. How to remove UNCSS feature?
1.  In the `package.json` file:
Please remove `uncss` from `autoprefixer` task. In the same file, Please remove `uncss_bootstrap` and `uncss_style` tasks.
2.  In the `app/pug/_layouts/default.pug` file: 
Rename location for following stylesheets: `bootstrap.min.css to bootstrap.css` and `style.min.css to style.css`.
3.  Go to root path of your application, Run the following command: `npm uninstall --save-dev uncss` to remove uncss plugin and dependencies.