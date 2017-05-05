function getImages() {
    var url = "https://www.skrzypczyk.fr/slideshow.php";
    $.getJSON(url, {
        format: "json"
    }).done((data) => {
        console.log(data);
        $.each(data, (key, item) => {
            $("<img>").attr({"src": item.url, "alt": item.desc, "data-title": item.title}).appendTo("#rail");
        })
    })
}


/*
(function() {
    var url = "https://www.skrzypczyk.fr/slideshow.php";
      $.getJSON( url, {
        format: "json"
      }).done(function( data ) {
            //console.log(data[0]);
            $.each(data, function(key, item) {
                $("<img>").attr("src", item.url).appendTo("#rail");
            });
        });
    })();*/



/*function renew() {
  var channel = $('#select-channel').val();
  var email = $('#email').is(':checked');
  var url = window.location.href;
  $.ajax({
    url : url + '/renew',
    method : 'GET',
    data : 'channel=' + channel + '&email=' + email,
    dataType : 'html'
  });
  location.reload();
}*/
