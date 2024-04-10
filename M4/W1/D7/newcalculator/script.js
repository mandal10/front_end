let textbox = document.getElementById("textbox");

document.getElementById("1").addEventListener("click", function () {
    textbox.value += "1";
})
document.getElementById("0").addEventListener("click", function () {
    textbox.value += "0";
})
document.getElementById("2").addEventListener("click", function () {
    textbox.value += "2";
})
document.getElementById("3").addEventListener("click", function () {
    textbox.value += "3";
})
document.getElementById("4").addEventListener("click", function () {
    textbox.value += "4";
})
document.getElementById("5").addEventListener("click", function () {
    textbox.value += "5";
})
document.getElementById("6").addEventListener("click", function () {
    textbox.value += "6";
})
document.getElementById("7").addEventListener("click", function () {
    textbox.value += "7";
})
document.getElementById("8").addEventListener("click", function () {
    textbox.value += "8";
})
document.getElementById("9").addEventListener("click", function () {
    textbox.value += "9";
})
document.getElementById("plus").addEventListener("click", function () {
    textbox.value += " + ";
})
document.getElementById("minus").addEventListener("click", function () {
    textbox.value += " - ";
})
document.getElementById("multiply").addEventListener("click", function () {
    textbox.value += " * ";
})
document.getElementById("divide").addEventListener("click", function () {
    textbox.value += " / ";
})
document.getElementById("dot").addEventListener("click", function () {
    textbox.value += ".";
})
document.getElementById("clear").addEventListener("click", function () {
    textbox.value = "";
})
document.getElementById("equals").addEventListener("click", function () {
    textbox.value = eval(textbox.value);
})