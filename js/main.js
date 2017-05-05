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

