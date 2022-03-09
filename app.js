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