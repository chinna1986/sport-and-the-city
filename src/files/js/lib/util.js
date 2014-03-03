var Util = {

  ge: function (el) {
    return (typeof el == 'string' || typeof el == 'number') ? document.getElementById(el) : el;
  },

  width: function (el) {
    el = Util.ge(el);
    return el && jQuery.fn.width.apply([el]);
  },

  each: function (object, callback) {
    var name, i = 0, length = object.length;

    if (length === undefined) {
      for (name in object)
        if (callback.call(object[name], name, object[name]) === false)
          break;
    } else {
      for (var value = object[0];
        i < length && callback.call(value, i, value) !== false;
          value = object[++i]) {}
    }

    return object;
  },

  parseUrl: function (url) {
    var a = document.createElement('a');
    a.href = url;
    return a;
  },

  /**
   * Get value from search string. If str param isn't set, use location.search
   */
  getSearchParam: function (name, str) {
    var search = str || location.search;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },

  getTitle: function (text) {
    var reg = new RegExp('<title[^>]*>([^<]+)</title>');
    var result = reg.exec(text);

    return result && result[1];
  }
}