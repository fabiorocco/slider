/**
 * Definition of the variables
 */

var timeInterval = 10000;
var startDefault = true;
var pauseDefault = false;

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
