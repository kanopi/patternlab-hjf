const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');

const sass         = require('gulp-sass'),
      plumber      = require('gulp-plumber'),
      notify       = require('gulp-notify'),
      autoprefix   = require('gulp-autoprefixer'),
      glob         = require('gulp-sass-glob'),
      shell        = require('gulp-shell'),
      concat       = require('gulp-concat'),
      babel        = require('gulp-babel'),
      imagemin     = require('gulp-imagemin'),
      importOnce   = require('sass-import-once'),
      copy         = require('gulp-copy'),
      browsersync  = require('browser-sync');

const config = require('./gulp.config.json');

const generate = shell.task('php patternlab/core/console --generate --nocache');

function compileCss() {
  return src(config.css.src)
      .pipe(glob())
      .pipe(sass({
        outputStyle: 'compressed',
        errLogToConsole: true,
        includePaths: config.css.includePaths,
        importer: importOnce
      }))
      .pipe(autoprefix(config.autoprefixer))
      .pipe(dest(config.css.pl_dest))
      .pipe(dest(config.css.dest))
      .pipe(browsersync.reload({stream: true, match: '**/*.css'}));
}

function compileJs() {
  return src(config.patternlab.javascript.src)
      .pipe(concat("components.js", {newLine: ';'}))
      .pipe(dest('patternlab/source/js/'))
      .pipe(dest('dist/js/'))
      .pipe(dest('docs/js/'))
      .pipe(browsersync.reload({stream: true, match: '**/*.js'}));
}

function copyJs() {
  return src(config.copy.src)
      .pipe(copy(config.copy.dest, {prefix: 1}))
      .pipe(copy(config.copy.pl_dest, {prefix: 2}));
}

function minifyImages() {
  return src(config.images.src)
      .pipe(imagemin())
      .pipe(dest(config.images.dest));
}

function watchFiles(done) {
  var options = {
    interval: 1000,
    usePolling: true,
    events: 'all'
  };
  watch(config.css.src, options, parallel(compileCss));
  watch(config.patternlab.javascript.src, options, series(compileJs,copyJs));
  watch(config.images.src, options, parallel(minifyImages));
  watch(config.patternlab.src, options, parallel(build));
  done();
}


function browserSync() {
  browsersync.init({
    host: config.browserSync.host,
    proxy: config.browserSync.proxy,
    baseDir: config.browserSync.baseDir,
    port: 3001,
    open: false
  });
}

const build = series(
  generate,
  parallel(
    compileCss,
    compileJs,
    minifyImages
  ),
  copyJs
);

exports.build = build;
exports.watch = parallel(watchFiles, browserSync);
exports.default = series(build, parallel(watchFiles, browserSync));
