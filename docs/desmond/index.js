'use strict';
const { series } = require('gulp');
const zip = require('./gulp/archive.js');
const ver = require('./gulp/bump.js');
const shop = require('./gulp/shopify.js');
const watch = require('./watch.js');
const chalk = require('./gulp/chalk.js');
const git = require('./gulp/git.js');
const npx = require('./gulp/npm.js');

//Misc Tasks
exports.bump = ver.bump;
exports.app = ver.app;
exports.npm = ver.npm;
exports.des = ver.des;
exports.break = chalk.br;

//NPM Tasks
exports.merge = npx.merge;
exports.publish = npx.publish;
exports.install = npx.install;
exports.package = npx.package;
exports.npmpackage = npx.npmpackage;

//Shopify Tasks
exports.links = shop.links;
exports.devlinks = shop.devlinks;
exports.themepull = shop.pull;
exports.themenew = shop.unpub;
exports.themeserve = shop.serve;
exports.themepush = shop.shove;
exports.shopify = shop.theme;

//Commit & Push Tasks
exports.save = git.commit;
exports.send = git.shove;
exports.deploy = git.deploy;

//Archive Tasks
exports.zipapp = zip.app;
exports.zipnpm = zip.npm;
exports.zipdes = zip.des;
exports.archive = zip.project;

//Build & Default Tasks
exports.default = series(watch.status, watch.files);
