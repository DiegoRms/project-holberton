document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function () {
        if (thumbnailElement.className == "img2") {

            thumbnailElement.className = "";
        }
        else {
            thumbnailElement.className = "img2";
        }
    });

});