const { task, series, watch, src, dest, parallel } = require('gulp');
const { performance } = require('perf_hooks');
//require
const plugins = require('./plugins');
const conf = require('./config');
const v = require('./variables');

const chalk = plugins.chalk;
const hx = v.colors;

function begin() {
	const str = performance.now();
	return str;
}
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
				.hex(hx.text)
				.italic(
					`${taskDescription} ${chalk.white.dim(`compiled in:`)} ${chalk
						.hex(hx.milliseconds)
						.bgBlack.bold(`${done}s`)}`
				)}`
		);
	}
	if (type === 2) {
		console.log(
			`${chalk.hex('#000000').bgHex(taskColor).bold(taskName)}`,
			`${chalk
				.hex(hx.text)
				.italic(
					`${taskDescription} ${chalk.gray.dim(`finished in:`)} ${chalk
						.hex(hx.milliseconds)
						.bgBlack.bold(`${done}ms`)}`
				)}`
		);
	}
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

function mkdir() {
	console.log(
		`${chalk.white.bgHex(hx.shop).bold(' Desmond: ')}`,
		`${chalk.hex(hx.shop).italic.bold(`Created New Directories`)}`
	);
}
function br() {
	return src('./')
		.pipe(plugins.plumber())
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

// function logger(taskName, taskDesc, taskColor, type = 1) {
// 	console.log(
// 		`${c
// 			.hex(taskColor)
// 			.dim('-------------------------------------------------------')}`
// 	);
// 	if (type === 1) {
// 		console.log(
// 			`${chalk.white.bgHex(taskColor).bold(taskName)}`,
// 			`${chalk.hex(taskColor).italic.bold(taskDesc)}`
// 		);
// 	}
// 	if (type === 2) {
// 		console.log(
// 			`${chalk.hex('#000000').bgHex(taskColor).bold(taskName)}`,
// 			`${chalk.hex(taskColor).italic.bold(taskDesc)}`
// 		);
// 	}
// 	console.log(
// 		`${c
// 			.hex(taskColor)
// 			.dim('-------------------------------------------------------')}`
// 	);
// }

function hguides() {
	return console.log(
		`${chalk.hex(hx.bump)(
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
	return console.log(`${chalk.hex(hx.bump).bold('||  ')}`, '\n');
}

function watcher() {
	linebreak();
	desmond(hx.shop);
	console.log(
		`${chalk.white.bgHex(hx.shop).bold(' Desmond: ')}`,
		`${chalk.hex(hx.shop).italic.bold(`is Watching for Changes!!`)}`
	);
	desmond(hx.shop);
}

const urls = {
	admin: 'https://seerseven.myhx.shopify.com/admin',
	customize: 'https://tinyurl.com/seerseven-theme-editor',
	local: 'http://127.0.0.1:9292',
	preview: 'https://tinyurl.com/seerseven-theme-preview',
};

function links() {
	console.log(
		`${chalk.white
			.bgHex(hx.bump)
			.bold(
				'                            VIEW THEME                                 '
			)}`
	);
	vempty(hx.bump);
	vempty(hx.bump);

	console.log(
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(hx.shop).bold(' Local: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.local}`)}`,
		`${chalk.black('-----------------------------')}`,
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`
	);
	vfrey(hx.bump);
	console.log(
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(hx.shop).bold(' Admin: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.admin}`)}`,
		`${chalk.black('-------------')}`,
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`
	);
	vfrey(hx.bump);
	console.log(
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(hx.shop).bold(' Editor: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.customize}`)}`,
		`${chalk.black('-------')}`,
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`
	);
	vfrey(hx.bump);
	console.log(
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(hx.shop).bold(' Preview: ')}`,
		`${chalk.hex(mill).italic.bold(`${urls.preview}`)}`,
		`${chalk.black('-----')}`,
		`${chalk.hex(hx.bump).bgHex(hx.bump).bold('||')}`
	);
	vempty(hx.bump);
	vempty(hx.bump);
	console.log(
		`${chalk.white
			.bgHex(hx.text)
			.bold(
				'                                                                       '
			)}`
	);
	empty();
}

const devurls = {
	git: 'https://github.com/',
	npm: 'https://www.npmjs.com/',
};

function dev() {
	console.log(
		`${c
			.hex('#000000')
			.bgHex(hx.shop)
			.bold(
				'                             DEV LINKS                                 '
			)}`
	);
	vempty(hx.shop);
	vempty(hx.shop);

	console.log(
		`${chalk.hex(hx.shop).bgHex(hx.shop).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(git).bold(' Github: ')}`,
		`${chalk.hex(mill).italic.bold(`${devurls.git}`)}`,
		`${chalk.black('------------------------------')}`,
		`${chalk.hex(hx.shop).bgHex(hx.shop).bold('||')}`
	);
	vfrey(hx.shop);
	console.log(
		`${chalk.hex(hx.shop).bgHex(hx.shop).bold('||')}`,
		`${chalk.black('----')}`,
		`${chalk.white.bgHex(pink).bold(' NpmJS: ')}`,
		`${chalk.hex(mill).italic.bold(`${devurls.npm}`)}`,
		`${chalk.black('----------------------------')}`,
		`${chalk.hex(hx.shop).bgHex(hx.shop).bold('||')}`
	);
	vempty(hx.shop);
	vempty(hx.shop);
	console.log(
		`${chalk.white
			.bgHex(hx.shop)
			.bold(
				'                                                                       '
			)}`
	);
	empty();
}

exports.end = end;
exports.start = begin;
exports.dir = mkdir;
exports.cmd = logger;
exports.log = cmd;
exports.break = linebreak;
exports.br = series(br);
exports.empty = empty;
exports.frey = frey;
exports.desmond = desmond;
exports.url = links;
exports.dev = dev;
exports.watcher = watcher;
