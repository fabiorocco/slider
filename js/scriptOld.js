/*
function : setInterval(timeInterval) / nextImage()
hover = stop

var timeInterval = 4000;
var startDefault = true;
var PauseDefault = false;
$('#rail').click(nextImage);
var imgUrl = 'https://www.skrzypczyk.fr/slideshow.php';
getAjax();
function getAjax(){
    jQuery.getJSON(imgUrl);
  alert(imgUrl);
}*/
getAjax();
alert(1);
function getAjax(){
    alert('1');
    $.getJSON(imgUrl, {
        format: "json"
    }).done(function(data) {
        alert(2);
        $.each(data.items, function(k, item) {
            alert(item);
        })
    });
}

/*
(function() {
  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
          alert(item.media.m);
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
})();
*/
