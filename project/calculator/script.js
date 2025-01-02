const number = document.querySelectorAll(".number")
var str = []
const opertor = document.querySelectorAll(".opertor")
var opr = []
const display = document.querySelector("#display")
const displaytext = document.querySelector(".text")
const ans = document.querySelector(".ans")
const clear = document.querySelector(".clear")

var problem = ""
var problemarr = []
var con = 1
var store = ""
var tem = ""
// var expression = ""
// var result = ""


number.forEach(function(number){
    number.addEventListener("click",function(){
        str += number.textContent
        store += number.textContent
        // console.log(str)
        // if(con == 1)
        console.log(str)
        console.log(store)
        console.log(problemarr)
        if(str == ".")
           con = 0
        problem += str 
        displaytext.innerHTML = problem
        tem = store
        console.log(tem)
        str = ""
        })
    })


opertor.forEach(function(opertor){
    opertor.addEventListener("click", function(){
        if(con == 0){
            problemarr.push(parseFloat(store))
        }
        else{
               problemarr.push(parseInt(store))
        }
            store = "" 
            // con = 1
            opr += opertor.textContent
            problemarr.push(opr)
            problem += opr
            displaytext.innerHTML = problem
            opr = ""
    })
})

ans.addEventListener("click", function () {
    problemarr.push(parseInt(tem)); 
    console.log(problemarr);
    let expression = "";

    for (let i = 0; i < problemarr.length; i++) {
        if(problemarr[i] == "X"){
            problemarr[i] = "*"
            expression += problemarr[i]
        }
        else if(problemarr[i] == "÷"){
            problemarr[i] = "/"
            expression += problemarr[i]
        }
        else
            expression += problemarr[i];
        console.log(problemarr[i]);
    }

    console.log(expression);
    console.log(problemarr.length);

    try {
        if (expression.trim() === "") {
            throw new Error("Expression is empty or invalid.");
        }
        const result = eval(expression); 
        console.log("Result:", result);
        displaytext.textContent = result
    } catch (error) {
        console.error("Error evaluating expression:", error.message);
    }
    str = ""
    store =""
    problem = ""
    problemarr = ""
});

clear.addEventListener("click",function(){
    displaytext.textContent = ""
    str = ""
    store =""
    problem = ""
    problemarr = ""
})