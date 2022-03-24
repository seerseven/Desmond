const qry = {
	add: function (cls, sel) {
		$(sel).addClass(cls);
	},
	rem: function (cls, sel) {
		$(sel).removeClass(cls);
	},
	tog: function (cls, sel) {
		$(sel).toggleClass(cls);
	},
	has: function (cls, sel) {
		$(sel).hasClass(cls);
	},
	swop: function (cls1, cls2, sel) {
		$(sel).switchClass(cls1, cls2, 0);
	},
	attr: function (cls, val, sel) {
		$(sel).attr(cls, val);
	},
	prop: function (cls, val, sel) {
		$(sel).prop(cls, val);
	},
	data: function (cls, val, sel) {
		$(sel).data(cls, val);
	},
};

const ejs = {
	add: function (cls, sel) {
		sel.classList.add(cls);
	},
	rem: function (cls, sel) {
		sel.classList.remove(cls);
	},
	has: function (cls, sel) {
		sel.classList.contains(cls);
	},
	tog: function (cls, sel) {
		sel.classList.toggle(cls);
	},
	swop: function (cls1, cls2, sel) {
		sel.classList.replace(cls1, cls2);
	},
	len: function (sel) {
		sel.length();
	},
	set: function (cls, val, sel) {
		sel.setAttribute(cls, val);
	},
	get: function (cls, val, sel) {
		sel.getAttribute(cls, val);
	},
};

const get = {
	id: function (e) {
		return document.getElementById(e);
	},
	qry: function (e) {
		return document.querySelector(e);
	},
	all: function (e) {
		return document.querySelectorAll(e);
	},
	class: function (e) {
		return document.getElementsByClassName(e);
	},
	tag: function (e) {
		return document.getElementsByTagName(e);
	},
};

const id = {
	new: function (i, v) {
		s = get.id(i);
		ejs.set('id', v, s);
	},
	set: function (i, v) {
		s = get.class(i);
		ejs.set('id', v, s);
	},
};

const dom = {
	move: function (s1, dir, s2) {
		if (dir === 'before') {
			$(s1).insertBefore(s2);
		}
		if (dir === 'after') {
			$(s1).insertAfter(s2);
		}
		if (dir === 'start') {
			$(s1).prependTo(s2);
		}
		if (dir === 'end') {
			$(s1).appendTo(s2);
		}
	},
	wrap: function (s, v, t = 'div', i) {
		if (t === 'div') {
			if (i === undefined) {
				$(s).wrap("<div class='" + v + "'></div>");
			}
			if (i !== undefined) {
				$(s).wrap("<div id='" + i + "'" + "class='" + v + "'></div>");
			}
		}
		if (t === 'sec') {
			if (i === undefined) {
				$(s).wrap("<section class='" + v + "'></section>");
			}
			if (i !== undefined) {
				$(s).wrap("<section id='" + i + "'" + "class='" + v + "'></section>");
			}
		}
		if (t === 'main') {
			if (i === undefined) {
				$(s).wrap("<main class='" + v + "'></main>");
			}
			if (i !== undefined) {
				$(s).wrap("<main id='" + i + "'" + "class='" + v + "'></main>");
			}
		}
		if (t === 'head') {
			if (i === undefined) {
				$(s).wrap("<header class='" + v + "'></header>");
			}
			if (i !== undefined) {
				$(s).wrap("<header id='" + i + "'" + "class='" + v + "'></header>");
			}
		}
		if (t === 'foot') {
			if (i === undefined) {
				$(s).wrap("<footer class='" + v + "'></footer>");
			}
			if (i !== undefined) {
				$(s).wrap("<footer id='" + i + "'" + "class='" + v + "'></footer>");
			}
		}
	},
	inner: function (s, v, i) {
		if (i === undefined) {
			$(s).wrap("<div class='" + v + "'></div>");
		}
		if (i !== undefined) {
			$(s).wrap("<div id='" + i + "'" + "class='" + v + "'></div>");
		}
	},
	new: function (e) {
		return document.createElement(e);
	},
	make: function (e, c, i, w = 'end', a) {
		const element = dom.new(e);
		if (i === undefined) {
			element.setAttribute('class', c);
		}
		if (i !== undefined) {
			element.setAttribute('class', c);
			element.setAttribute('id', i);
		}
		if (w === 'end') {
			if (a === undefined) {
				document.body.appendChild(element);
			}
			if (a !== undefined) {
				elementsList['id'](a).appendChild(element);
			}
		}
		if (w === 'start') {
			item = elementsList['id'](a);
			item.insertBefore(element, item.childNodes[0]);
		}
	},
	edit: function (e, i, m, p) {
		s = get[e](i);
		ejs[m](p, s);
	},
	has: function (s, a, t, p, p2) {
		if ($(s).hasClass(a)) {
			if (t === 'add') {
				$(s).addClass(p);
			}
			if (t === 'rem') {
				$(s).removeClass(p);
			}
			if (t === 'shift') {
				$(s).toggleClass(p, p2);
			}
		}
	},
	all: function (a, x, p) {
		$(a).each(function (eq, el) {
			el = $(el);
			if (x === 'add') {
				el.addClass(p);
			}
			if (x === 'rem') {
				el.removeClass(p);
			}
		});
	},
	shift(a, b) {
		qry.swop('d-none', 'd-block', a);
		qry.swop(b, 'd-block', 'd-none', b);
	},
};

