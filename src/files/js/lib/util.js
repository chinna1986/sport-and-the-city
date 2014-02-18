var Util = {

  ge: function (el) {
    return (typeof el == 'string' || typeof el == 'number') ? document.getElementById(el) : el;
  },

  width: function (el) {
    el = Util.ge(el);
    return el && el.offsetWidth;
  }
}