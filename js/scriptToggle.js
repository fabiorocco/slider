/*
$("selecteur css").action();



$("button:first").click(hideParaph);
*/

$("button:first").click(function() {
    $("p").hide();
});

$("button").eq(1).click(function() {
    $("p").show();
});
$("button:last").click(function() {
    $("p").toggle();
});
