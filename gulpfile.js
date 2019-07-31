'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const SASS_WATCH_PATH = './src/**/*.scss';
const SASS_SRC_PATH = './src/style.scss';
const OUTPUT_PATH = './dist';

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp
    .src(SASS_SRC_PATH)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(OUTPUT_PATH));
});

gulp.task('sass:watch', function() {
  gulp.watch(SASS_WATCH_PATH, gulp.series('sass'));
});
