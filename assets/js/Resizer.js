!function ($) {
  var index;
  var current_class = false;
  var size_map  = [  320,    480,    768,    1080,    1600];
  var class_map = ['h320', 'h480', 'h768', 'h1080', 'h1600'];

  function on_resize(event) {
    var height = $( window ).height();
    var new_class = get_class_by_height(height);

    if (current_class && current_class != new_class) {
      $(document.documentElement).removeClass(current_class);
    }

    if (current_class != new_class) {
      current_class = new_class;
      $(document.documentElement).addClass(new_class);
    }

    return true;
  }


  function get_class_by_height(height) {
    var new_class = '';

    for (index = size_map.length - 1; index >= 0; index--) {
      if (height <= size_map[index]) 
        new_class = class_map[index];
    };

    return new_class;
  }

  function init () {
    $( window ).on('resize', on_resize).trigger('resize');
  }

  $(init);

} (jQuery);