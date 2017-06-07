var gulp = require('gulp');
var angularTemplateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var addStream = require('add-stream');
var options = {
   root: 'app/templates/'
};

gulp.task('build-app', function () {
  return gulp.src('app/scripts/app.js')
    .pipe(addStream.obj(prepareTemplates()))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/scripts'));
});

function prepareTemplates() {
  return gulp.src('app/templates/**/*.html')
    .pipe(angularTemplateCache(options));
}