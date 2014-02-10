/**
 * App - global namespace
 * @type Object
 */
var App = App || {};

/**  Create objects  **/
App.scroller = new Scroller(App);
App.playlist = new Playlist(App);

/**  Init objects  */
App.scroller.init();
App.playlist.init();

if (App.i18n) {
	$(App.i18n.init);
}

if (App.modal) {
	$(App.modal.init);
}

if (App.navButton) {
	$(App.navButton.init);
}