const unirest = require("unirest");

const req = unirest("GET", "https://visual-crossing-weather.p.rapidapi.com/forecast");

req.query({
	"aggregateHours": "24",
	"location": "Washington,DC,USA",
	"contentType": "csv",
	"unitGroup": "us",
	"shortColumnNames": "0"
});

req.headers({
	"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
	"X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

//freemium