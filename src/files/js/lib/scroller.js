"use strict";

function updateGridWidth () {
  var $grid = jQuery(Util.ge('grid'));
  var $gridItems = $grid.children();
  var gridWidth = 0;

  $gridItems.each(function (index, el) { 
    gridWidth += Util.width(el);
    console.log(el);
  });

  $grid.css({ 'width' : ''+gridWidth+'px' });
}

function updateGridScroll() {
  jQuery( Util.ge('grid-scroll-wrapper') ).niceScroll({
    cursorcolor: '#aaaaaa',
    cursorborder: '0px',
    cursoropacitymin: 0.6,
    cursoropacitymax: 1,
    cursordragontouch: true,
    cursorborderradius: '0px'
  });
}

$.fn.scroller = function () {
  updateGridWidth();
  updateGridScroll();
};