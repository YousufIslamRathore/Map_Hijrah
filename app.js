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