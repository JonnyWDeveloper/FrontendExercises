/* "Built -in form validation uses HTML form validation features, 
which we've discussed in many places throughout this module. 
This validation generally doesn't require much JavaScript.
Built-in form validation has BETTER PERFORMANCE than JavaScript, 
but it is not as customizable as JavaScript validation". 
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation*/


// Bish-Bosh 1.0 //

const bishbutton1 = document.querySelector('#bishbutton1');
const output1 = document.querySelector('#output1');
function bishbosh1() {
    let = resultGlobal = "";
    for (let i = 1; i <= 100; i++) {
        let result1 = "";
        if (i % 12 == 0) {
            result1 = "\nBish-Bosh";
        }
        else if (i % 3 == 0) {
            result1 = "\nBish";
        }
        else if (i % 4 == 0) {
            result1 += "Bosh";
        }
        else if (result1 == "") {
            result1 = i.toString();
        }
        output1.innerHTML += `&nbsp;&nbsp;&nbsp;${result1}`;
        //Only script, nao webpage:

        console.log(result1); //Solution Answer.

        resultGlobal += result1 + " ";  //Solution Extras.
    }
    console.log("table:");              //Solution Extras.
    console.log(".......");
    console.table(resultGlobal);        //Solution Extras.
    console.log("dir:");                //Solution Extras.
    console.log(".......");
    console.dir(resultGlobal);          //Solution Extras.
}
bishbutton1.addEventListener('click', bishbosh1);


