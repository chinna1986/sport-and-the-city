/*jslint browser: true, sloppy: true, vars: true, plusplus: true, indent: 2 */

var grid = {

  init: function() {
    this.timeoutId = null;
    this._preventStateChange = false;
    this.cacheElements();
    this.bindHandler();
    this.initNiceScroll();
    this.showAnimated().done( this.updateGridWidth.bind(this) );
    // this.showAnimated(this.updateGridWidth.bind(this));
  },


  cacheElements: function() {
    this.$grid = jQuery('#grid');
    this.$modal = jQuery('#show-modal');
    this.$topMenu = jQuery('#header-languages');
    this.$topNavMenu = jQuery('#top-nav');
    this.$headerTopics = jQuery('#header-topics');
    this.$gridScrollWrapper = jQuery('#grid-scroll-wrapper');
  },


  bindHandler: function() {
    this.$modal.on('show', reinit_slider);
    jQuery(window).on('resize', this.windowResize.bind(this));
    jQuery(document).on('click', 'a[data-ajax]', this.loadPage.bind(this));
    jQuery(document).on('click', this.$topNavMenu.selector, this.toggleNavMenu.bind(this));
    jQuery(document).on('click', this.hideNavMenu.bind(this));
    jQuery(document).on('click', '[data-history-action]', this.goBack.bind(this));
    History.Adapter.bind(window, 'statechange', this.onStateChange.bind(this));
  },


  updateGridWidth: function() {
    var gridWidth = 0;
    
    this.$grid.children().each(function (index, element) {
      gridWidth += jQuery(this).outerWidth();
    });

    this.$grid.width(gridWidth);
  },


  initNiceScroll: function () {
    this.$gridScrollWrapper.niceScroll({
      cursorcolor: '#aaaaaa',
      cursorborder: '0px',
      cursorwidth: 8,
      cursoropacitymin: 0.6,
      cursoropacitymax: 1,
      cursordragontouch: true,
      cursorborderradius: '0px'
    });
  },


  windowResize: function (event) {

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(this.updateGridWidth.bind(this), 40);
  },

  showAnimated: function() {
    return this.$grid
      .children()
      .css({ opacity: 0, transform: 'translateX(100px)' })
      .animate({opacity: 1, transform: 'translateX(0px)' }, 500)
      .promise();
  },


  hideAnimated: function(callback) {
    return this.$grid
      .children()
      .css({ opacity: 1, transform: 'translateX(0px)' })
      .animate({opacity: 0, transform: 'translateX(100px)' }, 500)
      .promise();
  },


  loadPage: function(event) {
    var $this = jQuery(event.target);
    var url = $this.attr('href');
    var target = $this.data('ajax') || 'page';

    event.preventDefault();

    if (url === location.href) {
      return;
    }
    else {
      History.pushState({target: target}, document.title, url);
    }
  },


  onStateChange: function(event) {
    var state = History.getState();
    var target = (state && state.data.target) || 'page';

    // Close modal, if that is open
    if (target == 'page' && this.$modal.data('modal') && this.$modal.data('modal').isShown) {
      this.$modal.modal('hide');
    }

    $.when( $.get(state.cleanUrl, 'text'), this.hideAnimated() ).done(render.bind(this));

    function render(response) {
      var responseText = response && response[0];

      if (target == 'modal') {
        this.renderModal(responseText);
      }
      else {
        this.renderContent(responseText);
      }
    }
  },

  renderModal: function(text) {
    var html = jQuery('<html/>').html(text);
    var title = html.find('title').text();

    // Update title
    if (title) document.title = title;

    // Update modal content
    this.$modal.find('.modal-body').html( html.find('article') );

    this.$modal.modal('show');
  },


  renderContent: function(text) {
    if (!text) return;

    var html = jQuery('<html/>').html(text);
    var title = html.find('title').text();
    var bodyClassName = this._getBodyClassParse(text);

    // Change page theme
    if (bodyClassName) document.body.className = bodyClassName;
    
    // update page title
    if (title) document.title = title;

    // Update grid
    this.$grid.html(html.find(grid.$grid.selector).html());

    // Update header title
    this.$headerTopics.html(html.find(grid.$headerTopics.selector).html());

    // Update top menu
    this.$topMenu.html(html.find(grid.$topMenu.selector).html());

    // Scroll left
    this.$gridScrollWrapper.getNiceScroll(0).scrollLeft(0);

    // Update width
    this.updateGridWidth();

    // Animation
    this.showAnimated( this.updateGridWidth.bind(this) );
  },

  toggleNavMenu: function(event) {
    event.preventDefault();
    event.stopPropagation();
    jQuery(this.$topNavMenu.selector).toggleClass('active');
  },


  hideNavMenu: function(event) {
    if (jQuery(this.$topNavMenu.selector).hasClass('active')) {
      event.preventDefault();
      event.stopPropagation();
    }

    jQuery(this.$topNavMenu.selector).removeClass('active');
  },


  goBack: function(event) {
    event.preventDefault();
    History.back();
  },

  _getBodyClassParse: function(text) {
    var match = text.match(/<body[^<]*class=\"([^<]*)\"[^<]*>/);
    return match && match[1];
  }

};

jQuery(function() {  grid.init();  });