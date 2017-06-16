/**
 * Definition of the variables
 */
var timeInterval = 4000;
var timeTransition = 2000;
var autoMode = true;
var slideshow = document.getElementById('slideshow');
var slideshowChild = slideshow.children;
var listElement = [];
// create a simple instance
var mc = new Hammer(slideshow);
// listen to events...
mc.on("panleft panright tap", function(ev) {
    console.log(ev.type);
    if (ev.type === "panright") {
        alert(1);
        nextImage();
    }
    if (ev.type === "panleft") {
        previousImage();
    }
    if (ev.type === "tap") {}
});
function init(){
    if(autoMode){
        $("#play").hide();
    }else{
        $("#pause").hide();
    }
}
init();

$("#next").click(() => {
    nextImage();
});
$("#previous").click(() => {
    previousImage();
});
function fAutoMode(){
    if(autoMode){
        nextImage();
    }
}
function nextImage() {
    $('#rail').animate({"margin-left":"-800px"}, timeTransition, () => {
        $('#rail').css('margin-left', '0px');
        $('#rail .img:last').after($('#rail .img:first'));
    });
}
function previousImage(){
    $('#rail').css('margin-left', '-800px');
    $('#rail .img:first').before($('#rail .img:last'));
    $('#rail').animate({"margin-left":"0px"}, timeTransition, () => {
        clearInterval(functionInterval);
    });
}
function getImages() {
    var width = 800;
    var url = "https://www.skrzypczyk.fr/slideshow.php";
    $.getJSON(url, {
        format: "json"
    }).done((data) => {
        $.each(data, (key, item) => {
            width += 800;
            $("#slideshow").css("min-width", "800px");
            $("#rail").css("width", width + "px");
            $("<div>").attr({"id": key, "alt": item.desc, "data-title": item.title, "class": "img"}).appendTo("#rail");
            $("#"+key).css("background-image", "url("+ item.url +")");
        })
    })
}
var functionInterval = setInterval( fAutoMode, timeInterval);
// Mettre sur pause/start au hover
$('#slideshow').mouseenter(
    () => {
        //alert($('#pause').is(':visible'));
        autoMode = false;
        $(".contain-actions").css('visibility', 'visible');
    }
)
$('#slideshow').mouseleave(
    () => {
        autoMode = $('#pause').is(':visible') == true ? true : false;
        //alert($('#pause').is(':visible'));
        //autoMode = $('#pause').is(:visible) == true ? false : true;
        $(".contain-actions").css('visibility', 'hidden');
    }
)
$(".contain-actions").css('visibility', 'hidden');

$("#pause").click(function(){
    autoMode = false;
    $("#pause").hide();
    $("#play").show();
});
$("#play").click(function(){
    autoMode = true;
    $("#pause").show();
    $("#play").hide();
});
