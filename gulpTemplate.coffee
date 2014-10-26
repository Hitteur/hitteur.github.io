lazypipe = require 'lazypipe'

gulp = require 'gulp'
nunjucks = require 'gulp-nunjucks-render'

nunjucks.nunjucks.configure ['templates/', 'templates/modules']

module.exports = lazypipe()
  .pipe(
    nunjucks
  ).pipe(gulp.dest, './')
