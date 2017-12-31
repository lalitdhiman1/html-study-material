var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var minifyjs = require('gulp-js-minify');



gulp.task('sass', function () {
  return gulp.src('./static/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("master.css"))
    .pipe(gulp.dest('./build/css'));
});
gulp.task('minify-js', function(){
  gulp.src('./static/scripts/**/*.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
  gulp.watch('./static/styles/**/*.scss', ['sass']);
  gulp.watch('./static/scripts/**/*.js', ['minify-js']);
});

gulp.task('default', [ 'sass', 'minify-js', 'watch' ]);
