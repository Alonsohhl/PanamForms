
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./panamtest"
    });

    gulp.watch("panamtest/node_modules/bootstrap/scss/*.scss", ['sass']);
    gulp.watch("panamtest/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("panamtest/node_modules/bootstrap/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("panamtest/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
