/*!
 * Horizontal media resizer
 * 
 */
!function ($) {

var heightMap = [320, 480, 768, 1080, 1600];
var classMap = jQuery.map(heightMap, function (value) { return "sh-" + value; });
var currentClass = false;
var index;

function onResizeHandler(event) {
  var windowHeight = $( window ).height(),
      newClass = getClassByHeight(windowHeight);

  if (currentClass && currentClass != newClass) {
    $(document.documentElement).removeClass(currentClass);
  }

  if (currentClass != newClass) {
    currentClass = newClass;
    $(document.documentElement).addClass(newClass);
  }

  return true;
}


function getClassByHeight(height) {
  var newClass = '';

  for (var index = heightMap.length - 1; index >= 0; index--) {
    if (height <= heightMap[index]) {
      newClass = classMap[index];
    }
  };

  return newClass;
}

jQuery.fn.resizer = function () {
  return $(window).on('resize', onResizeHandler).trigger('resize');
}

} (jQuery);