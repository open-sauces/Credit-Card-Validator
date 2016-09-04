// karma.conf.js
module.exports = function(config) {
  config.set({
     // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    frameworks: ['jasmine'],
    // list of files / patterns to load in the browser
    files: {
      "src/**/*.js": ["babel"]
    },
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    colors: true,
    preprocessors: {
    "src/**/*.js": ["babel"]
    },
  });
};
