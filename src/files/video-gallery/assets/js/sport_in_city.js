var sicVideo = (function () {
    var playerStack = [];

    function init () {
        jQuery('.sic_replace_video').each(replacePlayers);
    }

    function replacePlayers() {
        var $this = $(this);
        var $wrapper = $this.parents('.media-wrapper');
        var $$video;

        if (!sicVideo.config && !sicVideo.config[this.id] ) return;

        $$video = factoryVideoElement(sicVideo.config[this.id]);
        $wrapper.empty();
        $wrapper.append($$video);

        jQuery($$video).mediaelementplayer({
            defaultVideoWidth: 600,
            defaultVideoHeight: 338,
            videoWidth: 600,
            videoHeight: 338
        });
    }

    function factoryVideoElement(options) {
        var $$video = document.createElement('video');
        $$video.poster = options.poster || '';
        $$video.controls = true;
        $$video.preload = 'none';
        $$video.width = 600;
        $$video.height = 338;
        $$flashFallback = factoryFlashFallback(options);

        if (options.files) {
            jQuery.each(options.files, function (type, src) {
                var $$source = document.createElement('source');
                $$source.src = src;
                $$source.type = type;
                $$video.appendChild($$source);
            });
        }

        $$video.appendChild($$flashFallback);

        console.log($$video.width, $$video.height, $$video);
        return $$video;
    }

    function factoryFlashFallback (options) {
        var $$object = document.createElement('object');

        $$object.type = 'application/x-shockwave-flash';
        $$object.data = 'assets/js/mediaelement/build/flashmediaelement.swf';
        $$object.width = '600';
        $$object.height = '338';

        var $$param = document.createElement('param');
        $$param.name = 'movie';
        $$param.value = $$object.data;
        $$object.appendChild($$param);

        if (options && options.files['video/mp4']) {
            var $$paramMP4 = document.createElement('param');
            $$paramMP4.name = 'flashvars';
            $$paramMP4.value = 'controls=true&file=' + encodeURIComponent(options.files['video/mp4']);
            $$object.appendChild($$paramMP4);
        }

        var $$poster = document.createElement('img');
        $$poster.title = 'No video playback capabilities';
        $$poster.width = '600';
        $$poster.height = '338';
        $$object.appendChild($$poster);

        return $$object;
    }


    function stopAllPlayser() {}

    return {
        init: init
    };

}) ();



        // var sic_video = {};

        // sic_video.selector = 
        // sic_video.players = [];

        // sic_video.init = function () {
        //     jQuery(sic_video.selector).each(sic_video.replace_video);
        // };

        // sic_video.replace_video = function () {
        //     var $this = $(this),
        //         id = $this.attr('id'),
        //         $wrapper,
        //         $$player,
        //         options;

        //     $wrapper = $this.parents('.media-wrapper');
        //     options = sic_video.config[id];
        //     $$player = sic_video.get_player(options);

        //     while($wrapper.get(0).firstChild) {
        //         $wrapper.get(0).removeChild($wrapper.get(0).firstChild);
        //     }

        //     $wrapper.get(0).appendChild($$player);
        // };

        // sic_video.get_player = function (options) {
        //     var $$container = document.createElement('div');
        //     var $$video = document.createElement('video');

        //     $$video.id = 'example_video_' + Math.round( 1000 * Math.random() );
        //     $$video.className = 'video-js vjs-default-skin';
        //     $$video.controls = true;
        //     $$video.preload = "none";
        //     $$video.setAttribute('data-setup', '{"example_option":true, "techOrder": ["flash", "html5"]}');

            
        //     var src_mp4 = document.createElement('source');
        //         src_mp4.src = "http://video-js.zencoder.com/oceans-clip.mp4";
        //         src_mp4.type = 'video/mp4';
        //         $$video.appendChild(src_mp4);
        //     var src_webm = document.createElement('source');
        //         src_webm.src = "http://video-js.zencoder.com/oceans-clip.webm";
        //         src_webm.type = 'video/webm';
        //         $$video.appendChild(src_webm);
        //     var src_ogg = document.createElement('source');
        //         src_ogg.src = "http://video-js.zencoder.com/oceans-clip.ogv";
        //         src_ogg.type = 'video/ogg';
        //         $$video.appendChild(src_ogg);

        //     $$container.appendChild($$video);

        //     return $$container;
        //  width="640" height="264"
        //   poster="http://video-js.zencoder.com/oceans-clip.png"
        //   data-setup='{"example_option":true}'>
        //  <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
        //  <source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
        //  <source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
        // </video>


            // var $container = jQuery('<div/>', {
            //  'class'     : 'player-container'
            // });

            // var $video, videoEl = document.createElement('video');

            // videoEl.className = 'video-js vjs-default-skin';
            // videoEl.controls = true;
            // videoEl.preload = 'none';
            // videoEl.poster = options&&options.poster;

            // sic_video.players.push(videoEl);

            // $video = jQuery(videoEl).on('play', sic_video.stop_all_player);

            // jQuery.each(options.files, function(key, value) {
            //  $video.append( $('<source/>', {type: key, src: value }) );
            // });

            // return $container.append($video);
        // };

        // sic_video.stop_all_player = function () {
        //     for (var i = sic_video.players.length - 1; i >= 0; i--) {
        //         if (sic_video.players[i] != this) {
        //             sic_video.players[i].pause();
        //         }
        //     };
        // };

