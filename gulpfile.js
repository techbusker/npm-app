// Declaration
var gulp = require('gulp');
var googleWebFonts = require('gulp-google-webfonts');

// Download Google fonts to local app.
var options = {};
gulp.task('google_fonts', function () {
  return gulp.src('./fonts.list')
  	.pipe(googleWebFonts(options))
  	.pipe(gulp.dest('dist/fonts/vendor'));
});

gulp.task('default', ['google_fonts']);
