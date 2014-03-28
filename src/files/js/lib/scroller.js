var $$grid = Util.ge('grid');

function updateGridWidth() {
  var gridWidth = 0;
  var $$gridChildren;

  if (!$$grid) return ;

  $$gridChildren = $$grid.children;

  Util.each($$gridChildren, function (index, el) { 
    gridWidth += $(el).outerWidth();
  });

  $$grid.style.width = gridWidth+'px';
}

function initNiceScroll () {
  jQuery( Util.ge('grid-scroll-wrapper') ).niceScroll({
    cursorcolor: '#aaaaaa',
    cursorborder: '0px',
    cursorwidth: 8,
    cursoropacitymin: 0.6,
    cursoropacitymax: 1,
    cursordragontouch: true,
    cursorborderradius: '0px'
  });
}

function handleGridWidth () {
  if (window.gridWidthTimeoutId) {
    clearTimeout(window.gridWidthTimeoutId);
  }

  gridWidthTimeoutId = setTimeout(updateGridWidth, 40);

  $$grid.style.width = null;

  return ;
}

function showAnimateGrid() {
  var animateClass = 'showGridItem animated';
  var delayTime = 0;
  $('#grid').children().removeClass(animateClass).each(function () {
    jQuery(this).delay(delayTime).addClass(animateClass);
    delayTime += 100;
  })
}

function showAnimateLanguageControl() {
  var className = 'showLanguageControl animated';
  jQuery('#header-languages').removeClass(className).addClass(className);
}

updateGridWidth();
initNiceScroll();
showAnimateGrid();
showAnimateLanguageControl();

$$grid && jQuery(window).on('resize', handleGridWidth).trigger('resize');
