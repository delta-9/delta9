var gulp       = require('gulp'),
gutil          = require('gulp-util'),
plumber        = require('gulp-plumber'),
imagemin       = require('gulp-imagemin'),
uglify         = require('gulp-uglify'),
concat         = require('gulp-concat'),
stylus         = require('gulp-stylus'),
rupture        = require('rupture'),
sourcemaps     = require('gulp-sourcemaps'),
size           = require('gulp-size'),
// babel          = require('gulp-babel'),
changed        = require('gulp-changed'),
mainBowerFiles = require('main-bower-files'),
ignore         = require('gulp-ignore'),
postcss        = require('gulp-postcss'),
defaultunit    = require('postcss-default-unit'),
circle         = require('postcss-circle'),
crip           = require('postcss-crip'),
csssize        = require('postcss-size'),
font_magician  = require('postcss-font-magician'),
pxtorem        = require('postcss-pxtorem'),
csstriangle    = require('postcss-triangle'),
shortfontsize  = require('postcss-short-font-size'),
quantityqueries= require('postcss-quantity-queries'),
shortcolor     = require('postcss-short-color'),
colorshort     = require('postcss-color-short'),
pseudocontent  = require('postcss-pseudo-content-insert'),
ie_opacity     = require('postcss-opacity'),
center         = require('postcss-center'),
position       = require('postcss-position-alt'),
mqpacker       = require('css-mqpacker'),
csswring       = require('csswring'),
empty          = require('postcss-discard-empty'),
unused         = require('postcss-discard-unused'),
unique         = require('postcss-unique-selectors'),
mergerules     = require('postcss-merge-rules'),
// cssnano        = require('cssnano'),
charset        = require('postcss-normalize-charset'),
initial        = require('postcss-initial'),
autoprefixer   = require('autoprefixer');



var ie8 = false; // to support IE8 -> true

var replace_rem = !ie8;
var browsers = ['last 2 versions'];

if(ie8) {
  browsers.push('ie 8');
}


var jsBower  = mainBowerFiles({checkExistence:true, filter:/\.js$/});
var cssBower = mainBowerFiles({checkExistence:true, filter:/\.css$/});

console.log(jsBower);
console.log(cssBower);

var path = {
  js:     ['src/js/**/*.js', '!src/js/ie9-/**/*.js'],
  js_ie9: ['src/js/ie9-/**/*.js'],
  css:    ['src/css/all.styl'],
  img:    ['dist/img/**/*.{png,jpg,gif,svg}']
};


var onError = function (err) {
  gutil.beep();
  console.log(err);
};

gulp.task('js', function() {
  gulp.src(jsBower.concat(path.js))
  .pipe(ignore.exclude('**/jquery.js'))
  //.pipe(sourcemaps.init())
  .pipe(plumber({errorHandler: onError}))
  //.pipe(babel({blacklist:['useStrict']}))
  .pipe(concat('all.js'))
  .pipe(uglify())
  //.pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/js'))
  .pipe(size({showFiles:true}));
})
.task('js-ie9-', function() {
  gulp.src(path.js_ie9)
  .pipe(plumber({errorHandler: onError}))
  .pipe(concat('ie.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
})
.task('css', function() {

  var processors =
  [
    crip,
    circle,
    center,
    charset,
    csssize,
    initial({reset: 'inherited', replace: true}),
    mqpacker,
    position,
    shortcolor,
    colorshort,
    csstriangle,
    //pseudocontent,
    shortfontsize,
    quantityqueries,
    defaultunit({ unit: 'px' }),
    pxtorem(
    {
      rootValue: 10,
      unitPrecision: 5,
      propWhiteList: [],
      selectorBlackList: ['html'],
      replace: replace_rem,
      mediaQuery: false,
      minPixelValue: 2
    }),
    font_magician(
    {
      hosted: '../dist/font',
      foundries: ['custom', 'hosted', 'google']
    }),
    // cssnano({
    //   safe: true,
    //   autoprefixer: false,
    //   normalizeUrl: false,
    // }),
    autoprefixer({browsers: browsers, cascade: false}),
    csswring({removeAllComments: true, map: false}),
    // empty,
    // unused,
    // unique,
    mergerules
  ];

  if(ie8) {
    processors.push(ie_opacity);
  }

  gulp.src(path.css)
  .pipe(plumber({errorHandler: onError}))
  //.pipe(sourcemaps.init())
  .pipe(stylus({
    use: [ rupture() ],
    compress: true
  }))
  .pipe(postcss(processors))
  .pipe(concat('all.css'))
  //.pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/css'))
  .pipe(size({showFiles:true}));

  gulp.src(cssBower)
  .pipe(plumber({errorHandler: onError}))
  //.pipe(sourcemaps.init())
  .pipe(postcss(processors))
  .pipe(concat('plugin.css'))
  //.pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/css'))
  .pipe(size({showFiles:true}));
})
.task('img', function() {
  gulp.src(path.img)
  .pipe(imagemin({ optimizationLevel: 7 }))
  .pipe(gulp.dest('dist/img'));
});


gulp.task('watch', function() {
  gulp.watch(['src/css/**/*.styl'], ['css']);
  gulp.watch(path.js,    ['js']);
  gulp.watch(path.js_ie9,['js-ie9-']);
});

gulp.task('default', ['css', 'js','js-ie9-', 'watch'], function(){});
