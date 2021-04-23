const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler =  require('sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-htmlmin');
const browsersync = require('browser-sync').create();

function scssTask(){
  var plugins = [
    autoprefixer(),
    cssnano()
  ];
  return src ('app/scss/main.scss', {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(dest('./dist', {sourcemaps: '.'}));
}

function htmlTask() {
  return src('./*.html')
    .pipe(htmlmin( { collapseWhitespace: true } ))
    .pipe(dest('./dist'));
}

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  })
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

function watchTask(){
  watch('*.html', series(htmlTask, browsersyncReload));
  watch(['app/**/*.scss'], series(scssTask, browsersyncReload));
}

exports.default = series(
  htmlTask,
  scssTask,
  browsersyncServe,
  watchTask
)