/*!
 * Horizontal media resizer
 */
!function (jQuery, window) {

  function Resizer (heights) {
    this.heights = heights || [];
    this.currentClass = null;
    this.timeOutId = null;
    this.classes = jQuery.map(this.heights, function (value) { 
      return "sh-" + value; // sh -> Screen Height
    });
    this.proxyingMethods();
    this.bindEvent();
  }


  Resizer.prototype.proxyingMethods = function() {
    this.resize = jQuery.proxy(this._resize, this)
    this.detectHeight = jQuery.proxy(this._detectHeight, this)
  };


  Resizer.prototype.bindEvent = function() {
    jQuery(window).on('resize', this.resize);
    this.resize();
  };


  Resizer.prototype._resize = function(e) {
    if (this.timeOutId) {
      clearTimeout(this.timeOutId);
    }

    this.timeOutId = setTimeout(this.detectHeight, 30);
  };


  Resizer.prototype._detectHeight = function() {
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
  };

  Resizer.prototype.getClassByHeight = function(height) {
    var newClass = '';

    for (var index = heightMap.length - 1; index >= 0; index--) {
      if (height <= heightMap[index]) {
        newClass = classMap[index];
      }
    };

    return newClass;
  };

  window.resizer = new Resizer([320, 480, 768, 1080, 1600]);



// var heightMap = [320, 480, 768, 1080, 1600];
// var classMap = jQuery.map(heightMap, function (value) { return "sh-" + value; });
// var currentClass = false;
// var timeOutId = false;
// var index;

// function onResizeHandler(event) {
//   if (timeOutId) clearTimeout(timeOutId);
//   setTimeout(onResize, 30);
// }

// function onResize(event) {
//   var windowHeight = jQuery( window ).height(),
//       newClass = getClassByHeight(windowHeight);

//   if (currentClass && currentClass != newClass) {
//     jQuery(document.documentElement).removeClass(currentClass);
//   }

//   if (currentClass != newClass) {
//     currentClass = newClass;
//     jQuery(document.documentElement).addClass(newClass);
//   }

//   return true;
// }


// function getClassByHeight(height) {
//   var newClass = '';

//   for (var index = heightMap.length - 1; index >= 0; index--) {
//     if (height <= heightMap[index]) {
//       newClass = classMap[index];
//     }
//   };

//   return newClass;
// }

// onResize();
// jQuery(window).on('resize', onResizeHandler);

} (jQuery, window);