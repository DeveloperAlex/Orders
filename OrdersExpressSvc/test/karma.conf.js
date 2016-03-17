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
      '../bower_components/jquery/dist/jquery.js',
      '../bower_components/angular/angular.js',
      '../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/sinon/lib/sinon.js',
      './**/*.js',
      './**/*.html',
      '../../test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'ChromeCanary'],

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
