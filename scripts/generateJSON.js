const csv = require("csvtojson");
const fs = require("fs");
const Moment = require("moment");

csv().fromFile("dates.csv")
	.then((jsonObj)=>{
	    //console.log(jsonObj);

	    const parsedJson = jsonObj.map( item => {
	    	return {
				"sys": {
					"space": {
						"sys": {
							"type": "Link",
							"linkType": "Space",
							"id": "7k0m7hkot1dm",
						},
					},
					"type": "Entry",
					"environment": {
						"sys": {
							"id": "master",
							"type": "Link",
							"linkType": "Environment",
						},
					},
					"publishedCounter": 1,
					"version": 1,
					"contentType": {
						"sys": {
							"type": "Link",
							"linkType": "ContentType",
							"id": "event",
						},
					},
				},
				"fields": {
					"title": {
						"en-US": item.Title,
					},
					"date": { //2017-11-10T00:00+01:00
						"en-US": Moment(item.Date).format(),
					},
					"location": {
						"en-US": item.Location,
					},
					"role": {
						"en-US": item.Role,
					},
					"description": {
						"en-US": "",
					},
					"details": {
						"en-US": "",
					},
					"image": {
						"en-US": {
							"sys": {
								"type": "Link",
								"linkType": "Asset",
								"id": "Q2AufNcOuACywigCIEOsa",
							},
						},
					},
				},
	    	};
	    });

	    fs.writeFile(
	    	"import.json", 
	    	JSON.stringify(
	    		{
					"entries": parsedJson,
				},
			), 
			function(err) {
				if (err) console.log(err);
			}
		);
	});