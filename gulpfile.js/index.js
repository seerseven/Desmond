'use strict';

const { series } = require('gulp');
const zip = require('./archive.js');
const ver = require('./bump.js');
const shop = require('./shopify.js');
const watch = require('./watch.js');
const chalk = require('./chalk.js');
const git = require('./git.js');
const npx = require('./npm.js');

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
exports.theme = zip.app;
exports.node = zip.npm;
exports.desmond = zip.desmond;
exports.archive = zip.project;

//Build & Default Tasks
exports.default = series(shop.links, watch.status, watch.files);
