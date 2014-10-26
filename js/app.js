(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

/*
Main Application
 */
var noticeTimeout, runNoticeAnimation;

noticeTimeout = false;

runNoticeAnimation = function() {
  var $notice;
  $('body, html').animate({
    'scrollTop': 0
  });
  $notice = $('.notice');
  $notice.removeClass('boxed');
  clearTimeout(noticeTimeout);
  $notice.addClass('boxed');
  return noticeTimeout = setTimeout(function() {
    return $notice.removeClass('boxed');
  }, 700);
};

$(document).ready(function() {
  $('.signup-box button').click(function(e) {
    var $widget;
    $widget = $(this).parents('.newsletter-widget');
    $widget.find('form').hide();
    return $widget.find('.thanks').show();
  });
  $('.frontpage .glow-only').click(function(e) {
    e.preventDefault();
    return runNoticeAnimation();
  });
  return $('.newsletter-signup').focus(function() {
    return $(this).parents('.signup-box').find('button').removeClass('hide');
  });
});



},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhbXBiZWxsL3dlYnNpdGVzL2hpdHRldXIvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvY2FtcGJlbGwvd2Vic2l0ZXMvaGl0dGV1ci9jb2ZmZWUvYXBwLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQUE7O0dBQUE7QUFBQSxJQUFBLGlDQUFBOztBQUFBLGFBSUEsR0FBZ0IsS0FKaEIsQ0FBQTs7QUFBQSxrQkFNQSxHQUFxQixTQUFBLEdBQUE7QUFDbkIsTUFBQSxPQUFBO0FBQUEsRUFBQSxDQUFBLENBQUUsWUFBRixDQUFlLENBQUMsT0FBaEIsQ0FDQztBQUFBLElBQUEsV0FBQSxFQUFhLENBQWI7R0FERCxDQUFBLENBQUE7QUFBQSxFQUlBLE9BQUEsR0FBVSxDQUFBLENBQUUsU0FBRixDQUpWLENBQUE7QUFBQSxFQUtBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQXBCLENBTEEsQ0FBQTtBQUFBLEVBT0EsWUFBQSxDQUFhLGFBQWIsQ0FQQSxDQUFBO0FBQUEsRUFTQSxPQUFPLENBQUMsUUFBUixDQUFpQixPQUFqQixDQVRBLENBQUE7U0FVQSxhQUFBLEdBQWdCLFVBQUEsQ0FBVyxTQUFBLEdBQUE7V0FDekIsT0FBTyxDQUFDLFdBQVIsQ0FBb0IsT0FBcEIsRUFEeUI7RUFBQSxDQUFYLEVBRWQsR0FGYyxFQVhHO0FBQUEsQ0FOckIsQ0FBQTs7QUFBQSxDQXFCQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO0FBQ2hCLEVBQUEsQ0FBQSxDQUFFLG9CQUFGLENBQXVCLENBQUMsS0FBeEIsQ0FBOEIsU0FBQyxDQUFELEdBQUE7QUFDNUIsUUFBQSxPQUFBO0FBQUEsSUFBQSxPQUFBLEdBQVUsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLE9BQUwsQ0FBYSxvQkFBYixDQUFWLENBQUE7QUFBQSxJQUNBLE9BQU8sQ0FBQyxJQUFSLENBQWEsTUFBYixDQUFvQixDQUFDLElBQXJCLENBQUEsQ0FEQSxDQUFBO1dBRUEsT0FBTyxDQUFDLElBQVIsQ0FBYSxTQUFiLENBQXVCLENBQUMsSUFBeEIsQ0FBQSxFQUg0QjtFQUFBLENBQTlCLENBQUEsQ0FBQTtBQUFBLEVBS0EsQ0FBQSxDQUFFLHVCQUFGLENBQTBCLENBQUMsS0FBM0IsQ0FBaUMsU0FBQyxDQUFELEdBQUE7QUFDL0IsSUFBQSxDQUFDLENBQUMsY0FBRixDQUFBLENBQUEsQ0FBQTtXQUNBLGtCQUFBLENBQUEsRUFGK0I7RUFBQSxDQUFqQyxDQUxBLENBQUE7U0FTQSxDQUFBLENBQUUsb0JBQUYsQ0FBdUIsQ0FBQyxLQUF4QixDQUE4QixTQUFBLEdBQUE7V0FDNUIsQ0FBQSxDQUFFLElBQUYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxhQURYLENBRUUsQ0FBQyxJQUZILENBRVEsUUFGUixDQUdFLENBQUMsV0FISCxDQUdlLE1BSGYsRUFENEI7RUFBQSxDQUE5QixFQVZnQjtBQUFBLENBQWxCLENBckJBLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiIyMjXG5NYWluIEFwcGxpY2F0aW9uXG4jIyNcblxubm90aWNlVGltZW91dCA9IGZhbHNlXG5cbnJ1bk5vdGljZUFuaW1hdGlvbiA9IC0+XG4gICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlXG4gICAnc2Nyb2xsVG9wJzogMFxuXG5cbiAgJG5vdGljZSA9ICQoJy5ub3RpY2UnKVxuICAkbm90aWNlLnJlbW92ZUNsYXNzICdib3hlZCdcblxuICBjbGVhclRpbWVvdXQgbm90aWNlVGltZW91dFxuXG4gICRub3RpY2UuYWRkQ2xhc3MgJ2JveGVkJ1xuICBub3RpY2VUaW1lb3V0ID0gc2V0VGltZW91dCAtPlxuICAgICRub3RpY2UucmVtb3ZlQ2xhc3MgJ2JveGVkJ1xuICAsIDcwMFxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICAkKCcuc2lnbnVwLWJveCBidXR0b24nKS5jbGljayAoZSkgLT5cbiAgICAkd2lkZ2V0ID0gJChAKS5wYXJlbnRzKCcubmV3c2xldHRlci13aWRnZXQnKVxuICAgICR3aWRnZXQuZmluZCgnZm9ybScpLmhpZGUoKVxuICAgICR3aWRnZXQuZmluZCgnLnRoYW5rcycpLnNob3coKVxuXG4gICQoJy5mcm9udHBhZ2UgLmdsb3ctb25seScpLmNsaWNrIChlKSAtPlxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJ1bk5vdGljZUFuaW1hdGlvbigpXG5cbiAgJCgnLm5ld3NsZXR0ZXItc2lnbnVwJykuZm9jdXMgLT5cbiAgICAkKEApXG4gICAgICAucGFyZW50cygnLnNpZ251cC1ib3gnKVxuICAgICAgLmZpbmQoJ2J1dHRvbicpXG4gICAgICAucmVtb3ZlQ2xhc3MgJ2hpZGUnXG4iXX0=
