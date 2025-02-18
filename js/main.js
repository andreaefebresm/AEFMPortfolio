jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 10;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    $('#box').hScroll(30);
});

$(function() {
  var prefix = function() {
    var a = window.getComputedStyle(document.documentElement, ""),
      b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
    return "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1], "-" + b + "-"
  }();
  $(document).mousemove(function(e) {
    mouseX = e.pageX + 15;
    mouseY = e.pageY - $(window).scrollTop() + 15;
    $('.theBall-outer').attr('style', prefix + 'transform:translate(' + mouseX + 'px,' + mouseY + 'px)');
  });

  $(document).on('mouseenter', '.link', function() {
    $('.theBall').addClass('zooming');
  }).on('mouseleave', 'a', function() {
    $(".theBall").removeClass("zooming")
  });
})
