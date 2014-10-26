lazypipe = require 'lazypipe'
browserify = require 'gulp-browserify'
coffeeify = require 'coffeeify'
rename = require 'gulp-rename'
uglify = require 'gulp-uglify'
gulp = require 'gulp'

module.exports = lazypipe()
  .pipe(browserify
    ,
      debug: true
      transform: ['coffeeify']
      extensions: ['.coffee']
  ).pipe(rename, extname: '.js')
  .pipe(gulp.dest, './js/')
  .pipe(uglify, outSourceMaps:false)
  .pipe(rename, extname:'.min.js')
  .pipe(gulp.dest, './js/')

