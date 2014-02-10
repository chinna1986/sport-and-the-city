var App = App || {};

App.i18n = new function(){
	var _this = this;
	var _current;
	var _dictionaries = {};
	var _default_lang = 'ua';
	var _true_lang = ['en', 'ua'];


	_this.init = function () 
	{
		$(document).on('click', '[data-lang]', _update_content);

		if ('onhashchange' in window) {
			window.onhashchange = function () {
				_set();
				_update_content();
			}
		}

		_update_content();
	}


	_this.add_dictionary = function(lang, dictionary) {
		_dictionaries[lang] = dictionary || {};
	}


	_this.translate = function ()
	{
		var $this, i18n, i18n_params, i18n_src;

		$('[data-i18n]').each(function(){
			$this       = $(this);
			i18n        = $this.data('i18n') || '';
			i18n_params = $this.data('i18n-params') || {};
			i18n_src    = $this.data('i18n-src');

			if (i18n_src) {
				i18n_src = i18n_src+'-'+_current;
				i18n_src = $(i18n_src);
			}

			if (i18n_src) {
				$this.html(i18n_src.html());
			} else if ($this.is('div.title')) {
				i18n = $('<p></p>').text(i18n);
				$this.html( i18n );
			} else {
				var _t = $.i18n._(i18n, i18n_params);
				var el = $this.get(0);

				if (el && _t) el.innerText = _t
				// $this._t( i18n, i18n_params );
			}
		});
	};


	function _update_content(e){
		if (e && e.preventDefault) e.preventDefault();

		_set( $(this).data('lang') );

		$('[data-lang]').removeClass('active').filter('[data-lang='+_get()+']').addClass('active');

		_this.translate();
	}


	function _detect_lang() 
	{
		var hash, language;

		hash = window.location.hash.replace(/#/i, '');

		if (hash && $.inArray(hash, _true_lang) != -1) {
			language = hash;
		} else {
			language = $.cookie('language');
		}

		return  language ? language : default_lang;
	}


	// Current language
	function _get()
	{
		if (!_current) _current = _detect_lang();

		return _current;
	}

	_this.get = _get;


	function _set(language){
		var onhashchange = window.onhashchange;

		if (!language) language = _detect_lang();

		_current  = language;

		$.cookie('language', language, { expires: 365, path: '/' });

		// Change hash
		window.onhashchange = null;
		window.location.hash = '#'+_current;
		window.onhashchange = onhashchange;

		$('a').each(function(){
			if (this.href.indexOf('#') > -1 && this.href.length - this.href.indexOf('#') <= 3) { 
				return false;
			}
			if (this.href.indexOf('#') > -1) {
				this.href = this.href.substring(0, this.href.lastIndexOf('#'));
			}
			this.href += window.location.hash;
		})

		$.i18n.setDictionary(_dictionaries[language]);
	}
}