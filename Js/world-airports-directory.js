const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'world-airports-directory.p.rapidapi.com'
	}
};

fetch('https://world-airports-directory.p.rapidapi.com/v1/airports/dub?page=1&limit=20&sortBy=AirportName%3Aasc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//freemium
//works