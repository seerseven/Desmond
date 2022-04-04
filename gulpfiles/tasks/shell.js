const { series, parallel, src, dest, task } = require('gulp');

//require
const conf = require('../config/config');
const log = require('../config/cmd');
const auto = {
	generateTasks: function () {
		const exportsArray = Object.keys(module.exports);
		exportsArray.map((element) => {
			return task(element, module.exports[element]);
		});
	},
};

//config
const x = conf.colors;
const p = conf.plugins;
const s = conf.paths.input;
const d = conf.paths.output;
const o = conf.plugins.opts;
const l = log;
const u = undefined;

module.exports = {
	npmpublish: function () {
		start;
		return src('./npm')
			.pipe($.shell('cd npm && npm publish'))
			.on('end', () => {
				c.frey();
				c.end(v, 'Package Published... ', c.nhex);
				c.frey();
			});
	},
	npminstall: function () {
		start;
		return src('./app')
			.pipe(
				$.shell(
					'cd app && npm install -f --save-dev --no-audit @seerseven/desmond@latest'
				)
			)
			.on('end', () => {
				c.frey();
				c.end(v, 'Package Installed... ', c.nhex);
				c.frey();
			});
	},
	themeserve: function () {
		c.empty();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe($.shell('shopify login --store seerseven.myshopify.com'))
			.pipe($.shell('cd app/shopify && shopify theme serve'))
			.on('end', () => {
				c.end(v, 'Logged into Shopify Local Theme... ', c.shex);
				c.desmond(c.shex);
			});
	},
	themename: function () {
		c.break();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe($.shell('cd app/shopify && shopify theme push --unpublished'))
			.on('end', () => {
				c.desmond(c.shex);
				c.end(v, 'Theme Pushed Successfully... ', c.shex);
				c.desmond(c.shex);
			});
	},
	themepull: function () {
		c.break();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe($.shell('cd app/shopify && echo y && echo y | shopify theme pull'))
			.on('end', () => {
				c.desmond(c.shex);
				c.end(v, 'Theme Pulled Successfully... ', c.shex);
				c.desmond(c.shex);
			});
	},
	themepush: function () {
		c.break();
		c.desmond(c.shex);
		start;
		return src('app/shopify')
			.pipe(shell('cd app/shopify && echo y && echo y | shopify theme push'))
			.on('end', () => {
				c.desmond(c.shex);
				c.end(v, 'Theme Pushed Successfully... ', c.shex);
				c.desmond(c.shex);
			});
	},
};

auto.generateTasks();
