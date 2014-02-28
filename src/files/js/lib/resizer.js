/*!
 * Horizontal media resizer
 * 
 */
!function () {

var heightMap = [320, 480, 768, 1080, 1600];
var classMap = jQuery.map(heightMap, function (value) { return "sh-" + value; });
var currentClass = false;
var timeOutId = false;
var index;

function onResizeHandler(event) {
  if (timeOutId) clearTimeout(timeOutId);
  setTimeout(onResize, 30);
}

function onResize(event) {
  var windowHeight = jQuery( window ).height(),
      newClass = getClassByHeight(windowHeight);

  if (currentClass && currentClass != newClass) {
    jQuery(document.documentElement).removeClass(currentClass);
  }

  if (currentClass != newClass) {
    currentClass = newClass;
    jQuery(document.documentElement).addClass(newClass);
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

onResize();
jQuery(window).on('resize', onResizeHandler);

} ();