// Declaration
const gulp = require('gulp');
const robots = require('gulp-robots');
const humans = require('gulp-humans');
const googleWebFonts = require('gulp-google-webfonts');

/* Declaration for google_fonts TASK.
   Source: https://www.npmjs.com/package/gulp-google-webfonts */
const options = {
  fontsDirectory: '../fonts/',
	cssDirectory: './',
	cssFilename: 'fonts.css'
};

/* Generate Google Fonts css file.
   Source: https://www.npmjs.com/package/gulp-google-webfonts */
gulp.task('google_fonts', () => {
  return gulp.src('./fonts.list')
  .pipe(googleWebFonts(options))
  .pipe(gulp.dest('dist/css/'));
});

/* Generate robots.txt file.
   Source: https://www.npmjs.com/package/gulp-robots */
gulp.task('robots_file', () => {
  gulp.src('dist/index.html')
  .pipe(robots({
    useragent: '*',
    disallow: ['cgi-bin/']
  }))
  .pipe(gulp.dest('dist'));
});

/* Generate humans.txt file.
   Source: https://www.npmjs.com/package/gulp-humans */
gulp.task('humans_file', () => {
  gulp.src('./dist/index.html')
    .pipe(humans({
      thanks: [
        'Node (@nodejs on Twitter)',
        'Gulp (@gulpjs on Twitter)',
        'Damon Bauer (@damon_bauer on Twitter)'
      ],
      site: [
        'Standards: HTML5, CSS3, SVG',
        'Components: jQuery, Bootstrap, Fontawesome, Real Favicon, HTML5Shiv, Bootstrap Select, Google Fonts',
        'Software: Visual Studio Code'
      ],
      note: 'Built with love by Damon Bauer.'
    }))
    .pipe(gulp.dest('./dist/'));
});

// Default
gulp.task('default', [ 
  'robots_file', 
  'humans_file', 
  'google_fonts'
]);
