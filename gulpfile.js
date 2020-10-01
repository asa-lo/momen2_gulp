const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const minify = require("gulp-minify-css");
const uglify = require("gulp-uglify-es").default;
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const browsersync = require("browser-sync").create();
const gulp = require('gulp');
const babel = require('gulp-babel');

//Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    sassPath: "src/**/*.scss",
    jsPath: "src/**/*.js",
    imgPath: "src/img/*"

}

//Kopiera HTML-filer
function copyHTML() {
    return src(files.htmlPath)
        .pipe(dest('pub')
        );
}

//Kopiera bilder
function copyImg() {
    return src(files.imgPath)
        .pipe(dest('pub')
        );
}


//Sass
function sassTask() {
    return src(files.sassPath)
        .pipe(sass())
        .pipe(concat("styles.css"))
        .pipe(minify({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(dest("pub/css"));
}


//Sammanslå och minifiera JS-filer
function jsTask() {
    return src(files.jsPath)
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('pub/js')
        );
}


//Watcher
function watchTask() {
    browsersync.init({
        server: {
            baseDir: "pub"
        }
    })
    watch([files.htmlPath, files.jsPath, files.sassPath, files.imgPath],
        parallel(copyHTML, sassTask, jsTask, copyImg)).on("change", function () {
            browsersync.reload();
        });
}

//Deafult tasks
exports.default = series(
    parallel(copyHTML, jsTask, sassTask, copyImg),
    watchTask
);

