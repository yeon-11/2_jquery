$(function () {
    $("button#hideBtn").click(function () {
        $("p").hide("slow", function () {
            alert("사라졍");
        })
    });
});

//자바스크립트
function myDisplayer(some) {
    document.getElementById("call").innerHTML = some;
}

function myFirst() {
    myDisplayer("yeon");
}

function mySecond() {
    myDisplayer("penguin");
} //함수는 호출할때만 실행되는 코드블록
myFirst();
mySecond();