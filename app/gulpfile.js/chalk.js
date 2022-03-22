const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const chalk = require('chalk');

// Cyan = Bump Color
const bump = '#1cb1dc';

const app = '#d3b352';
const des = '#6db91c';
const grey = '#3f4549';
const npm = '#fd2169';
const arc = '#c26912';

//Green = Shopify Color
const shop = '#13af73';
const pink = '#fd2169';

const lpink = '#ef6cf1';

const git = '#7952d3';
const dep = '#2b0f6b';
const lpurp = '#7b5be2';

//Duration = Yellow
const milliseconds = '#ffc000';
const mill = '#d3b352';
//Text = Blue
const text = '#00a2ff';

//Define Src and Dest Filepaths

function start() {
	const str = performance.now();
	return str;
}
const startnow = start();
function end(taskName, taskDescription, taskColor, s, type = 1) {
	const e = performance.now();
	var ms = e - s;
	var sec = ms.toFixed(2);
	var done = sec / 1000.0;
	done = done.toFixed(2);
	if (type === 1) {
		console.log(
			`${chalk.hex('#7e7e7e').bgHex('#000000').bold('   ✓')}`,
			`${chalk
				.hex(text)
				.italic(
					`${taskDescription} ${chalk.white.dim(`compiled in:`)} ${chalk
						.hex(milliseconds)
						.bgBlack.bold(`${done}s`)}`
				)}`
		);
	}
	if (type === 2) {
		console.log(
			`${chalk.hex('#000000').bgHex(taskColor).bold(taskName)}`,
			`${chalk
				.hex(text)
				.italic(
					`${taskDescription} ${chalk.gray.dim(`finished in:`)} ${chalk
						.hex(milliseconds)
						.bgBlack.bold(`${done}ms`)}`
				)}`
		);
	}
}

function mkdir() {
	console.log(
		`${chalk.white.bgHex(shop).bold(' Desmond: ')}`,
		`${chalk.hex(shop).italic.bold(`Created New Directories`)}`
	);
}
function br() {
	return src('./')
		.pipe(plumber())
		.on('end', () => {
			console.log('\n');
		});
}

function linebreak() {
	return console.log('\n');
}
function empty() {
	return console.log(`${chalk.black('-----------')}`);
}

function frey() {
	return console.log(
		`${chalk.gray.dim(
			'-------------------------------------------------------'
		)}`
	);
}

function desmond(x) {
	return console.log(
		`${chalk
			.hex(x)
			.dim('-------------------------------------------------------')}`
	);
}

function logger(taskName, taskDesc, taskColor, type = 1) {
	console.log(
		`${chalk
			.hex(taskColor)
			.dim('-------------------------------------------------------')}`
	);
	if (type === 1) {
		console.log(
			`${chalk.white.bgHex(taskColor).bold(taskName)}`,
			`${chalk.hex(taskColor).italic.bold(taskDesc)}`
		);
	}
	if (type === 2) {
		console.log(
			`${chalk.hex('#000000').bgHex(taskColor).bold(taskName)}`,
			`${chalk.hex(taskColor).italic.bold(taskDesc)}`
		);
	}
	console.log(
		`${chalk
			.hex(taskColor)
			.dim('-------------------------------------------------------')}`
	);
}

function cmd(taskDesc, taskColor, type = 1) {
	if (type === 1) {
		console.log(
			`${chalk.hex('#7e7e7e').bgHex('#000000').bold('   ✓')}`,
			`${chalk.hex(taskColor).italic.bold(taskDesc)}`
		);
	}
	if (type === 2) {
		console.log(
			`${chalk.white.bgHex('#000000').bold('------')}`,
			`${chalk.hex(taskColor).italic.bold(taskDesc)}`
		);
	}
	// console.log(
	// 	`${chalk.gray.dim(
	// 		'-------------------------------------------------------'
	// 	)}`
	// );
}

function hguides() {
	return console.log(
		`${chalk.hex(bump)(
			'------------------------------------------------------------'
		)}`
	);
}
function vempty(x) {
	return console.log(
		`${chalk.hex(x).bgHex(x).bold('||')}`,
		`${chalk.black(
			'-----------------------------------------------------------------'
		)}`,
		`${chalk.hex(x).bgHex(x).bold('||')}`
	);
}
function vfrey(x) {
	return console.log(
		`${chalk.hex(x).bgHex(x).bold('||')}`,
		`${chalk.gray.dim(
			'-----------------------------------------------------------------'
		)}`,
		`${chalk.hex(x).bgHex(x).bold('||')}`
	);
}
function vbreak() {
	return console.log(`${chalk.hex(bump).bold('||  ')}`, '\n');
}

function watcher() {
	linebreak();
	desmond();
	console.log(
		`${chalk.white.bgHex(shop).bold(' Desmond: ')}`,
		`${chalk.hex(shop).italic.bold(`is Watching for Changes!!`)}`
	);
	desmond();
}

