const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
	
//freemium