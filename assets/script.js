var apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJmUnJ0WUNNcTZ3Sm9BMVRwZlZ4UUxZSWVqSVlkWlpydzc4c2FvcHI5WUdQV3l3UEphdCIsImp0aSI6ImQwMjNlZTVmNjhkYWVkMzkzZDBhYmNhMTI1NGQyOTZlM2U2MTQ1MWRlMzA3NTRkYTI4ZDEzMWFiOTZlMmRiMmJkZTE4ODczZmU5NTEzMjk5IiwiaWF0IjoxNjk4MzY3MzM3LCJuYmYiOjE2OTgzNjczMzcsImV4cCI6MTY5ODM3MDkzNywic3ViIjoiIiwic2NvcGVzIjpbXX0.wQ0Bt9QhANAbc0tXMPQChLQ7_AoiE5rHWcQVPzBWf6IO4aZeCOCHoHvvWx9Zb3_rayhzUTW8xzYRH3kqo6FEMrDXn6Zdf911Ut--J0YyM6l5g2zncTWIpk9qG9Qezrh0TM19anIaeH3qok6FcovMOZOohn9gcXO5KzV2nfrzSi7ekpF9iOS-KkD0xHiefvKalcVjQZ8kylRSzCpZOCk-YplX04yCVtlVgYfYmHSx1lcGDc-bHfYQOVnSu9hp-34dviP8tMKFAIr5tLs3UB_j--Ci48j6oqvB33TAmcDwjWtr5DgI0y0PJRAusLo8S21-ZvKE0--GhARiK-8g1ZdBZA";

var apiURL = "https://api.petfinder.com/v2/animals?types=dog";


function fetchDogs() {
	fetch (apiURL, {
		headers: {"Authorization": "Bearer " + apiKey}
	}) .then (function (res){
		return res.json()
	}) .then (function (data){
		console.log(data)
	})

}

fetchDogs();


function fetchKey() {
	
}

// Function to display search results
function displayResults(data) {
	const resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML = "";

	if (data.length > 0) {
		data.forEach(breed => {
			const name = breed.name;
			const description = breed.description ? breed.description : "No description available";
			const image = breed.image ? `<img src="${breed.image.url}" alt="${name}" style="max-width: 150px;">` : "";

			const breedDiv = document.createElement("div");
			breedDiv.innerHTML = `
				<h2>${name}</h2>
				<p>Description: ${description}</p>
				${image}
			`;

			resultsDiv.appendChild(breedDiv);
		});
	} else {
		resultsDiv.innerHTML = "No results found.";
	}
}

// Add event listener to search button
document.getElementById("searchButton").addEventListener("click", searchAnimals);