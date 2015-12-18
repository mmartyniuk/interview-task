var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var target = gulp.src('index.html');

gulp.task('inject-css', function () {

  var sources = gulp.src(['assets/style/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));

});

// inject task, is used to automatically inject js files to index page
gulp.task('inject-js', function () {

  var sources = gulp.src(['assets/bower_components/**/*.min.js', '!assets/bower_components/angular-material/modules/**/*.js', 'assets/app/**/*.js'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));

});

// serve task, used to init browser sync module
gulp.task('serve', ['inject-css', 'inject-js'],  function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

});