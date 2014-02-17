var port = process.env.PORT || 5000;

var docpadInstanceConfiguration = {
  templateData: {
    site: {
      title : "Main page",
      subtitle : "Sport and the City",

      styles : [
        'http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,cyrillic',
        '/css/default.css',
        '/css/magnific-popup.css',
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

      console.log('[normalizeURL]', _url);

      return _url;
    }
  },
  port: port
};

var docpadInstance = require('docpad').createInstance(docpadInstanceConfiguration, function(err) {
    if (err) {
        return console.log(err, err.stack);
    }
    return docpadInstance.action('generate server watch', function(err) {
        if (err) {
          return console.log(err, err.stack);
        }
        return console.log("Running on @:" + port);
    });
});