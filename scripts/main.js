updateCountdown();
window.setInterval(updateCountdown, 1000);

function updateCountdown() {
    let date = new Date();

    let seconds = date.getSeconds();

    let secondsElement = document.getElementById("seconds");

    updateCounter(secondsElement, seconds);
}

function updateCounter(element, newValue) {
    let currentValue = element.getElementsByClassName("current-value")[0].innerText;

    if(currentValue != newValue || currentValue == "") {
        resetTransition(element);

        element.getElementsByClassName("current-value")[0].innerText = newValue;
        element.getElementsByClassName("current-value")[1].innerText = currentValue;
        element.getElementsByClassName("switch-value")[0].innerText = currentValue;
        element.getElementsByClassName("switch-value")[1].innerText = newValue;

        startTransition(element);
    }
}

function resetTransition(element) {
    element.getElementsByClassName("top switch")[0].classList.add("no-transition");
    //element.getElementsByClassName("top switch")[0].style["background-color"] = "#2a2c41";
    element.getElementsByClassName("top switch")[0].style["transform"] = "rotateX(0deg)";
    element.getElementsByClassName("bottom switch")[0].classList.add("no-transition");
    //element.getElementsByClassName("bottom switch")[0].style["background-color"] = "#53567f";
    element.getElementsByClassName("bottom switch")[0].style["transform"] = "rotateX(90deg)";
}

function startTransition(element) {
    element.getElementsByClassName("top switch")[0].offsetHeight;
    element.getElementsByClassName("top switch")[0].classList.remove("no-transition");
    //element.getElementsByClassName("top switch")[0].style["background-color"] = "#161722";
    element.getElementsByClassName("top switch")[0].style["transform"] = "rotateX(-90deg)";
    element.getElementsByClassName("bottom switch")[0].offsetHeight;
    element.getElementsByClassName("bottom switch")[0].classList.remove("no-transition");
    //element.getElementsByClassName("bottom switch")[0].style["background-color"] = "#343650";
    element.getElementsByClassName("bottom switch")[0].style["transform"] = "rotateX(0deg)";
}