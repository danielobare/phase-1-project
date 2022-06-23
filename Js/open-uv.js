const unirest = require("unirest");

const req = unirest("GET", "https://aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com/api/v1/uv");

req.query({
	"lat": "latitude, from -90.00 to 90.00",
	"lng": "longitude, from -180.00 to 180.00"
});

req.headers({
	"x-access-token": "undefined",
	"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
	"X-RapidAPI-Host": "aershov-openuv-global-real-time-uv-index-v1.p.rapidapi.com",
	"useQueryString": true
});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

//FREE