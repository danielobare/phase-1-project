const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
	}
};

fetch('https://flight-radar1.p.rapidapi.com/airports/list', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//freemium