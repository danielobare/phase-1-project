const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'iata-and-icao-codes.p.rapidapi.com'
	}
};

fetch('https://iata-and-icao-codes.p.rapidapi.com/airlines', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	
//free
//works