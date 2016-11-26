/* jshint node: true */
'use strict';
var gulp = require('gulp');
var documentation = require('gulp-documentation');
var del = require('del');
var jsonlint = require('gulp-jsonlint');
var csslint = require('gulp-csslint');
var sloc = require('gulp-sloc');
var eslint = require('gulp-eslint');

var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var cssNext = require('postcss-cssnext');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('cssnano');
var zip = require('gulp-zip');
// inherit center configs
var webapplateConfigs = require('./config');
var Server = require('karma').Server;
var ghPages = require('gulp-gh-pages');

var options = {
  param: { // Project settings
    debug: webapplateConfigs.debug,
    src: 'public',
    build: 'build',
    tmp: '.tmp',
    dst: 'dist',
    pack: 'pack',
    www: 'www'
  }
};

gulp.task('jsdoc', function() {
  gulp.src(['public/js/**/*.js', 'server.js', 'routes/**/*.js'])
    .pipe(documentation({format: 'html'}))
    .pipe(gulp.dest('docs'));
});

var lintSources = ['*.js', 'routes/**/*.js', options.param.src + '/**/*.js'];

gulp.task('jsonlint', function() {
  return gulp.src([
    'package.json',
    'bower.json',
    options.param.src + '/manifest.webapp',
    options.param.src + '/manifest.json',
    options.param.src + '/**/*.json'
  ])
  .pipe(jsonlint())
  .pipe(jsonlint.reporter());
});

gulp.task('csslint', function() {
  return gulp.src(options.param.src + '/style/**/*.css')
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter());
});

gulp.task('sloc-client', function() {
  gulp.src([
    options.param.src + '/*.html',
    options.param.src + '/js/*.js',
    options.param.src + '/style/*.css',
    options.param.src + '/test/unit/*.js',
  ])
  .pipe(sloc());
});

gulp.task('sloc-server', function() {
  gulp.src([
    'server.js',
    'routes/**/*.js',
    'views/**/*.html'
  ])
  .pipe(sloc());
});

gulp.task('clean-dist', function(cb) {
  del([
    options.param.dst,
    options.param.tmp,
    options.param.build,
    options.param.pack,
    options.param.www,
    'docs'
  ], cb);
});

gulp.task('copy-static', function() {
  return gulp.src([
    options.param.src + '/manifest.*',
    options.param.src + '/style/icons/**/*',
    options.param.src + '/style/images/**/*',
    options.param.src + '/locales/**/*'],
    {'base': options.param.src
  })
  .pipe(gulp.dest(options.param.dst));
});

gulp.task('copy-vendor', function() {
  return gulp.src([
    // bootstrap css
    options.param.src + '/vendor/bootstrap/dist/css/*.min.css',
    // bootstrap fonts
    options.param.src + '/vendor/bootstrap/dist/fonts/*',
    // bootstrap material design css
    options.param.src +
    '/vendor/bootstrap-material-design/dist/css/*.min.css',
    // bootstrap material design fonts, remove .woff to support < ie9
    options.param.src + '/vendor/bootstrap-material-design/dist/fonts/*.woff',
    // font awesome
    //options.param.src + '/vendor/font-awesome/css/font-awesome.min.css',
    //options.param.src + '/vendor/font-awesome/font/*.woff'
  ], {'base': options.param.src})
  .pipe(gulp.dest(options.param.dst));
});

gulp.task('optimize', function() {
  return gulp.src([
    options.param.src + '/{,*/}*.html',
    '!' + options.param.src + '/test/**.*'
  ])
  // inject
  .pipe(useref())
  .pipe(gulpif('**/*.js', babel({
    compact: false,
    presets: ['stage-2', 'es2015']
  })))
  .pipe(gulpif('**/*.js', uglify()))
  .pipe(gulpif('**/*.css', postcss([cssNext, cssnano])))
  .pipe(gulpif('**/*.html', htmlmin({empty: true})))
  .pipe(gulp.dest(options.param.dst));
});

// Runs ESLint on all javascript files found in the app dir.
gulp.task('lint', ['jsonlint', 'csslint', 'sloc-server', 'sloc-client'],
  function() {
    return gulp.src(lintSources)
      .pipe(eslint('.eslintrc'))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError()); // don't stop on error
  });

gulp.task('githooks', function() {
  return gulp.src(['pre-commit'])
    .pipe(gulp.dest('.git/hooks'));
});

gulp.task('docs', ['clean-dist', 'lint', 'jsdoc']);
gulp.task('static', ['optimize', 'copy-static', 'copy-vendor']);
gulp.task('pack', ['optimize', 'copy-static', 'copy-vendor'], function() {
  console.log('export packed web app is not supported yet');
  return gulp.src(options.param.dst + '/**/*', {'base': options.param.dst})
    .pipe(zip('package.zip'))
    .pipe(gulp.dest(options.param.pack));
});

gulp.task('cordova', ['optimize', 'copy-static', 'copy-vendor'], function() {
  return gulp.src([options.param.dst + '/**/*'], {'base': options.param.dst})
    .pipe(gulp.dest(options.param.www));
});

gulp.task('dynamic', function() {
  console.log('export dynamic web site is not supported yet');
});

gulp.task('github', ['static'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

// Run test once and exit
gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
