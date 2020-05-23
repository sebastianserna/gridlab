//-----------------------------------------------------
// GridLab
// by Sebastian Serna
// (c) 2020-present
//-----------------------------------------------------

const { src, dest, watch, series, parallel } = require('gulp');
// General plugins
const browserSync = require('browser-sync');
// const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
// Project specific
const sass = require('gulp-sass'); 
const cleanCSS = require('gulp-clean-css');

//-----------------------------------------------------
// Server tasks
//-----------------------------------------------------

function watch_files() {
  browserSync.init({
    server: {
        baseDir: 'docs',
        index: 'index.html',
        ghostMode: false,
        serveStaticOptions: {
          extensions: ['html']
        }
    }
  });

  watch('./docs/**/*').on('change', browserSync.reload);
  watch('./docs/**/*.html').on('change', browserSync.reload);
  watch('./src/**/*.scss', series(sass_compiler, reload));
  watch('package.json', series(sass_compiler, reload));
}

function reload(done) {
    browserSync.reload();
    done();
}

//-----------------------------------------------------
// Sass compiler task
//-----------------------------------------------------

// Sass paths
var inputSass = 'src/**/*.scss';
var outputSass = 'dist/';
var outputDocs = 'docs/dist/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

function sass_compiler() {
  return src(inputSass)
    .pipe(plumber())
    .pipe(sass(sassOptions).on('error', sass.logError))
      // .pipe(cleanCSS())
    .pipe(dest(outputSass))
    .pipe(dest(outputDocs))
}

//-----------------------------------------------------
// TASKS
//-----------------------------------------------------

exports.default = watch_files;
exports.watch = watch_files;
exports.sass = series(sass_compiler);
exports.namespace = series(sass_compiler);
exports.build = series(sass_compiler);