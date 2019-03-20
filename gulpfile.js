var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify'),
    autoprefix  = require('gulp-autoprefixer'),
    glob        = require('gulp-sass-glob'),
    sourcemaps  = require('gulp-sourcemaps'),
    shell       = require('gulp-shell'),
    concat      = require('gulp-concat'),
    babel       = require('gulp-babel'),
    imagemin    = require('gulp-imagemin'),
    importOnce  = require('node-sass-import-once');
    
var browserSync = require('browser-sync').create();
    
const config = require('./gulp.config.json');

// Pattern Lab
gulp.task('pl:css', () => {
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
});

gulp.task('pl:imagemin', () => {
    return gulp.src(config.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(config.images.dest))
});

gulp.task('pl:js', () => {
    return gulp.src(config.patternlab.javascript.src)
        .pipe(sourcemaps.init())
        .pipe(concat("components.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.paths.root + config.paths.public + 'js'))
        .pipe(browserSync.reload({stream: true, match: '**/*.js'}));
});

// Static Server with Watch.
gulp.task('serve', ['watch', 'generate:pl'], () => {
    browserSync.init({
        serveStatic: [config.paths.root + config.paths.public]
    });
});

// Watch task.
gulp.task('watch', function () {
    gulp.watch(config.css.src, ['pl:css']);
    gulp.watch(config.js.src, ['pl:js']);
    gulp.watch(config.patternlab.src, ['generate:pl']);
    gulp.watch(config.patternlab.javascript.src, ['generate:pl']);
    gulp.watch(config.images.src, ['pl:imagemin']);
});

gulp.task('pl:php', shell.task('php patternlab/core/console --generate'));

gulp.task('generate:pl', ['pl:php', 'pl:css', 'pl:js', 'pl:imagemin']);

gulp.task('default', ['serve']);

