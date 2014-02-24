function updateGridWidth() {
  var $$grid = Util.ge('grid');
  var $$gridChildren = $$grid.children;
  var gridWidth = 0;

  Util.each($$gridChildren, function (index, el) { 
    gridWidth += $(el).outerWidth(); 
    // console.log('document.documentElement.className', document.documentElement.className);
    // console.log('$(el).outerWidth()',  $(el).get(0), $(el).outerWidth());
    // if (index == 1) {
      // Util.each(el.children, function (i, vv) {
        // console.log(vv, $(vv).outerWidth() );
      // })
    // }
  });
  $$grid.style.width = gridWidth+'px';
}

function initNiceScroll () {
  jQuery( Util.ge('grid-scroll-wrapper') ).niceScroll({
    cursorcolor: '#aaaaaa',
    cursorborder: '0px',
    cursoropacitymin: 0.6,
    cursoropacitymax: 1,
    cursordragontouch: true,
    cursorborderradius: '0px'
  });
}

function handleGridWidth () {
  if (window.gridWidthTimeoutId) clearTimeout(window.gridWidthTimeoutId);
  gridWidthTimeoutId = setTimeout(updateGridWidth, 40);
  return ;
}

$.fn.scroller = function () {
  updateGridWidth();
  initNiceScroll();
  jQuery(window).on('resize', handleGridWidth).trigger('resize');
};
