async function getBreeds() {
    var response = await fetch ("https://dog.ceo/api/breeds/list/all")
    var data = await response.json()
    console.log(data);

    createBreedList(data.message)
}

getBreeds();


function createBreedList(breedList) {
    console.log(Object.keys(breedList))
    document.getElementById("breed-list").innerHTML = `
    <select onchange="loadBreeds(this.value)">
        <option>Choose a dog</option>
        ${Object.keys(breedList).map(function (breeds) {
            return `<option>${breeds}</option>`
        }).join('')}
    </select>
    `
}


async function loadBreeds(breed) {
    if (breed != "Choose a dog breed") {
        var response = await fetch("https://dog.ceo/api/breeds/image/random/3")
        var data = await response.json()
        console.log(data);

   
    }
}






















//apiKey = "live_5dMT5wRzbGAsAzgpEy0fLL9mzKSOZRe1WKM6iGY6ntuWl1o9VRfAGDYTPirykcFs"


// fetch('https://api.thedogapi.com/v1/images/search?breed_ids=' + dogID, {
//         'x-api-key' : apiKey,
//     })
//         .then(
//             function(response) {
//                 if (response.status !== 200) {
//                     console.log(response.status);
//                     return
//                 } else {
//                     response.json().then(function(data) {
//                         //image is stored in an array, so we need to access it with [0] index
//                         dogImage = data[0].url;
//                         //adds url to "src" attribute
//                         imgContainer.src = dogImage;
//                         });
//                 }
//             }

// );
