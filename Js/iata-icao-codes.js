function iataIcaoCodes(){
	fetch(
		"https://iata-and-icao-codes.p.rapidapi.com/airlines",
		{
		  headers: {
			"X-RapidAPI-Key": "68cf647b7amsh2469ec3887468a1p18243ajsncf1aad177e7f",
			"X-RapidAPI-Host": "iata-and-icao-codes.p.rapidapi.com",
			"accept-ranges": "bytes",
			"access-control-allow-credentials": "true",
			"access-control-allow-origin": "*",
			"age": "40189",
			"connection": "keep-alive",
			"content-length": "47483",
			"content-type": "application/json",
			"date": "Thu, 23 Jun 2022 20:31:13 GMT",
			"etag": "\"bdc9e562dbd367932b8930fbb9ff77bb\"",
			"last-modified": "Sat, 04 May 2019 00:18:16 GMT",
			"server": "RapidAPI-1.2.8",
			"via": "1.1 49e78dae34a1d21beb31b4002f7ce92e.cloudfront.net (CloudFront)",
			"x-amz-cf-id": "RNYAOlSxsKBv39IQkC-i0Tu7bifSJYQ8TxiBFSD2pd3dhgxZWjHGGA==",
			"x-amz-cf-pop": "DUS51-C1",
			"x-amz-id-2": "r9wIghIXQm3YfQUgWrn9nauTeqFI6M+50xpsywlwJE6TBBTo3LajyXc82dapq1qGVkfi2s0v1+4=",
			"x-amz-request-id": "REKNRQ9BHMHX35PE",
			"x-amz-version-id": "null",
			"x-cache": "Hit from cloudfront",
			"x-rapidapi-region": "AWS - eu-central-1",
			"x-rapidapi-version": "1.2.8"
		  }
	  }).then((response)=>{
		  return response.text();
	  }).then((data) => {
		  console.log(data);
	  })
}

iataIcaoCodes();



//free
//works