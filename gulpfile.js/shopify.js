// Gulp Dependecies
const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const shell = require('gulp-shell');

const shopify = {
	push: function () {
		return src('app/shopify').pipe(
			shell('cd app/shopify && echo y && echo y | shopify theme push')
		);
	},
};

exports.pushtheme = shopify.push;
