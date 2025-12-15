let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let bgContainerElement = document.getElementById("bgContainer");

function button() {
    let i = parseInt(Math.ceil(Math.random() * 10));
    bgContainerElement.style.backgroundColor = bgColorsArray[i];
}
