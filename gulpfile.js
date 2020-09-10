const { src, dest, watch, series, parallel } = require("gulp");
const concat = require("gulp-concat");
const minify = require("gulp-minify-css");
const uglify = require("gulp-uglify-es").default;
const browsersync = require("browser-sync").create();


//Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/**/*.jpg"

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

//Sammanslå och minifiera css-filer
function cssTask() {
    return src(files.cssPath)
        .pipe(concat('styles.css'))
        .pipe(minify())
        .pipe(dest('pub/css')
        );
}


//Sammanslå och minifiera JS-filer
function jsTask() {
    return src(files.jsPath)
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
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imgPath],
        parallel(copyHTML, cssTask, jsTask, copyImg)).on("change", function () {
            browsersync.reload();
        });
}

//Deafult tasks
exports.default = series(
    parallel(copyHTML, jsTask, cssTask, copyImg),
    watchTask
);

