const unirest = require("unirest");

const req = unirest("GET", "https://google-flights-search.p.rapidapi.com/search");

req.query({
	"departure_airport_code": "SFO",
	"arrival_airport_code": "LAX",
	"flight_class": "Economy"
});

req.headers({
	"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
	"X-RapidAPI-Host": "google-flights-search.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

//freemium
//slow