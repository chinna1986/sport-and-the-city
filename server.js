var docpadInstanceConfiguration = {
  port: 5000,

  plugins: {
  	ghpages: {
  		deployRemote: 'github',
  		deployBranch: 'gh-pages'
  	}
  },

  templateData: {
    site: {
      subtitle : "Sport and the City",

      styles : ['css/default.css'],

      scripts: [
        'js/vendor/jquery-2.0.0.js',
        'js/vendor/jquery.nicescroll.js',
        'js/vendor/bootstrap-modal.js',
        'js/vendor/bootstrap-modalmanager.js',
        'js/vendor/ResponsiveSlides.js',
        'js/vendor/history.js',
        'js/lib/util.js',
        'js/lib/resizer.js',
        'js/lib/grid.js',
        'js/app.js'
      ]
    },

    getPreparedTitle: function() {
      if (this.document.title) {
        return "" + this.document.title + " | " + this.site.subtitle;
      } else {
        return this.site.title;
      }
    },

    normalizeURL: function (path, language) {
      var _language = language || this.document.language || 'en';
      var _path = path || this.document.url || '/index.html';
      var _url;

      // Remove language part from start of a path
      _path = _path.replace(/(\/en\/|\/ua\/)/, '/');

      _url = '/' + _language + _path;

      return _url;
    },

    baseUrl: function (url) {
      var level = this.document.url.replace(/^\s+|^\/|\/$|\s+$/g, '').split('/').length - 1;
      var base = './';
      
      for(; level > 0; level--) {
        base += '../';
      }

      return base + url.replace(/^\//, '');
    },

    mapStylePath: function (styles) {
      var that = this;
      return styles.map(function (value) { return '<link  rel="stylesheet" href="' + that.baseUrl(value) + '" />'; });
    },

    mapScriptPath: function (scripts) {
      var that = this;
      return scripts.map(function (value) { return '<script defer="defer"  src="' + that.baseUrl(value) + '"></script>'; });
    }
  }
};

function trim(str, charlist) {
  // discuss at: http://phpjs.org/functions/trim/
  var whitespace, l = 0,
    i = 0;
  str += '';

  if (!charlist) {
    // default list
    whitespace =
      ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
  } else {
    // preg_quote custom list
    charlist += '';
    whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
  }

  l = str.length;
  for (i = 0; i < l; i++) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i);
      break;
    }
  }

  l = str.length;
  for (i = l - 1; i >= 0; i--) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);
      break;
    }
  }

  return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}

var docpadInstance = require('docpad').createInstance(docpadInstanceConfiguration, function(err) {
  if (err) {
    return console.log(err, err.stack);
  }

  return docpadInstance.action('generate server watch', function(err) {
    if (err) {
      return console.log('[docpad-error]', err, err.stack);
    }

    return console.log("Running on localhost:" + docpadInstanceConfiguration.port);
  });

});


module.export = docpadInstanceConfiguration;