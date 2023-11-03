var dropDown = document.getElementById("breed-list")

var timer;
var deletePhotoDelay;

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
        var response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
        var data = await response.json()
        console.log(data);
        createThreeImages(data.message);
    }
}

function createThreeImages(images) {
    let currentPosition = 0
    clearInterval(timer);
    clearTimeout(deletePhotoDelay);
    document.getElementById("breed-images").innerHTML = `
    <div class="breed-images" style="background-image: url('${images[0]}')"></div>
    <div class="breed-images" style="background-image: url('${images[1]}')"></div>
    <div class="breed-images" style="background-image: url('${images[2]}')"></div>
    `
    currentPosition +=2
    setInterval(nextSlide, 3000)

    function nextSlide () {
        document.getElementById("breed-images").insertAdjacentHTML("beforeend", `<div class="breed-images" style="background-image: url('${images[currentPosition]}')"></div>`)
        deletePhotoDelay = setTimeout(function() {
            document.querySelector(".breed-images").remove()
        }, 1000)
        if (currentPosition + 1 >= images.length) {
            currentPosition = 0

        } else {
            currentPosition++
        }
 
    }
}




















apiKey = "live_5dMT5wRzbGAsAzgpEy0fLL9mzKSOZRe1WKM6iGY6ntuWl1o9VRfAGDYTPirykcFs"


fetch('https://api.thedogapi.com/v1/breeds?q=harrier', {
        'x-api-key' : apiKey,
    })
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log(response.status);
                    return
                } else {
                    response.json().then(function(data) {
                        //image is stored in an array, so we need to access it with [0] index
                        dogImage = data[0].url;
                        //adds url to "src" attribute
                        // imgContainer.src = dogImage;
                        console.log(data)
                        });
                }
            }

);
dropDown.addEventListener("change", function(){
    console.log("hi")
})