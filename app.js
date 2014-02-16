var port = process.env.PORT || 5001;

var docpadInstanceConfiguration = {
  templateData: {
    site: {
      title : "Main page",
      subtitle : "Sport and the City",

      styles : [
        'http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800&subset=latin,cyrillic',
        '/css/default.css',
        '/css/magnific-popup.css',
      ],
      scripts : [
        '/js/vendor/jquery-1.9.1.min.js',
        '/js/vendor/jquery.mousewheel.js',
        '/js/vendor/jquery.i18n.js',
        '/js/vendor/jquery.magnific-popup.js',
        '/js/vendor/jquery.cookie.js',
        '/js/vendor/bootstrap-carousel.js',
        '/js/vendor/video.js',
        '/js/Scroller.js',
        '/js/Playlist.js',
        '/js/Resizer.js',
        '/js/Modal.js',
        '/js/i18n.js',
        '/js/i18n-ua.js',
        '/js/i18n-en.js',
        '/js/navButton.js',
        '/js/App.js'
      ]
    },
  },
  plugins: {
    handlebars: {
      helpers: {
        getBlock: function() {
          var __slice = [].slice;
          var additional, type; type = arguments[0], additional = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          additional.pop();
          return this.getBlock(type).add(additional).toHTML();
        },

        getTitle: function() {
            if (this.document.title) {
                return '' + this.document.title + " | " + this.site.subtitle;
            } else {
                return this.site.subtitle;
            }
        },

        link: function (path) {
          if (typeof path != 'string') {
            path = this.document.url;
          }
          return '/' + this.document.language + path;
        }

      }
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