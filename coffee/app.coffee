###
Main Application
###

noticeTimeout = false

runNoticeAnimation = ->
  $('body, html').animate
   'scrollTop': 0


  $notice = $('.notice')
  $notice.removeClass 'boxed'

  clearTimeout noticeTimeout

  $notice.addClass 'boxed'
  noticeTimeout = setTimeout ->
    $notice.removeClass 'boxed'
  , 700

$(document).ready ->
  $('.signup-box button').click (e) ->
    $widget = $(@).parents('.newsletter-widget')
    $widget.find('form').hide()
    $widget.find('.thanks').show()

  $('.frontpage .glow-only').click (e) ->
    e.preventDefault()
    runNoticeAnimation()

  $('.newsletter-signup').focus ->
    $(@)
      .parents('.signup-box')
      .find('button')
      .removeClass 'hide'