const loop = {
	id: function (a, p) {
		$(a).each(function (eq, el) {
			el = $(el);
			if (typeof el.attr('id') === 'undefined') {
				el.attr('id', p + eq);
			}
		});
	},
	class: function (a, p) {
		$(a).each(function (eq, el) {
			el = $(el);
			el.addClass(p + eq);
		});
	},
	rem: function (a, p) {
		$(a).each(function (eq, el) {
			el = $(el);
			el.removeClass(p);
		});
	},
};

dom.edit('id', 'testing', 'add', 'SUCK-MY-BALLS');
dom.make('div', 'new');

const test = get.id('sideNavBar');
console.log(test);
// const div = 'block-be2ef39cad6b4a7b9323e5d661b095bc';
// const main = 'block-6d55f0a3e06c494e9a42d3a4349643ae';
// const content = newID(main, 'mainContent');
// const newDiv = newID(div, 'newDiv');
// prepend('#newDiv', '#mainContent');
// wrap('#page-index', 'wrapper', 'main', '#mainWrapper');
// inner('#mainContent', 'inner-wrapper');
// move('#newDiv', 'end', '#mainWrapper');
// id('set', 'inner-wrapper', 'innerWrapper');

// move('.new', 'start', '#mainWrapper');
// css('add', 'Fucker', '#mainWrapper');
// css('rem', 'wrapper', '#mainWrapper');
// has('#sortable div', 'ui-state-default', 'add', 'Mother');
// has('#mainWrapper', 'Mother', 'rem', 'Fucker');
// all('#sortable div', 'ADDTOALL');
// loop('id', '#sortable div', 'child-');
// loop('class', '#sortable div', 'child-');

// // z.add('something', '#sideNavBar');

