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
    History.Adapter.bind(window,'statechange', jQuery.proxy(this.statechange, this));
  }

  /*!
   * Open modal with content form remote url
   */
  Navigator.prototype.modal = function(url, e, pushstate) {
    var pathname = getPathname(url);

    if (pushstate == null) {
      pushstate = true;
    }

    preventEvent(e || window.event);

    this.$modal.data('modal') && this.$modal.data('modal').destroy() && this.$modal.data('modal', false);

    this.$modal.modal({ remote: pathname + ' article' });

    // this.$modal.modal('loading');

    this.$modal.off('hidden').on('hidden', jQuery.proxy(this.modalHidden, this));

    this.$modal.off('loaded').on('loaded', jQuery.proxy(this.modalLoaded, this));

    // if (!pushstate) {
    //   History.pushState({oldTitle: document.title}, null, "?modal=" + encodeURIComponent(remotePath) );
    // }
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
  Navigator.prototype.statechange = function(event) {
    var state = History.getState();
  };

  /*!
   * Handle event of hidden modal
   */
  Navigator.prototype.modalHidden = function(first_argument) {
    var state = History.getState();
    var url = Util.parseUrl(location.href);
    // History.pushState({action: 'hideModal'}, state.data.oldTitle, url.pathname);
  };

  /*!
   * Handler after content loading was finished
   */
  Navigator.prototype.modalLoaded = function(event, responseText, textStatus, XMLHttpRequest) {
    // this.$modal.modal('show');
    document.title = Util.getTitle(responseText);
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