const urls = {
	admin: 'https://seerseven.myshopify.com/admin',
	customize: 'https://tinyurl.com/seerseven-theme-editor',
	local: 'http://127.0.0.1:9292',
	preview: 'https://tinyurl.com/seerseven-theme-preview',
};

function links() {
	console.log(
		`${chalk.white
			.bgHex(bump)
			.bold(
				'                            VIEW THEME                                 '
			)}`
	);
	vempty(bump);
	vempty(bump);

	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Local: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.local}`)}`,
		`${chalk.black('-----------------------------')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vfrey(bump);
	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Admin: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.admin}`)}`,
		`${chalk.black('-------------')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vfrey(bump);
	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Editor: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.customize}`)}`,
		`${chalk.black('-------')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vfrey(bump);
	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Preview: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.preview}`)}`,
		`${chalk.black('-----')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vempty(bump);
	vempty(bump);
	console.log(
		`${chalk.white
			.bgHex(text)
			.bold(
				'                                                                       '
			)}`
	);
	empty();
}

const devurls = {
	git: 'https://github.com/',
	npm: 'https://www.npmjs.com/',
	shop: 'https://tinyurl.com/shop-partners',
};

function dev() {
	console.log(
		`${chalk
			.hex('#000000')
			.bgHex(shop)
			.bold(
				'                             DEV LINKS                                 '
			)}`
	);
	vempty(shop);
	vempty(shop);

	console.log(
		`${chalk.hex(shop).bgHex(shop).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(git).bold(' Github: ')}`,
		`${chalk.hex(mill).italic.bold(`${devurls.git}`)}`,
		`${chalk.black('------------------------------')}`,
		`${chalk.hex(shop).bgHex(shop).bold('||')}`
	);
	vfrey(shop);
	console.log(
		`${chalk.hex(shop).bgHex(shop).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(pink).bold(' NpmJS: ')}`,
		`${chalk.hex(mill).italic.bold(`${devurls.npm}`)}`,
		`${chalk.black('----------------------------')}`,
		`${chalk.hex(shop).bgHex(shop).bold('||')}`
	);
	vempty(shop);
	vempty(shop);
	console.log(
		`${chalk.white
			.bgHex(shop)
			.bold(
				'                                                                       '
			)}`
	);
	empty();
}

function devlinks() {
	console.log(
		`${chalk.black('--')}`,
		`${chalk.white.bgHex(git).bold(' Github: ')}`,
		`${chalk.hex(mill).italic.bold(`${devurls.git}`)}`
	);
	frey();
	console.log(
		`${chalk.black('--')}`,
		`${chalk.white.bgHex(pink).bold(' NpmJS: ')}`,
		`${chalk.hex(mill).italic.bold(`${devurls.npm}`)}`
	);
	frey();
	console.log(
		`${chalk.black('--')}`,
		`${chalk.white.bgHex(bump).bold(' Localhost: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.local}`)}`
	);
	frey();
	console.log(
		`${chalk.black('--')}`,
		`${chalk.white.bgHex(des).bold(' Shopify: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.admin}`)}`
	);
	frey();
	console.log(
		`${chalk.black('--')}`,
		`${chalk.white.bgHex(shop).bold(' Partners: ')}`,
		`${chalk.hex(mill).italic.bold(`${devurls.shop}`)}`
	);
	// frey();
	// console.log(
	// 	`${chalk.black('--')}`,
	// 	`${chalk.white.bgHex(bump).bold(' Preview: ')}`,
	// 	`${chalk.hex(text).italic.bold(`${urls.preview}`)}`
	// );
	// frey();
	// console.log(
	// 	`${chalk.black('--')}`,
	// 	`${chalk.white.bgHex(bump).bold(' Editor: ')}`,
	// 	`${chalk.hex(text).italic.bold(`${urls.customize}`)}`
	// );
}

exports.end = end;
exports.start = start;
exports.bhex = bump;
exports.nhex = npm;
exports.ahex = arc;
exports.ghex = git;
exports.dhex = dep;
exports.shex = shop;
exports.thex = app;
exports.fhex = text;
exports.now = startnow;
exports.dir = mkdir;
exports.logger = logger;
exports.cmd = cmd;
exports.break = linebreak;
exports.br = series(br);
exports.empty = empty;
exports.frey = frey;
exports.desmond = desmond;
exports.url = links;
exports.dev = dev;
exports.devlinks = devlinks;
exports.watcher = watcher;

exports.cyan = bump;
exports.pink = npm;
exports.lpink = lpink;
exports.lpurp = lpurp;
exports.oj = arc;
exports.purp = git;
exports.dpurp = dep;
exports.teal = shop;
exports.yell = app;
exports.blue = text;
exports.grey = grey;
exports.des = des;
