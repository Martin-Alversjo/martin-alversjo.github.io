var gulp = require('gulp'),
sass = require('gulp-sass'),
webpack = require('webpack');

gulp.task('scripts', function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) {
      console.log(err.toString());
    }

    console.log(stats.toString());
    callback();
  });
})

gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

// Copy ScrollReveal JS core JavaScript files from node_modules
gulp.task('scrollreveal', function() {
  return gulp.src(['node_modules/scrollreveal/dist/*.js'])
  .pipe(gulp.dest('dist/scrollreveal'));
  });

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/scripts/**/*.js', function() {
      gulp.start('scripts');
});
});


// Copy all dependencies from node_modules
gulp.task('copy', ['scrollreveal']);
// Watch task
gulp.task('default', ['sass', 'watch']);


