const gulp = require('gulp'),
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
      copy = require('gulp-copy'),
      browsersync = require('browser-sync');

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
      .pipe(browsersync.reload({stream: true, match: '**/*.css'}));
}

function compileJs() {
  return gulp.src(config.patternlab.javascript.src)
      .pipe(sourcemaps.init())
      .pipe(concat("components.js", {newLine: ';'}))
      .pipe(gulp.dest('patternlab/source/js/'))
      .pipe(gulp.dest('dist/js/'))
      .pipe(gulp.dest('docs/js/'))
      .pipe(browsersync.reload({stream: true, match: '**/*.js'}));
}

function minifyImages() {
  return gulp.src(config.images.src)
      .pipe(imagemin())
      .pipe(gulp.dest(config.images.dest));
}

function watchFiles() {
    gulp.watch(config.css.src, compileCss);
    gulp.watch(config.patternlab.javascript.src, gulp.series(compileJs,copyJs));
    gulp.watch(config.images.src, minifyImages);
    gulp.watch(config.patternlab.src, build);
}

function copyJs() {
  return gulp
      .src(config.copy.src)
      .pipe(copy(config.copy.dest, {prefix: 1}))
      .pipe(copy(config.copy.pl_dest, {prefix: 2}));
}

function browserSync(done) {
  browsersync.init({
    host: config.browserSync.host,
    proxy: config.browserSync.proxy,
    baseDir: config.browserSync.baseDir,
    port: 3001,
    open: false
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

const watch = gulp.parallel(watchFiles, browserSync);
const build = gulp.series(generate, compileCss, compileJs, copyJs, minifyImages);
const defaultTasks = gulp.series(build, watch);

exports.compileCss = compileCss;
exports.compileJs = compileJs;
exports.minifyImages = minifyImages;
exports.copyJs = copyJs;
exports.generate = generate;
exports.build = build;
exports.watch = watch;
exports.default = defaultTasks;
