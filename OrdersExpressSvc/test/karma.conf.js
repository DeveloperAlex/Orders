module.exports = function(config){
  config.set({

    basePath : '../public/app',

    preprocessors: {
      '**/*.html':'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      prependPrefix: '/'
    },

    files : [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../bower_components/jquery/dist/jquery.js',
      '../../test/lib/angular-mocks.js',
      '../../test/lib/sinon-1.15.0.js',
      './**/*.js',
      '**/*.html',
      '../../test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
