
var box = document.querySelector(".box")
var i = 0;
var block1 = document.querySelector(".block1")
var innbox = document.querySelector(".innbox")
var text = document.querySelector(".text")
innbox.addEventListener("mouseover",
    function(){
        if(i == 0){
            box.style.backgroundColor = "blue"
            innbox.style.backgroundColor = "red"
            block1.style.backgroundColor = "blue"
            text.textContent = "💕 I  ❤ Love ❤ Coding 💕"
            i = 1;
        }
        else{
            box.style.backgroundColor = "red"
            innbox.style.backgroundColor ="blue"
            block1.style.backgroundColor = "red"
            block1.style.height = "10%"
            text.textContent = ""
            i = 0
        }
    }
)
