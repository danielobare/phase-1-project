const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

fetch('https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//freemium