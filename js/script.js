/**
 * Definition of the variables
 */

var timeInterval = 2000;
var timeTransition = 2000;
var startDefault = true;
var pauseDefault = false;
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

setInterval(nextImage, timeInterval);

//$("#next").click(nextImage);

$("#previous").click(() => {
    reverse = 1;
    nextImage();
});
$("#next").click(() => {
    reverse = 0;
    nextImage();
});

function nextImage() {
    if (startDefault == true) {
        if (reverse == 0) {
            $('#rail').animate({"margin-left":"-800px"}, timeInterval,changeFirstImg);
        } else {
            changePreviousImg();
            $('#rail').animate({"margin-right":"-800px"}, timeInterval);
        }
    }
}

function changeFirstImg() {
    $('#rail').css('margin-left', '0px');
    $('#rail img:last').after($('#rail img:first'));
}

function changePrevioustImg() {
    $('#rail img:first').before($('#rail img:last'));
}

function getImages() {
    var url = "https://www.skrzypczyk.fr/slideshow.php";
    $.getJSON(url, {
        format: "json"
    }).done((data) => {
        $.each(data, (key, item) => {
            $("<img>").attr({"id": key,"src": item.url, "alt": item.desc, "data-title": item.title}).appendTo("#rail");
        })
    })
}

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
