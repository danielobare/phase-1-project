const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'google-flights-search.p.rapidapi.com'
	}
};

fetch('https://google-flights-search.p.rapidapi.com/search?departure_airport_code=SFO&arrival_airport_code=LAX&flight_class=Economy', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//freemium
//slow