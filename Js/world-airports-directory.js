const unirest = require("unirest");

const req = unirest("GET", "https://world-airports-directory.p.rapidapi.com/v1/airports/dub");

req.query({
	"page": "1",
	"limit": "20",
	"sortBy": "AirportName:asc"
});

req.headers({
	"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
	"X-RapidAPI-Host": "world-airports-directory.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

//freemium
//works