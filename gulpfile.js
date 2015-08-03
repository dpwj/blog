'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var clean = require('del');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var serve = require('gulp-serve');
 


 
gulp.task('clean', function () {
    return gulp.src('./dist/bundle.js')
        .pipe(clean({force: true}))
        // .pipe(gulp.dest('deletedgul'));
});

 
gulp.task('minify', function() {
  return gulp.src('./dist/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

 
gulp.task('sass', function () {
  gulp.src('assets/scss/*scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});
 

// API Server
var jsonServer = require('json-server');
var apiServer = jsonServer.create();
var router = jsonServer.router('db.json');

apiServer.use(jsonServer.defaults);
apiServer.use(router);

gulp.task('serve:api', function (cb) {
  apiServer.listen(3000);
  cb();
});


// Web Server
gulp.task('serve:web', serve({
  root: ['.'],
  port: 8000
}));
gulp.task('serve', ['serve:api', 'serve:web'])





// Gulp Watch
gulp.task('watch', function () {
  gulp.watch('assets/scss/*scss', ['sass']);
});


// Default
gulp.task('default', ['watch'])




