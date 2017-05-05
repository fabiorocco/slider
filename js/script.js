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
var reverse = 1;
function nextImage() {
    if (reverse == 1) {
        changePreviousImg();
        $('#rail').animate({"margin-right":"-800px"}, timeInterval);
    }
}

function changePreviousImg() {
    $('#rail').css('margin-right', '0px');
    $('#rail img:first').before($('#rail img:last'));
}

function changeFirstImg() {
    $('#rail').css('margin-left', '0px');
    $('#rail img:last').after($('#rail img:first'));

}

setInterval(nextImage, 2000);

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
