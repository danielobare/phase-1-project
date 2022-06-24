function geoServices(){
	fetch(
		"https://geo-services-by-mvpc-com.p.rapidapi.com/sun_positions?location=43%2C5&date=2019-10-14",
		{
		  headers: {
			"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
			"X-RapidAPI-Host": "geo-services-by-mvpc-com.p.rapidapi.com",
            "access-control-allow-credentials": "true",
            "access-control-allow-headers": "Origin, X-Requested-With, Content-Type, Accept",
            "access-control-allow-origin": "*",
            "connection": "keep-alive",
            "content-length": "545",
            "content-type": "application/json; charset=utf-8",
            "date": "Thu, 23 Jun 2022 20:26:19 GMT",
            "etag": "W/\"221-wlIHhyLhAZ8+atSu19cT1+x1Mfw\"",
            "server": "RapidAPI-1.2.8",
            "via": "1.1 32c8da10203574baccb74b8f771a7ffa.cloudfront.net (CloudFront)",
            "x-amz-apigw-id": "UMTgzGFgoAMF1tA=",
            "x-amz-cf-id": "4-XbABhCG_gMwA_-7gKY8wmMkEbtYpgNCvo8sGbXjg6GQyYKfTmZnQ==",
            "x-amz-cf-pop": "FRA50-C1",
            "x-amzn-remapped-connection": "close",
            "x-amzn-remapped-content-length": "545",
            "x-amzn-remapped-date": "Thu, 23 Jun 2022 20:26:19 GMT",
            "x-amzn-requestid": "0a6695a3-f186-47d6-920d-ffb316070534",
            "x-amzn-trace-id": "Root=1-62b4cc6b-64f6b87e2af036e44071f41c;Sampled=0",
            "x-cache": "Miss from cloudfront",
            "x-powered-by": "Express",
            "x-rapidapi-region": "AWS - eu-central-1",
            "x-rapidapi-version": "1.2.8",
            "x-ratelimit-requests-limit": "1000",
            "x-ratelimit-requests-remaining": "997",
            "x-ratelimit-requests-reset": "2591960"
		  }
	  }).then((response)=>{
		  return response.text();
	  }).then((data) => {
		  console.log(data);
	  })
}

function geoServicesEvent(){
	document.getElementById('geo-services').innerHTML = geoServices;
}

document.getElementById('btn2').addEventListener('click', geoServicesEvent);