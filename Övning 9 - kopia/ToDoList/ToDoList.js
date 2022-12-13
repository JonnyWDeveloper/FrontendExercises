// Creates a "close" button and appends it to each list item.
// This is done on DOMContentLoaded.
let itemsNodelist = NodeList;
let numberOfItems = 0;
const shoppingListDocument = document;
shoppingListDocument.addEventListener('DOMContentLoaded', addListElements);

function addListElements() {

    itemsNodelist = document.querySelectorAll("li");    //Must be dynamic. Get all existing list elements.

    Array.from(itemsNodelist).slice(numberOfItems).forEach(function (listElement)
    //Above convertion to Array helps us skip any existing list elements.
    {
        let spanNumber = document.createElement("span");
        let span = document.createElement("span");
        let text = document.createTextNode("\u00D7");
        numberOfItems++; //Visual item number on the list element.
        let textNumber = document.createTextNode(numberOfItems + ". ");
        spanNumber.className = "number"; //For CSS styling.
        span.className = "close";
        span.appendChild(text);
        spanNumber.appendChild(textNumber);
        listElement.appendChild(spanNumber);
        listElement.appendChild(span);

        span.addEventListener('click', function (ev) {     //Adding closing functionallity.
            ev.target.parentElement.style.display = "none";
        });
    })
}

// Add a "checked" symbol when clicking on a list element
const list = document.querySelector('#ulItems');
list.addEventListener('click', function (e) {

    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);


const addButton = document.querySelector('#addButton'); //The Add Item button.
addButton.addEventListener('click', newListElement)

// Create a single, new, list item when clicking on the "Add" button
function newListElement() {

    let li = document.createElement('LI');                     //Create a new LI element (note: UPPERCASE)
    let textInput = document.querySelector('#textInput').value; //Get the text input.
    let textNode = document.createTextNode(textInput);          //Create a textnode from the input.
    li.appendChild(textNode);                                   //Add it to the list ellement.

    if (textInput.trim() === "") {                              //Validate input: is Not Empty.
        alert("Du har inte skrivit in någon vara.");
    } else {
        document.querySelector("#ulItems").appendChild(li);     //Add the item to the shopping list.
    }
    addListElements();

    document.querySelector("#textInput").value = "";            //Reset the input field.
}
