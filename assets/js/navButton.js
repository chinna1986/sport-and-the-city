var App = App || {};

App.navButton = new function () 
{
	var self = this;
	var global = App;
	var $next = null;
	var $prev = null;

	self.init = function ()
	{
		$next = $('#nav-next').on('click', next);
		$prev = $('#nav-prev').on('click', prev);
		$(App).on('mousewheel', reshow).trigger('mousewheel');
	}

	var prev = function (e) {
		$(document.body).trigger('mousewheel', [3,0,3]);
		if (e && e.preventDefault) e.preventDefault();
	}

	var next = function (e) {
		console.log(this);
		$(document.body).trigger('mousewheel', [-3,0,-3]);
		if (e && e.preventDefault) e.preventDefault();
	}

	var reshow = function () {
		var next_action = App.scroller.isEnd() ? 'hide' : 'show';
		var prev_action = App.scroller.isBegin() ? 'hide' : 'show';
		
		$next[next_action]();
		$prev[prev_action]();
	}
}