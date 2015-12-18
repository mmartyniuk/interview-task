var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');

// inject task, is used to automatically inject any files to index page
gulp.task('inject', function () {

  var target = gulp.src('index.html');
  var sources = gulp.src(['assets/bower_components/**/*.min.js', '!assets/bower_components/angular-material/modules/**/*.js', 'assets/app/**/*js'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));

});

// serve task, used to init browser sync module
gulp.task('serve', ['inject'],  function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

});