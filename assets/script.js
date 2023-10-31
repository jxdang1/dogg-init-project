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

// Get the #refresh button
var btn = document.querySelector('#refresh');

// Client credentials
// Replace these with your key/secret
var apiKey = 'fRrtYCMq6wJoA1TpfVxQLYIejIYdZZrw78saopr9YGPWywPJat';
var secret = 'wiZjS69YBXPbE6WT8NmZVhIIu9x1i2iIsg0DCwRC';

// Call details
var org = '';
var status = 'adoptable';

// Token
var token, tokenType, expires;



var getPets = function () {
	return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status,{
		headers: {
			'Authorization': tokenType + ' ' + token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(function (resp) {

		// Return the API response as JSON
		return resp.json();

	}).then(function (data) {

		// Log the pet data
		console.log('pets', data);

	}).catch(function (err) {

		// Log any errors
		console.log('something went wrong', err);

	});
};

/**
 * Get OAuth credentials
 * @return {Promise} The fetch() Promise object
 */
var getOAuth = function () {
	return fetch('https://api.petfinder.com/v2/oauth2/token', {
		method: 'POST',
		body: 'grant_type=client_credentials&client_id=' + apiKey + '&client_secret=' + secret,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}).then(function (resp) {

		// Return the response as JSON
		return resp.json();

	}).then(function (data) {

		// Log the API data
		console.log('token', data);

		// Store token data
		token = data.access_token;
		tokenType = data.token_type;
		expires = new Date().getTime() + (data.expires_in * 1000);

	}).catch(function (err) {

		// Log any errors
		console.log('something went wrong', err);

	});
};

/**
 * Get a token and fetch pets
 */
var makeCall = function () {

	// If current token is invalid, get a new one
	if (!expires || expires - new Date().getTime() < 1) {
		console.log('new call');
		getOAuth().then(function () {
			getPets();
		});
		return;
	}

	// Otherwise, get pets
	console.log('from cache');
	getPets();

};

makeCall();
btn.addEventListener('click', makeCall, false);


