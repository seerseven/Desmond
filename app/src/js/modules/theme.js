import { header } from './base/header';
import { darkmode } from './components/darkmode';
import { qry, ejs, dom, get, id, loop } from './abstracts/mixins/element';

header.init();
darkmode.init();

dom.edit('id', 'element', 'add', 'SUCK-MY-BALLS');
dom.make('div', 'new');

const test = get.id('sideNavBar');
console.log(test);
