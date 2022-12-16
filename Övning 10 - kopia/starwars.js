///////    Git Lexicon-Net     ///////
let buttonGit = document.querySelector('#buttonGit');
let gitOutput = document.querySelector('#git-output');

const getGit = () => {

    fetch('https://api.github.com/users/Lexicon-Net/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            // if (res.ok)
            return res.json();
            // throw new Error('Failed to get repos');
        })
        .then(data => {
            console.log(data);

            gitOutput.innerHTML = '';

            data.forEach(repo => {
                gitOutput.innerHTML +=
                    `                    
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${repo.name}</h5>
                    <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                    <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                    <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                    </div>
                    </div>
                      `
            })
        })
        .catch(err => console.log('ERROR: ' + err));
}
//buttonGit.addEventListener('click', getGit)


///////     StarWars Name    ///////
let buttonStarWars = document.querySelector('#buttonStarWars');
let starWarsOutput = document.querySelector('#starWarsOutput');
let inputNumber = document.querySelector('#inputNumber');
let inputName = document.querySelector('#inputName');
let result = document.querySelector('#result');
let uri = `https://www.swapi.tech/api/people/`;
let uriName = `https://www.swapi.tech/api/people/?name=`;

const getStarWarsCharacter = () => {
    let url = "";

    if (inputNumber.value > 0) { //Either search by Number or Name, not both.
        url = uri + inputNumber.value;
        inputName.value = "";
    } else {
        url = uriName + inputName.value;
        inputNumber.value = "";
    }
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            //if (res.ok)
            return res.json();
            //throw new Error('Failed to get name');
        })
        .then(data => {
            /* console.log(data); */
            result.innerHTML = '';
            let objectProperties = "";
            let description = "";
            let uid = "";

            if (inputNumber.value > 0) {
                // alert("Number: " + inputNumber.value + "  URL: " + url);
                objectProperties = data.result.properties;
                description = data.result.description;
                uid = data.result.uid;
            }
            else {
                // alert("Name: " + inputName.value + "  URL: " + url);
                objectProperties = data.result[0].properties;
                description = data.result[0].description;
                uid = data.result[0].uid;
            }

            let counter = 0;

            Object.keys(objectProperties).forEach(key => {
                //console.log(key);                     // Example: 👉️ "name", "gender"
                // console.log(objectProperties[key]);  // Example: 👉️ "Chewbacca", "male"
                counter++;

                if (counter === 1) { //Do only once!
                    result.innerHTML += `
                    <div id="outputJS" style="border-width: 0;" class="row">
                    <div style="border-width: 0;" class=" row">
                    <h5 style="border-width: 0;" class="row">Name: ${objectProperties.name}</h5>
                   
                            <h5  style="border-width: 0; left:-100;" class="row">Description: ${description} </h5>`
                }
                result.innerHTML += `<p style="font-style: italic;">${key}: <span style="font-style: normal;"> ${objectProperties[key]} </span></p>` //Print each pair

                if (counter === Object.keys(objectProperties).length) {//Do lastly!

                    result.innerHTML +=
                        `<a href="${objectProperties.homeworld}" class="">${objectProperties.homeworld}</a>
                        <a href="${objectProperties.url}" class="">${objectProperties.name}</a>
                        </div></div>`
                }
                starWarsOutput.value = result.innerText;
                inputName.placeholder = objectProperties.name;
                inputNumber.placeholder = uid;
            });
        })
        .catch(error => alert(error + " \nEnter a correct value!"));
    // .catch(err => result.innerHTML += '<span style="color: red" class="row"> ERROR: ' + err + "</span>");
}
buttonStarWars.addEventListener('click', getStarWarsCharacter);
