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
  jQuery(window).on('app-refresh', reinit_slider);
  init_rslides();
});

function init_rslides ($element) {
  var defaults = {
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 500,             // Integer: Speed of the transition, in milliseconds
      "timeout": 4000,          // Integer: Time between slide transitions, in milliseconds
      "pager": false,           // Boolean: Show pager, true or false
      "nav": true,              // Boolean: Show navigation, true or false
      "random": false,          // Boolean: Randomize the order of the slides, true or false
      "pause": false,           // Boolean: Pause on hover, true or false
      "pauseControls": true,    // Boolean: Pause when hovering controls, true or false
      "prevText": "&lsaquo;",   // String: Text for the "previous" button
      "nextText": "&rsaquo;",   // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "navContainer": "",       // Selector: Where auto generated controls should be appended to, default is after the <ul>
      "manualControls": "",     // Selector: Declare custom pager navigation
      "namespace": "rslides",   // String: change the default namespace used
      "before": $.noop,         // Function: Before callback
      "after": $.noop           // Function: After callback
    };
  var $elements = ( $element || jQuery('.rslides') );

  return $elements.each(function () {
    var $this = $(this);
    var options = $.extend( $this.data(), defaults, {});
    $this.responsiveSlides(options);
  });
}

function reinit_slider() {
  return init_rslides( jQuery('.todo-init-rslides') ).removeClass('todo-init-rslides');
}