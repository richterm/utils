var URI = require("URIjs");
var R = require("ramda");

module.exports = R.pipe(
	R.constructN(1, URI),
	R.invoke("removeSearch", [
		"utm_content"
	]),
	R.invoke("removeSearch", [
		"utm_term"
	]),
	R.invoke("removeSearch", [
		"utm_campaign"
	]),
	R.invoke("removeSearch", [
		"utm_reader"
	]),
	R.invoke("removeSearch", [
		"utm_source"
	]),
	R.invoke("removeSearch", [
		"utm_medium"
	]),
	R.invoke("toString", [])
);
