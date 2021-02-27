// VERIFY CHECKSUM
var unirest = require("unirest");

var req = unirest("GET", "https://ean-lookup.p.rapidapi.com/api");

req.query({
	"op": "verify-checksum",
	"ean": "<REQUIRED>",
	"format": "json"
});

req.headers({
	"x-rapidapi-key": "bba26e8b4amsh8e0728636054391p18de23jsn678f21bfc383",
	"x-rapidapi-host": "ean-lookup.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

// PRODUCT SEARCH
var unirest = require("unirest");

var req = unirest("GET", "https://ean-lookup.p.rapidapi.com/api");

req.query({
	"name": "<REQUIRED>",
	"op": "product-search",
	"page": "0",
	"format": "json"
});

req.headers({
	"x-rapidapi-key": "bba26e8b4amsh8e0728636054391p18de23jsn678f21bfc383",
	"x-rapidapi-host": "ean-lookup.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

//BARCODE LOOK UP
var unirest = require("unirest");

var req = unirest("GET", "https://ean-lookup.p.rapidapi.com/api");

req.query({
	"op": "barcode-lookup",
	"ean": "<REQUIRED>",
	"format": "json"
});

req.headers({
	"x-rapidapi-key": "bba26e8b4amsh8e0728636054391p18de23jsn678f21bfc383",
	"x-rapidapi-host": "ean-lookup.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});