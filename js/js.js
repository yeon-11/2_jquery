$(function () { //문서가 로드되기전에 실행되는걸 방지
    $("#hide").click(function () {
        $("p.one").hide(1000); //1s
    });
    $("#show").click(function () {
        $("p.one").show(2000); //2s
    });

    //toggle
    $("button.control").click(function(){
        $("mark").toggle();
    })
})