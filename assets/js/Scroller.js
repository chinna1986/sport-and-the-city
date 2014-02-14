/**
 * Scroller like Window8
 *
 */
function Scroller(_global){
    var _this  = this;
    var ANIMATION_TIME = 100;

    _this.$content = null;
    _this.$scroll = null;
    _this.$scroll_bar = null;
    _this.conten_width = null;
    _this.conten_inner_width = null;
    _this.conten_inner_margin_left = null;
    _this.delta = 200;
    _this.bg = null;

    var touch_started = false, // detect if a touch event is sarted
        curr_x = 0,
        curr_y = 0,
        cached_margin_left = 0,
        cached_x = 0,
        cached_y = 0;



    /* Init function */
    _this.init = function()
    {
        if (!jQuery.fn.mousewheel) throw new Error('mousewheel not found, STOP!');

        _this.$content     = $('#content');
        _this.$scroll      = $('#scroller');
        _this.$scroll_bar  = $('#scroller-bar');

        $(window).resize(_update_size_content);

        _this.mousewheel();

        _this.update();

        _this.update_bg();

        _this.init_bottom_scroll();
    };

    _this.init_bottom_scroll = function()
    {
        $('#scroller-bar').mousedown(_on_scroll_mousedown);
        $( document ).on({
            mouseup: function(e) { if (scroll_bottom_active) _on_scroll_mouseup(e); },
            mousemove: function(e) { if (scroll_bottom_active) _on_scroll_mousemove(e); }
        });
    }

    // Update content
    _this.update = function(html, load)
    {
        _update_size_content();

        _update_scroll_bar();
    }

    _this.update_bg = function ()
    {
        if (!_this.bg)
        {
            _this.bg = {
                image : $(document.body).data('background'),
                start : ( parseInt($(document.body).data('start')) || 0 ),
                end   : ( parseInt($(document.body).data('end')) || 0 )
            }
        }

        $(document.body).css('backgroundImage', _this.bg.image);

       _update_bg();
    }

    _this.mousewheel = function()
    {
        $(document.body).bind('mousewheel', _on_mousewheel);
        $(document.body).on('touchstart', _on_touchstart);
        $(document.body).on('touchend touchcancel', _on_touchend);
        $(document.body).on('touchmove', _on_touchmove);
    };
  
    _this.unmousewheel = function()
    {
        $(document.body).unbind('mousewheel', _on_mousewheel);
        $(document.body).off('touchstart', _on_touchstart);
        $(document.body).off('touchend touchcancel', _on_touchend);
        $(document.body).off('touchmove', _on_touchmove);
    };

    _this.isEnd = function()
    {
        return Math.abs(_this.conten_inner_margin_left) == (_this.conten_inner_width-_this.conten_width);
    }

    _this.isBegin = function()
    {
        return Math.abs(_this.conten_inner_margin_left) == 0;
    }

    function _on_touchstart(e)
    {
        cached_x = e.originalEvent.touches[0].pageX;
        cached_y = e.originalEvent.touches[0].pageY;
        cached_margin_left = _this.conten_inner_margin_left;
        touch_started = true;
    }

    function _on_touchend(e)
    {
        touch_started = false;
    }

    function _on_touchmove(e)
    {
        var delta_x;
        if (!touch_started) return;
        e.preventDefault();
        
        curr_x = e.originalEvent.touches[0].pageX;
        curr_y = e.originalEvent.touches[0].pageY;

        delta_x = curr_x - cached_x;
        _this.conten_inner_margin_left = cached_margin_left + delta_x;
        if ( Math.abs(_this.conten_inner_margin_left) > _this.conten_inner_width - _this.conten_width )
            _this.conten_inner_margin_left = -1 * _this.conten_inner_width + _this.conten_width;
        if (_this.conten_inner_margin_left > 0)
            _this.conten_inner_margin_left = 0;
        _update_position();
        _update_scroll_bar();
        $(App).trigger('mousewheel');
    }

    function _update_size_content()
    {
        _this.conten_inner_width = 0;
        _this.conten_width = _this.$content.width();
        _this.conten_inner_margin_left = 0;

        _this.$content.children('ul').children('li:visible').each(function()
        {
            _this.conten_inner_width += $(this).width();
            _this.conten_inner_width += parseInt($(this).css('margin-right'));
            _this.conten_inner_width += parseInt($(this).css('margin-left'));
        })

        _update_position();

        _update_scroll_bar();
    }


    function _update_scroll_bar(without_animation)
    {
        var width, margin_left;

        width = (_this.conten_width / _this.conten_inner_width) * 100;

        margin_left  = (_this.conten_inner_margin_left) / (_this.conten_inner_width - _this.conten_width );
        margin_left *= -100;
        margin_left -= (margin_left * width / 100);

        if (_this.conten_inner_width < _this.conten_width)
        {
            return _this.$scroll_bar.css('width', '0%');
        }
        else
        {
            _this.$scroll_bar.css('width', width +'%');
        }

        if (without_animation) {
            _this.$scroll_bar
                .css('margin-left', margin_left + '%');
        } else {
            _this.$scroll_bar
                .stop().animate({'margin-left' : margin_left + '%'}, ANIMATION_TIME);
        }
    }

    function _update_position(fast)
    {
        if (fast) {
            _this.$content.children('ul')
                .css('width', _this.conten_inner_width + 'px')
                .css('margin-left', _this.conten_inner_margin_left + 'px');
        } else {
            _this.$content.children('ul')
                .css('width', _this.conten_inner_width + 'px')
                .stop().animate({'margin-left' : _this.conten_inner_margin_left + 'px'}, ANIMATION_TIME);
        }
                // .css('margin-left', _this.conten_inner_margin_left + 'px');
    }


    function _on_mousewheel(event, delta, deltaX, deltaY) 
    {
        _this.conten_inner_margin_left += _this.delta * deltaY;

        if ( Math.abs(_this.conten_inner_margin_left) > _this.conten_inner_width - _this.conten_width )
            _this.conten_inner_margin_left = -1 * _this.conten_inner_width + _this.conten_width;

        if (_this.conten_inner_margin_left > 0)
            _this.conten_inner_margin_left = 0;

        _update_position();

        _update_scroll_bar();

        _update_bg();

        $(App).trigger('mousewheel');
    }

    function _update_bg ()
    {
        var progress, background_y;

        progress = (_this.conten_inner_margin_left) / (_this.conten_inner_width - _this.conten_width );

        progress = Math.abs(progress) || 0;

        background_y = _this.bg.start + (_this.bg.end - _this.bg.start)*progress;

        $(document.body).css('background-position', background_y + 'px 0px');
    }


    var scroll_bottom_active = false,
        scroll_bottom_x = 0,
        scroll_bottom_range = 0,
        scroll_bar_width,
        scroll_bar_margin;

    function _on_scroll_mousedown(e)
    {
        scroll_bottom_active = true;
        scroll_bottom_x = Math.round(e.clientX || e.offsetX);
        scroll_bar_width = $(this).width();
        scroll_bottom_range = _this.$scroll.width() - scroll_bar_width;
        scroll_bar_margin = parseInt(_this.$scroll_bar.css('margin-left'));

        $(document.body).addClass('disable-select-text');
    }

    function _on_scroll_mousemove(e)
    {
        var scroll_bottom_current = Math.round(e.clientX || e.offsetX);

        var delta = scroll_bottom_current - scroll_bottom_x;

        var delta_changed = scroll_bar_margin + delta;

        var delta_procent = delta_changed / scroll_bottom_range;

        delta_procent = Math.min(delta_procent , 1);

        delta_procent = Math.max(delta_procent , 0);

// console.log('onmove ***********');
// console.log('scroll_bottom_x = ', scroll_bottom_x);
// console.log('scroll_bottom_current (offsetX) = ', e.offsetX);
// console.log('scroll_bottom_current (clientX) = ', e.clientX);
// console.log('scroll_bottom_current (clientX) = ', scroll_bottom_current);
// console.log('delta = ', delta);
// console.log('delta_changed = ', delta_changed);
// console.log('scroll_bottom_range = ', scroll_bottom_range);
// console.log('delta_procent = ', delta_procent);
// console.log('_this.conten_inner_margin_left = ', _this.conten_inner_margin_left);

        _this.conten_inner_margin_left = (_this.conten_width - _this.conten_inner_width) * delta_procent

        _this.conten_inner_margin_left = Math.round(_this.conten_inner_margin_left);

// console.log('onmove: _this.conten_inner_margin_left = ', _this.conten_inner_margin_left);
// change = (scroll_bottom_current - scroll_bottom_x) / scroll_bottom_range;
// change = Math.round(change);
// console.log(scroll_bottom_current - scroll_bottom_x, scroll_bottom_range, (scroll_bottom_current - scroll_bottom_x) / scroll_bottom_range);

// Math.abs(_this.conten_inner_margin_left) > _this.conten_inner_width - _this.conten_width )

        _update_position(true);
        _update_scroll_bar(true);
        _update_bg();
    }

    function _on_scroll_mouseup(e)
    {
        if (scroll_bottom_active) {
            $(document.body).removeClass('disable-select-text');
        }

        scroll_bottom_active = false;
    }

}