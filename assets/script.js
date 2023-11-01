async function getBreeds() {
    var response = await fetch ("https://dog.ceo/api/breeds/list/all")
    var data = await response.json()
    console.log(data);
}

getBreeds();


function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select>
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map(function (breed) {
            return `<option>${breed}</option>`
        }).join('')}
    </select>
    `
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
