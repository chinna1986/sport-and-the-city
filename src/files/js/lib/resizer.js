/*!
 * Horizontal media resizer
 */
!function (jQuery, window) {

  function Resizer (heights) {
    this.heights = heights;
    this.currentClass = null;
    this.timeOutId = null;
    this.classes = jQuery.map(this.heights, function (value) {
      return "sh-" + value; // sh -> Screen Height
    });
    this.proxyingMethods();
    this.bindEvent();
    this.detectHeight();
  }


  Resizer.prototype.proxyingMethods = function() {
    this.resize = jQuery.proxy(this._resize, this)
    this.detectHeight = jQuery.proxy(this._detectHeight, this)

    return;
  };


  Resizer.prototype.bindEvent = function() {
    jQuery(window).on('resize', this.resize);

    return;
  };


  Resizer.prototype._resize = function(e) {
    if (this.timeOutId) {
      clearTimeout(this.timeOutId);
    }

    this.timeOutId = setTimeout(this.detectHeight, 30);

    return;
  };


  Resizer.prototype._detectHeight = function() {
    var windowHeight = jQuery(window).height();
    var newClass = this.getClassByHeight(windowHeight);

    if (this.currentClass && this.currentClass != newClass) {
      jQuery(document.documentElement).removeClass(this.currentClass);
    }

    if (this.currentClass != newClass) {
      jQuery(document.documentElement).addClass(newClass);
      this.currentClass = newClass;
    }

    return;
  };

  Resizer.prototype.getClassByHeight = function(height) {
    var newClass = null;
    var index = this.heights.length;

    for (; index >= 0; index--) {
      if (height <= this.heights[index]) {
        newClass = this.classes[index];
      }
    };

    return newClass;
  };

  window.resizer = new Resizer([320, 480, 768, 1080, 1600]);

} (jQuery, window);