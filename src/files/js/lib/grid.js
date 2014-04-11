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
    var animIsEnd = false;
    var response = null;
    var render = this.renderContent.bind(this);

    event.preventDefault();

    this.hideAnimated(function() { 
      animIsEnd = true;
      render(response);
    });

    jQuery.get(url, function(text) {
      response = jQuery('<html/>').html(text);
      if (animIsEnd) render(response); 
    }, 'text');
  },

  renderContent: function(html) {
    if (!html) return;

    html = jQuery('<html/>').html(html);

    this.$grid.html(html.find(grid.$grid.selector).html());
    this.$topMenu.html(html.find(grid.$topMenu.selector).html());
    this.updateGridWidth();
    this.showAnimated();
  }

};


jQuery(function() {
  grid.init();
});