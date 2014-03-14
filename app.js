var port = process.env.PORT || 5000;

var docpadInstanceConfiguration = {
  standalone: true,
  templateData: {
    site: {
      title : "Main page",
      subtitle : "Sport and the City",

      styles : [
        '/css/default.css',
      ],

      scripts: [
        '/js/vendor/jquery-2.0.0.js',
        '/js/vendor/jquery.nicescroll.js',
        '/js/vendor/bootstrap-modal.js',
        '/js/vendor/bootstrap-modalmanager.js',
        '/js/vendor/ResponsiveSlides.js',
        '/js/vendor/history.js',
        '/js/lib/util.js',
        '/js/lib/resizer.js',
        '/js/lib/scroller.js',
        '/js/lib/nav.js',
        '/js/app.js'
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