const animatedHeader = (function enableHeader() {
	//CONSTRUCTOR VARIABLES
	const seerHeader = document.getElementById('seer-header');
	const currentHeader = seerHeader.getAttribute('data-header');
	const headerHeight = seerHeader.getAttribute('data-height');
	const sideNavBar = document.getElementById('sideNavBar');

	//v = VARIABLES
	const v = {
		h: Number(headerHeight) || 300,
		e: 'header',
		h1: '.navbar\\:main',
		h2: '.navbar\\:center',
		h3: '.navbar\\:sidenav',
		s1: '#sideNavBar',
		s2: '#sidnav-control',
		collapsible: sideNavBar.getAttribute('data-collapse'),
		sideBar: document.querySelector('.side-bar'),
		main: document.getElementById('main'),
		sidetop: document.querySelector('.control-icons'),
		arrowCollapse: document.querySelector('#logo-name__icon'),
		arrowbtn: document.querySelector('.arrow-btn'),
		hamburger: document.querySelector('.hamburger'),
		root: $(':root'),
		html: document.documentElement,
		windowsize: $(window).width(),
		offset: $('.navbar\\:main').outerHeight(),
		arrow: 'arrow',
		menu: 'menu',
		collapse: 'collapse',
		close: 'close',
		show: 'show',
		over: 'over',
		hide: 'hide',
	};
	//F = FUNCTIONS
	const f = {
		//loop through array and call each function
		sidenavControls: function () {
			return Object.values(navControls).map((value) => {
				if (typeof value === 'function') {
					value.call();
				}
			});
		},
		//loop through array and call each function
		sidenavWindow: function () {
			return Object.values(navWindow).map((value) => {
				if (typeof value === 'function') {
					value.call();
				}
			});
		},
		//toggle menu active animation state
		menuIsActive: function () {
			return v.hamburger.classList.toggle('is-active');
		},
		//create custom header element
		society: function () {
			class SeerHeader extends HTMLElement {
				constructor() {
					super();
				}
			}
			customElements.define('seer-header', SeerHeader);
		},
	};
	//SIDENAV STATE FUNCTIONS
	const state = {
		toggle: function (x) {
			if (x === 'collapse') {
				v.sideBar.classList.toggle('collapse');
				v.main.classList.toggle('collapse');
				v.sidetop.classList.toggle('collapse');
			}
			if (x === 'close') {
				v.sideBar.classList.toggle('close');
				v.main.classList.toggle('close');
				v.sidetop.classList.toggle('close');
			}
			if (x === 'show') {
				v.sideBar.classList.toggle('show');
				v.sidetop.classList.toggle('show');
				v.main.classList.toggle('show');
			}
			if (x === 'over') {
				v.sideBar.classList.toggle('over');
				v.sidetop.classList.toggle('over');
				v.main.classList.toggle('over');
			}
		},
		remove: function (x) {
			if (x === 'collapse') {
				v.sideBar.classList.remove('collapse');
				v.main.classList.remove('collapse');
				v.sidetop.classList.remove('collapse');
			}
			if (x === 'close') {
				v.sideBar.classList.remove('close');
				v.main.classList.remove('close');
				v.sidetop.classList.remove('close');
			}
			if (x === 'show') {
				v.sideBar.classList.remove('show');
				v.sidetop.classList.remove('show');
				v.main.classList.remove('show');
			}
			if (x === 'over') {
				v.sideBar.classList.remove('over');
				v.sidetop.classList.remove('over');
				v.main.classList.remove('over');
			}
			if (x === 'media') {
				v.sideBar.classList.remove('media');
				v.sidetop.classList.remove('media');
				v.main.classList.remove('media');
			}
		},
		add: function (x) {
			if (x === 'collapse') {
				v.sideBar.classList.add('collapse');
				v.main.classList.add('collapse');
				v.sidetop.classList.add('collapse');
			}
			if (x === 'close') {
				v.sideBar.classList.add('close');
				v.main.classList.add('close');
				v.sidetop.classList.add('close');
			}
			if (x === 'show') {
				v.sideBar.classList.add('show');
				v.sidetop.classList.add('show');
				v.main.classList.add('show');
			}
			if (x === 'over') {
				v.sideBar.classList.add('over');
				v.sidetop.classList.add('over');
				v.main.classList.add('over');
			}
		},
		animate: function (x) {
			if (x === 'arrow') {
				if (v.sideBar.classList.contains('collapse')) {
					v.arrowCollapse.classList = 'bx bx-arrow-from-left logo-name__icon';
				} else {
					v.arrowCollapse.classList = 'bx bx-arrow-from-right logo-name__icon';
				}
			}
			if (x === 'menu') {
				v.hamburger.classList.toggle('is-active');
			}
			if (x === 'arrow-left') {
				v.arrowCollapse.classList.add('bx-arrow-from-left');
				v.arrowCollapse.classList.remove('bx-arrow-from-right');
			}
			if (x === 'arrow-right') {
				v.arrowCollapse.classList.add('bx-arrow-from-right');
				v.arrowCollapse.classList.remove('bx-arrow-from-left');
			}
		},
		collapsible: function () {
			if (v.collapsible === 'off') {
				v.arrowbtn.style.opacity = '0';
			}
		},
		change: function (x) {
			if (x === 'close') {
				state.animate(v.menu);
				if (v.sideBar.classList.contains(v.over)) {
					v.arrowbtn.classList.toggle(v.hide);
					state.toggle(v.show);
					state.remove(v.over);
					state.remove(v.close);
				} else if (v.sideBar.classList.contains(v.show)) {
					state.toggle(v.over);
					state.remove(v.show);
					v.arrowbtn.classList.toggle(v.hide);
				} else if (v.sideBar.classList.contains(v.collapse)) {
					state.toggle(v.close);
					state.remove(v.collapse);
					v.arrowCollapse.classList.remove(v.collapse);
					window.setTimeout(f.menuIsActive, 500);
					state.animate(v.arrow);
				} else {
					state.toggle(v.close);
					window.setTimeout(f.menuIsActive, 500);
				}
				if (v.collapsible === 'off') {
					if (v.sideBar.classList.contains(v.close)) {
						v.sidetop.classList.toggle('solo');
					} else {
						v.sidetop.classList.add('solo');
					}
				}
			}
			if (x === 'collapse') {
				state.toggle(v.collapse);
				v.arrowCollapse.classList.toggle(v.collapse);
				state.animate(v.arrow);
			}
		},
		pageClickClose: function () {
			v.main.onclick = () => {
				if (v.main.classList.contains(v.show)) {
					state.toggle(v.over);
					state.remove(v.show);
					window.setTimeout(f.menuIsActive, 500);
					v.arrowbtn.classList.toggle(v.hide);
				}
			};
		},
	};
	//WINDOW RESIZE
	const navWindow = {
		pageLoad: function () {
			if (window.innerWidth < 640) {
				state.add(v.close);
				dom.all('div', 'rem', 'media');
				v.sidetop.classList.remove('solo');
				state.add(v.over);
			}
			if (window.innerWidth < 900 && window.innerWidth > 641) {
				dom.all('div', 'rem', 'media');
				if (v.collapsible === 'on' || undefined) {
					state.add(v.collapse);
					state.animate('arrow-left');
				} else {
					state.add(v.close);
				}
			}
			if (window.innerWidth < 2000 && window.innerWidth > 901) {
				dom.all('div', 'rem', 'media');
				state.animate('arrow-right');
				if (v.collapsible === 'off') {
					v.sidetop.classList.add('solo');
				}
			}
		},

		smartResize: function () {
			(function ($, sr) {
				// debouncing function from John Hann
				// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
				var debounce = function (func, threshold, execAsap) {
					var timeout;

					return function debounced() {
						var obj = this,
							args = arguments;
						function delayed() {
							if (!execAsap) func.apply(obj, args);
							timeout = null;
						}

						if (timeout) clearTimeout(timeout);
						else if (execAsap) func.apply(obj, args);

						timeout = setTimeout(delayed, threshold || 100);
					};
				};
				// smartresize
				jQuery.fn[sr] = function (fn) {
					return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
				};
			})(jQuery, 'smartresize');

			// usage:
			$(window).smartresize(function () {
				window.addEventListener(
					'resize',
					function () {
						var layoutLG = window.innerWidth > 900 ? 'addClass' : 'removeClass';
						var layoutMD = window.innerWidth < 900 ? 'addClass' : 'removeClass';
						var layoutSM = window.innerWidth < 640 ? 'addClass' : 'removeClass';

						$(v.arrowCollapse)[layoutLG]('bx-arrow-from-right');
						$(v.arrowCollapse)[layoutMD]('bx-arrow-from-left');

						$(v.sideBar)[layoutSM]('over');
						$(v.sidetop)[layoutSM]('over');
						$(v.main)[layoutSM]('over');

						if (v.collapsible === 'on') {
							$(v.sideBar)[layoutMD]('collapse');
							$(v.sidetop)[layoutMD]('collapse');
							$(v.main)[layoutMD]('collapse');
						}
						if (v.collapsible === 'off') {
							$(v.sideBar)[layoutMD]('close');
							$(v.sidetop)[layoutMD]('close');
							$(v.main)[layoutMD]('close');
						}
						if (window.innerWidth > 900) {
							if (v.collapsible === 'off') {
								v.sidetop.classList.add('solo');
							}
						}
						if (window.innerWidth < 900) {
							if (v.collapsible === 'off') {
								v.sidetop.classList.add('solo');
							}
						}

						if (window.innerWidth > 640) {
							state.remove(v.over);
							if (v.collapsible === 'on') {
								state.remove(v.close);
								v.arrowbtn.classList.remove(v.hide);
							}
						}
						if (window.innerWidth < 640) {
							state.remove(v.collapse);
							if (v.collapsible === 'off') {
								v.sidetop.classList.remove('solo');
							}
						}
						if (v.sideBar.classList.contains(v.collapse)) {
							state.remove(v.show);
						}
						if (v.sideBar.classList.contains(v.show)) {
							v.hamburger.classList.remove('is-active');
						}
					},
					false
				);
			});
		},
	};
	//SIDENAV CONTROLS
	const navControls = {
		sidenavCollapse: function () {
			v.arrowCollapse.onclick = () => {
				state.change(v.collapse);
			};
		},
		sidenavClose: function () {
			v.hamburger.onclick = () => {
				state.change(v.close);
			};
		},
	};
	//NAVBAR ACTIONS
	const navAction = {
		animateBackground: function () {
			$(window).scroll(function () {
				var addRemClass =
					$(window).scrollTop() > v.h ? 'addClass' : 'removeClass';
				$(v.e)[addRemClass]('change');
				if (currentHeader === 'sidenav') {
					$(v.e)[addRemClass]('sidenav');
				}
			});
		},
		switchItemsCentered: function () {
			$(window).scroll(function () {
				var addRemClass =
					$(window).scrollTop() > v.h ? 'addClass' : 'removeClass';
				var remAddClass =
					$(window).scrollTop() > v.h ? 'removeClass' : 'addClass';
				function updateLogo() {
					$('.licons')[addRemClass]('d-none');
					$('.img-mobile')[remAddClass]('d-none');
				}
				window.setTimeout(updateLogo, 250);
			});
		},
		hideOnScroll: function () {
			var didScroll;
			var lastScrollTop = 0;
			var delta = 5;
			var navbarHeight = $(v.e).outerHeight();
			var topHeight = $('.navbar\\:top').outerHeight();
			var navUp = Math.abs(navbarHeight) * -1;
			var top = Math.abs(topHeight) * -1;
			$('body').css('padding-top', navbarHeight);
			$(window).scroll(function (event) {
				didScroll = true;
			});

			setInterval(function () {
				if (didScroll) {
					hasScrolled();
					didScroll = false;
				}
			}, v.h);

			function hasScrolled() {
				var st = $(this).scrollTop();
				if (Math.abs(lastScrollTop - st) <= delta) return;
				if (st > lastScrollTop && st > navbarHeight) {
					// Scroll Down
					$('body').css('padding-top', navbarHeight);
					$(v.e).css('top', navUp);
				} else {
					// Scroll Up
					if (st + $(window).height() < $(document).height()) {
						$('body').css('padding-top', navbarHeight);
						if (currentHeader === 'scroll') {
							$(v.e).css('top', 0);
						}
						if (currentHeader === 'center') {
							if ($(window).scrollTop() < 160) {
								$(v.e).css('top', 0);
							} else {
								$(v.e).css('top', top);
							}
						}
					}
				}
				lastScrollTop = st;
			}
		},
		clearDom: function (a, b, c) {
			if (a === 1) {
				$(v.h1).remove();
			}
			if (a === 0) {
			}
			if (b === 1) {
				$(v.h2).remove();
			}
			if (b === 0) {
			}
			if (c === 1) {
				state.remove('media');
				v.main.classList.toggle(v.show);
				$(v.h3).remove();
				$(v.s1).remove();
				$(v.s2).remove();
			}
			if (c === 0) {
			}
		},
	};
	//NAVBAR TYPES
	const navType = {
		navbarFixed: function () {
			navAction.clearDom(0, 1, 1);
			$('body').css('padding-top', v.offset);
			qry.add('navbar--fixed', 'header');
			navAction.animateBackground();
		},
		navbarScroll: function () {
			navAction.clearDom(0, 1, 1);
			qry.add('navbar--scroll', 'header');
			navAction.animateBackground();
			navAction.hideOnScroll();
		},
		navbarCenter: function () {
			navAction.clearDom(1, 0, 1);
			qry.add('navbar--centered', 'header');
			navAction.animateBackground();
			navAction.switchItemsCentered();
			navAction.hideOnScroll();
		},
		navbarSidenav: function () {
			navAction.clearDom(1, 1, 0);
			qry.add('navbar--sidenav', 'header');
			f.sidenavControls();
			f.sidenavWindow();
			navAction.animateBackground();
			state.pageClickClose();
			state.collapsible();
		},
	};
	//HEADER CONSTRUCTOR
	const headers = (function enableHeaders() {
		if (currentHeader === 'fixed') {
			navType.navbarFixed();
		}
		if (currentHeader === 'scroll') {
			navType.navbarScroll();
		}
		if (currentHeader === 'center') {
			navType.navbarCenter();
		}
		if (currentHeader === 'sidenav') {
			navType.navbarSidenav();
		}
		return enableHeaders;
	})();
	f.society();
	qry.add('bar', '#sideNavBar');
	return enableHeader;
})();
const darkMode = (function darkToggle() {
	function showLightThemeLogo() {
		$('.logo-dark').switchClass('d-block', 'd-none', 0);
		$('.logo-light').switchClass('d-none', 'd-block', 0);
	}
	function showDarkThemeLogo() {
		$('.logo-light').switchClass('d-block', 'd-none', 0);
		$('.logo-dark').switchClass('d-none', 'd-block', 0);
	}
	const themeToggle = $('#darkToggle input:checkbox');
	const root = $(':root');
	const currentTheme = localStorage.getItem('theme');
	function currenttheme() {
		root.attr('data-theme', currentTheme);
		if (currentTheme === 'dark') {
			themeToggle.prop('checked', true);
			themeToggle.attr('data-theme', currentTheme);
			showLightThemeLogo();
			$('html').switchClass('light', 'dark', 0);
		} else {
			$('html').switchClass('dark', 'light', 0);
		}
	}
	currenttheme();
	function switchTheme(e) {
		if (e.target.checked) {
			root.attr('data-theme', 'dark');
			themeToggle.attr('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
			$('html').switchClass('light', 'dark', 0);
			showLightThemeLogo();
		} else {
			root.attr('data-theme', 'light');
			themeToggle.attr('data-theme', 'light');
			localStorage.setItem('theme', 'light');
			$('html').switchClass('dark', 'light', 0);
			showDarkThemeLogo();
		}
	}
	themeToggle.on('click', switchTheme);
	class darkmodeIcons extends HTMLElement {
		constructor() {
			super();
		}

		connectedCallback() {
			this.innerHTML = `
			<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-sun"
		>
			<circle
				cx="12"
				cy="12"
				r="5"
			></circle>
			<line
				x1="12"
				y1="1"
				x2="12"
				y2="3"
			></line>
			<line
				x1="12"
				y1="21"
				x2="12"
				y2="23"
			></line>
			<line
				x1="4.22"
				y1="4.22"
				x2="5.64"
				y2="5.64"
			></line>
			<line
				x1="18.36"
				y1="18.36"
				x2="19.78"
				y2="19.78"
			></line>
			<line
				x1="1"
				y1="12"
				x2="3"
				y2="12"
			></line>
			<line
				x1="21"
				y1="12"
				x2="23"
				y2="12"
			></line>
			<line
				x1="4.22"
				y1="19.78"
				x2="5.64"
				y2="18.36"
			></line>
			<line
				x1="18.36"
				y1="5.64"
				x2="19.78"
				y2="4.22"
			></line>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-moon"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</svg>
      `;
		}
	}
	customElements.define('darkmode-icons', darkmodeIcons);
	return darkToggle;
})();
