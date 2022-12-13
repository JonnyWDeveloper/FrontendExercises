/* "Built -in form validation uses HTML form validation features, 
which we've discussed in many places throughout this module. 
This validation generally doesn't require much JavaScript.
Built-in form validation has BETTER PERFORMANCE than JavaScript, 
but it is not as customizable as JavaScript validation". 
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation*/




// Bish-Bosh 2.0 //

const minValue = 1;
const maxValue = 100;
const bishbutton = document.querySelector("#bishbutton");
const output2 = document.querySelector("#output");
const start = document.querySelector("#start");
const stopNumber = document.querySelector("#stopNumber");
const bish = document.querySelector("#bish");
const bosh = document.querySelector("#bosh");
const error = document.querySelector("#error");
let bishbosh = 0;


function validate() {    //Validate: print error message.
    error.textContent = "";
    if (inputsAreEmpty()) {
        error.textContent = "Error: one or more inputs are empty!";
        return;
    } else {
        if (valueMinMax()) {
            bishbosh2();
        } else {
            error.textContent = "Error: one or more inputs are our of range!";
            return;
        }
    }
}
function inputsAreEmpty() {
    //Validate: check empty input(s).
    if (
        getStartNumber() === "" ||
        getStopNumber() === "" ||
        getBishNumber() === "" ||
        getBoshNumber() === ""
    ) {
        return true;
    } else {
        return false;
    }
}
function valueMinMax() {
    //Validate: check valid value(s) from input(s).
    if (
        getStartNumber() <= maxValue &&
        getStartNumber() >= minValue &&
        getStopNumber() <= maxValue &&
        getStopNumber() >= minValue &&
        getBishNumber() <= maxValue &&
        getBishNumber() >= minValue &&
        getBoshNumber() <= maxValue &&
        getBoshNumber() >= minValue &&
        getStartNumber() <= getStopNumber()
    ) {
        return true;
    } else {
        return false;
    }
}
function multiplyBishBosh() {
    return (bishbosh = bish.value * bosh.value);
}
function getStartNumber() {
    //Start: set START loop value, from input field.
    return start.value;
}
function getStopNumber() {
    //Stop: set STOP loop value , from input field.
    return stopNumber.value;
}
function getBishNumber() {
    //Bish: from input field.
    return bish.value;
}
function getBoshNumber() {
    //Bosh: from input field.
    return bosh.value;
}
function bishbosh2() {
    for (let i = start.value; i <= stopNumber.value; i++) {
        let result = "";
        if (i % multiplyBishBosh() == 0) {
            result = "Bish-Bosh";
        } else if (i % bish.value == 0) {
            result = "Bish";
        } else if (i % bosh.value == 0) {
            result += "Bosh";
        } else if (result == "") {
            result = i.toString(); //Otherwise print the number.
        }
        output.innerHTML += `&nbsp;&nbsp;&nbsp;${result}`;
    }
}
bishbutton.addEventListener("click", validate);
