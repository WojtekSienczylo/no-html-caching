var gulp = require('gulp');
var angularTemplateCache = require('gulp-angular-templatecache');

function prepareTemplates() {
  return gulp.src('app/templates/**/*.html')
    .pipe(angularTemplateCache());
}

var concat = require('gulp-concat');
var addStream = require('add-stream');

gulp.task('build-app', function() {
  return gulp.src('app/scripts/app.js')
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/scripts'));
});