/*!
 * Main application class
 */
var appConfig = {
  loadingStateClass: 'loading-state',
  readyStateClass: 'ready-state',
  resizeStateClass: 'resize-state'
};

var histAPI=!!(window.history && history.pushState);

function main () {

  jQuery(document.documentElement).removeClass(appConfig.loadingStateClass).addClass(appConfig.readyStateClass);

  // Init resizer
  $.fn.resizer && $.fn.resizer();

  // Init nicescroll
  $.fn.scroller && $.fn.scroller();

  if (histAPI) {
    window.setTimeout(function() {
      window.addEventListener("popstate", function() { popstate(location.pathname); }, false);
    }, 1);
  }
}

function showArticle (param,event) {
  var url, event = event || param.event || false;

  if(typeof param.href != "undefined") 
    url=param.href;
  else {
    url = (typeof param=="string" ? param : (typeof param.url=="object" ? param.url.href : param.url));
  }

  if (!histAPI) {
    window.location=url;
    return true;
  }

  if (event && event.button==1) return true;

  jQuery('body').modalmanager('loading');

  jQuery.ajax({
    url:(typeof param.data!="undefined" ? url + "&" + param.data : url),
    method:"GET",
    data: param.data,
    success: function(data) {
      // Parse html
      var title, body;
      var html = document.createElement('html');
      html.innerHTML = data;

      // Update title
      if (title = html.getElementsByTagName('title')[0]) {
        window.oldTitle = document.title;
        document.title = title.innerHTML;
      }

      // Get body of response
      if (body = html.getElementsByTagName('body')[0]) {
        jQuery('#ajax-modal').find('.modal-body').html(body.innerHTML);
        jQuery('#ajax-modal').modal();
        // documentElement.getElementById('grid').innerHTML = body.innerHTML;
      }

      history.pushState(null, "TEST" + Date.now(), location.pathname + "?url="+ encodeURIComponent(url) );
    }
  });

  return false;
}

function popstate(url) {
  console.log('[popstate]', url);

  // if(url == location.pathname) return;

}

$.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner = 
    '<div class="loading-spinner" style="width: 200px; margin-left: -100px;background: #fff;">' +
    	'<img src="/img/ajax-loader.gif" />' +
    '</div>';

jQuery(main);
jQuery(document.documentElement).addClass(appConfig.loadingStateClass);