/*!
 * Main application class
 */
function main () {

  // Init resizer
  $.fn.resizer && $.fn.resizer();

  // Init nicescroll
  $.fn.scroller && $.fn.scroller();


  return true;
}

jQuery(main);