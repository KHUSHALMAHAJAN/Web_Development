var time = 60;
var hitval;
var score = 0;

function ball() {
    var str = "";

    for (var i = 1; i <= 102; i++) {
        var rnum = Math.floor(Math.random() * 10);
        str += `<div class="ball">${rnum}</div>`
    }
    document.querySelector("#plath").innerHTML = str
}

function timer() {
    time = 60
    var timefunc = setInterval(function () {
        if(time > 0){
            time--;
            document.querySelector("#time").textContent = time;
        }
        else{
            clearInterval(timefunc)
            document.querySelector("#plath").innerHTML = `<h1> Your Score : ${score}<h1>`
            document.querySelector("#plath").style.color = "blue"
        }
    }, 2000);
}

function hitfunc() {
    hitval = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitval;
}

function scorefunc(){
    score++
    document.querySelector("#scoreval").textContent = score
}

document.querySelector("#plath").addEventListener("click",
    function(dets){
        var clicknum
        clicknum = Number(dets.target.textContent)
        if(clicknum === hitval){
            scorefunc()
            hitfunc()
            timer()
            ball()
        }
    }
)


hitfunc()
timer()
ball()