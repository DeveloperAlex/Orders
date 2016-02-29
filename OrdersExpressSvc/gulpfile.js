var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon'); //Note: we're using pm2 on our Ubuntu box.

var jsFiles = ['*.js', 'models/**/*.js', 'routes/**/*.js', 'public/app/**/*.js'];

gulp.task('style', function () {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(jscs()); //jscs doesn't rtn a fail if it finds stuff. jshint does though.
});


gulp.task('inject', function () {
  //Note: this relies on "overrides" block in bower.json
  //to correct the bower_components own bower.json files which
  //may not have js/css - but instead less, etc.
  //https://www.npmjs.com/package/wiredep
  var wiredep = require('wiredep').stream;
  var wdOptions = {
    bowerJson: require('./bower.json'),
    directory: './public/bower_components',
    ignorePath: '../../public'
  };

  var inject = require('gulp-inject');
  var injectSrc = gulp.src(['./public/app/**/*.css',
                              './public/app/**/*.js'], {
    read: false
  });
  var injectOptions = {
    ignorePath: '/public/',
    relative: true
  };

  gulp.src('./public/index.html')
    .pipe(wiredep(wdOptions))
    .pipe(inject(injectSrc, injectOptions))
    .pipe(gulp.dest('./public'));
});



gulp.task('serve', ['style', 'inject'], function () {
  var options = {
    script: 'server.js',
    delayTime: 2,
    env: {
      'PORT': 3000
    },
    watch: jsFiles
  };

  return nodemon(options)
    .on('restart', function (ev) {
      console.log('Restarting....');
    });
});