var grid = {

  init: function() {
    this.timeoutId = null;
    this.isAnimating = false;
    this._preventStateChange = false;

    this.cacheElements();
    this.bindHandler();
    this.updateGridWidth();
    this.initNiceScroll();
    this.showAnimated();
  },

  cacheElements: function() {
    this.$grid = jQuery('#grid');
    this.$modal = jQuery('#show-modal');
    this.$topMenu = jQuery('#header-languages');
    this.$headerTopics = jQuery('#header-topics');
    this.$gridScrollWrapper = jQuery('#grid-scroll-wrapper');
  },

  bindHandler: function() {
    this.$modal.on('hidden', this.onHideModal.bind(this));
    this.$modal.on('show', this.onShowModal.bind(this));
    jQuery(window).on('resize', this.windowResize.bind(this));
    jQuery(document).on('click', 'a[data-ajax]', this.loadPage.bind(this));
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

    this.$grid.css({width: ''});
  },

  showAnimated: function(callback) {
    var runCallback = function() { 
      this.isAnimating = false;
      return jQuery.isFunction(callback) ? callback.apply(this) : null;
    };

    // We cant run more that one animation in one time
    if (this.isAnimating) return;

    this.isAnimating = true;
    // this.$grid.css({width: ''});
    this.$grid.children().addClass('showEffect').removeClass('hideEffect');
    this.$topMenu.addClass('showEffect').removeClass('hideEffect');
    setTimeout(runCallback.bind(this), 500);
  },

  hideAnimated: function(callback) {
    this.$grid.children().addClass('hideEffect').removeClass('showEffect');
    this.$topMenu.addClass('hideEffect').removeClass('showEffect');
    setTimeout(callback, 500);
  },

  loadPage: function(event) {
    var $this = jQuery(event.target);
    var url = $this.attr('href');
    var target = $this.data('ajax') || 'page';

    event.preventDefault();
    if (url === location.href) return;
    History.pushState({target: target}, document.title, url);
  },

  onStateChange: function(event) {
    var state = History.getState();
    var target = (state && state.data.target) || 'page';
    var response = null;
    var renderResponse, complitedCallback, responseCallback;

    renderResponse = (target == 'modal') ? this.renderModal.bind(this) : this.renderContent.bind(this);

    complitedCallback = function() {
      if (!this.isAnimating) renderResponse(response);
    };

    responseCallback = function(text) {
      response = text;
      complitedCallback();
    };

    // Close modal, if that is open
    if (target == 'page' && this.$modal.data('modal') && this.$modal.data('modal').isShown) {
      this.$modal.modal('hide');
    }

    // Maybe we don't need any more action now. 
    // @TODO: Refactore this hook
    if (this._preventStateChange) {
      this._preventStateChange = false;
      return;
    }

    // Next page target in current page
    if (target == 'page') {

      // Close modal, if that is open
      if (this.$modal.data('modal') && this.$modal.data('modal').isShown) this.$modal.modal('hide');

      this.hideAnimated( renderResponse );
      
    }

    jQuery.get(state.cleanUrl, responseCallback);
  },

  renderModal: function(text) {
    var html = jQuery('<html/>').html(text);
    var title = html.find('title').text();

    // Update title
    if (title) document.title = title;

    // Update modal content
    this.$modal.find('.modal-body').html( html.find('article') );

    // Preventing change after close modal
    this._preventStateChange = true;

    this.$modal.modal('show');
  },

  renderContent: function(text) {
    if (!text) return;

    var html = jQuery('<html/>').html(text);
    var title = html.find('title').text();
    var bodyClassName = this._getBodyClassParse(text);

    // Reset preventing control of stateChange
    this._preventStateChange = false;

    // Change page theme
    if (bodyClassName) document.body.className = bodyClassName;
    
    // update page title
    if (title) document.title = title;

    // Update grid
    this.$grid.html(html.find(grid.$grid.selector).html());

    // Update header title
    this.$headerTopics.html(html.find(grid.$headerTopics.selector).html())

    // Update top menu
    this.$topMenu.html(html.find(grid.$topMenu.selector).html());

    // Update width
    this.updateGridWidth();

    // Animation
    this.showAnimated( this.updateGridWidth.bind(this) );
  },

  onHideModal: function() {
    // some action in future ))
  },

  onShowModal: function() {

    // Reinit sleder
    // TODO: refactore
    reinit_slider();
  },

  _getBodyClassParse: function(text) {
    var match = text.match(/<body[^<]*class=\"([^<]*)\"[^<]*>/);
    return match && match[1];
  }

};


jQuery(function() {  grid.init();  });