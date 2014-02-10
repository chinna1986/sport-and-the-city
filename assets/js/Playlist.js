
function Playlist (global) {
	global = global || {};
	var _this = this;


	_this.init = function()
	{
		$(document).on('click', '[data-play]', _this.play);
	}


	_this.play = function()
	{
		var $this = $(this);
		var _target = $this.data('target');
		var player  = _V_(_target);
		var src = $this.data('src');

		event.preventDefault();

		if (!player || typeof src != 'object')
			return false;

		if (!player.paused())
			player.pause();

		// console.log('player.posterImage', player.posterImage);

		// { type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" }
		// [
		//   { type: "video/mp4", src: "http://www.example.com/path/to/video.mp4" },
		//   { type: "video/webm", src: "http://www.example.com/path/to/video.webm" },
		//   { type: "video/ogg", src: "http://www.example.com/path/to/video.ogv" }
		// ]
 		player.src( $this.data('src') );

		player.play();
	}


}