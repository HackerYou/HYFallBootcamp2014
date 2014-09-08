$.fn.colourMe = function(options) {

  var settings = $.extend({
    fontSize: "32px",
    color: "red"
  }, options);

  return this.css({fontSize: settings.fontSize, color: settings.color});
}