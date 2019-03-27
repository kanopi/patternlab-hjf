var gulp = require('gulp'),
      sass = require('gulp-sass'),
      plumber = require('gulp-plumber'),
      notify = require('gulp-notify'),
      autoprefix = require('gulp-autoprefixer'),
      glob = require('gulp-sass-glob'),
      sourcemaps = require('gulp-sourcemaps'),
      shell = require('gulp-shell'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel'),
      imagemin = require('gulp-imagemin'),
      importOnce = require('node-sass-import-once'),
      browserSync = require('browser-sync').create();

const config = require('./gulp.config.json');

const generate = shell.task('php patternlab/core/console --generate');

function compileCss() {
  return gulp.src(config.css.src)
      .pipe(glob())
      .pipe(sass({
        outputStyle: 'compressed',
        errLogToConsole: true,
        includePaths: config.css.includePaths,
        importer: importOnce
      }))
      .pipe(autoprefix(config.autoprefixer))
      .pipe(gulp.dest(config.css.pl_dest))
      .pipe(gulp.dest(config.css.dest))
      .pipe(browserSync.reload({stream: true, match: '**/*.css'}));
}

function compileJs() {
  return gulp.src(config.patternlab.javascript.src)
      .pipe(sourcemaps.init())
      .pipe(concat("components.js", {newLine: ';'}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.paths.root + config.paths.public + 'js/'))
      .pipe(browserSync.reload({stream: true, match: '**/*.js'}));
}

function minifyImages() {
  return gulp.src(config.images.src)
      .pipe(imagemin())
      .pipe(gulp.dest(config.images.dest));
}

function watch() {
    browserSync.init({
        serveStatic: [config.paths.root + config.paths.public]
    });

    gulp.watch(config.css.src, compileCss);
    gulp.watch(config.js.src, compileJs);
    gulp.watch(config.images.src, minifyImages);
    gulp.watch(config.patternlab.src, server);
}

exports.compileCss = compileCss;
exports.compileJs = compileJs;
exports.minifyImages = minifyImages;
exports.watch = watch;
exports.generate = generate;

var build = gulp.series(generate, compileCss, compileJs, minifyImages);
exports.build = build;

var defaultTasks = gulp.series(build, watch);
exports.defaultTasks = defaultTasks;

gulp.task('default', defaultTasks);
