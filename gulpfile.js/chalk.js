const { task, series, watch, src, dest, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const chalk = require('chalk');
const log = require('fancy-log');
const { performance } = require('perf_hooks');

// Cyan = Bump Color
const bump = '#1cb1dc';

const npm = '#fd2169';

//Green = Shopify Color
const shop = '#13af73';
const pink = '#fd2169';

const git = '#7952d3';
const dep = '#2b0f6b';

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
function end(taskName, taskDescription, taskColor, s) {
	const e = performance.now();
	var ms = e - s;
	var done = ms.toFixed(2);
	// var done = ms / 1000.0;
	console.log(
		`${chalk.white.bgHex(taskColor).bold(taskName)}`,
		`${chalk
			.hex(text)
			.italic(
				`${taskDescription} ${chalk.gray.dim(`finished in:`)} ${chalk
					.hex(milliseconds)
					.bgBlack.bold(`${done}ms`)}`
			)}`
	);
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

function hguides() {
	return console.log(
		`${chalk.hex(bump)(
			'------------------------------------------------------------'
		)}`
	);
}
function vempty() {
	return console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black(
			'-----------------------------------------------------------------'
		)}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
}
function vfrey() {
	return console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.gray.dim(
			'-----------------------------------------------------------------'
		)}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
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
	linebreak();
	console.log(
		`${chalk.white
			.bgHex(text)
			.bold(
				'                            VIEW THEME                                 '
			)}`
	);
	vempty();
	vempty();

	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Local: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.local}`)}`,
		`${chalk.black('-----------------------------')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vfrey();
	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Admin: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.admin}`)}`,
		`${chalk.black('-------------')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vfrey();
	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Editor: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.customize}`)}`,
		`${chalk.black('-------')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vfrey();
	console.log(
		`${chalk.hex(bump).bgHex(bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(shop).bold(' Preview: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.preview}`)}`,
		`${chalk.black('-----')}`,
		`${chalk.hex(bump).bgHex(bump).bold('||')}`
	);
	vempty();
	vempty();
	console.log(
		`${chalk.white
			.bgHex(text)
			.bold(
				'                                                                       '
			)}`
	);
	empty();
}

const error = chalk.bold.blue;
const warning = chalk.hex('#FFA500');

exports.end = end;
exports.start = start;
exports.bhex = bump;
exports.nhex = npm;
exports.ghex = git;
exports.dhex = dep;
exports.shex = shop;
exports.now = startnow;
exports.dir = mkdir;
exports.break = linebreak;
exports.br = series(br);
exports.empty = empty;
exports.frey = frey;
exports.desmond = desmond;
exports.url = links;
exports.watcher = watcher;
exports.error = error;
exports.warn = warning;
