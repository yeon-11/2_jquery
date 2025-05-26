$(function () {
    $("#flip").click(function () {
        $("#panel").slideDown(5000);
    });

    $("#stop").click(function () { //동작을 멈출때
        $("#panel").stop();
    });
})