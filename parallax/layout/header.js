import { qry, ejs, dom, get, id, loop } from '../abstracts/mixins/element';

export const header = {
	init: function () {
		header.enable();
	},
	enable: function () {
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
			main: get.id('main'),
			sidetop: get.qry('.control-icons'),
			arrowCollapse: get.qry('#logo-name__icon'),
			arrowbtn: get.qry('.arrow-btn'),
			hamburger: get.qry('.hamburger'),
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
				return ejs.tog('is-active', v.hamburger);
			},
			elements: function (x, y) {
				ejs[x](y, v.main);
				ejs[x](y, v.sideBar);
				ejs[x](y, v.sidetop);
			},
			//create custom header element
		};
		//SIDENAV STATE FUNCTIONS
		const state = {
			toggle: function (x) {
				if (x === 'collapse') {
					f.elements('tog', 'collapse');
				}
				if (x === 'close') {
					f.elements('tog', 'close');
				}
				if (x === 'show') {
					f.elements('tog', 'show');
				}
				if (x === 'over') {
					f.elements('tog', 'over');
				}
			},
			remove: function (x) {
				if (x === 'collapse') {
					f.elements('rem', 'collapse');
				}
				if (x === 'close') {
					f.elements('rem', 'close');
				}
				if (x === 'show') {
					f.elements('rem', 'show');
				}
				if (x === 'over') {
					f.elements('rem', 'over');
				}
				if (x === 'media') {
					f.elements('rem', 'media');
				}
			},
			add: function (x) {
				if (x === 'collapse') {
					f.elements('add', 'collapse');
				}
				if (x === 'close') {
					f.elements('add', 'close');
				}
				if (x === 'show') {
					f.elements('add', 'show');
				}
				if (x === 'over') {
					f.elements('add', 'over');
				}
			},
			animate: function (x) {
				if (x === 'arrow') {
					if (v.sideBar.classList.contains('collapse')) {
						v.arrowCollapse.classList = 'bx bx-arrow-from-left logo-name__icon';
					} else {
						v.arrowCollapse.classList =
							'bx bx-arrow-from-right logo-name__icon';
					}
				}
				if (x === 'menu') {
					menuIsActive();
				}
				if (x === 'arrow-left') {
					ejs.add('bx-arrow-from-left', v.arrowCollapse);
					ejs.rem('bx-arrow-from-right', v.arrowCollapse);
				}
				if (x === 'arrow-right') {
					ejs.add('bx-arrow-from-right', v.arrowCollapse);
					ejs.rem('bx-arrow-from-left', v.arrowCollapse);
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
						ejs.tog(v.hide, v.arrowbtn);
						state.toggle(v.show);
						state.remove(v.over);
						state.remove(v.close);
					} else if (v.sideBar.classList.contains(v.show)) {
						state.toggle(v.over);
						state.remove(v.show);
						ejs.tog(v.hide, v.arrowbtn);
					} else if (v.sideBar.classList.contains(v.collapse)) {
						state.toggle(v.close);
						state.remove(v.collapse);
						ejs.rem(v.collapse, v.arrowCollapse);
						window.setTimeout(f.menuIsActive, 500);
						state.animate(v.arrow);
					} else {
						state.toggle(v.close);
						window.setTimeout(f.menuIsActive, 500);
					}
					if (v.collapsible === 'off') {
						if (v.sideBar.classList.contains(v.close)) {
							ejs.tog('solo', v.sidetop);
						} else {
							ejs.add('solo', v.sidetop);
						}
					}
				}
				if (x === 'collapse') {
					state.toggle(v.collapse);
					ejs.tog(v.collapse, v.arrowCollapse);
					state.animate(v.arrow);
				}
			},
			pageClickClose: function () {
				v.main.onclick = () => {
					if (v.main.classList.contains(v.show)) {
						state.toggle(v.over);
						state.remove(v.show);
						window.setTimeout(f.menuIsActive, 500);
						ejs.tog(v.hide, v.arrowbtn);
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
					ejs.tog('solo', v.sidetop);
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
						ejs.add('solo', v.sidetop);
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
							var layoutLG =
								window.innerWidth > 900 ? 'addClass' : 'removeClass';
							var layoutMD =
								window.innerWidth < 900 ? 'addClass' : 'removeClass';
							var layoutSM =
								window.innerWidth < 640 ? 'addClass' : 'removeClass';

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
					ejs.tog(v.show, v.main);
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
		setTimeout(header.enable, 5000);
	},
};
