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
  }
}