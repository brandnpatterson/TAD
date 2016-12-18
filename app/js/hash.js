/**
 * Inspired By Curran Kelleher October 2014
**/

(function() {

  var partialsCache = {};

  function getContent(fragmentId, callback){
    $('#content').load('dist/views/' + fragmentId + '.html', function (content) {
      partialsCache[fragmentId] = content;
      callback(content);
    });
  }

  function navigate(){
    var fragmentId = location.hash.substr(1);

    getContent(fragmentId, function (content) {
      $('#content').html(content);
      window.scrollTo(0,0);
    });
  }

  if(!location.hash) {
    location.hash = '#home';
  }

  navigate();

  $(window).bind('hashchange', navigate);
}());
