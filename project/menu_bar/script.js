const openmenu = document.querySelector("#openmenu")
const atag = document.querySelector("#atag")
var i = true

openmenu.addEventListener("click",function(){
    if(i == true){
        atag.style.visibility = "visible"
        openmenu.textContent = "X"
        i = false
        console.log("hel")
    }
    else{
        atag.style.visibility = "hidden"
        openmenu.textContent = "="
        i = true
        console.log("hello")
    }
})