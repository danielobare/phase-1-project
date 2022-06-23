const unirest = require("unirest");

const req = unirest("GET", "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/");

req.query({
	"destination": "LED",
	"origin": "MOW"
});

req.headers({
	"X-Access-Token": "undefined",
	"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
	"X-RapidAPI-Host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

// freemium