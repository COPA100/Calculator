const output = document.querySelector(".output-box > h1");

let array = [];

//values added to array and when equals is pressed it compiles
function addToArray(input) {
    array.push(input);
    checkInput();
    printToDisplay();
}


function checkInput() {
    if (isOperator(array[0])) {
        clearArray();
    }
    else if (array.length >= 2 && isOperator(array[array.length - 1]) && isOperator(array[array.length - 2])) {
        array.splice(array.length - 2, 1);
    }
    else if (array.length - 1 === "=") {
        compileArray();
    }
}

function compileArray() {
    const merged = [];
    for (let i = 0; i < array.length; i++) {
        
    }
}

function isOperator(input) {
    switch (input){
        case "%":
            return true;
            break;
        case "÷":
            return true;
            break;
        case "–":
            return true;
            break;
        case "+":
            return true;
            break;
        case "×":
            return true;
            break;
        default:
            return false;
    }
}

function printToDisplay() {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];        
    }
    output.textContent = string;
}

function clearArray() {
    array = [];
    output.textContent = "0";
    console.clear();
}

//for debugging
function dispArrayConsole() {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log("\n");
}