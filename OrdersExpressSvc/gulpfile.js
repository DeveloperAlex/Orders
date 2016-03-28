var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon'); //Note: we're using pm2 on our Ubuntu Server in the Google Cloud.

var jsFiles = ['*.js', 'models/**/*.js', 'routes/**/*.js', 'public/app/**/*.js'];

gulp.task('style', function () {
  return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .pipe(jscs()); //jscs doesn't rtn a fail if it finds stuff. jshint does though.
});


gulp.task('injectCss', function () {
  //Note: this relies on "overrides" block in bower.json
  //to correct the bower_components own bower.json files which
  //may not have js/css - but instead less, etc.
  var wiredep = require('wiredep').stream;  //https://www.npmjs.com/package/wiredep
  var wdOptions = {
    bowerJson: require('./bower.json'),
    directory: './public/bower_components',
    ignorePath: '../../public'
  };

  var inject = require('gulp-inject');  //https://www.npmjs.com/package/gulp-inject
  var injectSrc = gulp.src(['./public/assets/css/*.css', './public/app/**/*.css'], {read: false});

  var injectOptions = {
    ignorePath: '/public/',
    relative: true
  };

  return gulp.src('./public/index.html')
    .pipe(wiredep(wdOptions))
    .pipe(
      inject(injectSrc, injectOptions)
    )
    .pipe(gulp.dest('./public'));
}); //injectCss


//TODO: In Prod we'll want to Concat & Uglify too.
//  Great docs on how to do this at: https://www.npmjs.com/package/gulp-inject#injecting-files-from-multiple-source-streams
gulp.task('inject', ['injectCss'], function () {
  //Note: this relies on "overrides" block in bower.json
  //to correct the bower_components own bower.json files which
  //may not have js/css - but instead less, etc.
  var wiredep = require('wiredep').stream;  //https://www.npmjs.com/package/wiredep
  var wdOptions = {
    bowerJson: require('./bower.json'),
    directory: './public/bower_components',
    ignorePath: '../../public'
  };

  var inject = require('gulp-inject'),  //https://www.npmjs.com/package/gulp-inject
      angularFilesort = require('gulp-angular-filesort');  //https://www.npmjs.com/package/gulp-angular-filesort

  var injectSrc = gulp.src(['./public/app/**/*.js'], {read: true});
  var injectOptions = {
    ignorePath: '/public/',
    relative: true
  };

  return gulp.src('./public/index.html')
    .pipe(wiredep(wdOptions))
    .pipe(
      inject(injectSrc.pipe(angularFilesort()), injectOptions)
    )
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
