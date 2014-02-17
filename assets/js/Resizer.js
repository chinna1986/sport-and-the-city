!function ($) {
  var index;
  var current_class = false;
  var height_map = [   320,    480,    768,    1080,    1600];
  var class_map  = ['sh-320', 'sh-480', 'sh-768', 'sh-1080', 'sh-1600'];

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

    for (index = height_map.length - 1; index >= 0; index--) {
      if (height <= height_map[index]) 
        new_class = class_map[index];
    };

    return new_class;
  }

  function init () {
    $( window ).on('resize', on_resize).trigger('resize');
  }

  $(init);

} (jQuery);