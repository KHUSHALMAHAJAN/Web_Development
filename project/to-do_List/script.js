const inputtext = document.querySelector("#inputtext");
const add = document.querySelector("#add");
const list = document.querySelector(".list"); 
const remove = document.querySelector(".remove")

add.addEventListener("click", function () {
    additem();
    console.log(inputtext.value);
});

function additem() {
    list.innerHTML += `
        <div class="list-item">
            <i class="fa-regular fa-circle"></i>
            <li>${inputtext.value}</li>
            <div class="remove">X</div>
        </div>`;
    inputtext.value = "";
    savedata() 
}

list.addEventListener("click", function (event) {
    if (event.target.classList.contains("list-item")) {
        event.target.classList.toggle("removelist");
        savedata()
    }

    if (event.target.classList.contains("remove")) {
        event.target.parentElement.remove();
        savedata()
    }
});

function savedata(){
    localStorage.setItem("data",list.innerHTML)
}

function showdata(){
    list.innerHTML = localStorage.getItem("data")
}
showdata()