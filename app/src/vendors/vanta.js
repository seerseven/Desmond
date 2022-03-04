!(function (t, e) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
		? define([], e)
		: 'object' == typeof exports
		? (exports._vantaEffect = e())
		: (t._vantaEffect = e());
})('undefined' != typeof self ? self : this, function () {
	return (function (t) {
		var e = {};
		function i(o) {
			if (e[o]) return e[o].exports;
			var n = (e[o] = { i: o, l: !1, exports: {} });
			return t[o].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
		}
		return (
			(i.m = t),
			(i.c = e),
			(i.d = function (t, e, o) {
				i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
			}),
			(i.r = function (t) {
				'undefined' != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
					Object.defineProperty(t, '__esModule', { value: !0 });
			}),
			(i.t = function (t, e) {
				if ((1 & e && (t = i(t)), 8 & e)) return t;
				if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
				var o = Object.create(null);
				if (
					(i.r(o),
					Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
					2 & e && 'string' != typeof t)
				)
					for (var n in t)
						i.d(
							o,
							n,
							function (e) {
								return t[e];
							}.bind(null, n)
						);
				return o;
			}),
			(i.n = function (t) {
				var e =
					t && t.__esModule
						? function () {
								return t.default;
						  }
						: function () {
								return t;
						  };
				return i.d(e, 'a', e), e;
			}),
			(i.o = function (t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(i.p = ''),
			i((i.s = 5))
		);
	})([
		function (t, e, i) {
			'use strict';
			function o(t, e) {
				for (let i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				return t;
			}
			function n() {
				return 'undefined' != typeof navigator
					? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
							navigator.userAgent
					  ) || window.innerWidth < 600
					: null;
			}
			i.d(e, 'c', function () {
				return o;
			}),
				i.d(e, 'e', function () {
					return n;
				}),
				i.d(e, 'i', function () {
					return s;
				}),
				i.d(e, 'h', function () {
					return r;
				}),
				i.d(e, 'g', function () {
					return h;
				}),
				i.d(e, 'f', function () {
					return a;
				}),
				i.d(e, 'a', function () {
					return u;
				}),
				i.d(e, 'b', function () {
					return c;
				}),
				i.d(e, 'd', function () {
					return l;
				}),
				(Number.prototype.clamp = function (t, e) {
					return Math.min(Math.max(this, t), e);
				});
			const s = (t) => t[Math.floor(Math.random() * t.length)];
			function r(t, e) {
				return (
					null == t && (t = 0),
					null == e && (e = 1),
					t + Math.random() * (e - t)
				);
			}
			function h(t, e) {
				return (
					null == t && (t = 0),
					null == e && (e = 1),
					Math.floor(t + Math.random() * (e - t + 1))
				);
			}
			const a = (t) => document.querySelector(t),
				u = (t) =>
					'number' == typeof t ? '#' + ('00000' + t.toString(16)).slice(-6) : t,
				c = (t, e = 1) => {
					const i = u(t),
						o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
						n = o
							? {
									r: parseInt(o[1], 16),
									g: parseInt(o[2], 16),
									b: parseInt(o[3], 16),
							  }
							: null;
					return 'rgba(' + n.r + ',' + n.g + ',' + n.b + ',' + e + ')';
				},
				l = (t) => 0.299 * t.r + 0.587 * t.g + 0.114 * t.b;
		},
		function (t, e, i) {
			'use strict';
			i.d(e, 'a', function () {
				return r;
			});
			var o = i(0);
			const n = 'object' == typeof window;
			let s = (n && window.THREE) || {};
			n && !window.VANTA && (window.VANTA = {});
			const r = (n && window.VANTA) || {};
			(r.register = (t, e) => (r[t] = (t) => new e(t))), (r.version = '0.5.21');
			const h = function () {
				return (
					Array.prototype.unshift.call(arguments, '[VANTA]'),
					console.error.apply(this, arguments)
				);
			};
			(r.VantaBase = class {
				constructor(t = {}) {
					if (!n) return !1;
					(r.current = this),
						(this.windowMouseMoveWrapper =
							this.windowMouseMoveWrapper.bind(this)),
						(this.windowTouchWrapper = this.windowTouchWrapper.bind(this)),
						(this.windowGyroWrapper = this.windowGyroWrapper.bind(this)),
						(this.resize = this.resize.bind(this)),
						(this.animationLoop = this.animationLoop.bind(this)),
						(this.restart = this.restart.bind(this));
					const e =
						'function' == typeof this.getDefaultOptions
							? this.getDefaultOptions()
							: this.defaultOptions;
					if (
						((this.options = Object(o.c)(
							{
								mouseControls: !0,
								touchControls: !0,
								gyroControls: !1,
								minHeight: 200,
								minWidth: 200,
								scale: 1,
								scaleMobile: 1,
							},
							e
						)),
						(t instanceof HTMLElement || 'string' == typeof t) &&
							(t = { el: t }),
						Object(o.c)(this.options, t),
						this.options.THREE && (s = this.options.THREE),
						(this.el = this.options.el),
						null == this.el)
					)
						h('Instance needs "el" param!');
					else if (!(this.options.el instanceof HTMLElement)) {
						const t = this.el;
						if (((this.el = Object(o.f)(t)), !this.el))
							return void h('Cannot find element', t);
					}
					this.prepareEl(), this.initThree(), this.setSize();
					try {
						this.init();
					} catch (t) {
						return (
							h('Init error', t),
							this.renderer &&
								this.renderer.domElement &&
								this.el.removeChild(this.renderer.domElement),
							void (
								this.options.backgroundColor &&
								(console.log('[VANTA] Falling back to backgroundColor'),
								(this.el.style.background = Object(o.a)(
									this.options.backgroundColor
								)))
							)
						);
					}
					this.initMouse(), this.resize(), this.animationLoop();
					const i = window.addEventListener;
					i('resize', this.resize),
						window.requestAnimationFrame(this.resize),
						this.options.mouseControls &&
							(i('scroll', this.windowMouseMoveWrapper),
							i('mousemove', this.windowMouseMoveWrapper)),
						this.options.touchControls &&
							(i('touchstart', this.windowTouchWrapper),
							i('touchmove', this.windowTouchWrapper)),
						this.options.gyroControls &&
							i('deviceorientation', this.windowGyroWrapper);
				}
				setOptions(t = {}) {
					Object(o.c)(this.options, t), this.triggerMouseMove();
				}
				prepareEl() {
					let t, e;
					if ('undefined' != typeof Node && Node.TEXT_NODE)
						for (t = 0; t < this.el.childNodes.length; t++) {
							const e = this.el.childNodes[t];
							if (e.nodeType === Node.TEXT_NODE) {
								const t = document.createElement('span');
								(t.textContent = e.textContent),
									e.parentElement.insertBefore(t, e),
									e.remove();
							}
						}
					for (t = 0; t < this.el.children.length; t++)
						(e = this.el.children[t]),
							'static' === getComputedStyle(e).position &&
								(e.style.position = 'relative'),
							'auto' === getComputedStyle(e).zIndex && (e.style.zIndex = 1);
					'static' === getComputedStyle(this.el).position &&
						(this.el.style.position = 'relative');
				}
				applyCanvasStyles(t, e = {}) {
					Object(o.c)(t.style, {
						position: 'absolute',
						zIndex: 0,
						top: 0,
						left: 0,
						background: '',
					}),
						Object(o.c)(t.style, e),
						t.classList.add('vanta-canvas');
				}
				initThree() {
					s.WebGLRenderer
						? ((this.renderer = new s.WebGLRenderer({
								alpha: !0,
								antialias: !0,
						  })),
						  this.el.appendChild(this.renderer.domElement),
						  this.applyCanvasStyles(this.renderer.domElement),
						  isNaN(this.options.backgroundAlpha) &&
								(this.options.backgroundAlpha = 1),
						  (this.scene = new s.Scene()))
						: console.warn('[VANTA] No THREE defined on window');
				}
				getCanvasElement() {
					return this.renderer
						? this.renderer.domElement
						: this.p5renderer
						? this.p5renderer.canvas
						: void 0;
				}
				getCanvasRect() {
					const t = this.getCanvasElement();
					return !!t && t.getBoundingClientRect();
				}
				windowMouseMoveWrapper(t) {
					const e = this.getCanvasRect();
					if (!e) return !1;
					const i = t.clientX - e.left,
						o = t.clientY - e.top;
					i >= 0 &&
						o >= 0 &&
						i <= e.width &&
						o <= e.height &&
						((this.mouseX = i),
						(this.mouseY = o),
						this.options.mouseEase || this.triggerMouseMove(i, o));
				}
				windowTouchWrapper(t) {
					const e = this.getCanvasRect();
					if (!e) return !1;
					if (1 === t.touches.length) {
						const i = t.touches[0].clientX - e.left,
							o = t.touches[0].clientY - e.top;
						i >= 0 &&
							o >= 0 &&
							i <= e.width &&
							o <= e.height &&
							((this.mouseX = i),
							(this.mouseY = o),
							this.options.mouseEase || this.triggerMouseMove(i, o));
					}
				}
				windowGyroWrapper(t) {
					const e = this.getCanvasRect();
					if (!e) return !1;
					const i = Math.round(2 * t.alpha) - e.left,
						o = Math.round(2 * t.beta) - e.top;
					i >= 0 &&
						o >= 0 &&
						i <= e.width &&
						o <= e.height &&
						((this.mouseX = i),
						(this.mouseY = o),
						this.options.mouseEase || this.triggerMouseMove(i, o));
				}
				triggerMouseMove(t, e) {
					void 0 === t &&
						void 0 === e &&
						(this.options.mouseEase
							? ((t = this.mouseEaseX), (e = this.mouseEaseY))
							: ((t = this.mouseX), (e = this.mouseY))),
						this.uniforms &&
							((this.uniforms.iMouse.value.x = t / this.scale),
							(this.uniforms.iMouse.value.y = e / this.scale));
					const i = t / this.width,
						o = e / this.height;
					'function' == typeof this.onMouseMove && this.onMouseMove(i, o);
				}
				setSize() {
					this.scale || (this.scale = 1),
						Object(o.e)() && this.options.scaleMobile
							? (this.scale = this.options.scaleMobile)
							: this.options.scale && (this.scale = this.options.scale),
						(this.width = Math.max(this.el.offsetWidth, this.options.minWidth)),
						(this.height = Math.max(
							this.el.offsetHeight,
							this.options.minHeight
						));
				}
				initMouse() {
					((!this.mouseX && !this.mouseY) ||
						(this.mouseX === this.options.minWidth / 2 &&
							this.mouseY === this.options.minHeight / 2)) &&
						((this.mouseX = this.width / 2),
						(this.mouseY = this.height / 2),
						this.triggerMouseMove(this.mouseX, this.mouseY));
				}
				resize() {
					this.setSize(),
						this.camera &&
							((this.camera.aspect = this.width / this.height),
							'function' == typeof this.camera.updateProjectionMatrix &&
								this.camera.updateProjectionMatrix()),
						this.renderer &&
							(this.renderer.setSize(this.width, this.height),
							this.renderer.setPixelRatio(
								window.devicePixelRatio / this.scale
							)),
						'function' == typeof this.onResize && this.onResize();
				}
				isOnScreen() {
					const t = this.el.offsetHeight,
						e = this.el.getBoundingClientRect(),
						i =
							window.pageYOffset ||
							(
								document.documentElement ||
								document.body.parentNode ||
								document.body
							).scrollTop,
						o = e.top + i;
					return o - window.innerHeight <= i && i <= o + t;
				}
				animationLoop() {
					return (
						this.t || (this.t = 0),
						(this.t += 1),
						this.t2 || (this.t2 = 0),
						(this.t2 += this.options.speed || 1),
						this.uniforms && (this.uniforms.iTime.value = 0.016667 * this.t2),
						this.options.mouseEase &&
							((this.mouseEaseX = this.mouseEaseX || this.mouseX || 0),
							(this.mouseEaseY = this.mouseEaseY || this.mouseY || 0),
							Math.abs(this.mouseEaseX - this.mouseX) +
								Math.abs(this.mouseEaseY - this.mouseY) >
								0.1 &&
								((this.mouseEaseX += 0.05 * (this.mouseX - this.mouseEaseX)),
								(this.mouseEaseY += 0.05 * (this.mouseY - this.mouseEaseY)),
								this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))),
						(this.isOnScreen() || this.options.forceAnimate) &&
							('function' == typeof this.onUpdate && this.onUpdate(),
							this.scene &&
								this.camera &&
								(this.renderer.render(this.scene, this.camera),
								this.renderer.setClearColor(
									this.options.backgroundColor,
									this.options.backgroundAlpha
								)),
							this.fps && this.fps.update && this.fps.update(),
							'function' == typeof this.afterRender && this.afterRender()),
						(this.req = window.requestAnimationFrame(this.animationLoop))
					);
				}
				restart() {
					if (this.scene)
						for (; this.scene.children.length; )
							this.scene.remove(this.scene.children[0]);
					'function' == typeof this.onRestart && this.onRestart(), this.init();
				}
				init() {
					'function' == typeof this.onInit && this.onInit();
				}
				destroy() {
					'function' == typeof this.onDestroy && this.onDestroy();
					const t = window.removeEventListener;
					t('touchstart', this.windowTouchWrapper),
						t('touchmove', this.windowTouchWrapper),
						t('scroll', this.windowMouseMoveWrapper),
						t('mousemove', this.windowMouseMoveWrapper),
						t('deviceorientation', this.windowGyroWrapper),
						t('resize', this.resize),
						window.cancelAnimationFrame(this.req),
						this.renderer &&
							(this.renderer.domElement &&
								this.el.removeChild(this.renderer.domElement),
							(this.renderer = null),
							(this.scene = null)),
						r.current === this && (r.current = null);
				}
			}),
				(e.b = r.VantaBase);
		},
		function (t, e, i) {
			'use strict';
			i.d(e, 'b', function () {
				return r;
			});
			var o = i(1),
				n = i(0);
			i.d(e, 'a', function () {
				return o.a;
			});
			let s = 'object' == typeof window && window.THREE;
			class r extends o.b {
				constructor(t) {
					((s = t.THREE || s).Color.prototype.toVector = function () {
						return new s.Vector3(this.r, this.g, this.b);
					}),
						super(t),
						(this.updateUniforms = this.updateUniforms.bind(this));
				}
				init() {
					(this.mode = 'shader'),
						(this.uniforms = {
							iTime: { type: 'f', value: 1 },
							iResolution: { type: 'v2', value: new s.Vector2(1, 1) },
							iDpr: { type: 'f', value: window.devicePixelRatio || 1 },
							iMouse: {
								type: 'v2',
								value: new s.Vector2(this.mouseX || 0, this.mouseY || 0),
							},
						}),
						super.init(),
						this.fragmentShader && this.initBasicShader();
				}
				setOptions(t) {
					super.setOptions(t), this.updateUniforms();
				}
				initBasicShader(t = this.fragmentShader, e = this.vertexShader) {
					e ||
						(e =
							'uniform float uTime;\nuniform vec2 uResolution;\nvoid main() {\n  gl_Position = vec4( position, 1.0 );\n}'),
						this.updateUniforms(),
						'function' == typeof this.valuesChanger && this.valuesChanger();
					const i = new s.ShaderMaterial({
							uniforms: this.uniforms,
							vertexShader: e,
							fragmentShader: t,
						}),
						o = this.options.texturePath;
					o &&
						(this.uniforms.iTex = {
							type: 't',
							value: new s.TextureLoader().load(o),
						});
					const n = new s.Mesh(new s.PlaneGeometry(2, 2), i);
					this.scene.add(n),
						(this.camera = new s.Camera()),
						(this.camera.position.z = 1);
				}
				updateUniforms() {
					const t = {};
					let e, i;
					for (e in this.options)
						(i = this.options[e]),
							-1 !== e.toLowerCase().indexOf('color')
								? (t[e] = { type: 'v3', value: new s.Color(i).toVector() })
								: 'number' == typeof i && (t[e] = { type: 'f', value: i });
					return Object(n.c)(this.uniforms, t);
				}
				resize() {
					super.resize(),
						(this.uniforms.iResolution.value.x = this.width / this.scale),
						(this.uniforms.iResolution.value.y = this.height / this.scale);
				}
			}
		},
		,
		,
		function (t, e, i) {
			'use strict';
			i.r(e);
			var o = i(2);
			class n extends o.b {}
			(e.default = o.a.register('CELLS', n)),
				(n.prototype.defaultOptions = {
					color1: 35980,
					color2: 15918901,
					backgroundColor: 14155663,
					amplitudeFactor: 1,
					ringFactor: 1,
					rotationFactor: 1,
					size: 1.5,
					speed: 1,
					scaleMobile: 3,
				}),
				(n.prototype.fragmentShader =
					'uniform vec2 iResolution;\nuniform vec2 iMouse;\nuniform float iTime;\n\nuniform float blurFactor;\nuniform vec3 color1;\nuniform vec3 color2;\nuniform vec3 backgroundColor;\nuniform float size;\nuniform float amplitudeFactor;\nuniform float ringFactor;\nuniform float rotationFactor;\n\nfloat length2(vec2 p) { return dot(p, p); }\n\nfloat noise(vec2 p){\n    return fract(sin(fract(sin(p.x) * (43.13311)) + p.y) * 31.0011);\n}\n\nfloat worley(vec2 p) {\n    float d = 1e30;\n    for (int xo = -1; xo <= 1; ++xo) {\n        for (int yo = -1; yo <= 1; ++yo) {\n            vec2 tp = floor(p) + vec2(xo, yo);\n            d = min(d, length2(p - tp - vec2(noise(tp))));\n        }\n    }\n    vec2 uv = gl_FragCoord.xy / iResolution.xy;\n    float timeOffset =  0.15 * sin(iTime * 2.0 + 10.0*(uv.x - uv.y));\n    return 3.0*exp(-4.0*abs(2.0*d - 1.0 + timeOffset));\n}\n\nfloat fworley(vec2 p) {\n    return sqrt(sqrt(sqrt(\n    1.1 * // light\n    worley(p*5. + .3 + iTime*.0525) *\n    sqrt(worley(p * 50. / size + 0.3 + iTime * -0.15)) *\n    sqrt(sqrt(worley(p * -10. + 9.3))))));\n}\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / iResolution.xy;\n    float t = fworley(uv * iResolution.xy / 1500.0);\n    t *= exp(-length2(abs(0.7*uv - 1.0)));\n\n    float tExp = pow(t, 0.5 - t);\n    vec3 c1 = color1 * (1.0 - t);\n    vec3 c2 = color2 * tExp;\n\n    gl_FragColor = vec4(pow(t, 1.0 - t) * (c1 + c2), 1.0);\n}\n');
		},
	]);
});
