/*!
 * Main application class
 */
var appConfig = {
  loadingStateClass: 'loading-state',
  readyStateClass:   'ready-state',
  resizeStateClass:  'resize-state'
};

jQuery(document.documentElement).addClass('loading-state');

jQuery( document ).ready( function () {
  jQuery(document.documentElement).removeClass('loading-state').addClass('ready-state');
});
