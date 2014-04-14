var grid = {

  init: function() {
    this.timeoutId = null;
    this.cacheElements();
    this.bindHandler();
    this.updateGridWidth();
    this.initNiceScroll();
    this.showAnimated();
  },

  cacheElements: function() {
    this.$grid = jQuery('#grid');
    this.$topMenu = jQuery('#header-languages');
    this.$gridScrollWrapper = jQuery('#grid-scroll-wrapper');
  },

  bindHandler: function() {
    jQuery(window).on('resize', this.windowResize.bind(this));
    jQuery(document).on('click', 'a[data-ajax]', this.loadPage.bind(this));
    History.Adapter.bind(window, 'statechange', this.statechange.bind(this));
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
    this.$grid.css({width: ''});
    this.$grid.children().addClass('showEffect').removeClass('hideEffect');
    this.$topMenu.addClass('showEffect').removeClass('hideEffect');
    setTimeout(callback, 500);
  },

  hideAnimated: function(callback) {
    this.$grid.children().addClass('hideEffect').removeClass('showEffect');
    this.$topMenu.addClass('hideEffect').removeClass('showEffect');
    setTimeout(callback, 500);
  },

  loadPage: function(event) {
    var $this = jQuery(event.target);
    var url = $this.attr('href');

    event.preventDefault();
    if (url === location.href) return;
    History.pushState({target: 'page'}, null, url);
  },

  renderContent: function(text) {
    if (!text) return;

    var html = jQuery('<html/>').html(text);
    var title = html.find('title').text();
    var bodyClassName = text.match(/<body[^<]*class=\"([^<]*)\"[^<]*>/);

    // Change page theme
    if (bodyClassName && bodyClassName[1]) document.body.className = bodyClassName[1];
    
    // update page title
    if (title) document.title = title;

    // Update grid and their width
    this.$grid.html(html.find(grid.$grid.selector).html());

    // Update top menu
    this.$topMenu.html(html.find(grid.$topMenu.selector).html());

    // Animation
    this.showAnimated( this.updateGridWidth.bind(this) );
  },

  statechange: function(event) {
    var state = History.getState();
    var animationIsEnd = false;
    var response = null;
    var renderContent = this.renderContent.bind(this);

    this.hideAnimated(function() { 
      animIsEnd = true;
      renderContent(response);
    });

    jQuery.get(state.cleanUrl, function(text) {
      response = text;

      if (animIsEnd) render(response);
    }, 'text');
  }

};


jQuery(function() {  grid.init();  });