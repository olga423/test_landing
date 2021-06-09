'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .on('error', notify.onError())
    .pipe(autoprefixer({
            cascade: false
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))

});
  
gulp.task('watch', function() {
    gulp.watch("./scss/**/*.scss", gulp.series ('sass'));
});

