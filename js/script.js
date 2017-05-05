/**
 * Definition of the variables
 */

var timeInterval = 10000;
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

function nextImage() {
    $('#rail').animate({"margin-left":"-800px"}, 2000, changeFirstImg)
}

function changeFirstImg() {
    $('#rail').css('margin-left', '0px');
    $('#rail img:last').after($('#rail img:first'))
}


setInterval(nextImage, 4000);


function getImages() {
    var url = "https://www.skrzypczyk.fr/slideshow.php";
    $.getJSON(url, {
        format: "json"
    }).done((data) => {
        $.each(data, (key, item) => {
            $("<img>").attr({"src": item.url, "alt": item.desc, "data-title": item.title}).appendTo("#rail");
        })
    })
}
