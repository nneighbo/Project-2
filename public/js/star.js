$(document).ready(() => {

    $(".star").on("click", function () {
        var obj = $(this);
        var toggle = obj.data("toggle");

        if (toggle === "unselected") {
            obj.data("toggle", "selected");
            obj.text("star");
        } else if (toggle === "selected") {
            obj.data("toggle", "unselected");
            obj.text("star_border");
        }
    })
});