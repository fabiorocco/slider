/**
 * Definition of the variables
 */

var timeInterval = 4000;
var timeTransition = 2000;
var startDefault = true;
var slideshow = document.getElementById('slideshow');
var slideshowChild = slideshow.children;
var listElement = [];
var reverse = 0;
// create a simple instance
var mc = new Hammer(slideshow);

// listen to events...
mc.on("panleft panright tap", function(ev) {
    if (ev.type === "panright") {

    }

    if (ev.type === "panleft") {}

    if (ev.type === "tap") {}
});

$("#next").click(nextImage);
$("#previous").click(() => {
    reverse = 1;
})

function nextImage() {
    if (startDefault == true) {
        if (reverse == 0) {
            $('#rail').animate({"margin-left":"-800px"}, timeTransition, changeFirstImg);
        } else {
            alert(reverse);
            $('#rail').animate({"margin-right":"0px"}, timeTransition, changePrevioustImg);
        }
    }
}

function changeFirstImg() {
  var idOfImages = $('#rail .img:first').attr('data-type');
  var idOfPuce = $('.indicator-item').attr('data-type');

    $('#rail').css('margin-left', '0px');
    $('#rail .img:last').after($('#rail .img:first'));

    var arrayOfPuces = [];
    $('.indicator-item').each(function() {
      arrayOfPuces.push($(this).attr('data-type'));
    });
    var arrayOfIdImmage = [];
    $('#rail .img:first').each(function() {
      arrayOfPuces.push($(this).attr('data-type'));
    });
    
    for (var i = 0; i < arrayOfPuces.length; i++) {
      if (idOfImages == arrayOfPuces[i]) {
        $('.indicator-item[data-type="'+arrayOfPuces[i]+'"]').toggleClass("indicator-active");
      }
    }
}

function changePrevioustImg() {
    $('#rail').css('margin-right', '0px');
    $('#rail .img:first').before($('#rail .img:last'));
}

function getImages() {
    var url = "https://www.skrzypczyk.fr/slideshow.php";
    $.getJSON(url, {
        format: "json"
    }).done((data) => {
        $.each(data, (key, item) => {
            $("<div>").attr({"id": key, "data-description": item.desc, "data-title": item.title,"data-type": key, "class": "img"}).appendTo("#rail");
            $("#"+key).css("background-image", "url("+ item.url +")");
            $("<li>").attr({"class": "indicator-item", "data-type": key}).appendTo(".indicator");
            $("<div></div>").appendTo("#"+key);
        })
    })
}

setInterval(nextImage, timeInterval);

/*
// Mettre sur pause/start au hover
$('#rail').mouseenter(
    () => {startDefault = false;}
)
$('#rail').mouseleave(
    () => {startDefault = true;}
)
// Mettre sur pause/start au click
$("#pause").click(() => {
    startDefault = false;
});
$("#play").click(() => {
    startDefault = true;
});
*/