sicVideo.config = {

    1: {
        
        },

    2: {
            files : {
                'video/webm' : 'files/1946_1/1946_1.webm',
                'video/mp4' : 'files/1946_1/1946_1.mp4',
                'video/ogg' : 'files/1946_1/1946_1.ogg'

            },
            poster: 'files/1946_1/1946_1.jpg'
        },
    3: {
            files : {
                'video/webm' : 'files/1946_4/1946_4.webm',
                'video/mp4' : 'files/1946_4/1946_4.mp4',
                'video/ogg' : 'files/1946_4/1946_4.ogg'

            },
            poster: 'files/1946_4/1946_4.jpg'
        },
    4: {
            files : {
                'video/webm' : 'files/1947_5/1947_5.webm',
                'video/mp4' : 'files/1947_5/1947_5.mp4',
                'video/ogg' : 'files/1947_5/1947_5.ogg'

            },
            poster: 'files/1947_5/1947_5.jpg'
        },
    5: {
            files : {
                'video/webm' : 'files/1947_7/1947_7.webm',
                'video/mp4' : 'files/1947_7/1947_7.mp4',
                'video/ogg' : 'files/1947_7/1947_7.ogg'

            },
            poster: 'files/1947_7/1947_7.jpg'
        },
    6: {
            files : {
                'video/webm' : 'files/1951_4/1951_4.webm',
                'video/mp4' : 'files/1951_4/1951_4.mp4',
                'video/ogg' : 'files/1951_4/1951_4.ogg'

            },
            poster: 'files/1951_4/1951_4.jpg'
        },
    7: {
            files : {
                'video/webm' : 'files/1953_3/1953_3.webm',
                'video/mp4' : 'files/1953_3/1953_3.mp4',
                'video/ogg' : 'files/1953_3/1953_3.ogg'

            },
            poster: 'files/1953_3/1953_3.jpg'
        },
    8: {
            files : {
                'video/webm' : 'files/1953_5/1953_5.webm',
                'video/mp4' : 'files/1953_5/1953_5.mp4',
                'video/ogg' : 'files/1953_5/1953_5.ogg'

            },
            poster: 'files/1953_5/1953_5.jpg'
        },
    9: {
            files : {
                'video/webm' : 'files/1953_12/1953_12.webm',
                'video/mp4' : 'files/1953_12/1953_12.mp4',
                'video/ogg' : 'files/1953_12/1953_12.ogg'

            },
            poster: 'files/1953_12/1953_12.jpg'
        },
    10: {
            files : {
                'video/webm' : 'files/1956_6/1956_6.webm',
                'video/mp4' : 'files/1956_6/1956_6.mp4',
                'video/ogg' : 'files/1956_6/1956_6.ogg'

            },
            poster: 'files/1956_6/1956_6.jpg'
        },
    11: {
            files : {
                'video/webm' : 'files/1959_5/1959_5.webm',
                'video/mp4' : 'files/1959_5/1959_5.mp4',
                'video/ogg' : 'files/1959_5/1959_5.ogg'

            },
            poster: 'files/1959_5/1959_5.jpg'
        },
    12: {
            files : {
                'video/webm' : 'files/1962_2/1962_2.webm',
                'video/mp4' : 'files/1962_2/1962_2.mp4',
                'video/ogg' : 'files/1962_2/1962_2.ogg'

            },
            poster: 'files/1962_2/1962_2.jpg'
        },
    13: {
            files : {
                'video/webm' : 'files/1964_6/1964_6.webm',
                'video/mp4' : 'files/1964_6/1964_6.mp4',
                'video/ogg' : 'files/1964_6/1964_6.ogg'

            },
            poster: 'files/1964_6/1964_6.jpg'
        },
    14: {
            files : {
                'video/webm' : 'files/1965_6/1965_6.webm',
                'video/mp4' : 'files/1965_6/1965_6.mp4',
                'video/ogg' : 'files/1965_6/1965_6.ogg'

            },
            poster: 'files/1965_6/1965_6.jpg'
        },
    15: {
            files : {
                'video/webm' : 'files/1968_2/1968_2.webm',
                'video/mp4' : 'files/1968_2/1968_2.mp4',
                'video/ogg' : 'files/1968_2/1968_2.ogg'

            },
            poster: 'files/1968_2/1968_2.jpg'
        },
    16: {
            files : {
                'video/webm' : 'files/1968_9/1968_9.webm',
                'video/mp4' : 'files/1968_9/1968_9.mp4',
                'video/ogg' : 'files/1968_9/1968_9.ogg'

            },
            poster: 'files/1968_9/1968_9.jpg'
        },
    17: {
            files : {
                'video/webm' : 'files/1968_12/1968_12.webm',
                'video/mp4' : 'files/1968_12/1968_12.mp4',
                'video/ogg' : 'files/1968_12/1968_12.ogg'

            },
            poster: 'files/1968_12/1968_12.jpg'
        },
    18: {
            files : {
                'video/webm' : 'files/1969_5/1969_5.webm',
                'video/mp4' : 'files/1969_5/1969_5.mp4',
                'video/ogg' : 'files/1969_5/1969_5.ogg'

            },
            poster: 'files/1969_5/1969_5.jpg'
        },
    19: {
            files : {
                'video/webm' : 'files/1970_6/1970_6.webm',
                'video/mp4' : 'files/1970_6/1970_6.mp4',
                'video/ogg' : 'files/1970_6/1970_6.ogg'

            },
            poster: 'files/1970_6/1970_6.jpg'
        },
    20: {
            files : {
                'video/webm' : 'files/1970_7/1970_7.webm',
                'video/mp4' : 'files/1970_7/1970_7.mp4',
                'video/ogg' : 'files/1970_7/1970_7.ogg'

            },
            poster: 'files/1970_7/1970_7.jpg'
        },
    21: {
            files : {
                'video/webm' : 'files/1973_4/1973_4.webm',
                'video/mp4' : 'files/1973_4/1973_4.mp4',
                'video/ogg' : 'files/1973_4/1973_4.ogg'

            },
            poster: 'files/1973_4/1973_4.jpg'
        },
    22: {
            files : {
                'video/webm' : 'files/1974_4/1974_4.webm',
                'video/mp4' : 'files/1974_4/1974_4.mp4',
                'video/ogg' : 'files/1974_4/1974_4.ogg'

            },
            poster: 'files/1974_4/1974_4.jpg'
        },
    23: {
            files : {
                'video/webm' : 'files/1974_7/1974_7.webm',
                'video/mp4' : 'files/1974_7/1974_7.mp4',
                'video/ogg' : 'files/1974_7/1974_7.ogg'

            },
            poster: 'files/1974_7/1974_7.jpg'
        },
    24: {
            files : {
                'video/webm' : 'files/1975_4/1975_4.webm',
                'video/mp4' : 'files/1975_4/1975_4.mp4',
                'video/ogg' : 'files/1975_4/1975_4.ogg'

            },
            poster: 'files/1975_4/1975_4.jpg'
        },
};