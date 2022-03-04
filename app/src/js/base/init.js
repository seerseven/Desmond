export const themeInit = (function initTheme() {
	VANTA.CELLS({
		el: '#element',
		mouseControls: true,
		touchControls: true,
		gyroControls: false,
		minHeight: 200.0,
		minWidth: 200.0,
		scale: 1.0,
		color1: 0x2ebebe,
		color2: 0xf28235,
		size: 2.9,
		speed: 2.2,
	});

	return initTheme;
})();

// $(window).scroll(function () {
// 	var scroll = $(window).scrollTop();

// 	if (scroll >= 300) {
// 		$('#header-container').switchClass('trans', ' bg:header', 1000);
// 	} else {
// 		$('#header-container').switchClass('bg:header', 'trans', 1000);
// 	}
// });

// $('#block-2').clone().attr('id', 'clone1').appendTo('#inner-1');
// $('#block-3').clone().attr('id', 'clone2').appendTo('#inner-1');

// $('#block-2').remove();
// $('#block-3').remove();

// Get the theme toggle input

// function showLightThemeLogo() {
// 	$('#logo-dark').switchClass('d-block', 'd-none', 0);
// 	$('#logo-light').switchClass('d-none', 'd-block', 0);
// }

// function showDarkThemeLogo() {
// 	$('#logo-light').switchClass('d-block', 'd-none', 0);
// 	$('#logo-dark').switchClass('d-none', 'd-block', 0);
// }

// function showBaseLinks() {
// 	$('#effects a').switchClass('link:trans', 'link:link', 0);
// 	$('.header-icons').switchClass('link:trans', 'nav:icon', 0);
// }

// function showTransLinks() {
// 	$('#effects a').switchClass('link:link', 'link:trans', 0);
// 	$('.header-icons').switchClass('nav:icon', 'link:trans', 0);
// }

// const transEnabled = $('.fake').length;

// function transheader() {
// 	if (transEnabled) {

// 		showDarkThemeLogo();
// 		showTransLinks();
// 	}
// }

// const themeToggle = document.querySelector(
// 	'.theme-switch input[type="checkbox"]'
// );

// const currentTheme = localStorage.getItem('theme');
// console.log(currentTheme);

// if (currentTheme) {
// 	document.documentElement.setAttribute('data-theme', currentTheme);

// 	if (currentTheme === 'dark') {
// 		themeToggle.checked = true;
// 		showDarkThemeLogo();
// 		$('html').switchClass('light', 'dark');
// 	} else {
// 		$('html').switchClass('dark', 'light');
// 	}
// }

// function switchTheme(e) {
// 	if (e.target.checked) {
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 		localStorage.setItem('theme', 'dark');
// 		$('html').switchClass('light', 'dark');
// 		showDarkThemeLogo();
// 	} else {
// 		document.documentElement.setAttribute('data-theme', 'light');
// 		localStorage.setItem('theme', 'light');
// 		$('html').switchClass('dark', 'light');
// 		showLightThemeLogo();
// 	}
// }

// themeToggle.addEventListener('change', switchTheme, false);

// transheader();

// $(window).scroll(function () {
// 	var scroll = $(window).scrollTop();

// 	if (scroll >= 300 && transEnabled && currentTheme === 'dark') {
// 		$('.bg\\:trans').css({
// 			opacity: '1',
// 			transition: 'opacity 0.2s ease-out',
// 		});
// 		$('.fake').switchClass('trans', 'bg:trans');
// 		showDarkThemeLogo();
// 		showBaseLinks();
// 	} else if (scroll >= 300 && transEnabled && currentTheme === 'light') {
// 		$('.bg\\:trans').css({
// 			opacity: '1',
// 			transition: 'opacity 0.2s ease-out',
// 		});
// 		$('.fake').switchClass('trans', 'bg:trans');
// 		showLightThemeLogo();
// 		showBaseLinks();
// 	} else if (transEnabled && currentTheme === 'dark') {
// 		$('.bg\\:trans').css({
// 			opacity: '0',
// 			transition: 'opacity 0.2s ease-out',
// 		});
// 		$('.fake').switchClass('bg:trans', 'trans');
// 		transheader();
// 	} else {
// 		$('.bg\\:trans').css({
// 			opacity: '0',
// 			transition: 'opacity 0.2s ease-out',
// 		});
// 		$('.fake').switchClass('bg:trans', 'trans');
// 		transheader();
// 	}
// });
