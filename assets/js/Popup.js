/** Popup */

function Popup(global)
{
    global = global || {};

    var _this = this;

    var _background_template = '<div style="position: fixed;  top: 0;  right: 0;  bottom: 0;  left: 0;  z-index: 1040;  background-color: #000000;  opacity: 0.8"><div>'

    _this.init = function () {}

    /** Show modal **/
    _this.show = function (title, content) 
    {
        if (typeof title != 'string')
            title = $(this).data('popup-title');

        if (typeof content != 'string')
            content = $( $(this).data('popup-target').html() );
    }

    _this.hide = function () {}
}