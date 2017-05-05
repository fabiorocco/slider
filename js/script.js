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
