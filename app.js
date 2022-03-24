var mapContent = document.getElementById("mapContent")
console.log(mapContent)

var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "270px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}


function genderSelection(element, identity) {
    if(identity == 0) {
        element.firstElementChild.style.backgroundColor = "#87c930"
        element.nextElementSibling.firstElementChild.style.backgroundColor = "#c7c1c1"
        element.nextElementSibling.nextElementSibling.firstElementChild.style.backgroundColor = "#c7c1c1"
    }
    else if (identity == 1) {
        element.firstElementChild.style.backgroundColor = "#87c930"
        element.previousElementSibling.firstElementChild.style.backgroundColor = "#c7c1c1"
        element.nextElementSibling.firstElementChild.style.backgroundColor = "#c7c1c1"
    }
    else if (identity == 2) {
        element.firstElementChild.style.backgroundColor = "#87c930"
        element.previousElementSibling.firstElementChild.style.backgroundColor = "#c7c1c1"
        element.previousElementSibling.previousElementSibling.firstElementChild.style.backgroundColor = "#c7c1c1"
    }
}

function showPassword(element) {
    if(element.previousElementSibling.type == "password") {
        element.previousElementSibling.type = "text"
        element.className = "fas fa-solid fa-eye-slash"
    }
    else {
        element.previousElementSibling.type = "password"
        element.className = "fas fa-solid fa-eye"
    }
}

function signUpProfileToggle(element) {
    if(element.className == "fas fa-solid fa-toggle-off") {
        element.className = "fas fa-solid fa-toggle-on"
        element.style.color = "#94b42f"
    }
    else{
        element.className = "fas fa-solid fa-toggle-off"
        element.style.color = "rgb(189, 189, 189)"
    }
}

function logoDirector() {
    window.location.assign("./index.html")
}

function subpage1() {
    window.location.assign("./subpage1.html")
}
function subpage2() {
    window.location.assign("./subpage2.html")
}
function subpage3() {
    window.location.assign("./subpage3.html")
}
function subpage4() {
    window.location.assign("./subpage4.html")
}
function subpage5() {
    window.location.assign("./subpage5.html")
}
function subpage6() {
    window.location.assign("./subpage6.html")
}
function subpage7() {
    window.location.assign("./subpage7.html")
}
function subpage8() {
    window.location.assign("./subpage8.html")
}
function subpage9() {
    window.location.assign("./subpage9.html")
}

function inputToTextArea(e) {
    if(e.innerHTML == "Text Box") {
        e.previousElementSibling.previousElementSibling.className = "signUpProfileHidden"
        e.previousElementSibling.className = "signUpProfileShow"
        e.previousElementSibling.value = e.previousElementSibling.previousElementSibling.value
        e.innerHTML = "Single-Line Field"
    }
    else if (e.innerHTML == "Single-Line Field") {
        e.previousElementSibling.previousElementSibling.className = "signUpProfileShow"
        e.previousElementSibling.className = "signUpProfileHidden"
        e.previousElementSibling.previousElementSibling.value = e.previousElementSibling.value
        e.innerHTML = "Text Box"
    }
}

function mapContentSlider(e) {
    if (e.innerHTML == "<") {
        mapContent.className = "mapContentContainer"
        e.innerHTML = ">"
    }
    else if (e.innerHTML == ">") {
        mapContent.className += "mapContentContainerShow"
        e.innerHTML = "<"
    }
}