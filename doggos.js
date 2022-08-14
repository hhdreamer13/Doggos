let DOG_URL = "https://dog.ceo/api/breeds/image/random";
// let DOG_URL = ""

document.querySelector('.selection-tab').addEventListener('change', (event) => {
    console.log(event.target.value)
    switch (event.target.value) {
        case 'husky':
            DOG_URL = "https://dog.ceo/api/breed/husky/images/random";
            break;
        case 'eskimo':
            DOG_URL = "https://dog.ceo/api/breed/eskimo/images/random";
            break;
        case 'poodle':
            DOG_URL = "https://dog.ceo/api/breed/poodle/images/random";
            break;
        case 'rottweiler':
            DOG_URL = "https://dog.ceo/api/breed/rottweiler/images/random";
            break;
        case 'germanshepherd':
            DOG_URL = "https://dog.ceo/api/breed/germanshepherd/images/random";
            break;
        default:
            console.log('not working')
            break;
    }
});

function addDoggos() {
    const doggos = document.querySelector('.doggos')
    doggos.innerHTML = `<div class="lds-circle"> <div></div> </div>`;
    console.log(DOG_URL)
    const promise = fetch(DOG_URL);
    promise.then(response => {
        const processingPromise = response.json();
        return processingPromise;
        })
        .then(processedResponse => {
        const img = document.createElement('img'); // creating an img tag line
        img.src = processedResponse.message;
        img.alt = 'Cute dog';
        doggos.innerHTML = `<img src="#" alt="">`;
        doggos.appendChild(img); /* Append a new img line (the above) in div with a class of doggos in out html source */
        });
}

document.querySelector('.btn').addEventListener('click', addDoggos);




