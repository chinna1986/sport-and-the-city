/*!
 * Main application class
 */
function main () {

  jQuery(document.documentElement).removeClass(appConfig.loadingStateClass).addClass(appConfig.readyStateClass);

  // Init resizer
  $.fn.resizer && $.fn.resizer();

  // Init nicescroll
  $.fn.scroller && $.fn.scroller();

}

var appConfig = {
  loadingStateClass: 'loading-state',
  readyStateClass: 'ready-state',
  resizeStateClass: 'resize-state'
};

jQuery(main);
jQuery(document.documentElement).addClass(appConfig.loadingStateClass);