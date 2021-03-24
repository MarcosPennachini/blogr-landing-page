const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
sass.compiler =  require('sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
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
  watch('*.html', browsersyncReload);
  watch(['app/**/*.scss'], series(scssTask, browsersyncReload));
}

exports.default = series(
  scssTask,
  browsersyncServe,
  watchTask
)