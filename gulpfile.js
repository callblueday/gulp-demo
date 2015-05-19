// Load gulp
var gulp = require('gulp');

// Load plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var stylus = require('gulp-stylus');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var rename = require('gulp-rename');
var del = require("del");
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');    

// Styles
gulp.task('css', function() {
    var files = [
        "css/style.styl",
        "!css/font/**/*.*"
    ];
    gulp.src(files)
        .pipe(stylus({
            // inline: true,
            // compress: true
        }))
        .pipe(gulp.dest('assets'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('assets'));
});

// Scripts
gulp.task('js', function() {
    var files = [
        "js/api.js",
        "js/app.js",
        "js/utils.js"
    ];
    gulp.src(files)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('assets'));
});

// Images
gulp.task('images', function() {
  return gulp.src('images/**/*')
    .pipe(cache(imagemin(
        { 
            optimizationLevel: 3,
            progressive: true,
            interlaced: true 
        })
    ))
    .pipe(gulp.dest('assets/images'));
});

// Clean
gulp.task('clear', function(cb) {
    del(['assets'], cb);
});

// Default task
gulp.task('default', ['clear'], function() {  
    gulp.start('css', 'js', 'images');
});

// Watch
gulp.task('watch', function() {
    gulp.start('default');

    gulp.watch('css/*.styl', ['css']);
    gulp.watch('js/*.js', ['js']);
    gulp.watch('images/*.*', ['images']);

    // Create LiveReload server
    livereload.listen();
    
    // Watch any files in assets/, reload on change
    gulp.watch(['assets/**', '**/*.html']).on('change', livereload.changed);
});
