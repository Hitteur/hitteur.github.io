gulp = require 'gulp'

coffeePipe = require './gulpBrowserify'
sassPipe = require './gulpSass'
nunjucksPipe = require './gulpTemplate'

gulp.task 'browserify', ->
  gulp
    .src(
      './coffee/app.coffee'
      , {read: false}
    ).pipe(coffeePipe())


gulp.task 'sass', ->
  gulp.src('sass/main.sass')
    .pipe(sassPipe())

gulp.task 'nunjucks', ->
  gulp.src('templates/*.html')
    .pipe(nunjucksPipe())

gulp.task 'default', [
  'browserify'
  'sass'
  'nunjucks'
]

