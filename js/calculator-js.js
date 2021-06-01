let display = document.getElementById("display");
let divide = document.getElementById("divide");
let button = document.getElementsByClassName("btn");

// Display values on screen
const displayVal = (val) => {
 display.value += val;
}

// Clear last character 
const back = () => {
    display.value = display.value.substring(0, display.value.length - 1);
}

// Calculate
const calculate = () => {
 display.value;
 let result = eval(display.value);
 display.value = result;
}

// Clear values on screen
const clearVal = () => {
 display.value = "";
}

// Calculate on press Enter
const enterEquals = () => {
    var x = event.keyCode;
if ( x === 13) {
 calculate();
}
}



  









