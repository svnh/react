var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

// Browserify (http://browserify.org/) is a module that allows you
// to require files in the browser the same way as in node.js
gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({ transform: 'reactify' }))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload());
});

// Because Browserify parses the AST for require
// statements, you only need to load your main file
// that has script tags linking out to the root
gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

// Setting a default allows you to simply run
// `gulp` to run both of these commands
gulp.task('default',['browserify', 'copy']);

// Watch for changes in any src files and recompile
gulp.task('watch', function() {
    // Use Livereload (http://livereload.com/extensions/)
    // (https://www.npmjs.com/package/gulp-livereload)
    // for automagic browser refresh on source changes
    livereload.listen();
    gulp.watch('src/**/*.*', ['default']);
});
