const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const csso = require('gulp-csso');
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");
const del = require("del");

// Server
const server = (done) => {
  sync.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Styles
const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(sourcemap.write("."))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// HTML.
const html = () => {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"))
    .pipe(sync.stream())
}

exports.html = html;
// js.
const js = () => {
  return gulp.src("source/js/*.js")
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream())
}

exports.js = js;
// images
const images = () => {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.svgo()
  ]))
}

exports.images = images;

// sprite
const sprite = () => {
  return gulp.src("source/img/**/icon-*.svg")
  .pipe(svgstore())
  .pipe(rename("sprite.svg"))
  .pipe(gulp.dest("source/img"));
}

exports.sprite = sprite;

// copy
const copy = () => {
  return gulp.src([
    "source/img/**",
    "source/fonts/*.{woff,woff2}",
    "source/*.ico"
  ],{
    base:"source"
  })
  .pipe(gulp.dest("build"));
};

exports.copy = copy;

// Вотчер.
const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html));
  gulp.watch("source/js/*.js", gulp.series(js));
}

//clean
const clean = () => {
  return del("build");
};

exports.clean = clean;

//webp
const webpic = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
  .pipe(webp({ality:90}))
  .pipe(gulp.dest("source/img"))
}
exports.webpic = webpic;


// Основное.

const build = (done) => gulp.series(clean, copy, styles, html, images,js, watcher )(done);
exports.build = build;

exports.default = gulp.series(
  clean, copy, styles, html, js, server, watcher
);
