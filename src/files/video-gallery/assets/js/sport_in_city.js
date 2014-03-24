var sic_video = {};

sic_video.selector = '.sic_replace_video';
sic_video.players = [];

sic_video.init = function () {
	jQuery(sic_video.selector).each(sic_video.replace_video);
};

sic_video.replace_video = function () {
	var $this, $wrapper, $player, id, options;

	$this = $(this);
	$wrapper = $this.parents('.media-wrapper');
	id = $this.attr('id');
	options = sic_video.config[id];
	$player = sic_video.get_player(options);

	$wrapper.html( $player )
};

sic_video.get_player = function (options) {
	var $container = jQuery('<div/>', {
		'class'     : 'player-container'
	});

	var $video, videoEl = document.createElement('video');

	videoEl.className = 'video-js vjs-default-skin';
	videoEl.controls = true;
	videoEl.preload = 'none';
	videoEl.poster = options&&options.poster;

	sic_video.players.push(videoEl);

	$video = jQuery(videoEl).on('play', sic_video.stop_all_player);

	jQuery.each(options.files, function(key, value) {
		$video.append( $('<source/>', {type: key, src: value }) );
	});

	return $container.append($video);
};

sic_video.stop_all_player = function () {
	for (var i = sic_video.players.length - 1; i >= 0; i--) {
		if (sic_video.players[i] != this) {
			sic_video.players[i].pause();
		}
	};
};
// 	var players  = [];

// 	self.init = function () {
// 		$(selector).each(self.replace_video);
// 	}

// 	self.stop_all_player = function () {
// 		jQuery.each(players, function (index, player) {
// 			if (player.playing) player.pause();
// 		});
// 	}

// 	self.replace_video = function () {
// 		var $this = $(this),
// 			$parent = $this.parents('.media-wrapper'),
// 			id = $this.attr('id'),
// 			params = self.config[id],
// 			$player;

// 		if (!params) return;

// 		$player = get_player(params);

// 		$parent.empty().html($player);
// 		$player.flowplayer();

// 		$player.bind('load', function () { console.log('[load]') });
// 		$player.bind('ready', function () { console.log('[ready]') });
// 		$player.bind('seek', function () { console.log('[seek]') });
// 		$player.bind('click', function () { self.stop_all_player(); });
// 		players.push($player.data('flowplayer'));
// 	}

// 	var get_player = function (params) {
// 		var $div = jQuery('<div/>', {
// 			'class': 'player-wrapper',
// 			'data-swf': 'flowplayer/flowplayer.swf'
// 		});
// 		var $video = jQuery('<video/>', {
// 			preload: "none", 
// 			class: 'player-element'
// 		});

// 		// $div.attr('data-analytics', "UA-41943151-1");

// 		if (params && params.poster) {
// 			$video.attr('poster', params.poster);
// 		}

// 		$.each(params.files, function(key, value) {
// 			$video.append( $('<source/>', {
// 				type: key,
// 				src: value
// 			}) );
// 		});

// 		return $div.append($video);
// 	}


// }

sic_video.config = {

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
}