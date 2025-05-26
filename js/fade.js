$(function () {
    /* $("button").click(function(){ //버튼 누를때
         $("#div1").fadeOut();
         $("#div2").fadeOut("slow"); //느리게
         $("#div3").fadeOut(3000); //3s
     }) */

    $("button").click(function () { //버튼 누를때
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    })
})