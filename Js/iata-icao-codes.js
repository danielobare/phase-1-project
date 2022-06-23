const unirest = require("unirest");

const req = unirest("GET", "https://iata-and-icao-codes.p.rapidapi.com/airlines");

req.headers({
	"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
	"X-RapidAPI-Host": "iata-and-icao-codes.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

//free
//works