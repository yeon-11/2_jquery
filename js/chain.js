$(document).ready(function () { //비동기
    $("button#re").click(function () {
        $("#p1").css("color", "gray")
        .slideUp(2000)
        .slideDown(2000)
        // .css("fontSize", "2rem")
    });
})