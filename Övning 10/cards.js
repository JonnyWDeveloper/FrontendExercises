
///////     Uppgift 2: Dra ett kort   ///////

let buttonCards = document.querySelector('#buttonCards');
let cardsOutput = document.querySelector('#cardsOutput');
let inputNumber = document.querySelector('#inputNumber');
let inputName = document.querySelector('#inputName');
let result = document.querySelector('#result');
let cardImage = document.querySelector('#card-image');
let uri = `https://deckofcardsapi.com/api/deck/new/draw/?count=`;
let uriCode = `https://deckofcardsapi.com/api/deck/new/shuffle/?cards=`;

const getCards = () => {

    let url = "";

    if (inputNumber.value > 0) { //Either search by Number or Name, not both.
        url = uri + inputNumber.value;
        inputName.value = "";
    } else {
        url = uriCode + inputName.value;
        inputNumber.value = "";
    }
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            result.innerHTML = '';
            let objectProperties = "";
            let remaining = "";
            let deck_id = "";

            if (inputNumber.value > 0) {
                objectProperties = data.cards[0];
                remaining = data.remaining;
                deck_id = data.deck_id;
            }
            else {
                /* objectProperties = data.cards[0];
                remaining = data.remaining;
                deck_id = data.deck_id; */
                alert("Enter a number!");
            }

            let counter = 0;

            Object.keys(objectProperties).forEach(key => {
                // Example: 👉️ "value", "suite"
                // Example: 👉️ "7", "HEARTS"
                counter++;
                cardImage.src = objectProperties.images.png;

                if (counter === 1) { //Do only once!
                    result.innerHTML += `
                    <div id="outputJS" style="border-width: 0;" >
                    <p style="font-style: italic;">remaining:<span style="font-style: normal;"> ${remaining}</span></p><p></p>`
                }
                if (key === "images") {
                    result.innerHTML += `<p style="font-style: italic;">${key}: <span style="font-style: normal;">svg & png</span></p><p></p>`

                } else {
                    result.innerHTML += `<p style="font-style: italic;">${key}: <span style="font-style: normal;"> ${objectProperties[key]} </span></p><p></p>`
                }

                if (counter === Object.keys(objectProperties).length) {//Do once, lastly!

                    result.innerHTML +=
                        `<a href="${objectProperties.images.svg}" class="">${objectProperties.images.svg}</a>\n
                    <a href="${objectProperties.images.png}" class="">${objectProperties.images.png}</a>                    
                    </div>`
                }
                cardsOutput.value = result.innerText;
                inputName.placeholder = objectProperties.code;
                inputNumber.placeholder = deck_id;
            });
        })
        .catch(error => alert(error + " \nEnter a correct value!"));
    // .catch(err => result.innerHTML += '<span style="color: red" class="row"> ERROR: ' + err + "</span>");
}
buttonCards.addEventListener('click', getCards);
