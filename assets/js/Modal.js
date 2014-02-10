var App = App || {};

App.modal = new function(){
	var self = this;
	var magnificPopup = $.magnificPopup

	self.init = function() {
		$(document).on('click', '[data-modal]', self.show);
		$(document).on('click', '.mfp-wrap', close)
	}

	self.show = function(e)
	{
		var $this = $(this), lang = self.getLang();

		if (!$this) return;

		magnificPopup.open({
			items: 
			{
				src: $this.data('src')+lang
			},
			type: 'ajax',

			callbacks: {
				open: App.scroller.unmousewheel,
				close: App.scroller.mousewheel
			},
			mainClass: 'mfp-fade',
			closeOnContentClick: false,
			closeOnBgClick: false
		}, 0);
		
		if (e && e.preventDefautl) e.preventDefautl();

		return false;
	}

	self.getLang = function(){
		return '?lang='+encodeURIComponent(App.i18n.get());
	}

	self.screenWidth = function () {
		return $(window).width();
	}

	var close = function(e){
		var target = e.target;
		if (target && $(target).is('.mfp-wrap')) magnificPopup.close();
	}
}
