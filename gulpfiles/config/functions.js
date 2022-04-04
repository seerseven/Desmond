const conf = require('../config/config');

//config
const x = conf.colors;
const p = conf.plugins;
const s = conf.paths.input;
const d = conf.paths.output;
const o = conf.plugins.opts;

module.exports = {
	bumpVersion: function (input) {
		// define our current string, then seperate it into substrings
		var oldVersion = input,
			vParts = oldVersion.split('.');

		// assign each substring a position within our array
		var partsArray = {
			major: vParts[0],
			minor: vParts[1],
			patch: vParts[2],
		};

		// target the substring we want to increment on
		partsArray.patch = parseFloat(partsArray.patch) + 01;

		// set an empty array to join our substring values back to
		var vArray = [];

		// grabs each property inside our partsArray object
		for (var prop in partsArray) {
			if (partsArray.hasOwnProperty(prop)) {
				// add each property to the end of our new array
				vArray.push(partsArray[prop]);
			}
		}
		// join everything back into one string with a period between each new property
		var newVersion = vArray.join('.');

		const output = newVersion;

		return output;
	},
};

exports.bump = bumpVersion;
