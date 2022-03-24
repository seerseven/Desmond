const text = {
	sass: 'Compile SASS to CSS',
	post: 'Dist Unminified CSS',
	dist: 'Process POST to CSS',
	build: 'Rename, Minify & Build',
};

module.exports.css = {
	shopify: {
		title: c.logger(' CSS ', 'COMPILE SHOPIFY CSS', c.blue),
		sass: log.cmd(text.sass, c.pink),
		dist: log.cmd(text.dist, c.yell),
		build: log.cmd(text.build, c.teal),
		end: c.end(z, 'SHOPIFY.MIN.CSS', c.cyan),
		break: c.desmond(c.bhex),
	},
	theme: {
		title: c.logger(' CSS ', 'COMPILE THEME CSS', c.blue),
		sass: log.cmd(text.sass, c.pink),
		post: log.cmd(text.post, c.purp),
		dist: log.cmd(text.dist, c.yell),
		build: log.cmd(text.build, c.teal),
		end: c.end(z, 'THEME.MIN.CSS', c.cyan),
		break: c.desmond(c.bhex),
	},
};
