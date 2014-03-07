/*!
 * Navigator for AJAX serfing between pages)
 */
!function (jQuery, History, window) {

  function preventEvent(e) {
    return e && (e.preventDefault ? e.preventDefault() : (e.returnValue = false));
  }

  function getPathname (url) {
    url = Util.parseUrl(url)
    return url.pathname + url.search;
  }

  function Navigator () {
    this.$modal = $('#show-modal');
    this.$grid  = $('#grid');
    this.proxyingMethods();
    this.startListenHistory();
    History.Adapter.trigger(window , 'statechange');
  }

  Navigator.prototype.proxyingMethods = function() {
    this.statechange = jQuery.proxy(this._statechange, this);
    this.modalHidden = jQuery.proxy(this._modalHidden, this);
    this.modalLoaded = jQuery.proxy(this._modalLoaded, this);
  };

  /*!
   * Open modal with content form remote url
   */
  Navigator.prototype.modal = function(url, e, pushstate) {
    var pathname = getPathname(url);

    if (pushstate == null) {
      pushstate = true;
    }

    preventEvent(e || window.event);

    this.$modal.data('modal') 
      && this.$modal.data('modal').hide() /* Hide modal, if is open */
      && this.$modal.data('modal').destroy() /* Destroy object */
      && this.$modal.data('modal', false); /* Remove object instance */

    // url param is require to open modal
    if (!url) {
      return false
    }

    this.$modal.modal({ remote: pathname + ' article' });

    this.$modal.modal('loading');

    this.$modal.off('hidden', this.modalHidden).on('hidden', this.modalHidden);

    this.$modal.off('loaded', this.modalLoaded).on('loaded', this.modalLoaded);

    if (pushstate) {
       History.pushState({oldTitle: document.title}, null, "?modal=" + encodeURIComponent(pathname) );
    }
  };

  /*!
   * Change page content
   */
  Navigator.prototype.go = function(url, e, pushstate) {

    if (pushstate == null) {
      pushstate = true;
    }

    preventEvent(e || window.event);
    // body...
  };

  /*!
   * Handler of changes HistoryAPI state
   */
  Navigator.prototype._statechange = function(event) {
    var state = History.getState();
    var modalUrl = Util.getSearchParam('modal', state.cleanUrl);

    this.modal(modalUrl, null, false);
  };

  /*!
   * Handle event of hidden modal
   */
  Navigator.prototype._modalHidden = function(first_argument) {
    var state = History.getState();
    var url = Util.parseUrl(location.href);

    History.pushState({action: 'hideModal'}, state.data.oldTitle, url.pathname);
  };

  /*!
   * Handler after content loading was finished
   */
  Navigator.prototype._modalLoaded = function(event, responseText, textStatus, XMLHttpRequest) {
    this.$modal.modal('show');
    this.$modal.data('modal').isLoading && this.$modal.data('modal').loading();

    // Old school
    document.title = Util.getTitle(responseText);
  };

  Navigator.prototype.startListenHistory = function(first_argument) {
    History.Adapter.bind(window, 'statechange', jQuery.proxy(this.statechange, this));
  };

  Navigator.prototype.stopListenHistory = function(first_argument) {
    History.Adapter.unbind(window, 'statechange', jQuery.proxy(this.statechange, this));
  };

  window.nav = new Navigator();

} (jQuery, History, window)

// (function (jQuery, window, History) {
//   var $modal;

//   var openModal = function (url, event, ignoreHistory) {
//     var remotePath;

//     url = Util.parseUrl(url);
//     remotePath = url.pathname + url.search;

//     event && (event.preventDefault ? event.preventDefault() : (event.returnValue = false));

//     if ($modal.data('modal')) {
//       $modal.modal('destroy');
//       $modal.data('modal', false);
//     }

//     $modal.modal({ remote: remotePath + ' ' + 'article' });

//     $modal.on('hidden', onHideModal);

//     $modal.on('loaded', function (event, responseText, textStatus, XMLHttpRequest) {
//       var title = Util.getTitle(responseText);      
      
//       console.log('[loaded]');
      
//       $modal.modal('show');
//       $modal.modal('removeLoading');

//       if (!ignoreHistory) History.pushState({oldTitle: document.title}, title, "?modal=" + encodeURIComponent(remotePath) );

//     });
//   };


//   var onHideModal = function () {
//     var url = Util.parseUrl(location.href);
//     History.pushState(null, oldTitle, url.pathname);
//   }


//   var changePage = function (url, event) {
//   };


//   var init = function () {
//     $modal = $('#show-modal');
//     oldTitle = document.title;

//     // If in url have path for modal, show they
//     if (location.search.search('modal=') > -1) {
//       openModal(Util.getSearchParam('modal'), null, true);
//     }

//     History.Adapter.bind(window,'statechange', _onStateChange);
//   };

//   var _onStateChange = function () {
//     var state = History.getState();
//   };

//   window.nav = {
//     modal : openModal,
//     go    : changePage,
//     init  : init
//   };

// })(jQuery, window, History);

// jQuery(nav.init);
