(function (jQuery, window, History) {
  var $modal;
  var oldTitle;


  var openModal = function (url, event, ignoreHistory) {
    var remotePath;

    url = Util.parseUrl(url);
    remotePath = url.pathname + url.search;
    oldTitle = document.title;

    event && (event.preventDefault ? event.preventDefault() : (event.returnValue = false));

    if ($modal.data('modal')) {
      $modal.modal('destroy');
      $modal.data('modal', false);
    }

    $modal.modal({ remote: remotePath + ' ' + 'article' });

    $modal.on('hidden', onHideModal);

    $modal.on('loaded', function (event, responseText, textStatus, XMLHttpRequest) {
      var title = Util.getTitle(responseText);      
      
      console.log('[loaded]');
      
      $modal.modal('show');
      $modal.modal('removeLoading');

      if (!ignoreHistory) History.pushState(null, title, "?modal=" + encodeURIComponent(remotePath) );

    });
  };


  var onHideModal = function () {
    var url = Util.parseUrl(location.href);
    History.pushState(null, oldTitle, url.pathname);
  }


  var changePage = function (url, event) {
  };


  var init = function () {
    $modal = $('#show-modal');
    oldTitle = document.title;

    // If in url have path for modal, show they
    if (location.search.search('modal=') > -1) {
      openModal(Util.getSearchParam('modal'), null, true);
    }

    History.Adapter.bind(window,'statechange', _onStateChange);
  };

  var _onStateChange = function () {
    var state = History.getState();
  };

  window.nav = {
    modal : openModal,
    go    : changePage,
    init  : init
  };

})(jQuery, window, History);

jQuery(nav.init);


//     var _modalLoadedHandler = function () {
//       $modal.modal('show');
//       $modal.modal('removeLoading');
//       if (!ignoreHistory) History.pushState(null, null, "?showModal="+url);
//     }

//     event.preventDefault ? event.preventDefault() : (event.returnValue = false);

//     if ($modal.data('modal')) {
//       $modal.('destroy');
//       $modal.data('modal', false);
//     }

//     $modal.modal({ remote: remotePath }).on('loaded', _modalLoadedHandler);

// ;function(window, $) {

//   function showRemoteContent(url, event, ignoreHistory) {
//     var $modal = $('#show-modal');
//     var remotePath = url + ' ' + '#article';
//     var _modalLoadedHandler = function () {
//       $modal.modal('show');
//       $modal.modal('removeLoading');
//       if (!ignoreHistory) History.pushState(null, null, "?showModal="+url);
//     }

//     event.preventDefault ? event.preventDefault() : (event.returnValue = false);

//     if ($modal.data('modal')) {
//       $modal.('destroy');
//       $modal.data('modal', false);
//     }

//     $modal.modal({ remote: remotePath }).on('loaded', _modalLoadedHandler);
//   }

//   History.Adapter.bind(window,'statechange',function() {
//     var State = History.getState(); // Note: We are using History.getState() instead of event.state
//     });

//   $.fn.showModal = showRemoteContent;
//   $.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = 
//     '<div class="loading-spinner">' +
//         '<div class="loader-wrapper">' +
//             '<div class="loader-image"></div>' +
//         '</div>' +
//     '</div>';

// }


// $.fn.showModal = function (url, event) {
//   var $modalElement = $('#show-modal');
//   var modal = $modalElement.data('modal');
//   var e = event || window.event;
//   var remote = url + ' article';
//   var historyApiUrl = '?showModal=' + encodeURIComponent(url);

//   // Prevent 
//   e.preventDefault ? e.preventDefault() : (e.returnValue = false);

//   // Destroy modal
//   if (modal && modal.destroy) {
//     modal.destroy();
//     $modalElement.data('modal', false);
//   }

//   $modalElement.modal({ remote: remote }).on('loaded', function () { 
//     $modalElement.modal('show');
//     $modalElement.modal('removeLoading');
//     // History && History.pushState && History.pushState(null, null, historyApiUrl);
//   });
// }


// // $.fn.

// $.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = 
//     '<div class="loading-spinner">' +
//         '<div class="loader-wrapper">' +
//             '<div class="loader-image"></div>' +
//         '</div>' +
//     '</div>';

