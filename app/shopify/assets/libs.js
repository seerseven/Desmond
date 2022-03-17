// threejs.org/license
!(function (t, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], e)
		: e(
				((t = 'undefined' != typeof globalThis ? globalThis : t || self).THREE =
					{})
		  );
})(this, function (t) {
	'use strict';
	void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
		void 0 === Number.isInteger &&
			(Number.isInteger = function (t) {
				return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
			}),
		void 0 === Math.sign &&
			(Math.sign = function (t) {
				return t < 0 ? -1 : t > 0 ? 1 : +t;
			}),
		'name' in Function.prototype == !1 &&
			Object.defineProperty(Function.prototype, 'name', {
				get: function () {
					return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
				},
			}),
		void 0 === Object.assign &&
			(Object.assign = function (t) {
				if (null == t)
					throw new TypeError('Cannot convert undefined or null to object');
				for (var e = Object(t), n = 1; n < arguments.length; n++) {
					var r = arguments[n];
					if (null != r)
						for (var i in r)
							Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
				}
				return e;
			});
	var e = 100,
		n = 300,
		r = 301,
		i = 302,
		a = 303,
		o = 304,
		s = 306,
		c = 307,
		l = 1e3,
		u = 1001,
		h = 1002,
		d = 1003,
		p = 1004,
		f = 1005,
		m = 1006,
		v = 1007,
		g = 1008,
		y = 1009,
		x = 1012,
		_ = 1014,
		b = 1015,
		w = 1016,
		M = 1020,
		S = 1022,
		T = 1023,
		E = 1026,
		A = 1027,
		L = 33776,
		R = 33777,
		C = 33778,
		P = 33779,
		I = 35840,
		D = 35841,
		N = 35842,
		O = 35843,
		B = 37492,
		z = 37496,
		G = 2300,
		F = 2301,
		U = 2302,
		H = 2400,
		k = 2401,
		V = 2402,
		W = 2500,
		j = 2501,
		q = 3e3,
		X = 3001,
		Y = 3007,
		Z = 3002,
		J = 3004,
		Q = 3005,
		K = 3006,
		$ = 7680,
		tt = 35044,
		et = 35048,
		nt = '300 es';
	function rt() {}
	Object.assign(rt.prototype, {
		addEventListener: function (t, e) {
			void 0 === this._listeners && (this._listeners = {});
			var n = this._listeners;
			void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
		},
		hasEventListener: function (t, e) {
			if (void 0 === this._listeners) return !1;
			var n = this._listeners;
			return void 0 !== n[t] && -1 !== n[t].indexOf(e);
		},
		removeEventListener: function (t, e) {
			if (void 0 !== this._listeners) {
				var n = this._listeners[t];
				if (void 0 !== n) {
					var r = n.indexOf(e);
					-1 !== r && n.splice(r, 1);
				}
			}
		},
		dispatchEvent: function (t) {
			if (void 0 !== this._listeners) {
				var e = this._listeners[t.type];
				if (void 0 !== e) {
					t.target = this;
					for (var n = e.slice(0), r = 0, i = n.length; r < i; r++)
						n[r].call(this, t);
				}
			}
		},
	});
	for (var it = [], at = 0; at < 256; at++)
		it[at] = (at < 16 ? '0' : '') + at.toString(16);
	var ot = 1234567,
		st = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function () {
				var t = (4294967295 * Math.random()) | 0,
					e = (4294967295 * Math.random()) | 0,
					n = (4294967295 * Math.random()) | 0,
					r = (4294967295 * Math.random()) | 0;
				return (
					it[255 & t] +
					it[(t >> 8) & 255] +
					it[(t >> 16) & 255] +
					it[(t >> 24) & 255] +
					'-' +
					it[255 & e] +
					it[(e >> 8) & 255] +
					'-' +
					it[((e >> 16) & 15) | 64] +
					it[(e >> 24) & 255] +
					'-' +
					it[(63 & n) | 128] +
					it[(n >> 8) & 255] +
					'-' +
					it[(n >> 16) & 255] +
					it[(n >> 24) & 255] +
					it[255 & r] +
					it[(r >> 8) & 255] +
					it[(r >> 16) & 255] +
					it[(r >> 24) & 255]
				).toUpperCase();
			},
			clamp: function (t, e, n) {
				return Math.max(e, Math.min(n, t));
			},
			euclideanModulo: function (t, e) {
				return ((t % e) + e) % e;
			},
			mapLinear: function (t, e, n, r, i) {
				return r + ((t - e) * (i - r)) / (n - e);
			},
			lerp: function (t, e, n) {
				return (1 - n) * t + n * e;
			},
			smoothstep: function (t, e, n) {
				return t <= e
					? 0
					: t >= n
					? 1
					: (t = (t - e) / (n - e)) * t * (3 - 2 * t);
			},
			smootherstep: function (t, e, n) {
				return t <= e
					? 0
					: t >= n
					? 1
					: (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
			},
			randInt: function (t, e) {
				return t + Math.floor(Math.random() * (e - t + 1));
			},
			randFloat: function (t, e) {
				return t + Math.random() * (e - t);
			},
			randFloatSpread: function (t) {
				return t * (0.5 - Math.random());
			},
			seededRandom: function (t) {
				return (
					void 0 !== t && (ot = t % 2147483647),
					((ot = (16807 * ot) % 2147483647) - 1) / 2147483646
				);
			},
			degToRad: function (t) {
				return t * st.DEG2RAD;
			},
			radToDeg: function (t) {
				return t * st.RAD2DEG;
			},
			isPowerOfTwo: function (t) {
				return 0 == (t & (t - 1)) && 0 !== t;
			},
			ceilPowerOfTwo: function (t) {
				return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
			},
			floorPowerOfTwo: function (t) {
				return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
			},
			setQuaternionFromProperEuler: function (t, e, n, r, i) {
				var a = Math.cos,
					o = Math.sin,
					s = a(n / 2),
					c = o(n / 2),
					l = a((e + r) / 2),
					u = o((e + r) / 2),
					h = a((e - r) / 2),
					d = o((e - r) / 2),
					p = a((r - e) / 2),
					f = o((r - e) / 2);
				switch (i) {
					case 'XYX':
						t.set(s * u, c * h, c * d, s * l);
						break;
					case 'YZY':
						t.set(c * d, s * u, c * h, s * l);
						break;
					case 'ZXZ':
						t.set(c * h, c * d, s * u, s * l);
						break;
					case 'XZX':
						t.set(s * u, c * f, c * p, s * l);
						break;
					case 'YXY':
						t.set(c * p, s * u, c * f, s * l);
						break;
					case 'ZYZ':
						t.set(c * f, c * p, s * u, s * l);
						break;
					default:
						console.warn(
							'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ' +
								i
						);
				}
			},
		};
	function ct(t, e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			(r.enumerable = r.enumerable || !1),
				(r.configurable = !0),
				'value' in r && (r.writable = !0),
				Object.defineProperty(t, r.key, r);
		}
	}
	function lt(t, e, n) {
		return e && ct(t.prototype, e), n && ct(t, n), t;
	}
	function ut(t, e) {
		(t.prototype = Object.create(e.prototype)),
			(t.prototype.constructor = t),
			(t.__proto__ = e);
	}
	function ht(t) {
		if (void 0 === t)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called"
			);
		return t;
	}
	var dt,
		pt = (function () {
			function t(t, e) {
				void 0 === t && (t = 0),
					void 0 === e && (e = 0),
					Object.defineProperty(this, 'isVector2', { value: !0 }),
					(this.x = t),
					(this.y = e);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e) {
					return (this.x = t), (this.y = e), this;
				}),
				(e.setScalar = function (t) {
					return (this.x = t), (this.y = t), this;
				}),
				(e.setX = function (t) {
					return (this.x = t), this;
				}),
				(e.setY = function (t) {
					return (this.y = t), this;
				}),
				(e.setComponent = function (t, e) {
					switch (t) {
						case 0:
							this.x = e;
							break;
						case 1:
							this.y = e;
							break;
						default:
							throw new Error('index is out of range: ' + t);
					}
					return this;
				}),
				(e.getComponent = function (t) {
					switch (t) {
						case 0:
							return this.x;
						case 1:
							return this.y;
						default:
							throw new Error('index is out of range: ' + t);
					}
				}),
				(e.clone = function () {
					return new this.constructor(this.x, this.y);
				}),
				(e.copy = function (t) {
					return (this.x = t.x), (this.y = t.y), this;
				}),
				(e.add = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
						  ),
						  this.addVectors(t, e))
						: ((this.x += t.x), (this.y += t.y), this);
				}),
				(e.addScalar = function (t) {
					return (this.x += t), (this.y += t), this;
				}),
				(e.addVectors = function (t, e) {
					return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
				}),
				(e.addScaledVector = function (t, e) {
					return (this.x += t.x * e), (this.y += t.y * e), this;
				}),
				(e.sub = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
						  ),
						  this.subVectors(t, e))
						: ((this.x -= t.x), (this.y -= t.y), this);
				}),
				(e.subScalar = function (t) {
					return (this.x -= t), (this.y -= t), this;
				}),
				(e.subVectors = function (t, e) {
					return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
				}),
				(e.multiply = function (t) {
					return (this.x *= t.x), (this.y *= t.y), this;
				}),
				(e.multiplyScalar = function (t) {
					return (this.x *= t), (this.y *= t), this;
				}),
				(e.divide = function (t) {
					return (this.x /= t.x), (this.y /= t.y), this;
				}),
				(e.divideScalar = function (t) {
					return this.multiplyScalar(1 / t);
				}),
				(e.applyMatrix3 = function (t) {
					var e = this.x,
						n = this.y,
						r = t.elements;
					return (
						(this.x = r[0] * e + r[3] * n + r[6]),
						(this.y = r[1] * e + r[4] * n + r[7]),
						this
					);
				}),
				(e.min = function (t) {
					return (
						(this.x = Math.min(this.x, t.x)),
						(this.y = Math.min(this.y, t.y)),
						this
					);
				}),
				(e.max = function (t) {
					return (
						(this.x = Math.max(this.x, t.x)),
						(this.y = Math.max(this.y, t.y)),
						this
					);
				}),
				(e.clamp = function (t, e) {
					return (
						(this.x = Math.max(t.x, Math.min(e.x, this.x))),
						(this.y = Math.max(t.y, Math.min(e.y, this.y))),
						this
					);
				}),
				(e.clampScalar = function (t, e) {
					return (
						(this.x = Math.max(t, Math.min(e, this.x))),
						(this.y = Math.max(t, Math.min(e, this.y))),
						this
					);
				}),
				(e.clampLength = function (t, e) {
					var n = this.length();
					return this.divideScalar(n || 1).multiplyScalar(
						Math.max(t, Math.min(e, n))
					);
				}),
				(e.floor = function () {
					return (
						(this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
					);
				}),
				(e.ceil = function () {
					return (
						(this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
					);
				}),
				(e.round = function () {
					return (
						(this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
					);
				}),
				(e.roundToZero = function () {
					return (
						(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
						(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
						this
					);
				}),
				(e.negate = function () {
					return (this.x = -this.x), (this.y = -this.y), this;
				}),
				(e.dot = function (t) {
					return this.x * t.x + this.y * t.y;
				}),
				(e.cross = function (t) {
					return this.x * t.y - this.y * t.x;
				}),
				(e.lengthSq = function () {
					return this.x * this.x + this.y * this.y;
				}),
				(e.length = function () {
					return Math.sqrt(this.x * this.x + this.y * this.y);
				}),
				(e.manhattanLength = function () {
					return Math.abs(this.x) + Math.abs(this.y);
				}),
				(e.normalize = function () {
					return this.divideScalar(this.length() || 1);
				}),
				(e.angle = function () {
					var t = Math.atan2(-this.y, -this.x) + Math.PI;
					return t;
				}),
				(e.distanceTo = function (t) {
					return Math.sqrt(this.distanceToSquared(t));
				}),
				(e.distanceToSquared = function (t) {
					var e = this.x - t.x,
						n = this.y - t.y;
					return e * e + n * n;
				}),
				(e.manhattanDistanceTo = function (t) {
					return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
				}),
				(e.setLength = function (t) {
					return this.normalize().multiplyScalar(t);
				}),
				(e.lerp = function (t, e) {
					return (
						(this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this
					);
				}),
				(e.lerpVectors = function (t, e, n) {
					return (
						(this.x = t.x + (e.x - t.x) * n),
						(this.y = t.y + (e.y - t.y) * n),
						this
					);
				}),
				(e.equals = function (t) {
					return t.x === this.x && t.y === this.y;
				}),
				(e.fromArray = function (t, e) {
					return (
						void 0 === e && (e = 0), (this.x = t[e]), (this.y = t[e + 1]), this
					);
				}),
				(e.toArray = function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this.x),
						(t[e + 1] = this.y),
						t
					);
				}),
				(e.fromBufferAttribute = function (t, e, n) {
					return (
						void 0 !== n &&
							console.warn(
								'THREE.Vector2: offset has been removed from .fromBufferAttribute().'
							),
						(this.x = t.getX(e)),
						(this.y = t.getY(e)),
						this
					);
				}),
				(e.rotateAround = function (t, e) {
					var n = Math.cos(e),
						r = Math.sin(e),
						i = this.x - t.x,
						a = this.y - t.y;
					return (
						(this.x = i * n - a * r + t.x), (this.y = i * r + a * n + t.y), this
					);
				}),
				(e.random = function () {
					return (this.x = Math.random()), (this.y = Math.random()), this;
				}),
				lt(t, [
					{
						key: 'width',
						get: function () {
							return this.x;
						},
						set: function (t) {
							this.x = t;
						},
					},
					{
						key: 'height',
						get: function () {
							return this.y;
						},
						set: function (t) {
							this.y = t;
						},
					},
				]),
				t
			);
		})(),
		ft = (function () {
			function t() {
				Object.defineProperty(this, 'isMatrix3', { value: !0 }),
					(this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
					arguments.length > 0 &&
						console.error(
							'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.'
						);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e, n, r, i, a, o, s, c) {
					var l = this.elements;
					return (
						(l[0] = t),
						(l[1] = r),
						(l[2] = o),
						(l[3] = e),
						(l[4] = i),
						(l[5] = s),
						(l[6] = n),
						(l[7] = a),
						(l[8] = c),
						this
					);
				}),
				(e.identity = function () {
					return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
				}),
				(e.clone = function () {
					return new this.constructor().fromArray(this.elements);
				}),
				(e.copy = function (t) {
					var e = this.elements,
						n = t.elements;
					return (
						(e[0] = n[0]),
						(e[1] = n[1]),
						(e[2] = n[2]),
						(e[3] = n[3]),
						(e[4] = n[4]),
						(e[5] = n[5]),
						(e[6] = n[6]),
						(e[7] = n[7]),
						(e[8] = n[8]),
						this
					);
				}),
				(e.extractBasis = function (t, e, n) {
					return (
						t.setFromMatrix3Column(this, 0),
						e.setFromMatrix3Column(this, 1),
						n.setFromMatrix3Column(this, 2),
						this
					);
				}),
				(e.setFromMatrix4 = function (t) {
					var e = t.elements;
					return (
						this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
						this
					);
				}),
				(e.multiply = function (t) {
					return this.multiplyMatrices(this, t);
				}),
				(e.premultiply = function (t) {
					return this.multiplyMatrices(t, this);
				}),
				(e.multiplyMatrices = function (t, e) {
					var n = t.elements,
						r = e.elements,
						i = this.elements,
						a = n[0],
						o = n[3],
						s = n[6],
						c = n[1],
						l = n[4],
						u = n[7],
						h = n[2],
						d = n[5],
						p = n[8],
						f = r[0],
						m = r[3],
						v = r[6],
						g = r[1],
						y = r[4],
						x = r[7],
						_ = r[2],
						b = r[5],
						w = r[8];
					return (
						(i[0] = a * f + o * g + s * _),
						(i[3] = a * m + o * y + s * b),
						(i[6] = a * v + o * x + s * w),
						(i[1] = c * f + l * g + u * _),
						(i[4] = c * m + l * y + u * b),
						(i[7] = c * v + l * x + u * w),
						(i[2] = h * f + d * g + p * _),
						(i[5] = h * m + d * y + p * b),
						(i[8] = h * v + d * x + p * w),
						this
					);
				}),
				(e.multiplyScalar = function (t) {
					var e = this.elements;
					return (
						(e[0] *= t),
						(e[3] *= t),
						(e[6] *= t),
						(e[1] *= t),
						(e[4] *= t),
						(e[7] *= t),
						(e[2] *= t),
						(e[5] *= t),
						(e[8] *= t),
						this
					);
				}),
				(e.determinant = function () {
					var t = this.elements,
						e = t[0],
						n = t[1],
						r = t[2],
						i = t[3],
						a = t[4],
						o = t[5],
						s = t[6],
						c = t[7],
						l = t[8];
					return (
						e * a * l -
						e * o * c -
						n * i * l +
						n * o * s +
						r * i * c -
						r * a * s
					);
				}),
				(e.getInverse = function (t, e) {
					void 0 !== e &&
						console.warn(
							'THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.'
						);
					var n = t.elements,
						r = this.elements,
						i = n[0],
						a = n[1],
						o = n[2],
						s = n[3],
						c = n[4],
						l = n[5],
						u = n[6],
						h = n[7],
						d = n[8],
						p = d * c - l * h,
						f = l * u - d * s,
						m = h * s - c * u,
						v = i * p + a * f + o * m;
					if (0 === v) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
					var g = 1 / v;
					return (
						(r[0] = p * g),
						(r[1] = (o * h - d * a) * g),
						(r[2] = (l * a - o * c) * g),
						(r[3] = f * g),
						(r[4] = (d * i - o * u) * g),
						(r[5] = (o * s - l * i) * g),
						(r[6] = m * g),
						(r[7] = (a * u - h * i) * g),
						(r[8] = (c * i - a * s) * g),
						this
					);
				}),
				(e.transpose = function () {
					var t,
						e = this.elements;
					return (
						(t = e[1]),
						(e[1] = e[3]),
						(e[3] = t),
						(t = e[2]),
						(e[2] = e[6]),
						(e[6] = t),
						(t = e[5]),
						(e[5] = e[7]),
						(e[7] = t),
						this
					);
				}),
				(e.getNormalMatrix = function (t) {
					return this.setFromMatrix4(t).getInverse(this).transpose();
				}),
				(e.transposeIntoArray = function (t) {
					var e = this.elements;
					return (
						(t[0] = e[0]),
						(t[1] = e[3]),
						(t[2] = e[6]),
						(t[3] = e[1]),
						(t[4] = e[4]),
						(t[5] = e[7]),
						(t[6] = e[2]),
						(t[7] = e[5]),
						(t[8] = e[8]),
						this
					);
				}),
				(e.setUvTransform = function (t, e, n, r, i, a, o) {
					var s = Math.cos(i),
						c = Math.sin(i);
					this.set(
						n * s,
						n * c,
						-n * (s * a + c * o) + a + t,
						-r * c,
						r * s,
						-r * (-c * a + s * o) + o + e,
						0,
						0,
						1
					);
				}),
				(e.scale = function (t, e) {
					var n = this.elements;
					return (
						(n[0] *= t),
						(n[3] *= t),
						(n[6] *= t),
						(n[1] *= e),
						(n[4] *= e),
						(n[7] *= e),
						this
					);
				}),
				(e.rotate = function (t) {
					var e = Math.cos(t),
						n = Math.sin(t),
						r = this.elements,
						i = r[0],
						a = r[3],
						o = r[6],
						s = r[1],
						c = r[4],
						l = r[7];
					return (
						(r[0] = e * i + n * s),
						(r[3] = e * a + n * c),
						(r[6] = e * o + n * l),
						(r[1] = -n * i + e * s),
						(r[4] = -n * a + e * c),
						(r[7] = -n * o + e * l),
						this
					);
				}),
				(e.translate = function (t, e) {
					var n = this.elements;
					return (
						(n[0] += t * n[2]),
						(n[3] += t * n[5]),
						(n[6] += t * n[8]),
						(n[1] += e * n[2]),
						(n[4] += e * n[5]),
						(n[7] += e * n[8]),
						this
					);
				}),
				(e.equals = function (t) {
					for (var e = this.elements, n = t.elements, r = 0; r < 9; r++)
						if (e[r] !== n[r]) return !1;
					return !0;
				}),
				(e.fromArray = function (t, e) {
					void 0 === e && (e = 0);
					for (var n = 0; n < 9; n++) this.elements[n] = t[n + e];
					return this;
				}),
				(e.toArray = function (t, e) {
					void 0 === t && (t = []), void 0 === e && (e = 0);
					var n = this.elements;
					return (
						(t[e] = n[0]),
						(t[e + 1] = n[1]),
						(t[e + 2] = n[2]),
						(t[e + 3] = n[3]),
						(t[e + 4] = n[4]),
						(t[e + 5] = n[5]),
						(t[e + 6] = n[6]),
						(t[e + 7] = n[7]),
						(t[e + 8] = n[8]),
						t
					);
				}),
				t
			);
		})(),
		mt = {
			getDataURL: function (t) {
				if (/^data:/i.test(t.src)) return t.src;
				if ('undefined' == typeof HTMLCanvasElement) return t.src;
				var e;
				if (t instanceof HTMLCanvasElement) e = t;
				else {
					void 0 === dt &&
						(dt = document.createElementNS(
							'http://www.w3.org/1999/xhtml',
							'canvas'
						)),
						(dt.width = t.width),
						(dt.height = t.height);
					var n = dt.getContext('2d');
					t instanceof ImageData
						? n.putImageData(t, 0, 0)
						: n.drawImage(t, 0, 0, t.width, t.height),
						(e = dt);
				}
				return e.width > 2048 || e.height > 2048
					? e.toDataURL('image/jpeg', 0.6)
					: e.toDataURL('image/png');
			},
		},
		vt = 0;
	function gt(t, e, n, r, i, a, o, s, c, l) {
		Object.defineProperty(this, 'id', { value: vt++ }),
			(this.uuid = st.generateUUID()),
			(this.name = ''),
			(this.image = void 0 !== t ? t : gt.DEFAULT_IMAGE),
			(this.mipmaps = []),
			(this.mapping = void 0 !== e ? e : gt.DEFAULT_MAPPING),
			(this.wrapS = void 0 !== n ? n : u),
			(this.wrapT = void 0 !== r ? r : u),
			(this.magFilter = void 0 !== i ? i : m),
			(this.minFilter = void 0 !== a ? a : g),
			(this.anisotropy = void 0 !== c ? c : 1),
			(this.format = void 0 !== o ? o : T),
			(this.internalFormat = null),
			(this.type = void 0 !== s ? s : y),
			(this.offset = new pt(0, 0)),
			(this.repeat = new pt(1, 1)),
			(this.center = new pt(0, 0)),
			(this.rotation = 0),
			(this.matrixAutoUpdate = !0),
			(this.matrix = new ft()),
			(this.generateMipmaps = !0),
			(this.premultiplyAlpha = !1),
			(this.flipY = !0),
			(this.unpackAlignment = 4),
			(this.encoding = void 0 !== l ? l : q),
			(this.version = 0),
			(this.onUpdate = null);
	}
	(gt.DEFAULT_IMAGE = void 0),
		(gt.DEFAULT_MAPPING = n),
		(gt.prototype = Object.assign(Object.create(rt.prototype), {
			constructor: gt,
			isTexture: !0,
			updateMatrix: function () {
				this.matrix.setUvTransform(
					this.offset.x,
					this.offset.y,
					this.repeat.x,
					this.repeat.y,
					this.rotation,
					this.center.x,
					this.center.y
				);
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return (
					(this.name = t.name),
					(this.image = t.image),
					(this.mipmaps = t.mipmaps.slice(0)),
					(this.mapping = t.mapping),
					(this.wrapS = t.wrapS),
					(this.wrapT = t.wrapT),
					(this.magFilter = t.magFilter),
					(this.minFilter = t.minFilter),
					(this.anisotropy = t.anisotropy),
					(this.format = t.format),
					(this.internalFormat = t.internalFormat),
					(this.type = t.type),
					this.offset.copy(t.offset),
					this.repeat.copy(t.repeat),
					this.center.copy(t.center),
					(this.rotation = t.rotation),
					(this.matrixAutoUpdate = t.matrixAutoUpdate),
					this.matrix.copy(t.matrix),
					(this.generateMipmaps = t.generateMipmaps),
					(this.premultiplyAlpha = t.premultiplyAlpha),
					(this.flipY = t.flipY),
					(this.unpackAlignment = t.unpackAlignment),
					(this.encoding = t.encoding),
					this
				);
			},
			toJSON: function (t) {
				var e = void 0 === t || 'string' == typeof t;
				if (!e && void 0 !== t.textures[this.uuid])
					return t.textures[this.uuid];
				var n = {
					metadata: {
						version: 4.5,
						type: 'Texture',
						generator: 'Texture.toJSON',
					},
					uuid: this.uuid,
					name: this.name,
					mapping: this.mapping,
					repeat: [this.repeat.x, this.repeat.y],
					offset: [this.offset.x, this.offset.y],
					center: [this.center.x, this.center.y],
					rotation: this.rotation,
					wrap: [this.wrapS, this.wrapT],
					format: this.format,
					type: this.type,
					encoding: this.encoding,
					minFilter: this.minFilter,
					magFilter: this.magFilter,
					anisotropy: this.anisotropy,
					flipY: this.flipY,
					premultiplyAlpha: this.premultiplyAlpha,
					unpackAlignment: this.unpackAlignment,
				};
				if (void 0 !== this.image) {
					var r = this.image;
					if (
						(void 0 === r.uuid && (r.uuid = st.generateUUID()),
						!e && void 0 === t.images[r.uuid])
					) {
						var i;
						if (Array.isArray(r)) {
							i = [];
							for (var a = 0, o = r.length; a < o; a++)
								i.push(mt.getDataURL(r[a]));
						} else i = mt.getDataURL(r);
						t.images[r.uuid] = { uuid: r.uuid, url: i };
					}
					n.image = r.uuid;
				}
				return e || (t.textures[this.uuid] = n), n;
			},
			dispose: function () {
				this.dispatchEvent({ type: 'dispose' });
			},
			transformUv: function (t) {
				if (this.mapping !== n) return t;
				if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
					switch (this.wrapS) {
						case l:
							t.x = t.x - Math.floor(t.x);
							break;
						case u:
							t.x = t.x < 0 ? 0 : 1;
							break;
						case h:
							1 === Math.abs(Math.floor(t.x) % 2)
								? (t.x = Math.ceil(t.x) - t.x)
								: (t.x = t.x - Math.floor(t.x));
					}
				if (t.y < 0 || t.y > 1)
					switch (this.wrapT) {
						case l:
							t.y = t.y - Math.floor(t.y);
							break;
						case u:
							t.y = t.y < 0 ? 0 : 1;
							break;
						case h:
							1 === Math.abs(Math.floor(t.y) % 2)
								? (t.y = Math.ceil(t.y) - t.y)
								: (t.y = t.y - Math.floor(t.y));
					}
				return this.flipY && (t.y = 1 - t.y), t;
			},
		})),
		Object.defineProperty(gt.prototype, 'needsUpdate', {
			set: function (t) {
				!0 === t && this.version++;
			},
		});
	var yt = (function () {
		function t(t, e, n, r) {
			void 0 === t && (t = 0),
				void 0 === e && (e = 0),
				void 0 === n && (n = 0),
				void 0 === r && (r = 1),
				Object.defineProperty(this, 'isVector4', { value: !0 }),
				(this.x = t),
				(this.y = e),
				(this.z = n),
				(this.w = r);
		}
		var e = t.prototype;
		return (
			(e.set = function (t, e, n, r) {
				return (this.x = t), (this.y = e), (this.z = n), (this.w = r), this;
			}),
			(e.setScalar = function (t) {
				return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
			}),
			(e.setX = function (t) {
				return (this.x = t), this;
			}),
			(e.setY = function (t) {
				return (this.y = t), this;
			}),
			(e.setZ = function (t) {
				return (this.z = t), this;
			}),
			(e.setW = function (t) {
				return (this.w = t), this;
			}),
			(e.setComponent = function (t, e) {
				switch (t) {
					case 0:
						this.x = e;
						break;
					case 1:
						this.y = e;
						break;
					case 2:
						this.z = e;
						break;
					case 3:
						this.w = e;
						break;
					default:
						throw new Error('index is out of range: ' + t);
				}
				return this;
			}),
			(e.getComponent = function (t) {
				switch (t) {
					case 0:
						return this.x;
					case 1:
						return this.y;
					case 2:
						return this.z;
					case 3:
						return this.w;
					default:
						throw new Error('index is out of range: ' + t);
				}
			}),
			(e.clone = function () {
				return new this.constructor(this.x, this.y, this.z, this.w);
			}),
			(e.copy = function (t) {
				return (
					(this.x = t.x),
					(this.y = t.y),
					(this.z = t.z),
					(this.w = void 0 !== t.w ? t.w : 1),
					this
				);
			}),
			(e.add = function (t, e) {
				return void 0 !== e
					? (console.warn(
							'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
					  ),
					  this.addVectors(t, e))
					: ((this.x += t.x),
					  (this.y += t.y),
					  (this.z += t.z),
					  (this.w += t.w),
					  this);
			}),
			(e.addScalar = function (t) {
				return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
			}),
			(e.addVectors = function (t, e) {
				return (
					(this.x = t.x + e.x),
					(this.y = t.y + e.y),
					(this.z = t.z + e.z),
					(this.w = t.w + e.w),
					this
				);
			}),
			(e.addScaledVector = function (t, e) {
				return (
					(this.x += t.x * e),
					(this.y += t.y * e),
					(this.z += t.z * e),
					(this.w += t.w * e),
					this
				);
			}),
			(e.sub = function (t, e) {
				return void 0 !== e
					? (console.warn(
							'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
					  ),
					  this.subVectors(t, e))
					: ((this.x -= t.x),
					  (this.y -= t.y),
					  (this.z -= t.z),
					  (this.w -= t.w),
					  this);
			}),
			(e.subScalar = function (t) {
				return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
			}),
			(e.subVectors = function (t, e) {
				return (
					(this.x = t.x - e.x),
					(this.y = t.y - e.y),
					(this.z = t.z - e.z),
					(this.w = t.w - e.w),
					this
				);
			}),
			(e.multiplyScalar = function (t) {
				return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
			}),
			(e.applyMatrix4 = function (t) {
				var e = this.x,
					n = this.y,
					r = this.z,
					i = this.w,
					a = t.elements;
				return (
					(this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * i),
					(this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * i),
					(this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * i),
					(this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * i),
					this
				);
			}),
			(e.divideScalar = function (t) {
				return this.multiplyScalar(1 / t);
			}),
			(e.setAxisAngleFromQuaternion = function (t) {
				this.w = 2 * Math.acos(t.w);
				var e = Math.sqrt(1 - t.w * t.w);
				return (
					e < 1e-4
						? ((this.x = 1), (this.y = 0), (this.z = 0))
						: ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
					this
				);
			}),
			(e.setAxisAngleFromRotationMatrix = function (t) {
				var e,
					n,
					r,
					i,
					a = 0.01,
					o = 0.1,
					s = t.elements,
					c = s[0],
					l = s[4],
					u = s[8],
					h = s[1],
					d = s[5],
					p = s[9],
					f = s[2],
					m = s[6],
					v = s[10];
				if (Math.abs(l - h) < a && Math.abs(u - f) < a && Math.abs(p - m) < a) {
					if (
						Math.abs(l + h) < o &&
						Math.abs(u + f) < o &&
						Math.abs(p + m) < o &&
						Math.abs(c + d + v - 3) < o
					)
						return this.set(1, 0, 0, 0), this;
					e = Math.PI;
					var g = (c + 1) / 2,
						y = (d + 1) / 2,
						x = (v + 1) / 2,
						_ = (l + h) / 4,
						b = (u + f) / 4,
						w = (p + m) / 4;
					return (
						g > y && g > x
							? g < a
								? ((n = 0), (r = 0.707106781), (i = 0.707106781))
								: ((r = _ / (n = Math.sqrt(g))), (i = b / n))
							: y > x
							? y < a
								? ((n = 0.707106781), (r = 0), (i = 0.707106781))
								: ((n = _ / (r = Math.sqrt(y))), (i = w / r))
							: x < a
							? ((n = 0.707106781), (r = 0.707106781), (i = 0))
							: ((n = b / (i = Math.sqrt(x))), (r = w / i)),
						this.set(n, r, i, e),
						this
					);
				}
				var M = Math.sqrt(
					(m - p) * (m - p) + (u - f) * (u - f) + (h - l) * (h - l)
				);
				return (
					Math.abs(M) < 0.001 && (M = 1),
					(this.x = (m - p) / M),
					(this.y = (u - f) / M),
					(this.z = (h - l) / M),
					(this.w = Math.acos((c + d + v - 1) / 2)),
					this
				);
			}),
			(e.min = function (t) {
				return (
					(this.x = Math.min(this.x, t.x)),
					(this.y = Math.min(this.y, t.y)),
					(this.z = Math.min(this.z, t.z)),
					(this.w = Math.min(this.w, t.w)),
					this
				);
			}),
			(e.max = function (t) {
				return (
					(this.x = Math.max(this.x, t.x)),
					(this.y = Math.max(this.y, t.y)),
					(this.z = Math.max(this.z, t.z)),
					(this.w = Math.max(this.w, t.w)),
					this
				);
			}),
			(e.clamp = function (t, e) {
				return (
					(this.x = Math.max(t.x, Math.min(e.x, this.x))),
					(this.y = Math.max(t.y, Math.min(e.y, this.y))),
					(this.z = Math.max(t.z, Math.min(e.z, this.z))),
					(this.w = Math.max(t.w, Math.min(e.w, this.w))),
					this
				);
			}),
			(e.clampScalar = function (t, e) {
				return (
					(this.x = Math.max(t, Math.min(e, this.x))),
					(this.y = Math.max(t, Math.min(e, this.y))),
					(this.z = Math.max(t, Math.min(e, this.z))),
					(this.w = Math.max(t, Math.min(e, this.w))),
					this
				);
			}),
			(e.clampLength = function (t, e) {
				var n = this.length();
				return this.divideScalar(n || 1).multiplyScalar(
					Math.max(t, Math.min(e, n))
				);
			}),
			(e.floor = function () {
				return (
					(this.x = Math.floor(this.x)),
					(this.y = Math.floor(this.y)),
					(this.z = Math.floor(this.z)),
					(this.w = Math.floor(this.w)),
					this
				);
			}),
			(e.ceil = function () {
				return (
					(this.x = Math.ceil(this.x)),
					(this.y = Math.ceil(this.y)),
					(this.z = Math.ceil(this.z)),
					(this.w = Math.ceil(this.w)),
					this
				);
			}),
			(e.round = function () {
				return (
					(this.x = Math.round(this.x)),
					(this.y = Math.round(this.y)),
					(this.z = Math.round(this.z)),
					(this.w = Math.round(this.w)),
					this
				);
			}),
			(e.roundToZero = function () {
				return (
					(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
					(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
					(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
					(this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
					this
				);
			}),
			(e.negate = function () {
				return (
					(this.x = -this.x),
					(this.y = -this.y),
					(this.z = -this.z),
					(this.w = -this.w),
					this
				);
			}),
			(e.dot = function (t) {
				return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
			}),
			(e.lengthSq = function () {
				return (
					this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
				);
			}),
			(e.length = function () {
				return Math.sqrt(
					this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
				);
			}),
			(e.manhattanLength = function () {
				return (
					Math.abs(this.x) +
					Math.abs(this.y) +
					Math.abs(this.z) +
					Math.abs(this.w)
				);
			}),
			(e.normalize = function () {
				return this.divideScalar(this.length() || 1);
			}),
			(e.setLength = function (t) {
				return this.normalize().multiplyScalar(t);
			}),
			(e.lerp = function (t, e) {
				return (
					(this.x += (t.x - this.x) * e),
					(this.y += (t.y - this.y) * e),
					(this.z += (t.z - this.z) * e),
					(this.w += (t.w - this.w) * e),
					this
				);
			}),
			(e.lerpVectors = function (t, e, n) {
				return (
					(this.x = t.x + (e.x - t.x) * n),
					(this.y = t.y + (e.y - t.y) * n),
					(this.z = t.z + (e.z - t.z) * n),
					(this.w = t.w + (e.w - t.w) * n),
					this
				);
			}),
			(e.equals = function (t) {
				return (
					t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
				);
			}),
			(e.fromArray = function (t, e) {
				return (
					void 0 === e && (e = 0),
					(this.x = t[e]),
					(this.y = t[e + 1]),
					(this.z = t[e + 2]),
					(this.w = t[e + 3]),
					this
				);
			}),
			(e.toArray = function (t, e) {
				return (
					void 0 === t && (t = []),
					void 0 === e && (e = 0),
					(t[e] = this.x),
					(t[e + 1] = this.y),
					(t[e + 2] = this.z),
					(t[e + 3] = this.w),
					t
				);
			}),
			(e.fromBufferAttribute = function (t, e, n) {
				return (
					void 0 !== n &&
						console.warn(
							'THREE.Vector4: offset has been removed from .fromBufferAttribute().'
						),
					(this.x = t.getX(e)),
					(this.y = t.getY(e)),
					(this.z = t.getZ(e)),
					(this.w = t.getW(e)),
					this
				);
			}),
			(e.random = function () {
				return (
					(this.x = Math.random()),
					(this.y = Math.random()),
					(this.z = Math.random()),
					(this.w = Math.random()),
					this
				);
			}),
			lt(t, [
				{
					key: 'width',
					get: function () {
						return this.z;
					},
					set: function (t) {
						this.z = t;
					},
				},
				{
					key: 'height',
					get: function () {
						return this.w;
					},
					set: function (t) {
						this.w = t;
					},
				},
			]),
			t
		);
	})();
	function xt(t, e, n) {
		(this.width = t),
			(this.height = e),
			(this.scissor = new yt(0, 0, t, e)),
			(this.scissorTest = !1),
			(this.viewport = new yt(0, 0, t, e)),
			(n = n || {}),
			(this.texture = new gt(
				void 0,
				n.mapping,
				n.wrapS,
				n.wrapT,
				n.magFilter,
				n.minFilter,
				n.format,
				n.type,
				n.anisotropy,
				n.encoding
			)),
			(this.texture.image = {}),
			(this.texture.image.width = t),
			(this.texture.image.height = e),
			(this.texture.generateMipmaps =
				void 0 !== n.generateMipmaps && n.generateMipmaps),
			(this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : m),
			(this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
			(this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
			(this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null);
	}
	function _t(t, e, n) {
		xt.call(this, t, e, n), (this.samples = 4);
	}
	(xt.prototype = Object.assign(Object.create(rt.prototype), {
		constructor: xt,
		isWebGLRenderTarget: !0,
		setSize: function (t, e) {
			(this.width === t && this.height === e) ||
				((this.width = t),
				(this.height = e),
				(this.texture.image.width = t),
				(this.texture.image.height = e),
				this.dispose()),
				this.viewport.set(0, 0, t, e),
				this.scissor.set(0, 0, t, e);
		},
		clone: function () {
			return new this.constructor().copy(this);
		},
		copy: function (t) {
			return (
				(this.width = t.width),
				(this.height = t.height),
				this.viewport.copy(t.viewport),
				(this.texture = t.texture.clone()),
				(this.depthBuffer = t.depthBuffer),
				(this.stencilBuffer = t.stencilBuffer),
				(this.depthTexture = t.depthTexture),
				this
			);
		},
		dispose: function () {
			this.dispatchEvent({ type: 'dispose' });
		},
	})),
		(_t.prototype = Object.assign(Object.create(xt.prototype), {
			constructor: _t,
			isWebGLMultisampleRenderTarget: !0,
			copy: function (t) {
				return (
					xt.prototype.copy.call(this, t), (this.samples = t.samples), this
				);
			},
		}));
	var bt = (function () {
			function t(t, e, n, r) {
				void 0 === t && (t = 0),
					void 0 === e && (e = 0),
					void 0 === n && (n = 0),
					void 0 === r && (r = 1),
					Object.defineProperty(this, 'isQuaternion', { value: !0 }),
					(this._x = t),
					(this._y = e),
					(this._z = n),
					(this._w = r);
			}
			(t.slerp = function (t, e, n, r) {
				return n.copy(t).slerp(e, r);
			}),
				(t.slerpFlat = function (t, e, n, r, i, a, o) {
					var s = n[r + 0],
						c = n[r + 1],
						l = n[r + 2],
						u = n[r + 3],
						h = i[a + 0],
						d = i[a + 1],
						p = i[a + 2],
						f = i[a + 3];
					if (u !== f || s !== h || c !== d || l !== p) {
						var m = 1 - o,
							v = s * h + c * d + l * p + u * f,
							g = v >= 0 ? 1 : -1,
							y = 1 - v * v;
						if (y > Number.EPSILON) {
							var x = Math.sqrt(y),
								_ = Math.atan2(x, v * g);
							(m = Math.sin(m * _) / x), (o = Math.sin(o * _) / x);
						}
						var b = o * g;
						if (
							((s = s * m + h * b),
							(c = c * m + d * b),
							(l = l * m + p * b),
							(u = u * m + f * b),
							m === 1 - o)
						) {
							var w = 1 / Math.sqrt(s * s + c * c + l * l + u * u);
							(s *= w), (c *= w), (l *= w), (u *= w);
						}
					}
					(t[e] = s), (t[e + 1] = c), (t[e + 2] = l), (t[e + 3] = u);
				}),
				(t.multiplyQuaternionsFlat = function (t, e, n, r, i, a) {
					var o = n[r],
						s = n[r + 1],
						c = n[r + 2],
						l = n[r + 3],
						u = i[a],
						h = i[a + 1],
						d = i[a + 2],
						p = i[a + 3];
					return (
						(t[e] = o * p + l * u + s * d - c * h),
						(t[e + 1] = s * p + l * h + c * u - o * d),
						(t[e + 2] = c * p + l * d + o * h - s * u),
						(t[e + 3] = l * p - o * u - s * h - c * d),
						t
					);
				});
			var e = t.prototype;
			return (
				(e.set = function (t, e, n, r) {
					return (
						(this._x = t),
						(this._y = e),
						(this._z = n),
						(this._w = r),
						this._onChangeCallback(),
						this
					);
				}),
				(e.clone = function () {
					return new this.constructor(this._x, this._y, this._z, this._w);
				}),
				(e.copy = function (t) {
					return (
						(this._x = t.x),
						(this._y = t.y),
						(this._z = t.z),
						(this._w = t.w),
						this._onChangeCallback(),
						this
					);
				}),
				(e.setFromEuler = function (t, e) {
					if (!t || !t.isEuler)
						throw new Error(
							'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.'
						);
					var n = t._x,
						r = t._y,
						i = t._z,
						a = t._order,
						o = Math.cos,
						s = Math.sin,
						c = o(n / 2),
						l = o(r / 2),
						u = o(i / 2),
						h = s(n / 2),
						d = s(r / 2),
						p = s(i / 2);
					switch (a) {
						case 'XYZ':
							(this._x = h * l * u + c * d * p),
								(this._y = c * d * u - h * l * p),
								(this._z = c * l * p + h * d * u),
								(this._w = c * l * u - h * d * p);
							break;
						case 'YXZ':
							(this._x = h * l * u + c * d * p),
								(this._y = c * d * u - h * l * p),
								(this._z = c * l * p - h * d * u),
								(this._w = c * l * u + h * d * p);
							break;
						case 'ZXY':
							(this._x = h * l * u - c * d * p),
								(this._y = c * d * u + h * l * p),
								(this._z = c * l * p + h * d * u),
								(this._w = c * l * u - h * d * p);
							break;
						case 'ZYX':
							(this._x = h * l * u - c * d * p),
								(this._y = c * d * u + h * l * p),
								(this._z = c * l * p - h * d * u),
								(this._w = c * l * u + h * d * p);
							break;
						case 'YZX':
							(this._x = h * l * u + c * d * p),
								(this._y = c * d * u + h * l * p),
								(this._z = c * l * p - h * d * u),
								(this._w = c * l * u - h * d * p);
							break;
						case 'XZY':
							(this._x = h * l * u - c * d * p),
								(this._y = c * d * u - h * l * p),
								(this._z = c * l * p + h * d * u),
								(this._w = c * l * u + h * d * p);
							break;
						default:
							console.warn(
								'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' +
									a
							);
					}
					return !1 !== e && this._onChangeCallback(), this;
				}),
				(e.setFromAxisAngle = function (t, e) {
					var n = e / 2,
						r = Math.sin(n);
					return (
						(this._x = t.x * r),
						(this._y = t.y * r),
						(this._z = t.z * r),
						(this._w = Math.cos(n)),
						this._onChangeCallback(),
						this
					);
				}),
				(e.setFromRotationMatrix = function (t) {
					var e = t.elements,
						n = e[0],
						r = e[4],
						i = e[8],
						a = e[1],
						o = e[5],
						s = e[9],
						c = e[2],
						l = e[6],
						u = e[10],
						h = n + o + u;
					if (h > 0) {
						var d = 0.5 / Math.sqrt(h + 1);
						(this._w = 0.25 / d),
							(this._x = (l - s) * d),
							(this._y = (i - c) * d),
							(this._z = (a - r) * d);
					} else if (n > o && n > u) {
						var p = 2 * Math.sqrt(1 + n - o - u);
						(this._w = (l - s) / p),
							(this._x = 0.25 * p),
							(this._y = (r + a) / p),
							(this._z = (i + c) / p);
					} else if (o > u) {
						var f = 2 * Math.sqrt(1 + o - n - u);
						(this._w = (i - c) / f),
							(this._x = (r + a) / f),
							(this._y = 0.25 * f),
							(this._z = (s + l) / f);
					} else {
						var m = 2 * Math.sqrt(1 + u - n - o);
						(this._w = (a - r) / m),
							(this._x = (i + c) / m),
							(this._y = (s + l) / m),
							(this._z = 0.25 * m);
					}
					return this._onChangeCallback(), this;
				}),
				(e.setFromUnitVectors = function (t, e) {
					var n = t.dot(e) + 1;
					return (
						n < 1e-6
							? ((n = 0),
							  Math.abs(t.x) > Math.abs(t.z)
									? ((this._x = -t.y),
									  (this._y = t.x),
									  (this._z = 0),
									  (this._w = n))
									: ((this._x = 0),
									  (this._y = -t.z),
									  (this._z = t.y),
									  (this._w = n)))
							: ((this._x = t.y * e.z - t.z * e.y),
							  (this._y = t.z * e.x - t.x * e.z),
							  (this._z = t.x * e.y - t.y * e.x),
							  (this._w = n)),
						this.normalize()
					);
				}),
				(e.angleTo = function (t) {
					return 2 * Math.acos(Math.abs(st.clamp(this.dot(t), -1, 1)));
				}),
				(e.rotateTowards = function (t, e) {
					var n = this.angleTo(t);
					if (0 === n) return this;
					var r = Math.min(1, e / n);
					return this.slerp(t, r), this;
				}),
				(e.identity = function () {
					return this.set(0, 0, 0, 1);
				}),
				(e.inverse = function () {
					return this.conjugate();
				}),
				(e.conjugate = function () {
					return (
						(this._x *= -1),
						(this._y *= -1),
						(this._z *= -1),
						this._onChangeCallback(),
						this
					);
				}),
				(e.dot = function (t) {
					return (
						this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
					);
				}),
				(e.lengthSq = function () {
					return (
						this._x * this._x +
						this._y * this._y +
						this._z * this._z +
						this._w * this._w
					);
				}),
				(e.length = function () {
					return Math.sqrt(
						this._x * this._x +
							this._y * this._y +
							this._z * this._z +
							this._w * this._w
					);
				}),
				(e.normalize = function () {
					var t = this.length();
					return (
						0 === t
							? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
							: ((t = 1 / t),
							  (this._x = this._x * t),
							  (this._y = this._y * t),
							  (this._z = this._z * t),
							  (this._w = this._w * t)),
						this._onChangeCallback(),
						this
					);
				}),
				(e.multiply = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'
						  ),
						  this.multiplyQuaternions(t, e))
						: this.multiplyQuaternions(this, t);
				}),
				(e.premultiply = function (t) {
					return this.multiplyQuaternions(t, this);
				}),
				(e.multiplyQuaternions = function (t, e) {
					var n = t._x,
						r = t._y,
						i = t._z,
						a = t._w,
						o = e._x,
						s = e._y,
						c = e._z,
						l = e._w;
					return (
						(this._x = n * l + a * o + r * c - i * s),
						(this._y = r * l + a * s + i * o - n * c),
						(this._z = i * l + a * c + n * s - r * o),
						(this._w = a * l - n * o - r * s - i * c),
						this._onChangeCallback(),
						this
					);
				}),
				(e.slerp = function (t, e) {
					if (0 === e) return this;
					if (1 === e) return this.copy(t);
					var n = this._x,
						r = this._y,
						i = this._z,
						a = this._w,
						o = a * t._w + n * t._x + r * t._y + i * t._z;
					if (
						(o < 0
							? ((this._w = -t._w),
							  (this._x = -t._x),
							  (this._y = -t._y),
							  (this._z = -t._z),
							  (o = -o))
							: this.copy(t),
						o >= 1)
					)
						return (
							(this._w = a), (this._x = n), (this._y = r), (this._z = i), this
						);
					var s = 1 - o * o;
					if (s <= Number.EPSILON) {
						var c = 1 - e;
						return (
							(this._w = c * a + e * this._w),
							(this._x = c * n + e * this._x),
							(this._y = c * r + e * this._y),
							(this._z = c * i + e * this._z),
							this.normalize(),
							this._onChangeCallback(),
							this
						);
					}
					var l = Math.sqrt(s),
						u = Math.atan2(l, o),
						h = Math.sin((1 - e) * u) / l,
						d = Math.sin(e * u) / l;
					return (
						(this._w = a * h + this._w * d),
						(this._x = n * h + this._x * d),
						(this._y = r * h + this._y * d),
						(this._z = i * h + this._z * d),
						this._onChangeCallback(),
						this
					);
				}),
				(e.equals = function (t) {
					return (
						t._x === this._x &&
						t._y === this._y &&
						t._z === this._z &&
						t._w === this._w
					);
				}),
				(e.fromArray = function (t, e) {
					return (
						void 0 === e && (e = 0),
						(this._x = t[e]),
						(this._y = t[e + 1]),
						(this._z = t[e + 2]),
						(this._w = t[e + 3]),
						this._onChangeCallback(),
						this
					);
				}),
				(e.toArray = function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this._x),
						(t[e + 1] = this._y),
						(t[e + 2] = this._z),
						(t[e + 3] = this._w),
						t
					);
				}),
				(e.fromBufferAttribute = function (t, e) {
					return (
						(this._x = t.getX(e)),
						(this._y = t.getY(e)),
						(this._z = t.getZ(e)),
						(this._w = t.getW(e)),
						this
					);
				}),
				(e._onChange = function (t) {
					return (this._onChangeCallback = t), this;
				}),
				(e._onChangeCallback = function () {}),
				lt(t, [
					{
						key: 'x',
						get: function () {
							return this._x;
						},
						set: function (t) {
							(this._x = t), this._onChangeCallback();
						},
					},
					{
						key: 'y',
						get: function () {
							return this._y;
						},
						set: function (t) {
							(this._y = t), this._onChangeCallback();
						},
					},
					{
						key: 'z',
						get: function () {
							return this._z;
						},
						set: function (t) {
							(this._z = t), this._onChangeCallback();
						},
					},
					{
						key: 'w',
						get: function () {
							return this._w;
						},
						set: function (t) {
							(this._w = t), this._onChangeCallback();
						},
					},
				]),
				t
			);
		})(),
		wt = (function () {
			function t(t, e, n) {
				void 0 === t && (t = 0),
					void 0 === e && (e = 0),
					void 0 === n && (n = 0),
					Object.defineProperty(this, 'isVector3', { value: !0 }),
					(this.x = t),
					(this.y = e),
					(this.z = n);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e, n) {
					return (
						void 0 === n && (n = this.z),
						(this.x = t),
						(this.y = e),
						(this.z = n),
						this
					);
				}),
				(e.setScalar = function (t) {
					return (this.x = t), (this.y = t), (this.z = t), this;
				}),
				(e.setX = function (t) {
					return (this.x = t), this;
				}),
				(e.setY = function (t) {
					return (this.y = t), this;
				}),
				(e.setZ = function (t) {
					return (this.z = t), this;
				}),
				(e.setComponent = function (t, e) {
					switch (t) {
						case 0:
							this.x = e;
							break;
						case 1:
							this.y = e;
							break;
						case 2:
							this.z = e;
							break;
						default:
							throw new Error('index is out of range: ' + t);
					}
					return this;
				}),
				(e.getComponent = function (t) {
					switch (t) {
						case 0:
							return this.x;
						case 1:
							return this.y;
						case 2:
							return this.z;
						default:
							throw new Error('index is out of range: ' + t);
					}
				}),
				(e.clone = function () {
					return new this.constructor(this.x, this.y, this.z);
				}),
				(e.copy = function (t) {
					return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
				}),
				(e.add = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
						  ),
						  this.addVectors(t, e))
						: ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
				}),
				(e.addScalar = function (t) {
					return (this.x += t), (this.y += t), (this.z += t), this;
				}),
				(e.addVectors = function (t, e) {
					return (
						(this.x = t.x + e.x),
						(this.y = t.y + e.y),
						(this.z = t.z + e.z),
						this
					);
				}),
				(e.addScaledVector = function (t, e) {
					return (
						(this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this
					);
				}),
				(e.sub = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
						  ),
						  this.subVectors(t, e))
						: ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
				}),
				(e.subScalar = function (t) {
					return (this.x -= t), (this.y -= t), (this.z -= t), this;
				}),
				(e.subVectors = function (t, e) {
					return (
						(this.x = t.x - e.x),
						(this.y = t.y - e.y),
						(this.z = t.z - e.z),
						this
					);
				}),
				(e.multiply = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'
						  ),
						  this.multiplyVectors(t, e))
						: ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
				}),
				(e.multiplyScalar = function (t) {
					return (this.x *= t), (this.y *= t), (this.z *= t), this;
				}),
				(e.multiplyVectors = function (t, e) {
					return (
						(this.x = t.x * e.x),
						(this.y = t.y * e.y),
						(this.z = t.z * e.z),
						this
					);
				}),
				(e.applyEuler = function (t) {
					return (
						(t && t.isEuler) ||
							console.error(
								'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.'
							),
						this.applyQuaternion(St.setFromEuler(t))
					);
				}),
				(e.applyAxisAngle = function (t, e) {
					return this.applyQuaternion(St.setFromAxisAngle(t, e));
				}),
				(e.applyMatrix3 = function (t) {
					var e = this.x,
						n = this.y,
						r = this.z,
						i = t.elements;
					return (
						(this.x = i[0] * e + i[3] * n + i[6] * r),
						(this.y = i[1] * e + i[4] * n + i[7] * r),
						(this.z = i[2] * e + i[5] * n + i[8] * r),
						this
					);
				}),
				(e.applyNormalMatrix = function (t) {
					return this.applyMatrix3(t).normalize();
				}),
				(e.applyMatrix4 = function (t) {
					var e = this.x,
						n = this.y,
						r = this.z,
						i = t.elements,
						a = 1 / (i[3] * e + i[7] * n + i[11] * r + i[15]);
					return (
						(this.x = (i[0] * e + i[4] * n + i[8] * r + i[12]) * a),
						(this.y = (i[1] * e + i[5] * n + i[9] * r + i[13]) * a),
						(this.z = (i[2] * e + i[6] * n + i[10] * r + i[14]) * a),
						this
					);
				}),
				(e.applyQuaternion = function (t) {
					var e = this.x,
						n = this.y,
						r = this.z,
						i = t.x,
						a = t.y,
						o = t.z,
						s = t.w,
						c = s * e + a * r - o * n,
						l = s * n + o * e - i * r,
						u = s * r + i * n - a * e,
						h = -i * e - a * n - o * r;
					return (
						(this.x = c * s + h * -i + l * -o - u * -a),
						(this.y = l * s + h * -a + u * -i - c * -o),
						(this.z = u * s + h * -o + c * -a - l * -i),
						this
					);
				}),
				(e.project = function (t) {
					return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
						t.projectionMatrix
					);
				}),
				(e.unproject = function (t) {
					return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
						t.matrixWorld
					);
				}),
				(e.transformDirection = function (t) {
					var e = this.x,
						n = this.y,
						r = this.z,
						i = t.elements;
					return (
						(this.x = i[0] * e + i[4] * n + i[8] * r),
						(this.y = i[1] * e + i[5] * n + i[9] * r),
						(this.z = i[2] * e + i[6] * n + i[10] * r),
						this.normalize()
					);
				}),
				(e.divide = function (t) {
					return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
				}),
				(e.divideScalar = function (t) {
					return this.multiplyScalar(1 / t);
				}),
				(e.min = function (t) {
					return (
						(this.x = Math.min(this.x, t.x)),
						(this.y = Math.min(this.y, t.y)),
						(this.z = Math.min(this.z, t.z)),
						this
					);
				}),
				(e.max = function (t) {
					return (
						(this.x = Math.max(this.x, t.x)),
						(this.y = Math.max(this.y, t.y)),
						(this.z = Math.max(this.z, t.z)),
						this
					);
				}),
				(e.clamp = function (t, e) {
					return (
						(this.x = Math.max(t.x, Math.min(e.x, this.x))),
						(this.y = Math.max(t.y, Math.min(e.y, this.y))),
						(this.z = Math.max(t.z, Math.min(e.z, this.z))),
						this
					);
				}),
				(e.clampScalar = function (t, e) {
					return (
						(this.x = Math.max(t, Math.min(e, this.x))),
						(this.y = Math.max(t, Math.min(e, this.y))),
						(this.z = Math.max(t, Math.min(e, this.z))),
						this
					);
				}),
				(e.clampLength = function (t, e) {
					var n = this.length();
					return this.divideScalar(n || 1).multiplyScalar(
						Math.max(t, Math.min(e, n))
					);
				}),
				(e.floor = function () {
					return (
						(this.x = Math.floor(this.x)),
						(this.y = Math.floor(this.y)),
						(this.z = Math.floor(this.z)),
						this
					);
				}),
				(e.ceil = function () {
					return (
						(this.x = Math.ceil(this.x)),
						(this.y = Math.ceil(this.y)),
						(this.z = Math.ceil(this.z)),
						this
					);
				}),
				(e.round = function () {
					return (
						(this.x = Math.round(this.x)),
						(this.y = Math.round(this.y)),
						(this.z = Math.round(this.z)),
						this
					);
				}),
				(e.roundToZero = function () {
					return (
						(this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
						(this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
						(this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
						this
					);
				}),
				(e.negate = function () {
					return (
						(this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
					);
				}),
				(e.dot = function (t) {
					return this.x * t.x + this.y * t.y + this.z * t.z;
				}),
				(e.lengthSq = function () {
					return this.x * this.x + this.y * this.y + this.z * this.z;
				}),
				(e.length = function () {
					return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
				}),
				(e.manhattanLength = function () {
					return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
				}),
				(e.normalize = function () {
					return this.divideScalar(this.length() || 1);
				}),
				(e.setLength = function (t) {
					return this.normalize().multiplyScalar(t);
				}),
				(e.lerp = function (t, e) {
					return (
						(this.x += (t.x - this.x) * e),
						(this.y += (t.y - this.y) * e),
						(this.z += (t.z - this.z) * e),
						this
					);
				}),
				(e.lerpVectors = function (t, e, n) {
					return (
						(this.x = t.x + (e.x - t.x) * n),
						(this.y = t.y + (e.y - t.y) * n),
						(this.z = t.z + (e.z - t.z) * n),
						this
					);
				}),
				(e.cross = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'
						  ),
						  this.crossVectors(t, e))
						: this.crossVectors(this, t);
				}),
				(e.crossVectors = function (t, e) {
					var n = t.x,
						r = t.y,
						i = t.z,
						a = e.x,
						o = e.y,
						s = e.z;
					return (
						(this.x = r * s - i * o),
						(this.y = i * a - n * s),
						(this.z = n * o - r * a),
						this
					);
				}),
				(e.projectOnVector = function (t) {
					var e = t.lengthSq();
					if (0 === e) return this.set(0, 0, 0);
					var n = t.dot(this) / e;
					return this.copy(t).multiplyScalar(n);
				}),
				(e.projectOnPlane = function (t) {
					return Mt.copy(this).projectOnVector(t), this.sub(Mt);
				}),
				(e.reflect = function (t) {
					return this.sub(Mt.copy(t).multiplyScalar(2 * this.dot(t)));
				}),
				(e.angleTo = function (t) {
					var e = Math.sqrt(this.lengthSq() * t.lengthSq());
					if (0 === e) return Math.PI / 2;
					var n = this.dot(t) / e;
					return Math.acos(st.clamp(n, -1, 1));
				}),
				(e.distanceTo = function (t) {
					return Math.sqrt(this.distanceToSquared(t));
				}),
				(e.distanceToSquared = function (t) {
					var e = this.x - t.x,
						n = this.y - t.y,
						r = this.z - t.z;
					return e * e + n * n + r * r;
				}),
				(e.manhattanDistanceTo = function (t) {
					return (
						Math.abs(this.x - t.x) +
						Math.abs(this.y - t.y) +
						Math.abs(this.z - t.z)
					);
				}),
				(e.setFromSpherical = function (t) {
					return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
				}),
				(e.setFromSphericalCoords = function (t, e, n) {
					var r = Math.sin(e) * t;
					return (
						(this.x = r * Math.sin(n)),
						(this.y = Math.cos(e) * t),
						(this.z = r * Math.cos(n)),
						this
					);
				}),
				(e.setFromCylindrical = function (t) {
					return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
				}),
				(e.setFromCylindricalCoords = function (t, e, n) {
					return (
						(this.x = t * Math.sin(e)),
						(this.y = n),
						(this.z = t * Math.cos(e)),
						this
					);
				}),
				(e.setFromMatrixPosition = function (t) {
					var e = t.elements;
					return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
				}),
				(e.setFromMatrixScale = function (t) {
					var e = this.setFromMatrixColumn(t, 0).length(),
						n = this.setFromMatrixColumn(t, 1).length(),
						r = this.setFromMatrixColumn(t, 2).length();
					return (this.x = e), (this.y = n), (this.z = r), this;
				}),
				(e.setFromMatrixColumn = function (t, e) {
					return this.fromArray(t.elements, 4 * e);
				}),
				(e.setFromMatrix3Column = function (t, e) {
					return this.fromArray(t.elements, 3 * e);
				}),
				(e.equals = function (t) {
					return t.x === this.x && t.y === this.y && t.z === this.z;
				}),
				(e.fromArray = function (t, e) {
					return (
						void 0 === e && (e = 0),
						(this.x = t[e]),
						(this.y = t[e + 1]),
						(this.z = t[e + 2]),
						this
					);
				}),
				(e.toArray = function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this.x),
						(t[e + 1] = this.y),
						(t[e + 2] = this.z),
						t
					);
				}),
				(e.fromBufferAttribute = function (t, e, n) {
					return (
						void 0 !== n &&
							console.warn(
								'THREE.Vector3: offset has been removed from .fromBufferAttribute().'
							),
						(this.x = t.getX(e)),
						(this.y = t.getY(e)),
						(this.z = t.getZ(e)),
						this
					);
				}),
				(e.random = function () {
					return (
						(this.x = Math.random()),
						(this.y = Math.random()),
						(this.z = Math.random()),
						this
					);
				}),
				t
			);
		})(),
		Mt = new wt(),
		St = new bt(),
		Tt = (function () {
			function t(t, e) {
				Object.defineProperty(this, 'isBox3', { value: !0 }),
					(this.min = void 0 !== t ? t : new wt(1 / 0, 1 / 0, 1 / 0)),
					(this.max = void 0 !== e ? e : new wt(-1 / 0, -1 / 0, -1 / 0));
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e) {
					return this.min.copy(t), this.max.copy(e), this;
				}),
				(e.setFromArray = function (t) {
					for (
						var e = 1 / 0,
							n = 1 / 0,
							r = 1 / 0,
							i = -1 / 0,
							a = -1 / 0,
							o = -1 / 0,
							s = 0,
							c = t.length;
						s < c;
						s += 3
					) {
						var l = t[s],
							u = t[s + 1],
							h = t[s + 2];
						l < e && (e = l),
							u < n && (n = u),
							h < r && (r = h),
							l > i && (i = l),
							u > a && (a = u),
							h > o && (o = h);
					}
					return this.min.set(e, n, r), this.max.set(i, a, o), this;
				}),
				(e.setFromBufferAttribute = function (t) {
					for (
						var e = 1 / 0,
							n = 1 / 0,
							r = 1 / 0,
							i = -1 / 0,
							a = -1 / 0,
							o = -1 / 0,
							s = 0,
							c = t.count;
						s < c;
						s++
					) {
						var l = t.getX(s),
							u = t.getY(s),
							h = t.getZ(s);
						l < e && (e = l),
							u < n && (n = u),
							h < r && (r = h),
							l > i && (i = l),
							u > a && (a = u),
							h > o && (o = h);
					}
					return this.min.set(e, n, r), this.max.set(i, a, o), this;
				}),
				(e.setFromPoints = function (t) {
					this.makeEmpty();
					for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
					return this;
				}),
				(e.setFromCenterAndSize = function (t, e) {
					var n = Lt.copy(e).multiplyScalar(0.5);
					return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
				}),
				(e.setFromObject = function (t) {
					return this.makeEmpty(), this.expandByObject(t);
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return this.min.copy(t.min), this.max.copy(t.max), this;
				}),
				(e.makeEmpty = function () {
					return (
						(this.min.x = this.min.y = this.min.z = 1 / 0),
						(this.max.x = this.max.y = this.max.z = -1 / 0),
						this
					);
				}),
				(e.isEmpty = function () {
					return (
						this.max.x < this.min.x ||
						this.max.y < this.min.y ||
						this.max.z < this.min.z
					);
				}),
				(e.getCenter = function (t) {
					return (
						void 0 === t &&
							(console.warn('THREE.Box3: .getCenter() target is now required'),
							(t = new wt())),
						this.isEmpty()
							? t.set(0, 0, 0)
							: t.addVectors(this.min, this.max).multiplyScalar(0.5)
					);
				}),
				(e.getSize = function (t) {
					return (
						void 0 === t &&
							(console.warn('THREE.Box3: .getSize() target is now required'),
							(t = new wt())),
						this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
					);
				}),
				(e.expandByPoint = function (t) {
					return this.min.min(t), this.max.max(t), this;
				}),
				(e.expandByVector = function (t) {
					return this.min.sub(t), this.max.add(t), this;
				}),
				(e.expandByScalar = function (t) {
					return this.min.addScalar(-t), this.max.addScalar(t), this;
				}),
				(e.expandByObject = function (t) {
					t.updateWorldMatrix(!1, !1);
					var e = t.geometry;
					void 0 !== e &&
						(null === e.boundingBox && e.computeBoundingBox(),
						Rt.copy(e.boundingBox),
						Rt.applyMatrix4(t.matrixWorld),
						this.union(Rt));
					for (var n = t.children, r = 0, i = n.length; r < i; r++)
						this.expandByObject(n[r]);
					return this;
				}),
				(e.containsPoint = function (t) {
					return !(
						t.x < this.min.x ||
						t.x > this.max.x ||
						t.y < this.min.y ||
						t.y > this.max.y ||
						t.z < this.min.z ||
						t.z > this.max.z
					);
				}),
				(e.containsBox = function (t) {
					return (
						this.min.x <= t.min.x &&
						t.max.x <= this.max.x &&
						this.min.y <= t.min.y &&
						t.max.y <= this.max.y &&
						this.min.z <= t.min.z &&
						t.max.z <= this.max.z
					);
				}),
				(e.getParameter = function (t, e) {
					return (
						void 0 === e &&
							(console.warn(
								'THREE.Box3: .getParameter() target is now required'
							),
							(e = new wt())),
						e.set(
							(t.x - this.min.x) / (this.max.x - this.min.x),
							(t.y - this.min.y) / (this.max.y - this.min.y),
							(t.z - this.min.z) / (this.max.z - this.min.z)
						)
					);
				}),
				(e.intersectsBox = function (t) {
					return !(
						t.max.x < this.min.x ||
						t.min.x > this.max.x ||
						t.max.y < this.min.y ||
						t.min.y > this.max.y ||
						t.max.z < this.min.z ||
						t.min.z > this.max.z
					);
				}),
				(e.intersectsSphere = function (t) {
					return (
						this.clampPoint(t.center, Lt),
						Lt.distanceToSquared(t.center) <= t.radius * t.radius
					);
				}),
				(e.intersectsPlane = function (t) {
					var e, n;
					return (
						t.normal.x > 0
							? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
							: ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
						t.normal.y > 0
							? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
							: ((e += t.normal.y * this.max.y),
							  (n += t.normal.y * this.min.y)),
						t.normal.z > 0
							? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
							: ((e += t.normal.z * this.max.z),
							  (n += t.normal.z * this.min.z)),
						e <= -t.constant && n >= -t.constant
					);
				}),
				(e.intersectsTriangle = function (t) {
					if (this.isEmpty()) return !1;
					this.getCenter(Bt),
						zt.subVectors(this.max, Bt),
						Ct.subVectors(t.a, Bt),
						Pt.subVectors(t.b, Bt),
						It.subVectors(t.c, Bt),
						Dt.subVectors(Pt, Ct),
						Nt.subVectors(It, Pt),
						Ot.subVectors(Ct, It);
					var e = [
						0,
						-Dt.z,
						Dt.y,
						0,
						-Nt.z,
						Nt.y,
						0,
						-Ot.z,
						Ot.y,
						Dt.z,
						0,
						-Dt.x,
						Nt.z,
						0,
						-Nt.x,
						Ot.z,
						0,
						-Ot.x,
						-Dt.y,
						Dt.x,
						0,
						-Nt.y,
						Nt.x,
						0,
						-Ot.y,
						Ot.x,
						0,
					];
					return (
						!!Et(e, Ct, Pt, It, zt) &&
						!!Et((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), Ct, Pt, It, zt) &&
						(Gt.crossVectors(Dt, Nt),
						Et((e = [Gt.x, Gt.y, Gt.z]), Ct, Pt, It, zt))
					);
				}),
				(e.clampPoint = function (t, e) {
					return (
						void 0 === e &&
							(console.warn('THREE.Box3: .clampPoint() target is now required'),
							(e = new wt())),
						e.copy(t).clamp(this.min, this.max)
					);
				}),
				(e.distanceToPoint = function (t) {
					return Lt.copy(t).clamp(this.min, this.max).sub(t).length();
				}),
				(e.getBoundingSphere = function (t) {
					return (
						void 0 === t &&
							console.error(
								'THREE.Box3: .getBoundingSphere() target is now required'
							),
						this.getCenter(t.center),
						(t.radius = 0.5 * this.getSize(Lt).length()),
						t
					);
				}),
				(e.intersect = function (t) {
					return (
						this.min.max(t.min),
						this.max.min(t.max),
						this.isEmpty() && this.makeEmpty(),
						this
					);
				}),
				(e.union = function (t) {
					return this.min.min(t.min), this.max.max(t.max), this;
				}),
				(e.applyMatrix4 = function (t) {
					return (
						this.isEmpty() ||
							(At[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
							At[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
							At[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
							At[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
							At[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
							At[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
							At[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
							At[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
							this.setFromPoints(At)),
						this
					);
				}),
				(e.translate = function (t) {
					return this.min.add(t), this.max.add(t), this;
				}),
				(e.equals = function (t) {
					return t.min.equals(this.min) && t.max.equals(this.max);
				}),
				t
			);
		})();
	function Et(t, e, n, r, i) {
		for (var a = 0, o = t.length - 3; a <= o; a += 3) {
			Ft.fromArray(t, a);
			var s =
					i.x * Math.abs(Ft.x) + i.y * Math.abs(Ft.y) + i.z * Math.abs(Ft.z),
				c = e.dot(Ft),
				l = n.dot(Ft),
				u = r.dot(Ft);
			if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s) return !1;
		}
		return !0;
	}
	var At = [
			new wt(),
			new wt(),
			new wt(),
			new wt(),
			new wt(),
			new wt(),
			new wt(),
			new wt(),
		],
		Lt = new wt(),
		Rt = new Tt(),
		Ct = new wt(),
		Pt = new wt(),
		It = new wt(),
		Dt = new wt(),
		Nt = new wt(),
		Ot = new wt(),
		Bt = new wt(),
		zt = new wt(),
		Gt = new wt(),
		Ft = new wt(),
		Ut = new Tt(),
		Ht = (function () {
			function t(t, e) {
				(this.center = void 0 !== t ? t : new wt()),
					(this.radius = void 0 !== e ? e : -1);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e) {
					return this.center.copy(t), (this.radius = e), this;
				}),
				(e.setFromPoints = function (t, e) {
					var n = this.center;
					void 0 !== e ? n.copy(e) : Ut.setFromPoints(t).getCenter(n);
					for (var r = 0, i = 0, a = t.length; i < a; i++)
						r = Math.max(r, n.distanceToSquared(t[i]));
					return (this.radius = Math.sqrt(r)), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return this.center.copy(t.center), (this.radius = t.radius), this;
				}),
				(e.isEmpty = function () {
					return this.radius < 0;
				}),
				(e.makeEmpty = function () {
					return this.center.set(0, 0, 0), (this.radius = -1), this;
				}),
				(e.containsPoint = function (t) {
					return t.distanceToSquared(this.center) <= this.radius * this.radius;
				}),
				(e.distanceToPoint = function (t) {
					return t.distanceTo(this.center) - this.radius;
				}),
				(e.intersectsSphere = function (t) {
					var e = this.radius + t.radius;
					return t.center.distanceToSquared(this.center) <= e * e;
				}),
				(e.intersectsBox = function (t) {
					return t.intersectsSphere(this);
				}),
				(e.intersectsPlane = function (t) {
					return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
				}),
				(e.clampPoint = function (t, e) {
					var n = this.center.distanceToSquared(t);
					return (
						void 0 === e &&
							(console.warn(
								'THREE.Sphere: .clampPoint() target is now required'
							),
							(e = new wt())),
						e.copy(t),
						n > this.radius * this.radius &&
							(e.sub(this.center).normalize(),
							e.multiplyScalar(this.radius).add(this.center)),
						e
					);
				}),
				(e.getBoundingBox = function (t) {
					return (
						void 0 === t &&
							(console.warn(
								'THREE.Sphere: .getBoundingBox() target is now required'
							),
							(t = new Tt())),
						this.isEmpty()
							? (t.makeEmpty(), t)
							: (t.set(this.center, this.center),
							  t.expandByScalar(this.radius),
							  t)
					);
				}),
				(e.applyMatrix4 = function (t) {
					return (
						this.center.applyMatrix4(t),
						(this.radius = this.radius * t.getMaxScaleOnAxis()),
						this
					);
				}),
				(e.translate = function (t) {
					return this.center.add(t), this;
				}),
				(e.equals = function (t) {
					return t.center.equals(this.center) && t.radius === this.radius;
				}),
				t
			);
		})(),
		kt = new wt(),
		Vt = new wt(),
		Wt = new wt(),
		jt = new wt(),
		qt = new wt(),
		Xt = new wt(),
		Yt = new wt(),
		Zt = (function () {
			function t(t, e) {
				(this.origin = void 0 !== t ? t : new wt()),
					(this.direction = void 0 !== e ? e : new wt(0, 0, -1));
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e) {
					return this.origin.copy(t), this.direction.copy(e), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return (
						this.origin.copy(t.origin), this.direction.copy(t.direction), this
					);
				}),
				(e.at = function (t, e) {
					return (
						void 0 === e &&
							(console.warn('THREE.Ray: .at() target is now required'),
							(e = new wt())),
						e.copy(this.direction).multiplyScalar(t).add(this.origin)
					);
				}),
				(e.lookAt = function (t) {
					return this.direction.copy(t).sub(this.origin).normalize(), this;
				}),
				(e.recast = function (t) {
					return this.origin.copy(this.at(t, kt)), this;
				}),
				(e.closestPointToPoint = function (t, e) {
					void 0 === e &&
						(console.warn(
							'THREE.Ray: .closestPointToPoint() target is now required'
						),
						(e = new wt())),
						e.subVectors(t, this.origin);
					var n = e.dot(this.direction);
					return n < 0
						? e.copy(this.origin)
						: e.copy(this.direction).multiplyScalar(n).add(this.origin);
				}),
				(e.distanceToPoint = function (t) {
					return Math.sqrt(this.distanceSqToPoint(t));
				}),
				(e.distanceSqToPoint = function (t) {
					var e = kt.subVectors(t, this.origin).dot(this.direction);
					return e < 0
						? this.origin.distanceToSquared(t)
						: (kt.copy(this.direction).multiplyScalar(e).add(this.origin),
						  kt.distanceToSquared(t));
				}),
				(e.distanceSqToSegment = function (t, e, n, r) {
					Vt.copy(t).add(e).multiplyScalar(0.5),
						Wt.copy(e).sub(t).normalize(),
						jt.copy(this.origin).sub(Vt);
					var i,
						a,
						o,
						s,
						c = 0.5 * t.distanceTo(e),
						l = -this.direction.dot(Wt),
						u = jt.dot(this.direction),
						h = -jt.dot(Wt),
						d = jt.lengthSq(),
						p = Math.abs(1 - l * l);
					if (p > 0)
						if (((a = l * u - h), (s = c * p), (i = l * h - u) >= 0))
							if (a >= -s)
								if (a <= s) {
									var f = 1 / p;
									o =
										(i *= f) * (i + l * (a *= f) + 2 * u) +
										a * (l * i + a + 2 * h) +
										d;
								} else
									(a = c),
										(o =
											-(i = Math.max(0, -(l * a + u))) * i +
											a * (a + 2 * h) +
											d);
							else
								(a = -c),
									(o =
										-(i = Math.max(0, -(l * a + u))) * i + a * (a + 2 * h) + d);
						else
							a <= -s
								? (o =
										-(i = Math.max(0, -(-l * c + u))) * i +
										(a = i > 0 ? -c : Math.min(Math.max(-c, -h), c)) *
											(a + 2 * h) +
										d)
								: a <= s
								? ((i = 0),
								  (o = (a = Math.min(Math.max(-c, -h), c)) * (a + 2 * h) + d))
								: (o =
										-(i = Math.max(0, -(l * c + u))) * i +
										(a = i > 0 ? c : Math.min(Math.max(-c, -h), c)) *
											(a + 2 * h) +
										d);
					else
						(a = l > 0 ? -c : c),
							(o = -(i = Math.max(0, -(l * a + u))) * i + a * (a + 2 * h) + d);
					return (
						n && n.copy(this.direction).multiplyScalar(i).add(this.origin),
						r && r.copy(Wt).multiplyScalar(a).add(Vt),
						o
					);
				}),
				(e.intersectSphere = function (t, e) {
					kt.subVectors(t.center, this.origin);
					var n = kt.dot(this.direction),
						r = kt.dot(kt) - n * n,
						i = t.radius * t.radius;
					if (r > i) return null;
					var a = Math.sqrt(i - r),
						o = n - a,
						s = n + a;
					return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e);
				}),
				(e.intersectsSphere = function (t) {
					return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
				}),
				(e.distanceToPlane = function (t) {
					var e = t.normal.dot(this.direction);
					if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
					var n = -(this.origin.dot(t.normal) + t.constant) / e;
					return n >= 0 ? n : null;
				}),
				(e.intersectPlane = function (t, e) {
					var n = this.distanceToPlane(t);
					return null === n ? null : this.at(n, e);
				}),
				(e.intersectsPlane = function (t) {
					var e = t.distanceToPoint(this.origin);
					return 0 === e || t.normal.dot(this.direction) * e < 0;
				}),
				(e.intersectBox = function (t, e) {
					var n,
						r,
						i,
						a,
						o,
						s,
						c = 1 / this.direction.x,
						l = 1 / this.direction.y,
						u = 1 / this.direction.z,
						h = this.origin;
					return (
						c >= 0
							? ((n = (t.min.x - h.x) * c), (r = (t.max.x - h.x) * c))
							: ((n = (t.max.x - h.x) * c), (r = (t.min.x - h.x) * c)),
						l >= 0
							? ((i = (t.min.y - h.y) * l), (a = (t.max.y - h.y) * l))
							: ((i = (t.max.y - h.y) * l), (a = (t.min.y - h.y) * l)),
						n > a || i > r
							? null
							: ((i > n || n != n) && (n = i),
							  (a < r || r != r) && (r = a),
							  u >= 0
									? ((o = (t.min.z - h.z) * u), (s = (t.max.z - h.z) * u))
									: ((o = (t.max.z - h.z) * u), (s = (t.min.z - h.z) * u)),
							  n > s || o > r
									? null
									: ((o > n || n != n) && (n = o),
									  (s < r || r != r) && (r = s),
									  r < 0 ? null : this.at(n >= 0 ? n : r, e)))
					);
				}),
				(e.intersectsBox = function (t) {
					return null !== this.intersectBox(t, kt);
				}),
				(e.intersectTriangle = function (t, e, n, r, i) {
					qt.subVectors(e, t), Xt.subVectors(n, t), Yt.crossVectors(qt, Xt);
					var a,
						o = this.direction.dot(Yt);
					if (o > 0) {
						if (r) return null;
						a = 1;
					} else {
						if (!(o < 0)) return null;
						(a = -1), (o = -o);
					}
					jt.subVectors(this.origin, t);
					var s = a * this.direction.dot(Xt.crossVectors(jt, Xt));
					if (s < 0) return null;
					var c = a * this.direction.dot(qt.cross(jt));
					if (c < 0) return null;
					if (s + c > o) return null;
					var l = -a * jt.dot(Yt);
					return l < 0 ? null : this.at(l / o, i);
				}),
				(e.applyMatrix4 = function (t) {
					return (
						this.origin.applyMatrix4(t),
						this.direction.transformDirection(t),
						this
					);
				}),
				(e.equals = function (t) {
					return (
						t.origin.equals(this.origin) && t.direction.equals(this.direction)
					);
				}),
				t
			);
		})(),
		Jt = (function () {
			function t() {
				Object.defineProperty(this, 'isMatrix4', { value: !0 }),
					(this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
					arguments.length > 0 &&
						console.error(
							'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.'
						);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e, n, r, i, a, o, s, c, l, u, h, d, p, f, m) {
					var v = this.elements;
					return (
						(v[0] = t),
						(v[4] = e),
						(v[8] = n),
						(v[12] = r),
						(v[1] = i),
						(v[5] = a),
						(v[9] = o),
						(v[13] = s),
						(v[2] = c),
						(v[6] = l),
						(v[10] = u),
						(v[14] = h),
						(v[3] = d),
						(v[7] = p),
						(v[11] = f),
						(v[15] = m),
						this
					);
				}),
				(e.identity = function () {
					return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
				}),
				(e.clone = function () {
					return new t().fromArray(this.elements);
				}),
				(e.copy = function (t) {
					var e = this.elements,
						n = t.elements;
					return (
						(e[0] = n[0]),
						(e[1] = n[1]),
						(e[2] = n[2]),
						(e[3] = n[3]),
						(e[4] = n[4]),
						(e[5] = n[5]),
						(e[6] = n[6]),
						(e[7] = n[7]),
						(e[8] = n[8]),
						(e[9] = n[9]),
						(e[10] = n[10]),
						(e[11] = n[11]),
						(e[12] = n[12]),
						(e[13] = n[13]),
						(e[14] = n[14]),
						(e[15] = n[15]),
						this
					);
				}),
				(e.copyPosition = function (t) {
					var e = this.elements,
						n = t.elements;
					return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
				}),
				(e.extractBasis = function (t, e, n) {
					return (
						t.setFromMatrixColumn(this, 0),
						e.setFromMatrixColumn(this, 1),
						n.setFromMatrixColumn(this, 2),
						this
					);
				}),
				(e.makeBasis = function (t, e, n) {
					return (
						this.set(
							t.x,
							e.x,
							n.x,
							0,
							t.y,
							e.y,
							n.y,
							0,
							t.z,
							e.z,
							n.z,
							0,
							0,
							0,
							0,
							1
						),
						this
					);
				}),
				(e.extractRotation = function (t) {
					var e = this.elements,
						n = t.elements,
						r = 1 / Qt.setFromMatrixColumn(t, 0).length(),
						i = 1 / Qt.setFromMatrixColumn(t, 1).length(),
						a = 1 / Qt.setFromMatrixColumn(t, 2).length();
					return (
						(e[0] = n[0] * r),
						(e[1] = n[1] * r),
						(e[2] = n[2] * r),
						(e[3] = 0),
						(e[4] = n[4] * i),
						(e[5] = n[5] * i),
						(e[6] = n[6] * i),
						(e[7] = 0),
						(e[8] = n[8] * a),
						(e[9] = n[9] * a),
						(e[10] = n[10] * a),
						(e[11] = 0),
						(e[12] = 0),
						(e[13] = 0),
						(e[14] = 0),
						(e[15] = 1),
						this
					);
				}),
				(e.makeRotationFromEuler = function (t) {
					(t && t.isEuler) ||
						console.error(
							'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.'
						);
					var e = this.elements,
						n = t.x,
						r = t.y,
						i = t.z,
						a = Math.cos(n),
						o = Math.sin(n),
						s = Math.cos(r),
						c = Math.sin(r),
						l = Math.cos(i),
						u = Math.sin(i);
					if ('XYZ' === t.order) {
						var h = a * l,
							d = a * u,
							p = o * l,
							f = o * u;
						(e[0] = s * l),
							(e[4] = -s * u),
							(e[8] = c),
							(e[1] = d + p * c),
							(e[5] = h - f * c),
							(e[9] = -o * s),
							(e[2] = f - h * c),
							(e[6] = p + d * c),
							(e[10] = a * s);
					} else if ('YXZ' === t.order) {
						var m = s * l,
							v = s * u,
							g = c * l,
							y = c * u;
						(e[0] = m + y * o),
							(e[4] = g * o - v),
							(e[8] = a * c),
							(e[1] = a * u),
							(e[5] = a * l),
							(e[9] = -o),
							(e[2] = v * o - g),
							(e[6] = y + m * o),
							(e[10] = a * s);
					} else if ('ZXY' === t.order) {
						var x = s * l,
							_ = s * u,
							b = c * l,
							w = c * u;
						(e[0] = x - w * o),
							(e[4] = -a * u),
							(e[8] = b + _ * o),
							(e[1] = _ + b * o),
							(e[5] = a * l),
							(e[9] = w - x * o),
							(e[2] = -a * c),
							(e[6] = o),
							(e[10] = a * s);
					} else if ('ZYX' === t.order) {
						var M = a * l,
							S = a * u,
							T = o * l,
							E = o * u;
						(e[0] = s * l),
							(e[4] = T * c - S),
							(e[8] = M * c + E),
							(e[1] = s * u),
							(e[5] = E * c + M),
							(e[9] = S * c - T),
							(e[2] = -c),
							(e[6] = o * s),
							(e[10] = a * s);
					} else if ('YZX' === t.order) {
						var A = a * s,
							L = a * c,
							R = o * s,
							C = o * c;
						(e[0] = s * l),
							(e[4] = C - A * u),
							(e[8] = R * u + L),
							(e[1] = u),
							(e[5] = a * l),
							(e[9] = -o * l),
							(e[2] = -c * l),
							(e[6] = L * u + R),
							(e[10] = A - C * u);
					} else if ('XZY' === t.order) {
						var P = a * s,
							I = a * c,
							D = o * s,
							N = o * c;
						(e[0] = s * l),
							(e[4] = -u),
							(e[8] = c * l),
							(e[1] = P * u + N),
							(e[5] = a * l),
							(e[9] = I * u - D),
							(e[2] = D * u - I),
							(e[6] = o * l),
							(e[10] = N * u + P);
					}
					return (
						(e[3] = 0),
						(e[7] = 0),
						(e[11] = 0),
						(e[12] = 0),
						(e[13] = 0),
						(e[14] = 0),
						(e[15] = 1),
						this
					);
				}),
				(e.makeRotationFromQuaternion = function (t) {
					return this.compose($t, t, te);
				}),
				(e.lookAt = function (t, e, n) {
					var r = this.elements;
					return (
						re.subVectors(t, e),
						0 === re.lengthSq() && (re.z = 1),
						re.normalize(),
						ee.crossVectors(n, re),
						0 === ee.lengthSq() &&
							(1 === Math.abs(n.z) ? (re.x += 1e-4) : (re.z += 1e-4),
							re.normalize(),
							ee.crossVectors(n, re)),
						ee.normalize(),
						ne.crossVectors(re, ee),
						(r[0] = ee.x),
						(r[4] = ne.x),
						(r[8] = re.x),
						(r[1] = ee.y),
						(r[5] = ne.y),
						(r[9] = re.y),
						(r[2] = ee.z),
						(r[6] = ne.z),
						(r[10] = re.z),
						this
					);
				}),
				(e.multiply = function (t, e) {
					return void 0 !== e
						? (console.warn(
								'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'
						  ),
						  this.multiplyMatrices(t, e))
						: this.multiplyMatrices(this, t);
				}),
				(e.premultiply = function (t) {
					return this.multiplyMatrices(t, this);
				}),
				(e.multiplyMatrices = function (t, e) {
					var n = t.elements,
						r = e.elements,
						i = this.elements,
						a = n[0],
						o = n[4],
						s = n[8],
						c = n[12],
						l = n[1],
						u = n[5],
						h = n[9],
						d = n[13],
						p = n[2],
						f = n[6],
						m = n[10],
						v = n[14],
						g = n[3],
						y = n[7],
						x = n[11],
						_ = n[15],
						b = r[0],
						w = r[4],
						M = r[8],
						S = r[12],
						T = r[1],
						E = r[5],
						A = r[9],
						L = r[13],
						R = r[2],
						C = r[6],
						P = r[10],
						I = r[14],
						D = r[3],
						N = r[7],
						O = r[11],
						B = r[15];
					return (
						(i[0] = a * b + o * T + s * R + c * D),
						(i[4] = a * w + o * E + s * C + c * N),
						(i[8] = a * M + o * A + s * P + c * O),
						(i[12] = a * S + o * L + s * I + c * B),
						(i[1] = l * b + u * T + h * R + d * D),
						(i[5] = l * w + u * E + h * C + d * N),
						(i[9] = l * M + u * A + h * P + d * O),
						(i[13] = l * S + u * L + h * I + d * B),
						(i[2] = p * b + f * T + m * R + v * D),
						(i[6] = p * w + f * E + m * C + v * N),
						(i[10] = p * M + f * A + m * P + v * O),
						(i[14] = p * S + f * L + m * I + v * B),
						(i[3] = g * b + y * T + x * R + _ * D),
						(i[7] = g * w + y * E + x * C + _ * N),
						(i[11] = g * M + y * A + x * P + _ * O),
						(i[15] = g * S + y * L + x * I + _ * B),
						this
					);
				}),
				(e.multiplyScalar = function (t) {
					var e = this.elements;
					return (
						(e[0] *= t),
						(e[4] *= t),
						(e[8] *= t),
						(e[12] *= t),
						(e[1] *= t),
						(e[5] *= t),
						(e[9] *= t),
						(e[13] *= t),
						(e[2] *= t),
						(e[6] *= t),
						(e[10] *= t),
						(e[14] *= t),
						(e[3] *= t),
						(e[7] *= t),
						(e[11] *= t),
						(e[15] *= t),
						this
					);
				}),
				(e.determinant = function () {
					var t = this.elements,
						e = t[0],
						n = t[4],
						r = t[8],
						i = t[12],
						a = t[1],
						o = t[5],
						s = t[9],
						c = t[13],
						l = t[2],
						u = t[6],
						h = t[10],
						d = t[14];
					return (
						t[3] *
							(+i * s * u -
								r * c * u -
								i * o * h +
								n * c * h +
								r * o * d -
								n * s * d) +
						t[7] *
							(+e * s * d -
								e * c * h +
								i * a * h -
								r * a * d +
								r * c * l -
								i * s * l) +
						t[11] *
							(+e * c * u -
								e * o * d -
								i * a * u +
								n * a * d +
								i * o * l -
								n * c * l) +
						t[15] *
							(-r * o * l -
								e * s * u +
								e * o * h +
								r * a * u -
								n * a * h +
								n * s * l)
					);
				}),
				(e.transpose = function () {
					var t,
						e = this.elements;
					return (
						(t = e[1]),
						(e[1] = e[4]),
						(e[4] = t),
						(t = e[2]),
						(e[2] = e[8]),
						(e[8] = t),
						(t = e[6]),
						(e[6] = e[9]),
						(e[9] = t),
						(t = e[3]),
						(e[3] = e[12]),
						(e[12] = t),
						(t = e[7]),
						(e[7] = e[13]),
						(e[13] = t),
						(t = e[11]),
						(e[11] = e[14]),
						(e[14] = t),
						this
					);
				}),
				(e.setPosition = function (t, e, n) {
					var r = this.elements;
					return (
						t.isVector3
							? ((r[12] = t.x), (r[13] = t.y), (r[14] = t.z))
							: ((r[12] = t), (r[13] = e), (r[14] = n)),
						this
					);
				}),
				(e.getInverse = function (t, e) {
					void 0 !== e &&
						console.warn(
							'THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.'
						);
					var n = this.elements,
						r = t.elements,
						i = r[0],
						a = r[1],
						o = r[2],
						s = r[3],
						c = r[4],
						l = r[5],
						u = r[6],
						h = r[7],
						d = r[8],
						p = r[9],
						f = r[10],
						m = r[11],
						v = r[12],
						g = r[13],
						y = r[14],
						x = r[15],
						_ =
							p * y * h -
							g * f * h +
							g * u * m -
							l * y * m -
							p * u * x +
							l * f * x,
						b =
							v * f * h -
							d * y * h -
							v * u * m +
							c * y * m +
							d * u * x -
							c * f * x,
						w =
							d * g * h -
							v * p * h +
							v * l * m -
							c * g * m -
							d * l * x +
							c * p * x,
						M =
							v * p * u -
							d * g * u -
							v * l * f +
							c * g * f +
							d * l * y -
							c * p * y,
						S = i * _ + a * b + o * w + s * M;
					if (0 === S)
						return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
					var T = 1 / S;
					return (
						(n[0] = _ * T),
						(n[1] =
							(g * f * s -
								p * y * s -
								g * o * m +
								a * y * m +
								p * o * x -
								a * f * x) *
							T),
						(n[2] =
							(l * y * s -
								g * u * s +
								g * o * h -
								a * y * h -
								l * o * x +
								a * u * x) *
							T),
						(n[3] =
							(p * u * s -
								l * f * s -
								p * o * h +
								a * f * h +
								l * o * m -
								a * u * m) *
							T),
						(n[4] = b * T),
						(n[5] =
							(d * y * s -
								v * f * s +
								v * o * m -
								i * y * m -
								d * o * x +
								i * f * x) *
							T),
						(n[6] =
							(v * u * s -
								c * y * s -
								v * o * h +
								i * y * h +
								c * o * x -
								i * u * x) *
							T),
						(n[7] =
							(c * f * s -
								d * u * s +
								d * o * h -
								i * f * h -
								c * o * m +
								i * u * m) *
							T),
						(n[8] = w * T),
						(n[9] =
							(v * p * s -
								d * g * s -
								v * a * m +
								i * g * m +
								d * a * x -
								i * p * x) *
							T),
						(n[10] =
							(c * g * s -
								v * l * s +
								v * a * h -
								i * g * h -
								c * a * x +
								i * l * x) *
							T),
						(n[11] =
							(d * l * s -
								c * p * s -
								d * a * h +
								i * p * h +
								c * a * m -
								i * l * m) *
							T),
						(n[12] = M * T),
						(n[13] =
							(d * g * o -
								v * p * o +
								v * a * f -
								i * g * f -
								d * a * y +
								i * p * y) *
							T),
						(n[14] =
							(v * l * o -
								c * g * o -
								v * a * u +
								i * g * u +
								c * a * y -
								i * l * y) *
							T),
						(n[15] =
							(c * p * o -
								d * l * o +
								d * a * u -
								i * p * u -
								c * a * f +
								i * l * f) *
							T),
						this
					);
				}),
				(e.scale = function (t) {
					var e = this.elements,
						n = t.x,
						r = t.y,
						i = t.z;
					return (
						(e[0] *= n),
						(e[4] *= r),
						(e[8] *= i),
						(e[1] *= n),
						(e[5] *= r),
						(e[9] *= i),
						(e[2] *= n),
						(e[6] *= r),
						(e[10] *= i),
						(e[3] *= n),
						(e[7] *= r),
						(e[11] *= i),
						this
					);
				}),
				(e.getMaxScaleOnAxis = function () {
					var t = this.elements,
						e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
						n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
						r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
					return Math.sqrt(Math.max(e, n, r));
				}),
				(e.makeTranslation = function (t, e, n) {
					return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
				}),
				(e.makeRotationX = function (t) {
					var e = Math.cos(t),
						n = Math.sin(t);
					return (
						this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
					);
				}),
				(e.makeRotationY = function (t) {
					var e = Math.cos(t),
						n = Math.sin(t);
					return (
						this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
					);
				}),
				(e.makeRotationZ = function (t) {
					var e = Math.cos(t),
						n = Math.sin(t);
					return (
						this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
					);
				}),
				(e.makeRotationAxis = function (t, e) {
					var n = Math.cos(e),
						r = Math.sin(e),
						i = 1 - n,
						a = t.x,
						o = t.y,
						s = t.z,
						c = i * a,
						l = i * o;
					return (
						this.set(
							c * a + n,
							c * o - r * s,
							c * s + r * o,
							0,
							c * o + r * s,
							l * o + n,
							l * s - r * a,
							0,
							c * s - r * o,
							l * s + r * a,
							i * s * s + n,
							0,
							0,
							0,
							0,
							1
						),
						this
					);
				}),
				(e.makeScale = function (t, e, n) {
					return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
				}),
				(e.makeShear = function (t, e, n) {
					return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this;
				}),
				(e.compose = function (t, e, n) {
					var r = this.elements,
						i = e._x,
						a = e._y,
						o = e._z,
						s = e._w,
						c = i + i,
						l = a + a,
						u = o + o,
						h = i * c,
						d = i * l,
						p = i * u,
						f = a * l,
						m = a * u,
						v = o * u,
						g = s * c,
						y = s * l,
						x = s * u,
						_ = n.x,
						b = n.y,
						w = n.z;
					return (
						(r[0] = (1 - (f + v)) * _),
						(r[1] = (d + x) * _),
						(r[2] = (p - y) * _),
						(r[3] = 0),
						(r[4] = (d - x) * b),
						(r[5] = (1 - (h + v)) * b),
						(r[6] = (m + g) * b),
						(r[7] = 0),
						(r[8] = (p + y) * w),
						(r[9] = (m - g) * w),
						(r[10] = (1 - (h + f)) * w),
						(r[11] = 0),
						(r[12] = t.x),
						(r[13] = t.y),
						(r[14] = t.z),
						(r[15] = 1),
						this
					);
				}),
				(e.decompose = function (t, e, n) {
					var r = this.elements,
						i = Qt.set(r[0], r[1], r[2]).length(),
						a = Qt.set(r[4], r[5], r[6]).length(),
						o = Qt.set(r[8], r[9], r[10]).length();
					this.determinant() < 0 && (i = -i),
						(t.x = r[12]),
						(t.y = r[13]),
						(t.z = r[14]),
						Kt.copy(this);
					var s = 1 / i,
						c = 1 / a,
						l = 1 / o;
					return (
						(Kt.elements[0] *= s),
						(Kt.elements[1] *= s),
						(Kt.elements[2] *= s),
						(Kt.elements[4] *= c),
						(Kt.elements[5] *= c),
						(Kt.elements[6] *= c),
						(Kt.elements[8] *= l),
						(Kt.elements[9] *= l),
						(Kt.elements[10] *= l),
						e.setFromRotationMatrix(Kt),
						(n.x = i),
						(n.y = a),
						(n.z = o),
						this
					);
				}),
				(e.makePerspective = function (t, e, n, r, i, a) {
					void 0 === a &&
						console.warn(
							'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.'
						);
					var o = this.elements,
						s = (2 * i) / (e - t),
						c = (2 * i) / (n - r),
						l = (e + t) / (e - t),
						u = (n + r) / (n - r),
						h = -(a + i) / (a - i),
						d = (-2 * a * i) / (a - i);
					return (
						(o[0] = s),
						(o[4] = 0),
						(o[8] = l),
						(o[12] = 0),
						(o[1] = 0),
						(o[5] = c),
						(o[9] = u),
						(o[13] = 0),
						(o[2] = 0),
						(o[6] = 0),
						(o[10] = h),
						(o[14] = d),
						(o[3] = 0),
						(o[7] = 0),
						(o[11] = -1),
						(o[15] = 0),
						this
					);
				}),
				(e.makeOrthographic = function (t, e, n, r, i, a) {
					var o = this.elements,
						s = 1 / (e - t),
						c = 1 / (n - r),
						l = 1 / (a - i),
						u = (e + t) * s,
						h = (n + r) * c,
						d = (a + i) * l;
					return (
						(o[0] = 2 * s),
						(o[4] = 0),
						(o[8] = 0),
						(o[12] = -u),
						(o[1] = 0),
						(o[5] = 2 * c),
						(o[9] = 0),
						(o[13] = -h),
						(o[2] = 0),
						(o[6] = 0),
						(o[10] = -2 * l),
						(o[14] = -d),
						(o[3] = 0),
						(o[7] = 0),
						(o[11] = 0),
						(o[15] = 1),
						this
					);
				}),
				(e.equals = function (t) {
					for (var e = this.elements, n = t.elements, r = 0; r < 16; r++)
						if (e[r] !== n[r]) return !1;
					return !0;
				}),
				(e.fromArray = function (t, e) {
					void 0 === e && (e = 0);
					for (var n = 0; n < 16; n++) this.elements[n] = t[n + e];
					return this;
				}),
				(e.toArray = function (t, e) {
					void 0 === t && (t = []), void 0 === e && (e = 0);
					var n = this.elements;
					return (
						(t[e] = n[0]),
						(t[e + 1] = n[1]),
						(t[e + 2] = n[2]),
						(t[e + 3] = n[3]),
						(t[e + 4] = n[4]),
						(t[e + 5] = n[5]),
						(t[e + 6] = n[6]),
						(t[e + 7] = n[7]),
						(t[e + 8] = n[8]),
						(t[e + 9] = n[9]),
						(t[e + 10] = n[10]),
						(t[e + 11] = n[11]),
						(t[e + 12] = n[12]),
						(t[e + 13] = n[13]),
						(t[e + 14] = n[14]),
						(t[e + 15] = n[15]),
						t
					);
				}),
				t
			);
		})(),
		Qt = new wt(),
		Kt = new Jt(),
		$t = new wt(0, 0, 0),
		te = new wt(1, 1, 1),
		ee = new wt(),
		ne = new wt(),
		re = new wt(),
		ie = (function () {
			function t(e, n, r, i) {
				void 0 === e && (e = 0),
					void 0 === n && (n = 0),
					void 0 === r && (r = 0),
					void 0 === i && (i = t.DefaultOrder),
					Object.defineProperty(this, 'isEuler', { value: !0 }),
					(this._x = e),
					(this._y = n),
					(this._z = r),
					(this._order = i);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e, n, r) {
					return (
						(this._x = t),
						(this._y = e),
						(this._z = n),
						(this._order = r || this._order),
						this._onChangeCallback(),
						this
					);
				}),
				(e.clone = function () {
					return new this.constructor(this._x, this._y, this._z, this._order);
				}),
				(e.copy = function (t) {
					return (
						(this._x = t._x),
						(this._y = t._y),
						(this._z = t._z),
						(this._order = t._order),
						this._onChangeCallback(),
						this
					);
				}),
				(e.setFromRotationMatrix = function (t, e, n) {
					var r = st.clamp,
						i = t.elements,
						a = i[0],
						o = i[4],
						s = i[8],
						c = i[1],
						l = i[5],
						u = i[9],
						h = i[2],
						d = i[6],
						p = i[10];
					switch ((e = e || this._order)) {
						case 'XYZ':
							(this._y = Math.asin(r(s, -1, 1))),
								Math.abs(s) < 0.9999999
									? ((this._x = Math.atan2(-u, p)),
									  (this._z = Math.atan2(-o, a)))
									: ((this._x = Math.atan2(d, l)), (this._z = 0));
							break;
						case 'YXZ':
							(this._x = Math.asin(-r(u, -1, 1))),
								Math.abs(u) < 0.9999999
									? ((this._y = Math.atan2(s, p)), (this._z = Math.atan2(c, l)))
									: ((this._y = Math.atan2(-h, a)), (this._z = 0));
							break;
						case 'ZXY':
							(this._x = Math.asin(r(d, -1, 1))),
								Math.abs(d) < 0.9999999
									? ((this._y = Math.atan2(-h, p)),
									  (this._z = Math.atan2(-o, l)))
									: ((this._y = 0), (this._z = Math.atan2(c, a)));
							break;
						case 'ZYX':
							(this._y = Math.asin(-r(h, -1, 1))),
								Math.abs(h) < 0.9999999
									? ((this._x = Math.atan2(d, p)), (this._z = Math.atan2(c, a)))
									: ((this._x = 0), (this._z = Math.atan2(-o, l)));
							break;
						case 'YZX':
							(this._z = Math.asin(r(c, -1, 1))),
								Math.abs(c) < 0.9999999
									? ((this._x = Math.atan2(-u, l)),
									  (this._y = Math.atan2(-h, a)))
									: ((this._x = 0), (this._y = Math.atan2(s, p)));
							break;
						case 'XZY':
							(this._z = Math.asin(-r(o, -1, 1))),
								Math.abs(o) < 0.9999999
									? ((this._x = Math.atan2(d, l)), (this._y = Math.atan2(s, a)))
									: ((this._x = Math.atan2(-u, p)), (this._y = 0));
							break;
						default:
							console.warn(
								'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' +
									e
							);
					}
					return (this._order = e), !1 !== n && this._onChangeCallback(), this;
				}),
				(e.setFromQuaternion = function (t, e, n) {
					return (
						ae.makeRotationFromQuaternion(t),
						this.setFromRotationMatrix(ae, e, n)
					);
				}),
				(e.setFromVector3 = function (t, e) {
					return this.set(t.x, t.y, t.z, e || this._order);
				}),
				(e.reorder = function (t) {
					return oe.setFromEuler(this), this.setFromQuaternion(oe, t);
				}),
				(e.equals = function (t) {
					return (
						t._x === this._x &&
						t._y === this._y &&
						t._z === this._z &&
						t._order === this._order
					);
				}),
				(e.fromArray = function (t) {
					return (
						(this._x = t[0]),
						(this._y = t[1]),
						(this._z = t[2]),
						void 0 !== t[3] && (this._order = t[3]),
						this._onChangeCallback(),
						this
					);
				}),
				(e.toArray = function (t, e) {
					return (
						void 0 === t && (t = []),
						void 0 === e && (e = 0),
						(t[e] = this._x),
						(t[e + 1] = this._y),
						(t[e + 2] = this._z),
						(t[e + 3] = this._order),
						t
					);
				}),
				(e.toVector3 = function (t) {
					return t
						? t.set(this._x, this._y, this._z)
						: new wt(this._x, this._y, this._z);
				}),
				(e._onChange = function (t) {
					return (this._onChangeCallback = t), this;
				}),
				(e._onChangeCallback = function () {}),
				lt(t, [
					{
						key: 'x',
						get: function () {
							return this._x;
						},
						set: function (t) {
							(this._x = t), this._onChangeCallback();
						},
					},
					{
						key: 'y',
						get: function () {
							return this._y;
						},
						set: function (t) {
							(this._y = t), this._onChangeCallback();
						},
					},
					{
						key: 'z',
						get: function () {
							return this._z;
						},
						set: function (t) {
							(this._z = t), this._onChangeCallback();
						},
					},
					{
						key: 'order',
						get: function () {
							return this._order;
						},
						set: function (t) {
							(this._order = t), this._onChangeCallback();
						},
					},
				]),
				t
			);
		})();
	(ie.DefaultOrder = 'XYZ'),
		(ie.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX']);
	var ae = new Jt(),
		oe = new bt(),
		se = (function () {
			function t() {
				this.mask = 1;
			}
			var e = t.prototype;
			return (
				(e.set = function (t) {
					this.mask = (1 << t) | 0;
				}),
				(e.enable = function (t) {
					this.mask |= (1 << t) | 0;
				}),
				(e.enableAll = function () {
					this.mask = -1;
				}),
				(e.toggle = function (t) {
					this.mask ^= (1 << t) | 0;
				}),
				(e.disable = function (t) {
					this.mask &= ~((1 << t) | 0);
				}),
				(e.disableAll = function () {
					this.mask = 0;
				}),
				(e.test = function (t) {
					return 0 != (this.mask & t.mask);
				}),
				t
			);
		})(),
		ce = 0,
		le = new wt(),
		ue = new bt(),
		he = new Jt(),
		de = new wt(),
		pe = new wt(),
		fe = new wt(),
		me = new bt(),
		ve = new wt(1, 0, 0),
		ge = new wt(0, 1, 0),
		ye = new wt(0, 0, 1),
		xe = { type: 'added' },
		_e = { type: 'removed' };
	function be() {
		Object.defineProperty(this, 'id', { value: ce++ }),
			(this.uuid = st.generateUUID()),
			(this.name = ''),
			(this.type = 'Object3D'),
			(this.parent = null),
			(this.children = []),
			(this.up = be.DefaultUp.clone());
		var t = new wt(),
			e = new ie(),
			n = new bt(),
			r = new wt(1, 1, 1);
		e._onChange(function () {
			n.setFromEuler(e, !1);
		}),
			n._onChange(function () {
				e.setFromQuaternion(n, void 0, !1);
			}),
			Object.defineProperties(this, {
				position: { configurable: !0, enumerable: !0, value: t },
				rotation: { configurable: !0, enumerable: !0, value: e },
				quaternion: { configurable: !0, enumerable: !0, value: n },
				scale: { configurable: !0, enumerable: !0, value: r },
				modelViewMatrix: { value: new Jt() },
				normalMatrix: { value: new ft() },
			}),
			(this.matrix = new Jt()),
			(this.matrixWorld = new Jt()),
			(this.matrixAutoUpdate = be.DefaultMatrixAutoUpdate),
			(this.matrixWorldNeedsUpdate = !1),
			(this.layers = new se()),
			(this.visible = !0),
			(this.castShadow = !1),
			(this.receiveShadow = !1),
			(this.frustumCulled = !0),
			(this.renderOrder = 0),
			(this.userData = {});
	}
	(be.DefaultUp = new wt(0, 1, 0)),
		(be.DefaultMatrixAutoUpdate = !0),
		(be.prototype = Object.assign(Object.create(rt.prototype), {
			constructor: be,
			isObject3D: !0,
			onBeforeRender: function () {},
			onAfterRender: function () {},
			applyMatrix4: function (t) {
				this.matrixAutoUpdate && this.updateMatrix(),
					this.matrix.premultiply(t),
					this.matrix.decompose(this.position, this.quaternion, this.scale);
			},
			applyQuaternion: function (t) {
				return this.quaternion.premultiply(t), this;
			},
			setRotationFromAxisAngle: function (t, e) {
				this.quaternion.setFromAxisAngle(t, e);
			},
			setRotationFromEuler: function (t) {
				this.quaternion.setFromEuler(t, !0);
			},
			setRotationFromMatrix: function (t) {
				this.quaternion.setFromRotationMatrix(t);
			},
			setRotationFromQuaternion: function (t) {
				this.quaternion.copy(t);
			},
			rotateOnAxis: function (t, e) {
				return ue.setFromAxisAngle(t, e), this.quaternion.multiply(ue), this;
			},
			rotateOnWorldAxis: function (t, e) {
				return ue.setFromAxisAngle(t, e), this.quaternion.premultiply(ue), this;
			},
			rotateX: function (t) {
				return this.rotateOnAxis(ve, t);
			},
			rotateY: function (t) {
				return this.rotateOnAxis(ge, t);
			},
			rotateZ: function (t) {
				return this.rotateOnAxis(ye, t);
			},
			translateOnAxis: function (t, e) {
				return (
					le.copy(t).applyQuaternion(this.quaternion),
					this.position.add(le.multiplyScalar(e)),
					this
				);
			},
			translateX: function (t) {
				return this.translateOnAxis(ve, t);
			},
			translateY: function (t) {
				return this.translateOnAxis(ge, t);
			},
			translateZ: function (t) {
				return this.translateOnAxis(ye, t);
			},
			localToWorld: function (t) {
				return t.applyMatrix4(this.matrixWorld);
			},
			worldToLocal: function (t) {
				return t.applyMatrix4(he.getInverse(this.matrixWorld));
			},
			lookAt: function (t, e, n) {
				t.isVector3 ? de.copy(t) : de.set(t, e, n);
				var r = this.parent;
				this.updateWorldMatrix(!0, !1),
					pe.setFromMatrixPosition(this.matrixWorld),
					this.isCamera || this.isLight
						? he.lookAt(pe, de, this.up)
						: he.lookAt(de, pe, this.up),
					this.quaternion.setFromRotationMatrix(he),
					r &&
						(he.extractRotation(r.matrixWorld),
						ue.setFromRotationMatrix(he),
						this.quaternion.premultiply(ue.inverse()));
			},
			add: function (t) {
				if (arguments.length > 1) {
					for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
					return this;
				}
				return t === this
					? (console.error(
							"THREE.Object3D.add: object can't be added as a child of itself.",
							t
					  ),
					  this)
					: (t && t.isObject3D
							? (null !== t.parent && t.parent.remove(t),
							  (t.parent = this),
							  this.children.push(t),
							  t.dispatchEvent(xe))
							: console.error(
									'THREE.Object3D.add: object not an instance of THREE.Object3D.',
									t
							  ),
					  this);
			},
			remove: function (t) {
				if (arguments.length > 1) {
					for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
					return this;
				}
				var n = this.children.indexOf(t);
				return (
					-1 !== n &&
						((t.parent = null),
						this.children.splice(n, 1),
						t.dispatchEvent(_e)),
					this
				);
			},
			attach: function (t) {
				return (
					this.updateWorldMatrix(!0, !1),
					he.getInverse(this.matrixWorld),
					null !== t.parent &&
						(t.parent.updateWorldMatrix(!0, !1),
						he.multiply(t.parent.matrixWorld)),
					t.applyMatrix4(he),
					t.updateWorldMatrix(!1, !1),
					this.add(t),
					this
				);
			},
			getObjectById: function (t) {
				return this.getObjectByProperty('id', t);
			},
			getObjectByName: function (t) {
				return this.getObjectByProperty('name', t);
			},
			getObjectByProperty: function (t, e) {
				if (this[t] === e) return this;
				for (var n = 0, r = this.children.length; n < r; n++) {
					var i = this.children[n].getObjectByProperty(t, e);
					if (void 0 !== i) return i;
				}
			},
			getWorldPosition: function (t) {
				return (
					void 0 === t &&
						(console.warn(
							'THREE.Object3D: .getWorldPosition() target is now required'
						),
						(t = new wt())),
					this.updateWorldMatrix(!0, !1),
					t.setFromMatrixPosition(this.matrixWorld)
				);
			},
			getWorldQuaternion: function (t) {
				return (
					void 0 === t &&
						(console.warn(
							'THREE.Object3D: .getWorldQuaternion() target is now required'
						),
						(t = new bt())),
					this.updateWorldMatrix(!0, !1),
					this.matrixWorld.decompose(pe, t, fe),
					t
				);
			},
			getWorldScale: function (t) {
				return (
					void 0 === t &&
						(console.warn(
							'THREE.Object3D: .getWorldScale() target is now required'
						),
						(t = new wt())),
					this.updateWorldMatrix(!0, !1),
					this.matrixWorld.decompose(pe, me, t),
					t
				);
			},
			getWorldDirection: function (t) {
				void 0 === t &&
					(console.warn(
						'THREE.Object3D: .getWorldDirection() target is now required'
					),
					(t = new wt())),
					this.updateWorldMatrix(!0, !1);
				var e = this.matrixWorld.elements;
				return t.set(e[8], e[9], e[10]).normalize();
			},
			raycast: function () {},
			traverse: function (t) {
				t(this);
				for (var e = this.children, n = 0, r = e.length; n < r; n++)
					e[n].traverse(t);
			},
			traverseVisible: function (t) {
				if (!1 !== this.visible) {
					t(this);
					for (var e = this.children, n = 0, r = e.length; n < r; n++)
						e[n].traverseVisible(t);
				}
			},
			traverseAncestors: function (t) {
				var e = this.parent;
				null !== e && (t(e), e.traverseAncestors(t));
			},
			updateMatrix: function () {
				this.matrix.compose(this.position, this.quaternion, this.scale),
					(this.matrixWorldNeedsUpdate = !0);
			},
			updateMatrixWorld: function (t) {
				this.matrixAutoUpdate && this.updateMatrix(),
					(this.matrixWorldNeedsUpdate || t) &&
						(null === this.parent
							? this.matrixWorld.copy(this.matrix)
							: this.matrixWorld.multiplyMatrices(
									this.parent.matrixWorld,
									this.matrix
							  ),
						(this.matrixWorldNeedsUpdate = !1),
						(t = !0));
				for (var e = this.children, n = 0, r = e.length; n < r; n++)
					e[n].updateMatrixWorld(t);
			},
			updateWorldMatrix: function (t, e) {
				var n = this.parent;
				if (
					(!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
					this.matrixAutoUpdate && this.updateMatrix(),
					null === this.parent
						? this.matrixWorld.copy(this.matrix)
						: this.matrixWorld.multiplyMatrices(
								this.parent.matrixWorld,
								this.matrix
						  ),
					!0 === e)
				)
					for (var r = this.children, i = 0, a = r.length; i < a; i++)
						r[i].updateWorldMatrix(!1, !0);
			},
			toJSON: function (t) {
				var e = void 0 === t || 'string' == typeof t,
					n = {};
				e &&
					((t = {
						geometries: {},
						materials: {},
						textures: {},
						images: {},
						shapes: {},
					}),
					(n.metadata = {
						version: 4.5,
						type: 'Object',
						generator: 'Object3D.toJSON',
					}));
				var r = {};
				function i(e, n) {
					return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
				}
				if (
					((r.uuid = this.uuid),
					(r.type = this.type),
					'' !== this.name && (r.name = this.name),
					!0 === this.castShadow && (r.castShadow = !0),
					!0 === this.receiveShadow && (r.receiveShadow = !0),
					!1 === this.visible && (r.visible = !1),
					!1 === this.frustumCulled && (r.frustumCulled = !1),
					0 !== this.renderOrder && (r.renderOrder = this.renderOrder),
					'{}' !== JSON.stringify(this.userData) &&
						(r.userData = this.userData),
					(r.layers = this.layers.mask),
					(r.matrix = this.matrix.toArray()),
					!1 === this.matrixAutoUpdate && (r.matrixAutoUpdate = !1),
					this.isInstancedMesh &&
						((r.type = 'InstancedMesh'),
						(r.count = this.count),
						(r.instanceMatrix = this.instanceMatrix.toJSON())),
					this.isMesh || this.isLine || this.isPoints)
				) {
					r.geometry = i(t.geometries, this.geometry);
					var a = this.geometry.parameters;
					if (void 0 !== a && void 0 !== a.shapes) {
						var o = a.shapes;
						if (Array.isArray(o))
							for (var s = 0, c = o.length; s < c; s++) {
								var l = o[s];
								i(t.shapes, l);
							}
						else i(t.shapes, o);
					}
				}
				if (void 0 !== this.material)
					if (Array.isArray(this.material)) {
						for (var u = [], h = 0, d = this.material.length; h < d; h++)
							u.push(i(t.materials, this.material[h]));
						r.material = u;
					} else r.material = i(t.materials, this.material);
				if (this.children.length > 0) {
					r.children = [];
					for (var p = 0; p < this.children.length; p++)
						r.children.push(this.children[p].toJSON(t).object);
				}
				if (e) {
					var f = x(t.geometries),
						m = x(t.materials),
						v = x(t.textures),
						g = x(t.images),
						y = x(t.shapes);
					f.length > 0 && (n.geometries = f),
						m.length > 0 && (n.materials = m),
						v.length > 0 && (n.textures = v),
						g.length > 0 && (n.images = g),
						y.length > 0 && (n.shapes = y);
				}
				return (n.object = r), n;
				function x(t) {
					var e = [];
					for (var n in t) {
						var r = t[n];
						delete r.metadata, e.push(r);
					}
					return e;
				}
			},
			clone: function (t) {
				return new this.constructor().copy(this, t);
			},
			copy: function (t, e) {
				if (
					(void 0 === e && (e = !0),
					(this.name = t.name),
					this.up.copy(t.up),
					this.position.copy(t.position),
					(this.rotation.order = t.rotation.order),
					this.quaternion.copy(t.quaternion),
					this.scale.copy(t.scale),
					this.matrix.copy(t.matrix),
					this.matrixWorld.copy(t.matrixWorld),
					(this.matrixAutoUpdate = t.matrixAutoUpdate),
					(this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
					(this.layers.mask = t.layers.mask),
					(this.visible = t.visible),
					(this.castShadow = t.castShadow),
					(this.receiveShadow = t.receiveShadow),
					(this.frustumCulled = t.frustumCulled),
					(this.renderOrder = t.renderOrder),
					(this.userData = JSON.parse(JSON.stringify(t.userData))),
					!0 === e)
				)
					for (var n = 0; n < t.children.length; n++) {
						var r = t.children[n];
						this.add(r.clone());
					}
				return this;
			},
		}));
	var we = new wt(),
		Me = new wt(),
		Se = new ft(),
		Te = (function () {
			function t(t, e) {
				Object.defineProperty(this, 'isPlane', { value: !0 }),
					(this.normal = void 0 !== t ? t : new wt(1, 0, 0)),
					(this.constant = void 0 !== e ? e : 0);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e) {
					return this.normal.copy(t), (this.constant = e), this;
				}),
				(e.setComponents = function (t, e, n, r) {
					return this.normal.set(t, e, n), (this.constant = r), this;
				}),
				(e.setFromNormalAndCoplanarPoint = function (t, e) {
					return (
						this.normal.copy(t), (this.constant = -e.dot(this.normal)), this
					);
				}),
				(e.setFromCoplanarPoints = function (t, e, n) {
					var r = we.subVectors(n, e).cross(Me.subVectors(t, e)).normalize();
					return this.setFromNormalAndCoplanarPoint(r, t), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return this.normal.copy(t.normal), (this.constant = t.constant), this;
				}),
				(e.normalize = function () {
					var t = 1 / this.normal.length();
					return this.normal.multiplyScalar(t), (this.constant *= t), this;
				}),
				(e.negate = function () {
					return (this.constant *= -1), this.normal.negate(), this;
				}),
				(e.distanceToPoint = function (t) {
					return this.normal.dot(t) + this.constant;
				}),
				(e.distanceToSphere = function (t) {
					return this.distanceToPoint(t.center) - t.radius;
				}),
				(e.projectPoint = function (t, e) {
					return (
						void 0 === e &&
							(console.warn(
								'THREE.Plane: .projectPoint() target is now required'
							),
							(e = new wt())),
						e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
					);
				}),
				(e.intersectLine = function (t, e) {
					void 0 === e &&
						(console.warn(
							'THREE.Plane: .intersectLine() target is now required'
						),
						(e = new wt()));
					var n = t.delta(we),
						r = this.normal.dot(n);
					if (0 === r)
						return 0 === this.distanceToPoint(t.start)
							? e.copy(t.start)
							: void 0;
					var i = -(t.start.dot(this.normal) + this.constant) / r;
					return i < 0 || i > 1
						? void 0
						: e.copy(n).multiplyScalar(i).add(t.start);
				}),
				(e.intersectsLine = function (t) {
					var e = this.distanceToPoint(t.start),
						n = this.distanceToPoint(t.end);
					return (e < 0 && n > 0) || (n < 0 && e > 0);
				}),
				(e.intersectsBox = function (t) {
					return t.intersectsPlane(this);
				}),
				(e.intersectsSphere = function (t) {
					return t.intersectsPlane(this);
				}),
				(e.coplanarPoint = function (t) {
					return (
						void 0 === t &&
							(console.warn(
								'THREE.Plane: .coplanarPoint() target is now required'
							),
							(t = new wt())),
						t.copy(this.normal).multiplyScalar(-this.constant)
					);
				}),
				(e.applyMatrix4 = function (t, e) {
					var n = e || Se.getNormalMatrix(t),
						r = this.coplanarPoint(we).applyMatrix4(t),
						i = this.normal.applyMatrix3(n).normalize();
					return (this.constant = -r.dot(i)), this;
				}),
				(e.translate = function (t) {
					return (this.constant -= t.dot(this.normal)), this;
				}),
				(e.equals = function (t) {
					return t.normal.equals(this.normal) && t.constant === this.constant;
				}),
				t
			);
		})(),
		Ee = new wt(),
		Ae = new wt(),
		Le = new wt(),
		Re = new wt(),
		Ce = new wt(),
		Pe = new wt(),
		Ie = new wt(),
		De = new wt(),
		Ne = new wt(),
		Oe = new wt(),
		Be = (function () {
			function t(t, e, n) {
				(this.a = void 0 !== t ? t : new wt()),
					(this.b = void 0 !== e ? e : new wt()),
					(this.c = void 0 !== n ? n : new wt());
			}
			(t.getNormal = function (t, e, n, r) {
				void 0 === r &&
					(console.warn('THREE.Triangle: .getNormal() target is now required'),
					(r = new wt())),
					r.subVectors(n, e),
					Ee.subVectors(t, e),
					r.cross(Ee);
				var i = r.lengthSq();
				return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
			}),
				(t.getBarycoord = function (t, e, n, r, i) {
					Ee.subVectors(r, e), Ae.subVectors(n, e), Le.subVectors(t, e);
					var a = Ee.dot(Ee),
						o = Ee.dot(Ae),
						s = Ee.dot(Le),
						c = Ae.dot(Ae),
						l = Ae.dot(Le),
						u = a * c - o * o;
					if (
						(void 0 === i &&
							(console.warn(
								'THREE.Triangle: .getBarycoord() target is now required'
							),
							(i = new wt())),
						0 === u)
					)
						return i.set(-2, -1, -1);
					var h = 1 / u,
						d = (c * s - o * l) * h,
						p = (a * l - o * s) * h;
					return i.set(1 - d - p, p, d);
				}),
				(t.containsPoint = function (t, e, n, r) {
					return (
						this.getBarycoord(t, e, n, r, Re),
						Re.x >= 0 && Re.y >= 0 && Re.x + Re.y <= 1
					);
				}),
				(t.getUV = function (t, e, n, r, i, a, o, s) {
					return (
						this.getBarycoord(t, e, n, r, Re),
						s.set(0, 0),
						s.addScaledVector(i, Re.x),
						s.addScaledVector(a, Re.y),
						s.addScaledVector(o, Re.z),
						s
					);
				}),
				(t.isFrontFacing = function (t, e, n, r) {
					return (
						Ee.subVectors(n, e), Ae.subVectors(t, e), Ee.cross(Ae).dot(r) < 0
					);
				});
			var e = t.prototype;
			return (
				(e.set = function (t, e, n) {
					return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
				}),
				(e.setFromPointsAndIndices = function (t, e, n, r) {
					return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
				}),
				(e.getArea = function () {
					return (
						Ee.subVectors(this.c, this.b),
						Ae.subVectors(this.a, this.b),
						0.5 * Ee.cross(Ae).length()
					);
				}),
				(e.getMidpoint = function (t) {
					return (
						void 0 === t &&
							(console.warn(
								'THREE.Triangle: .getMidpoint() target is now required'
							),
							(t = new wt())),
						t
							.addVectors(this.a, this.b)
							.add(this.c)
							.multiplyScalar(1 / 3)
					);
				}),
				(e.getNormal = function (e) {
					return t.getNormal(this.a, this.b, this.c, e);
				}),
				(e.getPlane = function (t) {
					return (
						void 0 === t &&
							(console.warn(
								'THREE.Triangle: .getPlane() target is now required'
							),
							(t = new Te())),
						t.setFromCoplanarPoints(this.a, this.b, this.c)
					);
				}),
				(e.getBarycoord = function (e, n) {
					return t.getBarycoord(e, this.a, this.b, this.c, n);
				}),
				(e.getUV = function (e, n, r, i, a) {
					return t.getUV(e, this.a, this.b, this.c, n, r, i, a);
				}),
				(e.containsPoint = function (e) {
					return t.containsPoint(e, this.a, this.b, this.c);
				}),
				(e.isFrontFacing = function (e) {
					return t.isFrontFacing(this.a, this.b, this.c, e);
				}),
				(e.intersectsBox = function (t) {
					return t.intersectsTriangle(this);
				}),
				(e.closestPointToPoint = function (t, e) {
					void 0 === e &&
						(console.warn(
							'THREE.Triangle: .closestPointToPoint() target is now required'
						),
						(e = new wt()));
					var n,
						r,
						i = this.a,
						a = this.b,
						o = this.c;
					Ce.subVectors(a, i), Pe.subVectors(o, i), De.subVectors(t, i);
					var s = Ce.dot(De),
						c = Pe.dot(De);
					if (s <= 0 && c <= 0) return e.copy(i);
					Ne.subVectors(t, a);
					var l = Ce.dot(Ne),
						u = Pe.dot(Ne);
					if (l >= 0 && u <= l) return e.copy(a);
					var h = s * u - l * c;
					if (h <= 0 && s >= 0 && l <= 0)
						return (n = s / (s - l)), e.copy(i).addScaledVector(Ce, n);
					Oe.subVectors(t, o);
					var d = Ce.dot(Oe),
						p = Pe.dot(Oe);
					if (p >= 0 && d <= p) return e.copy(o);
					var f = d * c - s * p;
					if (f <= 0 && c >= 0 && p <= 0)
						return (r = c / (c - p)), e.copy(i).addScaledVector(Pe, r);
					var m = l * p - d * u;
					if (m <= 0 && u - l >= 0 && d - p >= 0)
						return (
							Ie.subVectors(o, a),
							(r = (u - l) / (u - l + (d - p))),
							e.copy(a).addScaledVector(Ie, r)
						);
					var v = 1 / (m + f + h);
					return (
						(n = f * v),
						(r = h * v),
						e.copy(i).addScaledVector(Ce, n).addScaledVector(Pe, r)
					);
				}),
				(e.equals = function (t) {
					return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
				}),
				t
			);
		})(),
		ze = {
			aliceblue: 15792383,
			antiquewhite: 16444375,
			aqua: 65535,
			aquamarine: 8388564,
			azure: 15794175,
			beige: 16119260,
			bisque: 16770244,
			black: 0,
			blanchedalmond: 16772045,
			blue: 255,
			blueviolet: 9055202,
			brown: 10824234,
			burlywood: 14596231,
			cadetblue: 6266528,
			chartreuse: 8388352,
			chocolate: 13789470,
			coral: 16744272,
			cornflowerblue: 6591981,
			cornsilk: 16775388,
			crimson: 14423100,
			cyan: 65535,
			darkblue: 139,
			darkcyan: 35723,
			darkgoldenrod: 12092939,
			darkgray: 11119017,
			darkgreen: 25600,
			darkgrey: 11119017,
			darkkhaki: 12433259,
			darkmagenta: 9109643,
			darkolivegreen: 5597999,
			darkorange: 16747520,
			darkorchid: 10040012,
			darkred: 9109504,
			darksalmon: 15308410,
			darkseagreen: 9419919,
			darkslateblue: 4734347,
			darkslategray: 3100495,
			darkslategrey: 3100495,
			darkturquoise: 52945,
			darkviolet: 9699539,
			deeppink: 16716947,
			deepskyblue: 49151,
			dimgray: 6908265,
			dimgrey: 6908265,
			dodgerblue: 2003199,
			firebrick: 11674146,
			floralwhite: 16775920,
			forestgreen: 2263842,
			fuchsia: 16711935,
			gainsboro: 14474460,
			ghostwhite: 16316671,
			gold: 16766720,
			goldenrod: 14329120,
			gray: 8421504,
			green: 32768,
			greenyellow: 11403055,
			grey: 8421504,
			honeydew: 15794160,
			hotpink: 16738740,
			indianred: 13458524,
			indigo: 4915330,
			ivory: 16777200,
			khaki: 15787660,
			lavender: 15132410,
			lavenderblush: 16773365,
			lawngreen: 8190976,
			lemonchiffon: 16775885,
			lightblue: 11393254,
			lightcoral: 15761536,
			lightcyan: 14745599,
			lightgoldenrodyellow: 16448210,
			lightgray: 13882323,
			lightgreen: 9498256,
			lightgrey: 13882323,
			lightpink: 16758465,
			lightsalmon: 16752762,
			lightseagreen: 2142890,
			lightskyblue: 8900346,
			lightslategray: 7833753,
			lightslategrey: 7833753,
			lightsteelblue: 11584734,
			lightyellow: 16777184,
			lime: 65280,
			limegreen: 3329330,
			linen: 16445670,
			magenta: 16711935,
			maroon: 8388608,
			mediumaquamarine: 6737322,
			mediumblue: 205,
			mediumorchid: 12211667,
			mediumpurple: 9662683,
			mediumseagreen: 3978097,
			mediumslateblue: 8087790,
			mediumspringgreen: 64154,
			mediumturquoise: 4772300,
			mediumvioletred: 13047173,
			midnightblue: 1644912,
			mintcream: 16121850,
			mistyrose: 16770273,
			moccasin: 16770229,
			navajowhite: 16768685,
			navy: 128,
			oldlace: 16643558,
			olive: 8421376,
			olivedrab: 7048739,
			orange: 16753920,
			orangered: 16729344,
			orchid: 14315734,
			palegoldenrod: 15657130,
			palegreen: 10025880,
			paleturquoise: 11529966,
			palevioletred: 14381203,
			papayawhip: 16773077,
			peachpuff: 16767673,
			peru: 13468991,
			pink: 16761035,
			plum: 14524637,
			powderblue: 11591910,
			purple: 8388736,
			rebeccapurple: 6697881,
			red: 16711680,
			rosybrown: 12357519,
			royalblue: 4286945,
			saddlebrown: 9127187,
			salmon: 16416882,
			sandybrown: 16032864,
			seagreen: 3050327,
			seashell: 16774638,
			sienna: 10506797,
			silver: 12632256,
			skyblue: 8900331,
			slateblue: 6970061,
			slategray: 7372944,
			slategrey: 7372944,
			snow: 16775930,
			springgreen: 65407,
			steelblue: 4620980,
			tan: 13808780,
			teal: 32896,
			thistle: 14204888,
			tomato: 16737095,
			turquoise: 4251856,
			violet: 15631086,
			wheat: 16113331,
			white: 16777215,
			whitesmoke: 16119285,
			yellow: 16776960,
			yellowgreen: 10145074,
		},
		Ge = { h: 0, s: 0, l: 0 },
		Fe = { h: 0, s: 0, l: 0 };
	function Ue(t, e, n) {
		return (
			n < 0 && (n += 1),
			n > 1 && (n -= 1),
			n < 1 / 6
				? t + 6 * (e - t) * n
				: n < 0.5
				? e
				: n < 2 / 3
				? t + 6 * (e - t) * (2 / 3 - n)
				: t
		);
	}
	function He(t) {
		return t < 0.04045
			? 0.0773993808 * t
			: Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
	}
	function ke(t) {
		return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
	}
	var Ve = (function () {
		function t(t, e, n) {
			return (
				Object.defineProperty(this, 'isColor', { value: !0 }),
				void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
			);
		}
		var e = t.prototype;
		return (
			(e.set = function (t) {
				return (
					t && t.isColor
						? this.copy(t)
						: 'number' == typeof t
						? this.setHex(t)
						: 'string' == typeof t && this.setStyle(t),
					this
				);
			}),
			(e.setScalar = function (t) {
				return (this.r = t), (this.g = t), (this.b = t), this;
			}),
			(e.setHex = function (t) {
				return (
					(t = Math.floor(t)),
					(this.r = ((t >> 16) & 255) / 255),
					(this.g = ((t >> 8) & 255) / 255),
					(this.b = (255 & t) / 255),
					this
				);
			}),
			(e.setRGB = function (t, e, n) {
				return (this.r = t), (this.g = e), (this.b = n), this;
			}),
			(e.setHSL = function (t, e, n) {
				if (
					((t = st.euclideanModulo(t, 1)),
					(e = st.clamp(e, 0, 1)),
					(n = st.clamp(n, 0, 1)),
					0 === e)
				)
					this.r = this.g = this.b = n;
				else {
					var r = n <= 0.5 ? n * (1 + e) : n + e - n * e,
						i = 2 * n - r;
					(this.r = Ue(i, r, t + 1 / 3)),
						(this.g = Ue(i, r, t)),
						(this.b = Ue(i, r, t - 1 / 3));
				}
				return this;
			}),
			(e.setStyle = function (t) {
				function e(e) {
					void 0 !== e &&
						parseFloat(e) < 1 &&
						console.warn(
							'THREE.Color: Alpha component of ' + t + ' will be ignored.'
						);
				}
				var n;
				if ((n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t))) {
					var r,
						i = n[1],
						a = n[2];
					switch (i) {
						case 'rgb':
						case 'rgba':
							if (
								(r =
									/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
										a
									))
							)
								return (
									(this.r = Math.min(255, parseInt(r[1], 10)) / 255),
									(this.g = Math.min(255, parseInt(r[2], 10)) / 255),
									(this.b = Math.min(255, parseInt(r[3], 10)) / 255),
									e(r[5]),
									this
								);
							if (
								(r =
									/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
										a
									))
							)
								return (
									(this.r = Math.min(100, parseInt(r[1], 10)) / 100),
									(this.g = Math.min(100, parseInt(r[2], 10)) / 100),
									(this.b = Math.min(100, parseInt(r[3], 10)) / 100),
									e(r[5]),
									this
								);
							break;
						case 'hsl':
						case 'hsla':
							if (
								(r =
									/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(
										a
									))
							) {
								var o = parseFloat(r[1]) / 360,
									s = parseInt(r[2], 10) / 100,
									c = parseInt(r[3], 10) / 100;
								return e(r[5]), this.setHSL(o, s, c);
							}
					}
				} else if ((n = /^\#([A-Fa-f0-9]+)$/.exec(t))) {
					var l = n[1],
						u = l.length;
					if (3 === u)
						return (
							(this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255),
							(this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255),
							(this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255),
							this
						);
					if (6 === u)
						return (
							(this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255),
							(this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255),
							(this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255),
							this
						);
				}
				return t && t.length > 0 ? this.setColorName(t) : this;
			}),
			(e.setColorName = function (t) {
				var e = ze[t];
				return (
					void 0 !== e
						? this.setHex(e)
						: console.warn('THREE.Color: Unknown color ' + t),
					this
				);
			}),
			(e.clone = function () {
				return new this.constructor(this.r, this.g, this.b);
			}),
			(e.copy = function (t) {
				return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
			}),
			(e.copyGammaToLinear = function (t, e) {
				return (
					void 0 === e && (e = 2),
					(this.r = Math.pow(t.r, e)),
					(this.g = Math.pow(t.g, e)),
					(this.b = Math.pow(t.b, e)),
					this
				);
			}),
			(e.copyLinearToGamma = function (t, e) {
				void 0 === e && (e = 2);
				var n = e > 0 ? 1 / e : 1;
				return (
					(this.r = Math.pow(t.r, n)),
					(this.g = Math.pow(t.g, n)),
					(this.b = Math.pow(t.b, n)),
					this
				);
			}),
			(e.convertGammaToLinear = function (t) {
				return this.copyGammaToLinear(this, t), this;
			}),
			(e.convertLinearToGamma = function (t) {
				return this.copyLinearToGamma(this, t), this;
			}),
			(e.copySRGBToLinear = function (t) {
				return (this.r = He(t.r)), (this.g = He(t.g)), (this.b = He(t.b)), this;
			}),
			(e.copyLinearToSRGB = function (t) {
				return (this.r = ke(t.r)), (this.g = ke(t.g)), (this.b = ke(t.b)), this;
			}),
			(e.convertSRGBToLinear = function () {
				return this.copySRGBToLinear(this), this;
			}),
			(e.convertLinearToSRGB = function () {
				return this.copyLinearToSRGB(this), this;
			}),
			(e.getHex = function () {
				return (
					((255 * this.r) << 16) ^ ((255 * this.g) << 8) ^ ((255 * this.b) << 0)
				);
			}),
			(e.getHexString = function () {
				return ('000000' + this.getHex().toString(16)).slice(-6);
			}),
			(e.getHSL = function (t) {
				void 0 === t &&
					(console.warn('THREE.Color: .getHSL() target is now required'),
					(t = { h: 0, s: 0, l: 0 }));
				var e,
					n,
					r = this.r,
					i = this.g,
					a = this.b,
					o = Math.max(r, i, a),
					s = Math.min(r, i, a),
					c = (s + o) / 2;
				if (s === o) (e = 0), (n = 0);
				else {
					var l = o - s;
					switch (((n = c <= 0.5 ? l / (o + s) : l / (2 - o - s)), o)) {
						case r:
							e = (i - a) / l + (i < a ? 6 : 0);
							break;
						case i:
							e = (a - r) / l + 2;
							break;
						case a:
							e = (r - i) / l + 4;
					}
					e /= 6;
				}
				return (t.h = e), (t.s = n), (t.l = c), t;
			}),
			(e.getStyle = function () {
				return (
					'rgb(' +
					((255 * this.r) | 0) +
					',' +
					((255 * this.g) | 0) +
					',' +
					((255 * this.b) | 0) +
					')'
				);
			}),
			(e.offsetHSL = function (t, e, n) {
				return (
					this.getHSL(Ge),
					(Ge.h += t),
					(Ge.s += e),
					(Ge.l += n),
					this.setHSL(Ge.h, Ge.s, Ge.l),
					this
				);
			}),
			(e.add = function (t) {
				return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
			}),
			(e.addColors = function (t, e) {
				return (
					(this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
				);
			}),
			(e.addScalar = function (t) {
				return (this.r += t), (this.g += t), (this.b += t), this;
			}),
			(e.sub = function (t) {
				return (
					(this.r = Math.max(0, this.r - t.r)),
					(this.g = Math.max(0, this.g - t.g)),
					(this.b = Math.max(0, this.b - t.b)),
					this
				);
			}),
			(e.multiply = function (t) {
				return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
			}),
			(e.multiplyScalar = function (t) {
				return (this.r *= t), (this.g *= t), (this.b *= t), this;
			}),
			(e.lerp = function (t, e) {
				return (
					(this.r += (t.r - this.r) * e),
					(this.g += (t.g - this.g) * e),
					(this.b += (t.b - this.b) * e),
					this
				);
			}),
			(e.lerpHSL = function (t, e) {
				this.getHSL(Ge), t.getHSL(Fe);
				var n = st.lerp(Ge.h, Fe.h, e),
					r = st.lerp(Ge.s, Fe.s, e),
					i = st.lerp(Ge.l, Fe.l, e);
				return this.setHSL(n, r, i), this;
			}),
			(e.equals = function (t) {
				return t.r === this.r && t.g === this.g && t.b === this.b;
			}),
			(e.fromArray = function (t, e) {
				return (
					void 0 === e && (e = 0),
					(this.r = t[e]),
					(this.g = t[e + 1]),
					(this.b = t[e + 2]),
					this
				);
			}),
			(e.toArray = function (t, e) {
				return (
					void 0 === t && (t = []),
					void 0 === e && (e = 0),
					(t[e] = this.r),
					(t[e + 1] = this.g),
					(t[e + 2] = this.b),
					t
				);
			}),
			(e.fromBufferAttribute = function (t, e) {
				return (
					(this.r = t.getX(e)),
					(this.g = t.getY(e)),
					(this.b = t.getZ(e)),
					!0 === t.normalized &&
						((this.r /= 255), (this.g /= 255), (this.b /= 255)),
					this
				);
			}),
			(e.toJSON = function () {
				return this.getHex();
			}),
			t
		);
	})();
	(Ve.NAMES = ze),
		(Ve.prototype.r = 1),
		(Ve.prototype.g = 1),
		(Ve.prototype.b = 1);
	var We = (function () {
			function t(t, e, n, r, i, a) {
				(this.a = t),
					(this.b = e),
					(this.c = n),
					(this.normal = r && r.isVector3 ? r : new wt()),
					(this.vertexNormals = Array.isArray(r) ? r : []),
					(this.color = i && i.isColor ? i : new Ve()),
					(this.vertexColors = Array.isArray(i) ? i : []),
					(this.materialIndex = void 0 !== a ? a : 0);
			}
			var e = t.prototype;
			return (
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					(this.a = t.a),
						(this.b = t.b),
						(this.c = t.c),
						this.normal.copy(t.normal),
						this.color.copy(t.color),
						(this.materialIndex = t.materialIndex);
					for (var e = 0, n = t.vertexNormals.length; e < n; e++)
						this.vertexNormals[e] = t.vertexNormals[e].clone();
					for (var r = 0, i = t.vertexColors.length; r < i; r++)
						this.vertexColors[r] = t.vertexColors[r].clone();
					return this;
				}),
				t
			);
		})(),
		je = 0;
	function qe() {
		Object.defineProperty(this, 'id', { value: je++ }),
			(this.uuid = st.generateUUID()),
			(this.name = ''),
			(this.type = 'Material'),
			(this.fog = !0),
			(this.blending = 1),
			(this.side = 0),
			(this.flatShading = !1),
			(this.vertexColors = !1),
			(this.opacity = 1),
			(this.transparent = !1),
			(this.blendSrc = 204),
			(this.blendDst = 205),
			(this.blendEquation = e),
			(this.blendSrcAlpha = null),
			(this.blendDstAlpha = null),
			(this.blendEquationAlpha = null),
			(this.depthFunc = 3),
			(this.depthTest = !0),
			(this.depthWrite = !0),
			(this.stencilWriteMask = 255),
			(this.stencilFunc = 519),
			(this.stencilRef = 0),
			(this.stencilFuncMask = 255),
			(this.stencilFail = $),
			(this.stencilZFail = $),
			(this.stencilZPass = $),
			(this.stencilWrite = !1),
			(this.clippingPlanes = null),
			(this.clipIntersection = !1),
			(this.clipShadows = !1),
			(this.shadowSide = null),
			(this.colorWrite = !0),
			(this.precision = null),
			(this.polygonOffset = !1),
			(this.polygonOffsetFactor = 0),
			(this.polygonOffsetUnits = 0),
			(this.dithering = !1),
			(this.alphaTest = 0),
			(this.premultipliedAlpha = !1),
			(this.visible = !0),
			(this.toneMapped = !0),
			(this.userData = {}),
			(this.version = 0);
	}
	function Xe(t) {
		qe.call(this),
			(this.type = 'MeshBasicMaterial'),
			(this.color = new Ve(16777215)),
			(this.map = null),
			(this.lightMap = null),
			(this.lightMapIntensity = 1),
			(this.aoMap = null),
			(this.aoMapIntensity = 1),
			(this.specularMap = null),
			(this.alphaMap = null),
			(this.envMap = null),
			(this.combine = 0),
			(this.reflectivity = 1),
			(this.refractionRatio = 0.98),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.wireframeLinecap = 'round'),
			(this.wireframeLinejoin = 'round'),
			(this.skinning = !1),
			(this.morphTargets = !1),
			this.setValues(t);
	}
	(qe.prototype = Object.assign(Object.create(rt.prototype), {
		constructor: qe,
		isMaterial: !0,
		onBeforeCompile: function () {},
		customProgramCacheKey: function () {
			return this.onBeforeCompile.toString();
		},
		setValues: function (t) {
			if (void 0 !== t)
				for (var e in t) {
					var n = t[e];
					if (void 0 !== n)
						if ('shading' !== e) {
							var r = this[e];
							void 0 !== r
								? r && r.isColor
									? r.set(n)
									: r && r.isVector3 && n && n.isVector3
									? r.copy(n)
									: (this[e] = n)
								: console.warn(
										'THREE.' +
											this.type +
											": '" +
											e +
											"' is not a property of this material."
								  );
						} else
							console.warn(
								'THREE.' +
									this.type +
									': .shading has been removed. Use the boolean .flatShading instead.'
							),
								(this.flatShading = 1 === n);
					else
						console.warn("THREE.Material: '" + e + "' parameter is undefined.");
				}
		},
		toJSON: function (t) {
			var e = void 0 === t || 'string' == typeof t;
			e && (t = { textures: {}, images: {} });
			var n = {
				metadata: {
					version: 4.5,
					type: 'Material',
					generator: 'Material.toJSON',
				},
			};
			function r(t) {
				var e = [];
				for (var n in t) {
					var r = t[n];
					delete r.metadata, e.push(r);
				}
				return e;
			}
			if (
				((n.uuid = this.uuid),
				(n.type = this.type),
				'' !== this.name && (n.name = this.name),
				this.color && this.color.isColor && (n.color = this.color.getHex()),
				void 0 !== this.roughness && (n.roughness = this.roughness),
				void 0 !== this.metalness && (n.metalness = this.metalness),
				this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
				this.emissive &&
					this.emissive.isColor &&
					(n.emissive = this.emissive.getHex()),
				this.emissiveIntensity &&
					1 !== this.emissiveIntensity &&
					(n.emissiveIntensity = this.emissiveIntensity),
				this.specular &&
					this.specular.isColor &&
					(n.specular = this.specular.getHex()),
				void 0 !== this.shininess && (n.shininess = this.shininess),
				void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
				void 0 !== this.clearcoatRoughness &&
					(n.clearcoatRoughness = this.clearcoatRoughness),
				this.clearcoatMap &&
					this.clearcoatMap.isTexture &&
					(n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
				this.clearcoatRoughnessMap &&
					this.clearcoatRoughnessMap.isTexture &&
					(n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
				this.clearcoatNormalMap &&
					this.clearcoatNormalMap.isTexture &&
					((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
					(n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
				this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
				this.matcap &&
					this.matcap.isTexture &&
					(n.matcap = this.matcap.toJSON(t).uuid),
				this.alphaMap &&
					this.alphaMap.isTexture &&
					(n.alphaMap = this.alphaMap.toJSON(t).uuid),
				this.lightMap &&
					this.lightMap.isTexture &&
					(n.lightMap = this.lightMap.toJSON(t).uuid),
				this.aoMap &&
					this.aoMap.isTexture &&
					((n.aoMap = this.aoMap.toJSON(t).uuid),
					(n.aoMapIntensity = this.aoMapIntensity)),
				this.bumpMap &&
					this.bumpMap.isTexture &&
					((n.bumpMap = this.bumpMap.toJSON(t).uuid),
					(n.bumpScale = this.bumpScale)),
				this.normalMap &&
					this.normalMap.isTexture &&
					((n.normalMap = this.normalMap.toJSON(t).uuid),
					(n.normalMapType = this.normalMapType),
					(n.normalScale = this.normalScale.toArray())),
				this.displacementMap &&
					this.displacementMap.isTexture &&
					((n.displacementMap = this.displacementMap.toJSON(t).uuid),
					(n.displacementScale = this.displacementScale),
					(n.displacementBias = this.displacementBias)),
				this.roughnessMap &&
					this.roughnessMap.isTexture &&
					(n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
				this.metalnessMap &&
					this.metalnessMap.isTexture &&
					(n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
				this.emissiveMap &&
					this.emissiveMap.isTexture &&
					(n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
				this.specularMap &&
					this.specularMap.isTexture &&
					(n.specularMap = this.specularMap.toJSON(t).uuid),
				this.envMap &&
					this.envMap.isTexture &&
					((n.envMap = this.envMap.toJSON(t).uuid),
					(n.reflectivity = this.reflectivity),
					(n.refractionRatio = this.refractionRatio),
					void 0 !== this.combine && (n.combine = this.combine),
					void 0 !== this.envMapIntensity &&
						(n.envMapIntensity = this.envMapIntensity)),
				this.gradientMap &&
					this.gradientMap.isTexture &&
					(n.gradientMap = this.gradientMap.toJSON(t).uuid),
				void 0 !== this.size && (n.size = this.size),
				void 0 !== this.sizeAttenuation &&
					(n.sizeAttenuation = this.sizeAttenuation),
				1 !== this.blending && (n.blending = this.blending),
				!0 === this.flatShading && (n.flatShading = this.flatShading),
				0 !== this.side && (n.side = this.side),
				this.vertexColors && (n.vertexColors = !0),
				this.opacity < 1 && (n.opacity = this.opacity),
				!0 === this.transparent && (n.transparent = this.transparent),
				(n.depthFunc = this.depthFunc),
				(n.depthTest = this.depthTest),
				(n.depthWrite = this.depthWrite),
				(n.stencilWrite = this.stencilWrite),
				(n.stencilWriteMask = this.stencilWriteMask),
				(n.stencilFunc = this.stencilFunc),
				(n.stencilRef = this.stencilRef),
				(n.stencilFuncMask = this.stencilFuncMask),
				(n.stencilFail = this.stencilFail),
				(n.stencilZFail = this.stencilZFail),
				(n.stencilZPass = this.stencilZPass),
				this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
				!0 === this.polygonOffset && (n.polygonOffset = !0),
				0 !== this.polygonOffsetFactor &&
					(n.polygonOffsetFactor = this.polygonOffsetFactor),
				0 !== this.polygonOffsetUnits &&
					(n.polygonOffsetUnits = this.polygonOffsetUnits),
				this.linewidth &&
					1 !== this.linewidth &&
					(n.linewidth = this.linewidth),
				void 0 !== this.dashSize && (n.dashSize = this.dashSize),
				void 0 !== this.gapSize && (n.gapSize = this.gapSize),
				void 0 !== this.scale && (n.scale = this.scale),
				!0 === this.dithering && (n.dithering = !0),
				this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
				!0 === this.premultipliedAlpha &&
					(n.premultipliedAlpha = this.premultipliedAlpha),
				!0 === this.wireframe && (n.wireframe = this.wireframe),
				this.wireframeLinewidth > 1 &&
					(n.wireframeLinewidth = this.wireframeLinewidth),
				'round' !== this.wireframeLinecap &&
					(n.wireframeLinecap = this.wireframeLinecap),
				'round' !== this.wireframeLinejoin &&
					(n.wireframeLinejoin = this.wireframeLinejoin),
				!0 === this.morphTargets && (n.morphTargets = !0),
				!0 === this.morphNormals && (n.morphNormals = !0),
				!0 === this.skinning && (n.skinning = !0),
				!1 === this.visible && (n.visible = !1),
				!1 === this.toneMapped && (n.toneMapped = !1),
				'{}' !== JSON.stringify(this.userData) && (n.userData = this.userData),
				e)
			) {
				var i = r(t.textures),
					a = r(t.images);
				i.length > 0 && (n.textures = i), a.length > 0 && (n.images = a);
			}
			return n;
		},
		clone: function () {
			return new this.constructor().copy(this);
		},
		copy: function (t) {
			(this.name = t.name),
				(this.fog = t.fog),
				(this.blending = t.blending),
				(this.side = t.side),
				(this.flatShading = t.flatShading),
				(this.vertexColors = t.vertexColors),
				(this.opacity = t.opacity),
				(this.transparent = t.transparent),
				(this.blendSrc = t.blendSrc),
				(this.blendDst = t.blendDst),
				(this.blendEquation = t.blendEquation),
				(this.blendSrcAlpha = t.blendSrcAlpha),
				(this.blendDstAlpha = t.blendDstAlpha),
				(this.blendEquationAlpha = t.blendEquationAlpha),
				(this.depthFunc = t.depthFunc),
				(this.depthTest = t.depthTest),
				(this.depthWrite = t.depthWrite),
				(this.stencilWriteMask = t.stencilWriteMask),
				(this.stencilFunc = t.stencilFunc),
				(this.stencilRef = t.stencilRef),
				(this.stencilFuncMask = t.stencilFuncMask),
				(this.stencilFail = t.stencilFail),
				(this.stencilZFail = t.stencilZFail),
				(this.stencilZPass = t.stencilZPass),
				(this.stencilWrite = t.stencilWrite);
			var e = t.clippingPlanes,
				n = null;
			if (null !== e) {
				var r = e.length;
				n = new Array(r);
				for (var i = 0; i !== r; ++i) n[i] = e[i].clone();
			}
			return (
				(this.clippingPlanes = n),
				(this.clipIntersection = t.clipIntersection),
				(this.clipShadows = t.clipShadows),
				(this.shadowSide = t.shadowSide),
				(this.colorWrite = t.colorWrite),
				(this.precision = t.precision),
				(this.polygonOffset = t.polygonOffset),
				(this.polygonOffsetFactor = t.polygonOffsetFactor),
				(this.polygonOffsetUnits = t.polygonOffsetUnits),
				(this.dithering = t.dithering),
				(this.alphaTest = t.alphaTest),
				(this.premultipliedAlpha = t.premultipliedAlpha),
				(this.visible = t.visible),
				(this.toneMapped = t.toneMapped),
				(this.userData = JSON.parse(JSON.stringify(t.userData))),
				this
			);
		},
		dispose: function () {
			this.dispatchEvent({ type: 'dispose' });
		},
	})),
		Object.defineProperty(qe.prototype, 'needsUpdate', {
			set: function (t) {
				!0 === t && this.version++;
			},
		}),
		(Xe.prototype = Object.create(qe.prototype)),
		(Xe.prototype.constructor = Xe),
		(Xe.prototype.isMeshBasicMaterial = !0),
		(Xe.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				(this.specularMap = t.specularMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.combine = t.combine),
				(this.reflectivity = t.reflectivity),
				(this.refractionRatio = t.refractionRatio),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				this
			);
		});
	var Ye = new wt(),
		Ze = new pt();
	function Je(t, e, n) {
		if (Array.isArray(t))
			throw new TypeError(
				'THREE.BufferAttribute: array should be a Typed Array.'
			);
		(this.name = ''),
			(this.array = t),
			(this.itemSize = e),
			(this.count = void 0 !== t ? t.length / e : 0),
			(this.normalized = !0 === n),
			(this.usage = tt),
			(this.updateRange = { offset: 0, count: -1 }),
			(this.version = 0);
	}
	function Qe(t, e, n) {
		Je.call(this, new Int8Array(t), e, n);
	}
	function Ke(t, e, n) {
		Je.call(this, new Uint8Array(t), e, n);
	}
	function $e(t, e, n) {
		Je.call(this, new Uint8ClampedArray(t), e, n);
	}
	function tn(t, e, n) {
		Je.call(this, new Int16Array(t), e, n);
	}
	function en(t, e, n) {
		Je.call(this, new Uint16Array(t), e, n);
	}
	function nn(t, e, n) {
		Je.call(this, new Int32Array(t), e, n);
	}
	function rn(t, e, n) {
		Je.call(this, new Uint32Array(t), e, n);
	}
	function an(t, e, n) {
		Je.call(this, new Float32Array(t), e, n);
	}
	function on(t, e, n) {
		Je.call(this, new Float64Array(t), e, n);
	}
	Object.defineProperty(Je.prototype, 'needsUpdate', {
		set: function (t) {
			!0 === t && this.version++;
		},
	}),
		Object.assign(Je.prototype, {
			isBufferAttribute: !0,
			onUploadCallback: function () {},
			setUsage: function (t) {
				return (this.usage = t), this;
			},
			copy: function (t) {
				return (
					(this.name = t.name),
					(this.array = new t.array.constructor(t.array)),
					(this.itemSize = t.itemSize),
					(this.count = t.count),
					(this.normalized = t.normalized),
					(this.usage = t.usage),
					this
				);
			},
			copyAt: function (t, e, n) {
				(t *= this.itemSize), (n *= e.itemSize);
				for (var r = 0, i = this.itemSize; r < i; r++)
					this.array[t + r] = e.array[n + r];
				return this;
			},
			copyArray: function (t) {
				return this.array.set(t), this;
			},
			copyColorsArray: function (t) {
				for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
					var a = t[r];
					void 0 === a &&
						(console.warn(
							'THREE.BufferAttribute.copyColorsArray(): color is undefined',
							r
						),
						(a = new Ve())),
						(e[n++] = a.r),
						(e[n++] = a.g),
						(e[n++] = a.b);
				}
				return this;
			},
			copyVector2sArray: function (t) {
				for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
					var a = t[r];
					void 0 === a &&
						(console.warn(
							'THREE.BufferAttribute.copyVector2sArray(): vector is undefined',
							r
						),
						(a = new pt())),
						(e[n++] = a.x),
						(e[n++] = a.y);
				}
				return this;
			},
			copyVector3sArray: function (t) {
				for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
					var a = t[r];
					void 0 === a &&
						(console.warn(
							'THREE.BufferAttribute.copyVector3sArray(): vector is undefined',
							r
						),
						(a = new wt())),
						(e[n++] = a.x),
						(e[n++] = a.y),
						(e[n++] = a.z);
				}
				return this;
			},
			copyVector4sArray: function (t) {
				for (var e = this.array, n = 0, r = 0, i = t.length; r < i; r++) {
					var a = t[r];
					void 0 === a &&
						(console.warn(
							'THREE.BufferAttribute.copyVector4sArray(): vector is undefined',
							r
						),
						(a = new yt())),
						(e[n++] = a.x),
						(e[n++] = a.y),
						(e[n++] = a.z),
						(e[n++] = a.w);
				}
				return this;
			},
			applyMatrix3: function (t) {
				if (2 === this.itemSize)
					for (var e = 0, n = this.count; e < n; e++)
						Ze.fromBufferAttribute(this, e),
							Ze.applyMatrix3(t),
							this.setXY(e, Ze.x, Ze.y);
				else if (3 === this.itemSize)
					for (var r = 0, i = this.count; r < i; r++)
						Ye.fromBufferAttribute(this, r),
							Ye.applyMatrix3(t),
							this.setXYZ(r, Ye.x, Ye.y, Ye.z);
				return this;
			},
			applyMatrix4: function (t) {
				for (var e = 0, n = this.count; e < n; e++)
					(Ye.x = this.getX(e)),
						(Ye.y = this.getY(e)),
						(Ye.z = this.getZ(e)),
						Ye.applyMatrix4(t),
						this.setXYZ(e, Ye.x, Ye.y, Ye.z);
				return this;
			},
			applyNormalMatrix: function (t) {
				for (var e = 0, n = this.count; e < n; e++)
					(Ye.x = this.getX(e)),
						(Ye.y = this.getY(e)),
						(Ye.z = this.getZ(e)),
						Ye.applyNormalMatrix(t),
						this.setXYZ(e, Ye.x, Ye.y, Ye.z);
				return this;
			},
			transformDirection: function (t) {
				for (var e = 0, n = this.count; e < n; e++)
					(Ye.x = this.getX(e)),
						(Ye.y = this.getY(e)),
						(Ye.z = this.getZ(e)),
						Ye.transformDirection(t),
						this.setXYZ(e, Ye.x, Ye.y, Ye.z);
				return this;
			},
			set: function (t, e) {
				return void 0 === e && (e = 0), this.array.set(t, e), this;
			},
			getX: function (t) {
				return this.array[t * this.itemSize];
			},
			setX: function (t, e) {
				return (this.array[t * this.itemSize] = e), this;
			},
			getY: function (t) {
				return this.array[t * this.itemSize + 1];
			},
			setY: function (t, e) {
				return (this.array[t * this.itemSize + 1] = e), this;
			},
			getZ: function (t) {
				return this.array[t * this.itemSize + 2];
			},
			setZ: function (t, e) {
				return (this.array[t * this.itemSize + 2] = e), this;
			},
			getW: function (t) {
				return this.array[t * this.itemSize + 3];
			},
			setW: function (t, e) {
				return (this.array[t * this.itemSize + 3] = e), this;
			},
			setXY: function (t, e, n) {
				return (
					(t *= this.itemSize),
					(this.array[t + 0] = e),
					(this.array[t + 1] = n),
					this
				);
			},
			setXYZ: function (t, e, n, r) {
				return (
					(t *= this.itemSize),
					(this.array[t + 0] = e),
					(this.array[t + 1] = n),
					(this.array[t + 2] = r),
					this
				);
			},
			setXYZW: function (t, e, n, r, i) {
				return (
					(t *= this.itemSize),
					(this.array[t + 0] = e),
					(this.array[t + 1] = n),
					(this.array[t + 2] = r),
					(this.array[t + 3] = i),
					this
				);
			},
			onUpload: function (t) {
				return (this.onUploadCallback = t), this;
			},
			clone: function () {
				return new this.constructor(this.array, this.itemSize).copy(this);
			},
			toJSON: function () {
				return {
					itemSize: this.itemSize,
					type: this.array.constructor.name,
					array: Array.prototype.slice.call(this.array),
					normalized: this.normalized,
				};
			},
		}),
		(Qe.prototype = Object.create(Je.prototype)),
		(Qe.prototype.constructor = Qe),
		(Ke.prototype = Object.create(Je.prototype)),
		(Ke.prototype.constructor = Ke),
		($e.prototype = Object.create(Je.prototype)),
		($e.prototype.constructor = $e),
		(tn.prototype = Object.create(Je.prototype)),
		(tn.prototype.constructor = tn),
		(en.prototype = Object.create(Je.prototype)),
		(en.prototype.constructor = en),
		(nn.prototype = Object.create(Je.prototype)),
		(nn.prototype.constructor = nn),
		(rn.prototype = Object.create(Je.prototype)),
		(rn.prototype.constructor = rn),
		(an.prototype = Object.create(Je.prototype)),
		(an.prototype.constructor = an),
		(on.prototype = Object.create(Je.prototype)),
		(on.prototype.constructor = on);
	var sn = (function () {
		function t() {
			(this.vertices = []),
				(this.normals = []),
				(this.colors = []),
				(this.uvs = []),
				(this.uvs2 = []),
				(this.groups = []),
				(this.morphTargets = {}),
				(this.skinWeights = []),
				(this.skinIndices = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.verticesNeedUpdate = !1),
				(this.normalsNeedUpdate = !1),
				(this.colorsNeedUpdate = !1),
				(this.uvsNeedUpdate = !1),
				(this.groupsNeedUpdate = !1);
		}
		var e = t.prototype;
		return (
			(e.computeGroups = function (t) {
				var e,
					n,
					r = [],
					i = void 0,
					a = t.faces;
				for (n = 0; n < a.length; n++) {
					var o = a[n];
					o.materialIndex !== i &&
						((i = o.materialIndex),
						void 0 !== e && ((e.count = 3 * n - e.start), r.push(e)),
						(e = { start: 3 * n, materialIndex: i }));
				}
				void 0 !== e && ((e.count = 3 * n - e.start), r.push(e)),
					(this.groups = r);
			}),
			(e.fromGeometry = function (t) {
				var e,
					n = t.faces,
					r = t.vertices,
					i = t.faceVertexUvs,
					a = i[0] && i[0].length > 0,
					o = i[1] && i[1].length > 0,
					s = t.morphTargets,
					c = s.length;
				if (c > 0) {
					e = [];
					for (var l = 0; l < c; l++) e[l] = { name: s[l].name, data: [] };
					this.morphTargets.position = e;
				}
				var u,
					h = t.morphNormals,
					d = h.length;
				if (d > 0) {
					u = [];
					for (var p = 0; p < d; p++) u[p] = { name: h[p].name, data: [] };
					this.morphTargets.normal = u;
				}
				var f = t.skinIndices,
					m = t.skinWeights,
					v = f.length === r.length,
					g = m.length === r.length;
				r.length > 0 &&
					0 === n.length &&
					console.error(
						'THREE.DirectGeometry: Faceless geometries are not supported.'
					);
				for (var y = 0; y < n.length; y++) {
					var x = n[y];
					this.vertices.push(r[x.a], r[x.b], r[x.c]);
					var _ = x.vertexNormals;
					if (3 === _.length) this.normals.push(_[0], _[1], _[2]);
					else {
						var b = x.normal;
						this.normals.push(b, b, b);
					}
					var w = x.vertexColors;
					if (3 === w.length) this.colors.push(w[0], w[1], w[2]);
					else {
						var M = x.color;
						this.colors.push(M, M, M);
					}
					if (!0 === a) {
						var S = i[0][y];
						void 0 !== S
							? this.uvs.push(S[0], S[1], S[2])
							: (console.warn(
									'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ',
									y
							  ),
							  this.uvs.push(new pt(), new pt(), new pt()));
					}
					if (!0 === o) {
						var T = i[1][y];
						void 0 !== T
							? this.uvs2.push(T[0], T[1], T[2])
							: (console.warn(
									'THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ',
									y
							  ),
							  this.uvs2.push(new pt(), new pt(), new pt()));
					}
					for (var E = 0; E < c; E++) {
						var A = s[E].vertices;
						e[E].data.push(A[x.a], A[x.b], A[x.c]);
					}
					for (var L = 0; L < d; L++) {
						var R = h[L].vertexNormals[y];
						u[L].data.push(R.a, R.b, R.c);
					}
					v && this.skinIndices.push(f[x.a], f[x.b], f[x.c]),
						g && this.skinWeights.push(m[x.a], m[x.b], m[x.c]);
				}
				return (
					this.computeGroups(t),
					(this.verticesNeedUpdate = t.verticesNeedUpdate),
					(this.normalsNeedUpdate = t.normalsNeedUpdate),
					(this.colorsNeedUpdate = t.colorsNeedUpdate),
					(this.uvsNeedUpdate = t.uvsNeedUpdate),
					(this.groupsNeedUpdate = t.groupsNeedUpdate),
					null !== t.boundingSphere &&
						(this.boundingSphere = t.boundingSphere.clone()),
					null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
					this
				);
			}),
			t
		);
	})();
	function cn(t) {
		if (0 === t.length) return -1 / 0;
		for (var e = t[0], n = 1, r = t.length; n < r; ++n) t[n] > e && (e = t[n]);
		return e;
	}
	var ln = 1,
		un = new Jt(),
		hn = new be(),
		dn = new wt(),
		pn = new Tt(),
		fn = new Tt(),
		mn = new wt();
	function vn() {
		Object.defineProperty(this, 'id', { value: (ln += 2) }),
			(this.uuid = st.generateUUID()),
			(this.name = ''),
			(this.type = 'BufferGeometry'),
			(this.index = null),
			(this.attributes = {}),
			(this.morphAttributes = {}),
			(this.morphTargetsRelative = !1),
			(this.groups = []),
			(this.boundingBox = null),
			(this.boundingSphere = null),
			(this.drawRange = { start: 0, count: 1 / 0 }),
			(this.userData = {});
	}
	vn.prototype = Object.assign(Object.create(rt.prototype), {
		constructor: vn,
		isBufferGeometry: !0,
		getIndex: function () {
			return this.index;
		},
		setIndex: function (t) {
			return (
				Array.isArray(t)
					? (this.index = new (cn(t) > 65535 ? rn : en)(t, 1))
					: (this.index = t),
				this
			);
		},
		getAttribute: function (t) {
			return this.attributes[t];
		},
		setAttribute: function (t, e) {
			return (this.attributes[t] = e), this;
		},
		deleteAttribute: function (t) {
			return delete this.attributes[t], this;
		},
		addGroup: function (t, e, n) {
			this.groups.push({
				start: t,
				count: e,
				materialIndex: void 0 !== n ? n : 0,
			});
		},
		clearGroups: function () {
			this.groups = [];
		},
		setDrawRange: function (t, e) {
			(this.drawRange.start = t), (this.drawRange.count = e);
		},
		applyMatrix4: function (t) {
			var e = this.attributes.position;
			void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
			var n = this.attributes.normal;
			if (void 0 !== n) {
				var r = new ft().getNormalMatrix(t);
				n.applyNormalMatrix(r), (n.needsUpdate = !0);
			}
			var i = this.attributes.tangent;
			return (
				void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
				null !== this.boundingBox && this.computeBoundingBox(),
				null !== this.boundingSphere && this.computeBoundingSphere(),
				this
			);
		},
		rotateX: function (t) {
			return un.makeRotationX(t), this.applyMatrix4(un), this;
		},
		rotateY: function (t) {
			return un.makeRotationY(t), this.applyMatrix4(un), this;
		},
		rotateZ: function (t) {
			return un.makeRotationZ(t), this.applyMatrix4(un), this;
		},
		translate: function (t, e, n) {
			return un.makeTranslation(t, e, n), this.applyMatrix4(un), this;
		},
		scale: function (t, e, n) {
			return un.makeScale(t, e, n), this.applyMatrix4(un), this;
		},
		lookAt: function (t) {
			return (
				hn.lookAt(t), hn.updateMatrix(), this.applyMatrix4(hn.matrix), this
			);
		},
		center: function () {
			return (
				this.computeBoundingBox(),
				this.boundingBox.getCenter(dn).negate(),
				this.translate(dn.x, dn.y, dn.z),
				this
			);
		},
		setFromObject: function (t) {
			var e = t.geometry;
			if (t.isPoints || t.isLine) {
				var n = new an(3 * e.vertices.length, 3),
					r = new an(3 * e.colors.length, 3);
				if (
					(this.setAttribute('position', n.copyVector3sArray(e.vertices)),
					this.setAttribute('color', r.copyColorsArray(e.colors)),
					e.lineDistances && e.lineDistances.length === e.vertices.length)
				) {
					var i = new an(e.lineDistances.length, 1);
					this.setAttribute('lineDistance', i.copyArray(e.lineDistances));
				}
				null !== e.boundingSphere &&
					(this.boundingSphere = e.boundingSphere.clone()),
					null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone());
			} else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
			return this;
		},
		setFromPoints: function (t) {
			for (var e = [], n = 0, r = t.length; n < r; n++) {
				var i = t[n];
				e.push(i.x, i.y, i.z || 0);
			}
			return this.setAttribute('position', new an(e, 3)), this;
		},
		updateFromObject: function (t) {
			var e = t.geometry;
			if (t.isMesh) {
				var n = e.__directGeometry;
				if (
					(!0 === e.elementsNeedUpdate &&
						((n = void 0), (e.elementsNeedUpdate = !1)),
					void 0 === n)
				)
					return this.fromGeometry(e);
				(n.verticesNeedUpdate = e.verticesNeedUpdate),
					(n.normalsNeedUpdate = e.normalsNeedUpdate),
					(n.colorsNeedUpdate = e.colorsNeedUpdate),
					(n.uvsNeedUpdate = e.uvsNeedUpdate),
					(n.groupsNeedUpdate = e.groupsNeedUpdate),
					(e.verticesNeedUpdate = !1),
					(e.normalsNeedUpdate = !1),
					(e.colorsNeedUpdate = !1),
					(e.uvsNeedUpdate = !1),
					(e.groupsNeedUpdate = !1),
					(e = n);
			}
			if (!0 === e.verticesNeedUpdate) {
				var r = this.attributes.position;
				void 0 !== r && (r.copyVector3sArray(e.vertices), (r.needsUpdate = !0)),
					(e.verticesNeedUpdate = !1);
			}
			if (!0 === e.normalsNeedUpdate) {
				var i = this.attributes.normal;
				void 0 !== i && (i.copyVector3sArray(e.normals), (i.needsUpdate = !0)),
					(e.normalsNeedUpdate = !1);
			}
			if (!0 === e.colorsNeedUpdate) {
				var a = this.attributes.color;
				void 0 !== a && (a.copyColorsArray(e.colors), (a.needsUpdate = !0)),
					(e.colorsNeedUpdate = !1);
			}
			if (e.uvsNeedUpdate) {
				var o = this.attributes.uv;
				void 0 !== o && (o.copyVector2sArray(e.uvs), (o.needsUpdate = !0)),
					(e.uvsNeedUpdate = !1);
			}
			if (e.lineDistancesNeedUpdate) {
				var s = this.attributes.lineDistance;
				void 0 !== s && (s.copyArray(e.lineDistances), (s.needsUpdate = !0)),
					(e.lineDistancesNeedUpdate = !1);
			}
			return (
				e.groupsNeedUpdate &&
					(e.computeGroups(t.geometry),
					(this.groups = e.groups),
					(e.groupsNeedUpdate = !1)),
				this
			);
		},
		fromGeometry: function (t) {
			return (
				(t.__directGeometry = new sn().fromGeometry(t)),
				this.fromDirectGeometry(t.__directGeometry)
			);
		},
		fromDirectGeometry: function (t) {
			var e = new Float32Array(3 * t.vertices.length);
			if (
				(this.setAttribute(
					'position',
					new Je(e, 3).copyVector3sArray(t.vertices)
				),
				t.normals.length > 0)
			) {
				var n = new Float32Array(3 * t.normals.length);
				this.setAttribute('normal', new Je(n, 3).copyVector3sArray(t.normals));
			}
			if (t.colors.length > 0) {
				var r = new Float32Array(3 * t.colors.length);
				this.setAttribute('color', new Je(r, 3).copyColorsArray(t.colors));
			}
			if (t.uvs.length > 0) {
				var i = new Float32Array(2 * t.uvs.length);
				this.setAttribute('uv', new Je(i, 2).copyVector2sArray(t.uvs));
			}
			if (t.uvs2.length > 0) {
				var a = new Float32Array(2 * t.uvs2.length);
				this.setAttribute('uv2', new Je(a, 2).copyVector2sArray(t.uvs2));
			}
			for (var o in ((this.groups = t.groups), t.morphTargets)) {
				for (
					var s = [], c = t.morphTargets[o], l = 0, u = c.length;
					l < u;
					l++
				) {
					var h = c[l],
						d = new an(3 * h.data.length, 3);
					(d.name = h.name), s.push(d.copyVector3sArray(h.data));
				}
				this.morphAttributes[o] = s;
			}
			if (t.skinIndices.length > 0) {
				var p = new an(4 * t.skinIndices.length, 4);
				this.setAttribute('skinIndex', p.copyVector4sArray(t.skinIndices));
			}
			if (t.skinWeights.length > 0) {
				var f = new an(4 * t.skinWeights.length, 4);
				this.setAttribute('skinWeight', f.copyVector4sArray(t.skinWeights));
			}
			return (
				null !== t.boundingSphere &&
					(this.boundingSphere = t.boundingSphere.clone()),
				null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
				this
			);
		},
		computeBoundingBox: function () {
			null === this.boundingBox && (this.boundingBox = new Tt());
			var t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute)
				return (
					console.error(
						'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
						this
					),
					void this.boundingBox.set(
						new wt(-1 / 0, -1 / 0, -1 / 0),
						new wt(1 / 0, 1 / 0, 1 / 0)
					)
				);
			if (void 0 !== t) {
				if ((this.boundingBox.setFromBufferAttribute(t), e))
					for (var n = 0, r = e.length; n < r; n++) {
						var i = e[n];
						pn.setFromBufferAttribute(i),
							this.morphTargetsRelative
								? (mn.addVectors(this.boundingBox.min, pn.min),
								  this.boundingBox.expandByPoint(mn),
								  mn.addVectors(this.boundingBox.max, pn.max),
								  this.boundingBox.expandByPoint(mn))
								: (this.boundingBox.expandByPoint(pn.min),
								  this.boundingBox.expandByPoint(pn.max));
					}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) ||
				isNaN(this.boundingBox.min.y) ||
				isNaN(this.boundingBox.min.z)) &&
				console.error(
					'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
					this
				);
		},
		computeBoundingSphere: function () {
			null === this.boundingSphere && (this.boundingSphere = new Ht());
			var t = this.attributes.position,
				e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute)
				return (
					console.error(
						'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
						this
					),
					void this.boundingSphere.set(new wt(), 1 / 0)
				);
			if (t) {
				var n = this.boundingSphere.center;
				if ((pn.setFromBufferAttribute(t), e))
					for (var r = 0, i = e.length; r < i; r++) {
						var a = e[r];
						fn.setFromBufferAttribute(a),
							this.morphTargetsRelative
								? (mn.addVectors(pn.min, fn.min),
								  pn.expandByPoint(mn),
								  mn.addVectors(pn.max, fn.max),
								  pn.expandByPoint(mn))
								: (pn.expandByPoint(fn.min), pn.expandByPoint(fn.max));
					}
				pn.getCenter(n);
				for (var o = 0, s = 0, c = t.count; s < c; s++)
					mn.fromBufferAttribute(t, s),
						(o = Math.max(o, n.distanceToSquared(mn)));
				if (e)
					for (var l = 0, u = e.length; l < u; l++)
						for (
							var h = e[l], d = this.morphTargetsRelative, p = 0, f = h.count;
							p < f;
							p++
						)
							mn.fromBufferAttribute(h, p),
								d && (dn.fromBufferAttribute(t, p), mn.add(dn)),
								(o = Math.max(o, n.distanceToSquared(mn)));
				(this.boundingSphere.radius = Math.sqrt(o)),
					isNaN(this.boundingSphere.radius) &&
						console.error(
							'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
							this
						);
			}
		},
		computeFaceNormals: function () {},
		computeVertexNormals: function () {
			var t = this.index,
				e = this.getAttribute('position');
			if (void 0 !== e) {
				var n = this.getAttribute('normal');
				if (void 0 === n)
					(n = new Je(new Float32Array(3 * e.count), 3)),
						this.setAttribute('normal', n);
				else for (var r = 0, i = n.count; r < i; r++) n.setXYZ(r, 0, 0, 0);
				var a = new wt(),
					o = new wt(),
					s = new wt(),
					c = new wt(),
					l = new wt(),
					u = new wt(),
					h = new wt(),
					d = new wt();
				if (t)
					for (var p = 0, f = t.count; p < f; p += 3) {
						var m = t.getX(p + 0),
							v = t.getX(p + 1),
							g = t.getX(p + 2);
						a.fromBufferAttribute(e, m),
							o.fromBufferAttribute(e, v),
							s.fromBufferAttribute(e, g),
							h.subVectors(s, o),
							d.subVectors(a, o),
							h.cross(d),
							c.fromBufferAttribute(n, m),
							l.fromBufferAttribute(n, v),
							u.fromBufferAttribute(n, g),
							c.add(h),
							l.add(h),
							u.add(h),
							n.setXYZ(m, c.x, c.y, c.z),
							n.setXYZ(v, l.x, l.y, l.z),
							n.setXYZ(g, u.x, u.y, u.z);
					}
				else
					for (var y = 0, x = e.count; y < x; y += 3)
						a.fromBufferAttribute(e, y + 0),
							o.fromBufferAttribute(e, y + 1),
							s.fromBufferAttribute(e, y + 2),
							h.subVectors(s, o),
							d.subVectors(a, o),
							h.cross(d),
							n.setXYZ(y + 0, h.x, h.y, h.z),
							n.setXYZ(y + 1, h.x, h.y, h.z),
							n.setXYZ(y + 2, h.x, h.y, h.z);
				this.normalizeNormals(), (n.needsUpdate = !0);
			}
		},
		merge: function (t, e) {
			if (t && t.isBufferGeometry) {
				void 0 === e &&
					((e = 0),
					console.warn(
						'THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.'
					));
				var n = this.attributes;
				for (var r in n)
					if (void 0 !== t.attributes[r])
						for (
							var i = n[r].array,
								a = t.attributes[r],
								o = a.array,
								s = a.itemSize * e,
								c = Math.min(o.length, i.length - s),
								l = 0,
								u = s;
							l < c;
							l++, u++
						)
							i[u] = o[l];
				return this;
			}
			console.error(
				'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.',
				t
			);
		},
		normalizeNormals: function () {
			for (var t = this.attributes.normal, e = 0, n = t.count; e < n; e++)
				mn.fromBufferAttribute(t, e),
					mn.normalize(),
					t.setXYZ(e, mn.x, mn.y, mn.z);
		},
		toNonIndexed: function () {
			function t(t, e) {
				for (
					var n = t.array,
						r = t.itemSize,
						i = t.normalized,
						a = new n.constructor(e.length * r),
						o = 0,
						s = 0,
						c = 0,
						l = e.length;
					c < l;
					c++
				) {
					o = e[c] * r;
					for (var u = 0; u < r; u++) a[s++] = n[o++];
				}
				return new Je(a, r, i);
			}
			if (null === this.index)
				return (
					console.warn(
						'THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.'
					),
					this
				);
			var e = new vn(),
				n = this.index.array,
				r = this.attributes;
			for (var i in r) {
				var a = t(r[i], n);
				e.setAttribute(i, a);
			}
			var o = this.morphAttributes;
			for (var s in o) {
				for (var c = [], l = o[s], u = 0, h = l.length; u < h; u++) {
					var d = t(l[u], n);
					c.push(d);
				}
				e.morphAttributes[s] = c;
			}
			e.morphTargetsRelative = this.morphTargetsRelative;
			for (var p = this.groups, f = 0, m = p.length; f < m; f++) {
				var v = p[f];
				e.addGroup(v.start, v.count, v.materialIndex);
			}
			return e;
		},
		toJSON: function () {
			var t = {
				metadata: {
					version: 4.5,
					type: 'BufferGeometry',
					generator: 'BufferGeometry.toJSON',
				},
			};
			if (
				((t.uuid = this.uuid),
				(t.type = this.type),
				'' !== this.name && (t.name = this.name),
				Object.keys(this.userData).length > 0 && (t.userData = this.userData),
				void 0 !== this.parameters)
			) {
				var e = this.parameters;
				for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
				return t;
			}
			t.data = { attributes: {} };
			var r = this.index;
			null !== r &&
				(t.data.index = {
					type: r.array.constructor.name,
					array: Array.prototype.slice.call(r.array),
				});
			var i = this.attributes;
			for (var a in i) {
				var o = i[a],
					s = o.toJSON(t.data);
				'' !== o.name && (s.name = o.name), (t.data.attributes[a] = s);
			}
			var c = {},
				l = !1;
			for (var u in this.morphAttributes) {
				for (
					var h = this.morphAttributes[u], d = [], p = 0, f = h.length;
					p < f;
					p++
				) {
					var m = h[p],
						v = m.toJSON(t.data);
					'' !== m.name && (v.name = m.name), d.push(v);
				}
				d.length > 0 && ((c[u] = d), (l = !0));
			}
			l &&
				((t.data.morphAttributes = c),
				(t.data.morphTargetsRelative = this.morphTargetsRelative));
			var g = this.groups;
			g.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(g)));
			var y = this.boundingSphere;
			return (
				null !== y &&
					(t.data.boundingSphere = {
						center: y.center.toArray(),
						radius: y.radius,
					}),
				t
			);
		},
		clone: function () {
			return new vn().copy(this);
		},
		copy: function (t) {
			(this.index = null),
				(this.attributes = {}),
				(this.morphAttributes = {}),
				(this.groups = []),
				(this.boundingBox = null),
				(this.boundingSphere = null);
			var e = {};
			this.name = t.name;
			var n = t.index;
			null !== n && this.setIndex(n.clone(e));
			var r = t.attributes;
			for (var i in r) {
				var a = r[i];
				this.setAttribute(i, a.clone(e));
			}
			var o = t.morphAttributes;
			for (var s in o) {
				for (var c = [], l = o[s], u = 0, h = l.length; u < h; u++)
					c.push(l[u].clone(e));
				this.morphAttributes[s] = c;
			}
			this.morphTargetsRelative = t.morphTargetsRelative;
			for (var d = t.groups, p = 0, f = d.length; p < f; p++) {
				var m = d[p];
				this.addGroup(m.start, m.count, m.materialIndex);
			}
			var v = t.boundingBox;
			null !== v && (this.boundingBox = v.clone());
			var g = t.boundingSphere;
			return (
				null !== g && (this.boundingSphere = g.clone()),
				(this.drawRange.start = t.drawRange.start),
				(this.drawRange.count = t.drawRange.count),
				(this.userData = t.userData),
				this
			);
		},
		dispose: function () {
			this.dispatchEvent({ type: 'dispose' });
		},
	});
	var gn = new Jt(),
		yn = new Zt(),
		xn = new Ht(),
		_n = new wt(),
		bn = new wt(),
		wn = new wt(),
		Mn = new wt(),
		Sn = new wt(),
		Tn = new wt(),
		En = new wt(),
		An = new wt(),
		Ln = new wt(),
		Rn = new pt(),
		Cn = new pt(),
		Pn = new pt(),
		In = new wt(),
		Dn = new wt();
	function Nn(t, e) {
		be.call(this),
			(this.type = 'Mesh'),
			(this.geometry = void 0 !== t ? t : new vn()),
			(this.material = void 0 !== e ? e : new Xe()),
			this.updateMorphTargets();
	}
	function On(t, e, n, r, i, a, o, s) {
		if (
			null ===
			(1 === e.side
				? r.intersectTriangle(o, a, i, !0, s)
				: r.intersectTriangle(i, a, o, 2 !== e.side, s))
		)
			return null;
		Dn.copy(s), Dn.applyMatrix4(t.matrixWorld);
		var c = n.ray.origin.distanceTo(Dn);
		return c < n.near || c > n.far
			? null
			: { distance: c, point: Dn.clone(), object: t };
	}
	function Bn(t, e, n, r, i, a, o, s, c, l, u, h) {
		_n.fromBufferAttribute(i, l),
			bn.fromBufferAttribute(i, u),
			wn.fromBufferAttribute(i, h);
		var d = t.morphTargetInfluences;
		if (e.morphTargets && a && d) {
			En.set(0, 0, 0), An.set(0, 0, 0), Ln.set(0, 0, 0);
			for (var p = 0, f = a.length; p < f; p++) {
				var m = d[p],
					v = a[p];
				0 !== m &&
					(Mn.fromBufferAttribute(v, l),
					Sn.fromBufferAttribute(v, u),
					Tn.fromBufferAttribute(v, h),
					o
						? (En.addScaledVector(Mn, m),
						  An.addScaledVector(Sn, m),
						  Ln.addScaledVector(Tn, m))
						: (En.addScaledVector(Mn.sub(_n), m),
						  An.addScaledVector(Sn.sub(bn), m),
						  Ln.addScaledVector(Tn.sub(wn), m)));
			}
			_n.add(En), bn.add(An), wn.add(Ln);
		}
		t.isSkinnedMesh &&
			(t.boneTransform(l, _n), t.boneTransform(u, bn), t.boneTransform(h, wn));
		var g = On(t, e, n, r, _n, bn, wn, In);
		if (g) {
			s &&
				(Rn.fromBufferAttribute(s, l),
				Cn.fromBufferAttribute(s, u),
				Pn.fromBufferAttribute(s, h),
				(g.uv = Be.getUV(In, _n, bn, wn, Rn, Cn, Pn, new pt()))),
				c &&
					(Rn.fromBufferAttribute(c, l),
					Cn.fromBufferAttribute(c, u),
					Pn.fromBufferAttribute(c, h),
					(g.uv2 = Be.getUV(In, _n, bn, wn, Rn, Cn, Pn, new pt())));
			var y = new We(l, u, h);
			Be.getNormal(_n, bn, wn, y.normal), (g.face = y);
		}
		return g;
	}
	Nn.prototype = Object.assign(Object.create(be.prototype), {
		constructor: Nn,
		isMesh: !0,
		copy: function (t) {
			return (
				be.prototype.copy.call(this, t),
				void 0 !== t.morphTargetInfluences &&
					(this.morphTargetInfluences = t.morphTargetInfluences.slice()),
				void 0 !== t.morphTargetDictionary &&
					(this.morphTargetDictionary = Object.assign(
						{},
						t.morphTargetDictionary
					)),
				(this.material = t.material),
				(this.geometry = t.geometry),
				this
			);
		},
		updateMorphTargets: function () {
			var t = this.geometry;
			if (t.isBufferGeometry) {
				var e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					var r = e[n[0]];
					if (void 0 !== r) {
						(this.morphTargetInfluences = []),
							(this.morphTargetDictionary = {});
						for (var i = 0, a = r.length; i < a; i++) {
							var o = r[i].name || String(i);
							this.morphTargetInfluences.push(0),
								(this.morphTargetDictionary[o] = i);
						}
					}
				}
			} else {
				var s = t.morphTargets;
				void 0 !== s &&
					s.length > 0 &&
					console.error(
						'THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
					);
			}
		},
		raycast: function (t, e) {
			var n,
				r = this.geometry,
				i = this.material,
				a = this.matrixWorld;
			if (
				void 0 !== i &&
				(null === r.boundingSphere && r.computeBoundingSphere(),
				xn.copy(r.boundingSphere),
				xn.applyMatrix4(a),
				!1 !== t.ray.intersectsSphere(xn) &&
					(gn.getInverse(a),
					yn.copy(t.ray).applyMatrix4(gn),
					null === r.boundingBox || !1 !== yn.intersectsBox(r.boundingBox)))
			)
				if (r.isBufferGeometry) {
					var o = r.index,
						s = r.attributes.position,
						c = r.morphAttributes.position,
						l = r.morphTargetsRelative,
						u = r.attributes.uv,
						h = r.attributes.uv2,
						d = r.groups,
						p = r.drawRange;
					if (null !== o)
						if (Array.isArray(i))
							for (var f = 0, m = d.length; f < m; f++)
								for (
									var v = d[f],
										g = i[v.materialIndex],
										y = Math.max(v.start, p.start),
										x = Math.min(v.start + v.count, p.start + p.count);
									y < x;
									y += 3
								) {
									var _ = o.getX(y),
										b = o.getX(y + 1),
										w = o.getX(y + 2);
									(n = Bn(this, g, t, yn, s, c, l, u, h, _, b, w)) &&
										((n.faceIndex = Math.floor(y / 3)),
										(n.face.materialIndex = v.materialIndex),
										e.push(n));
								}
						else
							for (
								var M = Math.max(0, p.start),
									S = Math.min(o.count, p.start + p.count);
								M < S;
								M += 3
							) {
								var T = o.getX(M),
									E = o.getX(M + 1),
									A = o.getX(M + 2);
								(n = Bn(this, i, t, yn, s, c, l, u, h, T, E, A)) &&
									((n.faceIndex = Math.floor(M / 3)), e.push(n));
							}
					else if (void 0 !== s)
						if (Array.isArray(i))
							for (var L = 0, R = d.length; L < R; L++)
								for (
									var C = d[L],
										P = i[C.materialIndex],
										I = Math.max(C.start, p.start),
										D = Math.min(C.start + C.count, p.start + p.count);
									I < D;
									I += 3
								) {
									(n = Bn(this, P, t, yn, s, c, l, u, h, I, I + 1, I + 2)) &&
										((n.faceIndex = Math.floor(I / 3)),
										(n.face.materialIndex = C.materialIndex),
										e.push(n));
								}
						else
							for (
								var N = Math.max(0, p.start),
									O = Math.min(s.count, p.start + p.count);
								N < O;
								N += 3
							) {
								(n = Bn(this, i, t, yn, s, c, l, u, h, N, N + 1, N + 2)) &&
									((n.faceIndex = Math.floor(N / 3)), e.push(n));
							}
				} else if (r.isGeometry) {
					var B,
						z = Array.isArray(i),
						G = r.vertices,
						F = r.faces,
						U = r.faceVertexUvs[0];
					U.length > 0 && (B = U);
					for (var H = 0, k = F.length; H < k; H++) {
						var V = F[H],
							W = z ? i[V.materialIndex] : i;
						if (void 0 !== W) {
							var j = G[V.a],
								q = G[V.b],
								X = G[V.c];
							if ((n = On(this, W, t, yn, j, q, X, In))) {
								if (B && B[H]) {
									var Y = B[H];
									Rn.copy(Y[0]),
										Cn.copy(Y[1]),
										Pn.copy(Y[2]),
										(n.uv = Be.getUV(In, j, q, X, Rn, Cn, Pn, new pt()));
								}
								(n.face = V), (n.faceIndex = H), e.push(n);
							}
						}
					}
				}
		},
	});
	var zn = (function (t) {
		function e(e, n, r, i, a, o) {
			var s;
			void 0 === e && (e = 1),
				void 0 === n && (n = 1),
				void 0 === r && (r = 1),
				void 0 === i && (i = 1),
				void 0 === a && (a = 1),
				void 0 === o && (o = 1),
				((s = t.call(this) || this).type = 'BoxBufferGeometry'),
				(s.parameters = {
					width: e,
					height: n,
					depth: r,
					widthSegments: i,
					heightSegments: a,
					depthSegments: o,
				});
			var c = ht(s);
			(i = Math.floor(i)), (a = Math.floor(a)), (o = Math.floor(o));
			var l = [],
				u = [],
				h = [],
				d = [],
				p = 0,
				f = 0;
			function m(t, e, n, r, i, a, o, s, m, v, g) {
				for (
					var y = a / m,
						x = o / v,
						_ = a / 2,
						b = o / 2,
						w = s / 2,
						M = m + 1,
						S = v + 1,
						T = 0,
						E = 0,
						A = new wt(),
						L = 0;
					L < S;
					L++
				)
					for (var R = L * x - b, C = 0; C < M; C++) {
						var P = C * y - _;
						(A[t] = P * r),
							(A[e] = R * i),
							(A[n] = w),
							u.push(A.x, A.y, A.z),
							(A[t] = 0),
							(A[e] = 0),
							(A[n] = s > 0 ? 1 : -1),
							h.push(A.x, A.y, A.z),
							d.push(C / m),
							d.push(1 - L / v),
							(T += 1);
					}
				for (var I = 0; I < v; I++)
					for (var D = 0; D < m; D++) {
						var N = p + D + M * I,
							O = p + D + M * (I + 1),
							B = p + (D + 1) + M * (I + 1),
							z = p + (D + 1) + M * I;
						l.push(N, O, z), l.push(O, B, z), (E += 6);
					}
				c.addGroup(f, E, g), (f += E), (p += T);
			}
			return (
				m('z', 'y', 'x', -1, -1, r, n, e, o, a, 0),
				m('z', 'y', 'x', 1, -1, r, n, -e, o, a, 1),
				m('x', 'z', 'y', 1, 1, e, r, n, i, o, 2),
				m('x', 'z', 'y', 1, -1, e, r, -n, i, o, 3),
				m('x', 'y', 'z', 1, -1, e, n, r, i, a, 4),
				m('x', 'y', 'z', -1, -1, e, n, -r, i, a, 5),
				s.setIndex(l),
				s.setAttribute('position', new an(u, 3)),
				s.setAttribute('normal', new an(h, 3)),
				s.setAttribute('uv', new an(d, 2)),
				s
			);
		}
		return ut(e, t), e;
	})(vn);
	function Gn(t) {
		var e = {};
		for (var n in t)
			for (var r in ((e[n] = {}), t[n])) {
				var i = t[n][r];
				i &&
				(i.isColor ||
					i.isMatrix3 ||
					i.isMatrix4 ||
					i.isVector2 ||
					i.isVector3 ||
					i.isVector4 ||
					i.isTexture)
					? (e[n][r] = i.clone())
					: Array.isArray(i)
					? (e[n][r] = i.slice())
					: (e[n][r] = i);
			}
		return e;
	}
	function Fn(t) {
		for (var e = {}, n = 0; n < t.length; n++) {
			var r = Gn(t[n]);
			for (var i in r) e[i] = r[i];
		}
		return e;
	}
	var Un = { clone: Gn, merge: Fn };
	function Hn(t) {
		qe.call(this),
			(this.type = 'ShaderMaterial'),
			(this.defines = {}),
			(this.uniforms = {}),
			(this.vertexShader =
				'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}'),
			(this.fragmentShader =
				'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}'),
			(this.linewidth = 1),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.fog = !1),
			(this.lights = !1),
			(this.clipping = !1),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.morphNormals = !1),
			(this.extensions = {
				derivatives: !1,
				fragDepth: !1,
				drawBuffers: !1,
				shaderTextureLOD: !1,
			}),
			(this.defaultAttributeValues = {
				color: [1, 1, 1],
				uv: [0, 0],
				uv2: [0, 0],
			}),
			(this.index0AttributeName = void 0),
			(this.uniformsNeedUpdate = !1),
			(this.glslVersion = null),
			void 0 !== t &&
				(void 0 !== t.attributes &&
					console.error(
						'THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.'
					),
				this.setValues(t));
	}
	function kn() {
		be.call(this),
			(this.type = 'Camera'),
			(this.matrixWorldInverse = new Jt()),
			(this.projectionMatrix = new Jt()),
			(this.projectionMatrixInverse = new Jt());
	}
	function Vn(t, e, n, r) {
		kn.call(this),
			(this.type = 'PerspectiveCamera'),
			(this.fov = void 0 !== t ? t : 50),
			(this.zoom = 1),
			(this.near = void 0 !== n ? n : 0.1),
			(this.far = void 0 !== r ? r : 2e3),
			(this.focus = 10),
			(this.aspect = void 0 !== e ? e : 1),
			(this.view = null),
			(this.filmGauge = 35),
			(this.filmOffset = 0),
			this.updateProjectionMatrix();
	}
	(Hn.prototype = Object.create(qe.prototype)),
		(Hn.prototype.constructor = Hn),
		(Hn.prototype.isShaderMaterial = !0),
		(Hn.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				(this.fragmentShader = t.fragmentShader),
				(this.vertexShader = t.vertexShader),
				(this.uniforms = Gn(t.uniforms)),
				(this.defines = Object.assign({}, t.defines)),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.lights = t.lights),
				(this.clipping = t.clipping),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.morphNormals = t.morphNormals),
				(this.extensions = Object.assign({}, t.extensions)),
				(this.glslVersion = t.glslVersion),
				this
			);
		}),
		(Hn.prototype.toJSON = function (t) {
			var e = qe.prototype.toJSON.call(this, t);
			for (var n in ((e.glslVersion = this.glslVersion),
			(e.uniforms = {}),
			this.uniforms)) {
				var r = this.uniforms[n].value;
				r && r.isTexture
					? (e.uniforms[n] = { type: 't', value: r.toJSON(t).uuid })
					: r && r.isColor
					? (e.uniforms[n] = { type: 'c', value: r.getHex() })
					: r && r.isVector2
					? (e.uniforms[n] = { type: 'v2', value: r.toArray() })
					: r && r.isVector3
					? (e.uniforms[n] = { type: 'v3', value: r.toArray() })
					: r && r.isVector4
					? (e.uniforms[n] = { type: 'v4', value: r.toArray() })
					: r && r.isMatrix3
					? (e.uniforms[n] = { type: 'm3', value: r.toArray() })
					: r && r.isMatrix4
					? (e.uniforms[n] = { type: 'm4', value: r.toArray() })
					: (e.uniforms[n] = { value: r });
			}
			Object.keys(this.defines).length > 0 && (e.defines = this.defines),
				(e.vertexShader = this.vertexShader),
				(e.fragmentShader = this.fragmentShader);
			var i = {};
			for (var a in this.extensions) !0 === this.extensions[a] && (i[a] = !0);
			return Object.keys(i).length > 0 && (e.extensions = i), e;
		}),
		(kn.prototype = Object.assign(Object.create(be.prototype), {
			constructor: kn,
			isCamera: !0,
			copy: function (t, e) {
				return (
					be.prototype.copy.call(this, t, e),
					this.matrixWorldInverse.copy(t.matrixWorldInverse),
					this.projectionMatrix.copy(t.projectionMatrix),
					this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
					this
				);
			},
			getWorldDirection: function (t) {
				void 0 === t &&
					(console.warn(
						'THREE.Camera: .getWorldDirection() target is now required'
					),
					(t = new wt())),
					this.updateMatrixWorld(!0);
				var e = this.matrixWorld.elements;
				return t.set(-e[8], -e[9], -e[10]).normalize();
			},
			updateMatrixWorld: function (t) {
				be.prototype.updateMatrixWorld.call(this, t),
					this.matrixWorldInverse.getInverse(this.matrixWorld);
			},
			updateWorldMatrix: function (t, e) {
				be.prototype.updateWorldMatrix.call(this, t, e),
					this.matrixWorldInverse.getInverse(this.matrixWorld);
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
		})),
		(Vn.prototype = Object.assign(Object.create(kn.prototype), {
			constructor: Vn,
			isPerspectiveCamera: !0,
			copy: function (t, e) {
				return (
					kn.prototype.copy.call(this, t, e),
					(this.fov = t.fov),
					(this.zoom = t.zoom),
					(this.near = t.near),
					(this.far = t.far),
					(this.focus = t.focus),
					(this.aspect = t.aspect),
					(this.view = null === t.view ? null : Object.assign({}, t.view)),
					(this.filmGauge = t.filmGauge),
					(this.filmOffset = t.filmOffset),
					this
				);
			},
			setFocalLength: function (t) {
				var e = (0.5 * this.getFilmHeight()) / t;
				(this.fov = 2 * st.RAD2DEG * Math.atan(e)),
					this.updateProjectionMatrix();
			},
			getFocalLength: function () {
				var t = Math.tan(0.5 * st.DEG2RAD * this.fov);
				return (0.5 * this.getFilmHeight()) / t;
			},
			getEffectiveFOV: function () {
				return (
					2 *
					st.RAD2DEG *
					Math.atan(Math.tan(0.5 * st.DEG2RAD * this.fov) / this.zoom)
				);
			},
			getFilmWidth: function () {
				return this.filmGauge * Math.min(this.aspect, 1);
			},
			getFilmHeight: function () {
				return this.filmGauge / Math.max(this.aspect, 1);
			},
			setViewOffset: function (t, e, n, r, i, a) {
				(this.aspect = t / e),
					null === this.view &&
						(this.view = {
							enabled: !0,
							fullWidth: 1,
							fullHeight: 1,
							offsetX: 0,
							offsetY: 0,
							width: 1,
							height: 1,
						}),
					(this.view.enabled = !0),
					(this.view.fullWidth = t),
					(this.view.fullHeight = e),
					(this.view.offsetX = n),
					(this.view.offsetY = r),
					(this.view.width = i),
					(this.view.height = a),
					this.updateProjectionMatrix();
			},
			clearViewOffset: function () {
				null !== this.view && (this.view.enabled = !1),
					this.updateProjectionMatrix();
			},
			updateProjectionMatrix: function () {
				var t = this.near,
					e = (t * Math.tan(0.5 * st.DEG2RAD * this.fov)) / this.zoom,
					n = 2 * e,
					r = this.aspect * n,
					i = -0.5 * r,
					a = this.view;
				if (null !== this.view && this.view.enabled) {
					var o = a.fullWidth,
						s = a.fullHeight;
					(i += (a.offsetX * r) / o),
						(e -= (a.offsetY * n) / s),
						(r *= a.width / o),
						(n *= a.height / s);
				}
				var c = this.filmOffset;
				0 !== c && (i += (t * c) / this.getFilmWidth()),
					this.projectionMatrix.makePerspective(
						i,
						i + r,
						e,
						e - n,
						t,
						this.far
					),
					this.projectionMatrixInverse.getInverse(this.projectionMatrix);
			},
			toJSON: function (t) {
				var e = be.prototype.toJSON.call(this, t);
				return (
					(e.object.fov = this.fov),
					(e.object.zoom = this.zoom),
					(e.object.near = this.near),
					(e.object.far = this.far),
					(e.object.focus = this.focus),
					(e.object.aspect = this.aspect),
					null !== this.view && (e.object.view = Object.assign({}, this.view)),
					(e.object.filmGauge = this.filmGauge),
					(e.object.filmOffset = this.filmOffset),
					e
				);
			},
		}));
	var Wn = 90;
	function jn(t, e, n) {
		if (
			(be.call(this),
			(this.type = 'CubeCamera'),
			!0 === n.isWebGLCubeRenderTarget)
		) {
			this.renderTarget = n;
			var r = new Vn(Wn, 1, t, e);
			(r.layers = this.layers),
				r.up.set(0, -1, 0),
				r.lookAt(new wt(1, 0, 0)),
				this.add(r);
			var i = new Vn(Wn, 1, t, e);
			(i.layers = this.layers),
				i.up.set(0, -1, 0),
				i.lookAt(new wt(-1, 0, 0)),
				this.add(i);
			var a = new Vn(Wn, 1, t, e);
			(a.layers = this.layers),
				a.up.set(0, 0, 1),
				a.lookAt(new wt(0, 1, 0)),
				this.add(a);
			var o = new Vn(Wn, 1, t, e);
			(o.layers = this.layers),
				o.up.set(0, 0, -1),
				o.lookAt(new wt(0, -1, 0)),
				this.add(o);
			var s = new Vn(Wn, 1, t, e);
			(s.layers = this.layers),
				s.up.set(0, -1, 0),
				s.lookAt(new wt(0, 0, 1)),
				this.add(s);
			var c = new Vn(Wn, 1, t, e);
			(c.layers = this.layers),
				c.up.set(0, -1, 0),
				c.lookAt(new wt(0, 0, -1)),
				this.add(c),
				(this.update = function (t, e) {
					null === this.parent && this.updateMatrixWorld();
					var l = t.xr.enabled,
						u = t.getRenderTarget();
					t.xr.enabled = !1;
					var h = n.texture.generateMipmaps;
					(n.texture.generateMipmaps = !1),
						t.setRenderTarget(n, 0),
						t.render(e, r),
						t.setRenderTarget(n, 1),
						t.render(e, i),
						t.setRenderTarget(n, 2),
						t.render(e, a),
						t.setRenderTarget(n, 3),
						t.render(e, o),
						t.setRenderTarget(n, 4),
						t.render(e, s),
						(n.texture.generateMipmaps = h),
						t.setRenderTarget(n, 5),
						t.render(e, c),
						t.setRenderTarget(u),
						(t.xr.enabled = l);
				}),
				(this.clear = function (t, e, r, i) {
					for (var a = t.getRenderTarget(), o = 0; o < 6; o++)
						t.setRenderTarget(n, o), t.clear(e, r, i);
					t.setRenderTarget(a);
				});
		} else console.error('THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.');
	}
	function qn(t, e, n, i, a, o, s, c, l, u) {
		(t = void 0 !== t ? t : []),
			(e = void 0 !== e ? e : r),
			(s = void 0 !== s ? s : S),
			gt.call(this, t, e, n, i, a, o, s, c, l, u),
			(this.flipY = !1),
			(this._needsFlipEnvMap = !0);
	}
	function Xn(t, e, n) {
		Number.isInteger(e) &&
			(console.warn(
				'THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )'
			),
			(e = n)),
			xt.call(this, t, t, e),
			(e = e || {}),
			(this.texture = new qn(
				void 0,
				e.mapping,
				e.wrapS,
				e.wrapT,
				e.magFilter,
				e.minFilter,
				e.format,
				e.type,
				e.anisotropy,
				e.encoding
			)),
			(this.texture._needsFlipEnvMap = !1);
	}
	function Yn(t, e, n, r, i, a, o, s, c, l, u, h) {
		gt.call(this, null, a, o, s, c, l, r, i, u, h),
			(this.image = { data: t || null, width: e || 1, height: n || 1 }),
			(this.magFilter = void 0 !== c ? c : d),
			(this.minFilter = void 0 !== l ? l : d),
			(this.generateMipmaps = !1),
			(this.flipY = !1),
			(this.unpackAlignment = 1),
			(this.needsUpdate = !0);
	}
	(jn.prototype = Object.create(be.prototype)),
		(jn.prototype.constructor = jn),
		(qn.prototype = Object.create(gt.prototype)),
		(qn.prototype.constructor = qn),
		(qn.prototype.isCubeTexture = !0),
		Object.defineProperty(qn.prototype, 'images', {
			get: function () {
				return this.image;
			},
			set: function (t) {
				this.image = t;
			},
		}),
		(Xn.prototype = Object.create(xt.prototype)),
		(Xn.prototype.constructor = Xn),
		(Xn.prototype.isWebGLCubeRenderTarget = !0),
		(Xn.prototype.fromEquirectangularTexture = function (t, e) {
			(this.texture.type = e.type),
				(this.texture.format = T),
				(this.texture.encoding = e.encoding),
				(this.texture.generateMipmaps = e.generateMipmaps),
				(this.texture.minFilter = e.minFilter),
				(this.texture.magFilter = e.magFilter);
			var n = { tEquirect: { value: null } },
				r =
					'\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t',
				i =
					'\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t',
				a = new zn(5, 5, 5),
				o = new Hn({
					name: 'CubemapFromEquirect',
					uniforms: Gn(n),
					vertexShader: r,
					fragmentShader: i,
					side: 1,
					blending: 0,
				});
			o.uniforms.tEquirect.value = e;
			var s = new Nn(a, o),
				c = e.minFilter;
			return (
				e.minFilter === g && (e.minFilter = m),
				new jn(1, 10, this).update(t, s),
				(e.minFilter = c),
				s.geometry.dispose(),
				s.material.dispose(),
				this
			);
		}),
		(Yn.prototype = Object.create(gt.prototype)),
		(Yn.prototype.constructor = Yn),
		(Yn.prototype.isDataTexture = !0);
	var Zn = new Ht(),
		Jn = new wt(),
		Qn = (function () {
			function t(t, e, n, r, i, a) {
				this.planes = [
					void 0 !== t ? t : new Te(),
					void 0 !== e ? e : new Te(),
					void 0 !== n ? n : new Te(),
					void 0 !== r ? r : new Te(),
					void 0 !== i ? i : new Te(),
					void 0 !== a ? a : new Te(),
				];
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e, n, r, i, a) {
					var o = this.planes;
					return (
						o[0].copy(t),
						o[1].copy(e),
						o[2].copy(n),
						o[3].copy(r),
						o[4].copy(i),
						o[5].copy(a),
						this
					);
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					for (var e = this.planes, n = 0; n < 6; n++) e[n].copy(t.planes[n]);
					return this;
				}),
				(e.setFromProjectionMatrix = function (t) {
					var e = this.planes,
						n = t.elements,
						r = n[0],
						i = n[1],
						a = n[2],
						o = n[3],
						s = n[4],
						c = n[5],
						l = n[6],
						u = n[7],
						h = n[8],
						d = n[9],
						p = n[10],
						f = n[11],
						m = n[12],
						v = n[13],
						g = n[14],
						y = n[15];
					return (
						e[0].setComponents(o - r, u - s, f - h, y - m).normalize(),
						e[1].setComponents(o + r, u + s, f + h, y + m).normalize(),
						e[2].setComponents(o + i, u + c, f + d, y + v).normalize(),
						e[3].setComponents(o - i, u - c, f - d, y - v).normalize(),
						e[4].setComponents(o - a, u - l, f - p, y - g).normalize(),
						e[5].setComponents(o + a, u + l, f + p, y + g).normalize(),
						this
					);
				}),
				(e.intersectsObject = function (t) {
					var e = t.geometry;
					return (
						null === e.boundingSphere && e.computeBoundingSphere(),
						Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
						this.intersectsSphere(Zn)
					);
				}),
				(e.intersectsSprite = function (t) {
					return (
						Zn.center.set(0, 0, 0),
						(Zn.radius = 0.7071067811865476),
						Zn.applyMatrix4(t.matrixWorld),
						this.intersectsSphere(Zn)
					);
				}),
				(e.intersectsSphere = function (t) {
					for (
						var e = this.planes, n = t.center, r = -t.radius, i = 0;
						i < 6;
						i++
					) {
						if (e[i].distanceToPoint(n) < r) return !1;
					}
					return !0;
				}),
				(e.intersectsBox = function (t) {
					for (var e = this.planes, n = 0; n < 6; n++) {
						var r = e[n];
						if (
							((Jn.x = r.normal.x > 0 ? t.max.x : t.min.x),
							(Jn.y = r.normal.y > 0 ? t.max.y : t.min.y),
							(Jn.z = r.normal.z > 0 ? t.max.z : t.min.z),
							r.distanceToPoint(Jn) < 0)
						)
							return !1;
					}
					return !0;
				}),
				(e.containsPoint = function (t) {
					for (var e = this.planes, n = 0; n < 6; n++)
						if (e[n].distanceToPoint(t) < 0) return !1;
					return !0;
				}),
				t
			);
		})();
	function Kn() {
		var t = null,
			e = !1,
			n = null,
			r = null;
		function i(e, a) {
			n(e, a), (r = t.requestAnimationFrame(i));
		}
		return {
			start: function () {
				!0 !== e && null !== n && ((r = t.requestAnimationFrame(i)), (e = !0));
			},
			stop: function () {
				t.cancelAnimationFrame(r), (e = !1);
			},
			setAnimationLoop: function (t) {
				n = t;
			},
			setContext: function (e) {
				t = e;
			},
		};
	}
	function $n(t, e) {
		var n = e.isWebGL2,
			r = new WeakMap();
		return {
			get: function (t) {
				return t.isInterleavedBufferAttribute && (t = t.data), r.get(t);
			},
			remove: function (e) {
				e.isInterleavedBufferAttribute && (e = e.data);
				var n = r.get(e);
				n && (t.deleteBuffer(n.buffer), r.delete(e));
			},
			update: function (e, i) {
				if (e.isGLBufferAttribute) {
					var a = r.get(e);
					(!a || a.version < e.version) &&
						r.set(e, {
							buffer: e.buffer,
							type: e.type,
							bytesPerElement: e.elementSize,
							version: e.version,
						});
				} else {
					e.isInterleavedBufferAttribute && (e = e.data);
					var o = r.get(e);
					void 0 === o
						? r.set(
								e,
								(function (e, n) {
									var r = e.array,
										i = e.usage,
										a = t.createBuffer();
									t.bindBuffer(n, a),
										t.bufferData(n, r, i),
										e.onUploadCallback();
									var o = 5126;
									return (
										r instanceof Float32Array
											? (o = 5126)
											: r instanceof Float64Array
											? console.warn(
													'THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.'
											  )
											: r instanceof Uint16Array
											? (o = 5123)
											: r instanceof Int16Array
											? (o = 5122)
											: r instanceof Uint32Array
											? (o = 5125)
											: r instanceof Int32Array
											? (o = 5124)
											: r instanceof Int8Array
											? (o = 5120)
											: r instanceof Uint8Array && (o = 5121),
										{
											buffer: a,
											type: o,
											bytesPerElement: r.BYTES_PER_ELEMENT,
											version: e.version,
										}
									);
								})(e, i)
						  )
						: o.version < e.version &&
						  (!(function (e, r, i) {
								var a = r.array,
									o = r.updateRange;
								t.bindBuffer(i, e),
									-1 === o.count
										? t.bufferSubData(i, 0, a)
										: (n
												? t.bufferSubData(
														i,
														o.offset * a.BYTES_PER_ELEMENT,
														a,
														o.offset,
														o.count
												  )
												: t.bufferSubData(
														i,
														o.offset * a.BYTES_PER_ELEMENT,
														a.subarray(o.offset, o.offset + o.count)
												  ),
										  (o.count = -1));
						  })(o.buffer, e, i),
						  (o.version = e.version));
				}
			},
		};
	}
	var tr = (function (t) {
			function e(e, n, r, i) {
				var a;
				((a = t.call(this) || this).type = 'PlaneBufferGeometry'),
					(a.parameters = {
						width: e,
						height: n,
						widthSegments: r,
						heightSegments: i,
					});
				for (
					var o = (e = e || 1) / 2,
						s = (n = n || 1) / 2,
						c = Math.floor(r) || 1,
						l = Math.floor(i) || 1,
						u = c + 1,
						h = l + 1,
						d = e / c,
						p = n / l,
						f = [],
						m = [],
						v = [],
						g = [],
						y = 0;
					y < h;
					y++
				)
					for (var x = y * p - s, _ = 0; _ < u; _++) {
						var b = _ * d - o;
						m.push(b, -x, 0), v.push(0, 0, 1), g.push(_ / c), g.push(1 - y / l);
					}
				for (var w = 0; w < l; w++)
					for (var M = 0; M < c; M++) {
						var S = M + u * w,
							T = M + u * (w + 1),
							E = M + 1 + u * (w + 1),
							A = M + 1 + u * w;
						f.push(S, T, A), f.push(T, E, A);
					}
				return (
					a.setIndex(f),
					a.setAttribute('position', new an(m, 3)),
					a.setAttribute('normal', new an(v, 3)),
					a.setAttribute('uv', new an(g, 2)),
					a
				);
			}
			return ut(e, t), e;
		})(vn),
		er = {
			alphamap_fragment:
				'#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif',
			alphamap_pars_fragment:
				'#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
			alphatest_fragment:
				'#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif',
			aomap_fragment:
				'#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif',
			aomap_pars_fragment:
				'#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif',
			begin_vertex: 'vec3 transformed = vec3( position );',
			beginnormal_vertex:
				'vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif',
			bsdfs:
				'vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif',
			bumpmap_pars_fragment:
				'#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif',
			clipping_planes_fragment:
				'#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif',
			clipping_planes_pars_fragment:
				'#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif',
			clipping_planes_pars_vertex:
				'#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif',
			clipping_planes_vertex:
				'#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif',
			color_fragment: '#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif',
			color_pars_fragment: '#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif',
			color_pars_vertex:
				'#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif',
			color_vertex:
				'#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif',
			common:
				'#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}',
			cube_uv_reflection_fragment:
				'#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif',
			defaultnormal_vertex:
				'vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif',
			displacementmap_pars_vertex:
				'#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif',
			displacementmap_vertex:
				'#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif',
			emissivemap_fragment:
				'#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif',
			emissivemap_pars_fragment:
				'#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif',
			encodings_fragment: 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
			encodings_pars_fragment:
				'\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}',
			envmap_fragment:
				'#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif',
			envmap_common_pars_fragment:
				'#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif',
			envmap_pars_fragment:
				'#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif',
			envmap_pars_vertex:
				'#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif',
			envmap_physical_pars_fragment:
				'#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif',
			envmap_vertex:
				'#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif',
			fog_vertex: '#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif',
			fog_pars_vertex: '#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif',
			fog_fragment:
				'#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif',
			fog_pars_fragment:
				'#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif',
			gradientmap_pars_fragment:
				'#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}',
			lightmap_fragment:
				'#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif',
			lightmap_pars_fragment:
				'#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif',
			lights_lambert_vertex:
				'vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif',
			lights_pars_begin:
				'uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif',
			lights_toon_fragment:
				'ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;',
			lights_toon_pars_fragment:
				'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)',
			lights_phong_fragment:
				'BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;',
			lights_phong_pars_fragment:
				'varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)',
			lights_physical_fragment:
				'PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif',
			lights_physical_pars_fragment:
				'struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(\t\t0, 1,\t\t0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}',
			lights_fragment_begin:
				'\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif',
			lights_fragment_maps:
				'#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif',
			lights_fragment_end:
				'#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif',
			logdepthbuf_fragment:
				'#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif',
			logdepthbuf_pars_fragment:
				'#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif',
			logdepthbuf_pars_vertex:
				'#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif',
			logdepthbuf_vertex:
				'#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif',
			map_fragment:
				'#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif',
			map_pars_fragment: '#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif',
			map_particle_fragment:
				'#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif',
			map_particle_pars_fragment:
				'#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif',
			metalnessmap_fragment:
				'float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif',
			metalnessmap_pars_fragment:
				'#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif',
			morphnormal_vertex:
				'#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif',
			morphtarget_pars_vertex:
				'#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif',
			morphtarget_vertex:
				'#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif',
			normal_fragment_begin:
				'#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;',
			normal_fragment_maps:
				'#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif',
			normalmap_pars_fragment:
				'#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif',
			clearcoat_normal_fragment_begin:
				'#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif',
			clearcoat_normal_fragment_maps:
				'#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif',
			clearcoat_pars_fragment:
				'#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif',
			packing:
				'vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}',
			premultiplied_alpha_fragment:
				'#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif',
			project_vertex:
				'vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;',
			dithering_fragment:
				'#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif',
			dithering_pars_fragment:
				'#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif',
			roughnessmap_fragment:
				'float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif',
			roughnessmap_pars_fragment:
				'#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif',
			shadowmap_pars_fragment:
				'#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t\tf.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif',
			shadowmap_pars_vertex:
				'#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif',
			shadowmap_vertex:
				'#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif',
			shadowmask_pars_fragment:
				'float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}',
			skinbase_vertex:
				'#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif',
			skinning_pars_vertex:
				'#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif',
			skinning_vertex:
				'#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif',
			skinnormal_vertex:
				'#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif',
			specularmap_fragment:
				'float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif',
			specularmap_pars_fragment:
				'#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif',
			tonemapping_fragment:
				'#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif',
			tonemapping_pars_fragment:
				'#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(\t1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,\t1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,\t1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }',
			transmissionmap_fragment:
				'#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif',
			transmissionmap_pars_fragment:
				'#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif',
			uv_pars_fragment:
				'#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif',
			uv_pars_vertex:
				'#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif',
			uv_vertex:
				'#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif',
			uv2_pars_fragment:
				'#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif',
			uv2_pars_vertex:
				'#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif',
			uv2_vertex:
				'#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif',
			worldpos_vertex:
				'#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif',
			background_frag:
				'uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
			background_vert:
				'varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}',
			cube_frag:
				'#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
			cube_vert:
				'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}',
			depth_frag:
				'#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}',
			depth_vert:
				'#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}',
			distanceRGBA_frag:
				'#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}',
			distanceRGBA_vert:
				'#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}',
			equirect_frag:
				'uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}',
			equirect_vert:
				'varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}',
			linedashed_frag:
				'uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
			linedashed_vert:
				'uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
			meshbasic_frag:
				'uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
			meshbasic_vert:
				'#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}',
			meshlambert_frag:
				'uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
			meshlambert_vert:
				'#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
			meshmatcap_frag:
				'#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
			meshmatcap_vert:
				'#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}',
			meshtoon_frag:
				'#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
			meshtoon_vert:
				'#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
			meshphong_frag:
				'#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
			meshphong_vert:
				'#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
			meshphysical_frag:
				'#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}',
			meshphysical_vert:
				'#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
			normal_frag:
				'#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}',
			normal_vert:
				'#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}',
			points_frag:
				'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}',
			points_vert:
				'uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}',
			shadow_frag:
				'uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
			shadow_vert:
				'#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}',
			sprite_frag:
				'uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}',
			sprite_vert:
				'uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}',
		},
		nr = {
			common: {
				diffuse: { value: new Ve(15658734) },
				opacity: { value: 1 },
				map: { value: null },
				uvTransform: { value: new ft() },
				uv2Transform: { value: new ft() },
				alphaMap: { value: null },
			},
			specularmap: { specularMap: { value: null } },
			envmap: {
				envMap: { value: null },
				flipEnvMap: { value: -1 },
				reflectivity: { value: 1 },
				refractionRatio: { value: 0.98 },
				maxMipLevel: { value: 0 },
			},
			aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
			lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
			emissivemap: { emissiveMap: { value: null } },
			bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
			normalmap: {
				normalMap: { value: null },
				normalScale: { value: new pt(1, 1) },
			},
			displacementmap: {
				displacementMap: { value: null },
				displacementScale: { value: 1 },
				displacementBias: { value: 0 },
			},
			roughnessmap: { roughnessMap: { value: null } },
			metalnessmap: { metalnessMap: { value: null } },
			gradientmap: { gradientMap: { value: null } },
			fog: {
				fogDensity: { value: 25e-5 },
				fogNear: { value: 1 },
				fogFar: { value: 2e3 },
				fogColor: { value: new Ve(16777215) },
			},
			lights: {
				ambientLightColor: { value: [] },
				lightProbe: { value: [] },
				directionalLights: {
					value: [],
					properties: { direction: {}, color: {} },
				},
				directionalLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
					},
				},
				directionalShadowMap: { value: [] },
				directionalShadowMatrix: { value: [] },
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {},
					},
				},
				spotLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
					},
				},
				spotShadowMap: { value: [] },
				spotShadowMatrix: { value: [] },
				pointLights: {
					value: [],
					properties: { color: {}, position: {}, decay: {}, distance: {} },
				},
				pointLightShadows: {
					value: [],
					properties: {
						shadowBias: {},
						shadowNormalBias: {},
						shadowRadius: {},
						shadowMapSize: {},
						shadowCameraNear: {},
						shadowCameraFar: {},
					},
				},
				pointShadowMap: { value: [] },
				pointShadowMatrix: { value: [] },
				hemisphereLights: {
					value: [],
					properties: { direction: {}, skyColor: {}, groundColor: {} },
				},
				rectAreaLights: {
					value: [],
					properties: { color: {}, position: {}, width: {}, height: {} },
				},
				ltc_1: { value: null },
				ltc_2: { value: null },
			},
			points: {
				diffuse: { value: new Ve(15658734) },
				opacity: { value: 1 },
				size: { value: 1 },
				scale: { value: 1 },
				map: { value: null },
				alphaMap: { value: null },
				uvTransform: { value: new ft() },
			},
			sprite: {
				diffuse: { value: new Ve(15658734) },
				opacity: { value: 1 },
				center: { value: new pt(0.5, 0.5) },
				rotation: { value: 0 },
				map: { value: null },
				alphaMap: { value: null },
				uvTransform: { value: new ft() },
			},
		},
		rr = {
			basic: {
				uniforms: Fn([
					nr.common,
					nr.specularmap,
					nr.envmap,
					nr.aomap,
					nr.lightmap,
					nr.fog,
				]),
				vertexShader: er.meshbasic_vert,
				fragmentShader: er.meshbasic_frag,
			},
			lambert: {
				uniforms: Fn([
					nr.common,
					nr.specularmap,
					nr.envmap,
					nr.aomap,
					nr.lightmap,
					nr.emissivemap,
					nr.fog,
					nr.lights,
					{ emissive: { value: new Ve(0) } },
				]),
				vertexShader: er.meshlambert_vert,
				fragmentShader: er.meshlambert_frag,
			},
			phong: {
				uniforms: Fn([
					nr.common,
					nr.specularmap,
					nr.envmap,
					nr.aomap,
					nr.lightmap,
					nr.emissivemap,
					nr.bumpmap,
					nr.normalmap,
					nr.displacementmap,
					nr.fog,
					nr.lights,
					{
						emissive: { value: new Ve(0) },
						specular: { value: new Ve(1118481) },
						shininess: { value: 30 },
					},
				]),
				vertexShader: er.meshphong_vert,
				fragmentShader: er.meshphong_frag,
			},
			standard: {
				uniforms: Fn([
					nr.common,
					nr.envmap,
					nr.aomap,
					nr.lightmap,
					nr.emissivemap,
					nr.bumpmap,
					nr.normalmap,
					nr.displacementmap,
					nr.roughnessmap,
					nr.metalnessmap,
					nr.fog,
					nr.lights,
					{
						emissive: { value: new Ve(0) },
						roughness: { value: 1 },
						metalness: { value: 0 },
						envMapIntensity: { value: 1 },
					},
				]),
				vertexShader: er.meshphysical_vert,
				fragmentShader: er.meshphysical_frag,
			},
			toon: {
				uniforms: Fn([
					nr.common,
					nr.aomap,
					nr.lightmap,
					nr.emissivemap,
					nr.bumpmap,
					nr.normalmap,
					nr.displacementmap,
					nr.gradientmap,
					nr.fog,
					nr.lights,
					{ emissive: { value: new Ve(0) } },
				]),
				vertexShader: er.meshtoon_vert,
				fragmentShader: er.meshtoon_frag,
			},
			matcap: {
				uniforms: Fn([
					nr.common,
					nr.bumpmap,
					nr.normalmap,
					nr.displacementmap,
					nr.fog,
					{ matcap: { value: null } },
				]),
				vertexShader: er.meshmatcap_vert,
				fragmentShader: er.meshmatcap_frag,
			},
			points: {
				uniforms: Fn([nr.points, nr.fog]),
				vertexShader: er.points_vert,
				fragmentShader: er.points_frag,
			},
			dashed: {
				uniforms: Fn([
					nr.common,
					nr.fog,
					{
						scale: { value: 1 },
						dashSize: { value: 1 },
						totalSize: { value: 2 },
					},
				]),
				vertexShader: er.linedashed_vert,
				fragmentShader: er.linedashed_frag,
			},
			depth: {
				uniforms: Fn([nr.common, nr.displacementmap]),
				vertexShader: er.depth_vert,
				fragmentShader: er.depth_frag,
			},
			normal: {
				uniforms: Fn([
					nr.common,
					nr.bumpmap,
					nr.normalmap,
					nr.displacementmap,
					{ opacity: { value: 1 } },
				]),
				vertexShader: er.normal_vert,
				fragmentShader: er.normal_frag,
			},
			sprite: {
				uniforms: Fn([nr.sprite, nr.fog]),
				vertexShader: er.sprite_vert,
				fragmentShader: er.sprite_frag,
			},
			background: {
				uniforms: { uvTransform: { value: new ft() }, t2D: { value: null } },
				vertexShader: er.background_vert,
				fragmentShader: er.background_frag,
			},
			cube: {
				uniforms: Fn([nr.envmap, { opacity: { value: 1 } }]),
				vertexShader: er.cube_vert,
				fragmentShader: er.cube_frag,
			},
			equirect: {
				uniforms: { tEquirect: { value: null } },
				vertexShader: er.equirect_vert,
				fragmentShader: er.equirect_frag,
			},
			distanceRGBA: {
				uniforms: Fn([
					nr.common,
					nr.displacementmap,
					{
						referencePosition: { value: new wt() },
						nearDistance: { value: 1 },
						farDistance: { value: 1e3 },
					},
				]),
				vertexShader: er.distanceRGBA_vert,
				fragmentShader: er.distanceRGBA_frag,
			},
			shadow: {
				uniforms: Fn([
					nr.lights,
					nr.fog,
					{ color: { value: new Ve(0) }, opacity: { value: 1 } },
				]),
				vertexShader: er.shadow_vert,
				fragmentShader: er.shadow_frag,
			},
		};
	function ir(t, e, n, r, i) {
		var a,
			o,
			c = new Ve(0),
			l = 0,
			u = null,
			h = 0,
			d = null;
		function p(t, e) {
			n.buffers.color.setClear(t.r, t.g, t.b, e, i);
		}
		return {
			getClearColor: function () {
				return c;
			},
			setClearColor: function (t, e) {
				c.set(t), p(c, (l = void 0 !== e ? e : 1));
			},
			getClearAlpha: function () {
				return l;
			},
			setClearAlpha: function (t) {
				p(c, (l = t));
			},
			render: function (n, i, f, m) {
				var v = !0 === i.isScene ? i.background : null;
				v && v.isTexture && (v = e.get(v));
				var g = t.xr,
					y = g.getSession && g.getSession();
				y && 'additive' === y.environmentBlendMode && (v = null),
					null === v ? p(c, l) : v && v.isColor && (p(v, 1), (m = !0)),
					(t.autoClear || m) &&
						t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
					v && (v.isCubeTexture || v.isWebGLCubeRenderTarget || v.mapping === s)
						? (void 0 === o &&
								((o = new Nn(
									new zn(1, 1, 1),
									new Hn({
										name: 'BackgroundCubeMaterial',
										uniforms: Gn(rr.cube.uniforms),
										vertexShader: rr.cube.vertexShader,
										fragmentShader: rr.cube.fragmentShader,
										side: 1,
										depthTest: !1,
										depthWrite: !1,
										fog: !1,
									})
								)).geometry.deleteAttribute('normal'),
								o.geometry.deleteAttribute('uv'),
								(o.onBeforeRender = function (t, e, n) {
									this.matrixWorld.copyPosition(n.matrixWorld);
								}),
								Object.defineProperty(o.material, 'envMap', {
									get: function () {
										return this.uniforms.envMap.value;
									},
								}),
								r.update(o)),
						  v.isWebGLCubeRenderTarget && (v = v.texture),
						  (o.material.uniforms.envMap.value = v),
						  (o.material.uniforms.flipEnvMap.value =
								v.isCubeTexture && v._needsFlipEnvMap ? -1 : 1),
						  (u === v && h === v.version && d === t.toneMapping) ||
								((o.material.needsUpdate = !0),
								(u = v),
								(h = v.version),
								(d = t.toneMapping)),
						  n.unshift(o, o.geometry, o.material, 0, 0, null))
						: v &&
						  v.isTexture &&
						  (void 0 === a &&
								((a = new Nn(
									new tr(2, 2),
									new Hn({
										name: 'BackgroundMaterial',
										uniforms: Gn(rr.background.uniforms),
										vertexShader: rr.background.vertexShader,
										fragmentShader: rr.background.fragmentShader,
										side: 0,
										depthTest: !1,
										depthWrite: !1,
										fog: !1,
									})
								)).geometry.deleteAttribute('normal'),
								Object.defineProperty(a.material, 'map', {
									get: function () {
										return this.uniforms.t2D.value;
									},
								}),
								r.update(a)),
						  (a.material.uniforms.t2D.value = v),
						  !0 === v.matrixAutoUpdate && v.updateMatrix(),
						  a.material.uniforms.uvTransform.value.copy(v.matrix),
						  (u === v && h === v.version && d === t.toneMapping) ||
								((a.material.needsUpdate = !0),
								(u = v),
								(h = v.version),
								(d = t.toneMapping)),
						  n.unshift(a, a.geometry, a.material, 0, 0, null));
			},
		};
	}
	function ar(t, e, n, r) {
		var i = t.getParameter(34921),
			a = r.isWebGL2 ? null : e.get('OES_vertex_array_object'),
			o = r.isWebGL2 || null !== a,
			s = {},
			c = d(null),
			l = c;
		function u(e) {
			return r.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e);
		}
		function h(e) {
			return r.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e);
		}
		function d(t) {
			for (var e = [], n = [], r = [], a = 0; a < i; a++)
				(e[a] = 0), (n[a] = 0), (r[a] = 0);
			return {
				geometry: null,
				program: null,
				wireframe: !1,
				newAttributes: e,
				enabledAttributes: n,
				attributeDivisors: r,
				object: t,
				attributes: {},
				index: null,
			};
		}
		function p() {
			for (var t = l.newAttributes, e = 0, n = t.length; e < n; e++) t[e] = 0;
		}
		function f(t) {
			m(t, 0);
		}
		function m(n, i) {
			var a = l.newAttributes,
				o = l.enabledAttributes,
				s = l.attributeDivisors;
			((a[n] = 1),
			0 === o[n] && (t.enableVertexAttribArray(n), (o[n] = 1)),
			s[n] !== i) &&
				((r.isWebGL2 ? t : e.get('ANGLE_instanced_arrays'))[
					r.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
				](n, i),
				(s[n] = i));
		}
		function v() {
			for (
				var e = l.newAttributes, n = l.enabledAttributes, r = 0, i = n.length;
				r < i;
				r++
			)
				n[r] !== e[r] && (t.disableVertexAttribArray(r), (n[r] = 0));
		}
		function g(e, n, i, a, o, s) {
			!0 !== r.isWebGL2 || (5124 !== i && 5125 !== i)
				? t.vertexAttribPointer(e, n, i, a, o, s)
				: t.vertexAttribIPointer(e, n, i, o, s);
		}
		function y() {
			x(), l !== c && u((l = c).object);
		}
		function x() {
			(c.geometry = null), (c.program = null), (c.wireframe = !1);
		}
		return {
			setup: function (i, c, h, y, x) {
				var _ = !1;
				if (o) {
					var b = (function (e, n, i) {
						var o = !0 === i.wireframe,
							c = s[e.id];
						void 0 === c && ((c = {}), (s[e.id] = c));
						var l = c[n.id];
						void 0 === l && ((l = {}), (c[n.id] = l));
						var u = l[o];
						void 0 === u &&
							((u = d(
								r.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()
							)),
							(l[o] = u));
						return u;
					})(y, h, c);
					l !== b && u((l = b).object),
						(_ = (function (t, e) {
							var n = l.attributes,
								r = t.attributes;
							if (Object.keys(n).length !== Object.keys(r).length) return !0;
							for (var i in r) {
								var a = n[i],
									o = r[i];
								if (void 0 === a) return !0;
								if (a.attribute !== o) return !0;
								if (a.data !== o.data) return !0;
							}
							return l.index !== e;
						})(y, x)) &&
							(function (t, e) {
								var n = {},
									r = t.attributes;
								for (var i in r) {
									var a = r[i],
										o = {};
									(o.attribute = a), a.data && (o.data = a.data), (n[i] = o);
								}
								(l.attributes = n), (l.index = e);
							})(y, x);
				} else {
					var w = !0 === c.wireframe;
					(l.geometry === y.id && l.program === h.id && l.wireframe === w) ||
						((l.geometry = y.id),
						(l.program = h.id),
						(l.wireframe = w),
						(_ = !0));
				}
				!0 === i.isInstancedMesh && (_ = !0),
					null !== x && n.update(x, 34963),
					_ &&
						(!(function (i, a, o, s) {
							if (
								!1 === r.isWebGL2 &&
								(i.isInstancedMesh || s.isInstancedBufferGeometry) &&
								null === e.get('ANGLE_instanced_arrays')
							)
								return;
							p();
							var c = s.attributes,
								l = o.getAttributes(),
								u = a.defaultAttributeValues;
							for (var h in l) {
								var d = l[h];
								if (d >= 0) {
									var y = c[h];
									if (void 0 !== y) {
										var x = y.normalized,
											_ = y.itemSize,
											b = n.get(y);
										if (void 0 === b) continue;
										var w = b.buffer,
											M = b.type,
											S = b.bytesPerElement;
										if (y.isInterleavedBufferAttribute) {
											var T = y.data,
												E = T.stride,
												A = y.offset;
											T && T.isInstancedInterleavedBuffer
												? (m(d, T.meshPerAttribute),
												  void 0 === s._maxInstanceCount &&
														(s._maxInstanceCount =
															T.meshPerAttribute * T.count))
												: f(d),
												t.bindBuffer(34962, w),
												g(d, _, M, x, E * S, A * S);
										} else
											y.isInstancedBufferAttribute
												? (m(d, y.meshPerAttribute),
												  void 0 === s._maxInstanceCount &&
														(s._maxInstanceCount =
															y.meshPerAttribute * y.count))
												: f(d),
												t.bindBuffer(34962, w),
												g(d, _, M, x, 0, 0);
									} else if ('instanceMatrix' === h) {
										var L = n.get(i.instanceMatrix);
										if (void 0 === L) continue;
										var R = L.buffer,
											C = L.type;
										m(d + 0, 1),
											m(d + 1, 1),
											m(d + 2, 1),
											m(d + 3, 1),
											t.bindBuffer(34962, R),
											t.vertexAttribPointer(d + 0, 4, C, !1, 64, 0),
											t.vertexAttribPointer(d + 1, 4, C, !1, 64, 16),
											t.vertexAttribPointer(d + 2, 4, C, !1, 64, 32),
											t.vertexAttribPointer(d + 3, 4, C, !1, 64, 48);
									} else if ('instanceColor' === h) {
										var P = n.get(i.instanceColor);
										if (void 0 === P) continue;
										var I = P.buffer,
											D = P.type;
										m(d, 1),
											t.bindBuffer(34962, I),
											t.vertexAttribPointer(d, 3, D, !1, 12, 0);
									} else if (void 0 !== u) {
										var N = u[h];
										if (void 0 !== N)
											switch (N.length) {
												case 2:
													t.vertexAttrib2fv(d, N);
													break;
												case 3:
													t.vertexAttrib3fv(d, N);
													break;
												case 4:
													t.vertexAttrib4fv(d, N);
													break;
												default:
													t.vertexAttrib1fv(d, N);
											}
									}
								}
							}
							v();
						})(i, c, h, y),
						null !== x && t.bindBuffer(34963, n.get(x).buffer));
			},
			reset: y,
			resetDefaultState: x,
			dispose: function () {
				for (var t in (y(), s)) {
					var e = s[t];
					for (var n in e) {
						var r = e[n];
						for (var i in r) h(r[i].object), delete r[i];
						delete e[n];
					}
					delete s[t];
				}
			},
			releaseStatesOfGeometry: function (t) {
				if (void 0 !== s[t.id]) {
					var e = s[t.id];
					for (var n in e) {
						var r = e[n];
						for (var i in r) h(r[i].object), delete r[i];
						delete e[n];
					}
					delete s[t.id];
				}
			},
			releaseStatesOfProgram: function (t) {
				for (var e in s) {
					var n = s[e];
					if (void 0 !== n[t.id]) {
						var r = n[t.id];
						for (var i in r) h(r[i].object), delete r[i];
						delete n[t.id];
					}
				}
			},
			initAttributes: p,
			enableAttribute: f,
			disableUnusedAttributes: v,
		};
	}
	function or(t, e, n, r) {
		var i,
			a = r.isWebGL2;
		(this.setMode = function (t) {
			i = t;
		}),
			(this.render = function (e, r) {
				t.drawArrays(i, e, r), n.update(r, i, 1);
			}),
			(this.renderInstances = function (r, o, s) {
				if (0 !== s) {
					var c, l;
					if (a) (c = t), (l = 'drawArraysInstanced');
					else if (
						((l = 'drawArraysInstancedANGLE'),
						null === (c = e.get('ANGLE_instanced_arrays')))
					)
						return void console.error(
							'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
						);
					c[l](i, r, o, s), n.update(o, i, s);
				}
			});
	}
	function sr(t, e, n) {
		var r;
		function i(e) {
			if ('highp' === e) {
				if (
					t.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
					t.getShaderPrecisionFormat(35632, 36338).precision > 0
				)
					return 'highp';
				e = 'mediump';
			}
			return 'mediump' === e &&
				t.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
				t.getShaderPrecisionFormat(35632, 36337).precision > 0
				? 'mediump'
				: 'lowp';
		}
		var a =
				('undefined' != typeof WebGL2RenderingContext &&
					t instanceof WebGL2RenderingContext) ||
				('undefined' != typeof WebGL2ComputeRenderingContext &&
					t instanceof WebGL2ComputeRenderingContext),
			o = void 0 !== n.precision ? n.precision : 'highp',
			s = i(o);
		s !== o &&
			(console.warn(
				'THREE.WebGLRenderer:',
				o,
				'not supported, using',
				s,
				'instead.'
			),
			(o = s));
		var c = !0 === n.logarithmicDepthBuffer,
			l = t.getParameter(34930),
			u = t.getParameter(35660),
			h = t.getParameter(3379),
			d = t.getParameter(34076),
			p = t.getParameter(34921),
			f = t.getParameter(36347),
			m = t.getParameter(36348),
			v = t.getParameter(36349),
			g = u > 0,
			y = a || !!e.get('OES_texture_float');
		return {
			isWebGL2: a,
			getMaxAnisotropy: function () {
				if (void 0 !== r) return r;
				var n = e.get('EXT_texture_filter_anisotropic');
				return (r =
					null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
			},
			getMaxPrecision: i,
			precision: o,
			logarithmicDepthBuffer: c,
			maxTextures: l,
			maxVertexTextures: u,
			maxTextureSize: h,
			maxCubemapSize: d,
			maxAttributes: p,
			maxVertexUniforms: f,
			maxVaryings: m,
			maxFragmentUniforms: v,
			vertexTextures: g,
			floatFragmentTextures: y,
			floatVertexTextures: g && y,
			maxSamples: a ? t.getParameter(36183) : 0,
		};
	}
	function cr(t) {
		var e = this,
			n = null,
			r = 0,
			i = !1,
			a = !1,
			o = new Te(),
			s = new ft(),
			c = { value: null, needsUpdate: !1 };
		function l() {
			c.value !== n && ((c.value = n), (c.needsUpdate = r > 0)),
				(e.numPlanes = r),
				(e.numIntersection = 0);
		}
		function u(t, n, r, i) {
			var a = null !== t ? t.length : 0,
				l = null;
			if (0 !== a) {
				if (((l = c.value), !0 !== i || null === l)) {
					var u = r + 4 * a,
						h = n.matrixWorldInverse;
					s.getNormalMatrix(h),
						(null === l || l.length < u) && (l = new Float32Array(u));
					for (var d = 0, p = r; d !== a; ++d, p += 4)
						o.copy(t[d]).applyMatrix4(h, s),
							o.normal.toArray(l, p),
							(l[p + 3] = o.constant);
				}
				(c.value = l), (c.needsUpdate = !0);
			}
			return (e.numPlanes = a), (e.numIntersection = 0), l;
		}
		(this.uniform = c),
			(this.numPlanes = 0),
			(this.numIntersection = 0),
			(this.init = function (t, e, a) {
				var o = 0 !== t.length || e || 0 !== r || i;
				return (i = e), (n = u(t, a, 0)), (r = t.length), o;
			}),
			(this.beginShadows = function () {
				(a = !0), u(null);
			}),
			(this.endShadows = function () {
				(a = !1), l();
			}),
			(this.setState = function (e, o, s) {
				var h = e.clippingPlanes,
					d = e.clipIntersection,
					p = e.clipShadows,
					f = t.get(e);
				if (!i || null === h || 0 === h.length || (a && !p)) a ? u(null) : l();
				else {
					var m = a ? 0 : r,
						v = 4 * m,
						g = f.clippingState || null;
					(c.value = g), (g = u(h, o, v, s));
					for (var y = 0; y !== v; ++y) g[y] = n[y];
					(f.clippingState = g),
						(this.numIntersection = d ? this.numPlanes : 0),
						(this.numPlanes += m);
				}
			});
	}
	function lr(t) {
		var e = new WeakMap();
		function n(t, e) {
			return e === a ? (t.mapping = r) : e === o && (t.mapping = i), t;
		}
		return {
			get: function (r) {
				if (r && r.isTexture) {
					var i = r.mapping;
					if (i === a || i === o) {
						if (e.has(r)) return n(e.get(r).texture, r.mapping);
						var s = r.image;
						if (s && s.height > 0) {
							var c = t.getRenderList(),
								l = t.getRenderTarget(),
								u = t.getRenderState(),
								h = new Xn(s.height / 2);
							return (
								h.fromEquirectangularTexture(t, r),
								e.set(r, h),
								t.setRenderTarget(l),
								t.setRenderList(c),
								t.setRenderState(u),
								n(h.texture, r.mapping)
							);
						}
						return null;
					}
				}
				return r;
			},
			dispose: function () {
				e = new WeakMap();
			},
		};
	}
	function ur(t) {
		var e = {};
		return {
			has: function (n) {
				if (void 0 !== e[n]) return null !== e[n];
				var r;
				switch (n) {
					case 'WEBGL_depth_texture':
						r =
							t.getExtension('WEBGL_depth_texture') ||
							t.getExtension('MOZ_WEBGL_depth_texture') ||
							t.getExtension('WEBKIT_WEBGL_depth_texture');
						break;
					case 'EXT_texture_filter_anisotropic':
						r =
							t.getExtension('EXT_texture_filter_anisotropic') ||
							t.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
							t.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
						break;
					case 'WEBGL_compressed_texture_s3tc':
						r =
							t.getExtension('WEBGL_compressed_texture_s3tc') ||
							t.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
							t.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
						break;
					case 'WEBGL_compressed_texture_pvrtc':
						r =
							t.getExtension('WEBGL_compressed_texture_pvrtc') ||
							t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
						break;
					default:
						r = t.getExtension(n);
				}
				return (e[n] = r), null !== r;
			},
			get: function (t) {
				return (
					this.has(t) ||
						console.warn(
							'THREE.WebGLRenderer: ' + t + ' extension not supported.'
						),
					e[t]
				);
			},
		};
	}
	function hr(t, e, n, r) {
		var i = new WeakMap(),
			a = new WeakMap();
		function o(t) {
			var s = t.target,
				c = i.get(s);
			for (var l in (null !== c.index && e.remove(c.index), c.attributes))
				e.remove(c.attributes[l]);
			s.removeEventListener('dispose', o), i.delete(s);
			var u = a.get(c);
			u && (e.remove(u), a.delete(c)),
				r.releaseStatesOfGeometry(s),
				!0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount,
				n.memory.geometries--;
		}
		function s(t) {
			var n = [],
				r = t.index,
				i = t.attributes.position,
				o = 0;
			if (null !== r) {
				var s = r.array;
				o = r.version;
				for (var c = 0, l = s.length; c < l; c += 3) {
					var u = s[c + 0],
						h = s[c + 1],
						d = s[c + 2];
					n.push(u, h, h, d, d, u);
				}
			} else {
				var p = i.array;
				o = i.version;
				for (var f = 0, m = p.length / 3 - 1; f < m; f += 3) {
					var v = f + 0,
						g = f + 1,
						y = f + 2;
					n.push(v, g, g, y, y, v);
				}
			}
			var x = new (cn(n) > 65535 ? rn : en)(n, 1);
			x.version = o;
			var _ = a.get(t);
			_ && e.remove(_), a.set(t, x);
		}
		return {
			get: function (t, e) {
				var r = i.get(e);
				return (
					r ||
					(e.addEventListener('dispose', o),
					e.isBufferGeometry
						? (r = e)
						: e.isGeometry &&
						  (void 0 === e._bufferGeometry &&
								(e._bufferGeometry = new vn().setFromObject(t)),
						  (r = e._bufferGeometry)),
					i.set(e, r),
					n.memory.geometries++,
					r)
				);
			},
			update: function (t) {
				var n = t.attributes;
				for (var r in n) e.update(n[r], 34962);
				var i = t.morphAttributes;
				for (var a in i)
					for (var o = i[a], s = 0, c = o.length; s < c; s++)
						e.update(o[s], 34962);
			},
			getWireframeAttribute: function (t) {
				var e = a.get(t);
				if (e) {
					var n = t.index;
					null !== n && e.version < n.version && s(t);
				} else s(t);
				return a.get(t);
			},
		};
	}
	function dr(t, e, n, r) {
		var i,
			a,
			o,
			s = r.isWebGL2;
		(this.setMode = function (t) {
			i = t;
		}),
			(this.setIndex = function (t) {
				(a = t.type), (o = t.bytesPerElement);
			}),
			(this.render = function (e, r) {
				t.drawElements(i, r, a, e * o), n.update(r, i, 1);
			}),
			(this.renderInstances = function (r, c, l) {
				if (0 !== l) {
					var u, h;
					if (s) (u = t), (h = 'drawElementsInstanced');
					else if (
						((h = 'drawElementsInstancedANGLE'),
						null === (u = e.get('ANGLE_instanced_arrays')))
					)
						return void console.error(
							'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.'
						);
					u[h](i, c, a, r * o, l), n.update(c, i, l);
				}
			});
	}
	function pr(t) {
		var e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
		return {
			memory: { geometries: 0, textures: 0 },
			render: e,
			programs: null,
			autoReset: !0,
			reset: function () {
				e.frame++,
					(e.calls = 0),
					(e.triangles = 0),
					(e.points = 0),
					(e.lines = 0);
			},
			update: function (t, n, r) {
				switch ((e.calls++, n)) {
					case 4:
						e.triangles += r * (t / 3);
						break;
					case 1:
						e.lines += r * (t / 2);
						break;
					case 3:
						e.lines += r * (t - 1);
						break;
					case 2:
						e.lines += r * t;
						break;
					case 0:
						e.points += r * t;
						break;
					default:
						console.error('THREE.WebGLInfo: Unknown draw mode:', n);
				}
			},
		};
	}
	function fr(t, e) {
		return t[0] - e[0];
	}
	function mr(t, e) {
		return Math.abs(e[1]) - Math.abs(t[1]);
	}
	function vr(t) {
		for (var e = {}, n = new Float32Array(8), r = [], i = 0; i < 8; i++)
			r[i] = [i, 0];
		return {
			update: function (i, a, o, s) {
				var c = i.morphTargetInfluences,
					l = void 0 === c ? 0 : c.length,
					u = e[a.id];
				if (void 0 === u) {
					u = [];
					for (var h = 0; h < l; h++) u[h] = [h, 0];
					e[a.id] = u;
				}
				for (var d = 0; d < l; d++) {
					var p = u[d];
					(p[0] = d), (p[1] = c[d]);
				}
				u.sort(mr);
				for (var f = 0; f < 8; f++)
					f < l && u[f][1]
						? ((r[f][0] = u[f][0]), (r[f][1] = u[f][1]))
						: ((r[f][0] = Number.MAX_SAFE_INTEGER), (r[f][1] = 0));
				r.sort(fr);
				for (
					var m = o.morphTargets && a.morphAttributes.position,
						v = o.morphNormals && a.morphAttributes.normal,
						g = 0,
						y = 0;
					y < 8;
					y++
				) {
					var x = r[y],
						_ = x[0],
						b = x[1];
					_ !== Number.MAX_SAFE_INTEGER && b
						? (m &&
								a.getAttribute('morphTarget' + y) !== m[_] &&
								a.setAttribute('morphTarget' + y, m[_]),
						  v &&
								a.getAttribute('morphNormal' + y) !== v[_] &&
								a.setAttribute('morphNormal' + y, v[_]),
						  (n[y] = b),
						  (g += b))
						: (m &&
								void 0 !== a.getAttribute('morphTarget' + y) &&
								a.deleteAttribute('morphTarget' + y),
						  v &&
								void 0 !== a.getAttribute('morphNormal' + y) &&
								a.deleteAttribute('morphNormal' + y),
						  (n[y] = 0));
				}
				var w = a.morphTargetsRelative ? 1 : 1 - g;
				s.getUniforms().setValue(t, 'morphTargetBaseInfluence', w),
					s.getUniforms().setValue(t, 'morphTargetInfluences', n);
			},
		};
	}
	function gr(t, e, n, r) {
		var i = new WeakMap();
		return {
			update: function (t) {
				var a = r.render.frame,
					o = t.geometry,
					s = e.get(t, o);
				return (
					i.get(s) !== a &&
						(o.isGeometry && s.updateFromObject(t), e.update(s), i.set(s, a)),
					t.isInstancedMesh &&
						(n.update(t.instanceMatrix, 34962),
						null !== t.instanceColor && n.update(t.instanceColor, 34962)),
					s
				);
			},
			dispose: function () {
				i = new WeakMap();
			},
		};
	}
	function yr(t, e, n, r) {
		gt.call(this, null),
			(this.image = {
				data: t || null,
				width: e || 1,
				height: n || 1,
				depth: r || 1,
			}),
			(this.magFilter = d),
			(this.minFilter = d),
			(this.wrapR = u),
			(this.generateMipmaps = !1),
			(this.flipY = !1),
			(this.needsUpdate = !0);
	}
	function xr(t, e, n, r) {
		gt.call(this, null),
			(this.image = {
				data: t || null,
				width: e || 1,
				height: n || 1,
				depth: r || 1,
			}),
			(this.magFilter = d),
			(this.minFilter = d),
			(this.wrapR = u),
			(this.generateMipmaps = !1),
			(this.flipY = !1),
			(this.needsUpdate = !0);
	}
	(rr.physical = {
		uniforms: Fn([
			rr.standard.uniforms,
			{
				clearcoat: { value: 0 },
				clearcoatMap: { value: null },
				clearcoatRoughness: { value: 0 },
				clearcoatRoughnessMap: { value: null },
				clearcoatNormalScale: { value: new pt(1, 1) },
				clearcoatNormalMap: { value: null },
				sheen: { value: new Ve(0) },
				transmission: { value: 0 },
				transmissionMap: { value: null },
			},
		]),
		vertexShader: er.meshphysical_vert,
		fragmentShader: er.meshphysical_frag,
	}),
		(yr.prototype = Object.create(gt.prototype)),
		(yr.prototype.constructor = yr),
		(yr.prototype.isDataTexture2DArray = !0),
		(xr.prototype = Object.create(gt.prototype)),
		(xr.prototype.constructor = xr),
		(xr.prototype.isDataTexture3D = !0);
	var _r = new gt(),
		br = new yr(),
		wr = new xr(),
		Mr = new qn(),
		Sr = [],
		Tr = [],
		Er = new Float32Array(16),
		Ar = new Float32Array(9),
		Lr = new Float32Array(4);
	function Rr(t, e, n) {
		var r = t[0];
		if (r <= 0 || r > 0) return t;
		var i = e * n,
			a = Sr[i];
		if ((void 0 === a && ((a = new Float32Array(i)), (Sr[i] = a)), 0 !== e)) {
			r.toArray(a, 0);
			for (var o = 1, s = 0; o !== e; ++o) (s += n), t[o].toArray(a, s);
		}
		return a;
	}
	function Cr(t, e) {
		if (t.length !== e.length) return !1;
		for (var n = 0, r = t.length; n < r; n++) if (t[n] !== e[n]) return !1;
		return !0;
	}
	function Pr(t, e) {
		for (var n = 0, r = e.length; n < r; n++) t[n] = e[n];
	}
	function Ir(t, e) {
		var n = Tr[e];
		void 0 === n && ((n = new Int32Array(e)), (Tr[e] = n));
		for (var r = 0; r !== e; ++r) n[r] = t.allocateTextureUnit();
		return n;
	}
	function Dr(t, e) {
		var n = this.cache;
		n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
	}
	function Nr(t, e) {
		var n = this.cache;
		if (void 0 !== e.x)
			(n[0] === e.x && n[1] === e.y) ||
				(t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
		else {
			if (Cr(n, e)) return;
			t.uniform2fv(this.addr, e), Pr(n, e);
		}
	}
	function Or(t, e) {
		var n = this.cache;
		if (void 0 !== e.x)
			(n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
				(t.uniform3f(this.addr, e.x, e.y, e.z),
				(n[0] = e.x),
				(n[1] = e.y),
				(n[2] = e.z));
		else if (void 0 !== e.r)
			(n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
				(t.uniform3f(this.addr, e.r, e.g, e.b),
				(n[0] = e.r),
				(n[1] = e.g),
				(n[2] = e.b));
		else {
			if (Cr(n, e)) return;
			t.uniform3fv(this.addr, e), Pr(n, e);
		}
	}
	function Br(t, e) {
		var n = this.cache;
		if (void 0 !== e.x)
			(n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
				(t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
				(n[0] = e.x),
				(n[1] = e.y),
				(n[2] = e.z),
				(n[3] = e.w));
		else {
			if (Cr(n, e)) return;
			t.uniform4fv(this.addr, e), Pr(n, e);
		}
	}
	function zr(t, e) {
		var n = this.cache,
			r = e.elements;
		if (void 0 === r) {
			if (Cr(n, e)) return;
			t.uniformMatrix2fv(this.addr, !1, e), Pr(n, e);
		} else {
			if (Cr(n, r)) return;
			Lr.set(r), t.uniformMatrix2fv(this.addr, !1, Lr), Pr(n, r);
		}
	}
	function Gr(t, e) {
		var n = this.cache,
			r = e.elements;
		if (void 0 === r) {
			if (Cr(n, e)) return;
			t.uniformMatrix3fv(this.addr, !1, e), Pr(n, e);
		} else {
			if (Cr(n, r)) return;
			Ar.set(r), t.uniformMatrix3fv(this.addr, !1, Ar), Pr(n, r);
		}
	}
	function Fr(t, e) {
		var n = this.cache,
			r = e.elements;
		if (void 0 === r) {
			if (Cr(n, e)) return;
			t.uniformMatrix4fv(this.addr, !1, e), Pr(n, e);
		} else {
			if (Cr(n, r)) return;
			Er.set(r), t.uniformMatrix4fv(this.addr, !1, Er), Pr(n, r);
		}
	}
	function Ur(t, e, n) {
		var r = this.cache,
			i = n.allocateTextureUnit();
		r[0] !== i && (t.uniform1i(this.addr, i), (r[0] = i)),
			n.safeSetTexture2D(e || _r, i);
	}
	function Hr(t, e, n) {
		var r = this.cache,
			i = n.allocateTextureUnit();
		r[0] !== i && (t.uniform1i(this.addr, i), (r[0] = i)),
			n.setTexture2DArray(e || br, i);
	}
	function kr(t, e, n) {
		var r = this.cache,
			i = n.allocateTextureUnit();
		r[0] !== i && (t.uniform1i(this.addr, i), (r[0] = i)),
			n.setTexture3D(e || wr, i);
	}
	function Vr(t, e, n) {
		var r = this.cache,
			i = n.allocateTextureUnit();
		r[0] !== i && (t.uniform1i(this.addr, i), (r[0] = i)),
			n.safeSetTextureCube(e || Mr, i);
	}
	function Wr(t, e) {
		var n = this.cache;
		n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
	}
	function jr(t, e) {
		var n = this.cache;
		Cr(n, e) || (t.uniform2iv(this.addr, e), Pr(n, e));
	}
	function qr(t, e) {
		var n = this.cache;
		Cr(n, e) || (t.uniform3iv(this.addr, e), Pr(n, e));
	}
	function Xr(t, e) {
		var n = this.cache;
		Cr(n, e) || (t.uniform4iv(this.addr, e), Pr(n, e));
	}
	function Yr(t, e) {
		var n = this.cache;
		n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
	}
	function Zr(t, e) {
		t.uniform1fv(this.addr, e);
	}
	function Jr(t, e) {
		t.uniform1iv(this.addr, e);
	}
	function Qr(t, e) {
		t.uniform2iv(this.addr, e);
	}
	function Kr(t, e) {
		t.uniform3iv(this.addr, e);
	}
	function $r(t, e) {
		t.uniform4iv(this.addr, e);
	}
	function ti(t, e) {
		var n = Rr(e, this.size, 2);
		t.uniform2fv(this.addr, n);
	}
	function ei(t, e) {
		var n = Rr(e, this.size, 3);
		t.uniform3fv(this.addr, n);
	}
	function ni(t, e) {
		var n = Rr(e, this.size, 4);
		t.uniform4fv(this.addr, n);
	}
	function ri(t, e) {
		var n = Rr(e, this.size, 4);
		t.uniformMatrix2fv(this.addr, !1, n);
	}
	function ii(t, e) {
		var n = Rr(e, this.size, 9);
		t.uniformMatrix3fv(this.addr, !1, n);
	}
	function ai(t, e) {
		var n = Rr(e, this.size, 16);
		t.uniformMatrix4fv(this.addr, !1, n);
	}
	function oi(t, e, n) {
		var r = e.length,
			i = Ir(n, r);
		t.uniform1iv(this.addr, i);
		for (var a = 0; a !== r; ++a) n.safeSetTexture2D(e[a] || _r, i[a]);
	}
	function si(t, e, n) {
		var r = e.length,
			i = Ir(n, r);
		t.uniform1iv(this.addr, i);
		for (var a = 0; a !== r; ++a) n.safeSetTextureCube(e[a] || Mr, i[a]);
	}
	function ci(t, e, n) {
		(this.id = t),
			(this.addr = n),
			(this.cache = []),
			(this.setValue = (function (t) {
				switch (t) {
					case 5126:
						return Dr;
					case 35664:
						return Nr;
					case 35665:
						return Or;
					case 35666:
						return Br;
					case 35674:
						return zr;
					case 35675:
						return Gr;
					case 35676:
						return Fr;
					case 5124:
					case 35670:
						return Wr;
					case 35667:
					case 35671:
						return jr;
					case 35668:
					case 35672:
						return qr;
					case 35669:
					case 35673:
						return Xr;
					case 5125:
						return Yr;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return Ur;
					case 35679:
					case 36299:
					case 36307:
						return kr;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return Vr;
					case 36289:
					case 36303:
					case 36311:
					case 36292:
						return Hr;
				}
			})(e.type));
	}
	function li(t, e, n) {
		(this.id = t),
			(this.addr = n),
			(this.cache = []),
			(this.size = e.size),
			(this.setValue = (function (t) {
				switch (t) {
					case 5126:
						return Zr;
					case 35664:
						return ti;
					case 35665:
						return ei;
					case 35666:
						return ni;
					case 35674:
						return ri;
					case 35675:
						return ii;
					case 35676:
						return ai;
					case 5124:
					case 35670:
						return Jr;
					case 35667:
					case 35671:
						return Qr;
					case 35668:
					case 35672:
						return Kr;
					case 35669:
					case 35673:
						return $r;
					case 35678:
					case 36198:
					case 36298:
					case 36306:
					case 35682:
						return oi;
					case 35680:
					case 36300:
					case 36308:
					case 36293:
						return si;
				}
			})(e.type));
	}
	function ui(t) {
		(this.id = t), (this.seq = []), (this.map = {});
	}
	(li.prototype.updateCache = function (t) {
		var e = this.cache;
		t instanceof Float32Array &&
			e.length !== t.length &&
			(this.cache = new Float32Array(t.length)),
			Pr(e, t);
	}),
		(ui.prototype.setValue = function (t, e, n) {
			for (var r = this.seq, i = 0, a = r.length; i !== a; ++i) {
				var o = r[i];
				o.setValue(t, e[o.id], n);
			}
		});
	var hi = /([\w\d_]+)(\])?(\[|\.)?/g;
	function di(t, e) {
		t.seq.push(e), (t.map[e.id] = e);
	}
	function pi(t, e, n) {
		var r = t.name,
			i = r.length;
		for (hi.lastIndex = 0; ; ) {
			var a = hi.exec(r),
				o = hi.lastIndex,
				s = a[1],
				c = ']' === a[2],
				l = a[3];
			if ((c && (s |= 0), void 0 === l || ('[' === l && o + 2 === i))) {
				di(n, void 0 === l ? new ci(s, t, e) : new li(s, t, e));
				break;
			}
			var u = n.map[s];
			void 0 === u && di(n, (u = new ui(s))), (n = u);
		}
	}
	function fi(t, e) {
		(this.seq = []), (this.map = {});
		for (var n = t.getProgramParameter(e, 35718), r = 0; r < n; ++r) {
			var i = t.getActiveUniform(e, r);
			pi(i, t.getUniformLocation(e, i.name), this);
		}
	}
	function mi(t, e, n) {
		var r = t.createShader(e);
		return t.shaderSource(r, n), t.compileShader(r), r;
	}
	(fi.prototype.setValue = function (t, e, n, r) {
		var i = this.map[e];
		void 0 !== i && i.setValue(t, n, r);
	}),
		(fi.prototype.setOptional = function (t, e, n) {
			var r = e[n];
			void 0 !== r && this.setValue(t, n, r);
		}),
		(fi.upload = function (t, e, n, r) {
			for (var i = 0, a = e.length; i !== a; ++i) {
				var o = e[i],
					s = n[o.id];
				!1 !== s.needsUpdate && o.setValue(t, s.value, r);
			}
		}),
		(fi.seqWithValue = function (t, e) {
			for (var n = [], r = 0, i = t.length; r !== i; ++r) {
				var a = t[r];
				a.id in e && n.push(a);
			}
			return n;
		});
	var vi = 0;
	function gi(t) {
		switch (t) {
			case q:
				return ['Linear', '( value )'];
			case X:
				return ['sRGB', '( value )'];
			case Z:
				return ['RGBE', '( value )'];
			case J:
				return ['RGBM', '( value, 7.0 )'];
			case Q:
				return ['RGBM', '( value, 16.0 )'];
			case K:
				return ['RGBD', '( value, 256.0 )'];
			case Y:
				return ['Gamma', '( value, float( GAMMA_FACTOR ) )'];
			case 3003:
				return ['LogLuv', '( value )'];
			default:
				return (
					console.warn('THREE.WebGLProgram: Unsupported encoding:', t),
					['Linear', '( value )']
				);
		}
	}
	function yi(t, e, n) {
		var r = t.getShaderParameter(e, 35713),
			i = t.getShaderInfoLog(e).trim();
		return r && '' === i
			? ''
			: 'THREE.WebGLShader: gl.getShaderInfoLog() ' +
					n +
					'\n' +
					i +
					(function (t) {
						for (var e = t.split('\n'), n = 0; n < e.length; n++)
							e[n] = n + 1 + ': ' + e[n];
						return e.join('\n');
					})(t.getShaderSource(e));
	}
	function xi(t, e) {
		var n = gi(e);
		return (
			'vec4 ' +
			t +
			'( vec4 value ) { return ' +
			n[0] +
			'ToLinear' +
			n[1] +
			'; }'
		);
	}
	function _i(t, e) {
		var n;
		switch (e) {
			case 1:
				n = 'Linear';
				break;
			case 2:
				n = 'Reinhard';
				break;
			case 3:
				n = 'OptimizedCineon';
				break;
			case 4:
				n = 'ACESFilmic';
				break;
			case 5:
				n = 'Custom';
				break;
			default:
				console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e),
					(n = 'Linear');
		}
		return (
			'vec3 ' + t + '( vec3 color ) { return ' + n + 'ToneMapping( color ); }'
		);
	}
	function bi(t) {
		return '' !== t;
	}
	function wi(t, e) {
		return t
			.replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
			.replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
			.replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
			.replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
			.replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
			.replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
			.replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
			.replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
	}
	function Mi(t, e) {
		return t
			.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
			.replace(
				/UNION_CLIPPING_PLANES/g,
				e.numClippingPlanes - e.numClipIntersection
			);
	}
	var Si = /^[ \t]*#include +<([\w\d./]+)>/gm;
	function Ti(t) {
		return t.replace(Si, Ei);
	}
	function Ei(t, e) {
		var n = er[e];
		if (void 0 === n) throw new Error('Can not resolve #include <' + e + '>');
		return Ti(n);
	}
	var Ai =
			/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
		Li =
			/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
	function Ri(t) {
		return t.replace(Li, Pi).replace(Ai, Ci);
	}
	function Ci(t, e, n, r) {
		return (
			console.warn(
				'WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.'
			),
			Pi(t, e, n, r)
		);
	}
	function Pi(t, e, n, r) {
		for (var i = '', a = parseInt(e); a < parseInt(n); a++)
			i += r
				.replace(/\[\s*i\s*\]/g, '[ ' + a + ' ]')
				.replace(/UNROLLED_LOOP_INDEX/g, a);
		return i;
	}
	function Ii(t) {
		var e =
			'precision ' +
			t.precision +
			' float;\nprecision ' +
			t.precision +
			' int;';
		return (
			'highp' === t.precision
				? (e += '\n#define HIGH_PRECISION')
				: 'mediump' === t.precision
				? (e += '\n#define MEDIUM_PRECISION')
				: 'lowp' === t.precision && (e += '\n#define LOW_PRECISION'),
			e
		);
	}
	function Di(t, e, n, a) {
		var o,
			l,
			u,
			h,
			d,
			p = t.getContext(),
			f = n.defines,
			m = n.vertexShader,
			v = n.fragmentShader,
			g = (function (t) {
				var e = 'SHADOWMAP_TYPE_BASIC';
				return (
					1 === t.shadowMapType
						? (e = 'SHADOWMAP_TYPE_PCF')
						: 2 === t.shadowMapType
						? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
						: 3 === t.shadowMapType && (e = 'SHADOWMAP_TYPE_VSM'),
					e
				);
			})(n),
			y = (function (t) {
				var e = 'ENVMAP_TYPE_CUBE';
				if (t.envMap)
					switch (t.envMapMode) {
						case r:
						case i:
							e = 'ENVMAP_TYPE_CUBE';
							break;
						case s:
						case c:
							e = 'ENVMAP_TYPE_CUBE_UV';
					}
				return e;
			})(n),
			x = (function (t) {
				var e = 'ENVMAP_MODE_REFLECTION';
				if (t.envMap)
					switch (t.envMapMode) {
						case i:
						case c:
							e = 'ENVMAP_MODE_REFRACTION';
					}
				return e;
			})(n),
			_ = (function (t) {
				var e = 'ENVMAP_BLENDING_NONE';
				if (t.envMap)
					switch (t.combine) {
						case 0:
							e = 'ENVMAP_BLENDING_MULTIPLY';
							break;
						case 1:
							e = 'ENVMAP_BLENDING_MIX';
							break;
						case 2:
							e = 'ENVMAP_BLENDING_ADD';
					}
				return e;
			})(n),
			b = t.gammaFactor > 0 ? t.gammaFactor : 1,
			w = n.isWebGL2
				? ''
				: (function (t) {
						return [
							t.extensionDerivatives ||
							t.envMapCubeUV ||
							t.bumpMap ||
							t.tangentSpaceNormalMap ||
							t.clearcoatNormalMap ||
							t.flatShading ||
							'physical' === t.shaderID
								? '#extension GL_OES_standard_derivatives : enable'
								: '',
							(t.extensionFragDepth || t.logarithmicDepthBuffer) &&
							t.rendererExtensionFragDepth
								? '#extension GL_EXT_frag_depth : enable'
								: '',
							t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
								? '#extension GL_EXT_draw_buffers : require'
								: '',
							(t.extensionShaderTextureLOD || t.envMap) &&
							t.rendererExtensionShaderTextureLod
								? '#extension GL_EXT_shader_texture_lod : enable'
								: '',
						]
							.filter(bi)
							.join('\n');
				  })(n),
			M = (function (t) {
				var e = [];
				for (var n in t) {
					var r = t[n];
					!1 !== r && e.push('#define ' + n + ' ' + r);
				}
				return e.join('\n');
			})(f),
			S = p.createProgram(),
			T = n.glslVersion ? '#version ' + n.glslVersion + '\n' : '';
		n.isRawShaderMaterial
			? ((o = [M].filter(bi).join('\n')).length > 0 && (o += '\n'),
			  (l = [w, M].filter(bi).join('\n')).length > 0 && (l += '\n'))
			: ((o = [
					Ii(n),
					'#define SHADER_NAME ' + n.shaderName,
					M,
					n.instancing ? '#define USE_INSTANCING' : '',
					n.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
					n.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
					'#define GAMMA_FACTOR ' + b,
					'#define MAX_BONES ' + n.maxBones,
					n.useFog && n.fog ? '#define USE_FOG' : '',
					n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
					n.map ? '#define USE_MAP' : '',
					n.envMap ? '#define USE_ENVMAP' : '',
					n.envMap ? '#define ' + x : '',
					n.lightMap ? '#define USE_LIGHTMAP' : '',
					n.aoMap ? '#define USE_AOMAP' : '',
					n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
					n.bumpMap ? '#define USE_BUMPMAP' : '',
					n.normalMap ? '#define USE_NORMALMAP' : '',
					n.normalMap && n.objectSpaceNormalMap
						? '#define OBJECTSPACE_NORMALMAP'
						: '',
					n.normalMap && n.tangentSpaceNormalMap
						? '#define TANGENTSPACE_NORMALMAP'
						: '',
					n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
					n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
					n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
					n.displacementMap && n.supportsVertexTextures
						? '#define USE_DISPLACEMENTMAP'
						: '',
					n.specularMap ? '#define USE_SPECULARMAP' : '',
					n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
					n.metalnessMap ? '#define USE_METALNESSMAP' : '',
					n.alphaMap ? '#define USE_ALPHAMAP' : '',
					n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
					n.vertexTangents ? '#define USE_TANGENT' : '',
					n.vertexColors ? '#define USE_COLOR' : '',
					n.vertexUvs ? '#define USE_UV' : '',
					n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
					n.flatShading ? '#define FLAT_SHADED' : '',
					n.skinning ? '#define USE_SKINNING' : '',
					n.useVertexTexture ? '#define BONE_TEXTURE' : '',
					n.morphTargets ? '#define USE_MORPHTARGETS' : '',
					n.morphNormals && !1 === n.flatShading
						? '#define USE_MORPHNORMALS'
						: '',
					n.doubleSided ? '#define DOUBLE_SIDED' : '',
					n.flipSided ? '#define FLIP_SIDED' : '',
					n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
					n.shadowMapEnabled ? '#define ' + g : '',
					n.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
					n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
					n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
						? '#define USE_LOGDEPTHBUF_EXT'
						: '',
					'uniform mat4 modelMatrix;',
					'uniform mat4 modelViewMatrix;',
					'uniform mat4 projectionMatrix;',
					'uniform mat4 viewMatrix;',
					'uniform mat3 normalMatrix;',
					'uniform vec3 cameraPosition;',
					'uniform bool isOrthographic;',
					'#ifdef USE_INSTANCING',
					'\tattribute mat4 instanceMatrix;',
					'#endif',
					'#ifdef USE_INSTANCING_COLOR',
					'\tattribute vec3 instanceColor;',
					'#endif',
					'attribute vec3 position;',
					'attribute vec3 normal;',
					'attribute vec2 uv;',
					'#ifdef USE_TANGENT',
					'\tattribute vec4 tangent;',
					'#endif',
					'#ifdef USE_COLOR',
					'\tattribute vec3 color;',
					'#endif',
					'#ifdef USE_MORPHTARGETS',
					'\tattribute vec3 morphTarget0;',
					'\tattribute vec3 morphTarget1;',
					'\tattribute vec3 morphTarget2;',
					'\tattribute vec3 morphTarget3;',
					'\t#ifdef USE_MORPHNORMALS',
					'\t\tattribute vec3 morphNormal0;',
					'\t\tattribute vec3 morphNormal1;',
					'\t\tattribute vec3 morphNormal2;',
					'\t\tattribute vec3 morphNormal3;',
					'\t#else',
					'\t\tattribute vec3 morphTarget4;',
					'\t\tattribute vec3 morphTarget5;',
					'\t\tattribute vec3 morphTarget6;',
					'\t\tattribute vec3 morphTarget7;',
					'\t#endif',
					'#endif',
					'#ifdef USE_SKINNING',
					'\tattribute vec4 skinIndex;',
					'\tattribute vec4 skinWeight;',
					'#endif',
					'\n',
			  ]
					.filter(bi)
					.join('\n')),
			  (l = [
					w,
					Ii(n),
					'#define SHADER_NAME ' + n.shaderName,
					M,
					n.alphaTest
						? '#define ALPHATEST ' + n.alphaTest + (n.alphaTest % 1 ? '' : '.0')
						: '',
					'#define GAMMA_FACTOR ' + b,
					n.useFog && n.fog ? '#define USE_FOG' : '',
					n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
					n.map ? '#define USE_MAP' : '',
					n.matcap ? '#define USE_MATCAP' : '',
					n.envMap ? '#define USE_ENVMAP' : '',
					n.envMap ? '#define ' + y : '',
					n.envMap ? '#define ' + x : '',
					n.envMap ? '#define ' + _ : '',
					n.lightMap ? '#define USE_LIGHTMAP' : '',
					n.aoMap ? '#define USE_AOMAP' : '',
					n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
					n.bumpMap ? '#define USE_BUMPMAP' : '',
					n.normalMap ? '#define USE_NORMALMAP' : '',
					n.normalMap && n.objectSpaceNormalMap
						? '#define OBJECTSPACE_NORMALMAP'
						: '',
					n.normalMap && n.tangentSpaceNormalMap
						? '#define TANGENTSPACE_NORMALMAP'
						: '',
					n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
					n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
					n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
					n.specularMap ? '#define USE_SPECULARMAP' : '',
					n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
					n.metalnessMap ? '#define USE_METALNESSMAP' : '',
					n.alphaMap ? '#define USE_ALPHAMAP' : '',
					n.sheen ? '#define USE_SHEEN' : '',
					n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
					n.vertexTangents ? '#define USE_TANGENT' : '',
					n.vertexColors || n.instancingColor ? '#define USE_COLOR' : '',
					n.vertexUvs ? '#define USE_UV' : '',
					n.uvsVertexOnly ? '#define UVS_VERTEX_ONLY' : '',
					n.gradientMap ? '#define USE_GRADIENTMAP' : '',
					n.flatShading ? '#define FLAT_SHADED' : '',
					n.doubleSided ? '#define DOUBLE_SIDED' : '',
					n.flipSided ? '#define FLIP_SIDED' : '',
					n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
					n.shadowMapEnabled ? '#define ' + g : '',
					n.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
					n.physicallyCorrectLights ? '#define PHYSICALLY_CORRECT_LIGHTS' : '',
					n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
					n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
						? '#define USE_LOGDEPTHBUF_EXT'
						: '',
					(n.extensionShaderTextureLOD || n.envMap) &&
					n.rendererExtensionShaderTextureLod
						? '#define TEXTURE_LOD_EXT'
						: '',
					'uniform mat4 viewMatrix;',
					'uniform vec3 cameraPosition;',
					'uniform bool isOrthographic;',
					0 !== n.toneMapping ? '#define TONE_MAPPING' : '',
					0 !== n.toneMapping ? er.tonemapping_pars_fragment : '',
					0 !== n.toneMapping ? _i('toneMapping', n.toneMapping) : '',
					n.dithering ? '#define DITHERING' : '',
					er.encodings_pars_fragment,
					n.map ? xi('mapTexelToLinear', n.mapEncoding) : '',
					n.matcap ? xi('matcapTexelToLinear', n.matcapEncoding) : '',
					n.envMap ? xi('envMapTexelToLinear', n.envMapEncoding) : '',
					n.emissiveMap
						? xi('emissiveMapTexelToLinear', n.emissiveMapEncoding)
						: '',
					n.lightMap ? xi('lightMapTexelToLinear', n.lightMapEncoding) : '',
					((u = 'linearToOutputTexel'),
					(h = n.outputEncoding),
					(d = gi(h)),
					'vec4 ' +
						u +
						'( vec4 value ) { return LinearTo' +
						d[0] +
						d[1] +
						'; }'),
					n.depthPacking ? '#define DEPTH_PACKING ' + n.depthPacking : '',
					'\n',
			  ]
					.filter(bi)
					.join('\n'))),
			(m = Mi((m = wi((m = Ti(m)), n)), n)),
			(v = Mi((v = wi((v = Ti(v)), n)), n)),
			(m = Ri(m)),
			(v = Ri(v)),
			n.isWebGL2 &&
				!0 !== n.isRawShaderMaterial &&
				((T = '#version 300 es\n'),
				(o =
					[
						'#define attribute in',
						'#define varying out',
						'#define texture2D texture',
					].join('\n') +
					'\n' +
					o),
				(l =
					[
						'#define varying in',
						n.glslVersion === nt ? '' : 'out highp vec4 pc_fragColor;',
						n.glslVersion === nt ? '' : '#define gl_FragColor pc_fragColor',
						'#define gl_FragDepthEXT gl_FragDepth',
						'#define texture2D texture',
						'#define textureCube texture',
						'#define texture2DProj textureProj',
						'#define texture2DLodEXT textureLod',
						'#define texture2DProjLodEXT textureProjLod',
						'#define textureCubeLodEXT textureLod',
						'#define texture2DGradEXT textureGrad',
						'#define texture2DProjGradEXT textureProjGrad',
						'#define textureCubeGradEXT textureGrad',
					].join('\n') +
					'\n' +
					l));
		var E,
			A,
			L = T + l + v,
			R = mi(p, 35633, T + o + m),
			C = mi(p, 35632, L);
		if (
			(p.attachShader(S, R),
			p.attachShader(S, C),
			void 0 !== n.index0AttributeName
				? p.bindAttribLocation(S, 0, n.index0AttributeName)
				: !0 === n.morphTargets && p.bindAttribLocation(S, 0, 'position'),
			p.linkProgram(S),
			t.debug.checkShaderErrors)
		) {
			var P = p.getProgramInfoLog(S).trim(),
				I = p.getShaderInfoLog(R).trim(),
				D = p.getShaderInfoLog(C).trim(),
				N = !0,
				O = !0;
			if (!1 === p.getProgramParameter(S, 35714)) {
				N = !1;
				var B = yi(p, R, 'vertex'),
					z = yi(p, C, 'fragment');
				console.error(
					'THREE.WebGLProgram: shader error: ',
					p.getError(),
					'35715',
					p.getProgramParameter(S, 35715),
					'gl.getProgramInfoLog',
					P,
					B,
					z
				);
			} else
				'' !== P
					? console.warn('THREE.WebGLProgram: gl.getProgramInfoLog()', P)
					: ('' !== I && '' !== D) || (O = !1);
			O &&
				(this.diagnostics = {
					runnable: N,
					programLog: P,
					vertexShader: { log: I, prefix: o },
					fragmentShader: { log: D, prefix: l },
				});
		}
		return (
			p.deleteShader(R),
			p.deleteShader(C),
			(this.getUniforms = function () {
				return void 0 === E && (E = new fi(p, S)), E;
			}),
			(this.getAttributes = function () {
				return (
					void 0 === A &&
						(A = (function (t, e) {
							for (
								var n = {}, r = t.getProgramParameter(e, 35721), i = 0;
								i < r;
								i++
							) {
								var a = t.getActiveAttrib(e, i).name;
								n[a] = t.getAttribLocation(e, a);
							}
							return n;
						})(p, S)),
					A
				);
			}),
			(this.destroy = function () {
				a.releaseStatesOfProgram(this),
					p.deleteProgram(S),
					(this.program = void 0);
			}),
			(this.name = n.shaderName),
			(this.id = vi++),
			(this.cacheKey = e),
			(this.usedTimes = 1),
			(this.program = S),
			(this.vertexShader = R),
			(this.fragmentShader = C),
			this
		);
	}
	function Ni(t, e, n, r, i, a) {
		var o = [],
			l = r.isWebGL2,
			u = r.logarithmicDepthBuffer,
			h = r.floatVertexTextures,
			d = r.maxVertexUniforms,
			p = r.vertexTextures,
			f = r.precision,
			m = {
				MeshDepthMaterial: 'depth',
				MeshDistanceMaterial: 'distanceRGBA',
				MeshNormalMaterial: 'normal',
				MeshBasicMaterial: 'basic',
				MeshLambertMaterial: 'lambert',
				MeshPhongMaterial: 'phong',
				MeshToonMaterial: 'toon',
				MeshStandardMaterial: 'physical',
				MeshPhysicalMaterial: 'physical',
				MeshMatcapMaterial: 'matcap',
				LineBasicMaterial: 'basic',
				LineDashedMaterial: 'dashed',
				PointsMaterial: 'points',
				ShadowMaterial: 'shadow',
				SpriteMaterial: 'sprite',
			},
			v = [
				'precision',
				'isWebGL2',
				'supportsVertexTextures',
				'outputEncoding',
				'instancing',
				'instancingColor',
				'map',
				'mapEncoding',
				'matcap',
				'matcapEncoding',
				'envMap',
				'envMapMode',
				'envMapEncoding',
				'envMapCubeUV',
				'lightMap',
				'lightMapEncoding',
				'aoMap',
				'emissiveMap',
				'emissiveMapEncoding',
				'bumpMap',
				'normalMap',
				'objectSpaceNormalMap',
				'tangentSpaceNormalMap',
				'clearcoatMap',
				'clearcoatRoughnessMap',
				'clearcoatNormalMap',
				'displacementMap',
				'specularMap',
				'roughnessMap',
				'metalnessMap',
				'gradientMap',
				'alphaMap',
				'combine',
				'vertexColors',
				'vertexTangents',
				'vertexUvs',
				'uvsVertexOnly',
				'fog',
				'useFog',
				'fogExp2',
				'flatShading',
				'sizeAttenuation',
				'logarithmicDepthBuffer',
				'skinning',
				'maxBones',
				'useVertexTexture',
				'morphTargets',
				'morphNormals',
				'maxMorphTargets',
				'maxMorphNormals',
				'premultipliedAlpha',
				'numDirLights',
				'numPointLights',
				'numSpotLights',
				'numHemiLights',
				'numRectAreaLights',
				'numDirLightShadows',
				'numPointLightShadows',
				'numSpotLightShadows',
				'shadowMapEnabled',
				'shadowMapType',
				'toneMapping',
				'physicallyCorrectLights',
				'alphaTest',
				'doubleSided',
				'flipSided',
				'numClippingPlanes',
				'numClipIntersection',
				'depthPacking',
				'dithering',
				'sheen',
				'transmissionMap',
			];
		function g(t) {
			var e;
			return (
				t
					? t.isTexture
						? (e = t.encoding)
						: t.isWebGLRenderTarget &&
						  (console.warn(
								"THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."
						  ),
						  (e = t.texture.encoding))
					: (e = q),
				e
			);
		}
		return {
			getParameters: function (i, o, v, y, x) {
				var _,
					b,
					w = y.fog,
					M = i.isMeshStandardMaterial ? y.environment : null,
					S = e.get(i.envMap || M),
					T = m[i.type],
					E = x.isSkinnedMesh
						? (function (t) {
								var e = t.skeleton.bones;
								if (h) return 1024;
								var n = d,
									r = Math.floor((n - 20) / 4),
									i = Math.min(r, e.length);
								return i < e.length
									? (console.warn(
											'THREE.WebGLRenderer: Skeleton has ' +
												e.length +
												' bones. This GPU supports ' +
												i +
												'.'
									  ),
									  0)
									: i;
						  })(x)
						: 0;
				if (
					(null !== i.precision &&
						(f = r.getMaxPrecision(i.precision)) !== i.precision &&
						console.warn(
							'THREE.WebGLProgram.getParameters:',
							i.precision,
							'not supported, using',
							f,
							'instead.'
						),
					T)
				) {
					var A = rr[T];
					(_ = A.vertexShader), (b = A.fragmentShader);
				} else (_ = i.vertexShader), (b = i.fragmentShader);
				var L = t.getRenderTarget();
				return {
					isWebGL2: l,
					shaderID: T,
					shaderName: i.type,
					vertexShader: _,
					fragmentShader: b,
					defines: i.defines,
					isRawShaderMaterial: !0 === i.isRawShaderMaterial,
					glslVersion: i.glslVersion,
					precision: f,
					instancing: !0 === x.isInstancedMesh,
					instancingColor: !0 === x.isInstancedMesh && null !== x.instanceColor,
					supportsVertexTextures: p,
					outputEncoding: null !== L ? g(L.texture) : t.outputEncoding,
					map: !!i.map,
					mapEncoding: g(i.map),
					matcap: !!i.matcap,
					matcapEncoding: g(i.matcap),
					envMap: !!S,
					envMapMode: S && S.mapping,
					envMapEncoding: g(S),
					envMapCubeUV: !!S && (S.mapping === s || S.mapping === c),
					lightMap: !!i.lightMap,
					lightMapEncoding: g(i.lightMap),
					aoMap: !!i.aoMap,
					emissiveMap: !!i.emissiveMap,
					emissiveMapEncoding: g(i.emissiveMap),
					bumpMap: !!i.bumpMap,
					normalMap: !!i.normalMap,
					objectSpaceNormalMap: 1 === i.normalMapType,
					tangentSpaceNormalMap: 0 === i.normalMapType,
					clearcoatMap: !!i.clearcoatMap,
					clearcoatRoughnessMap: !!i.clearcoatRoughnessMap,
					clearcoatNormalMap: !!i.clearcoatNormalMap,
					displacementMap: !!i.displacementMap,
					roughnessMap: !!i.roughnessMap,
					metalnessMap: !!i.metalnessMap,
					specularMap: !!i.specularMap,
					alphaMap: !!i.alphaMap,
					gradientMap: !!i.gradientMap,
					sheen: !!i.sheen,
					transmissionMap: !!i.transmissionMap,
					combine: i.combine,
					vertexTangents: i.normalMap && i.vertexTangents,
					vertexColors: i.vertexColors,
					vertexUvs: !!(
						i.map ||
						i.bumpMap ||
						i.normalMap ||
						i.specularMap ||
						i.alphaMap ||
						i.emissiveMap ||
						i.roughnessMap ||
						i.metalnessMap ||
						i.clearcoatMap ||
						i.clearcoatRoughnessMap ||
						i.clearcoatNormalMap ||
						i.displacementMap ||
						i.transmissionMap
					),
					uvsVertexOnly: !(
						i.map ||
						i.bumpMap ||
						i.normalMap ||
						i.specularMap ||
						i.alphaMap ||
						i.emissiveMap ||
						i.roughnessMap ||
						i.metalnessMap ||
						i.clearcoatNormalMap ||
						i.transmissionMap ||
						!i.displacementMap
					),
					fog: !!w,
					useFog: i.fog,
					fogExp2: w && w.isFogExp2,
					flatShading: i.flatShading,
					sizeAttenuation: i.sizeAttenuation,
					logarithmicDepthBuffer: u,
					skinning: i.skinning && E > 0,
					maxBones: E,
					useVertexTexture: h,
					morphTargets: i.morphTargets,
					morphNormals: i.morphNormals,
					maxMorphTargets: t.maxMorphTargets,
					maxMorphNormals: t.maxMorphNormals,
					numDirLights: o.directional.length,
					numPointLights: o.point.length,
					numSpotLights: o.spot.length,
					numRectAreaLights: o.rectArea.length,
					numHemiLights: o.hemi.length,
					numDirLightShadows: o.directionalShadowMap.length,
					numPointLightShadows: o.pointShadowMap.length,
					numSpotLightShadows: o.spotShadowMap.length,
					numClippingPlanes: a.numPlanes,
					numClipIntersection: a.numIntersection,
					dithering: i.dithering,
					shadowMapEnabled: t.shadowMap.enabled && v.length > 0,
					shadowMapType: t.shadowMap.type,
					toneMapping: i.toneMapped ? t.toneMapping : 0,
					physicallyCorrectLights: t.physicallyCorrectLights,
					premultipliedAlpha: i.premultipliedAlpha,
					alphaTest: i.alphaTest,
					doubleSided: 2 === i.side,
					flipSided: 1 === i.side,
					depthPacking: void 0 !== i.depthPacking && i.depthPacking,
					index0AttributeName: i.index0AttributeName,
					extensionDerivatives: i.extensions && i.extensions.derivatives,
					extensionFragDepth: i.extensions && i.extensions.fragDepth,
					extensionDrawBuffers: i.extensions && i.extensions.drawBuffers,
					extensionShaderTextureLOD:
						i.extensions && i.extensions.shaderTextureLOD,
					rendererExtensionFragDepth: l || n.has('EXT_frag_depth'),
					rendererExtensionDrawBuffers: l || n.has('WEBGL_draw_buffers'),
					rendererExtensionShaderTextureLod:
						l || n.has('EXT_shader_texture_lod'),
					customProgramCacheKey: i.customProgramCacheKey(),
				};
			},
			getProgramCacheKey: function (e) {
				var n = [];
				if (
					(e.shaderID
						? n.push(e.shaderID)
						: (n.push(e.fragmentShader), n.push(e.vertexShader)),
					void 0 !== e.defines)
				)
					for (var r in e.defines) n.push(r), n.push(e.defines[r]);
				if (!1 === e.isRawShaderMaterial) {
					for (var i = 0; i < v.length; i++) n.push(e[v[i]]);
					n.push(t.outputEncoding), n.push(t.gammaFactor);
				}
				return n.push(e.customProgramCacheKey), n.join();
			},
			getUniforms: function (t) {
				var e,
					n = m[t.type];
				if (n) {
					var r = rr[n];
					e = Un.clone(r.uniforms);
				} else e = t.uniforms;
				return e;
			},
			acquireProgram: function (e, n) {
				for (var r, a = 0, s = o.length; a < s; a++) {
					var c = o[a];
					if (c.cacheKey === n) {
						++(r = c).usedTimes;
						break;
					}
				}
				return void 0 === r && ((r = new Di(t, n, e, i)), o.push(r)), r;
			},
			releaseProgram: function (t) {
				if (0 == --t.usedTimes) {
					var e = o.indexOf(t);
					(o[e] = o[o.length - 1]), o.pop(), t.destroy();
				}
			},
			programs: o,
		};
	}
	function Oi() {
		var t = new WeakMap();
		return {
			get: function (e) {
				var n = t.get(e);
				return void 0 === n && ((n = {}), t.set(e, n)), n;
			},
			remove: function (e) {
				t.delete(e);
			},
			update: function (e, n, r) {
				t.get(e)[n] = r;
			},
			dispose: function () {
				t = new WeakMap();
			},
		};
	}
	function Bi(t, e) {
		return t.groupOrder !== e.groupOrder
			? t.groupOrder - e.groupOrder
			: t.renderOrder !== e.renderOrder
			? t.renderOrder - e.renderOrder
			: t.program !== e.program
			? t.program.id - e.program.id
			: t.material.id !== e.material.id
			? t.material.id - e.material.id
			: t.z !== e.z
			? t.z - e.z
			: t.id - e.id;
	}
	function zi(t, e) {
		return t.groupOrder !== e.groupOrder
			? t.groupOrder - e.groupOrder
			: t.renderOrder !== e.renderOrder
			? t.renderOrder - e.renderOrder
			: t.z !== e.z
			? e.z - t.z
			: t.id - e.id;
	}
	function Gi(t) {
		var e = [],
			n = 0,
			r = [],
			i = [],
			a = { id: -1 };
		function o(r, i, o, s, c, l) {
			var u = e[n],
				h = t.get(o);
			return (
				void 0 === u
					? ((u = {
							id: r.id,
							object: r,
							geometry: i,
							material: o,
							program: h.program || a,
							groupOrder: s,
							renderOrder: r.renderOrder,
							z: c,
							group: l,
					  }),
					  (e[n] = u))
					: ((u.id = r.id),
					  (u.object = r),
					  (u.geometry = i),
					  (u.material = o),
					  (u.program = h.program || a),
					  (u.groupOrder = s),
					  (u.renderOrder = r.renderOrder),
					  (u.z = c),
					  (u.group = l)),
				n++,
				u
			);
		}
		return {
			opaque: r,
			transparent: i,
			init: function () {
				(n = 0), (r.length = 0), (i.length = 0);
			},
			push: function (t, e, n, a, s, c) {
				var l = o(t, e, n, a, s, c);
				(!0 === n.transparent ? i : r).push(l);
			},
			unshift: function (t, e, n, a, s, c) {
				var l = o(t, e, n, a, s, c);
				(!0 === n.transparent ? i : r).unshift(l);
			},
			finish: function () {
				for (var t = n, r = e.length; t < r; t++) {
					var i = e[t];
					if (null === i.id) break;
					(i.id = null),
						(i.object = null),
						(i.geometry = null),
						(i.material = null),
						(i.program = null),
						(i.group = null);
				}
			},
			sort: function (t, e) {
				r.length > 1 && r.sort(t || Bi), i.length > 1 && i.sort(e || zi);
			},
		};
	}
	function Fi(t) {
		var e = new WeakMap();
		return {
			get: function (n, r) {
				var i,
					a = e.get(n);
				return (
					void 0 === a
						? ((i = new Gi(t)), e.set(n, new WeakMap()), e.get(n).set(r, i))
						: void 0 === (i = a.get(r)) && ((i = new Gi(t)), a.set(r, i)),
					i
				);
			},
			dispose: function () {
				e = new WeakMap();
			},
		};
	}
	function Ui() {
		var t = {};
		return {
			get: function (e) {
				if (void 0 !== t[e.id]) return t[e.id];
				var n;
				switch (e.type) {
					case 'DirectionalLight':
						n = { direction: new wt(), color: new Ve() };
						break;
					case 'SpotLight':
						n = {
							position: new wt(),
							direction: new wt(),
							color: new Ve(),
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0,
						};
						break;
					case 'PointLight':
						n = { position: new wt(), color: new Ve(), distance: 0, decay: 0 };
						break;
					case 'HemisphereLight':
						n = {
							direction: new wt(),
							skyColor: new Ve(),
							groundColor: new Ve(),
						};
						break;
					case 'RectAreaLight':
						n = {
							color: new Ve(),
							position: new wt(),
							halfWidth: new wt(),
							halfHeight: new wt(),
						};
				}
				return (t[e.id] = n), n;
			},
		};
	}
	var Hi = 0;
	function ki(t, e) {
		return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0);
	}
	function Vi() {
		for (
			var t,
				e = new Ui(),
				n =
					((t = {}),
					{
						get: function (e) {
							if (void 0 !== t[e.id]) return t[e.id];
							var n;
							switch (e.type) {
								case 'DirectionalLight':
								case 'SpotLight':
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new pt(),
									};
									break;
								case 'PointLight':
									n = {
										shadowBias: 0,
										shadowNormalBias: 0,
										shadowRadius: 1,
										shadowMapSize: new pt(),
										shadowCameraNear: 1,
										shadowCameraFar: 1e3,
									};
							}
							return (t[e.id] = n), n;
						},
					}),
				r = {
					version: 0,
					hash: {
						directionalLength: -1,
						pointLength: -1,
						spotLength: -1,
						rectAreaLength: -1,
						hemiLength: -1,
						numDirectionalShadows: -1,
						numPointShadows: -1,
						numSpotShadows: -1,
					},
					ambient: [0, 0, 0],
					probe: [],
					directional: [],
					directionalShadow: [],
					directionalShadowMap: [],
					directionalShadowMatrix: [],
					spot: [],
					spotShadow: [],
					spotShadowMap: [],
					spotShadowMatrix: [],
					rectArea: [],
					rectAreaLTC1: null,
					rectAreaLTC2: null,
					point: [],
					pointShadow: [],
					pointShadowMap: [],
					pointShadowMatrix: [],
					hemi: [],
				},
				i = 0;
			i < 9;
			i++
		)
			r.probe.push(new wt());
		var a = new wt(),
			o = new Jt(),
			s = new Jt();
		return {
			setup: function (t, i, c) {
				for (var l = 0, u = 0, h = 0, d = 0; d < 9; d++)
					r.probe[d].set(0, 0, 0);
				var p = 0,
					f = 0,
					m = 0,
					v = 0,
					g = 0,
					y = 0,
					x = 0,
					_ = 0,
					b = c.matrixWorldInverse;
				t.sort(ki);
				for (var w = 0, M = t.length; w < M; w++) {
					var S = t[w],
						T = S.color,
						E = S.intensity,
						A = S.distance,
						L = S.shadow && S.shadow.map ? S.shadow.map.texture : null;
					if (S.isAmbientLight) (l += T.r * E), (u += T.g * E), (h += T.b * E);
					else if (S.isLightProbe)
						for (var R = 0; R < 9; R++)
							r.probe[R].addScaledVector(S.sh.coefficients[R], E);
					else if (S.isDirectionalLight) {
						var C = e.get(S);
						if (
							(C.color.copy(S.color).multiplyScalar(S.intensity),
							C.direction.setFromMatrixPosition(S.matrixWorld),
							a.setFromMatrixPosition(S.target.matrixWorld),
							C.direction.sub(a),
							C.direction.transformDirection(b),
							S.castShadow)
						) {
							var P = S.shadow,
								I = n.get(S);
							(I.shadowBias = P.bias),
								(I.shadowNormalBias = P.normalBias),
								(I.shadowRadius = P.radius),
								(I.shadowMapSize = P.mapSize),
								(r.directionalShadow[p] = I),
								(r.directionalShadowMap[p] = L),
								(r.directionalShadowMatrix[p] = S.shadow.matrix),
								y++;
						}
						(r.directional[p] = C), p++;
					} else if (S.isSpotLight) {
						var D = e.get(S);
						if (
							(D.position.setFromMatrixPosition(S.matrixWorld),
							D.position.applyMatrix4(b),
							D.color.copy(T).multiplyScalar(E),
							(D.distance = A),
							D.direction.setFromMatrixPosition(S.matrixWorld),
							a.setFromMatrixPosition(S.target.matrixWorld),
							D.direction.sub(a),
							D.direction.transformDirection(b),
							(D.coneCos = Math.cos(S.angle)),
							(D.penumbraCos = Math.cos(S.angle * (1 - S.penumbra))),
							(D.decay = S.decay),
							S.castShadow)
						) {
							var N = S.shadow,
								O = n.get(S);
							(O.shadowBias = N.bias),
								(O.shadowNormalBias = N.normalBias),
								(O.shadowRadius = N.radius),
								(O.shadowMapSize = N.mapSize),
								(r.spotShadow[m] = O),
								(r.spotShadowMap[m] = L),
								(r.spotShadowMatrix[m] = S.shadow.matrix),
								_++;
						}
						(r.spot[m] = D), m++;
					} else if (S.isRectAreaLight) {
						var B = e.get(S);
						B.color.copy(T).multiplyScalar(E),
							B.position.setFromMatrixPosition(S.matrixWorld),
							B.position.applyMatrix4(b),
							s.identity(),
							o.copy(S.matrixWorld),
							o.premultiply(b),
							s.extractRotation(o),
							B.halfWidth.set(0.5 * S.width, 0, 0),
							B.halfHeight.set(0, 0.5 * S.height, 0),
							B.halfWidth.applyMatrix4(s),
							B.halfHeight.applyMatrix4(s),
							(r.rectArea[v] = B),
							v++;
					} else if (S.isPointLight) {
						var z = e.get(S);
						if (
							(z.position.setFromMatrixPosition(S.matrixWorld),
							z.position.applyMatrix4(b),
							z.color.copy(S.color).multiplyScalar(S.intensity),
							(z.distance = S.distance),
							(z.decay = S.decay),
							S.castShadow)
						) {
							var G = S.shadow,
								F = n.get(S);
							(F.shadowBias = G.bias),
								(F.shadowNormalBias = G.normalBias),
								(F.shadowRadius = G.radius),
								(F.shadowMapSize = G.mapSize),
								(F.shadowCameraNear = G.camera.near),
								(F.shadowCameraFar = G.camera.far),
								(r.pointShadow[f] = F),
								(r.pointShadowMap[f] = L),
								(r.pointShadowMatrix[f] = S.shadow.matrix),
								x++;
						}
						(r.point[f] = z), f++;
					} else if (S.isHemisphereLight) {
						var U = e.get(S);
						U.direction.setFromMatrixPosition(S.matrixWorld),
							U.direction.transformDirection(b),
							U.direction.normalize(),
							U.skyColor.copy(S.color).multiplyScalar(E),
							U.groundColor.copy(S.groundColor).multiplyScalar(E),
							(r.hemi[g] = U),
							g++;
					}
				}
				v > 0 && ((r.rectAreaLTC1 = nr.LTC_1), (r.rectAreaLTC2 = nr.LTC_2)),
					(r.ambient[0] = l),
					(r.ambient[1] = u),
					(r.ambient[2] = h);
				var H = r.hash;
				(H.directionalLength === p &&
					H.pointLength === f &&
					H.spotLength === m &&
					H.rectAreaLength === v &&
					H.hemiLength === g &&
					H.numDirectionalShadows === y &&
					H.numPointShadows === x &&
					H.numSpotShadows === _) ||
					((r.directional.length = p),
					(r.spot.length = m),
					(r.rectArea.length = v),
					(r.point.length = f),
					(r.hemi.length = g),
					(r.directionalShadow.length = y),
					(r.directionalShadowMap.length = y),
					(r.pointShadow.length = x),
					(r.pointShadowMap.length = x),
					(r.spotShadow.length = _),
					(r.spotShadowMap.length = _),
					(r.directionalShadowMatrix.length = y),
					(r.pointShadowMatrix.length = x),
					(r.spotShadowMatrix.length = _),
					(H.directionalLength = p),
					(H.pointLength = f),
					(H.spotLength = m),
					(H.rectAreaLength = v),
					(H.hemiLength = g),
					(H.numDirectionalShadows = y),
					(H.numPointShadows = x),
					(H.numSpotShadows = _),
					(r.version = Hi++));
			},
			state: r,
		};
	}
	function Wi() {
		var t = new Vi(),
			e = [],
			n = [];
		return {
			init: function () {
				(e.length = 0), (n.length = 0);
			},
			state: { lightsArray: e, shadowsArray: n, lights: t },
			setupLights: function (r) {
				t.setup(e, n, r);
			},
			pushLight: function (t) {
				e.push(t);
			},
			pushShadow: function (t) {
				n.push(t);
			},
		};
	}
	function ji() {
		var t = new WeakMap();
		return {
			get: function (e, n) {
				var r;
				return (
					!1 === t.has(e)
						? ((r = new Wi()), t.set(e, new WeakMap()), t.get(e).set(n, r))
						: !1 === t.get(e).has(n)
						? ((r = new Wi()), t.get(e).set(n, r))
						: (r = t.get(e).get(n)),
					r
				);
			},
			dispose: function () {
				t = new WeakMap();
			},
		};
	}
	function qi(t) {
		qe.call(this),
			(this.type = 'MeshDepthMaterial'),
			(this.depthPacking = 3200),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.map = null),
			(this.alphaMap = null),
			(this.displacementMap = null),
			(this.displacementScale = 1),
			(this.displacementBias = 0),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.fog = !1),
			this.setValues(t);
	}
	function Xi(t) {
		qe.call(this),
			(this.type = 'MeshDistanceMaterial'),
			(this.referencePosition = new wt()),
			(this.nearDistance = 1),
			(this.farDistance = 1e3),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.map = null),
			(this.alphaMap = null),
			(this.displacementMap = null),
			(this.displacementScale = 1),
			(this.displacementBias = 0),
			(this.fog = !1),
			this.setValues(t);
	}
	(qi.prototype = Object.create(qe.prototype)),
		(qi.prototype.constructor = qi),
		(qi.prototype.isMeshDepthMaterial = !0),
		(qi.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				(this.depthPacking = t.depthPacking),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				this
			);
		}),
		(Xi.prototype = Object.create(qe.prototype)),
		(Xi.prototype.constructor = Xi),
		(Xi.prototype.isMeshDistanceMaterial = !0),
		(Xi.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.referencePosition.copy(t.referencePosition),
				(this.nearDistance = t.nearDistance),
				(this.farDistance = t.farDistance),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				this
			);
		});
	function Yi(t, e, n) {
		var r = new Qn(),
			i = new pt(),
			a = new pt(),
			o = new yt(),
			s = [],
			c = [],
			l = {},
			u = { 0: 1, 1: 0, 2: 2 },
			h = new Hn({
				defines: { SAMPLE_RATE: 2 / 8, HALF_SAMPLE_RATE: 1 / 8 },
				uniforms: {
					shadow_pass: { value: null },
					resolution: { value: new pt() },
					radius: { value: 4 },
				},
				vertexShader:
					'void main() {\n\tgl_Position = vec4( position, 1.0 );\n}',
				fragmentShader:
					'uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}',
			}),
			p = h.clone();
		p.defines.HORIZONAL_PASS = 1;
		var f = new vn();
		f.setAttribute(
			'position',
			new Je(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
		);
		var v = new Nn(f, h),
			g = this;
		function y(n, r) {
			var i = e.update(v);
			(h.uniforms.shadow_pass.value = n.map.texture),
				(h.uniforms.resolution.value = n.mapSize),
				(h.uniforms.radius.value = n.radius),
				t.setRenderTarget(n.mapPass),
				t.clear(),
				t.renderBufferDirect(r, null, i, h, v, null),
				(p.uniforms.shadow_pass.value = n.mapPass.texture),
				(p.uniforms.resolution.value = n.mapSize),
				(p.uniforms.radius.value = n.radius),
				t.setRenderTarget(n.map),
				t.clear(),
				t.renderBufferDirect(r, null, i, p, v, null);
		}
		function x(t, e, n) {
			var r = (t << 0) | (e << 1) | (n << 2),
				i = s[r];
			return (
				void 0 === i &&
					((i = new qi({ depthPacking: 3201, morphTargets: t, skinning: e })),
					(s[r] = i)),
				i
			);
		}
		function _(t, e, n) {
			var r = (t << 0) | (e << 1) | (n << 2),
				i = c[r];
			return (
				void 0 === i &&
					((i = new Xi({ morphTargets: t, skinning: e })), (c[r] = i)),
				i
			);
		}
		function b(e, n, r, i, a, o, s) {
			var c = null,
				h = x,
				d = e.customDepthMaterial;
			if (
				(!0 === i.isPointLight && ((h = _), (d = e.customDistanceMaterial)),
				void 0 === d)
			) {
				var p = !1;
				!0 === r.morphTargets &&
					(p =
						n.morphAttributes &&
						n.morphAttributes.position &&
						n.morphAttributes.position.length > 0);
				var f = !1;
				!0 === e.isSkinnedMesh &&
					(!0 === r.skinning
						? (f = !0)
						: console.warn(
								'THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:',
								e
						  )),
					(c = h(p, f, !0 === e.isInstancedMesh));
			} else c = d;
			if (
				t.localClippingEnabled &&
				!0 === r.clipShadows &&
				0 !== r.clippingPlanes.length
			) {
				var m = c.uuid,
					v = r.uuid,
					g = l[m];
				void 0 === g && ((g = {}), (l[m] = g));
				var y = g[v];
				void 0 === y && ((y = c.clone()), (g[v] = y)), (c = y);
			}
			return (
				(c.visible = r.visible),
				(c.wireframe = r.wireframe),
				(c.side =
					3 === s
						? null !== r.shadowSide
							? r.shadowSide
							: r.side
						: null !== r.shadowSide
						? r.shadowSide
						: u[r.side]),
				(c.clipShadows = r.clipShadows),
				(c.clippingPlanes = r.clippingPlanes),
				(c.clipIntersection = r.clipIntersection),
				(c.wireframeLinewidth = r.wireframeLinewidth),
				(c.linewidth = r.linewidth),
				!0 === i.isPointLight &&
					!0 === c.isMeshDistanceMaterial &&
					(c.referencePosition.setFromMatrixPosition(i.matrixWorld),
					(c.nearDistance = a),
					(c.farDistance = o)),
				c
			);
		}
		function w(n, i, a, o, s) {
			if (!1 !== n.visible) {
				if (
					n.layers.test(i.layers) &&
					(n.isMesh || n.isLine || n.isPoints) &&
					(n.castShadow || (n.receiveShadow && 3 === s)) &&
					(!n.frustumCulled || r.intersectsObject(n))
				) {
					n.modelViewMatrix.multiplyMatrices(
						a.matrixWorldInverse,
						n.matrixWorld
					);
					var c = e.update(n),
						l = n.material;
					if (Array.isArray(l))
						for (var u = c.groups, h = 0, d = u.length; h < d; h++) {
							var p = u[h],
								f = l[p.materialIndex];
							if (f && f.visible) {
								var m = b(n, c, f, o, a.near, a.far, s);
								t.renderBufferDirect(a, null, c, m, n, p);
							}
						}
					else if (l.visible) {
						var v = b(n, c, l, o, a.near, a.far, s);
						t.renderBufferDirect(a, null, c, v, n, null);
					}
				}
				for (var g = n.children, y = 0, x = g.length; y < x; y++)
					w(g[y], i, a, o, s);
			}
		}
		(this.enabled = !1),
			(this.autoUpdate = !0),
			(this.needsUpdate = !1),
			(this.type = 1),
			(this.render = function (e, s, c) {
				if (
					!1 !== g.enabled &&
					(!1 !== g.autoUpdate || !1 !== g.needsUpdate) &&
					0 !== e.length
				) {
					var l = t.getRenderTarget(),
						u = t.getActiveCubeFace(),
						h = t.getActiveMipmapLevel(),
						p = t.state;
					p.setBlending(0),
						p.buffers.color.setClear(1, 1, 1, 1),
						p.buffers.depth.setTest(!0),
						p.setScissorTest(!1);
					for (var f = 0, v = e.length; f < v; f++) {
						var x = e[f],
							_ = x.shadow;
						if (void 0 !== _) {
							if (!1 !== _.autoUpdate || !1 !== _.needsUpdate) {
								i.copy(_.mapSize);
								var b = _.getFrameExtents();
								if (
									(i.multiply(b),
									a.copy(_.mapSize),
									(i.x > n || i.y > n) &&
										(i.x > n &&
											((a.x = Math.floor(n / b.x)),
											(i.x = a.x * b.x),
											(_.mapSize.x = a.x)),
										i.y > n &&
											((a.y = Math.floor(n / b.y)),
											(i.y = a.y * b.y),
											(_.mapSize.y = a.y))),
									null === _.map && !_.isPointLightShadow && 3 === this.type)
								) {
									var M = { minFilter: m, magFilter: m, format: T };
									(_.map = new xt(i.x, i.y, M)),
										(_.map.texture.name = x.name + '.shadowMap'),
										(_.mapPass = new xt(i.x, i.y, M)),
										_.camera.updateProjectionMatrix();
								}
								if (null === _.map) {
									var S = { minFilter: d, magFilter: d, format: T };
									(_.map = new xt(i.x, i.y, S)),
										(_.map.texture.name = x.name + '.shadowMap'),
										_.camera.updateProjectionMatrix();
								}
								t.setRenderTarget(_.map), t.clear();
								for (var E = _.getViewportCount(), A = 0; A < E; A++) {
									var L = _.getViewport(A);
									o.set(a.x * L.x, a.y * L.y, a.x * L.z, a.y * L.w),
										p.viewport(o),
										_.updateMatrices(x, A),
										(r = _.getFrustum()),
										w(s, c, _.camera, x, this.type);
								}
								_.isPointLightShadow || 3 !== this.type || y(_, c),
									(_.needsUpdate = !1);
							}
						} else console.warn('THREE.WebGLShadowMap:', x, 'has no shadow.');
					}
					(g.needsUpdate = !1), t.setRenderTarget(l, u, h);
				}
			});
	}
	function Zi(t, n, r) {
		var i,
			a,
			o = r.isWebGL2;
		var s = new (function () {
				var e = !1,
					n = new yt(),
					r = null,
					i = new yt(0, 0, 0, 0);
				return {
					setMask: function (n) {
						r === n || e || (t.colorMask(n, n, n, n), (r = n));
					},
					setLocked: function (t) {
						e = t;
					},
					setClear: function (e, r, a, o, s) {
						!0 === s && ((e *= o), (r *= o), (a *= o)),
							n.set(e, r, a, o),
							!1 === i.equals(n) && (t.clearColor(e, r, a, o), i.copy(n));
					},
					reset: function () {
						(e = !1), (r = null), i.set(-1, 0, 0, 0);
					},
				};
			})(),
			c = new (function () {
				var e = !1,
					n = null,
					r = null,
					i = null;
				return {
					setTest: function (t) {
						t ? B(2929) : z(2929);
					},
					setMask: function (r) {
						n === r || e || (t.depthMask(r), (n = r));
					},
					setFunc: function (e) {
						if (r !== e) {
							if (e)
								switch (e) {
									case 0:
										t.depthFunc(512);
										break;
									case 1:
										t.depthFunc(519);
										break;
									case 2:
										t.depthFunc(513);
										break;
									case 3:
										t.depthFunc(515);
										break;
									case 4:
										t.depthFunc(514);
										break;
									case 5:
										t.depthFunc(518);
										break;
									case 6:
										t.depthFunc(516);
										break;
									case 7:
										t.depthFunc(517);
										break;
									default:
										t.depthFunc(515);
								}
							else t.depthFunc(515);
							r = e;
						}
					},
					setLocked: function (t) {
						e = t;
					},
					setClear: function (e) {
						i !== e && (t.clearDepth(e), (i = e));
					},
					reset: function () {
						(e = !1), (n = null), (r = null), (i = null);
					},
				};
			})(),
			l = new (function () {
				var e = !1,
					n = null,
					r = null,
					i = null,
					a = null,
					o = null,
					s = null,
					c = null,
					l = null;
				return {
					setTest: function (t) {
						e || (t ? B(2960) : z(2960));
					},
					setMask: function (r) {
						n === r || e || (t.stencilMask(r), (n = r));
					},
					setFunc: function (e, n, o) {
						(r === e && i === n && a === o) ||
							(t.stencilFunc(e, n, o), (r = e), (i = n), (a = o));
					},
					setOp: function (e, n, r) {
						(o === e && s === n && c === r) ||
							(t.stencilOp(e, n, r), (o = e), (s = n), (c = r));
					},
					setLocked: function (t) {
						e = t;
					},
					setClear: function (e) {
						l !== e && (t.clearStencil(e), (l = e));
					},
					reset: function () {
						(e = !1),
							(n = null),
							(r = null),
							(i = null),
							(a = null),
							(o = null),
							(s = null),
							(c = null),
							(l = null);
					},
				};
			})(),
			u = {},
			h = null,
			d = null,
			p = null,
			f = null,
			m = null,
			v = null,
			g = null,
			y = null,
			x = null,
			_ = !1,
			b = null,
			w = null,
			M = null,
			S = null,
			T = null,
			E = t.getParameter(35661),
			A = !1,
			L = 0,
			R = t.getParameter(7938);
		-1 !== R.indexOf('WebGL')
			? ((L = parseFloat(/^WebGL\ ([0-9])/.exec(R)[1])), (A = L >= 1))
			: -1 !== R.indexOf('OpenGL ES') &&
			  ((L = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(R)[1])), (A = L >= 2));
		var C = null,
			P = {},
			I = new yt(),
			D = new yt();
		function N(e, n, r) {
			var i = new Uint8Array(4),
				a = t.createTexture();
			t.bindTexture(e, a),
				t.texParameteri(e, 10241, 9728),
				t.texParameteri(e, 10240, 9728);
			for (var o = 0; o < r; o++)
				t.texImage2D(n + o, 0, 6408, 1, 1, 0, 6408, 5121, i);
			return a;
		}
		var O = {};
		function B(e) {
			!0 !== u[e] && (t.enable(e), (u[e] = !0));
		}
		function z(e) {
			!1 !== u[e] && (t.disable(e), (u[e] = !1));
		}
		(O[3553] = N(3553, 3553, 1)),
			(O[34067] = N(34067, 34069, 6)),
			s.setClear(0, 0, 0, 1),
			c.setClear(1),
			l.setClear(0),
			B(2929),
			c.setFunc(3),
			k(!1),
			V(1),
			B(2884),
			H(0);
		var G = (((i = {})[100] = 32774), (i[101] = 32778), (i[102] = 32779), i);
		if (o) (G[103] = 32775), (G[104] = 32776);
		else {
			var F = n.get('EXT_blend_minmax');
			null !== F && ((G[103] = F.MIN_EXT), (G[104] = F.MAX_EXT));
		}
		var U =
			(((a = {})[200] = 0),
			(a[201] = 1),
			(a[202] = 768),
			(a[204] = 770),
			(a[210] = 776),
			(a[208] = 774),
			(a[206] = 772),
			(a[203] = 769),
			(a[205] = 771),
			(a[209] = 775),
			(a[207] = 773),
			a);
		function H(n, r, i, a, o, s, c, l) {
			if (0 !== n) {
				if ((d || (B(3042), (d = !0)), 5 === n))
					(o = o || r),
						(s = s || i),
						(c = c || a),
						(r === f && o === g) ||
							(t.blendEquationSeparate(G[r], G[o]), (f = r), (g = o)),
						(i === m && a === v && s === y && c === x) ||
							(t.blendFuncSeparate(U[i], U[a], U[s], U[c]),
							(m = i),
							(v = a),
							(y = s),
							(x = c)),
						(p = n),
						(_ = null);
				else if (n !== p || l !== _) {
					if (
						((f === e && g === e) || (t.blendEquation(32774), (f = e), (g = e)),
						l)
					)
						switch (n) {
							case 1:
								t.blendFuncSeparate(1, 771, 1, 771);
								break;
							case 2:
								t.blendFunc(1, 1);
								break;
							case 3:
								t.blendFuncSeparate(0, 0, 769, 771);
								break;
							case 4:
								t.blendFuncSeparate(0, 768, 0, 770);
								break;
							default:
								console.error('THREE.WebGLState: Invalid blending: ', n);
						}
					else
						switch (n) {
							case 1:
								t.blendFuncSeparate(770, 771, 1, 771);
								break;
							case 2:
								t.blendFunc(770, 1);
								break;
							case 3:
								t.blendFunc(0, 769);
								break;
							case 4:
								t.blendFunc(0, 768);
								break;
							default:
								console.error('THREE.WebGLState: Invalid blending: ', n);
						}
					(m = null), (v = null), (y = null), (x = null), (p = n), (_ = l);
				}
			} else d && (z(3042), (d = !1));
		}
		function k(e) {
			b !== e && (e ? t.frontFace(2304) : t.frontFace(2305), (b = e));
		}
		function V(e) {
			0 !== e
				? (B(2884),
				  e !== w &&
						(1 === e
							? t.cullFace(1029)
							: 2 === e
							? t.cullFace(1028)
							: t.cullFace(1032)))
				: z(2884),
				(w = e);
		}
		function W(e, n, r) {
			e
				? (B(32823),
				  (S === n && T === r) || (t.polygonOffset(n, r), (S = n), (T = r)))
				: z(32823);
		}
		function j(e) {
			void 0 === e && (e = 33984 + E - 1),
				C !== e && (t.activeTexture(e), (C = e));
		}
		return {
			buffers: { color: s, depth: c, stencil: l },
			enable: B,
			disable: z,
			useProgram: function (e) {
				return h !== e && (t.useProgram(e), (h = e), !0);
			},
			setBlending: H,
			setMaterial: function (t, e) {
				2 === t.side ? z(2884) : B(2884);
				var n = 1 === t.side;
				e && (n = !n),
					k(n),
					1 === t.blending && !1 === t.transparent
						? H(0)
						: H(
								t.blending,
								t.blendEquation,
								t.blendSrc,
								t.blendDst,
								t.blendEquationAlpha,
								t.blendSrcAlpha,
								t.blendDstAlpha,
								t.premultipliedAlpha
						  ),
					c.setFunc(t.depthFunc),
					c.setTest(t.depthTest),
					c.setMask(t.depthWrite),
					s.setMask(t.colorWrite);
				var r = t.stencilWrite;
				l.setTest(r),
					r &&
						(l.setMask(t.stencilWriteMask),
						l.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
						l.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
					W(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits);
			},
			setFlipSided: k,
			setCullFace: V,
			setLineWidth: function (e) {
				e !== M && (A && t.lineWidth(e), (M = e));
			},
			setPolygonOffset: W,
			setScissorTest: function (t) {
				t ? B(3089) : z(3089);
			},
			activeTexture: j,
			bindTexture: function (e, n) {
				null === C && j();
				var r = P[C];
				void 0 === r && ((r = { type: void 0, texture: void 0 }), (P[C] = r)),
					(r.type === e && r.texture === n) ||
						(t.bindTexture(e, n || O[e]), (r.type = e), (r.texture = n));
			},
			unbindTexture: function () {
				var e = P[C];
				void 0 !== e &&
					void 0 !== e.type &&
					(t.bindTexture(e.type, null),
					(e.type = void 0),
					(e.texture = void 0));
			},
			compressedTexImage2D: function () {
				try {
					t.compressedTexImage2D.apply(t, arguments);
				} catch (t) {
					console.error('THREE.WebGLState:', t);
				}
			},
			texImage2D: function () {
				try {
					t.texImage2D.apply(t, arguments);
				} catch (t) {
					console.error('THREE.WebGLState:', t);
				}
			},
			texImage3D: function () {
				try {
					t.texImage3D.apply(t, arguments);
				} catch (t) {
					console.error('THREE.WebGLState:', t);
				}
			},
			scissor: function (e) {
				!1 === I.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), I.copy(e));
			},
			viewport: function (e) {
				!1 === D.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), D.copy(e));
			},
			reset: function () {
				(u = {}),
					(C = null),
					(P = {}),
					(h = null),
					(p = null),
					(b = null),
					(w = null),
					s.reset(),
					c.reset(),
					l.reset();
			},
		};
	}
	function Ji(t, e, n, r, i, a, o) {
		var s,
			c,
			l,
			h = i.isWebGL2,
			v = i.maxTextures,
			g = i.maxCubemapSize,
			y = i.maxTextureSize,
			L = i.maxSamples,
			R = new WeakMap(),
			C = !1;
		try {
			C =
				'undefined' != typeof OffscreenCanvas &&
				null !== new OffscreenCanvas(1, 1).getContext('2d');
		} catch (t) {}
		function P(t, e) {
			return C
				? new OffscreenCanvas(t, e)
				: document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
		}
		function I(t, e, n, r) {
			var i = 1;
			if (
				((t.width > r || t.height > r) && (i = r / Math.max(t.width, t.height)),
				i < 1 || !0 === e)
			) {
				if (
					('undefined' != typeof HTMLImageElement &&
						t instanceof HTMLImageElement) ||
					('undefined' != typeof HTMLCanvasElement &&
						t instanceof HTMLCanvasElement) ||
					('undefined' != typeof ImageBitmap && t instanceof ImageBitmap)
				) {
					var a = e ? st.floorPowerOfTwo : Math.floor,
						o = a(i * t.width),
						s = a(i * t.height);
					void 0 === l && (l = P(o, s));
					var c = n ? P(o, s) : l;
					return (
						(c.width = o),
						(c.height = s),
						c.getContext('2d').drawImage(t, 0, 0, o, s),
						console.warn(
							'THREE.WebGLRenderer: Texture has been resized from (' +
								t.width +
								'x' +
								t.height +
								') to (' +
								o +
								'x' +
								s +
								').'
						),
						c
					);
				}
				return (
					'data' in t &&
						console.warn(
							'THREE.WebGLRenderer: Image in DataTexture is too big (' +
								t.width +
								'x' +
								t.height +
								').'
						),
					t
				);
			}
			return t;
		}
		function D(t) {
			return st.isPowerOfTwo(t.width) && st.isPowerOfTwo(t.height);
		}
		function N(t, e) {
			return t.generateMipmaps && e && t.minFilter !== d && t.minFilter !== m;
		}
		function O(e, n, i, a) {
			t.generateMipmap(e),
				(r.get(n).__maxMipLevel = Math.log(Math.max(i, a)) * Math.LOG2E);
		}
		function B(n, r, i) {
			if (!1 === h) return r;
			if (null !== n) {
				if (void 0 !== t[n]) return t[n];
				console.warn(
					"THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
						n +
						"'"
				);
			}
			var a = r;
			return (
				6403 === r &&
					(5126 === i && (a = 33326),
					5131 === i && (a = 33325),
					5121 === i && (a = 33321)),
				6407 === r &&
					(5126 === i && (a = 34837),
					5131 === i && (a = 34843),
					5121 === i && (a = 32849)),
				6408 === r &&
					(5126 === i && (a = 34836),
					5131 === i && (a = 34842),
					5121 === i && (a = 32856)),
				(33325 !== a && 33326 !== a && 34842 !== a && 34836 !== a) ||
					e.get('EXT_color_buffer_float'),
				a
			);
		}
		function z(t) {
			return t === d || t === p || t === f ? 9728 : 9729;
		}
		function G(e) {
			var n = e.target;
			n.removeEventListener('dispose', G),
				(function (e) {
					var n = r.get(e);
					if (void 0 === n.__webglInit) return;
					t.deleteTexture(n.__webglTexture), r.remove(e);
				})(n),
				n.isVideoTexture && R.delete(n),
				o.memory.textures--;
		}
		function F(e) {
			var n = e.target;
			n.removeEventListener('dispose', F),
				(function (e) {
					var n = r.get(e),
						i = r.get(e.texture);
					if (!e) return;
					void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture);
					e.depthTexture && e.depthTexture.dispose();
					if (e.isWebGLCubeRenderTarget)
						for (var a = 0; a < 6; a++)
							t.deleteFramebuffer(n.__webglFramebuffer[a]),
								n.__webglDepthbuffer &&
									t.deleteRenderbuffer(n.__webglDepthbuffer[a]);
					else
						t.deleteFramebuffer(n.__webglFramebuffer),
							n.__webglDepthbuffer &&
								t.deleteRenderbuffer(n.__webglDepthbuffer),
							n.__webglMultisampledFramebuffer &&
								t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
							n.__webglColorRenderbuffer &&
								t.deleteRenderbuffer(n.__webglColorRenderbuffer),
							n.__webglDepthRenderbuffer &&
								t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
					r.remove(e.texture), r.remove(e);
				})(n),
				o.memory.textures--;
		}
		var U = 0;
		function H(t, e) {
			var i = r.get(t);
			if (
				(t.isVideoTexture &&
					(function (t) {
						var e = o.render.frame;
						R.get(t) !== e && (R.set(t, e), t.update());
					})(t),
				t.version > 0 && i.__version !== t.version)
			) {
				var a = t.image;
				if (void 0 === a)
					console.warn(
						'THREE.WebGLRenderer: Texture marked for update but image is undefined'
					);
				else {
					if (!1 !== a.complete) return void X(i, t, e);
					console.warn(
						'THREE.WebGLRenderer: Texture marked for update but image is incomplete'
					);
				}
			}
			n.activeTexture(33984 + e), n.bindTexture(3553, i.__webglTexture);
		}
		function k(e, i) {
			var o = r.get(e);
			e.version > 0 && o.__version !== e.version
				? (function (e, r, i) {
						if (6 !== r.image.length) return;
						q(e, r),
							n.activeTexture(33984 + i),
							n.bindTexture(34067, e.__webglTexture),
							t.pixelStorei(37440, r.flipY);
						for (
							var o =
									r &&
									(r.isCompressedTexture || r.image[0].isCompressedTexture),
								s = r.image[0] && r.image[0].isDataTexture,
								c = [],
								l = 0;
							l < 6;
							l++
						)
							c[l] =
								o || s
									? s
										? r.image[l].image
										: r.image[l]
									: I(r.image[l], !1, !0, g);
						var u,
							d = c[0],
							p = D(d) || h,
							f = a.convert(r.format),
							m = a.convert(r.type),
							v = B(r.internalFormat, f, m);
						if ((j(34067, r, p), o)) {
							for (var y = 0; y < 6; y++) {
								u = c[y].mipmaps;
								for (var x = 0; x < u.length; x++) {
									var _ = u[x];
									r.format !== T && r.format !== S
										? null !== f
											? n.compressedTexImage2D(
													34069 + y,
													x,
													v,
													_.width,
													_.height,
													0,
													_.data
											  )
											: console.warn(
													'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()'
											  )
										: n.texImage2D(
												34069 + y,
												x,
												v,
												_.width,
												_.height,
												0,
												f,
												m,
												_.data
										  );
								}
							}
							e.__maxMipLevel = u.length - 1;
						} else {
							u = r.mipmaps;
							for (var b = 0; b < 6; b++)
								if (s) {
									n.texImage2D(
										34069 + b,
										0,
										v,
										c[b].width,
										c[b].height,
										0,
										f,
										m,
										c[b].data
									);
									for (var w = 0; w < u.length; w++) {
										var M = u[w].image[b].image;
										n.texImage2D(
											34069 + b,
											w + 1,
											v,
											M.width,
											M.height,
											0,
											f,
											m,
											M.data
										);
									}
								} else {
									n.texImage2D(34069 + b, 0, v, f, m, c[b]);
									for (var E = 0; E < u.length; E++) {
										var A = u[E];
										n.texImage2D(34069 + b, E + 1, v, f, m, A.image[b]);
									}
								}
							e.__maxMipLevel = u.length;
						}
						N(r, p) && O(34067, r, d.width, d.height);
						(e.__version = r.version), r.onUpdate && r.onUpdate(r);
				  })(o, e, i)
				: (n.activeTexture(33984 + i), n.bindTexture(34067, o.__webglTexture));
		}
		var V = (((s = {})[1e3] = 10497), (s[1001] = 33071), (s[1002] = 33648), s),
			W =
				(((c = {})[1003] = 9728),
				(c[1004] = 9984),
				(c[1005] = 9986),
				(c[1006] = 9729),
				(c[1007] = 9985),
				(c[1008] = 9987),
				c);
		function j(n, a, o) {
			o
				? (t.texParameteri(n, 10242, V[a.wrapS]),
				  t.texParameteri(n, 10243, V[a.wrapT]),
				  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, V[a.wrapR]),
				  t.texParameteri(n, 10240, W[a.magFilter]),
				  t.texParameteri(n, 10241, W[a.minFilter]))
				: (t.texParameteri(n, 10242, 33071),
				  t.texParameteri(n, 10243, 33071),
				  (32879 !== n && 35866 !== n) || t.texParameteri(n, 32882, 33071),
				  (a.wrapS === u && a.wrapT === u) ||
						console.warn(
							'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.'
						),
				  t.texParameteri(n, 10240, z(a.magFilter)),
				  t.texParameteri(n, 10241, z(a.minFilter)),
				  a.minFilter !== d &&
						a.minFilter !== m &&
						console.warn(
							'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.'
						));
			var s = e.get('EXT_texture_filter_anisotropic');
			if (s) {
				if (a.type === b && null === e.get('OES_texture_float_linear')) return;
				if (
					a.type === w &&
					null === (h || e.get('OES_texture_half_float_linear'))
				)
					return;
				(a.anisotropy > 1 || r.get(a).__currentAnisotropy) &&
					(t.texParameterf(
						n,
						s.TEXTURE_MAX_ANISOTROPY_EXT,
						Math.min(a.anisotropy, i.getMaxAnisotropy())
					),
					(r.get(a).__currentAnisotropy = a.anisotropy));
			}
		}
		function q(e, n) {
			void 0 === e.__webglInit &&
				((e.__webglInit = !0),
				n.addEventListener('dispose', G),
				(e.__webglTexture = t.createTexture()),
				o.memory.textures++);
		}
		function X(e, r, i) {
			var o = 3553;
			r.isDataTexture2DArray && (o = 35866),
				r.isDataTexture3D && (o = 32879),
				q(e, r),
				n.activeTexture(33984 + i),
				n.bindTexture(o, e.__webglTexture),
				t.pixelStorei(37440, r.flipY),
				t.pixelStorei(37441, r.premultiplyAlpha),
				t.pixelStorei(3317, r.unpackAlignment);
			var s,
				c =
					(function (t) {
						return (
							!h &&
							(t.wrapS !== u ||
								t.wrapT !== u ||
								(t.minFilter !== d && t.minFilter !== m))
						);
					})(r) && !1 === D(r.image),
				l = I(r.image, c, !1, y),
				p = D(l) || h,
				f = a.convert(r.format),
				v = a.convert(r.type),
				g = B(r.internalFormat, f, v);
			j(o, r, p);
			var w = r.mipmaps;
			if (r.isDepthTexture)
				(g = 6402),
					h
						? (g =
								r.type === b
									? 36012
									: r.type === _
									? 33190
									: r.type === M
									? 35056
									: 33189)
						: r.type === b &&
						  console.error(
								'WebGLRenderer: Floating point depth texture requires WebGL2.'
						  ),
					r.format === E &&
						6402 === g &&
						r.type !== x &&
						r.type !== _ &&
						(console.warn(
							'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.'
						),
						(r.type = x),
						(v = a.convert(r.type))),
					r.format === A &&
						6402 === g &&
						((g = 34041),
						r.type !== M &&
							(console.warn(
								'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.'
							),
							(r.type = M),
							(v = a.convert(r.type)))),
					n.texImage2D(3553, 0, g, l.width, l.height, 0, f, v, null);
			else if (r.isDataTexture)
				if (w.length > 0 && p) {
					for (var L = 0, R = w.length; L < R; L++)
						(s = w[L]),
							n.texImage2D(3553, L, g, s.width, s.height, 0, f, v, s.data);
					(r.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
				} else
					n.texImage2D(3553, 0, g, l.width, l.height, 0, f, v, l.data),
						(e.__maxMipLevel = 0);
			else if (r.isCompressedTexture) {
				for (var C = 0, P = w.length; C < P; C++)
					(s = w[C]),
						r.format !== T && r.format !== S
							? null !== f
								? n.compressedTexImage2D(
										3553,
										C,
										g,
										s.width,
										s.height,
										0,
										s.data
								  )
								: console.warn(
										'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
								  )
							: n.texImage2D(3553, C, g, s.width, s.height, 0, f, v, s.data);
				e.__maxMipLevel = w.length - 1;
			} else if (r.isDataTexture2DArray)
				n.texImage3D(35866, 0, g, l.width, l.height, l.depth, 0, f, v, l.data),
					(e.__maxMipLevel = 0);
			else if (r.isDataTexture3D)
				n.texImage3D(32879, 0, g, l.width, l.height, l.depth, 0, f, v, l.data),
					(e.__maxMipLevel = 0);
			else if (w.length > 0 && p) {
				for (var z = 0, G = w.length; z < G; z++)
					(s = w[z]), n.texImage2D(3553, z, g, f, v, s);
				(r.generateMipmaps = !1), (e.__maxMipLevel = w.length - 1);
			} else n.texImage2D(3553, 0, g, f, v, l), (e.__maxMipLevel = 0);
			N(r, p) && O(o, r, l.width, l.height),
				(e.__version = r.version),
				r.onUpdate && r.onUpdate(r);
		}
		function Y(e, i, o, s) {
			var c = a.convert(i.texture.format),
				l = a.convert(i.texture.type),
				u = B(i.texture.internalFormat, c, l);
			n.texImage2D(s, 0, u, i.width, i.height, 0, c, l, null),
				t.bindFramebuffer(36160, e),
				t.framebufferTexture2D(36160, o, s, r.get(i.texture).__webglTexture, 0),
				t.bindFramebuffer(36160, null);
		}
		function Z(e, n, r) {
			if ((t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer)) {
				var i = 33189;
				if (r) {
					var o = n.depthTexture;
					o &&
						o.isDepthTexture &&
						(o.type === b ? (i = 36012) : o.type === _ && (i = 33190));
					var s = Q(n);
					t.renderbufferStorageMultisample(36161, s, i, n.width, n.height);
				} else t.renderbufferStorage(36161, i, n.width, n.height);
				t.framebufferRenderbuffer(36160, 36096, 36161, e);
			} else if (n.depthBuffer && n.stencilBuffer) {
				if (r) {
					var c = Q(n);
					t.renderbufferStorageMultisample(36161, c, 35056, n.width, n.height);
				} else t.renderbufferStorage(36161, 34041, n.width, n.height);
				t.framebufferRenderbuffer(36160, 33306, 36161, e);
			} else {
				var l = a.convert(n.texture.format),
					u = a.convert(n.texture.type),
					h = B(n.texture.internalFormat, l, u);
				if (r) {
					var d = Q(n);
					t.renderbufferStorageMultisample(36161, d, h, n.width, n.height);
				} else t.renderbufferStorage(36161, h, n.width, n.height);
			}
			t.bindRenderbuffer(36161, null);
		}
		function J(e) {
			var n = r.get(e),
				i = !0 === e.isWebGLCubeRenderTarget;
			if (e.depthTexture) {
				if (i)
					throw new Error(
						'target.depthTexture not supported in Cube render targets'
					);
				!(function (e, n) {
					if (n && n.isWebGLCubeRenderTarget)
						throw new Error(
							'Depth Texture with cube render targets is not supported'
						);
					if (
						(t.bindFramebuffer(36160, e),
						!n.depthTexture || !n.depthTexture.isDepthTexture)
					)
						throw new Error(
							'renderTarget.depthTexture must be an instance of THREE.DepthTexture'
						);
					(r.get(n.depthTexture).__webglTexture &&
						n.depthTexture.image.width === n.width &&
						n.depthTexture.image.height === n.height) ||
						((n.depthTexture.image.width = n.width),
						(n.depthTexture.image.height = n.height),
						(n.depthTexture.needsUpdate = !0)),
						H(n.depthTexture, 0);
					var i = r.get(n.depthTexture).__webglTexture;
					if (n.depthTexture.format === E)
						t.framebufferTexture2D(36160, 36096, 3553, i, 0);
					else {
						if (n.depthTexture.format !== A)
							throw new Error('Unknown depthTexture format');
						t.framebufferTexture2D(36160, 33306, 3553, i, 0);
					}
				})(n.__webglFramebuffer, e);
			} else if (i) {
				n.__webglDepthbuffer = [];
				for (var a = 0; a < 6; a++)
					t.bindFramebuffer(36160, n.__webglFramebuffer[a]),
						(n.__webglDepthbuffer[a] = t.createRenderbuffer()),
						Z(n.__webglDepthbuffer[a], e, !1);
			} else
				t.bindFramebuffer(36160, n.__webglFramebuffer),
					(n.__webglDepthbuffer = t.createRenderbuffer()),
					Z(n.__webglDepthbuffer, e, !1);
			t.bindFramebuffer(36160, null);
		}
		function Q(t) {
			return h && t.isWebGLMultisampleRenderTarget ? Math.min(L, t.samples) : 0;
		}
		var K = !1,
			$ = !1;
		(this.allocateTextureUnit = function () {
			var t = U;
			return (
				t >= v &&
					console.warn(
						'THREE.WebGLTextures: Trying to use ' +
							t +
							' texture units while this GPU supports only ' +
							v
					),
				(U += 1),
				t
			);
		}),
			(this.resetTextureUnits = function () {
				U = 0;
			}),
			(this.setTexture2D = H),
			(this.setTexture2DArray = function (t, e) {
				var i = r.get(t);
				t.version > 0 && i.__version !== t.version
					? X(i, t, e)
					: (n.activeTexture(33984 + e),
					  n.bindTexture(35866, i.__webglTexture));
			}),
			(this.setTexture3D = function (t, e) {
				var i = r.get(t);
				t.version > 0 && i.__version !== t.version
					? X(i, t, e)
					: (n.activeTexture(33984 + e),
					  n.bindTexture(32879, i.__webglTexture));
			}),
			(this.setTextureCube = k),
			(this.setupRenderTarget = function (e) {
				var i = r.get(e),
					s = r.get(e.texture);
				e.addEventListener('dispose', F),
					(s.__webglTexture = t.createTexture()),
					o.memory.textures++;
				var c = !0 === e.isWebGLCubeRenderTarget,
					l = !0 === e.isWebGLMultisampleRenderTarget,
					u = D(e) || h;
				if (
					(!h ||
						e.texture.format !== S ||
						(e.texture.type !== b && e.texture.type !== w) ||
						((e.texture.format = T),
						console.warn(
							'THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.'
						)),
					c)
				) {
					i.__webglFramebuffer = [];
					for (var d = 0; d < 6; d++)
						i.__webglFramebuffer[d] = t.createFramebuffer();
				} else if (((i.__webglFramebuffer = t.createFramebuffer()), l))
					if (h) {
						(i.__webglMultisampledFramebuffer = t.createFramebuffer()),
							(i.__webglColorRenderbuffer = t.createRenderbuffer()),
							t.bindRenderbuffer(36161, i.__webglColorRenderbuffer);
						var p = a.convert(e.texture.format),
							f = a.convert(e.texture.type),
							m = B(e.texture.internalFormat, p, f),
							v = Q(e);
						t.renderbufferStorageMultisample(36161, v, m, e.width, e.height),
							t.bindFramebuffer(36160, i.__webglMultisampledFramebuffer),
							t.framebufferRenderbuffer(
								36160,
								36064,
								36161,
								i.__webglColorRenderbuffer
							),
							t.bindRenderbuffer(36161, null),
							e.depthBuffer &&
								((i.__webglDepthRenderbuffer = t.createRenderbuffer()),
								Z(i.__webglDepthRenderbuffer, e, !0)),
							t.bindFramebuffer(36160, null);
					} else
						console.warn(
							'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.'
						);
				if (c) {
					n.bindTexture(34067, s.__webglTexture), j(34067, e.texture, u);
					for (var g = 0; g < 6; g++)
						Y(i.__webglFramebuffer[g], e, 36064, 34069 + g);
					N(e.texture, u) && O(34067, e.texture, e.width, e.height),
						n.bindTexture(34067, null);
				} else
					n.bindTexture(3553, s.__webglTexture),
						j(3553, e.texture, u),
						Y(i.__webglFramebuffer, e, 36064, 3553),
						N(e.texture, u) && O(3553, e.texture, e.width, e.height),
						n.bindTexture(3553, null);
				e.depthBuffer && J(e);
			}),
			(this.updateRenderTargetMipmap = function (t) {
				var e = t.texture;
				if (N(e, D(t) || h)) {
					var i = t.isWebGLCubeRenderTarget ? 34067 : 3553,
						a = r.get(e).__webglTexture;
					n.bindTexture(i, a),
						O(i, e, t.width, t.height),
						n.bindTexture(i, null);
				}
			}),
			(this.updateMultisampleRenderTarget = function (e) {
				if (e.isWebGLMultisampleRenderTarget)
					if (h) {
						var n = r.get(e);
						t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer),
							t.bindFramebuffer(36009, n.__webglFramebuffer);
						var i = e.width,
							a = e.height,
							o = 16384;
						e.depthBuffer && (o |= 256),
							e.stencilBuffer && (o |= 1024),
							t.blitFramebuffer(0, 0, i, a, 0, 0, i, a, o, 9728),
							t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer);
					} else
						console.warn(
							'THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.'
						);
			}),
			(this.safeSetTexture2D = function (t, e) {
				t &&
					t.isWebGLRenderTarget &&
					(!1 === K &&
						(console.warn(
							"THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."
						),
						(K = !0)),
					(t = t.texture)),
					H(t, e);
			}),
			(this.safeSetTextureCube = function (t, e) {
				t &&
					t.isWebGLCubeRenderTarget &&
					(!1 === $ &&
						(console.warn(
							"THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."
						),
						($ = !0)),
					(t = t.texture)),
					k(t, e);
			});
	}
	function Qi(t, e, n) {
		var r = n.isWebGL2;
		return {
			convert: function (t) {
				var n;
				if (t === y) return 5121;
				if (1017 === t) return 32819;
				if (1018 === t) return 32820;
				if (1019 === t) return 33635;
				if (1010 === t) return 5120;
				if (1011 === t) return 5122;
				if (t === x) return 5123;
				if (1013 === t) return 5124;
				if (t === _) return 5125;
				if (t === b) return 5126;
				if (t === w)
					return r
						? 5131
						: null !== (n = e.get('OES_texture_half_float'))
						? n.HALF_FLOAT_OES
						: null;
				if (1021 === t) return 6406;
				if (t === S) return 6407;
				if (t === T) return 6408;
				if (1024 === t) return 6409;
				if (1025 === t) return 6410;
				if (t === E) return 6402;
				if (t === A) return 34041;
				if (1028 === t) return 6403;
				if (1029 === t) return 36244;
				if (1030 === t) return 33319;
				if (1031 === t) return 33320;
				if (1032 === t) return 36248;
				if (1033 === t) return 36249;
				if (t === L || t === R || t === C || t === P) {
					if (null === (n = e.get('WEBGL_compressed_texture_s3tc')))
						return null;
					if (t === L) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
					if (t === R) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
					if (t === C) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
					if (t === P) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
				}
				if (t === I || t === D || t === N || t === O) {
					if (null === (n = e.get('WEBGL_compressed_texture_pvrtc')))
						return null;
					if (t === I) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
					if (t === D) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
					if (t === N) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
					if (t === O) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
				}
				if (36196 === t)
					return null !== (n = e.get('WEBGL_compressed_texture_etc1'))
						? n.COMPRESSED_RGB_ETC1_WEBGL
						: null;
				if (
					(t === B || t === z) &&
					null !== (n = e.get('WEBGL_compressed_texture_etc'))
				) {
					if (t === B) return n.COMPRESSED_RGB8_ETC2;
					if (t === z) return n.COMPRESSED_RGBA8_ETC2_EAC;
				}
				return 37808 === t ||
					37809 === t ||
					37810 === t ||
					37811 === t ||
					37812 === t ||
					37813 === t ||
					37814 === t ||
					37815 === t ||
					37816 === t ||
					37817 === t ||
					37818 === t ||
					37819 === t ||
					37820 === t ||
					37821 === t ||
					37840 === t ||
					37841 === t ||
					37842 === t ||
					37843 === t ||
					37844 === t ||
					37845 === t ||
					37846 === t ||
					37847 === t ||
					37848 === t ||
					37849 === t ||
					37850 === t ||
					37851 === t ||
					37852 === t ||
					37853 === t
					? null !== (n = e.get('WEBGL_compressed_texture_astc'))
						? t
						: null
					: 36492 === t
					? null !== (n = e.get('EXT_texture_compression_bptc'))
						? t
						: null
					: t === M
					? r
						? 34042
						: null !== (n = e.get('WEBGL_depth_texture'))
						? n.UNSIGNED_INT_24_8_WEBGL
						: null
					: void 0;
			},
		};
	}
	function Ki(t) {
		Vn.call(this), (this.cameras = t || []);
	}
	function $i() {
		be.call(this), (this.type = 'Group');
	}
	function ta() {
		(this._targetRay = null), (this._grip = null), (this._hand = null);
	}
	function ea(t, e) {
		var n = this,
			r = null,
			i = 1,
			a = null,
			o = 'local-floor',
			s = null,
			c = [],
			l = new Map(),
			u = new Vn();
		u.layers.enable(1), (u.viewport = new yt());
		var h = new Vn();
		h.layers.enable(2), (h.viewport = new yt());
		var d = [u, h],
			p = new Ki();
		p.layers.enable(1), p.layers.enable(2);
		var f = null,
			m = null;
		function v(t) {
			var e = l.get(t.inputSource);
			e && e.dispatchEvent({ type: t.type, data: t.inputSource });
		}
		function g() {
			l.forEach(function (t, e) {
				t.disconnect(e);
			}),
				l.clear(),
				t.setFramebuffer(null),
				t.setRenderTarget(t.getRenderTarget()),
				S.stop(),
				(n.isPresenting = !1),
				n.dispatchEvent({ type: 'sessionend' });
		}
		function y(t) {
			(a = t),
				S.setContext(r),
				S.start(),
				(n.isPresenting = !0),
				n.dispatchEvent({ type: 'sessionstart' });
		}
		function x(t) {
			for (var e = r.inputSources, n = 0; n < c.length; n++) l.set(e[n], c[n]);
			for (var i = 0; i < t.removed.length; i++) {
				var a = t.removed[i],
					o = l.get(a);
				o && (o.dispatchEvent({ type: 'disconnected', data: a }), l.delete(a));
			}
			for (var s = 0; s < t.added.length; s++) {
				var u = t.added[s],
					h = l.get(u);
				h && h.dispatchEvent({ type: 'connected', data: u });
			}
		}
		(this.enabled = !1),
			(this.isPresenting = !1),
			(this.getController = function (t) {
				var e = c[t];
				return (
					void 0 === e && ((e = new ta()), (c[t] = e)), e.getTargetRaySpace()
				);
			}),
			(this.getControllerGrip = function (t) {
				var e = c[t];
				return void 0 === e && ((e = new ta()), (c[t] = e)), e.getGripSpace();
			}),
			(this.getHand = function (t) {
				var e = c[t];
				return void 0 === e && ((e = new ta()), (c[t] = e)), e.getHandSpace();
			}),
			(this.setFramebufferScaleFactor = function (t) {
				(i = t),
					!0 === n.isPresenting &&
						console.warn(
							'THREE.WebXRManager: Cannot change framebuffer scale while presenting.'
						);
			}),
			(this.setReferenceSpaceType = function (t) {
				(o = t),
					!0 === n.isPresenting &&
						console.warn(
							'THREE.WebXRManager: Cannot change reference space type while presenting.'
						);
			}),
			(this.getReferenceSpace = function () {
				return a;
			}),
			(this.getSession = function () {
				return r;
			}),
			(this.setSession = function (t) {
				if (null !== (r = t)) {
					r.addEventListener('select', v),
						r.addEventListener('selectstart', v),
						r.addEventListener('selectend', v),
						r.addEventListener('squeeze', v),
						r.addEventListener('squeezestart', v),
						r.addEventListener('squeezeend', v),
						r.addEventListener('end', g);
					var n = e.getContextAttributes();
					!0 !== n.xrCompatible && e.makeXRCompatible();
					var a = {
							antialias: n.antialias,
							alpha: n.alpha,
							depth: n.depth,
							stencil: n.stencil,
							framebufferScaleFactor: i,
						},
						s = new XRWebGLLayer(r, e, a);
					r.updateRenderState({ baseLayer: s }),
						r.requestReferenceSpace(o).then(y),
						r.addEventListener('inputsourceschange', x);
				}
			});
		var _ = new wt(),
			b = new wt();
		function w(t, e) {
			null === e
				? t.matrixWorld.copy(t.matrix)
				: t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
				t.matrixWorldInverse.getInverse(t.matrixWorld);
		}
		this.getCamera = function (t) {
			(p.near = h.near = u.near = t.near),
				(p.far = h.far = u.far = t.far),
				(f === p.near && m === p.far) ||
					(r.updateRenderState({ depthNear: p.near, depthFar: p.far }),
					(f = p.near),
					(m = p.far));
			var e = t.parent,
				n = p.cameras;
			w(p, e);
			for (var i = 0; i < n.length; i++) w(n[i], e);
			t.matrixWorld.copy(p.matrixWorld);
			for (var a = t.children, o = 0, s = a.length; o < s; o++)
				a[o].updateMatrixWorld(!0);
			return (
				2 === n.length
					? (function (t, e, n) {
							_.setFromMatrixPosition(e.matrixWorld),
								b.setFromMatrixPosition(n.matrixWorld);
							var r = _.distanceTo(b),
								i = e.projectionMatrix.elements,
								a = n.projectionMatrix.elements,
								o = i[14] / (i[10] - 1),
								s = i[14] / (i[10] + 1),
								c = (i[9] + 1) / i[5],
								l = (i[9] - 1) / i[5],
								u = (i[8] - 1) / i[0],
								h = (a[8] + 1) / a[0],
								d = o * u,
								p = o * h,
								f = r / (-u + h),
								m = f * -u;
							e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
								t.translateX(m),
								t.translateZ(f),
								t.matrixWorld.compose(t.position, t.quaternion, t.scale),
								t.matrixWorldInverse.getInverse(t.matrixWorld);
							var v = o + f,
								g = s + f,
								y = d - m,
								x = p + (r - m),
								w = ((c * s) / g) * v,
								M = ((l * s) / g) * v;
							t.projectionMatrix.makePerspective(y, x, w, M, v, g);
					  })(p, u, h)
					: p.projectionMatrix.copy(u.projectionMatrix),
				p
			);
		};
		var M = null;
		var S = new Kn();
		S.setAnimationLoop(function (e, n) {
			if (null !== (s = n.getViewerPose(a))) {
				var i = s.views,
					o = r.renderState.baseLayer;
				t.setFramebuffer(o.framebuffer);
				var l = !1;
				i.length !== p.cameras.length && ((p.cameras.length = 0), (l = !0));
				for (var u = 0; u < i.length; u++) {
					var h = i[u],
						f = o.getViewport(h),
						m = d[u];
					m.matrix.fromArray(h.transform.matrix),
						m.projectionMatrix.fromArray(h.projectionMatrix),
						m.viewport.set(f.x, f.y, f.width, f.height),
						0 === u && p.matrix.copy(m.matrix),
						!0 === l && p.cameras.push(m);
				}
			}
			for (var v = r.inputSources, g = 0; g < c.length; g++) {
				var y = c[g],
					x = v[g];
				y.update(x, n, a);
			}
			M && M(e, n);
		}),
			(this.setAnimationLoop = function (t) {
				M = t;
			}),
			(this.dispose = function () {});
	}
	function na(t) {
		function e(e, n) {
			(e.opacity.value = n.opacity),
				n.color && e.diffuse.value.copy(n.color),
				n.emissive &&
					e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),
				n.map && (e.map.value = n.map),
				n.alphaMap && (e.alphaMap.value = n.alphaMap),
				n.specularMap && (e.specularMap.value = n.specularMap);
			var r,
				i,
				a = t.get(n).envMap;
			if (a) {
				(e.envMap.value = a),
					(e.flipEnvMap.value = a.isCubeTexture && a._needsFlipEnvMap ? -1 : 1),
					(e.reflectivity.value = n.reflectivity),
					(e.refractionRatio.value = n.refractionRatio);
				var o = t.get(a).__maxMipLevel;
				void 0 !== o && (e.maxMipLevel.value = o);
			}
			n.lightMap &&
				((e.lightMap.value = n.lightMap),
				(e.lightMapIntensity.value = n.lightMapIntensity)),
				n.aoMap &&
					((e.aoMap.value = n.aoMap),
					(e.aoMapIntensity.value = n.aoMapIntensity)),
				n.map
					? (r = n.map)
					: n.specularMap
					? (r = n.specularMap)
					: n.displacementMap
					? (r = n.displacementMap)
					: n.normalMap
					? (r = n.normalMap)
					: n.bumpMap
					? (r = n.bumpMap)
					: n.roughnessMap
					? (r = n.roughnessMap)
					: n.metalnessMap
					? (r = n.metalnessMap)
					: n.alphaMap
					? (r = n.alphaMap)
					: n.emissiveMap
					? (r = n.emissiveMap)
					: n.clearcoatMap
					? (r = n.clearcoatMap)
					: n.clearcoatNormalMap
					? (r = n.clearcoatNormalMap)
					: n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap),
				void 0 !== r &&
					(r.isWebGLRenderTarget && (r = r.texture),
					!0 === r.matrixAutoUpdate && r.updateMatrix(),
					e.uvTransform.value.copy(r.matrix)),
				n.aoMap ? (i = n.aoMap) : n.lightMap && (i = n.lightMap),
				void 0 !== i &&
					(i.isWebGLRenderTarget && (i = i.texture),
					!0 === i.matrixAutoUpdate && i.updateMatrix(),
					e.uv2Transform.value.copy(i.matrix));
		}
		function n(e, n) {
			(e.roughness.value = n.roughness),
				(e.metalness.value = n.metalness),
				n.roughnessMap && (e.roughnessMap.value = n.roughnessMap),
				n.metalnessMap && (e.metalnessMap.value = n.metalnessMap),
				n.emissiveMap && (e.emissiveMap.value = n.emissiveMap),
				n.bumpMap &&
					((e.bumpMap.value = n.bumpMap),
					(e.bumpScale.value = n.bumpScale),
					1 === n.side && (e.bumpScale.value *= -1)),
				n.normalMap &&
					((e.normalMap.value = n.normalMap),
					e.normalScale.value.copy(n.normalScale),
					1 === n.side && e.normalScale.value.negate()),
				n.displacementMap &&
					((e.displacementMap.value = n.displacementMap),
					(e.displacementScale.value = n.displacementScale),
					(e.displacementBias.value = n.displacementBias)),
				t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
		}
		return {
			refreshFogUniforms: function (t, e) {
				t.fogColor.value.copy(e.color),
					e.isFog
						? ((t.fogNear.value = e.near), (t.fogFar.value = e.far))
						: e.isFogExp2 && (t.fogDensity.value = e.density);
			},
			refreshMaterialUniforms: function (t, r, i, a) {
				r.isMeshBasicMaterial
					? e(t, r)
					: r.isMeshLambertMaterial
					? (e(t, r),
					  (function (t, e) {
							e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
					  })(t, r))
					: r.isMeshToonMaterial
					? (e(t, r),
					  (function (t, e) {
							e.gradientMap && (t.gradientMap.value = e.gradientMap);
							e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
							e.bumpMap &&
								((t.bumpMap.value = e.bumpMap),
								(t.bumpScale.value = e.bumpScale),
								1 === e.side && (t.bumpScale.value *= -1));
							e.normalMap &&
								((t.normalMap.value = e.normalMap),
								t.normalScale.value.copy(e.normalScale),
								1 === e.side && t.normalScale.value.negate());
							e.displacementMap &&
								((t.displacementMap.value = e.displacementMap),
								(t.displacementScale.value = e.displacementScale),
								(t.displacementBias.value = e.displacementBias));
					  })(t, r))
					: r.isMeshPhongMaterial
					? (e(t, r),
					  (function (t, e) {
							t.specular.value.copy(e.specular),
								(t.shininess.value = Math.max(e.shininess, 1e-4)),
								e.emissiveMap && (t.emissiveMap.value = e.emissiveMap);
							e.bumpMap &&
								((t.bumpMap.value = e.bumpMap),
								(t.bumpScale.value = e.bumpScale),
								1 === e.side && (t.bumpScale.value *= -1));
							e.normalMap &&
								((t.normalMap.value = e.normalMap),
								t.normalScale.value.copy(e.normalScale),
								1 === e.side && t.normalScale.value.negate());
							e.displacementMap &&
								((t.displacementMap.value = e.displacementMap),
								(t.displacementScale.value = e.displacementScale),
								(t.displacementBias.value = e.displacementBias));
					  })(t, r))
					: r.isMeshStandardMaterial
					? (e(t, r),
					  r.isMeshPhysicalMaterial
							? (function (t, e) {
									n(t, e),
										(t.reflectivity.value = e.reflectivity),
										(t.clearcoat.value = e.clearcoat),
										(t.clearcoatRoughness.value = e.clearcoatRoughness),
										e.sheen && t.sheen.value.copy(e.sheen);
									e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap);
									e.clearcoatRoughnessMap &&
										(t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap);
									e.clearcoatNormalMap &&
										(t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
										(t.clearcoatNormalMap.value = e.clearcoatNormalMap),
										1 === e.side && t.clearcoatNormalScale.value.negate());
									(t.transmission.value = e.transmission),
										e.transmissionMap &&
											(t.transmissionMap.value = e.transmissionMap);
							  })(t, r)
							: n(t, r))
					: r.isMeshMatcapMaterial
					? (e(t, r),
					  (function (t, e) {
							e.matcap && (t.matcap.value = e.matcap);
							e.bumpMap &&
								((t.bumpMap.value = e.bumpMap),
								(t.bumpScale.value = e.bumpScale),
								1 === e.side && (t.bumpScale.value *= -1));
							e.normalMap &&
								((t.normalMap.value = e.normalMap),
								t.normalScale.value.copy(e.normalScale),
								1 === e.side && t.normalScale.value.negate());
							e.displacementMap &&
								((t.displacementMap.value = e.displacementMap),
								(t.displacementScale.value = e.displacementScale),
								(t.displacementBias.value = e.displacementBias));
					  })(t, r))
					: r.isMeshDepthMaterial
					? (e(t, r),
					  (function (t, e) {
							e.displacementMap &&
								((t.displacementMap.value = e.displacementMap),
								(t.displacementScale.value = e.displacementScale),
								(t.displacementBias.value = e.displacementBias));
					  })(t, r))
					: r.isMeshDistanceMaterial
					? (e(t, r),
					  (function (t, e) {
							e.displacementMap &&
								((t.displacementMap.value = e.displacementMap),
								(t.displacementScale.value = e.displacementScale),
								(t.displacementBias.value = e.displacementBias));
							t.referencePosition.value.copy(e.referencePosition),
								(t.nearDistance.value = e.nearDistance),
								(t.farDistance.value = e.farDistance);
					  })(t, r))
					: r.isMeshNormalMaterial
					? (e(t, r),
					  (function (t, e) {
							e.bumpMap &&
								((t.bumpMap.value = e.bumpMap),
								(t.bumpScale.value = e.bumpScale),
								1 === e.side && (t.bumpScale.value *= -1));
							e.normalMap &&
								((t.normalMap.value = e.normalMap),
								t.normalScale.value.copy(e.normalScale),
								1 === e.side && t.normalScale.value.negate());
							e.displacementMap &&
								((t.displacementMap.value = e.displacementMap),
								(t.displacementScale.value = e.displacementScale),
								(t.displacementBias.value = e.displacementBias));
					  })(t, r))
					: r.isLineBasicMaterial
					? ((function (t, e) {
							t.diffuse.value.copy(e.color), (t.opacity.value = e.opacity);
					  })(t, r),
					  r.isLineDashedMaterial &&
							(function (t, e) {
								(t.dashSize.value = e.dashSize),
									(t.totalSize.value = e.dashSize + e.gapSize),
									(t.scale.value = e.scale);
							})(t, r))
					: r.isPointsMaterial
					? (function (t, e, n, r) {
							t.diffuse.value.copy(e.color),
								(t.opacity.value = e.opacity),
								(t.size.value = e.size * n),
								(t.scale.value = 0.5 * r),
								e.map && (t.map.value = e.map);
							e.alphaMap && (t.alphaMap.value = e.alphaMap);
							var i;
							e.map ? (i = e.map) : e.alphaMap && (i = e.alphaMap);
							void 0 !== i &&
								(!0 === i.matrixAutoUpdate && i.updateMatrix(),
								t.uvTransform.value.copy(i.matrix));
					  })(t, r, i, a)
					: r.isSpriteMaterial
					? (function (t, e) {
							t.diffuse.value.copy(e.color),
								(t.opacity.value = e.opacity),
								(t.rotation.value = e.rotation),
								e.map && (t.map.value = e.map);
							e.alphaMap && (t.alphaMap.value = e.alphaMap);
							var n;
							e.map ? (n = e.map) : e.alphaMap && (n = e.alphaMap);
							void 0 !== n &&
								(!0 === n.matrixAutoUpdate && n.updateMatrix(),
								t.uvTransform.value.copy(n.matrix));
					  })(t, r)
					: r.isShadowMaterial
					? (t.color.value.copy(r.color), (t.opacity.value = r.opacity))
					: r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
			},
		};
	}
	function ra(t) {
		var e =
				void 0 !== (t = t || {}).canvas
					? t.canvas
					: document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas'),
			n = void 0 !== t.context ? t.context : null,
			r = void 0 !== t.alpha && t.alpha,
			i = void 0 === t.depth || t.depth,
			a = void 0 === t.stencil || t.stencil,
			o = void 0 !== t.antialias && t.antialias,
			s = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
			c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
			l = void 0 !== t.powerPreference ? t.powerPreference : 'default',
			u =
				void 0 !== t.failIfMajorPerformanceCaveat &&
				t.failIfMajorPerformanceCaveat,
			h = null,
			d = null;
		(this.domElement = e),
			(this.debug = { checkShaderErrors: !0 }),
			(this.autoClear = !0),
			(this.autoClearColor = !0),
			(this.autoClearDepth = !0),
			(this.autoClearStencil = !0),
			(this.sortObjects = !0),
			(this.clippingPlanes = []),
			(this.localClippingEnabled = !1),
			(this.gammaFactor = 2),
			(this.outputEncoding = q),
			(this.physicallyCorrectLights = !1),
			(this.toneMapping = 0),
			(this.toneMappingExposure = 1),
			(this.maxMorphTargets = 8),
			(this.maxMorphNormals = 4);
		var p = this,
			f = !1,
			m = null,
			v = 0,
			g = 0,
			x = null,
			_ = null,
			M = -1,
			S = null,
			E = null,
			A = new yt(),
			L = new yt(),
			R = null,
			C = e.width,
			P = e.height,
			I = 1,
			D = null,
			N = null,
			O = new yt(0, 0, C, P),
			B = new yt(0, 0, C, P),
			z = !1,
			G = new Qn(),
			F = !1,
			U = !1,
			H = new Jt(),
			k = new wt(),
			V = {
				background: null,
				fog: null,
				environment: null,
				overrideMaterial: null,
				isScene: !0,
			};
		function W() {
			return null === x ? I : 1;
		}
		var j,
			X,
			Y,
			Z,
			J,
			Q,
			K,
			$,
			tt,
			et,
			nt,
			rt,
			it,
			at,
			ot,
			ct,
			lt,
			ut,
			ht,
			dt,
			ft,
			mt = n;
		function vt(t, n) {
			for (var r = 0; r < t.length; r++) {
				var i = t[r],
					a = e.getContext(i, n);
				if (null !== a) return a;
			}
			return null;
		}
		try {
			var gt = {
				alpha: r,
				depth: i,
				stencil: a,
				antialias: o,
				premultipliedAlpha: s,
				preserveDrawingBuffer: c,
				powerPreference: l,
				failIfMajorPerformanceCaveat: u,
			};
			if (
				(e.addEventListener('webglcontextlost', St, !1),
				e.addEventListener('webglcontextrestored', Tt, !1),
				null === mt)
			) {
				var xt = ['webgl2', 'webgl', 'experimental-webgl'];
				if (
					(!0 === p.isWebGL1Renderer && xt.shift(), null === (mt = vt(xt, gt)))
				)
					throw vt(xt)
						? new Error(
								'Error creating WebGL context with your selected attributes.'
						  )
						: new Error('Error creating WebGL context.');
			}
			void 0 === mt.getShaderPrecisionFormat &&
				(mt.getShaderPrecisionFormat = function () {
					return { rangeMin: 1, rangeMax: 1, precision: 1 };
				});
		} catch (t) {
			throw (console.error('THREE.WebGLRenderer: ' + t.message), t);
		}
		function _t() {
			(j = new ur(mt)),
				!1 === (X = new sr(mt, j, t)).isWebGL2 &&
					(j.get('WEBGL_depth_texture'),
					j.get('OES_texture_float'),
					j.get('OES_texture_half_float'),
					j.get('OES_texture_half_float_linear'),
					j.get('OES_standard_derivatives'),
					j.get('OES_element_index_uint'),
					j.get('OES_vertex_array_object'),
					j.get('ANGLE_instanced_arrays')),
				j.get('OES_texture_float_linear'),
				(dt = new Qi(mt, j, X)),
				(Y = new Zi(mt, j, X)).scissor(L.copy(B).multiplyScalar(I).floor()),
				Y.viewport(A.copy(O).multiplyScalar(I).floor()),
				(Z = new pr(mt)),
				(J = new Oi()),
				(Q = new Ji(mt, j, Y, J, X, dt, Z)),
				(K = new lr(p)),
				($ = new $n(mt, X)),
				(ft = new ar(mt, j, $, X)),
				(tt = new hr(mt, $, Z, ft)),
				(et = new gr(mt, tt, $, Z)),
				(lt = new vr(mt)),
				(ot = new cr(J)),
				(nt = new Ni(p, K, j, X, ft, ot)),
				(rt = new na(J)),
				(it = new Fi(J)),
				(at = new ji()),
				(ct = new ir(p, K, Y, et, s)),
				(ut = new or(mt, j, Z, X)),
				(ht = new dr(mt, j, Z, X)),
				(Z.programs = nt.programs),
				(p.capabilities = X),
				(p.extensions = j),
				(p.properties = J),
				(p.renderLists = it),
				(p.state = Y),
				(p.info = Z);
		}
		_t();
		var bt = new ea(p, mt);
		this.xr = bt;
		var Mt = new Yi(p, et, X.maxTextureSize);
		function St(t) {
			t.preventDefault(),
				console.log('THREE.WebGLRenderer: Context Lost.'),
				(f = !0);
		}
		function Tt() {
			console.log('THREE.WebGLRenderer: Context Restored.'), (f = !1), _t();
		}
		function Et(t) {
			var e = t.target;
			e.removeEventListener('dispose', Et),
				(function (t) {
					At(t), J.remove(t);
				})(e);
		}
		function At(t) {
			var e = J.get(t).program;
			void 0 !== e && nt.releaseProgram(e);
		}
		(this.shadowMap = Mt),
			(this.getContext = function () {
				return mt;
			}),
			(this.getContextAttributes = function () {
				return mt.getContextAttributes();
			}),
			(this.forceContextLoss = function () {
				var t = j.get('WEBGL_lose_context');
				t && t.loseContext();
			}),
			(this.forceContextRestore = function () {
				var t = j.get('WEBGL_lose_context');
				t && t.restoreContext();
			}),
			(this.getPixelRatio = function () {
				return I;
			}),
			(this.setPixelRatio = function (t) {
				void 0 !== t && ((I = t), this.setSize(C, P, !1));
			}),
			(this.getSize = function (t) {
				return (
					void 0 === t &&
						(console.warn(
							'WebGLRenderer: .getsize() now requires a Vector2 as an argument'
						),
						(t = new pt())),
					t.set(C, P)
				);
			}),
			(this.setSize = function (t, n, r) {
				bt.isPresenting
					? console.warn(
							"THREE.WebGLRenderer: Can't change size while VR device is presenting."
					  )
					: ((C = t),
					  (P = n),
					  (e.width = Math.floor(t * I)),
					  (e.height = Math.floor(n * I)),
					  !1 !== r &&
							((e.style.width = t + 'px'), (e.style.height = n + 'px')),
					  this.setViewport(0, 0, t, n));
			}),
			(this.getDrawingBufferSize = function (t) {
				return (
					void 0 === t &&
						(console.warn(
							'WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument'
						),
						(t = new pt())),
					t.set(C * I, P * I).floor()
				);
			}),
			(this.setDrawingBufferSize = function (t, n, r) {
				(C = t),
					(P = n),
					(I = r),
					(e.width = Math.floor(t * r)),
					(e.height = Math.floor(n * r)),
					this.setViewport(0, 0, t, n);
			}),
			(this.getCurrentViewport = function (t) {
				return (
					void 0 === t &&
						(console.warn(
							'WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument'
						),
						(t = new yt())),
					t.copy(A)
				);
			}),
			(this.getViewport = function (t) {
				return t.copy(O);
			}),
			(this.setViewport = function (t, e, n, r) {
				t.isVector4 ? O.set(t.x, t.y, t.z, t.w) : O.set(t, e, n, r),
					Y.viewport(A.copy(O).multiplyScalar(I).floor());
			}),
			(this.getScissor = function (t) {
				return t.copy(B);
			}),
			(this.setScissor = function (t, e, n, r) {
				t.isVector4 ? B.set(t.x, t.y, t.z, t.w) : B.set(t, e, n, r),
					Y.scissor(L.copy(B).multiplyScalar(I).floor());
			}),
			(this.getScissorTest = function () {
				return z;
			}),
			(this.setScissorTest = function (t) {
				Y.setScissorTest((z = t));
			}),
			(this.setOpaqueSort = function (t) {
				D = t;
			}),
			(this.setTransparentSort = function (t) {
				N = t;
			}),
			(this.getClearColor = function () {
				return ct.getClearColor();
			}),
			(this.setClearColor = function () {
				ct.setClearColor.apply(ct, arguments);
			}),
			(this.getClearAlpha = function () {
				return ct.getClearAlpha();
			}),
			(this.setClearAlpha = function () {
				ct.setClearAlpha.apply(ct, arguments);
			}),
			(this.clear = function (t, e, n) {
				var r = 0;
				(void 0 === t || t) && (r |= 16384),
					(void 0 === e || e) && (r |= 256),
					(void 0 === n || n) && (r |= 1024),
					mt.clear(r);
			}),
			(this.clearColor = function () {
				this.clear(!0, !1, !1);
			}),
			(this.clearDepth = function () {
				this.clear(!1, !0, !1);
			}),
			(this.clearStencil = function () {
				this.clear(!1, !1, !0);
			}),
			(this.dispose = function () {
				e.removeEventListener('webglcontextlost', St, !1),
					e.removeEventListener('webglcontextrestored', Tt, !1),
					it.dispose(),
					at.dispose(),
					J.dispose(),
					K.dispose(),
					et.dispose(),
					ft.dispose(),
					bt.dispose(),
					Rt.stop();
			}),
			(this.renderBufferImmediate = function (t, e) {
				ft.initAttributes();
				var n = J.get(t);
				t.hasPositions && !n.position && (n.position = mt.createBuffer()),
					t.hasNormals && !n.normal && (n.normal = mt.createBuffer()),
					t.hasUvs && !n.uv && (n.uv = mt.createBuffer()),
					t.hasColors && !n.color && (n.color = mt.createBuffer());
				var r = e.getAttributes();
				t.hasPositions &&
					(mt.bindBuffer(34962, n.position),
					mt.bufferData(34962, t.positionArray, 35048),
					ft.enableAttribute(r.position),
					mt.vertexAttribPointer(r.position, 3, 5126, !1, 0, 0)),
					t.hasNormals &&
						(mt.bindBuffer(34962, n.normal),
						mt.bufferData(34962, t.normalArray, 35048),
						ft.enableAttribute(r.normal),
						mt.vertexAttribPointer(r.normal, 3, 5126, !1, 0, 0)),
					t.hasUvs &&
						(mt.bindBuffer(34962, n.uv),
						mt.bufferData(34962, t.uvArray, 35048),
						ft.enableAttribute(r.uv),
						mt.vertexAttribPointer(r.uv, 2, 5126, !1, 0, 0)),
					t.hasColors &&
						(mt.bindBuffer(34962, n.color),
						mt.bufferData(34962, t.colorArray, 35048),
						ft.enableAttribute(r.color),
						mt.vertexAttribPointer(r.color, 3, 5126, !1, 0, 0)),
					ft.disableUnusedAttributes(),
					mt.drawArrays(4, 0, t.count),
					(t.count = 0);
			}),
			(this.renderBufferDirect = function (t, e, n, r, i, a) {
				null === e && (e = V);
				var o = i.isMesh && i.matrixWorld.determinant() < 0,
					s = Nt(t, e, r, i);
				Y.setMaterial(r, o);
				var c = n.index,
					l = n.attributes.position;
				if (null === c) {
					if (void 0 === l || 0 === l.count) return;
				} else if (0 === c.count) return;
				var u,
					h = 1;
				!0 === r.wireframe && ((c = tt.getWireframeAttribute(n)), (h = 2)),
					(r.morphTargets || r.morphNormals) && lt.update(i, n, r, s),
					ft.setup(i, r, s, n, c);
				var d = ut;
				null !== c && ((u = $.get(c)), (d = ht).setIndex(u));
				var p = null !== c ? c.count : l.count,
					f = n.drawRange.start * h,
					m = n.drawRange.count * h,
					v = null !== a ? a.start * h : 0,
					g = null !== a ? a.count * h : 1 / 0,
					y = Math.max(f, v),
					x = Math.min(p, f + m, v + g) - 1,
					_ = Math.max(0, x - y + 1);
				if (0 !== _) {
					if (i.isMesh)
						!0 === r.wireframe
							? (Y.setLineWidth(r.wireframeLinewidth * W()), d.setMode(1))
							: d.setMode(4);
					else if (i.isLine) {
						var b = r.linewidth;
						void 0 === b && (b = 1),
							Y.setLineWidth(b * W()),
							i.isLineSegments
								? d.setMode(1)
								: i.isLineLoop
								? d.setMode(2)
								: d.setMode(3);
					} else i.isPoints ? d.setMode(0) : i.isSprite && d.setMode(4);
					if (i.isInstancedMesh) d.renderInstances(y, _, i.count);
					else if (n.isInstancedBufferGeometry) {
						var w = Math.min(n.instanceCount, n._maxInstanceCount);
						d.renderInstances(y, _, w);
					} else d.render(y, _);
				}
			}),
			(this.compile = function (t, e) {
				(d = at.get(t, e)).init(),
					t.traverse(function (t) {
						t.isLight && (d.pushLight(t), t.castShadow && d.pushShadow(t));
					}),
					d.setupLights(e);
				var n = new WeakMap();
				t.traverse(function (e) {
					var r = e.material;
					if (r)
						if (Array.isArray(r))
							for (var i = 0; i < r.length; i++) {
								var a = r[i];
								!1 === n.has(a) && (Dt(a, t, e), n.set(a));
							}
						else !1 === n.has(r) && (Dt(r, t, e), n.set(r));
				});
			});
		var Lt = null;
		var Rt = new Kn();
		function Ct(t, e, n, r) {
			if (!1 !== t.visible) {
				if (t.layers.test(e.layers))
					if (t.isGroup) n = t.renderOrder;
					else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
					else if (t.isLight) d.pushLight(t), t.castShadow && d.pushShadow(t);
					else if (t.isSprite) {
						if (!t.frustumCulled || G.intersectsSprite(t)) {
							r && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);
							var i = et.update(t),
								a = t.material;
							a.visible && h.push(t, i, a, n, k.z, null);
						}
					} else if (t.isImmediateRenderObject)
						r && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H),
							h.push(t, null, t.material, n, k.z, null);
					else if (
						(t.isMesh || t.isLine || t.isPoints) &&
						(t.isSkinnedMesh &&
							t.skeleton.frame !== Z.render.frame &&
							(t.skeleton.update(), (t.skeleton.frame = Z.render.frame)),
						!t.frustumCulled || G.intersectsObject(t))
					) {
						r && k.setFromMatrixPosition(t.matrixWorld).applyMatrix4(H);
						var o = et.update(t),
							s = t.material;
						if (Array.isArray(s))
							for (var c = o.groups, l = 0, u = c.length; l < u; l++) {
								var p = c[l],
									f = s[p.materialIndex];
								f && f.visible && h.push(t, o, f, n, k.z, p);
							}
						else s.visible && h.push(t, o, s, n, k.z, null);
					}
				for (var m = t.children, v = 0, g = m.length; v < g; v++)
					Ct(m[v], e, n, r);
			}
		}
		function Pt(t, e, n) {
			for (
				var r = !0 === e.isScene ? e.overrideMaterial : null,
					i = 0,
					a = t.length;
				i < a;
				i++
			) {
				var o = t[i],
					s = o.object,
					c = o.geometry,
					l = null === r ? o.material : r,
					u = o.group;
				if (n.isArrayCamera) {
					E = n;
					for (var h = n.cameras, p = 0, f = h.length; p < f; p++) {
						var m = h[p];
						s.layers.test(m.layers) &&
							(Y.viewport(A.copy(m.viewport)),
							d.setupLights(m),
							It(s, e, m, c, l, u));
					}
				} else (E = null), It(s, e, n, c, l, u);
			}
		}
		function It(t, e, n, r, i, a) {
			if (
				(t.onBeforeRender(p, e, n, r, i, a),
				(d = at.get(e, E || n)),
				t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
				t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
				t.isImmediateRenderObject)
			) {
				var o = Nt(n, e, i, t);
				Y.setMaterial(i),
					ft.reset(),
					(function (t, e) {
						t.render(function (t) {
							p.renderBufferImmediate(t, e);
						});
					})(t, o);
			} else p.renderBufferDirect(n, e, r, i, t, a);
			t.onAfterRender(p, e, n, r, i, a), (d = at.get(e, E || n));
		}
		function Dt(t, e, n) {
			!0 !== e.isScene && (e = V);
			var r = J.get(t),
				i = d.state.lights,
				a = d.state.shadowsArray,
				o = i.state.version,
				s = nt.getParameters(t, i.state, a, e, n),
				c = nt.getProgramCacheKey(s),
				l = r.program,
				u = !0;
			if (void 0 === l) t.addEventListener('dispose', Et);
			else if (l.cacheKey !== c) At(t);
			else if (r.lightsStateVersion !== o) u = !1;
			else {
				if (void 0 !== s.shaderID) {
					var h = t.isMeshStandardMaterial ? e.environment : null;
					return void (r.envMap = K.get(t.envMap || h));
				}
				u = !1;
			}
			u &&
				((s.uniforms = nt.getUniforms(t)),
				t.onBeforeCompile(s, p),
				(l = nt.acquireProgram(s, c)),
				(r.program = l),
				(r.uniforms = s.uniforms),
				(r.outputEncoding = s.outputEncoding));
			var f = r.uniforms;
			((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
				((r.numClippingPlanes = ot.numPlanes),
				(r.numIntersection = ot.numIntersection),
				(f.clippingPlanes = ot.uniform)),
				(r.environment = t.isMeshStandardMaterial ? e.environment : null),
				(r.fog = e.fog),
				(r.envMap = K.get(t.envMap || r.environment)),
				(r.needsLights = (function (t) {
					return (
						t.isMeshLambertMaterial ||
						t.isMeshToonMaterial ||
						t.isMeshPhongMaterial ||
						t.isMeshStandardMaterial ||
						t.isShadowMaterial ||
						(t.isShaderMaterial && !0 === t.lights)
					);
				})(t)),
				(r.lightsStateVersion = o),
				r.needsLights &&
					((f.ambientLightColor.value = i.state.ambient),
					(f.lightProbe.value = i.state.probe),
					(f.directionalLights.value = i.state.directional),
					(f.directionalLightShadows.value = i.state.directionalShadow),
					(f.spotLights.value = i.state.spot),
					(f.spotLightShadows.value = i.state.spotShadow),
					(f.rectAreaLights.value = i.state.rectArea),
					(f.ltc_1.value = i.state.rectAreaLTC1),
					(f.ltc_2.value = i.state.rectAreaLTC2),
					(f.pointLights.value = i.state.point),
					(f.pointLightShadows.value = i.state.pointShadow),
					(f.hemisphereLights.value = i.state.hemi),
					(f.directionalShadowMap.value = i.state.directionalShadowMap),
					(f.directionalShadowMatrix.value = i.state.directionalShadowMatrix),
					(f.spotShadowMap.value = i.state.spotShadowMap),
					(f.spotShadowMatrix.value = i.state.spotShadowMatrix),
					(f.pointShadowMap.value = i.state.pointShadowMap),
					(f.pointShadowMatrix.value = i.state.pointShadowMatrix));
			var m = r.program.getUniforms(),
				v = fi.seqWithValue(m.seq, f);
			r.uniformsList = v;
		}
		function Nt(t, e, n, r) {
			!0 !== e.isScene && (e = V), Q.resetTextureUnits();
			var i = e.fog,
				a = n.isMeshStandardMaterial ? e.environment : null,
				o = null === x ? p.outputEncoding : x.texture.encoding,
				s = K.get(n.envMap || a),
				c = J.get(n),
				l = d.state.lights;
			if (!0 === F && (!0 === U || t !== S)) {
				var u = t === S && n.id === M;
				ot.setState(n, t, u);
			}
			n.version === c.__version
				? (n.fog && c.fog !== i) ||
				  c.environment !== a ||
				  (c.needsLights && c.lightsStateVersion !== l.state.version)
					? Dt(n, e, r)
					: void 0 === c.numClippingPlanes ||
					  (c.numClippingPlanes === ot.numPlanes &&
							c.numIntersection === ot.numIntersection)
					? (c.outputEncoding !== o || c.envMap !== s) && Dt(n, e, r)
					: Dt(n, e, r)
				: (Dt(n, e, r), (c.__version = n.version));
			var h,
				f,
				m = !1,
				v = !1,
				g = !1,
				y = c.program,
				_ = y.getUniforms(),
				w = c.uniforms;
			if (
				(Y.useProgram(y.program) && ((m = !0), (v = !0), (g = !0)),
				n.id !== M && ((M = n.id), (v = !0)),
				m || S !== t)
			) {
				if (
					(_.setValue(mt, 'projectionMatrix', t.projectionMatrix),
					X.logarithmicDepthBuffer &&
						_.setValue(
							mt,
							'logDepthBufFC',
							2 / (Math.log(t.far + 1) / Math.LN2)
						),
					S !== t && ((S = t), (v = !0), (g = !0)),
					n.isShaderMaterial ||
						n.isMeshPhongMaterial ||
						n.isMeshToonMaterial ||
						n.isMeshStandardMaterial ||
						n.envMap)
				) {
					var E = _.map.cameraPosition;
					void 0 !== E &&
						E.setValue(mt, k.setFromMatrixPosition(t.matrixWorld));
				}
				(n.isMeshPhongMaterial ||
					n.isMeshToonMaterial ||
					n.isMeshLambertMaterial ||
					n.isMeshBasicMaterial ||
					n.isMeshStandardMaterial ||
					n.isShaderMaterial) &&
					_.setValue(mt, 'isOrthographic', !0 === t.isOrthographicCamera),
					(n.isMeshPhongMaterial ||
						n.isMeshToonMaterial ||
						n.isMeshLambertMaterial ||
						n.isMeshBasicMaterial ||
						n.isMeshStandardMaterial ||
						n.isShaderMaterial ||
						n.isShadowMaterial ||
						n.skinning) &&
						_.setValue(mt, 'viewMatrix', t.matrixWorldInverse);
			}
			if (n.skinning) {
				_.setOptional(mt, r, 'bindMatrix'),
					_.setOptional(mt, r, 'bindMatrixInverse');
				var A = r.skeleton;
				if (A) {
					var L = A.bones;
					if (X.floatVertexTextures) {
						if (void 0 === A.boneTexture) {
							var R = Math.sqrt(4 * L.length);
							(R = st.ceilPowerOfTwo(R)), (R = Math.max(R, 4));
							var C = new Float32Array(R * R * 4);
							C.set(A.boneMatrices);
							var D = new Yn(C, R, R, T, b);
							(A.boneMatrices = C),
								(A.boneTexture = D),
								(A.boneTextureSize = R);
						}
						_.setValue(mt, 'boneTexture', A.boneTexture, Q),
							_.setValue(mt, 'boneTextureSize', A.boneTextureSize);
					} else _.setOptional(mt, A, 'boneMatrices');
				}
			}
			return (
				(v || c.receiveShadow !== r.receiveShadow) &&
					((c.receiveShadow = r.receiveShadow),
					_.setValue(mt, 'receiveShadow', r.receiveShadow)),
				v &&
					(_.setValue(mt, 'toneMappingExposure', p.toneMappingExposure),
					c.needsLights &&
						((f = g),
						((h = w).ambientLightColor.needsUpdate = f),
						(h.lightProbe.needsUpdate = f),
						(h.directionalLights.needsUpdate = f),
						(h.directionalLightShadows.needsUpdate = f),
						(h.pointLights.needsUpdate = f),
						(h.pointLightShadows.needsUpdate = f),
						(h.spotLights.needsUpdate = f),
						(h.spotLightShadows.needsUpdate = f),
						(h.rectAreaLights.needsUpdate = f),
						(h.hemisphereLights.needsUpdate = f)),
					i && n.fog && rt.refreshFogUniforms(w, i),
					rt.refreshMaterialUniforms(w, n, I, P),
					fi.upload(mt, c.uniformsList, w, Q)),
				n.isShaderMaterial &&
					!0 === n.uniformsNeedUpdate &&
					(fi.upload(mt, c.uniformsList, w, Q), (n.uniformsNeedUpdate = !1)),
				n.isSpriteMaterial && _.setValue(mt, 'center', r.center),
				_.setValue(mt, 'modelViewMatrix', r.modelViewMatrix),
				_.setValue(mt, 'normalMatrix', r.normalMatrix),
				_.setValue(mt, 'modelMatrix', r.matrixWorld),
				y
			);
		}
		Rt.setAnimationLoop(function (t) {
			bt.isPresenting || (Lt && Lt(t));
		}),
			'undefined' != typeof window && Rt.setContext(window),
			(this.setAnimationLoop = function (t) {
				(Lt = t), bt.setAnimationLoop(t), null === t ? Rt.stop() : Rt.start();
			}),
			(this.render = function (t, e) {
				var n, r;
				if (
					(void 0 !== arguments[2] &&
						(console.warn(
							'THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.'
						),
						(n = arguments[2])),
					void 0 !== arguments[3] &&
						(console.warn(
							'THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.'
						),
						(r = arguments[3])),
					void 0 === e || !0 === e.isCamera)
				) {
					if (!0 !== f) {
						ft.resetDefaultState(),
							(M = -1),
							(S = null),
							!0 === t.autoUpdate && t.updateMatrixWorld(),
							null === e.parent && e.updateMatrixWorld(),
							!0 === bt.enabled &&
								!0 === bt.isPresenting &&
								(e = bt.getCamera(e)),
							!0 === t.isScene && t.onBeforeRender(p, t, e, n || x),
							(d = at.get(t, e)).init(),
							H.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
							G.setFromProjectionMatrix(H),
							(U = this.localClippingEnabled),
							(F = ot.init(this.clippingPlanes, U, e)),
							(h = it.get(t, e)).init(),
							Ct(t, e, 0, p.sortObjects),
							h.finish(),
							!0 === p.sortObjects && h.sort(D, N),
							!0 === F && ot.beginShadows();
						var i = d.state.shadowsArray;
						Mt.render(i, t, e),
							d.setupLights(e),
							!0 === F && ot.endShadows(),
							!0 === this.info.autoReset && this.info.reset(),
							void 0 !== n && this.setRenderTarget(n),
							ct.render(h, t, e, r);
						var a = h.opaque,
							o = h.transparent;
						a.length > 0 && Pt(a, t, e),
							o.length > 0 && Pt(o, t, e),
							!0 === t.isScene && t.onAfterRender(p, t, e),
							null !== x &&
								(Q.updateRenderTargetMipmap(x),
								Q.updateMultisampleRenderTarget(x)),
							Y.buffers.depth.setTest(!0),
							Y.buffers.depth.setMask(!0),
							Y.buffers.color.setMask(!0),
							Y.setPolygonOffset(!1),
							(h = null),
							(d = null);
					}
				} else
					console.error(
						'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
					);
			}),
			(this.setFramebuffer = function (t) {
				m !== t && null === x && mt.bindFramebuffer(36160, t), (m = t);
			}),
			(this.getActiveCubeFace = function () {
				return v;
			}),
			(this.getActiveMipmapLevel = function () {
				return g;
			}),
			(this.getRenderList = function () {
				return h;
			}),
			(this.setRenderList = function (t) {
				h = t;
			}),
			(this.getRenderState = function () {
				return d;
			}),
			(this.setRenderState = function (t) {
				d = t;
			}),
			(this.getRenderTarget = function () {
				return x;
			}),
			(this.setRenderTarget = function (t, e, n) {
				void 0 === e && (e = 0),
					void 0 === n && (n = 0),
					(x = t),
					(v = e),
					(g = n),
					t && void 0 === J.get(t).__webglFramebuffer && Q.setupRenderTarget(t);
				var r = m,
					i = !1;
				if (t) {
					var a = J.get(t).__webglFramebuffer;
					t.isWebGLCubeRenderTarget
						? ((r = a[e]), (i = !0))
						: (r = t.isWebGLMultisampleRenderTarget
								? J.get(t).__webglMultisampledFramebuffer
								: a),
						A.copy(t.viewport),
						L.copy(t.scissor),
						(R = t.scissorTest);
				} else
					A.copy(O).multiplyScalar(I).floor(),
						L.copy(B).multiplyScalar(I).floor(),
						(R = z);
				if (
					(_ !== r && (mt.bindFramebuffer(36160, r), (_ = r)),
					Y.viewport(A),
					Y.scissor(L),
					Y.setScissorTest(R),
					i)
				) {
					var o = J.get(t.texture);
					mt.framebufferTexture2D(36160, 36064, 34069 + e, o.__webglTexture, n);
				}
			}),
			(this.readRenderTargetPixels = function (t, e, n, r, i, a, o) {
				if (t && t.isWebGLRenderTarget) {
					var s = J.get(t).__webglFramebuffer;
					if ((t.isWebGLCubeRenderTarget && void 0 !== o && (s = s[o]), s)) {
						var c = !1;
						s !== _ && (mt.bindFramebuffer(36160, s), (c = !0));
						try {
							var l = t.texture,
								u = l.format,
								h = l.type;
							if (u !== T && dt.convert(u) !== mt.getParameter(35739))
								return void console.error(
									'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.'
								);
							if (
								!(
									h === y ||
									dt.convert(h) === mt.getParameter(35738) ||
									(h === b &&
										(X.isWebGL2 ||
											j.get('OES_texture_float') ||
											j.get('WEBGL_color_buffer_float'))) ||
									(h === w &&
										(X.isWebGL2
											? j.get('EXT_color_buffer_float')
											: j.get('EXT_color_buffer_half_float')))
								)
							)
								return void console.error(
									'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.'
								);
							36053 === mt.checkFramebufferStatus(36160)
								? e >= 0 &&
								  e <= t.width - r &&
								  n >= 0 &&
								  n <= t.height - i &&
								  mt.readPixels(e, n, r, i, dt.convert(u), dt.convert(h), a)
								: console.error(
										'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.'
								  );
						} finally {
							c && mt.bindFramebuffer(36160, _);
						}
					}
				} else
					console.error(
						'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
					);
			}),
			(this.copyFramebufferToTexture = function (t, e, n) {
				void 0 === n && (n = 0);
				var r = Math.pow(2, -n),
					i = Math.floor(e.image.width * r),
					a = Math.floor(e.image.height * r),
					o = dt.convert(e.format);
				Q.setTexture2D(e, 0),
					mt.copyTexImage2D(3553, n, o, t.x, t.y, i, a, 0),
					Y.unbindTexture();
			}),
			(this.copyTextureToTexture = function (t, e, n, r) {
				void 0 === r && (r = 0);
				var i = e.image.width,
					a = e.image.height,
					o = dt.convert(n.format),
					s = dt.convert(n.type);
				Q.setTexture2D(n, 0),
					mt.pixelStorei(37440, n.flipY),
					mt.pixelStorei(37441, n.premultiplyAlpha),
					mt.pixelStorei(3317, n.unpackAlignment),
					e.isDataTexture
						? mt.texSubImage2D(3553, r, t.x, t.y, i, a, o, s, e.image.data)
						: e.isCompressedTexture
						? mt.compressedTexSubImage2D(
								3553,
								r,
								t.x,
								t.y,
								e.mipmaps[0].width,
								e.mipmaps[0].height,
								o,
								e.mipmaps[0].data
						  )
						: mt.texSubImage2D(3553, r, t.x, t.y, o, s, e.image),
					0 === r && n.generateMipmaps && mt.generateMipmap(3553),
					Y.unbindTexture();
			}),
			(this.initTexture = function (t) {
				Q.setTexture2D(t, 0), Y.unbindTexture();
			}),
			'undefined' != typeof __THREE_DEVTOOLS__ &&
				__THREE_DEVTOOLS__.dispatchEvent(
					new CustomEvent('observe', { detail: this })
				);
	}
	function ia(t) {
		ra.call(this, t);
	}
	(Ki.prototype = Object.assign(Object.create(Vn.prototype), {
		constructor: Ki,
		isArrayCamera: !0,
	})),
		($i.prototype = Object.assign(Object.create(be.prototype), {
			constructor: $i,
			isGroup: !0,
		})),
		Object.assign(ta.prototype, {
			constructor: ta,
			getHandSpace: function () {
				if (
					null === this._hand &&
					((this._hand = new $i()),
					(this._hand.matrixAutoUpdate = !1),
					(this._hand.visible = !1),
					(this._hand.joints = []),
					(this._hand.inputState = { pinching: !1 }),
					window.XRHand)
				)
					for (var t = 0; t <= window.XRHand.LITTLE_PHALANX_TIP; t++) {
						var e = new $i();
						(e.matrixAutoUpdate = !1),
							(e.visible = !1),
							this._hand.joints.push(e),
							this._hand.add(e);
					}
				return this._hand;
			},
			getTargetRaySpace: function () {
				return (
					null === this._targetRay &&
						((this._targetRay = new $i()),
						(this._targetRay.matrixAutoUpdate = !1),
						(this._targetRay.visible = !1)),
					this._targetRay
				);
			},
			getGripSpace: function () {
				return (
					null === this._grip &&
						((this._grip = new $i()),
						(this._grip.matrixAutoUpdate = !1),
						(this._grip.visible = !1)),
					this._grip
				);
			},
			dispatchEvent: function (t) {
				return (
					null !== this._targetRay && this._targetRay.dispatchEvent(t),
					null !== this._grip && this._grip.dispatchEvent(t),
					null !== this._hand && this._hand.dispatchEvent(t),
					this
				);
			},
			disconnect: function (t) {
				return (
					this.dispatchEvent({ type: 'disconnected', data: t }),
					null !== this._targetRay && (this._targetRay.visible = !1),
					null !== this._grip && (this._grip.visible = !1),
					null !== this._hand && (this._hand.visible = !1),
					this
				);
			},
			update: function (t, e, n) {
				var r = null,
					i = null,
					a = null,
					o = this._targetRay,
					s = this._grip,
					c = this._hand;
				if (t)
					if (c && t.hand) {
						a = !0;
						for (var l = 0; l <= window.XRHand.LITTLE_PHALANX_TIP; l++)
							if (t.hand[l]) {
								var u = e.getJointPose(t.hand[l], n),
									h = c.joints[l];
								null !== u &&
									(h.matrix.fromArray(u.transform.matrix),
									h.matrix.decompose(h.position, h.rotation, h.scale),
									(h.jointRadius = u.radius)),
									(h.visible = null !== u);
								var d = c.joints[window.XRHand.INDEX_PHALANX_TIP],
									p = c.joints[window.XRHand.THUMB_PHALANX_TIP],
									f = d.position.distanceTo(p.position);
								c.inputState.pinching && f > 0.025
									? ((c.inputState.pinching = !1),
									  this.dispatchEvent({
											type: 'pinchend',
											handedness: t.handedness,
											target: this,
									  }))
									: !c.inputState.pinching &&
									  f <= 0.015 &&
									  ((c.inputState.pinching = !0),
									  this.dispatchEvent({
											type: 'pinchstart',
											handedness: t.handedness,
											target: this,
									  }));
							}
					} else
						null !== o &&
							null !== (r = e.getPose(t.targetRaySpace, n)) &&
							(o.matrix.fromArray(r.transform.matrix),
							o.matrix.decompose(o.position, o.rotation, o.scale)),
							null !== s &&
								t.gripSpace &&
								null !== (i = e.getPose(t.gripSpace, n)) &&
								(s.matrix.fromArray(i.transform.matrix),
								s.matrix.decompose(s.position, s.rotation, s.scale));
				return (
					null !== o && (o.visible = null !== r),
					null !== s && (s.visible = null !== i),
					null !== c && (c.visible = null !== a),
					this
				);
			},
		}),
		Object.assign(ea.prototype, rt.prototype),
		(ia.prototype = Object.assign(Object.create(ra.prototype), {
			constructor: ia,
			isWebGL1Renderer: !0,
		}));
	var aa = (function () {
			function t(t, e) {
				Object.defineProperty(this, 'isFogExp2', { value: !0 }),
					(this.name = ''),
					(this.color = new Ve(t)),
					(this.density = void 0 !== e ? e : 25e-5);
			}
			var e = t.prototype;
			return (
				(e.clone = function () {
					return new t(this.color, this.density);
				}),
				(e.toJSON = function () {
					return {
						type: 'FogExp2',
						color: this.color.getHex(),
						density: this.density,
					};
				}),
				t
			);
		})(),
		oa = (function () {
			function t(t, e, n) {
				Object.defineProperty(this, 'isFog', { value: !0 }),
					(this.name = ''),
					(this.color = new Ve(t)),
					(this.near = void 0 !== e ? e : 1),
					(this.far = void 0 !== n ? n : 1e3);
			}
			var e = t.prototype;
			return (
				(e.clone = function () {
					return new t(this.color, this.near, this.far);
				}),
				(e.toJSON = function () {
					return {
						type: 'Fog',
						color: this.color.getHex(),
						near: this.near,
						far: this.far,
					};
				}),
				t
			);
		})(),
		sa = (function (t) {
			function e() {
				var e;
				return (
					(e = t.call(this) || this),
					Object.defineProperty(ht(e), 'isScene', { value: !0 }),
					(e.type = 'Scene'),
					(e.background = null),
					(e.environment = null),
					(e.fog = null),
					(e.overrideMaterial = null),
					(e.autoUpdate = !0),
					'undefined' != typeof __THREE_DEVTOOLS__ &&
						__THREE_DEVTOOLS__.dispatchEvent(
							new CustomEvent('observe', { detail: ht(e) })
						),
					e
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.copy = function (e, n) {
					return (
						t.prototype.copy.call(this, e, n),
						null !== e.background && (this.background = e.background.clone()),
						null !== e.environment &&
							(this.environment = e.environment.clone()),
						null !== e.fog && (this.fog = e.fog.clone()),
						null !== e.overrideMaterial &&
							(this.overrideMaterial = e.overrideMaterial.clone()),
						(this.autoUpdate = e.autoUpdate),
						(this.matrixAutoUpdate = e.matrixAutoUpdate),
						this
					);
				}),
				(n.toJSON = function (e) {
					var n = t.prototype.toJSON.call(this, e);
					return (
						null !== this.background &&
							(n.object.background = this.background.toJSON(e)),
						null !== this.environment &&
							(n.object.environment = this.environment.toJSON(e)),
						null !== this.fog && (n.object.fog = this.fog.toJSON()),
						n
					);
				}),
				e
			);
		})(be);
	function ca(t, e) {
		(this.array = t),
			(this.stride = e),
			(this.count = void 0 !== t ? t.length / e : 0),
			(this.usage = tt),
			(this.updateRange = { offset: 0, count: -1 }),
			(this.version = 0),
			(this.uuid = st.generateUUID());
	}
	Object.defineProperty(ca.prototype, 'needsUpdate', {
		set: function (t) {
			!0 === t && this.version++;
		},
	}),
		Object.assign(ca.prototype, {
			isInterleavedBuffer: !0,
			onUploadCallback: function () {},
			setUsage: function (t) {
				return (this.usage = t), this;
			},
			copy: function (t) {
				return (
					(this.array = new t.array.constructor(t.array)),
					(this.count = t.count),
					(this.stride = t.stride),
					(this.usage = t.usage),
					this
				);
			},
			copyAt: function (t, e, n) {
				(t *= this.stride), (n *= e.stride);
				for (var r = 0, i = this.stride; r < i; r++)
					this.array[t + r] = e.array[n + r];
				return this;
			},
			set: function (t, e) {
				return void 0 === e && (e = 0), this.array.set(t, e), this;
			},
			clone: function (t) {
				void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
					void 0 === this.array.buffer._uuid &&
						(this.array.buffer._uuid = st.generateUUID()),
					void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
						(t.arrayBuffers[this.array.buffer._uuid] =
							this.array.slice(0).buffer);
				var e = new ca(
					new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),
					this.stride
				);
				return e.setUsage(this.usage), e;
			},
			onUpload: function (t) {
				return (this.onUploadCallback = t), this;
			},
			toJSON: function (t) {
				return (
					void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
					void 0 === this.array.buffer._uuid &&
						(this.array.buffer._uuid = st.generateUUID()),
					void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
						(t.arrayBuffers[this.array.buffer._uuid] =
							Array.prototype.slice.call(new Uint32Array(this.array.buffer))),
					{
						uuid: this.uuid,
						buffer: this.array.buffer._uuid,
						type: this.array.constructor.name,
						stride: this.stride,
					}
				);
			},
		});
	var la,
		ua = new wt();
	function ha(t, e, n, r) {
		(this.name = ''),
			(this.data = t),
			(this.itemSize = e),
			(this.offset = n),
			(this.normalized = !0 === r);
	}
	function da(t) {
		qe.call(this),
			(this.type = 'SpriteMaterial'),
			(this.color = new Ve(16777215)),
			(this.map = null),
			(this.alphaMap = null),
			(this.rotation = 0),
			(this.sizeAttenuation = !0),
			(this.transparent = !0),
			this.setValues(t);
	}
	Object.defineProperties(ha.prototype, {
		count: {
			get: function () {
				return this.data.count;
			},
		},
		array: {
			get: function () {
				return this.data.array;
			},
		},
		needsUpdate: {
			set: function (t) {
				this.data.needsUpdate = t;
			},
		},
	}),
		Object.assign(ha.prototype, {
			isInterleavedBufferAttribute: !0,
			applyMatrix4: function (t) {
				for (var e = 0, n = this.data.count; e < n; e++)
					(ua.x = this.getX(e)),
						(ua.y = this.getY(e)),
						(ua.z = this.getZ(e)),
						ua.applyMatrix4(t),
						this.setXYZ(e, ua.x, ua.y, ua.z);
				return this;
			},
			setX: function (t, e) {
				return (this.data.array[t * this.data.stride + this.offset] = e), this;
			},
			setY: function (t, e) {
				return (
					(this.data.array[t * this.data.stride + this.offset + 1] = e), this
				);
			},
			setZ: function (t, e) {
				return (
					(this.data.array[t * this.data.stride + this.offset + 2] = e), this
				);
			},
			setW: function (t, e) {
				return (
					(this.data.array[t * this.data.stride + this.offset + 3] = e), this
				);
			},
			getX: function (t) {
				return this.data.array[t * this.data.stride + this.offset];
			},
			getY: function (t) {
				return this.data.array[t * this.data.stride + this.offset + 1];
			},
			getZ: function (t) {
				return this.data.array[t * this.data.stride + this.offset + 2];
			},
			getW: function (t) {
				return this.data.array[t * this.data.stride + this.offset + 3];
			},
			setXY: function (t, e, n) {
				return (
					(t = t * this.data.stride + this.offset),
					(this.data.array[t + 0] = e),
					(this.data.array[t + 1] = n),
					this
				);
			},
			setXYZ: function (t, e, n, r) {
				return (
					(t = t * this.data.stride + this.offset),
					(this.data.array[t + 0] = e),
					(this.data.array[t + 1] = n),
					(this.data.array[t + 2] = r),
					this
				);
			},
			setXYZW: function (t, e, n, r, i) {
				return (
					(t = t * this.data.stride + this.offset),
					(this.data.array[t + 0] = e),
					(this.data.array[t + 1] = n),
					(this.data.array[t + 2] = r),
					(this.data.array[t + 3] = i),
					this
				);
			},
			clone: function (t) {
				if (void 0 === t) {
					console.log(
						'THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.'
					);
					for (var e = [], n = 0; n < this.count; n++)
						for (
							var r = n * this.data.stride + this.offset, i = 0;
							i < this.itemSize;
							i++
						)
							e.push(this.data.array[r + i]);
					return new Je(
						new this.array.constructor(e),
						this.itemSize,
						this.normalized
					);
				}
				return (
					void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
					void 0 === t.interleavedBuffers[this.data.uuid] &&
						(t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
					new ha(
						t.interleavedBuffers[this.data.uuid],
						this.itemSize,
						this.offset,
						this.normalized
					)
				);
			},
			toJSON: function (t) {
				if (void 0 === t) {
					console.log(
						'THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.'
					);
					for (var e = [], n = 0; n < this.count; n++)
						for (
							var r = n * this.data.stride + this.offset, i = 0;
							i < this.itemSize;
							i++
						)
							e.push(this.data.array[r + i]);
					return {
						itemSize: this.itemSize,
						type: this.array.constructor.name,
						array: e,
						normalized: this.normalized,
					};
				}
				return (
					void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
					void 0 === t.interleavedBuffers[this.data.uuid] &&
						(t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
					{
						isInterleavedBufferAttribute: !0,
						itemSize: this.itemSize,
						data: this.data.uuid,
						offset: this.offset,
						normalized: this.normalized,
					}
				);
			},
		}),
		(da.prototype = Object.create(qe.prototype)),
		(da.prototype.constructor = da),
		(da.prototype.isSpriteMaterial = !0),
		(da.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.rotation = t.rotation),
				(this.sizeAttenuation = t.sizeAttenuation),
				this
			);
		});
	var pa = new wt(),
		fa = new wt(),
		ma = new wt(),
		va = new pt(),
		ga = new pt(),
		ya = new Jt(),
		xa = new wt(),
		_a = new wt(),
		ba = new wt(),
		wa = new pt(),
		Ma = new pt(),
		Sa = new pt();
	function Ta(t) {
		if ((be.call(this), (this.type = 'Sprite'), void 0 === la)) {
			la = new vn();
			var e = new ca(
				new Float32Array([
					-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
					0, 0, 1,
				]),
				5
			);
			la.setIndex([0, 1, 2, 0, 2, 3]),
				la.setAttribute('position', new ha(e, 3, 0, !1)),
				la.setAttribute('uv', new ha(e, 2, 3, !1));
		}
		(this.geometry = la),
			(this.material = void 0 !== t ? t : new da()),
			(this.center = new pt(0.5, 0.5));
	}
	function Ea(t, e, n, r, i, a) {
		va.subVectors(t, n).addScalar(0.5).multiply(r),
			void 0 !== i
				? ((ga.x = a * va.x - i * va.y), (ga.y = i * va.x + a * va.y))
				: ga.copy(va),
			t.copy(e),
			(t.x += ga.x),
			(t.y += ga.y),
			t.applyMatrix4(ya);
	}
	Ta.prototype = Object.assign(Object.create(be.prototype), {
		constructor: Ta,
		isSprite: !0,
		raycast: function (t, e) {
			null === t.camera &&
				console.error(
					'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'
				),
				fa.setFromMatrixScale(this.matrixWorld),
				ya.copy(t.camera.matrixWorld),
				this.modelViewMatrix.multiplyMatrices(
					t.camera.matrixWorldInverse,
					this.matrixWorld
				),
				ma.setFromMatrixPosition(this.modelViewMatrix),
				t.camera.isPerspectiveCamera &&
					!1 === this.material.sizeAttenuation &&
					fa.multiplyScalar(-ma.z);
			var n,
				r,
				i = this.material.rotation;
			0 !== i && ((r = Math.cos(i)), (n = Math.sin(i)));
			var a = this.center;
			Ea(xa.set(-0.5, -0.5, 0), ma, a, fa, n, r),
				Ea(_a.set(0.5, -0.5, 0), ma, a, fa, n, r),
				Ea(ba.set(0.5, 0.5, 0), ma, a, fa, n, r),
				wa.set(0, 0),
				Ma.set(1, 0),
				Sa.set(1, 1);
			var o = t.ray.intersectTriangle(xa, _a, ba, !1, pa);
			if (
				null !== o ||
				(Ea(_a.set(-0.5, 0.5, 0), ma, a, fa, n, r),
				Ma.set(0, 1),
				null !== (o = t.ray.intersectTriangle(xa, ba, _a, !1, pa)))
			) {
				var s = t.ray.origin.distanceTo(pa);
				s < t.near ||
					s > t.far ||
					e.push({
						distance: s,
						point: pa.clone(),
						uv: Be.getUV(pa, xa, _a, ba, wa, Ma, Sa, new pt()),
						face: null,
						object: this,
					});
			}
		},
		copy: function (t) {
			return (
				be.prototype.copy.call(this, t),
				void 0 !== t.center && this.center.copy(t.center),
				(this.material = t.material),
				this
			);
		},
	});
	var Aa,
		La,
		Ra,
		Ca,
		Pa,
		Ia = new wt(),
		Da = new wt();
	function Na() {
		be.call(this),
			(this._currentLevel = 0),
			(this.type = 'LOD'),
			Object.defineProperties(this, { levels: { enumerable: !0, value: [] } }),
			(this.autoUpdate = !0);
	}
	function Oa(t, e) {
		t &&
			t.isGeometry &&
			console.error(
				'THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.'
			),
			Nn.call(this, t, e),
			(this.type = 'SkinnedMesh'),
			(this.bindMode = 'attached'),
			(this.bindMatrix = new Jt()),
			(this.bindMatrixInverse = new Jt());
	}
	(Na.prototype = Object.assign(Object.create(be.prototype), {
		constructor: Na,
		isLOD: !0,
		copy: function (t) {
			be.prototype.copy.call(this, t, !1);
			for (var e = t.levels, n = 0, r = e.length; n < r; n++) {
				var i = e[n];
				this.addLevel(i.object.clone(), i.distance);
			}
			return (this.autoUpdate = t.autoUpdate), this;
		},
		addLevel: function (t, e) {
			void 0 === e && (e = 0), (e = Math.abs(e));
			var n,
				r = this.levels;
			for (n = 0; n < r.length && !(e < r[n].distance); n++);
			return r.splice(n, 0, { distance: e, object: t }), this.add(t), this;
		},
		getCurrentLevel: function () {
			return this._currentLevel;
		},
		getObjectForDistance: function (t) {
			var e = this.levels;
			if (e.length > 0) {
				var n, r;
				for (n = 1, r = e.length; n < r && !(t < e[n].distance); n++);
				return e[n - 1].object;
			}
			return null;
		},
		raycast: function (t, e) {
			if (this.levels.length > 0) {
				Ia.setFromMatrixPosition(this.matrixWorld);
				var n = t.ray.origin.distanceTo(Ia);
				this.getObjectForDistance(n).raycast(t, e);
			}
		},
		update: function (t) {
			var e = this.levels;
			if (e.length > 1) {
				Ia.setFromMatrixPosition(t.matrixWorld),
					Da.setFromMatrixPosition(this.matrixWorld);
				var n,
					r,
					i = Ia.distanceTo(Da) / t.zoom;
				for (
					e[0].object.visible = !0, n = 1, r = e.length;
					n < r && i >= e[n].distance;
					n++
				)
					(e[n - 1].object.visible = !1), (e[n].object.visible = !0);
				for (this._currentLevel = n - 1; n < r; n++) e[n].object.visible = !1;
			}
		},
		toJSON: function (t) {
			var e = be.prototype.toJSON.call(this, t);
			!1 === this.autoUpdate && (e.object.autoUpdate = !1),
				(e.object.levels = []);
			for (var n = this.levels, r = 0, i = n.length; r < i; r++) {
				var a = n[r];
				e.object.levels.push({ object: a.object.uuid, distance: a.distance });
			}
			return e;
		},
	})),
		(Oa.prototype = Object.assign(Object.create(Nn.prototype), {
			constructor: Oa,
			isSkinnedMesh: !0,
			copy: function (t) {
				return (
					Nn.prototype.copy.call(this, t),
					(this.bindMode = t.bindMode),
					this.bindMatrix.copy(t.bindMatrix),
					this.bindMatrixInverse.copy(t.bindMatrixInverse),
					(this.skeleton = t.skeleton),
					this
				);
			},
			bind: function (t, e) {
				(this.skeleton = t),
					void 0 === e &&
						(this.updateMatrixWorld(!0),
						this.skeleton.calculateInverses(),
						(e = this.matrixWorld)),
					this.bindMatrix.copy(e),
					this.bindMatrixInverse.getInverse(e);
			},
			pose: function () {
				this.skeleton.pose();
			},
			normalizeSkinWeights: function () {
				for (
					var t = new yt(),
						e = this.geometry.attributes.skinWeight,
						n = 0,
						r = e.count;
					n < r;
					n++
				) {
					(t.x = e.getX(n)),
						(t.y = e.getY(n)),
						(t.z = e.getZ(n)),
						(t.w = e.getW(n));
					var i = 1 / t.manhattanLength();
					i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0),
						e.setXYZW(n, t.x, t.y, t.z, t.w);
				}
			},
			updateMatrixWorld: function (t) {
				Nn.prototype.updateMatrixWorld.call(this, t),
					'attached' === this.bindMode
						? this.bindMatrixInverse.getInverse(this.matrixWorld)
						: 'detached' === this.bindMode
						? this.bindMatrixInverse.getInverse(this.bindMatrix)
						: console.warn(
								'THREE.SkinnedMesh: Unrecognized bindMode: ' + this.bindMode
						  );
			},
			boneTransform:
				((Aa = new wt()),
				(La = new yt()),
				(Ra = new yt()),
				(Ca = new wt()),
				(Pa = new Jt()),
				function (t, e) {
					var n = this.skeleton,
						r = this.geometry;
					La.fromBufferAttribute(r.attributes.skinIndex, t),
						Ra.fromBufferAttribute(r.attributes.skinWeight, t),
						Aa.fromBufferAttribute(r.attributes.position, t).applyMatrix4(
							this.bindMatrix
						),
						e.set(0, 0, 0);
					for (var i = 0; i < 4; i++) {
						var a = Ra.getComponent(i);
						if (0 !== a) {
							var o = La.getComponent(i);
							Pa.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
								e.addScaledVector(Ca.copy(Aa).applyMatrix4(Pa), a);
						}
					}
					return e.applyMatrix4(this.bindMatrixInverse);
				}),
		}));
	var Ba = new Jt(),
		za = new Jt();
	function Ga(t, e) {
		if (
			((t = t || []),
			(this.bones = t.slice(0)),
			(this.boneMatrices = new Float32Array(16 * this.bones.length)),
			(this.frame = -1),
			void 0 === e)
		)
			this.calculateInverses();
		else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
		else {
			console.warn('THREE.Skeleton boneInverses is the wrong length.'),
				(this.boneInverses = []);
			for (var n = 0, r = this.bones.length; n < r; n++)
				this.boneInverses.push(new Jt());
		}
	}
	function Fa() {
		be.call(this), (this.type = 'Bone');
	}
	Object.assign(Ga.prototype, {
		calculateInverses: function () {
			this.boneInverses = [];
			for (var t = 0, e = this.bones.length; t < e; t++) {
				var n = new Jt();
				this.bones[t] && n.getInverse(this.bones[t].matrixWorld),
					this.boneInverses.push(n);
			}
		},
		pose: function () {
			for (var t = 0, e = this.bones.length; t < e; t++) {
				var n = this.bones[t];
				n && n.matrixWorld.getInverse(this.boneInverses[t]);
			}
			for (var r = 0, i = this.bones.length; r < i; r++) {
				var a = this.bones[r];
				a &&
					(a.parent && a.parent.isBone
						? (a.matrix.getInverse(a.parent.matrixWorld),
						  a.matrix.multiply(a.matrixWorld))
						: a.matrix.copy(a.matrixWorld),
					a.matrix.decompose(a.position, a.quaternion, a.scale));
			}
		},
		update: function () {
			for (
				var t = this.bones,
					e = this.boneInverses,
					n = this.boneMatrices,
					r = this.boneTexture,
					i = 0,
					a = t.length;
				i < a;
				i++
			) {
				var o = t[i] ? t[i].matrixWorld : za;
				Ba.multiplyMatrices(o, e[i]), Ba.toArray(n, 16 * i);
			}
			void 0 !== r && (r.needsUpdate = !0);
		},
		clone: function () {
			return new Ga(this.bones, this.boneInverses);
		},
		getBoneByName: function (t) {
			for (var e = 0, n = this.bones.length; e < n; e++) {
				var r = this.bones[e];
				if (r.name === t) return r;
			}
		},
		dispose: function () {
			this.boneTexture &&
				(this.boneTexture.dispose(), (this.boneTexture = void 0));
		},
	}),
		(Fa.prototype = Object.assign(Object.create(be.prototype), {
			constructor: Fa,
			isBone: !0,
		}));
	var Ua = new Jt(),
		Ha = new Jt(),
		ka = [],
		Va = new Nn();
	function Wa(t, e, n) {
		Nn.call(this, t, e),
			(this.instanceMatrix = new Je(new Float32Array(16 * n), 16)),
			(this.instanceColor = null),
			(this.count = n),
			(this.frustumCulled = !1);
	}
	function ja(t) {
		qe.call(this),
			(this.type = 'LineBasicMaterial'),
			(this.color = new Ve(16777215)),
			(this.linewidth = 1),
			(this.linecap = 'round'),
			(this.linejoin = 'round'),
			(this.morphTargets = !1),
			this.setValues(t);
	}
	(Wa.prototype = Object.assign(Object.create(Nn.prototype), {
		constructor: Wa,
		isInstancedMesh: !0,
		copy: function (t) {
			return (
				Nn.prototype.copy.call(this, t),
				this.instanceMatrix.copy(t.instanceMatrix),
				(this.count = t.count),
				this
			);
		},
		setColorAt: function (t, e) {
			null === this.instanceColor &&
				(this.instanceColor = new Je(new Float32Array(3 * this.count), 3)),
				e.toArray(this.instanceColor.array, 3 * t);
		},
		getMatrixAt: function (t, e) {
			e.fromArray(this.instanceMatrix.array, 16 * t);
		},
		raycast: function (t, e) {
			var n = this.matrixWorld,
				r = this.count;
			if (
				((Va.geometry = this.geometry),
				(Va.material = this.material),
				void 0 !== Va.material)
			)
				for (var i = 0; i < r; i++) {
					this.getMatrixAt(i, Ua),
						Ha.multiplyMatrices(n, Ua),
						(Va.matrixWorld = Ha),
						Va.raycast(t, ka);
					for (var a = 0, o = ka.length; a < o; a++) {
						var s = ka[a];
						(s.instanceId = i), (s.object = this), e.push(s);
					}
					ka.length = 0;
				}
		},
		setMatrixAt: function (t, e) {
			e.toArray(this.instanceMatrix.array, 16 * t);
		},
		updateMorphTargets: function () {},
	})),
		(ja.prototype = Object.create(qe.prototype)),
		(ja.prototype.constructor = ja),
		(ja.prototype.isLineBasicMaterial = !0),
		(ja.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.color.copy(t.color),
				(this.linewidth = t.linewidth),
				(this.linecap = t.linecap),
				(this.linejoin = t.linejoin),
				(this.morphTargets = t.morphTargets),
				this
			);
		});
	var qa = new wt(),
		Xa = new wt(),
		Ya = new Jt(),
		Za = new Zt(),
		Ja = new Ht();
	function Qa(t, e, n) {
		1 === n &&
			console.error(
				'THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.'
			),
			be.call(this),
			(this.type = 'Line'),
			(this.geometry = void 0 !== t ? t : new vn()),
			(this.material = void 0 !== e ? e : new ja()),
			this.updateMorphTargets();
	}
	Qa.prototype = Object.assign(Object.create(be.prototype), {
		constructor: Qa,
		isLine: !0,
		copy: function (t) {
			return (
				be.prototype.copy.call(this, t),
				(this.material = t.material),
				(this.geometry = t.geometry),
				this
			);
		},
		computeLineDistances: function () {
			var t = this.geometry;
			if (t.isBufferGeometry)
				if (null === t.index) {
					for (
						var e = t.attributes.position, n = [0], r = 1, i = e.count;
						r < i;
						r++
					)
						qa.fromBufferAttribute(e, r - 1),
							Xa.fromBufferAttribute(e, r),
							(n[r] = n[r - 1]),
							(n[r] += qa.distanceTo(Xa));
					t.setAttribute('lineDistance', new an(n, 1));
				} else
					console.warn(
						'THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
					);
			else if (t.isGeometry) {
				var a = t.vertices,
					o = t.lineDistances;
				o[0] = 0;
				for (var s = 1, c = a.length; s < c; s++)
					(o[s] = o[s - 1]), (o[s] += a[s - 1].distanceTo(a[s]));
			}
			return this;
		},
		raycast: function (t, e) {
			var n = this.geometry,
				r = this.matrixWorld,
				i = t.params.Line.threshold;
			if (
				(null === n.boundingSphere && n.computeBoundingSphere(),
				Ja.copy(n.boundingSphere),
				Ja.applyMatrix4(r),
				(Ja.radius += i),
				!1 !== t.ray.intersectsSphere(Ja))
			) {
				Ya.getInverse(r), Za.copy(t.ray).applyMatrix4(Ya);
				var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					o = a * a,
					s = new wt(),
					c = new wt(),
					l = new wt(),
					u = new wt(),
					h = this.isLineSegments ? 2 : 1;
				if (n.isBufferGeometry) {
					var d = n.index,
						p = n.attributes.position;
					if (null !== d)
						for (var f = d.array, m = 0, v = f.length - 1; m < v; m += h) {
							var g = f[m],
								y = f[m + 1];
							if (
								(s.fromBufferAttribute(p, g),
								c.fromBufferAttribute(p, y),
								!(Za.distanceSqToSegment(s, c, u, l) > o))
							) {
								u.applyMatrix4(this.matrixWorld);
								var x = t.ray.origin.distanceTo(u);
								x < t.near ||
									x > t.far ||
									e.push({
										distance: x,
										point: l.clone().applyMatrix4(this.matrixWorld),
										index: m,
										face: null,
										faceIndex: null,
										object: this,
									});
							}
						}
					else
						for (var _ = 0, b = p.count - 1; _ < b; _ += h) {
							if (
								(s.fromBufferAttribute(p, _),
								c.fromBufferAttribute(p, _ + 1),
								!(Za.distanceSqToSegment(s, c, u, l) > o))
							) {
								u.applyMatrix4(this.matrixWorld);
								var w = t.ray.origin.distanceTo(u);
								w < t.near ||
									w > t.far ||
									e.push({
										distance: w,
										point: l.clone().applyMatrix4(this.matrixWorld),
										index: _,
										face: null,
										faceIndex: null,
										object: this,
									});
							}
						}
				} else if (n.isGeometry)
					for (var M = n.vertices, S = M.length, T = 0; T < S - 1; T += h) {
						if (!(Za.distanceSqToSegment(M[T], M[T + 1], u, l) > o)) {
							u.applyMatrix4(this.matrixWorld);
							var E = t.ray.origin.distanceTo(u);
							E < t.near ||
								E > t.far ||
								e.push({
									distance: E,
									point: l.clone().applyMatrix4(this.matrixWorld),
									index: T,
									face: null,
									faceIndex: null,
									object: this,
								});
						}
					}
			}
		},
		updateMorphTargets: function () {
			var t = this.geometry;
			if (t.isBufferGeometry) {
				var e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					var r = e[n[0]];
					if (void 0 !== r) {
						(this.morphTargetInfluences = []),
							(this.morphTargetDictionary = {});
						for (var i = 0, a = r.length; i < a; i++) {
							var o = r[i].name || String(i);
							this.morphTargetInfluences.push(0),
								(this.morphTargetDictionary[o] = i);
						}
					}
				}
			} else {
				var s = t.morphTargets;
				void 0 !== s &&
					s.length > 0 &&
					console.error(
						'THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.'
					);
			}
		},
	});
	var Ka = new wt(),
		$a = new wt();
	function to(t, e) {
		Qa.call(this, t, e), (this.type = 'LineSegments');
	}
	function eo(t, e) {
		Qa.call(this, t, e), (this.type = 'LineLoop');
	}
	function no(t) {
		qe.call(this),
			(this.type = 'PointsMaterial'),
			(this.color = new Ve(16777215)),
			(this.map = null),
			(this.alphaMap = null),
			(this.size = 1),
			(this.sizeAttenuation = !0),
			(this.morphTargets = !1),
			this.setValues(t);
	}
	(to.prototype = Object.assign(Object.create(Qa.prototype), {
		constructor: to,
		isLineSegments: !0,
		computeLineDistances: function () {
			var t = this.geometry;
			if (t.isBufferGeometry)
				if (null === t.index) {
					for (
						var e = t.attributes.position, n = [], r = 0, i = e.count;
						r < i;
						r += 2
					)
						Ka.fromBufferAttribute(e, r),
							$a.fromBufferAttribute(e, r + 1),
							(n[r] = 0 === r ? 0 : n[r - 1]),
							(n[r + 1] = n[r] + Ka.distanceTo($a));
					t.setAttribute('lineDistance', new an(n, 1));
				} else
					console.warn(
						'THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.'
					);
			else if (t.isGeometry)
				for (
					var a = t.vertices, o = t.lineDistances, s = 0, c = a.length;
					s < c;
					s += 2
				)
					Ka.copy(a[s]),
						$a.copy(a[s + 1]),
						(o[s] = 0 === s ? 0 : o[s - 1]),
						(o[s + 1] = o[s] + Ka.distanceTo($a));
			return this;
		},
	})),
		(eo.prototype = Object.assign(Object.create(Qa.prototype), {
			constructor: eo,
			isLineLoop: !0,
		})),
		(no.prototype = Object.create(qe.prototype)),
		(no.prototype.constructor = no),
		(no.prototype.isPointsMaterial = !0),
		(no.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.alphaMap = t.alphaMap),
				(this.size = t.size),
				(this.sizeAttenuation = t.sizeAttenuation),
				(this.morphTargets = t.morphTargets),
				this
			);
		});
	var ro = new Jt(),
		io = new Zt(),
		ao = new Ht(),
		oo = new wt();
	function so(t, e) {
		be.call(this),
			(this.type = 'Points'),
			(this.geometry = void 0 !== t ? t : new vn()),
			(this.material = void 0 !== e ? e : new no()),
			this.updateMorphTargets();
	}
	function co(t, e, n, r, i, a, o) {
		var s = io.distanceSqToPoint(t);
		if (s < n) {
			var c = new wt();
			io.closestPointToPoint(t, c), c.applyMatrix4(r);
			var l = i.ray.origin.distanceTo(c);
			if (l < i.near || l > i.far) return;
			a.push({
				distance: l,
				distanceToRay: Math.sqrt(s),
				point: c,
				index: e,
				face: null,
				object: o,
			});
		}
	}
	function lo(t, e, n, r, i, a, o, s, c) {
		gt.call(this, t, e, n, r, i, a, o, s, c),
			(this.format = void 0 !== o ? o : S),
			(this.minFilter = void 0 !== a ? a : m),
			(this.magFilter = void 0 !== i ? i : m),
			(this.generateMipmaps = !1);
		var l = this;
		'requestVideoFrameCallback' in t &&
			t.requestVideoFrameCallback(function e() {
				(l.needsUpdate = !0), t.requestVideoFrameCallback(e);
			});
	}
	function uo(t, e, n, r, i, a, o, s, c, l, u, h) {
		gt.call(this, null, a, o, s, c, l, r, i, u, h),
			(this.image = { width: e, height: n }),
			(this.mipmaps = t),
			(this.flipY = !1),
			(this.generateMipmaps = !1);
	}
	function ho(t, e, n, r, i, a, o, s, c) {
		gt.call(this, t, e, n, r, i, a, o, s, c), (this.needsUpdate = !0);
	}
	function po(t, e, n, r, i, a, o, s, c, l) {
		if ((l = void 0 !== l ? l : E) !== E && l !== A)
			throw new Error(
				'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat'
			);
		void 0 === n && l === E && (n = x),
			void 0 === n && l === A && (n = M),
			gt.call(this, null, r, i, a, o, s, l, n, c),
			(this.image = { width: t, height: e }),
			(this.magFilter = void 0 !== o ? o : d),
			(this.minFilter = void 0 !== s ? s : d),
			(this.flipY = !1),
			(this.generateMipmaps = !1);
	}
	(so.prototype = Object.assign(Object.create(be.prototype), {
		constructor: so,
		isPoints: !0,
		copy: function (t) {
			return (
				be.prototype.copy.call(this, t),
				(this.material = t.material),
				(this.geometry = t.geometry),
				this
			);
		},
		raycast: function (t, e) {
			var n = this.geometry,
				r = this.matrixWorld,
				i = t.params.Points.threshold;
			if (
				(null === n.boundingSphere && n.computeBoundingSphere(),
				ao.copy(n.boundingSphere),
				ao.applyMatrix4(r),
				(ao.radius += i),
				!1 !== t.ray.intersectsSphere(ao))
			) {
				ro.getInverse(r), io.copy(t.ray).applyMatrix4(ro);
				var a = i / ((this.scale.x + this.scale.y + this.scale.z) / 3),
					o = a * a;
				if (n.isBufferGeometry) {
					var s = n.index,
						c = n.attributes.position;
					if (null !== s)
						for (var l = s.array, u = 0, h = l.length; u < h; u++) {
							var d = l[u];
							oo.fromBufferAttribute(c, d), co(oo, d, o, r, t, e, this);
						}
					else
						for (var p = 0, f = c.count; p < f; p++)
							oo.fromBufferAttribute(c, p), co(oo, p, o, r, t, e, this);
				} else
					for (var m = n.vertices, v = 0, g = m.length; v < g; v++)
						co(m[v], v, o, r, t, e, this);
			}
		},
		updateMorphTargets: function () {
			var t = this.geometry;
			if (t.isBufferGeometry) {
				var e = t.morphAttributes,
					n = Object.keys(e);
				if (n.length > 0) {
					var r = e[n[0]];
					if (void 0 !== r) {
						(this.morphTargetInfluences = []),
							(this.morphTargetDictionary = {});
						for (var i = 0, a = r.length; i < a; i++) {
							var o = r[i].name || String(i);
							this.morphTargetInfluences.push(0),
								(this.morphTargetDictionary[o] = i);
						}
					}
				}
			} else {
				var s = t.morphTargets;
				void 0 !== s &&
					s.length > 0 &&
					console.error(
						'THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.'
					);
			}
		},
	})),
		(lo.prototype = Object.assign(Object.create(gt.prototype), {
			constructor: lo,
			isVideoTexture: !0,
			update: function () {
				var t = this.image;
				!1 === 'requestVideoFrameCallback' in t &&
					t.readyState >= t.HAVE_CURRENT_DATA &&
					(this.needsUpdate = !0);
			},
		})),
		(uo.prototype = Object.create(gt.prototype)),
		(uo.prototype.constructor = uo),
		(uo.prototype.isCompressedTexture = !0),
		(ho.prototype = Object.create(gt.prototype)),
		(ho.prototype.constructor = ho),
		(ho.prototype.isCanvasTexture = !0),
		(po.prototype = Object.create(gt.prototype)),
		(po.prototype.constructor = po),
		(po.prototype.isDepthTexture = !0);
	var fo = 0,
		mo = new Jt(),
		vo = new be(),
		go = new wt();
	function yo() {
		Object.defineProperty(this, 'id', { value: (fo += 2) }),
			(this.uuid = st.generateUUID()),
			(this.name = ''),
			(this.type = 'Geometry'),
			(this.vertices = []),
			(this.colors = []),
			(this.faces = []),
			(this.faceVertexUvs = [[]]),
			(this.morphTargets = []),
			(this.morphNormals = []),
			(this.skinWeights = []),
			(this.skinIndices = []),
			(this.lineDistances = []),
			(this.boundingBox = null),
			(this.boundingSphere = null),
			(this.elementsNeedUpdate = !1),
			(this.verticesNeedUpdate = !1),
			(this.uvsNeedUpdate = !1),
			(this.normalsNeedUpdate = !1),
			(this.colorsNeedUpdate = !1),
			(this.lineDistancesNeedUpdate = !1),
			(this.groupsNeedUpdate = !1);
	}
	yo.prototype = Object.assign(Object.create(rt.prototype), {
		constructor: yo,
		isGeometry: !0,
		applyMatrix4: function (t) {
			for (
				var e = new ft().getNormalMatrix(t), n = 0, r = this.vertices.length;
				n < r;
				n++
			) {
				this.vertices[n].applyMatrix4(t);
			}
			for (var i = 0, a = this.faces.length; i < a; i++) {
				var o = this.faces[i];
				o.normal.applyMatrix3(e).normalize();
				for (var s = 0, c = o.vertexNormals.length; s < c; s++)
					o.vertexNormals[s].applyMatrix3(e).normalize();
			}
			return (
				null !== this.boundingBox && this.computeBoundingBox(),
				null !== this.boundingSphere && this.computeBoundingSphere(),
				(this.verticesNeedUpdate = !0),
				(this.normalsNeedUpdate = !0),
				this
			);
		},
		rotateX: function (t) {
			return mo.makeRotationX(t), this.applyMatrix4(mo), this;
		},
		rotateY: function (t) {
			return mo.makeRotationY(t), this.applyMatrix4(mo), this;
		},
		rotateZ: function (t) {
			return mo.makeRotationZ(t), this.applyMatrix4(mo), this;
		},
		translate: function (t, e, n) {
			return mo.makeTranslation(t, e, n), this.applyMatrix4(mo), this;
		},
		scale: function (t, e, n) {
			return mo.makeScale(t, e, n), this.applyMatrix4(mo), this;
		},
		lookAt: function (t) {
			return (
				vo.lookAt(t), vo.updateMatrix(), this.applyMatrix4(vo.matrix), this
			);
		},
		fromBufferGeometry: function (t) {
			var e = this,
				n = null !== t.index ? t.index : void 0,
				r = t.attributes;
			if (void 0 === r.position)
				return (
					console.error(
						'THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion.'
					),
					this
				);
			var i = r.position,
				a = r.normal,
				o = r.color,
				s = r.uv,
				c = r.uv2;
			void 0 !== c && (this.faceVertexUvs[1] = []);
			for (var l = 0; l < i.count; l++)
				e.vertices.push(new wt().fromBufferAttribute(i, l)),
					void 0 !== o && e.colors.push(new Ve().fromBufferAttribute(o, l));
			function u(t, n, r, i) {
				var l =
						void 0 === o
							? []
							: [e.colors[t].clone(), e.colors[n].clone(), e.colors[r].clone()],
					u =
						void 0 === a
							? []
							: [
									new wt().fromBufferAttribute(a, t),
									new wt().fromBufferAttribute(a, n),
									new wt().fromBufferAttribute(a, r),
							  ],
					h = new We(t, n, r, u, l, i);
				e.faces.push(h),
					void 0 !== s &&
						e.faceVertexUvs[0].push([
							new pt().fromBufferAttribute(s, t),
							new pt().fromBufferAttribute(s, n),
							new pt().fromBufferAttribute(s, r),
						]),
					void 0 !== c &&
						e.faceVertexUvs[1].push([
							new pt().fromBufferAttribute(c, t),
							new pt().fromBufferAttribute(c, n),
							new pt().fromBufferAttribute(c, r),
						]);
			}
			var h = t.groups;
			if (h.length > 0)
				for (var d = 0; d < h.length; d++)
					for (var p = h[d], f = p.start, m = f, v = f + p.count; m < v; m += 3)
						void 0 !== n
							? u(n.getX(m), n.getX(m + 1), n.getX(m + 2), p.materialIndex)
							: u(m, m + 1, m + 2, p.materialIndex);
			else if (void 0 !== n)
				for (var g = 0; g < n.count; g += 3)
					u(n.getX(g), n.getX(g + 1), n.getX(g + 2));
			else for (var y = 0; y < i.count; y += 3) u(y, y + 1, y + 2);
			return (
				this.computeFaceNormals(),
				null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
				null !== t.boundingSphere &&
					(this.boundingSphere = t.boundingSphere.clone()),
				this
			);
		},
		center: function () {
			return (
				this.computeBoundingBox(),
				this.boundingBox.getCenter(go).negate(),
				this.translate(go.x, go.y, go.z),
				this
			);
		},
		normalize: function () {
			this.computeBoundingSphere();
			var t = this.boundingSphere.center,
				e = this.boundingSphere.radius,
				n = 0 === e ? 1 : 1 / e,
				r = new Jt();
			return (
				r.set(
					n,
					0,
					0,
					-n * t.x,
					0,
					n,
					0,
					-n * t.y,
					0,
					0,
					n,
					-n * t.z,
					0,
					0,
					0,
					1
				),
				this.applyMatrix4(r),
				this
			);
		},
		computeFaceNormals: function () {
			for (
				var t = new wt(), e = new wt(), n = 0, r = this.faces.length;
				n < r;
				n++
			) {
				var i = this.faces[n],
					a = this.vertices[i.a],
					o = this.vertices[i.b],
					s = this.vertices[i.c];
				t.subVectors(s, o),
					e.subVectors(a, o),
					t.cross(e),
					t.normalize(),
					i.normal.copy(t);
			}
		},
		computeVertexNormals: function (t) {
			void 0 === t && (t = !0);
			for (
				var e = new Array(this.vertices.length),
					n = 0,
					r = this.vertices.length;
				n < r;
				n++
			)
				e[n] = new wt();
			if (t)
				for (
					var i = new wt(), a = new wt(), o = 0, s = this.faces.length;
					o < s;
					o++
				) {
					var c = this.faces[o],
						l = this.vertices[c.a],
						u = this.vertices[c.b],
						h = this.vertices[c.c];
					i.subVectors(h, u),
						a.subVectors(l, u),
						i.cross(a),
						e[c.a].add(i),
						e[c.b].add(i),
						e[c.c].add(i);
				}
			else {
				this.computeFaceNormals();
				for (var d = 0, p = this.faces.length; d < p; d++) {
					var f = this.faces[d];
					e[f.a].add(f.normal), e[f.b].add(f.normal), e[f.c].add(f.normal);
				}
			}
			for (var m = 0, v = this.vertices.length; m < v; m++) e[m].normalize();
			for (var g = 0, y = this.faces.length; g < y; g++) {
				var x = this.faces[g],
					_ = x.vertexNormals;
				3 === _.length
					? (_[0].copy(e[x.a]), _[1].copy(e[x.b]), _[2].copy(e[x.c]))
					: ((_[0] = e[x.a].clone()),
					  (_[1] = e[x.b].clone()),
					  (_[2] = e[x.c].clone()));
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0);
		},
		computeFlatVertexNormals: function () {
			this.computeFaceNormals();
			for (var t = 0, e = this.faces.length; t < e; t++) {
				var n = this.faces[t],
					r = n.vertexNormals;
				3 === r.length
					? (r[0].copy(n.normal), r[1].copy(n.normal), r[2].copy(n.normal))
					: ((r[0] = n.normal.clone()),
					  (r[1] = n.normal.clone()),
					  (r[2] = n.normal.clone()));
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0);
		},
		computeMorphNormals: function () {
			for (var t = 0, e = this.faces.length; t < e; t++) {
				var n = this.faces[t];
				n.__originalFaceNormal
					? n.__originalFaceNormal.copy(n.normal)
					: (n.__originalFaceNormal = n.normal.clone()),
					n.__originalVertexNormals || (n.__originalVertexNormals = []);
				for (var r = 0, i = n.vertexNormals.length; r < i; r++)
					n.__originalVertexNormals[r]
						? n.__originalVertexNormals[r].copy(n.vertexNormals[r])
						: (n.__originalVertexNormals[r] = n.vertexNormals[r].clone());
			}
			var a = new yo();
			a.faces = this.faces;
			for (var o = 0, s = this.morphTargets.length; o < s; o++) {
				if (!this.morphNormals[o]) {
					(this.morphNormals[o] = {}),
						(this.morphNormals[o].faceNormals = []),
						(this.morphNormals[o].vertexNormals = []);
					for (
						var c = this.morphNormals[o].faceNormals,
							l = this.morphNormals[o].vertexNormals,
							u = 0,
							h = this.faces.length;
						u < h;
						u++
					) {
						var d = new wt(),
							p = { a: new wt(), b: new wt(), c: new wt() };
						c.push(d), l.push(p);
					}
				}
				var f = this.morphNormals[o];
				(a.vertices = this.morphTargets[o].vertices),
					a.computeFaceNormals(),
					a.computeVertexNormals();
				for (var m = 0, v = this.faces.length; m < v; m++) {
					var g = this.faces[m],
						y = f.faceNormals[m],
						x = f.vertexNormals[m];
					y.copy(g.normal),
						x.a.copy(g.vertexNormals[0]),
						x.b.copy(g.vertexNormals[1]),
						x.c.copy(g.vertexNormals[2]);
				}
			}
			for (var _ = 0, b = this.faces.length; _ < b; _++) {
				var w = this.faces[_];
				(w.normal = w.__originalFaceNormal),
					(w.vertexNormals = w.__originalVertexNormals);
			}
		},
		computeBoundingBox: function () {
			null === this.boundingBox && (this.boundingBox = new Tt()),
				this.boundingBox.setFromPoints(this.vertices);
		},
		computeBoundingSphere: function () {
			null === this.boundingSphere && (this.boundingSphere = new Ht()),
				this.boundingSphere.setFromPoints(this.vertices);
		},
		merge: function (t, e, n) {
			if (t && t.isGeometry) {
				var r,
					i = this.vertices.length,
					a = this.vertices,
					o = t.vertices,
					s = this.faces,
					c = t.faces,
					l = this.colors,
					u = t.colors;
				void 0 === n && (n = 0),
					void 0 !== e && (r = new ft().getNormalMatrix(e));
				for (var h = 0, d = o.length; h < d; h++) {
					var p = o[h].clone();
					void 0 !== e && p.applyMatrix4(e), a.push(p);
				}
				for (var f = 0, m = u.length; f < m; f++) l.push(u[f].clone());
				for (var v = 0, g = c.length; v < g; v++) {
					var y = c[v],
						x = void 0,
						_ = void 0,
						b = y.vertexNormals,
						w = y.vertexColors,
						M = new We(y.a + i, y.b + i, y.c + i);
					M.normal.copy(y.normal),
						void 0 !== r && M.normal.applyMatrix3(r).normalize();
					for (var S = 0, T = b.length; S < T; S++)
						(x = b[S].clone()),
							void 0 !== r && x.applyMatrix3(r).normalize(),
							M.vertexNormals.push(x);
					M.color.copy(y.color);
					for (var E = 0, A = w.length; E < A; E++)
						(_ = w[E]), M.vertexColors.push(_.clone());
					(M.materialIndex = y.materialIndex + n), s.push(M);
				}
				for (var L = 0, R = t.faceVertexUvs.length; L < R; L++) {
					var C = t.faceVertexUvs[L];
					void 0 === this.faceVertexUvs[L] && (this.faceVertexUvs[L] = []);
					for (var P = 0, I = C.length; P < I; P++) {
						for (var D = C[P], N = [], O = 0, B = D.length; O < B; O++)
							N.push(D[O].clone());
						this.faceVertexUvs[L].push(N);
					}
				}
			} else
				console.error(
					'THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.',
					t
				);
		},
		mergeMesh: function (t) {
			t && t.isMesh
				? (t.matrixAutoUpdate && t.updateMatrix(),
				  this.merge(t.geometry, t.matrix))
				: console.error(
						'THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.',
						t
				  );
		},
		mergeVertices: function () {
			for (
				var t = {},
					e = [],
					n = [],
					r = Math.pow(10, 4),
					i = 0,
					a = this.vertices.length;
				i < a;
				i++
			) {
				var o = this.vertices[i],
					s =
						Math.round(o.x * r) +
						'_' +
						Math.round(o.y * r) +
						'_' +
						Math.round(o.z * r);
				void 0 === t[s]
					? ((t[s] = i), e.push(this.vertices[i]), (n[i] = e.length - 1))
					: (n[i] = n[t[s]]);
			}
			for (var c = [], l = 0, u = this.faces.length; l < u; l++) {
				var h = this.faces[l];
				(h.a = n[h.a]), (h.b = n[h.b]), (h.c = n[h.c]);
				for (var d = [h.a, h.b, h.c], p = 0; p < 3; p++)
					if (d[p] === d[(p + 1) % 3]) {
						c.push(l);
						break;
					}
			}
			for (var f = c.length - 1; f >= 0; f--) {
				var m = c[f];
				this.faces.splice(m, 1);
				for (var v = 0, g = this.faceVertexUvs.length; v < g; v++)
					this.faceVertexUvs[v].splice(m, 1);
			}
			var y = this.vertices.length - e.length;
			return (this.vertices = e), y;
		},
		setFromPoints: function (t) {
			this.vertices = [];
			for (var e = 0, n = t.length; e < n; e++) {
				var r = t[e];
				this.vertices.push(new wt(r.x, r.y, r.z || 0));
			}
			return this;
		},
		sortFacesByMaterialIndex: function () {
			for (var t = this.faces, e = t.length, n = 0; n < e; n++) t[n]._id = n;
			t.sort(function (t, e) {
				return t.materialIndex - e.materialIndex;
			});
			var r,
				i,
				a = this.faceVertexUvs[0],
				o = this.faceVertexUvs[1];
			a && a.length === e && (r = []), o && o.length === e && (i = []);
			for (var s = 0; s < e; s++) {
				var c = t[s]._id;
				r && r.push(a[c]), i && i.push(o[c]);
			}
			r && (this.faceVertexUvs[0] = r), i && (this.faceVertexUvs[1] = i);
		},
		toJSON: function () {
			var t = {
				metadata: {
					version: 4.5,
					type: 'Geometry',
					generator: 'Geometry.toJSON',
				},
			};
			if (
				((t.uuid = this.uuid),
				(t.type = this.type),
				'' !== this.name && (t.name = this.name),
				void 0 !== this.parameters)
			) {
				var e = this.parameters;
				for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
				return t;
			}
			for (var r = [], i = 0; i < this.vertices.length; i++) {
				var a = this.vertices[i];
				r.push(a.x, a.y, a.z);
			}
			for (
				var o = [], s = [], c = {}, l = [], u = {}, h = [], d = {}, p = 0;
				p < this.faces.length;
				p++
			) {
				var f = this.faces[p],
					m = void 0 !== this.faceVertexUvs[0][p],
					v = f.normal.length() > 0,
					g = f.vertexNormals.length > 0,
					y = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
					x = f.vertexColors.length > 0,
					_ = 0;
				if (
					((_ = S(_, 0, 0)),
					(_ = S(_, 1, !0)),
					(_ = S(_, 2, !1)),
					(_ = S(_, 3, m)),
					(_ = S(_, 4, v)),
					(_ = S(_, 5, g)),
					(_ = S(_, 6, y)),
					(_ = S(_, 7, x)),
					o.push(_),
					o.push(f.a, f.b, f.c),
					o.push(f.materialIndex),
					m)
				) {
					var b = this.faceVertexUvs[0][p];
					o.push(A(b[0]), A(b[1]), A(b[2]));
				}
				if ((v && o.push(T(f.normal)), g)) {
					var w = f.vertexNormals;
					o.push(T(w[0]), T(w[1]), T(w[2]));
				}
				if ((y && o.push(E(f.color)), x)) {
					var M = f.vertexColors;
					o.push(E(M[0]), E(M[1]), E(M[2]));
				}
			}
			function S(t, e, n) {
				return n ? t | (1 << e) : t & ~(1 << e);
			}
			function T(t) {
				var e = t.x.toString() + t.y.toString() + t.z.toString();
				return (
					void 0 !== c[e] || ((c[e] = s.length / 3), s.push(t.x, t.y, t.z)),
					c[e]
				);
			}
			function E(t) {
				var e = t.r.toString() + t.g.toString() + t.b.toString();
				return void 0 !== u[e] || ((u[e] = l.length), l.push(t.getHex())), u[e];
			}
			function A(t) {
				var e = t.x.toString() + t.y.toString();
				return (
					void 0 !== d[e] || ((d[e] = h.length / 2), h.push(t.x, t.y)), d[e]
				);
			}
			return (
				(t.data = {}),
				(t.data.vertices = r),
				(t.data.normals = s),
				l.length > 0 && (t.data.colors = l),
				h.length > 0 && (t.data.uvs = [h]),
				(t.data.faces = o),
				t
			);
		},
		clone: function () {
			return new yo().copy(this);
		},
		copy: function (t) {
			(this.vertices = []),
				(this.colors = []),
				(this.faces = []),
				(this.faceVertexUvs = [[]]),
				(this.morphTargets = []),
				(this.morphNormals = []),
				(this.skinWeights = []),
				(this.skinIndices = []),
				(this.lineDistances = []),
				(this.boundingBox = null),
				(this.boundingSphere = null),
				(this.name = t.name);
			for (var e = t.vertices, n = 0, r = e.length; n < r; n++)
				this.vertices.push(e[n].clone());
			for (var i = t.colors, a = 0, o = i.length; a < o; a++)
				this.colors.push(i[a].clone());
			for (var s = t.faces, c = 0, l = s.length; c < l; c++)
				this.faces.push(s[c].clone());
			for (var u = 0, h = t.faceVertexUvs.length; u < h; u++) {
				var d = t.faceVertexUvs[u];
				void 0 === this.faceVertexUvs[u] && (this.faceVertexUvs[u] = []);
				for (var p = 0, f = d.length; p < f; p++) {
					for (var m = d[p], v = [], g = 0, y = m.length; g < y; g++) {
						var x = m[g];
						v.push(x.clone());
					}
					this.faceVertexUvs[u].push(v);
				}
			}
			for (var _ = t.morphTargets, b = 0, w = _.length; b < w; b++) {
				var M = {};
				if (((M.name = _[b].name), void 0 !== _[b].vertices)) {
					M.vertices = [];
					for (var S = 0, T = _[b].vertices.length; S < T; S++)
						M.vertices.push(_[b].vertices[S].clone());
				}
				if (void 0 !== _[b].normals) {
					M.normals = [];
					for (var E = 0, A = _[b].normals.length; E < A; E++)
						M.normals.push(_[b].normals[E].clone());
				}
				this.morphTargets.push(M);
			}
			for (var L = t.morphNormals, R = 0, C = L.length; R < C; R++) {
				var P = {};
				if (void 0 !== L[R].vertexNormals) {
					P.vertexNormals = [];
					for (var I = 0, D = L[R].vertexNormals.length; I < D; I++) {
						var N = L[R].vertexNormals[I],
							O = {};
						(O.a = N.a.clone()),
							(O.b = N.b.clone()),
							(O.c = N.c.clone()),
							P.vertexNormals.push(O);
					}
				}
				if (void 0 !== L[R].faceNormals) {
					P.faceNormals = [];
					for (var B = 0, z = L[R].faceNormals.length; B < z; B++)
						P.faceNormals.push(L[R].faceNormals[B].clone());
				}
				this.morphNormals.push(P);
			}
			for (var G = t.skinWeights, F = 0, U = G.length; F < U; F++)
				this.skinWeights.push(G[F].clone());
			for (var H = t.skinIndices, k = 0, V = H.length; k < V; k++)
				this.skinIndices.push(H[k].clone());
			for (var W = t.lineDistances, j = 0, q = W.length; j < q; j++)
				this.lineDistances.push(W[j]);
			var X = t.boundingBox;
			null !== X && (this.boundingBox = X.clone());
			var Y = t.boundingSphere;
			return (
				null !== Y && (this.boundingSphere = Y.clone()),
				(this.elementsNeedUpdate = t.elementsNeedUpdate),
				(this.verticesNeedUpdate = t.verticesNeedUpdate),
				(this.uvsNeedUpdate = t.uvsNeedUpdate),
				(this.normalsNeedUpdate = t.normalsNeedUpdate),
				(this.colorsNeedUpdate = t.colorsNeedUpdate),
				(this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate),
				(this.groupsNeedUpdate = t.groupsNeedUpdate),
				this
			);
		},
		dispose: function () {
			this.dispatchEvent({ type: 'dispose' });
		},
	});
	var xo = (function (t) {
			function e(e, n, r, i, a, o) {
				var s;
				return (
					((s = t.call(this) || this).type = 'BoxGeometry'),
					(s.parameters = {
						width: e,
						height: n,
						depth: r,
						widthSegments: i,
						heightSegments: a,
						depthSegments: o,
					}),
					s.fromBufferGeometry(new zn(e, n, r, i, a, o)),
					s.mergeVertices(),
					s
				);
			}
			return ut(e, t), e;
		})(yo),
		_o = (function (t) {
			function e(e, n, r, i) {
				var a;
				((a = t.call(this) || this).type = 'CircleBufferGeometry'),
					(a.parameters = {
						radius: e,
						segments: n,
						thetaStart: r,
						thetaLength: i,
					}),
					(e = e || 1),
					(n = void 0 !== n ? Math.max(3, n) : 8),
					(r = void 0 !== r ? r : 0),
					(i = void 0 !== i ? i : 2 * Math.PI);
				var o = [],
					s = [],
					c = [],
					l = [],
					u = new wt(),
					h = new pt();
				s.push(0, 0, 0), c.push(0, 0, 1), l.push(0.5, 0.5);
				for (var d = 0, p = 3; d <= n; d++, p += 3) {
					var f = r + (d / n) * i;
					(u.x = e * Math.cos(f)),
						(u.y = e * Math.sin(f)),
						s.push(u.x, u.y, u.z),
						c.push(0, 0, 1),
						(h.x = (s[p] / e + 1) / 2),
						(h.y = (s[p + 1] / e + 1) / 2),
						l.push(h.x, h.y);
				}
				for (var m = 1; m <= n; m++) o.push(m, m + 1, 0);
				return (
					a.setIndex(o),
					a.setAttribute('position', new an(s, 3)),
					a.setAttribute('normal', new an(c, 3)),
					a.setAttribute('uv', new an(l, 2)),
					a
				);
			}
			return ut(e, t), e;
		})(vn),
		bo = (function (t) {
			function e(e, n, r, i) {
				var a;
				return (
					((a = t.call(this) || this).type = 'CircleGeometry'),
					(a.parameters = {
						radius: e,
						segments: n,
						thetaStart: r,
						thetaLength: i,
					}),
					a.fromBufferGeometry(new _o(e, n, r, i)),
					a.mergeVertices(),
					a
				);
			}
			return ut(e, t), e;
		})(yo),
		wo = (function (t) {
			function e(e, n, r, i, a, o, s, c) {
				var l;
				((l = t.call(this) || this).type = 'CylinderBufferGeometry'),
					(l.parameters = {
						radiusTop: e,
						radiusBottom: n,
						height: r,
						radialSegments: i,
						heightSegments: a,
						openEnded: o,
						thetaStart: s,
						thetaLength: c,
					});
				var u = ht(l);
				(e = void 0 !== e ? e : 1),
					(n = void 0 !== n ? n : 1),
					(r = r || 1),
					(i = Math.floor(i) || 8),
					(a = Math.floor(a) || 1),
					(o = void 0 !== o && o),
					(s = void 0 !== s ? s : 0),
					(c = void 0 !== c ? c : 2 * Math.PI);
				var h = [],
					d = [],
					p = [],
					f = [],
					m = 0,
					v = [],
					g = r / 2,
					y = 0;
				function x(t) {
					for (
						var r = m,
							a = new pt(),
							o = new wt(),
							l = 0,
							v = !0 === t ? e : n,
							x = !0 === t ? 1 : -1,
							_ = 1;
						_ <= i;
						_++
					)
						d.push(0, g * x, 0), p.push(0, x, 0), f.push(0.5, 0.5), m++;
					for (var b = m, w = 0; w <= i; w++) {
						var M = (w / i) * c + s,
							S = Math.cos(M),
							T = Math.sin(M);
						(o.x = v * T),
							(o.y = g * x),
							(o.z = v * S),
							d.push(o.x, o.y, o.z),
							p.push(0, x, 0),
							(a.x = 0.5 * S + 0.5),
							(a.y = 0.5 * T * x + 0.5),
							f.push(a.x, a.y),
							m++;
					}
					for (var E = 0; E < i; E++) {
						var A = r + E,
							L = b + E;
						!0 === t ? h.push(L, L + 1, A) : h.push(L + 1, L, A), (l += 3);
					}
					u.addGroup(y, l, !0 === t ? 1 : 2), (y += l);
				}
				return (
					(function () {
						for (
							var t = new wt(), o = new wt(), l = 0, x = (n - e) / r, _ = 0;
							_ <= a;
							_++
						) {
							for (
								var b = [], w = _ / a, M = w * (n - e) + e, S = 0;
								S <= i;
								S++
							) {
								var T = S / i,
									E = T * c + s,
									A = Math.sin(E),
									L = Math.cos(E);
								(o.x = M * A),
									(o.y = -w * r + g),
									(o.z = M * L),
									d.push(o.x, o.y, o.z),
									t.set(A, x, L).normalize(),
									p.push(t.x, t.y, t.z),
									f.push(T, 1 - w),
									b.push(m++);
							}
							v.push(b);
						}
						for (var R = 0; R < i; R++)
							for (var C = 0; C < a; C++) {
								var P = v[C][R],
									I = v[C + 1][R],
									D = v[C + 1][R + 1],
									N = v[C][R + 1];
								h.push(P, I, N), h.push(I, D, N), (l += 6);
							}
						u.addGroup(y, l, 0), (y += l);
					})(),
					!1 === o && (e > 0 && x(!0), n > 0 && x(!1)),
					l.setIndex(h),
					l.setAttribute('position', new an(d, 3)),
					l.setAttribute('normal', new an(p, 3)),
					l.setAttribute('uv', new an(f, 2)),
					l
				);
			}
			return ut(e, t), e;
		})(vn),
		Mo = (function (t) {
			function e(e, n, r, i, a, o, s, c) {
				var l;
				return (
					((l = t.call(this) || this).type = 'CylinderGeometry'),
					(l.parameters = {
						radiusTop: e,
						radiusBottom: n,
						height: r,
						radialSegments: i,
						heightSegments: a,
						openEnded: o,
						thetaStart: s,
						thetaLength: c,
					}),
					l.fromBufferGeometry(new wo(e, n, r, i, a, o, s, c)),
					l.mergeVertices(),
					l
				);
			}
			return ut(e, t), e;
		})(yo),
		So = (function (t) {
			function e(e, n, r, i, a, o, s) {
				var c;
				return (
					((c = t.call(this, 0, e, n, r, i, a, o, s) || this).type =
						'ConeGeometry'),
					(c.parameters = {
						radius: e,
						height: n,
						radialSegments: r,
						heightSegments: i,
						openEnded: a,
						thetaStart: o,
						thetaLength: s,
					}),
					c
				);
			}
			return ut(e, t), e;
		})(Mo),
		To = (function (t) {
			function e(e, n, r, i, a, o, s) {
				var c;
				return (
					((c = t.call(this, 0, e, n, r, i, a, o, s) || this).type =
						'ConeBufferGeometry'),
					(c.parameters = {
						radius: e,
						height: n,
						radialSegments: r,
						heightSegments: i,
						openEnded: a,
						thetaStart: o,
						thetaLength: s,
					}),
					c
				);
			}
			return ut(e, t), e;
		})(wo),
		Eo = (function (t) {
			function e(e, n, r, i) {
				var a;
				((a = t.call(this) || this).type = 'PolyhedronBufferGeometry'),
					(a.parameters = { vertices: e, indices: n, radius: r, detail: i }),
					(r = r || 1);
				var o = [],
					s = [];
				function c(t, e, n, r) {
					for (var i = r + 1, a = [], o = 0; o <= i; o++) {
						a[o] = [];
						for (
							var s = t.clone().lerp(n, o / i),
								c = e.clone().lerp(n, o / i),
								u = i - o,
								h = 0;
							h <= u;
							h++
						)
							a[o][h] = 0 === h && o === i ? s : s.clone().lerp(c, h / u);
					}
					for (var d = 0; d < i; d++)
						for (var p = 0; p < 2 * (i - d) - 1; p++) {
							var f = Math.floor(p / 2);
							p % 2 == 0
								? (l(a[d][f + 1]), l(a[d + 1][f]), l(a[d][f]))
								: (l(a[d][f + 1]), l(a[d + 1][f + 1]), l(a[d + 1][f]));
						}
				}
				function l(t) {
					o.push(t.x, t.y, t.z);
				}
				function u(t, n) {
					var r = 3 * t;
					(n.x = e[r + 0]), (n.y = e[r + 1]), (n.z = e[r + 2]);
				}
				function h(t, e, n, r) {
					r < 0 && 1 === t.x && (s[e] = t.x - 1),
						0 === n.x && 0 === n.z && (s[e] = r / 2 / Math.PI + 0.5);
				}
				function d(t) {
					return Math.atan2(t.z, -t.x);
				}
				function p(t) {
					return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z));
				}
				return (
					(function (t) {
						for (
							var e = new wt(), r = new wt(), i = new wt(), a = 0;
							a < n.length;
							a += 3
						)
							u(n[a + 0], e), u(n[a + 1], r), u(n[a + 2], i), c(e, r, i, t);
					})((i = i || 0)),
					(function (t) {
						for (var e = new wt(), n = 0; n < o.length; n += 3)
							(e.x = o[n + 0]),
								(e.y = o[n + 1]),
								(e.z = o[n + 2]),
								e.normalize().multiplyScalar(t),
								(o[n + 0] = e.x),
								(o[n + 1] = e.y),
								(o[n + 2] = e.z);
					})(r),
					(function () {
						for (var t = new wt(), e = 0; e < o.length; e += 3) {
							(t.x = o[e + 0]), (t.y = o[e + 1]), (t.z = o[e + 2]);
							var n = d(t) / 2 / Math.PI + 0.5,
								r = p(t) / Math.PI + 0.5;
							s.push(n, 1 - r);
						}
						(function () {
							for (
								var t = new wt(),
									e = new wt(),
									n = new wt(),
									r = new wt(),
									i = new pt(),
									a = new pt(),
									c = new pt(),
									l = 0,
									u = 0;
								l < o.length;
								l += 9, u += 6
							) {
								t.set(o[l + 0], o[l + 1], o[l + 2]),
									e.set(o[l + 3], o[l + 4], o[l + 5]),
									n.set(o[l + 6], o[l + 7], o[l + 8]),
									i.set(s[u + 0], s[u + 1]),
									a.set(s[u + 2], s[u + 3]),
									c.set(s[u + 4], s[u + 5]),
									r.copy(t).add(e).add(n).divideScalar(3);
								var p = d(r);
								h(i, u + 0, t, p), h(a, u + 2, e, p), h(c, u + 4, n, p);
							}
						})(),
							(function () {
								for (var t = 0; t < s.length; t += 6) {
									var e = s[t + 0],
										n = s[t + 2],
										r = s[t + 4],
										i = Math.max(e, n, r),
										a = Math.min(e, n, r);
									i > 0.9 &&
										a < 0.1 &&
										(e < 0.2 && (s[t + 0] += 1),
										n < 0.2 && (s[t + 2] += 1),
										r < 0.2 && (s[t + 4] += 1));
								}
							})();
					})(),
					a.setAttribute('position', new an(o, 3)),
					a.setAttribute('normal', new an(o.slice(), 3)),
					a.setAttribute('uv', new an(s, 2)),
					0 === i ? a.computeVertexNormals() : a.normalizeNormals(),
					a
				);
			}
			return ut(e, t), e;
		})(vn),
		Ao = (function (t) {
			function e(e, n) {
				var r,
					i = (1 + Math.sqrt(5)) / 2,
					a = 1 / i,
					o = [
						-1,
						-1,
						-1,
						-1,
						-1,
						1,
						-1,
						1,
						-1,
						-1,
						1,
						1,
						1,
						-1,
						-1,
						1,
						-1,
						1,
						1,
						1,
						-1,
						1,
						1,
						1,
						0,
						-a,
						-i,
						0,
						-a,
						i,
						0,
						a,
						-i,
						0,
						a,
						i,
						-a,
						-i,
						0,
						-a,
						i,
						0,
						a,
						-i,
						0,
						a,
						i,
						0,
						-i,
						0,
						-a,
						i,
						0,
						-a,
						-i,
						0,
						a,
						i,
						0,
						a,
					];
				return (
					((r =
						t.call(
							this,
							o,
							[
								3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15,
								17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0,
								12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2,
								16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4,
								14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19,
								5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9,
							],
							e,
							n
						) || this).type = 'DodecahedronBufferGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r
				);
			}
			return ut(e, t), e;
		})(Eo),
		Lo = (function (t) {
			function e(e, n) {
				var r;
				return (
					((r = t.call(this) || this).type = 'DodecahedronGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r.fromBufferGeometry(new Ao(e, n)),
					r.mergeVertices(),
					r
				);
			}
			return ut(e, t), e;
		})(yo),
		Ro = new wt(),
		Co = new wt(),
		Po = new wt(),
		Io = new Be(),
		Do = (function (t) {
			function e(e, n) {
				var r;
				((r = t.call(this) || this).type = 'EdgesGeometry'),
					(r.parameters = { thresholdAngle: n }),
					(n = void 0 !== n ? n : 1),
					e.isGeometry && (e = new vn().fromGeometry(e));
				for (
					var i = Math.pow(10, 4),
						a = Math.cos(st.DEG2RAD * n),
						o = e.getIndex(),
						s = e.getAttribute('position'),
						c = o ? o.count : s.count,
						l = [0, 0, 0],
						u = ['a', 'b', 'c'],
						h = new Array(3),
						d = {},
						p = [],
						f = 0;
					f < c;
					f += 3
				) {
					o
						? ((l[0] = o.getX(f)),
						  (l[1] = o.getX(f + 1)),
						  (l[2] = o.getX(f + 2)))
						: ((l[0] = f), (l[1] = f + 1), (l[2] = f + 2));
					var m = Io.a,
						v = Io.b,
						g = Io.c;
					if (
						(m.fromBufferAttribute(s, l[0]),
						v.fromBufferAttribute(s, l[1]),
						g.fromBufferAttribute(s, l[2]),
						Io.getNormal(Po),
						(h[0] =
							Math.round(m.x * i) +
							',' +
							Math.round(m.y * i) +
							',' +
							Math.round(m.z * i)),
						(h[1] =
							Math.round(v.x * i) +
							',' +
							Math.round(v.y * i) +
							',' +
							Math.round(v.z * i)),
						(h[2] =
							Math.round(g.x * i) +
							',' +
							Math.round(g.y * i) +
							',' +
							Math.round(g.z * i)),
						h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0])
					)
						for (var y = 0; y < 3; y++) {
							var x = (y + 1) % 3,
								_ = h[y],
								b = h[x],
								w = Io[u[y]],
								M = Io[u[x]],
								S = _ + '_' + b,
								T = b + '_' + _;
							T in d && d[T]
								? (Po.dot(d[T].normal) <= a &&
										(p.push(w.x, w.y, w.z), p.push(M.x, M.y, M.z)),
								  (d[T] = null))
								: S in d ||
								  (d[S] = { index0: l[y], index1: l[x], normal: Po.clone() });
						}
				}
				for (var E in d)
					if (d[E]) {
						var A = d[E],
							L = A.index0,
							R = A.index1;
						Ro.fromBufferAttribute(s, L),
							Co.fromBufferAttribute(s, R),
							p.push(Ro.x, Ro.y, Ro.z),
							p.push(Co.x, Co.y, Co.z);
					}
				return r.setAttribute('position', new an(p, 3)), r;
			}
			return ut(e, t), e;
		})(vn),
		No = function (t, e, n) {
			n = n || 2;
			var r,
				i,
				a,
				o,
				s,
				c,
				l,
				u = e && e.length,
				h = u ? e[0] * n : t.length,
				d = Oo(t, 0, h, n, !0),
				p = [];
			if (!d || d.next === d.prev) return p;
			if (
				(u &&
					(d = (function (t, e, n, r) {
						var i,
							a,
							o,
							s = [];
						for (i = 0, a = e.length; i < a; i++)
							(o = Oo(
								t,
								e[i] * r,
								i < a - 1 ? e[i + 1] * r : t.length,
								r,
								!1
							)) === o.next && (o.steiner = !0),
								s.push(qo(o));
						for (s.sort(ko), i = 0; i < s.length; i++)
							Vo(s[i], n), (n = Bo(n, n.next));
						return n;
					})(t, e, d, n)),
				t.length > 80 * n)
			) {
				(r = a = t[0]), (i = o = t[1]);
				for (var f = n; f < h; f += n)
					(s = t[f]) < r && (r = s),
						(c = t[f + 1]) < i && (i = c),
						s > a && (a = s),
						c > o && (o = c);
				l = 0 !== (l = Math.max(a - r, o - i)) ? 1 / l : 0;
			}
			return zo(d, p, n, r, i, l), p;
		};
	function Oo(t, e, n, r, i) {
		var a, o;
		if (
			i ===
			(function (t, e, n, r) {
				for (var i = 0, a = e, o = n - r; a < n; a += r)
					(i += (t[o] - t[a]) * (t[a + 1] + t[o + 1])), (o = a);
				return i;
			})(t, e, n, r) >
				0
		)
			for (a = e; a < n; a += r) o = ns(a, t[a], t[a + 1], o);
		else for (a = n - r; a >= e; a -= r) o = ns(a, t[a], t[a + 1], o);
		return o && Jo(o, o.next) && (rs(o), (o = o.next)), o;
	}
	function Bo(t, e) {
		if (!t) return t;
		e || (e = t);
		var n,
			r = t;
		do {
			if (
				((n = !1), r.steiner || (!Jo(r, r.next) && 0 !== Zo(r.prev, r, r.next)))
			)
				r = r.next;
			else {
				if ((rs(r), (r = e = r.prev) === r.next)) break;
				n = !0;
			}
		} while (n || r !== e);
		return e;
	}
	function zo(t, e, n, r, i, a, o) {
		if (t) {
			!o &&
				a &&
				(function (t, e, n, r) {
					var i = t;
					do {
						null === i.z && (i.z = jo(i.x, i.y, e, n, r)),
							(i.prevZ = i.prev),
							(i.nextZ = i.next),
							(i = i.next);
					} while (i !== t);
					(i.prevZ.nextZ = null),
						(i.prevZ = null),
						(function (t) {
							var e,
								n,
								r,
								i,
								a,
								o,
								s,
								c,
								l = 1;
							do {
								for (n = t, t = null, a = null, o = 0; n; ) {
									for (
										o++, r = n, s = 0, e = 0;
										e < l && (s++, (r = r.nextZ));
										e++
									);
									for (c = l; s > 0 || (c > 0 && r); )
										0 !== s && (0 === c || !r || n.z <= r.z)
											? ((i = n), (n = n.nextZ), s--)
											: ((i = r), (r = r.nextZ), c--),
											a ? (a.nextZ = i) : (t = i),
											(i.prevZ = a),
											(a = i);
									n = r;
								}
								(a.nextZ = null), (l *= 2);
							} while (o > 1);
						})(i);
				})(t, r, i, a);
			for (var s, c, l = t; t.prev !== t.next; )
				if (((s = t.prev), (c = t.next), a ? Fo(t, r, i, a) : Go(t)))
					e.push(s.i / n),
						e.push(t.i / n),
						e.push(c.i / n),
						rs(t),
						(t = c.next),
						(l = c.next);
				else if ((t = c) === l) {
					o
						? 1 === o
							? zo((t = Uo(Bo(t), e, n)), e, n, r, i, a, 2)
							: 2 === o && Ho(t, e, n, r, i, a)
						: zo(Bo(t), e, n, r, i, a, 1);
					break;
				}
		}
	}
	function Go(t) {
		var e = t.prev,
			n = t,
			r = t.next;
		if (Zo(e, n, r) >= 0) return !1;
		for (var i = t.next.next; i !== t.prev; ) {
			if (
				Xo(e.x, e.y, n.x, n.y, r.x, r.y, i.x, i.y) &&
				Zo(i.prev, i, i.next) >= 0
			)
				return !1;
			i = i.next;
		}
		return !0;
	}
	function Fo(t, e, n, r) {
		var i = t.prev,
			a = t,
			o = t.next;
		if (Zo(i, a, o) >= 0) return !1;
		for (
			var s = i.x < a.x ? (i.x < o.x ? i.x : o.x) : a.x < o.x ? a.x : o.x,
				c = i.y < a.y ? (i.y < o.y ? i.y : o.y) : a.y < o.y ? a.y : o.y,
				l = i.x > a.x ? (i.x > o.x ? i.x : o.x) : a.x > o.x ? a.x : o.x,
				u = i.y > a.y ? (i.y > o.y ? i.y : o.y) : a.y > o.y ? a.y : o.y,
				h = jo(s, c, e, n, r),
				d = jo(l, u, e, n, r),
				p = t.prevZ,
				f = t.nextZ;
			p && p.z >= h && f && f.z <= d;

		) {
			if (
				p !== t.prev &&
				p !== t.next &&
				Xo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) &&
				Zo(p.prev, p, p.next) >= 0
			)
				return !1;
			if (
				((p = p.prevZ),
				f !== t.prev &&
					f !== t.next &&
					Xo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) &&
					Zo(f.prev, f, f.next) >= 0)
			)
				return !1;
			f = f.nextZ;
		}
		for (; p && p.z >= h; ) {
			if (
				p !== t.prev &&
				p !== t.next &&
				Xo(i.x, i.y, a.x, a.y, o.x, o.y, p.x, p.y) &&
				Zo(p.prev, p, p.next) >= 0
			)
				return !1;
			p = p.prevZ;
		}
		for (; f && f.z <= d; ) {
			if (
				f !== t.prev &&
				f !== t.next &&
				Xo(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) &&
				Zo(f.prev, f, f.next) >= 0
			)
				return !1;
			f = f.nextZ;
		}
		return !0;
	}
	function Uo(t, e, n) {
		var r = t;
		do {
			var i = r.prev,
				a = r.next.next;
			!Jo(i, a) &&
				Qo(i, r, r.next, a) &&
				ts(i, a) &&
				ts(a, i) &&
				(e.push(i.i / n),
				e.push(r.i / n),
				e.push(a.i / n),
				rs(r),
				rs(r.next),
				(r = t = a)),
				(r = r.next);
		} while (r !== t);
		return Bo(r);
	}
	function Ho(t, e, n, r, i, a) {
		var o = t;
		do {
			for (var s = o.next.next; s !== o.prev; ) {
				if (o.i !== s.i && Yo(o, s)) {
					var c = es(o, s);
					return (
						(o = Bo(o, o.next)),
						(c = Bo(c, c.next)),
						zo(o, e, n, r, i, a),
						void zo(c, e, n, r, i, a)
					);
				}
				s = s.next;
			}
			o = o.next;
		} while (o !== t);
	}
	function ko(t, e) {
		return t.x - e.x;
	}
	function Vo(t, e) {
		if (
			(e = (function (t, e) {
				var n,
					r = e,
					i = t.x,
					a = t.y,
					o = -1 / 0;
				do {
					if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
						var s = r.x + ((a - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
						if (s <= i && s > o) {
							if (((o = s), s === i)) {
								if (a === r.y) return r;
								if (a === r.next.y) return r.next;
							}
							n = r.x < r.next.x ? r : r.next;
						}
					}
					r = r.next;
				} while (r !== e);
				if (!n) return null;
				if (i === o) return n;
				var c,
					l = n,
					u = n.x,
					h = n.y,
					d = 1 / 0;
				r = n;
				do {
					i >= r.x &&
						r.x >= u &&
						i !== r.x &&
						Xo(a < h ? i : o, a, u, h, a < h ? o : i, a, r.x, r.y) &&
						((c = Math.abs(a - r.y) / (i - r.x)),
						ts(r, t) &&
							(c < d ||
								(c === d && (r.x > n.x || (r.x === n.x && Wo(n, r))))) &&
							((n = r), (d = c))),
						(r = r.next);
				} while (r !== l);
				return n;
			})(t, e))
		) {
			var n = es(e, t);
			Bo(e, e.next), Bo(n, n.next);
		}
	}
	function Wo(t, e) {
		return Zo(t.prev, t, e.prev) < 0 && Zo(e.next, t, t.next) < 0;
	}
	function jo(t, e, n, r, i) {
		return (
			(t =
				1431655765 &
				((t =
					858993459 &
					((t =
						252645135 &
						((t = 16711935 & ((t = 32767 * (t - n) * i) | (t << 8))) |
							(t << 4))) |
						(t << 2))) |
					(t << 1))) |
			((e =
				1431655765 &
				((e =
					858993459 &
					((e =
						252645135 &
						((e = 16711935 & ((e = 32767 * (e - r) * i) | (e << 8))) |
							(e << 4))) |
						(e << 2))) |
					(e << 1))) <<
				1)
		);
	}
	function qo(t) {
		var e = t,
			n = t;
		do {
			(e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
		} while (e !== t);
		return n;
	}
	function Xo(t, e, n, r, i, a, o, s) {
		return (
			(i - o) * (e - s) - (t - o) * (a - s) >= 0 &&
			(t - o) * (r - s) - (n - o) * (e - s) >= 0 &&
			(n - o) * (a - s) - (i - o) * (r - s) >= 0
		);
	}
	function Yo(t, e) {
		return (
			t.next.i !== e.i &&
			t.prev.i !== e.i &&
			!(function (t, e) {
				var n = t;
				do {
					if (
						n.i !== t.i &&
						n.next.i !== t.i &&
						n.i !== e.i &&
						n.next.i !== e.i &&
						Qo(n, n.next, t, e)
					)
						return !0;
					n = n.next;
				} while (n !== t);
				return !1;
			})(t, e) &&
			((ts(t, e) &&
				ts(e, t) &&
				(function (t, e) {
					var n = t,
						r = !1,
						i = (t.x + e.x) / 2,
						a = (t.y + e.y) / 2;
					do {
						n.y > a != n.next.y > a &&
							n.next.y !== n.y &&
							i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
							(r = !r),
							(n = n.next);
					} while (n !== t);
					return r;
				})(t, e) &&
				(Zo(t.prev, t, e.prev) || Zo(t, e.prev, e))) ||
				(Jo(t, e) && Zo(t.prev, t, t.next) > 0 && Zo(e.prev, e, e.next) > 0))
		);
	}
	function Zo(t, e, n) {
		return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
	}
	function Jo(t, e) {
		return t.x === e.x && t.y === e.y;
	}
	function Qo(t, e, n, r) {
		var i = $o(Zo(t, e, n)),
			a = $o(Zo(t, e, r)),
			o = $o(Zo(n, r, t)),
			s = $o(Zo(n, r, e));
		return (
			(i !== a && o !== s) ||
			!(0 !== i || !Ko(t, n, e)) ||
			!(0 !== a || !Ko(t, r, e)) ||
			!(0 !== o || !Ko(n, t, r)) ||
			!(0 !== s || !Ko(n, e, r))
		);
	}
	function Ko(t, e, n) {
		return (
			e.x <= Math.max(t.x, n.x) &&
			e.x >= Math.min(t.x, n.x) &&
			e.y <= Math.max(t.y, n.y) &&
			e.y >= Math.min(t.y, n.y)
		);
	}
	function $o(t) {
		return t > 0 ? 1 : t < 0 ? -1 : 0;
	}
	function ts(t, e) {
		return Zo(t.prev, t, t.next) < 0
			? Zo(t, e, t.next) >= 0 && Zo(t, t.prev, e) >= 0
			: Zo(t, e, t.prev) < 0 || Zo(t, t.next, e) < 0;
	}
	function es(t, e) {
		var n = new is(t.i, t.x, t.y),
			r = new is(e.i, e.x, e.y),
			i = t.next,
			a = e.prev;
		return (
			(t.next = e),
			(e.prev = t),
			(n.next = i),
			(i.prev = n),
			(r.next = n),
			(n.prev = r),
			(a.next = r),
			(r.prev = a),
			r
		);
	}
	function ns(t, e, n, r) {
		var i = new is(t, e, n);
		return (
			r
				? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
				: ((i.prev = i), (i.next = i)),
			i
		);
	}
	function rs(t) {
		(t.next.prev = t.prev),
			(t.prev.next = t.next),
			t.prevZ && (t.prevZ.nextZ = t.nextZ),
			t.nextZ && (t.nextZ.prevZ = t.prevZ);
	}
	function is(t, e, n) {
		(this.i = t),
			(this.x = e),
			(this.y = n),
			(this.prev = null),
			(this.next = null),
			(this.z = null),
			(this.prevZ = null),
			(this.nextZ = null),
			(this.steiner = !1);
	}
	var as = {
		area: function (t) {
			for (var e = t.length, n = 0, r = e - 1, i = 0; i < e; r = i++)
				n += t[r].x * t[i].y - t[i].x * t[r].y;
			return 0.5 * n;
		},
		isClockWise: function (t) {
			return as.area(t) < 0;
		},
		triangulateShape: function (t, e) {
			var n = [],
				r = [],
				i = [];
			os(t), ss(n, t);
			var a = t.length;
			e.forEach(os);
			for (var o = 0; o < e.length; o++)
				r.push(a), (a += e[o].length), ss(n, e[o]);
			for (var s = No(n, r), c = 0; c < s.length; c += 3)
				i.push(s.slice(c, c + 3));
			return i;
		},
	};
	function os(t) {
		var e = t.length;
		e > 2 && t[e - 1].equals(t[0]) && t.pop();
	}
	function ss(t, e) {
		for (var n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
	}
	var cs = (function (t) {
			function e(e, n) {
				var r;
				((r = t.call(this) || this).type = 'ExtrudeBufferGeometry'),
					(r.parameters = { shapes: e, options: n }),
					(e = Array.isArray(e) ? e : [e]);
				for (var i = ht(r), a = [], o = [], s = 0, c = e.length; s < c; s++) {
					l(e[s]);
				}
				function l(t) {
					var e = [],
						r = void 0 !== n.curveSegments ? n.curveSegments : 12,
						s = void 0 !== n.steps ? n.steps : 1,
						c = void 0 !== n.depth ? n.depth : 100,
						l = void 0 === n.bevelEnabled || n.bevelEnabled,
						u = void 0 !== n.bevelThickness ? n.bevelThickness : 6,
						h = void 0 !== n.bevelSize ? n.bevelSize : u - 2,
						d = void 0 !== n.bevelOffset ? n.bevelOffset : 0,
						p = void 0 !== n.bevelSegments ? n.bevelSegments : 3,
						f = n.extrudePath,
						m = void 0 !== n.UVGenerator ? n.UVGenerator : ls;
					void 0 !== n.amount &&
						(console.warn(
							'THREE.ExtrudeBufferGeometry: amount has been renamed to depth.'
						),
						(c = n.amount));
					var v,
						g,
						y,
						x,
						_,
						b = !1;
					f &&
						((v = f.getSpacedPoints(s)),
						(b = !0),
						(l = !1),
						(g = f.computeFrenetFrames(s, !1)),
						(y = new wt()),
						(x = new wt()),
						(_ = new wt())),
						l || ((p = 0), (u = 0), (h = 0), (d = 0));
					var w = t.extractPoints(r),
						M = w.shape,
						S = w.holes;
					if (!as.isClockWise(M)) {
						M = M.reverse();
						for (var T = 0, E = S.length; T < E; T++) {
							var A = S[T];
							as.isClockWise(A) && (S[T] = A.reverse());
						}
					}
					for (
						var L = as.triangulateShape(M, S), R = M, C = 0, P = S.length;
						C < P;
						C++
					) {
						var I = S[C];
						M = M.concat(I);
					}
					function D(t, e, n) {
						return (
							e || console.error('THREE.ExtrudeGeometry: vec does not exist'),
							e.clone().multiplyScalar(n).add(t)
						);
					}
					var N = M.length,
						O = L.length;
					function B(t, e, n) {
						var r,
							i,
							a,
							o = t.x - e.x,
							s = t.y - e.y,
							c = n.x - t.x,
							l = n.y - t.y,
							u = o * o + s * s,
							h = o * l - s * c;
						if (Math.abs(h) > Number.EPSILON) {
							var d = Math.sqrt(u),
								p = Math.sqrt(c * c + l * l),
								f = e.x - s / d,
								m = e.y + o / d,
								v =
									((n.x - l / p - f) * l - (n.y + c / p - m) * c) /
									(o * l - s * c),
								g = (r = f + o * v - t.x) * r + (i = m + s * v - t.y) * i;
							if (g <= 2) return new pt(r, i);
							a = Math.sqrt(g / 2);
						} else {
							var y = !1;
							o > Number.EPSILON
								? c > Number.EPSILON && (y = !0)
								: o < -Number.EPSILON
								? c < -Number.EPSILON && (y = !0)
								: Math.sign(s) === Math.sign(l) && (y = !0),
								y
									? ((r = -s), (i = o), (a = Math.sqrt(u)))
									: ((r = o), (i = s), (a = Math.sqrt(u / 2)));
						}
						return new pt(r / a, i / a);
					}
					for (
						var z = [], G = 0, F = R.length, U = F - 1, H = G + 1;
						G < F;
						G++, U++, H++
					)
						U === F && (U = 0),
							H === F && (H = 0),
							(z[G] = B(R[G], R[U], R[H]));
					for (var k, V = [], W = z.concat(), j = 0, q = S.length; j < q; j++) {
						var X = S[j];
						k = [];
						for (
							var Y = 0, Z = X.length, J = Z - 1, Q = Y + 1;
							Y < Z;
							Y++, J++, Q++
						)
							J === Z && (J = 0),
								Q === Z && (Q = 0),
								(k[Y] = B(X[Y], X[J], X[Q]));
						V.push(k), (W = W.concat(k));
					}
					for (var K = 0; K < p; K++) {
						for (
							var $ = K / p,
								tt = u * Math.cos(($ * Math.PI) / 2),
								et = h * Math.sin(($ * Math.PI) / 2) + d,
								nt = 0,
								rt = R.length;
							nt < rt;
							nt++
						) {
							var it = D(R[nt], z[nt], et);
							Dt(it.x, it.y, -tt);
						}
						for (var at = 0, ot = S.length; at < ot; at++) {
							var st = S[at];
							k = V[at];
							for (var ct = 0, lt = st.length; ct < lt; ct++) {
								var ut = D(st[ct], k[ct], et);
								Dt(ut.x, ut.y, -tt);
							}
						}
					}
					for (var ht = h + d, dt = 0; dt < N; dt++) {
						var ft = l ? D(M[dt], W[dt], ht) : M[dt];
						b
							? (x.copy(g.normals[0]).multiplyScalar(ft.x),
							  y.copy(g.binormals[0]).multiplyScalar(ft.y),
							  _.copy(v[0]).add(x).add(y),
							  Dt(_.x, _.y, _.z))
							: Dt(ft.x, ft.y, 0);
					}
					for (var mt = 1; mt <= s; mt++)
						for (var vt = 0; vt < N; vt++) {
							var gt = l ? D(M[vt], W[vt], ht) : M[vt];
							b
								? (x.copy(g.normals[mt]).multiplyScalar(gt.x),
								  y.copy(g.binormals[mt]).multiplyScalar(gt.y),
								  _.copy(v[mt]).add(x).add(y),
								  Dt(_.x, _.y, _.z))
								: Dt(gt.x, gt.y, (c / s) * mt);
						}
					for (var yt = p - 1; yt >= 0; yt--) {
						for (
							var xt = yt / p,
								_t = u * Math.cos((xt * Math.PI) / 2),
								bt = h * Math.sin((xt * Math.PI) / 2) + d,
								Mt = 0,
								St = R.length;
							Mt < St;
							Mt++
						) {
							var Tt = D(R[Mt], z[Mt], bt);
							Dt(Tt.x, Tt.y, c + _t);
						}
						for (var Et = 0, At = S.length; Et < At; Et++) {
							var Lt = S[Et];
							k = V[Et];
							for (var Rt = 0, Ct = Lt.length; Rt < Ct; Rt++) {
								var Pt = D(Lt[Rt], k[Rt], bt);
								b
									? Dt(Pt.x, Pt.y + v[s - 1].y, v[s - 1].x + _t)
									: Dt(Pt.x, Pt.y, c + _t);
							}
						}
					}
					function It(t, e) {
						for (var n = t.length; --n >= 0; ) {
							var r = n,
								i = n - 1;
							i < 0 && (i = t.length - 1);
							for (var a = 0, o = s + 2 * p; a < o; a++) {
								var c = N * a,
									l = N * (a + 1);
								Ot(e + r + c, e + i + c, e + i + l, e + r + l);
							}
						}
					}
					function Dt(t, n, r) {
						e.push(t), e.push(n), e.push(r);
					}
					function Nt(t, e, n) {
						Bt(t), Bt(e), Bt(n);
						var r = a.length / 3,
							o = m.generateTopUV(i, a, r - 3, r - 2, r - 1);
						zt(o[0]), zt(o[1]), zt(o[2]);
					}
					function Ot(t, e, n, r) {
						Bt(t), Bt(e), Bt(r), Bt(e), Bt(n), Bt(r);
						var o = a.length / 3,
							s = m.generateSideWallUV(i, a, o - 6, o - 3, o - 2, o - 1);
						zt(s[0]), zt(s[1]), zt(s[3]), zt(s[1]), zt(s[2]), zt(s[3]);
					}
					function Bt(t) {
						a.push(e[3 * t + 0]), a.push(e[3 * t + 1]), a.push(e[3 * t + 2]);
					}
					function zt(t) {
						o.push(t.x), o.push(t.y);
					}
					!(function () {
						var t = a.length / 3;
						if (l) {
							for (var e = 0, n = N * e, r = 0; r < O; r++) {
								var o = L[r];
								Nt(o[2] + n, o[1] + n, o[0] + n);
							}
							n = N * (e = s + 2 * p);
							for (var c = 0; c < O; c++) {
								var u = L[c];
								Nt(u[0] + n, u[1] + n, u[2] + n);
							}
						} else {
							for (var h = 0; h < O; h++) {
								var d = L[h];
								Nt(d[2], d[1], d[0]);
							}
							for (var f = 0; f < O; f++) {
								var m = L[f];
								Nt(m[0] + N * s, m[1] + N * s, m[2] + N * s);
							}
						}
						i.addGroup(t, a.length / 3 - t, 0);
					})(),
						(function () {
							var t = a.length / 3,
								e = 0;
							It(R, e), (e += R.length);
							for (var n = 0, r = S.length; n < r; n++) {
								var o = S[n];
								It(o, e), (e += o.length);
							}
							i.addGroup(t, a.length / 3 - t, 1);
						})();
				}
				return (
					r.setAttribute('position', new an(a, 3)),
					r.setAttribute('uv', new an(o, 2)),
					r.computeVertexNormals(),
					r
				);
			}
			return (
				ut(e, t),
				(e.prototype.toJSON = function () {
					var t = vn.prototype.toJSON.call(this);
					return (function (t, e, n) {
						if (((n.shapes = []), Array.isArray(t)))
							for (var r = 0, i = t.length; r < i; r++) {
								var a = t[r];
								n.shapes.push(a.uuid);
							}
						else n.shapes.push(t.uuid);
						void 0 !== e.extrudePath &&
							(n.options.extrudePath = e.extrudePath.toJSON());
						return n;
					})(this.parameters.shapes, this.parameters.options, t);
				}),
				e
			);
		})(vn),
		ls = {
			generateTopUV: function (t, e, n, r, i) {
				var a = e[3 * n],
					o = e[3 * n + 1],
					s = e[3 * r],
					c = e[3 * r + 1],
					l = e[3 * i],
					u = e[3 * i + 1];
				return [new pt(a, o), new pt(s, c), new pt(l, u)];
			},
			generateSideWallUV: function (t, e, n, r, i, a) {
				var o = e[3 * n],
					s = e[3 * n + 1],
					c = e[3 * n + 2],
					l = e[3 * r],
					u = e[3 * r + 1],
					h = e[3 * r + 2],
					d = e[3 * i],
					p = e[3 * i + 1],
					f = e[3 * i + 2],
					m = e[3 * a],
					v = e[3 * a + 1],
					g = e[3 * a + 2];
				return Math.abs(s - u) < 0.01
					? [
							new pt(o, 1 - c),
							new pt(l, 1 - h),
							new pt(d, 1 - f),
							new pt(m, 1 - g),
					  ]
					: [
							new pt(s, 1 - c),
							new pt(u, 1 - h),
							new pt(p, 1 - f),
							new pt(v, 1 - g),
					  ];
			},
		};
	var us = (function (t) {
		function e(e, n) {
			var r;
			return (
				((r = t.call(this) || this).type = 'ExtrudeGeometry'),
				(r.parameters = { shapes: e, options: n }),
				r.fromBufferGeometry(new cs(e, n)),
				r.mergeVertices(),
				r
			);
		}
		return (
			ut(e, t),
			(e.prototype.toJSON = function () {
				var e = t.prototype.toJSON.call(this);
				return (function (t, e, n) {
					if (((n.shapes = []), Array.isArray(t)))
						for (var r = 0, i = t.length; r < i; r++) {
							var a = t[r];
							n.shapes.push(a.uuid);
						}
					else n.shapes.push(t.uuid);
					void 0 !== e.extrudePath &&
						(n.options.extrudePath = e.extrudePath.toJSON());
					return n;
				})(this.parameters.shapes, this.parameters.options, e);
			}),
			e
		);
	})(yo);
	var hs = (function (t) {
			function e(e, n) {
				var r,
					i = (1 + Math.sqrt(5)) / 2,
					a = [
						-1,
						i,
						0,
						1,
						i,
						0,
						-1,
						-i,
						0,
						1,
						-i,
						0,
						0,
						-1,
						i,
						0,
						1,
						i,
						0,
						-1,
						-i,
						0,
						1,
						-i,
						i,
						0,
						-1,
						i,
						0,
						1,
						-i,
						0,
						-1,
						-i,
						0,
						1,
					];
				return (
					((r =
						t.call(
							this,
							a,
							[
								0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11,
								4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3,
								6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
							],
							e,
							n
						) || this).type = 'IcosahedronBufferGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r
				);
			}
			return ut(e, t), e;
		})(Eo),
		ds = (function (t) {
			function e(e, n) {
				var r;
				return (
					((r = t.call(this) || this).type = 'IcosahedronGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r.fromBufferGeometry(new hs(e, n)),
					r.mergeVertices(),
					r
				);
			}
			return ut(e, t), e;
		})(yo),
		ps = (function (t) {
			function e(e, n, r, i) {
				var a;
				((a = t.call(this) || this).type = 'LatheBufferGeometry'),
					(a.parameters = {
						points: e,
						segments: n,
						phiStart: r,
						phiLength: i,
					}),
					(n = Math.floor(n) || 12),
					(r = r || 0),
					(i = i || 2 * Math.PI),
					(i = st.clamp(i, 0, 2 * Math.PI));
				for (
					var o = [],
						s = [],
						c = [],
						l = 1 / n,
						u = new wt(),
						h = new pt(),
						d = 0;
					d <= n;
					d++
				)
					for (
						var p = r + d * l * i, f = Math.sin(p), m = Math.cos(p), v = 0;
						v <= e.length - 1;
						v++
					)
						(u.x = e[v].x * f),
							(u.y = e[v].y),
							(u.z = e[v].x * m),
							s.push(u.x, u.y, u.z),
							(h.x = d / n),
							(h.y = v / (e.length - 1)),
							c.push(h.x, h.y);
				for (var g = 0; g < n; g++)
					for (var y = 0; y < e.length - 1; y++) {
						var x = y + g * e.length,
							_ = x,
							b = x + e.length,
							w = x + e.length + 1,
							M = x + 1;
						o.push(_, b, M), o.push(b, w, M);
					}
				if (
					(a.setIndex(o),
					a.setAttribute('position', new an(s, 3)),
					a.setAttribute('uv', new an(c, 2)),
					a.computeVertexNormals(),
					i === 2 * Math.PI)
				)
					for (
						var S = a.attributes.normal.array,
							T = new wt(),
							E = new wt(),
							A = new wt(),
							L = n * e.length * 3,
							R = 0,
							C = 0;
						R < e.length;
						R++, C += 3
					)
						(T.x = S[C + 0]),
							(T.y = S[C + 1]),
							(T.z = S[C + 2]),
							(E.x = S[L + C + 0]),
							(E.y = S[L + C + 1]),
							(E.z = S[L + C + 2]),
							A.addVectors(T, E).normalize(),
							(S[C + 0] = S[L + C + 0] = A.x),
							(S[C + 1] = S[L + C + 1] = A.y),
							(S[C + 2] = S[L + C + 2] = A.z);
				return a;
			}
			return ut(e, t), e;
		})(vn),
		fs = (function (t) {
			function e(e, n, r, i) {
				var a;
				return (
					((a = t.call(this) || this).type = 'LatheGeometry'),
					(a.parameters = {
						points: e,
						segments: n,
						phiStart: r,
						phiLength: i,
					}),
					a.fromBufferGeometry(new ps(e, n, r, i)),
					a.mergeVertices(),
					a
				);
			}
			return ut(e, t), e;
		})(yo),
		ms = (function (t) {
			function e(e, n) {
				var r;
				return (
					((r =
						t.call(
							this,
							[1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
							[
								0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4,
								1, 4, 2,
							],
							e,
							n
						) || this).type = 'OctahedronBufferGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r
				);
			}
			return ut(e, t), e;
		})(Eo),
		vs = (function (t) {
			function e(e, n) {
				var r;
				return (
					((r = t.call(this) || this).type = 'OctahedronGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r.fromBufferGeometry(new ms(e, n)),
					r.mergeVertices(),
					r
				);
			}
			return ut(e, t), e;
		})(yo);
	function gs(t, e, n) {
		vn.call(this),
			(this.type = 'ParametricBufferGeometry'),
			(this.parameters = { func: t, slices: e, stacks: n });
		var r = [],
			i = [],
			a = [],
			o = [],
			s = 1e-5,
			c = new wt(),
			l = new wt(),
			u = new wt(),
			h = new wt(),
			d = new wt();
		t.length < 3 &&
			console.error(
				'THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.'
			);
		for (var p = e + 1, f = 0; f <= n; f++)
			for (var m = f / n, v = 0; v <= e; v++) {
				var g = v / e;
				t(g, m, l),
					i.push(l.x, l.y, l.z),
					g - s >= 0
						? (t(g - s, m, u), h.subVectors(l, u))
						: (t(g + s, m, u), h.subVectors(u, l)),
					m - s >= 0
						? (t(g, m - s, u), d.subVectors(l, u))
						: (t(g, m + s, u), d.subVectors(u, l)),
					c.crossVectors(h, d).normalize(),
					a.push(c.x, c.y, c.z),
					o.push(g, m);
			}
		for (var y = 0; y < n; y++)
			for (var x = 0; x < e; x++) {
				var _ = y * p + x,
					b = y * p + x + 1,
					w = (y + 1) * p + x + 1,
					M = (y + 1) * p + x;
				r.push(_, b, M), r.push(b, w, M);
			}
		this.setIndex(r),
			this.setAttribute('position', new an(i, 3)),
			this.setAttribute('normal', new an(a, 3)),
			this.setAttribute('uv', new an(o, 2));
	}
	function ys(t, e, n) {
		yo.call(this),
			(this.type = 'ParametricGeometry'),
			(this.parameters = { func: t, slices: e, stacks: n }),
			this.fromBufferGeometry(new gs(t, e, n)),
			this.mergeVertices();
	}
	(gs.prototype = Object.create(vn.prototype)),
		(gs.prototype.constructor = gs),
		(ys.prototype = Object.create(yo.prototype)),
		(ys.prototype.constructor = ys);
	var xs = (function (t) {
			function e(e, n, r, i) {
				var a;
				return (
					((a = t.call(this) || this).type = 'PlaneGeometry'),
					(a.parameters = {
						width: e,
						height: n,
						widthSegments: r,
						heightSegments: i,
					}),
					a.fromBufferGeometry(new tr(e, n, r, i)),
					a.mergeVertices(),
					a
				);
			}
			return ut(e, t), e;
		})(yo),
		_s = (function (t) {
			function e(e, n, r, i) {
				var a;
				return (
					((a = t.call(this) || this).type = 'PolyhedronGeometry'),
					(a.parameters = { vertices: e, indices: n, radius: r, detail: i }),
					a.fromBufferGeometry(new Eo(e, n, r, i)),
					a.mergeVertices(),
					a
				);
			}
			return ut(e, t), e;
		})(yo),
		bs = (function (t) {
			function e(e, n, r, i, a, o) {
				var s;
				((s = t.call(this) || this).type = 'RingBufferGeometry'),
					(s.parameters = {
						innerRadius: e,
						outerRadius: n,
						thetaSegments: r,
						phiSegments: i,
						thetaStart: a,
						thetaLength: o,
					}),
					(e = e || 0.5),
					(n = n || 1),
					(a = void 0 !== a ? a : 0),
					(o = void 0 !== o ? o : 2 * Math.PI),
					(r = void 0 !== r ? Math.max(3, r) : 8);
				for (
					var c = [],
						l = [],
						u = [],
						h = [],
						d = e,
						p = (n - e) / (i = void 0 !== i ? Math.max(1, i) : 1),
						f = new wt(),
						m = new pt(),
						v = 0;
					v <= i;
					v++
				) {
					for (var g = 0; g <= r; g++) {
						var y = a + (g / r) * o;
						(f.x = d * Math.cos(y)),
							(f.y = d * Math.sin(y)),
							l.push(f.x, f.y, f.z),
							u.push(0, 0, 1),
							(m.x = (f.x / n + 1) / 2),
							(m.y = (f.y / n + 1) / 2),
							h.push(m.x, m.y);
					}
					d += p;
				}
				for (var x = 0; x < i; x++)
					for (var _ = x * (r + 1), b = 0; b < r; b++) {
						var w = b + _,
							M = w,
							S = w + r + 1,
							T = w + r + 2,
							E = w + 1;
						c.push(M, S, E), c.push(S, T, E);
					}
				return (
					s.setIndex(c),
					s.setAttribute('position', new an(l, 3)),
					s.setAttribute('normal', new an(u, 3)),
					s.setAttribute('uv', new an(h, 2)),
					s
				);
			}
			return ut(e, t), e;
		})(vn),
		ws = (function (t) {
			function e(e, n, r, i, a, o) {
				var s;
				return (
					((s = t.call(this) || this).type = 'RingGeometry'),
					(s.parameters = {
						innerRadius: e,
						outerRadius: n,
						thetaSegments: r,
						phiSegments: i,
						thetaStart: a,
						thetaLength: o,
					}),
					s.fromBufferGeometry(new bs(e, n, r, i, a, o)),
					s.mergeVertices(),
					s
				);
			}
			return ut(e, t), e;
		})(yo),
		Ms = (function (t) {
			function e(e, n) {
				var r;
				((r = t.call(this) || this).type = 'ShapeBufferGeometry'),
					(r.parameters = { shapes: e, curveSegments: n }),
					(n = n || 12);
				var i = [],
					a = [],
					o = [],
					s = [],
					c = 0,
					l = 0;
				if (!1 === Array.isArray(e)) h(e);
				else
					for (var u = 0; u < e.length; u++)
						h(e[u]), r.addGroup(c, l, u), (c += l), (l = 0);
				function h(t) {
					var e = a.length / 3,
						r = t.extractPoints(n),
						c = r.shape,
						u = r.holes;
					!1 === as.isClockWise(c) && (c = c.reverse());
					for (var h = 0, d = u.length; h < d; h++) {
						var p = u[h];
						!0 === as.isClockWise(p) && (u[h] = p.reverse());
					}
					for (
						var f = as.triangulateShape(c, u), m = 0, v = u.length;
						m < v;
						m++
					) {
						var g = u[m];
						c = c.concat(g);
					}
					for (var y = 0, x = c.length; y < x; y++) {
						var _ = c[y];
						a.push(_.x, _.y, 0), o.push(0, 0, 1), s.push(_.x, _.y);
					}
					for (var b = 0, w = f.length; b < w; b++) {
						var M = f[b],
							S = M[0] + e,
							T = M[1] + e,
							E = M[2] + e;
						i.push(S, T, E), (l += 3);
					}
				}
				return (
					r.setIndex(i),
					r.setAttribute('position', new an(a, 3)),
					r.setAttribute('normal', new an(o, 3)),
					r.setAttribute('uv', new an(s, 2)),
					r
				);
			}
			return (
				ut(e, t),
				(e.prototype.toJSON = function () {
					var t = vn.prototype.toJSON.call(this);
					return (function (t, e) {
						if (((e.shapes = []), Array.isArray(t)))
							for (var n = 0, r = t.length; n < r; n++) {
								var i = t[n];
								e.shapes.push(i.uuid);
							}
						else e.shapes.push(t.uuid);
						return e;
					})(this.parameters.shapes, t);
				}),
				e
			);
		})(vn);
	var Ss = (function (t) {
		function e(e, n) {
			var r;
			return (
				((r = t.call(this) || this).type = 'ShapeGeometry'),
				'object' == typeof n &&
					(console.warn(
						'THREE.ShapeGeometry: Options parameter has been removed.'
					),
					(n = n.curveSegments)),
				(r.parameters = { shapes: e, curveSegments: n }),
				r.fromBufferGeometry(new Ms(e, n)),
				r.mergeVertices(),
				r
			);
		}
		return (
			ut(e, t),
			(e.prototype.toJSON = function () {
				var t = yo.prototype.toJSON.call(this);
				return (function (t, e) {
					if (((e.shapes = []), Array.isArray(t)))
						for (var n = 0, r = t.length; n < r; n++) {
							var i = t[n];
							e.shapes.push(i.uuid);
						}
					else e.shapes.push(t.uuid);
					return e;
				})(this.parameters.shapes, t);
			}),
			e
		);
	})(yo);
	var Ts = (function (t) {
			function e(e, n, r, i, a, o, s) {
				var c;
				((c = t.call(this) || this).type = 'SphereBufferGeometry'),
					(c.parameters = {
						radius: e,
						widthSegments: n,
						heightSegments: r,
						phiStart: i,
						phiLength: a,
						thetaStart: o,
						thetaLength: s,
					}),
					(e = e || 1),
					(n = Math.max(3, Math.floor(n) || 8)),
					(r = Math.max(2, Math.floor(r) || 6)),
					(i = void 0 !== i ? i : 0),
					(a = void 0 !== a ? a : 2 * Math.PI),
					(o = void 0 !== o ? o : 0),
					(s = void 0 !== s ? s : Math.PI);
				for (
					var l = Math.min(o + s, Math.PI),
						u = 0,
						h = [],
						d = new wt(),
						p = new wt(),
						f = [],
						m = [],
						v = [],
						g = [],
						y = 0;
					y <= r;
					y++
				) {
					var x = [],
						_ = y / r,
						b = 0;
					0 == y && 0 == o
						? (b = 0.5 / n)
						: y == r && l == Math.PI && (b = -0.5 / n);
					for (var w = 0; w <= n; w++) {
						var M = w / n;
						(d.x = -e * Math.cos(i + M * a) * Math.sin(o + _ * s)),
							(d.y = e * Math.cos(o + _ * s)),
							(d.z = e * Math.sin(i + M * a) * Math.sin(o + _ * s)),
							m.push(d.x, d.y, d.z),
							p.copy(d).normalize(),
							v.push(p.x, p.y, p.z),
							g.push(M + b, 1 - _),
							x.push(u++);
					}
					h.push(x);
				}
				for (var S = 0; S < r; S++)
					for (var T = 0; T < n; T++) {
						var E = h[S][T + 1],
							A = h[S][T],
							L = h[S + 1][T],
							R = h[S + 1][T + 1];
						(0 !== S || o > 0) && f.push(E, A, R),
							(S !== r - 1 || l < Math.PI) && f.push(A, L, R);
					}
				return (
					c.setIndex(f),
					c.setAttribute('position', new an(m, 3)),
					c.setAttribute('normal', new an(v, 3)),
					c.setAttribute('uv', new an(g, 2)),
					c
				);
			}
			return ut(e, t), e;
		})(vn),
		Es = (function (t) {
			function e(e, n, r, i, a, o, s) {
				var c;
				return (
					((c = t.call(this) || this).type = 'SphereGeometry'),
					(c.parameters = {
						radius: e,
						widthSegments: n,
						heightSegments: r,
						phiStart: i,
						phiLength: a,
						thetaStart: o,
						thetaLength: s,
					}),
					c.fromBufferGeometry(new Ts(e, n, r, i, a, o, s)),
					c.mergeVertices(),
					c
				);
			}
			return ut(e, t), e;
		})(yo),
		As = (function (t) {
			function e(e, n) {
				var r;
				return (
					((r =
						t.call(
							this,
							[1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
							[2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1],
							e,
							n
						) || this).type = 'TetrahedronBufferGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r
				);
			}
			return ut(e, t), e;
		})(Eo),
		Ls = (function (t) {
			function e(e, n) {
				var r;
				return (
					((r = t.call(this) || this).type = 'TetrahedronGeometry'),
					(r.parameters = { radius: e, detail: n }),
					r.fromBufferGeometry(new As(e, n)),
					r.mergeVertices(),
					r
				);
			}
			return ut(e, t), e;
		})(yo),
		Rs = (function (t) {
			function e(e, n) {
				var r,
					i = (n = n || {}).font;
				if (!i || !i.isFont)
					return (
						console.error(
							'THREE.TextGeometry: font parameter is not an instance of THREE.Font.'
						),
						new vn() || ht(r)
					);
				var a = i.generateShapes(e, n.size);
				return (
					(n.depth = void 0 !== n.height ? n.height : 50),
					void 0 === n.bevelThickness && (n.bevelThickness = 10),
					void 0 === n.bevelSize && (n.bevelSize = 8),
					void 0 === n.bevelEnabled && (n.bevelEnabled = !1),
					((r = t.call(this, a, n) || this).type = 'TextBufferGeometry'),
					r
				);
			}
			return ut(e, t), e;
		})(cs),
		Cs = (function (t) {
			function e(e, n) {
				var r;
				return (
					((r = t.call(this) || this).type = 'TextGeometry'),
					(r.parameters = { text: e, parameters: n }),
					r.fromBufferGeometry(new Rs(e, n)),
					r.mergeVertices(),
					r
				);
			}
			return ut(e, t), e;
		})(yo),
		Ps = (function (t) {
			function e(e, n, r, i, a) {
				var o;
				((o = t.call(this) || this).type = 'TorusBufferGeometry'),
					(o.parameters = {
						radius: e,
						tube: n,
						radialSegments: r,
						tubularSegments: i,
						arc: a,
					}),
					(e = e || 1),
					(n = n || 0.4),
					(r = Math.floor(r) || 8),
					(i = Math.floor(i) || 6),
					(a = a || 2 * Math.PI);
				for (
					var s = [],
						c = [],
						l = [],
						u = [],
						h = new wt(),
						d = new wt(),
						p = new wt(),
						f = 0;
					f <= r;
					f++
				)
					for (var m = 0; m <= i; m++) {
						var v = (m / i) * a,
							g = (f / r) * Math.PI * 2;
						(d.x = (e + n * Math.cos(g)) * Math.cos(v)),
							(d.y = (e + n * Math.cos(g)) * Math.sin(v)),
							(d.z = n * Math.sin(g)),
							c.push(d.x, d.y, d.z),
							(h.x = e * Math.cos(v)),
							(h.y = e * Math.sin(v)),
							p.subVectors(d, h).normalize(),
							l.push(p.x, p.y, p.z),
							u.push(m / i),
							u.push(f / r);
					}
				for (var y = 1; y <= r; y++)
					for (var x = 1; x <= i; x++) {
						var _ = (i + 1) * y + x - 1,
							b = (i + 1) * (y - 1) + x - 1,
							w = (i + 1) * (y - 1) + x,
							M = (i + 1) * y + x;
						s.push(_, b, M), s.push(b, w, M);
					}
				return (
					o.setIndex(s),
					o.setAttribute('position', new an(c, 3)),
					o.setAttribute('normal', new an(l, 3)),
					o.setAttribute('uv', new an(u, 2)),
					o
				);
			}
			return ut(e, t), e;
		})(vn),
		Is = (function (t) {
			function e(e, n, r, i, a) {
				var o;
				return (
					((o = t.call(this) || this).type = 'TorusGeometry'),
					(o.parameters = {
						radius: e,
						tube: n,
						radialSegments: r,
						tubularSegments: i,
						arc: a,
					}),
					o.fromBufferGeometry(new Ps(e, n, r, i, a)),
					o.mergeVertices(),
					o
				);
			}
			return ut(e, t), e;
		})(yo),
		Ds = (function (t) {
			function e(e, n, r, i, a, o) {
				var s;
				((s = t.call(this) || this).type = 'TorusKnotBufferGeometry'),
					(s.parameters = {
						radius: e,
						tube: n,
						tubularSegments: r,
						radialSegments: i,
						p: a,
						q: o,
					}),
					(e = e || 1),
					(n = n || 0.4),
					(r = Math.floor(r) || 64),
					(i = Math.floor(i) || 8),
					(a = a || 2),
					(o = o || 3);
				for (
					var c = [],
						l = [],
						u = [],
						h = [],
						d = new wt(),
						p = new wt(),
						f = new wt(),
						m = new wt(),
						v = new wt(),
						g = new wt(),
						y = new wt(),
						x = 0;
					x <= r;
					++x
				) {
					var _ = (x / r) * a * Math.PI * 2;
					P(_, a, o, e, f),
						P(_ + 0.01, a, o, e, m),
						g.subVectors(m, f),
						y.addVectors(m, f),
						v.crossVectors(g, y),
						y.crossVectors(v, g),
						v.normalize(),
						y.normalize();
					for (var b = 0; b <= i; ++b) {
						var w = (b / i) * Math.PI * 2,
							M = -n * Math.cos(w),
							S = n * Math.sin(w);
						(d.x = f.x + (M * y.x + S * v.x)),
							(d.y = f.y + (M * y.y + S * v.y)),
							(d.z = f.z + (M * y.z + S * v.z)),
							l.push(d.x, d.y, d.z),
							p.subVectors(d, f).normalize(),
							u.push(p.x, p.y, p.z),
							h.push(x / r),
							h.push(b / i);
					}
				}
				for (var T = 1; T <= r; T++)
					for (var E = 1; E <= i; E++) {
						var A = (i + 1) * (T - 1) + (E - 1),
							L = (i + 1) * T + (E - 1),
							R = (i + 1) * T + E,
							C = (i + 1) * (T - 1) + E;
						c.push(A, L, C), c.push(L, R, C);
					}
				function P(t, e, n, r, i) {
					var a = Math.cos(t),
						o = Math.sin(t),
						s = (n / e) * t,
						c = Math.cos(s);
					(i.x = r * (2 + c) * 0.5 * a),
						(i.y = r * (2 + c) * o * 0.5),
						(i.z = r * Math.sin(s) * 0.5);
				}
				return (
					s.setIndex(c),
					s.setAttribute('position', new an(l, 3)),
					s.setAttribute('normal', new an(u, 3)),
					s.setAttribute('uv', new an(h, 2)),
					s
				);
			}
			return ut(e, t), e;
		})(vn),
		Ns = (function (t) {
			function e(e, n, r, i, a, o, s) {
				var c;
				return (
					((c = t.call(this) || this).type = 'TorusKnotGeometry'),
					(c.parameters = {
						radius: e,
						tube: n,
						tubularSegments: r,
						radialSegments: i,
						p: a,
						q: o,
					}),
					void 0 !== s &&
						console.warn(
							'THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.'
						),
					c.fromBufferGeometry(new Ds(e, n, r, i, a, o)),
					c.mergeVertices(),
					c
				);
			}
			return ut(e, t), e;
		})(yo),
		Os = (function (t) {
			function e(e, n, r, i, a) {
				var o;
				((o = t.call(this) || this).type = 'TubeBufferGeometry'),
					(o.parameters = {
						path: e,
						tubularSegments: n,
						radius: r,
						radialSegments: i,
						closed: a,
					}),
					(n = n || 64),
					(r = r || 1),
					(i = i || 8),
					(a = a || !1);
				var s = e.computeFrenetFrames(n, a);
				(o.tangents = s.tangents),
					(o.normals = s.normals),
					(o.binormals = s.binormals);
				var c = new wt(),
					l = new wt(),
					u = new pt(),
					h = new wt(),
					d = [],
					p = [],
					f = [],
					m = [];
				function v(t) {
					h = e.getPointAt(t / n, h);
					for (var a = s.normals[t], o = s.binormals[t], u = 0; u <= i; u++) {
						var f = (u / i) * Math.PI * 2,
							m = Math.sin(f),
							v = -Math.cos(f);
						(l.x = v * a.x + m * o.x),
							(l.y = v * a.y + m * o.y),
							(l.z = v * a.z + m * o.z),
							l.normalize(),
							p.push(l.x, l.y, l.z),
							(c.x = h.x + r * l.x),
							(c.y = h.y + r * l.y),
							(c.z = h.z + r * l.z),
							d.push(c.x, c.y, c.z);
					}
				}
				return (
					(function () {
						for (var t = 0; t < n; t++) v(t);
						v(!1 === a ? n : 0),
							(function () {
								for (var t = 0; t <= n; t++)
									for (var e = 0; e <= i; e++)
										(u.x = t / n), (u.y = e / i), f.push(u.x, u.y);
							})(),
							(function () {
								for (var t = 1; t <= n; t++)
									for (var e = 1; e <= i; e++) {
										var r = (i + 1) * (t - 1) + (e - 1),
											a = (i + 1) * t + (e - 1),
											o = (i + 1) * t + e,
											s = (i + 1) * (t - 1) + e;
										m.push(r, a, s), m.push(a, o, s);
									}
							})();
					})(),
					o.setIndex(m),
					o.setAttribute('position', new an(d, 3)),
					o.setAttribute('normal', new an(p, 3)),
					o.setAttribute('uv', new an(f, 2)),
					o
				);
			}
			return (
				ut(e, t),
				(e.prototype.toJSON = function () {
					var t = vn.prototype.toJSON.call(this);
					return (t.path = this.parameters.path.toJSON()), t;
				}),
				e
			);
		})(vn),
		Bs = (function (t) {
			function e(e, n, r, i, a, o) {
				var s;
				((s = t.call(this) || this).type = 'TubeGeometry'),
					(s.parameters = {
						path: e,
						tubularSegments: n,
						radius: r,
						radialSegments: i,
						closed: a,
					}),
					void 0 !== o &&
						console.warn('THREE.TubeGeometry: taper has been removed.');
				var c = new Os(e, n, r, i, a);
				return (
					(s.tangents = c.tangents),
					(s.normals = c.normals),
					(s.binormals = c.binormals),
					s.fromBufferGeometry(c),
					s.mergeVertices(),
					s
				);
			}
			return ut(e, t), e;
		})(yo),
		zs = (function (t) {
			function e(e) {
				var n;
				(n = t.call(this) || this).type = 'WireframeGeometry';
				var r = [],
					i = [0, 0],
					a = {},
					o = ['a', 'b', 'c'];
				if (e && e.isGeometry) {
					for (var s = e.faces, c = 0, l = s.length; c < l; c++)
						for (var u = s[c], h = 0; h < 3; h++) {
							var d = u[o[h]],
								p = u[o[(h + 1) % 3]];
							(i[0] = Math.min(d, p)), (i[1] = Math.max(d, p));
							var f = i[0] + ',' + i[1];
							void 0 === a[f] && (a[f] = { index1: i[0], index2: i[1] });
						}
					for (var m in a) {
						var v = a[m],
							g = e.vertices[v.index1];
						r.push(g.x, g.y, g.z),
							(g = e.vertices[v.index2]),
							r.push(g.x, g.y, g.z);
					}
				} else if (e && e.isBufferGeometry) {
					var y = new wt();
					if (null !== e.index) {
						var x = e.attributes.position,
							_ = e.index,
							b = e.groups;
						0 === b.length &&
							(b = [{ start: 0, count: _.count, materialIndex: 0 }]);
						for (var w = 0, M = b.length; w < M; ++w)
							for (
								var S = b[w], T = S.start, E = T, A = T + S.count;
								E < A;
								E += 3
							)
								for (var L = 0; L < 3; L++) {
									var R = _.getX(E + L),
										C = _.getX(E + ((L + 1) % 3));
									(i[0] = Math.min(R, C)), (i[1] = Math.max(R, C));
									var P = i[0] + ',' + i[1];
									void 0 === a[P] && (a[P] = { index1: i[0], index2: i[1] });
								}
						for (var I in a) {
							var D = a[I];
							y.fromBufferAttribute(x, D.index1),
								r.push(y.x, y.y, y.z),
								y.fromBufferAttribute(x, D.index2),
								r.push(y.x, y.y, y.z);
						}
					} else
						for (
							var N = e.attributes.position, O = 0, B = N.count / 3;
							O < B;
							O++
						)
							for (var z = 0; z < 3; z++) {
								var G = 3 * O + z;
								y.fromBufferAttribute(N, G), r.push(y.x, y.y, y.z);
								var F = 3 * O + ((z + 1) % 3);
								y.fromBufferAttribute(N, F), r.push(y.x, y.y, y.z);
							}
				}
				return n.setAttribute('position', new an(r, 3)), n;
			}
			return ut(e, t), e;
		})(vn),
		Gs = Object.freeze({
			__proto__: null,
			BoxGeometry: xo,
			BoxBufferGeometry: zn,
			CircleGeometry: bo,
			CircleBufferGeometry: _o,
			ConeGeometry: So,
			ConeBufferGeometry: To,
			CylinderGeometry: Mo,
			CylinderBufferGeometry: wo,
			DodecahedronGeometry: Lo,
			DodecahedronBufferGeometry: Ao,
			EdgesGeometry: Do,
			ExtrudeGeometry: us,
			ExtrudeBufferGeometry: cs,
			IcosahedronGeometry: ds,
			IcosahedronBufferGeometry: hs,
			LatheGeometry: fs,
			LatheBufferGeometry: ps,
			OctahedronGeometry: vs,
			OctahedronBufferGeometry: ms,
			ParametricGeometry: ys,
			ParametricBufferGeometry: gs,
			PlaneGeometry: xs,
			PlaneBufferGeometry: tr,
			PolyhedronGeometry: _s,
			PolyhedronBufferGeometry: Eo,
			RingGeometry: ws,
			RingBufferGeometry: bs,
			ShapeGeometry: Ss,
			ShapeBufferGeometry: Ms,
			SphereGeometry: Es,
			SphereBufferGeometry: Ts,
			TetrahedronGeometry: Ls,
			TetrahedronBufferGeometry: As,
			TextGeometry: Cs,
			TextBufferGeometry: Rs,
			TorusGeometry: Is,
			TorusBufferGeometry: Ps,
			TorusKnotGeometry: Ns,
			TorusKnotBufferGeometry: Ds,
			TubeGeometry: Bs,
			TubeBufferGeometry: Os,
			WireframeGeometry: zs,
		});
	function Fs(t) {
		qe.call(this),
			(this.type = 'ShadowMaterial'),
			(this.color = new Ve(0)),
			(this.transparent = !0),
			this.setValues(t);
	}
	function Us(t) {
		Hn.call(this, t), (this.type = 'RawShaderMaterial');
	}
	function Hs(t) {
		qe.call(this),
			(this.defines = { STANDARD: '' }),
			(this.type = 'MeshStandardMaterial'),
			(this.color = new Ve(16777215)),
			(this.roughness = 1),
			(this.metalness = 0),
			(this.map = null),
			(this.lightMap = null),
			(this.lightMapIntensity = 1),
			(this.aoMap = null),
			(this.aoMapIntensity = 1),
			(this.emissive = new Ve(0)),
			(this.emissiveIntensity = 1),
			(this.emissiveMap = null),
			(this.bumpMap = null),
			(this.bumpScale = 1),
			(this.normalMap = null),
			(this.normalMapType = 0),
			(this.normalScale = new pt(1, 1)),
			(this.displacementMap = null),
			(this.displacementScale = 1),
			(this.displacementBias = 0),
			(this.roughnessMap = null),
			(this.metalnessMap = null),
			(this.alphaMap = null),
			(this.envMap = null),
			(this.envMapIntensity = 1),
			(this.refractionRatio = 0.98),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.wireframeLinecap = 'round'),
			(this.wireframeLinejoin = 'round'),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.morphNormals = !1),
			(this.vertexTangents = !1),
			this.setValues(t);
	}
	function ks(t) {
		Hs.call(this),
			(this.defines = { STANDARD: '', PHYSICAL: '' }),
			(this.type = 'MeshPhysicalMaterial'),
			(this.clearcoat = 0),
			(this.clearcoatMap = null),
			(this.clearcoatRoughness = 0),
			(this.clearcoatRoughnessMap = null),
			(this.clearcoatNormalScale = new pt(1, 1)),
			(this.clearcoatNormalMap = null),
			(this.reflectivity = 0.5),
			Object.defineProperty(this, 'ior', {
				get: function () {
					return (1 + 0.4 * this.reflectivity) / (1 - 0.4 * this.reflectivity);
				},
				set: function (t) {
					this.reflectivity = st.clamp((2.5 * (t - 1)) / (t + 1), 0, 1);
				},
			}),
			(this.sheen = null),
			(this.transmission = 0),
			(this.transmissionMap = null),
			this.setValues(t);
	}
	function Vs(t) {
		qe.call(this),
			(this.type = 'MeshPhongMaterial'),
			(this.color = new Ve(16777215)),
			(this.specular = new Ve(1118481)),
			(this.shininess = 30),
			(this.map = null),
			(this.lightMap = null),
			(this.lightMapIntensity = 1),
			(this.aoMap = null),
			(this.aoMapIntensity = 1),
			(this.emissive = new Ve(0)),
			(this.emissiveIntensity = 1),
			(this.emissiveMap = null),
			(this.bumpMap = null),
			(this.bumpScale = 1),
			(this.normalMap = null),
			(this.normalMapType = 0),
			(this.normalScale = new pt(1, 1)),
			(this.displacementMap = null),
			(this.displacementScale = 1),
			(this.displacementBias = 0),
			(this.specularMap = null),
			(this.alphaMap = null),
			(this.envMap = null),
			(this.combine = 0),
			(this.reflectivity = 1),
			(this.refractionRatio = 0.98),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.wireframeLinecap = 'round'),
			(this.wireframeLinejoin = 'round'),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.morphNormals = !1),
			this.setValues(t);
	}
	function Ws(t) {
		qe.call(this),
			(this.defines = { TOON: '' }),
			(this.type = 'MeshToonMaterial'),
			(this.color = new Ve(16777215)),
			(this.map = null),
			(this.gradientMap = null),
			(this.lightMap = null),
			(this.lightMapIntensity = 1),
			(this.aoMap = null),
			(this.aoMapIntensity = 1),
			(this.emissive = new Ve(0)),
			(this.emissiveIntensity = 1),
			(this.emissiveMap = null),
			(this.bumpMap = null),
			(this.bumpScale = 1),
			(this.normalMap = null),
			(this.normalMapType = 0),
			(this.normalScale = new pt(1, 1)),
			(this.displacementMap = null),
			(this.displacementScale = 1),
			(this.displacementBias = 0),
			(this.alphaMap = null),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.wireframeLinecap = 'round'),
			(this.wireframeLinejoin = 'round'),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.morphNormals = !1),
			this.setValues(t);
	}
	function js(t) {
		qe.call(this),
			(this.type = 'MeshNormalMaterial'),
			(this.bumpMap = null),
			(this.bumpScale = 1),
			(this.normalMap = null),
			(this.normalMapType = 0),
			(this.normalScale = new pt(1, 1)),
			(this.displacementMap = null),
			(this.displacementScale = 1),
			(this.displacementBias = 0),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.fog = !1),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.morphNormals = !1),
			this.setValues(t);
	}
	function qs(t) {
		qe.call(this),
			(this.type = 'MeshLambertMaterial'),
			(this.color = new Ve(16777215)),
			(this.map = null),
			(this.lightMap = null),
			(this.lightMapIntensity = 1),
			(this.aoMap = null),
			(this.aoMapIntensity = 1),
			(this.emissive = new Ve(0)),
			(this.emissiveIntensity = 1),
			(this.emissiveMap = null),
			(this.specularMap = null),
			(this.alphaMap = null),
			(this.envMap = null),
			(this.combine = 0),
			(this.reflectivity = 1),
			(this.refractionRatio = 0.98),
			(this.wireframe = !1),
			(this.wireframeLinewidth = 1),
			(this.wireframeLinecap = 'round'),
			(this.wireframeLinejoin = 'round'),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.morphNormals = !1),
			this.setValues(t);
	}
	function Xs(t) {
		qe.call(this),
			(this.defines = { MATCAP: '' }),
			(this.type = 'MeshMatcapMaterial'),
			(this.color = new Ve(16777215)),
			(this.matcap = null),
			(this.map = null),
			(this.bumpMap = null),
			(this.bumpScale = 1),
			(this.normalMap = null),
			(this.normalMapType = 0),
			(this.normalScale = new pt(1, 1)),
			(this.displacementMap = null),
			(this.displacementScale = 1),
			(this.displacementBias = 0),
			(this.alphaMap = null),
			(this.skinning = !1),
			(this.morphTargets = !1),
			(this.morphNormals = !1),
			this.setValues(t);
	}
	function Ys(t) {
		ja.call(this),
			(this.type = 'LineDashedMaterial'),
			(this.scale = 1),
			(this.dashSize = 3),
			(this.gapSize = 1),
			this.setValues(t);
	}
	(Fs.prototype = Object.create(qe.prototype)),
		(Fs.prototype.constructor = Fs),
		(Fs.prototype.isShadowMaterial = !0),
		(Fs.prototype.copy = function (t) {
			return qe.prototype.copy.call(this, t), this.color.copy(t.color), this;
		}),
		(Us.prototype = Object.create(Hn.prototype)),
		(Us.prototype.constructor = Us),
		(Us.prototype.isRawShaderMaterial = !0),
		(Hs.prototype = Object.create(qe.prototype)),
		(Hs.prototype.constructor = Hs),
		(Hs.prototype.isMeshStandardMaterial = !0),
		(Hs.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				(this.defines = { STANDARD: '' }),
				this.color.copy(t.color),
				(this.roughness = t.roughness),
				(this.metalness = t.metalness),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.roughnessMap = t.roughnessMap),
				(this.metalnessMap = t.metalnessMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.envMapIntensity = t.envMapIntensity),
				(this.refractionRatio = t.refractionRatio),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.morphNormals = t.morphNormals),
				(this.vertexTangents = t.vertexTangents),
				this
			);
		}),
		(ks.prototype = Object.create(Hs.prototype)),
		(ks.prototype.constructor = ks),
		(ks.prototype.isMeshPhysicalMaterial = !0),
		(ks.prototype.copy = function (t) {
			return (
				Hs.prototype.copy.call(this, t),
				(this.defines = { STANDARD: '', PHYSICAL: '' }),
				(this.clearcoat = t.clearcoat),
				(this.clearcoatMap = t.clearcoatMap),
				(this.clearcoatRoughness = t.clearcoatRoughness),
				(this.clearcoatRoughnessMap = t.clearcoatRoughnessMap),
				(this.clearcoatNormalMap = t.clearcoatNormalMap),
				this.clearcoatNormalScale.copy(t.clearcoatNormalScale),
				(this.reflectivity = t.reflectivity),
				t.sheen
					? (this.sheen = (this.sheen || new Ve()).copy(t.sheen))
					: (this.sheen = null),
				(this.transmission = t.transmission),
				(this.transmissionMap = t.transmissionMap),
				this
			);
		}),
		(Vs.prototype = Object.create(qe.prototype)),
		(Vs.prototype.constructor = Vs),
		(Vs.prototype.isMeshPhongMaterial = !0),
		(Vs.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.color.copy(t.color),
				this.specular.copy(t.specular),
				(this.shininess = t.shininess),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.specularMap = t.specularMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.combine = t.combine),
				(this.reflectivity = t.reflectivity),
				(this.refractionRatio = t.refractionRatio),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.morphNormals = t.morphNormals),
				this
			);
		}),
		(Ws.prototype = Object.create(qe.prototype)),
		(Ws.prototype.constructor = Ws),
		(Ws.prototype.isMeshToonMaterial = !0),
		(Ws.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.gradientMap = t.gradientMap),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.alphaMap = t.alphaMap),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.morphNormals = t.morphNormals),
				this
			);
		}),
		(js.prototype = Object.create(qe.prototype)),
		(js.prototype.constructor = js),
		(js.prototype.isMeshNormalMaterial = !0),
		(js.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.morphNormals = t.morphNormals),
				this
			);
		}),
		(qs.prototype = Object.create(qe.prototype)),
		(qs.prototype.constructor = qs),
		(qs.prototype.isMeshLambertMaterial = !0),
		(qs.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				this.color.copy(t.color),
				(this.map = t.map),
				(this.lightMap = t.lightMap),
				(this.lightMapIntensity = t.lightMapIntensity),
				(this.aoMap = t.aoMap),
				(this.aoMapIntensity = t.aoMapIntensity),
				this.emissive.copy(t.emissive),
				(this.emissiveMap = t.emissiveMap),
				(this.emissiveIntensity = t.emissiveIntensity),
				(this.specularMap = t.specularMap),
				(this.alphaMap = t.alphaMap),
				(this.envMap = t.envMap),
				(this.combine = t.combine),
				(this.reflectivity = t.reflectivity),
				(this.refractionRatio = t.refractionRatio),
				(this.wireframe = t.wireframe),
				(this.wireframeLinewidth = t.wireframeLinewidth),
				(this.wireframeLinecap = t.wireframeLinecap),
				(this.wireframeLinejoin = t.wireframeLinejoin),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.morphNormals = t.morphNormals),
				this
			);
		}),
		(Xs.prototype = Object.create(qe.prototype)),
		(Xs.prototype.constructor = Xs),
		(Xs.prototype.isMeshMatcapMaterial = !0),
		(Xs.prototype.copy = function (t) {
			return (
				qe.prototype.copy.call(this, t),
				(this.defines = { MATCAP: '' }),
				this.color.copy(t.color),
				(this.matcap = t.matcap),
				(this.map = t.map),
				(this.bumpMap = t.bumpMap),
				(this.bumpScale = t.bumpScale),
				(this.normalMap = t.normalMap),
				(this.normalMapType = t.normalMapType),
				this.normalScale.copy(t.normalScale),
				(this.displacementMap = t.displacementMap),
				(this.displacementScale = t.displacementScale),
				(this.displacementBias = t.displacementBias),
				(this.alphaMap = t.alphaMap),
				(this.skinning = t.skinning),
				(this.morphTargets = t.morphTargets),
				(this.morphNormals = t.morphNormals),
				this
			);
		}),
		(Ys.prototype = Object.create(ja.prototype)),
		(Ys.prototype.constructor = Ys),
		(Ys.prototype.isLineDashedMaterial = !0),
		(Ys.prototype.copy = function (t) {
			return (
				ja.prototype.copy.call(this, t),
				(this.scale = t.scale),
				(this.dashSize = t.dashSize),
				(this.gapSize = t.gapSize),
				this
			);
		});
	var Zs = Object.freeze({
			__proto__: null,
			ShadowMaterial: Fs,
			SpriteMaterial: da,
			RawShaderMaterial: Us,
			ShaderMaterial: Hn,
			PointsMaterial: no,
			MeshPhysicalMaterial: ks,
			MeshStandardMaterial: Hs,
			MeshPhongMaterial: Vs,
			MeshToonMaterial: Ws,
			MeshNormalMaterial: js,
			MeshLambertMaterial: qs,
			MeshDepthMaterial: qi,
			MeshDistanceMaterial: Xi,
			MeshBasicMaterial: Xe,
			MeshMatcapMaterial: Xs,
			LineDashedMaterial: Ys,
			LineBasicMaterial: ja,
			Material: qe,
		}),
		Js = {
			arraySlice: function (t, e, n) {
				return Js.isTypedArray(t)
					? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length))
					: t.slice(e, n);
			},
			convertArray: function (t, e, n) {
				return !t || (!n && t.constructor === e)
					? t
					: 'number' == typeof e.BYTES_PER_ELEMENT
					? new e(t)
					: Array.prototype.slice.call(t);
			},
			isTypedArray: function (t) {
				return ArrayBuffer.isView(t) && !(t instanceof DataView);
			},
			getKeyframeOrder: function (t) {
				for (var e = t.length, n = new Array(e), r = 0; r !== e; ++r) n[r] = r;
				return (
					n.sort(function (e, n) {
						return t[e] - t[n];
					}),
					n
				);
			},
			sortedArray: function (t, e, n) {
				for (
					var r = t.length, i = new t.constructor(r), a = 0, o = 0;
					o !== r;
					++a
				)
					for (var s = n[a] * e, c = 0; c !== e; ++c) i[o++] = t[s + c];
				return i;
			},
			flattenJSON: function (t, e, n, r) {
				for (var i = 1, a = t[0]; void 0 !== a && void 0 === a[r]; ) a = t[i++];
				if (void 0 !== a) {
					var o = a[r];
					if (void 0 !== o)
						if (Array.isArray(o))
							do {
								void 0 !== (o = a[r]) && (e.push(a.time), n.push.apply(n, o)),
									(a = t[i++]);
							} while (void 0 !== a);
						else if (void 0 !== o.toArray)
							do {
								void 0 !== (o = a[r]) &&
									(e.push(a.time), o.toArray(n, n.length)),
									(a = t[i++]);
							} while (void 0 !== a);
						else
							do {
								void 0 !== (o = a[r]) && (e.push(a.time), n.push(o)),
									(a = t[i++]);
							} while (void 0 !== a);
				}
			},
			subclip: function (t, e, n, r, i) {
				i = i || 30;
				var a = t.clone();
				a.name = e;
				for (var o = [], s = 0; s < a.tracks.length; ++s) {
					for (
						var c = a.tracks[s], l = c.getValueSize(), u = [], h = [], d = 0;
						d < c.times.length;
						++d
					) {
						var p = c.times[d] * i;
						if (!(p < n || p >= r)) {
							u.push(c.times[d]);
							for (var f = 0; f < l; ++f) h.push(c.values[d * l + f]);
						}
					}
					0 !== u.length &&
						((c.times = Js.convertArray(u, c.times.constructor)),
						(c.values = Js.convertArray(h, c.values.constructor)),
						o.push(c));
				}
				a.tracks = o;
				for (var m = 1 / 0, v = 0; v < a.tracks.length; ++v)
					m > a.tracks[v].times[0] && (m = a.tracks[v].times[0]);
				for (var g = 0; g < a.tracks.length; ++g) a.tracks[g].shift(-1 * m);
				return a.resetDuration(), a;
			},
			makeClipAdditive: function (t, e, n, r) {
				void 0 === e && (e = 0),
					void 0 === n && (n = t),
					(void 0 === r || r <= 0) && (r = 30);
				for (
					var i = n.tracks.length,
						a = e / r,
						o = function (e) {
							var r = n.tracks[e],
								i = r.ValueTypeName;
							if ('bool' === i || 'string' === i) return 'continue';
							var o = t.tracks.find(function (t) {
								return t.name === r.name && t.ValueTypeName === i;
							});
							if (void 0 === o) return 'continue';
							var s = 0,
								c = r.getValueSize();
							r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
								(s = c / 3);
							var l = 0,
								u = o.getValueSize();
							o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
								(l = u / 3);
							var h = r.times.length - 1,
								d = void 0;
							if (a <= r.times[0]) {
								var p = s,
									f = c - s;
								d = Js.arraySlice(r.values, p, f);
							} else if (a >= r.times[h]) {
								var m = h * c + s,
									v = m + c - s;
								d = Js.arraySlice(r.values, m, v);
							} else {
								var g = r.createInterpolant(),
									y = s,
									x = c - s;
								g.evaluate(a), (d = Js.arraySlice(g.resultBuffer, y, x));
							}
							'quaternion' === i &&
								new bt().fromArray(d).normalize().conjugate().toArray(d);
							for (var _ = o.times.length, b = 0; b < _; ++b) {
								var w = b * u + l;
								if ('quaternion' === i)
									bt.multiplyQuaternionsFlat(o.values, w, d, 0, o.values, w);
								else
									for (var M = u - 2 * l, S = 0; S < M; ++S)
										o.values[w + S] -= d[S];
							}
						},
						s = 0;
					s < i;
					++s
				)
					o(s);
				return (t.blendMode = j), t;
			},
		};
	function Qs(t, e, n, r) {
		(this.parameterPositions = t),
			(this._cachedIndex = 0),
			(this.resultBuffer = void 0 !== r ? r : new e.constructor(n)),
			(this.sampleValues = e),
			(this.valueSize = n);
	}
	function Ks(t, e, n, r) {
		Qs.call(this, t, e, n, r),
			(this._weightPrev = -0),
			(this._offsetPrev = -0),
			(this._weightNext = -0),
			(this._offsetNext = -0);
	}
	function $s(t, e, n, r) {
		Qs.call(this, t, e, n, r);
	}
	function tc(t, e, n, r) {
		Qs.call(this, t, e, n, r);
	}
	function ec(t, e, n, r) {
		if (void 0 === t)
			throw new Error('THREE.KeyframeTrack: track name is undefined');
		if (void 0 === e || 0 === e.length)
			throw new Error('THREE.KeyframeTrack: no keyframes in track named ' + t);
		(this.name = t),
			(this.times = Js.convertArray(e, this.TimeBufferType)),
			(this.values = Js.convertArray(n, this.ValueBufferType)),
			this.setInterpolation(r || this.DefaultInterpolation);
	}
	function nc(t, e, n) {
		ec.call(this, t, e, n);
	}
	function rc(t, e, n, r) {
		ec.call(this, t, e, n, r);
	}
	function ic(t, e, n, r) {
		ec.call(this, t, e, n, r);
	}
	function ac(t, e, n, r) {
		Qs.call(this, t, e, n, r);
	}
	function oc(t, e, n, r) {
		ec.call(this, t, e, n, r);
	}
	function sc(t, e, n, r) {
		ec.call(this, t, e, n, r);
	}
	function cc(t, e, n, r) {
		ec.call(this, t, e, n, r);
	}
	function lc(t, e, n, r) {
		(this.name = t),
			(this.tracks = n),
			(this.duration = void 0 !== e ? e : -1),
			(this.blendMode = void 0 !== r ? r : W),
			(this.uuid = st.generateUUID()),
			this.duration < 0 && this.resetDuration();
	}
	function uc(t) {
		if (void 0 === t.type)
			throw new Error(
				'THREE.KeyframeTrack: track type undefined, can not parse'
			);
		var e = (function (t) {
			switch (t.toLowerCase()) {
				case 'scalar':
				case 'double':
				case 'float':
				case 'number':
				case 'integer':
					return ic;
				case 'vector':
				case 'vector2':
				case 'vector3':
				case 'vector4':
					return cc;
				case 'color':
					return rc;
				case 'quaternion':
					return oc;
				case 'bool':
				case 'boolean':
					return nc;
				case 'string':
					return sc;
			}
			throw new Error('THREE.KeyframeTrack: Unsupported typeName: ' + t);
		})(t.type);
		if (void 0 === t.times) {
			var n = [],
				r = [];
			Js.flattenJSON(t.keys, n, r, 'value'), (t.times = n), (t.values = r);
		}
		return void 0 !== e.parse
			? e.parse(t)
			: new e(t.name, t.times, t.values, t.interpolation);
	}
	Object.assign(Qs.prototype, {
		evaluate: function (t) {
			var e = this.parameterPositions,
				n = this._cachedIndex,
				r = e[n],
				i = e[n - 1];
			t: {
				e: {
					var a;
					n: {
						r: if (!(t < r)) {
							for (var o = n + 2; ; ) {
								if (void 0 === r) {
									if (t < i) break r;
									return (
										(n = e.length),
										(this._cachedIndex = n),
										this.afterEnd_(n - 1, t, i)
									);
								}
								if (n === o) break;
								if (((i = r), t < (r = e[++n]))) break e;
							}
							a = e.length;
							break n;
						}
						if (t >= i) break t;
						var s = e[1];
						t < s && ((n = 2), (i = s));
						for (var c = n - 2; ; ) {
							if (void 0 === i)
								return (this._cachedIndex = 0), this.beforeStart_(0, t, r);
							if (n === c) break;
							if (((r = i), t >= (i = e[--n - 1]))) break e;
						}
						(a = n), (n = 0);
					}
					for (; n < a; ) {
						var l = (n + a) >>> 1;
						t < e[l] ? (a = l) : (n = l + 1);
					}
					if (((r = e[n]), void 0 === (i = e[n - 1])))
						return (this._cachedIndex = 0), this.beforeStart_(0, t, r);
					if (void 0 === r)
						return (
							(n = e.length),
							(this._cachedIndex = n),
							this.afterEnd_(n - 1, i, t)
						);
				}
				(this._cachedIndex = n), this.intervalChanged_(n, i, r);
			}
			return this.interpolate_(n, i, t, r);
		},
		settings: null,
		DefaultSettings_: {},
		getSettings_: function () {
			return this.settings || this.DefaultSettings_;
		},
		copySampleValue_: function (t) {
			for (
				var e = this.resultBuffer,
					n = this.sampleValues,
					r = this.valueSize,
					i = t * r,
					a = 0;
				a !== r;
				++a
			)
				e[a] = n[i + a];
			return e;
		},
		interpolate_: function () {
			throw new Error('call to abstract method');
		},
		intervalChanged_: function () {},
	}),
		Object.assign(Qs.prototype, {
			beforeStart_: Qs.prototype.copySampleValue_,
			afterEnd_: Qs.prototype.copySampleValue_,
		}),
		(Ks.prototype = Object.assign(Object.create(Qs.prototype), {
			constructor: Ks,
			DefaultSettings_: { endingStart: H, endingEnd: H },
			intervalChanged_: function (t, e, n) {
				var r = this.parameterPositions,
					i = t - 2,
					a = t + 1,
					o = r[i],
					s = r[a];
				if (void 0 === o)
					switch (this.getSettings_().endingStart) {
						case k:
							(i = t), (o = 2 * e - n);
							break;
						case V:
							o = e + r[(i = r.length - 2)] - r[i + 1];
							break;
						default:
							(i = t), (o = n);
					}
				if (void 0 === s)
					switch (this.getSettings_().endingEnd) {
						case k:
							(a = t), (s = 2 * n - e);
							break;
						case V:
							(a = 1), (s = n + r[1] - r[0]);
							break;
						default:
							(a = t - 1), (s = e);
					}
				var c = 0.5 * (n - e),
					l = this.valueSize;
				(this._weightPrev = c / (e - o)),
					(this._weightNext = c / (s - n)),
					(this._offsetPrev = i * l),
					(this._offsetNext = a * l);
			},
			interpolate_: function (t, e, n, r) {
				for (
					var i = this.resultBuffer,
						a = this.sampleValues,
						o = this.valueSize,
						s = t * o,
						c = s - o,
						l = this._offsetPrev,
						u = this._offsetNext,
						h = this._weightPrev,
						d = this._weightNext,
						p = (n - e) / (r - e),
						f = p * p,
						m = f * p,
						v = -h * m + 2 * h * f - h * p,
						g = (1 + h) * m + (-1.5 - 2 * h) * f + (-0.5 + h) * p + 1,
						y = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
						x = d * m - d * f,
						_ = 0;
					_ !== o;
					++_
				)
					i[_] = v * a[l + _] + g * a[c + _] + y * a[s + _] + x * a[u + _];
				return i;
			},
		})),
		($s.prototype = Object.assign(Object.create(Qs.prototype), {
			constructor: $s,
			interpolate_: function (t, e, n, r) {
				for (
					var i = this.resultBuffer,
						a = this.sampleValues,
						o = this.valueSize,
						s = t * o,
						c = s - o,
						l = (n - e) / (r - e),
						u = 1 - l,
						h = 0;
					h !== o;
					++h
				)
					i[h] = a[c + h] * u + a[s + h] * l;
				return i;
			},
		})),
		(tc.prototype = Object.assign(Object.create(Qs.prototype), {
			constructor: tc,
			interpolate_: function (t) {
				return this.copySampleValue_(t - 1);
			},
		})),
		Object.assign(ec, {
			toJSON: function (t) {
				var e,
					n = t.constructor;
				if (void 0 !== n.toJSON) e = n.toJSON(t);
				else {
					e = {
						name: t.name,
						times: Js.convertArray(t.times, Array),
						values: Js.convertArray(t.values, Array),
					};
					var r = t.getInterpolation();
					r !== t.DefaultInterpolation && (e.interpolation = r);
				}
				return (e.type = t.ValueTypeName), e;
			},
		}),
		Object.assign(ec.prototype, {
			constructor: ec,
			TimeBufferType: Float32Array,
			ValueBufferType: Float32Array,
			DefaultInterpolation: F,
			InterpolantFactoryMethodDiscrete: function (t) {
				return new tc(this.times, this.values, this.getValueSize(), t);
			},
			InterpolantFactoryMethodLinear: function (t) {
				return new $s(this.times, this.values, this.getValueSize(), t);
			},
			InterpolantFactoryMethodSmooth: function (t) {
				return new Ks(this.times, this.values, this.getValueSize(), t);
			},
			setInterpolation: function (t) {
				var e;
				switch (t) {
					case G:
						e = this.InterpolantFactoryMethodDiscrete;
						break;
					case F:
						e = this.InterpolantFactoryMethodLinear;
						break;
					case U:
						e = this.InterpolantFactoryMethodSmooth;
				}
				if (void 0 === e) {
					var n =
						'unsupported interpolation for ' +
						this.ValueTypeName +
						' keyframe track named ' +
						this.name;
					if (void 0 === this.createInterpolant) {
						if (t === this.DefaultInterpolation) throw new Error(n);
						this.setInterpolation(this.DefaultInterpolation);
					}
					return console.warn('THREE.KeyframeTrack:', n), this;
				}
				return (this.createInterpolant = e), this;
			},
			getInterpolation: function () {
				switch (this.createInterpolant) {
					case this.InterpolantFactoryMethodDiscrete:
						return G;
					case this.InterpolantFactoryMethodLinear:
						return F;
					case this.InterpolantFactoryMethodSmooth:
						return U;
				}
			},
			getValueSize: function () {
				return this.values.length / this.times.length;
			},
			shift: function (t) {
				if (0 !== t)
					for (var e = this.times, n = 0, r = e.length; n !== r; ++n) e[n] += t;
				return this;
			},
			scale: function (t) {
				if (1 !== t)
					for (var e = this.times, n = 0, r = e.length; n !== r; ++n) e[n] *= t;
				return this;
			},
			trim: function (t, e) {
				for (
					var n = this.times, r = n.length, i = 0, a = r - 1;
					i !== r && n[i] < t;

				)
					++i;
				for (; -1 !== a && n[a] > e; ) --a;
				if ((++a, 0 !== i || a !== r)) {
					i >= a && (i = (a = Math.max(a, 1)) - 1);
					var o = this.getValueSize();
					(this.times = Js.arraySlice(n, i, a)),
						(this.values = Js.arraySlice(this.values, i * o, a * o));
				}
				return this;
			},
			validate: function () {
				var t = !0,
					e = this.getValueSize();
				e - Math.floor(e) != 0 &&
					(console.error(
						'THREE.KeyframeTrack: Invalid value size in track.',
						this
					),
					(t = !1));
				var n = this.times,
					r = this.values,
					i = n.length;
				0 === i &&
					(console.error('THREE.KeyframeTrack: Track is empty.', this),
					(t = !1));
				for (var a = null, o = 0; o !== i; o++) {
					var s = n[o];
					if ('number' == typeof s && isNaN(s)) {
						console.error(
							'THREE.KeyframeTrack: Time is not a valid number.',
							this,
							o,
							s
						),
							(t = !1);
						break;
					}
					if (null !== a && a > s) {
						console.error(
							'THREE.KeyframeTrack: Out of order keys.',
							this,
							o,
							s,
							a
						),
							(t = !1);
						break;
					}
					a = s;
				}
				if (void 0 !== r && Js.isTypedArray(r))
					for (var c = 0, l = r.length; c !== l; ++c) {
						var u = r[c];
						if (isNaN(u)) {
							console.error(
								'THREE.KeyframeTrack: Value is not a valid number.',
								this,
								c,
								u
							),
								(t = !1);
							break;
						}
					}
				return t;
			},
			optimize: function () {
				for (
					var t = Js.arraySlice(this.times),
						e = Js.arraySlice(this.values),
						n = this.getValueSize(),
						r = this.getInterpolation() === U,
						i = t.length - 1,
						a = 1,
						o = 1;
					o < i;
					++o
				) {
					var s = !1,
						c = t[o];
					if (c !== t[o + 1] && (1 !== o || c !== c[0]))
						if (r) s = !0;
						else
							for (var l = o * n, u = l - n, h = l + n, d = 0; d !== n; ++d) {
								var p = e[l + d];
								if (p !== e[u + d] || p !== e[h + d]) {
									s = !0;
									break;
								}
							}
					if (s) {
						if (o !== a) {
							t[a] = t[o];
							for (var f = o * n, m = a * n, v = 0; v !== n; ++v)
								e[m + v] = e[f + v];
						}
						++a;
					}
				}
				if (i > 0) {
					t[a] = t[i];
					for (var g = i * n, y = a * n, x = 0; x !== n; ++x)
						e[y + x] = e[g + x];
					++a;
				}
				return (
					a !== t.length
						? ((this.times = Js.arraySlice(t, 0, a)),
						  (this.values = Js.arraySlice(e, 0, a * n)))
						: ((this.times = t), (this.values = e)),
					this
				);
			},
			clone: function () {
				var t = Js.arraySlice(this.times, 0),
					e = Js.arraySlice(this.values, 0),
					n = new (0, this.constructor)(this.name, t, e);
				return (n.createInterpolant = this.createInterpolant), n;
			},
		}),
		(nc.prototype = Object.assign(Object.create(ec.prototype), {
			constructor: nc,
			ValueTypeName: 'bool',
			ValueBufferType: Array,
			DefaultInterpolation: G,
			InterpolantFactoryMethodLinear: void 0,
			InterpolantFactoryMethodSmooth: void 0,
		})),
		(rc.prototype = Object.assign(Object.create(ec.prototype), {
			constructor: rc,
			ValueTypeName: 'color',
		})),
		(ic.prototype = Object.assign(Object.create(ec.prototype), {
			constructor: ic,
			ValueTypeName: 'number',
		})),
		(ac.prototype = Object.assign(Object.create(Qs.prototype), {
			constructor: ac,
			interpolate_: function (t, e, n, r) {
				for (
					var i = this.resultBuffer,
						a = this.sampleValues,
						o = this.valueSize,
						s = (n - e) / (r - e),
						c = t * o,
						l = c + o;
					c !== l;
					c += 4
				)
					bt.slerpFlat(i, 0, a, c - o, a, c, s);
				return i;
			},
		})),
		(oc.prototype = Object.assign(Object.create(ec.prototype), {
			constructor: oc,
			ValueTypeName: 'quaternion',
			DefaultInterpolation: F,
			InterpolantFactoryMethodLinear: function (t) {
				return new ac(this.times, this.values, this.getValueSize(), t);
			},
			InterpolantFactoryMethodSmooth: void 0,
		})),
		(sc.prototype = Object.assign(Object.create(ec.prototype), {
			constructor: sc,
			ValueTypeName: 'string',
			ValueBufferType: Array,
			DefaultInterpolation: G,
			InterpolantFactoryMethodLinear: void 0,
			InterpolantFactoryMethodSmooth: void 0,
		})),
		(cc.prototype = Object.assign(Object.create(ec.prototype), {
			constructor: cc,
			ValueTypeName: 'vector',
		})),
		Object.assign(lc, {
			parse: function (t) {
				for (
					var e = [], n = t.tracks, r = 1 / (t.fps || 1), i = 0, a = n.length;
					i !== a;
					++i
				)
					e.push(uc(n[i]).scale(r));
				return new lc(t.name, t.duration, e, t.blendMode);
			},
			toJSON: function (t) {
				for (
					var e = [],
						n = t.tracks,
						r = {
							name: t.name,
							duration: t.duration,
							tracks: e,
							uuid: t.uuid,
							blendMode: t.blendMode,
						},
						i = 0,
						a = n.length;
					i !== a;
					++i
				)
					e.push(ec.toJSON(n[i]));
				return r;
			},
			CreateFromMorphTargetSequence: function (t, e, n, r) {
				for (var i = e.length, a = [], o = 0; o < i; o++) {
					var s = [],
						c = [];
					s.push((o + i - 1) % i, o, (o + 1) % i), c.push(0, 1, 0);
					var l = Js.getKeyframeOrder(s);
					(s = Js.sortedArray(s, 1, l)),
						(c = Js.sortedArray(c, 1, l)),
						r || 0 !== s[0] || (s.push(i), c.push(c[0])),
						a.push(
							new ic('.morphTargetInfluences[' + e[o].name + ']', s, c).scale(
								1 / n
							)
						);
				}
				return new lc(t, -1, a);
			},
			findByName: function (t, e) {
				var n = t;
				if (!Array.isArray(t)) {
					var r = t;
					n = (r.geometry && r.geometry.animations) || r.animations;
				}
				for (var i = 0; i < n.length; i++) if (n[i].name === e) return n[i];
				return null;
			},
			CreateClipsFromMorphTargetSequences: function (t, e, n) {
				for (
					var r = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length;
					a < o;
					a++
				) {
					var s = t[a],
						c = s.name.match(i);
					if (c && c.length > 1) {
						var l = c[1],
							u = r[l];
						u || (r[l] = u = []), u.push(s);
					}
				}
				var h = [];
				for (var d in r)
					h.push(lc.CreateFromMorphTargetSequence(d, r[d], e, n));
				return h;
			},
			parseAnimation: function (t, e) {
				if (!t)
					return (
						console.error(
							'THREE.AnimationClip: No animation in JSONLoader data.'
						),
						null
					);
				for (
					var n = function (t, e, n, r, i) {
							if (0 !== n.length) {
								var a = [],
									o = [];
								Js.flattenJSON(n, a, o, r),
									0 !== a.length && i.push(new t(e, a, o));
							}
						},
						r = [],
						i = t.name || 'default',
						a = t.fps || 30,
						o = t.blendMode,
						s = t.length || -1,
						c = t.hierarchy || [],
						l = 0;
					l < c.length;
					l++
				) {
					var u = c[l].keys;
					if (u && 0 !== u.length)
						if (u[0].morphTargets) {
							var h = {},
								d = void 0;
							for (d = 0; d < u.length; d++)
								if (u[d].morphTargets)
									for (var p = 0; p < u[d].morphTargets.length; p++)
										h[u[d].morphTargets[p]] = -1;
							for (var f in h) {
								for (
									var m = [], v = [], g = 0;
									g !== u[d].morphTargets.length;
									++g
								) {
									var y = u[d];
									m.push(y.time), v.push(y.morphTarget === f ? 1 : 0);
								}
								r.push(new ic('.morphTargetInfluence[' + f + ']', m, v));
							}
							s = h.length * (a || 1);
						} else {
							var x = '.bones[' + e[l].name + ']';
							n(cc, x + '.position', u, 'pos', r),
								n(oc, x + '.quaternion', u, 'rot', r),
								n(cc, x + '.scale', u, 'scl', r);
						}
				}
				return 0 === r.length ? null : new lc(i, s, r, o);
			},
		}),
		Object.assign(lc.prototype, {
			resetDuration: function () {
				for (var t = 0, e = 0, n = this.tracks.length; e !== n; ++e) {
					var r = this.tracks[e];
					t = Math.max(t, r.times[r.times.length - 1]);
				}
				return (this.duration = t), this;
			},
			trim: function () {
				for (var t = 0; t < this.tracks.length; t++)
					this.tracks[t].trim(0, this.duration);
				return this;
			},
			validate: function () {
				for (var t = !0, e = 0; e < this.tracks.length; e++)
					t = t && this.tracks[e].validate();
				return t;
			},
			optimize: function () {
				for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
				return this;
			},
			clone: function () {
				for (var t = [], e = 0; e < this.tracks.length; e++)
					t.push(this.tracks[e].clone());
				return new lc(this.name, this.duration, t, this.blendMode);
			},
		});
	var hc = {
		enabled: !1,
		files: {},
		add: function (t, e) {
			!1 !== this.enabled && (this.files[t] = e);
		},
		get: function (t) {
			if (!1 !== this.enabled) return this.files[t];
		},
		remove: function (t) {
			delete this.files[t];
		},
		clear: function () {
			this.files = {};
		},
	};
	function dc(t, e, n) {
		var r = this,
			i = !1,
			a = 0,
			o = 0,
			s = void 0,
			c = [];
		(this.onStart = void 0),
			(this.onLoad = t),
			(this.onProgress = e),
			(this.onError = n),
			(this.itemStart = function (t) {
				o++, !1 === i && void 0 !== r.onStart && r.onStart(t, a, o), (i = !0);
			}),
			(this.itemEnd = function (t) {
				a++,
					void 0 !== r.onProgress && r.onProgress(t, a, o),
					a === o && ((i = !1), void 0 !== r.onLoad && r.onLoad());
			}),
			(this.itemError = function (t) {
				void 0 !== r.onError && r.onError(t);
			}),
			(this.resolveURL = function (t) {
				return s ? s(t) : t;
			}),
			(this.setURLModifier = function (t) {
				return (s = t), this;
			}),
			(this.addHandler = function (t, e) {
				return c.push(t, e), this;
			}),
			(this.removeHandler = function (t) {
				var e = c.indexOf(t);
				return -1 !== e && c.splice(e, 2), this;
			}),
			(this.getHandler = function (t) {
				for (var e = 0, n = c.length; e < n; e += 2) {
					var r = c[e],
						i = c[e + 1];
					if ((r.global && (r.lastIndex = 0), r.test(t))) return i;
				}
				return null;
			});
	}
	var pc = new dc();
	function fc(t) {
		(this.manager = void 0 !== t ? t : pc),
			(this.crossOrigin = 'anonymous'),
			(this.withCredentials = !1),
			(this.path = ''),
			(this.resourcePath = ''),
			(this.requestHeader = {});
	}
	Object.assign(fc.prototype, {
		load: function () {},
		loadAsync: function (t, e) {
			var n = this;
			return new Promise(function (r, i) {
				n.load(t, r, e, i);
			});
		},
		parse: function () {},
		setCrossOrigin: function (t) {
			return (this.crossOrigin = t), this;
		},
		setWithCredentials: function (t) {
			return (this.withCredentials = t), this;
		},
		setPath: function (t) {
			return (this.path = t), this;
		},
		setResourcePath: function (t) {
			return (this.resourcePath = t), this;
		},
		setRequestHeader: function (t) {
			return (this.requestHeader = t), this;
		},
	});
	var mc = {};
	function vc(t) {
		fc.call(this, t);
	}
	function gc(t) {
		fc.call(this, t);
	}
	function yc(t) {
		fc.call(this, t);
	}
	function xc(t) {
		fc.call(this, t);
	}
	function _c(t) {
		fc.call(this, t);
	}
	function bc(t) {
		fc.call(this, t);
	}
	function wc(t) {
		fc.call(this, t);
	}
	function Mc() {
		(this.type = 'Curve'), (this.arcLengthDivisions = 200);
	}
	function Sc(t, e, n, r, i, a, o, s) {
		Mc.call(this),
			(this.type = 'EllipseCurve'),
			(this.aX = t || 0),
			(this.aY = e || 0),
			(this.xRadius = n || 1),
			(this.yRadius = r || 1),
			(this.aStartAngle = i || 0),
			(this.aEndAngle = a || 2 * Math.PI),
			(this.aClockwise = o || !1),
			(this.aRotation = s || 0);
	}
	function Tc(t, e, n, r, i, a) {
		Sc.call(this, t, e, n, n, r, i, a), (this.type = 'ArcCurve');
	}
	function Ec() {
		var t = 0,
			e = 0,
			n = 0,
			r = 0;
		function i(i, a, o, s) {
			(t = i),
				(e = o),
				(n = -3 * i + 3 * a - 2 * o - s),
				(r = 2 * i - 2 * a + o + s);
		}
		return {
			initCatmullRom: function (t, e, n, r, a) {
				i(e, n, a * (n - t), a * (r - e));
			},
			initNonuniformCatmullRom: function (t, e, n, r, a, o, s) {
				var c = (e - t) / a - (n - t) / (a + o) + (n - e) / o,
					l = (n - e) / o - (r - e) / (o + s) + (r - n) / s;
				i(e, n, (c *= o), (l *= o));
			},
			calc: function (i) {
				var a = i * i;
				return t + e * i + n * a + r * (a * i);
			},
		};
	}
	(vc.prototype = Object.assign(Object.create(fc.prototype), {
		constructor: vc,
		load: function (t, e, n, r) {
			void 0 === t && (t = ''),
				void 0 !== this.path && (t = this.path + t),
				(t = this.manager.resolveURL(t));
			var i = this,
				a = hc.get(t);
			if (void 0 !== a)
				return (
					i.manager.itemStart(t),
					setTimeout(function () {
						e && e(a), i.manager.itemEnd(t);
					}, 0),
					a
				);
			if (void 0 === mc[t]) {
				var o,
					s = t.match(/^data:(.*?)(;base64)?,(.*)$/);
				if (s) {
					var c = s[1],
						l = !!s[2],
						u = s[3];
					(u = decodeURIComponent(u)), l && (u = atob(u));
					try {
						var h,
							d = (this.responseType || '').toLowerCase();
						switch (d) {
							case 'arraybuffer':
							case 'blob':
								for (var p = new Uint8Array(u.length), f = 0; f < u.length; f++)
									p[f] = u.charCodeAt(f);
								h = 'blob' === d ? new Blob([p.buffer], { type: c }) : p.buffer;
								break;
							case 'document':
								var m = new DOMParser();
								h = m.parseFromString(u, c);
								break;
							case 'json':
								h = JSON.parse(u);
								break;
							default:
								h = u;
						}
						setTimeout(function () {
							e && e(h), i.manager.itemEnd(t);
						}, 0);
					} catch (e) {
						setTimeout(function () {
							r && r(e), i.manager.itemError(t), i.manager.itemEnd(t);
						}, 0);
					}
				} else {
					for (var v in ((mc[t] = []),
					mc[t].push({ onLoad: e, onProgress: n, onError: r }),
					(o = new XMLHttpRequest()).open('GET', t, !0),
					o.addEventListener(
						'load',
						function (e) {
							var n = this.response,
								r = mc[t];
							if ((delete mc[t], 200 === this.status || 0 === this.status)) {
								0 === this.status &&
									console.warn('THREE.FileLoader: HTTP Status 0 received.'),
									hc.add(t, n);
								for (var a = 0, o = r.length; a < o; a++) {
									var s = r[a];
									s.onLoad && s.onLoad(n);
								}
								i.manager.itemEnd(t);
							} else {
								for (var c = 0, l = r.length; c < l; c++) {
									var u = r[c];
									u.onError && u.onError(e);
								}
								i.manager.itemError(t), i.manager.itemEnd(t);
							}
						},
						!1
					),
					o.addEventListener(
						'progress',
						function (e) {
							for (var n = mc[t], r = 0, i = n.length; r < i; r++) {
								var a = n[r];
								a.onProgress && a.onProgress(e);
							}
						},
						!1
					),
					o.addEventListener(
						'error',
						function (e) {
							var n = mc[t];
							delete mc[t];
							for (var r = 0, a = n.length; r < a; r++) {
								var o = n[r];
								o.onError && o.onError(e);
							}
							i.manager.itemError(t), i.manager.itemEnd(t);
						},
						!1
					),
					o.addEventListener(
						'abort',
						function (e) {
							var n = mc[t];
							delete mc[t];
							for (var r = 0, a = n.length; r < a; r++) {
								var o = n[r];
								o.onError && o.onError(e);
							}
							i.manager.itemError(t), i.manager.itemEnd(t);
						},
						!1
					),
					void 0 !== this.responseType && (o.responseType = this.responseType),
					void 0 !== this.withCredentials &&
						(o.withCredentials = this.withCredentials),
					o.overrideMimeType &&
						o.overrideMimeType(
							void 0 !== this.mimeType ? this.mimeType : 'text/plain'
						),
					this.requestHeader))
						o.setRequestHeader(v, this.requestHeader[v]);
					o.send(null);
				}
				return i.manager.itemStart(t), o;
			}
			mc[t].push({ onLoad: e, onProgress: n, onError: r });
		},
		setResponseType: function (t) {
			return (this.responseType = t), this;
		},
		setMimeType: function (t) {
			return (this.mimeType = t), this;
		},
	})),
		(gc.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: gc,
			load: function (t, e, n, r) {
				var i = this,
					a = new vc(i.manager);
				a.setPath(i.path),
					a.setRequestHeader(i.requestHeader),
					a.setWithCredentials(i.withCredentials),
					a.load(
						t,
						function (n) {
							try {
								e(i.parse(JSON.parse(n)));
							} catch (e) {
								r ? r(e) : console.error(e), i.manager.itemError(t);
							}
						},
						n,
						r
					);
			},
			parse: function (t) {
				for (var e = [], n = 0; n < t.length; n++) {
					var r = lc.parse(t[n]);
					e.push(r);
				}
				return e;
			},
		})),
		(yc.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: yc,
			load: function (t, e, n, r) {
				var i = this,
					a = [],
					o = new uo();
				o.image = a;
				var s = new vc(this.manager);
				s.setPath(this.path),
					s.setResponseType('arraybuffer'),
					s.setRequestHeader(this.requestHeader),
					s.setWithCredentials(i.withCredentials);
				var c = 0;
				function l(l) {
					s.load(
						t[l],
						function (t) {
							var n = i.parse(t, !0);
							(a[l] = {
								width: n.width,
								height: n.height,
								format: n.format,
								mipmaps: n.mipmaps,
							}),
								6 === (c += 1) &&
									(1 === n.mipmapCount && (o.minFilter = m),
									(o.format = n.format),
									(o.needsUpdate = !0),
									e && e(o));
						},
						n,
						r
					);
				}
				if (Array.isArray(t)) for (var u = 0, h = t.length; u < h; ++u) l(u);
				else
					s.load(
						t,
						function (t) {
							var n = i.parse(t, !0);
							if (n.isCubemap)
								for (
									var r = n.mipmaps.length / n.mipmapCount, s = 0;
									s < r;
									s++
								) {
									a[s] = { mipmaps: [] };
									for (var c = 0; c < n.mipmapCount; c++)
										a[s].mipmaps.push(n.mipmaps[s * n.mipmapCount + c]),
											(a[s].format = n.format),
											(a[s].width = n.width),
											(a[s].height = n.height);
								}
							else
								(o.image.width = n.width),
									(o.image.height = n.height),
									(o.mipmaps = n.mipmaps);
							1 === n.mipmapCount && (o.minFilter = m),
								(o.format = n.format),
								(o.needsUpdate = !0),
								e && e(o);
						},
						n,
						r
					);
				return o;
			},
		})),
		(xc.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: xc,
			load: function (t, e, n, r) {
				void 0 !== this.path && (t = this.path + t),
					(t = this.manager.resolveURL(t));
				var i = this,
					a = hc.get(t);
				if (void 0 !== a)
					return (
						i.manager.itemStart(t),
						setTimeout(function () {
							e && e(a), i.manager.itemEnd(t);
						}, 0),
						a
					);
				var o = document.createElementNS('http://www.w3.org/1999/xhtml', 'img');
				function s() {
					o.removeEventListener('load', s, !1),
						o.removeEventListener('error', c, !1),
						hc.add(t, this),
						e && e(this),
						i.manager.itemEnd(t);
				}
				function c(e) {
					o.removeEventListener('load', s, !1),
						o.removeEventListener('error', c, !1),
						r && r(e),
						i.manager.itemError(t),
						i.manager.itemEnd(t);
				}
				return (
					o.addEventListener('load', s, !1),
					o.addEventListener('error', c, !1),
					'data:' !== t.substr(0, 5) &&
						void 0 !== this.crossOrigin &&
						(o.crossOrigin = this.crossOrigin),
					i.manager.itemStart(t),
					(o.src = t),
					o
				);
			},
		})),
		(_c.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: _c,
			load: function (t, e, n, r) {
				var i = new qn(),
					a = new xc(this.manager);
				a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
				var o = 0;
				function s(n) {
					a.load(
						t[n],
						function (t) {
							(i.images[n] = t), 6 === ++o && ((i.needsUpdate = !0), e && e(i));
						},
						void 0,
						r
					);
				}
				for (var c = 0; c < t.length; ++c) s(c);
				return i;
			},
		})),
		(bc.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: bc,
			load: function (t, e, n, r) {
				var i = this,
					a = new Yn(),
					o = new vc(this.manager);
				return (
					o.setResponseType('arraybuffer'),
					o.setRequestHeader(this.requestHeader),
					o.setPath(this.path),
					o.setWithCredentials(i.withCredentials),
					o.load(
						t,
						function (t) {
							var n = i.parse(t);
							n &&
								(void 0 !== n.image
									? (a.image = n.image)
									: void 0 !== n.data &&
									  ((a.image.width = n.width),
									  (a.image.height = n.height),
									  (a.image.data = n.data)),
								(a.wrapS = void 0 !== n.wrapS ? n.wrapS : u),
								(a.wrapT = void 0 !== n.wrapT ? n.wrapT : u),
								(a.magFilter = void 0 !== n.magFilter ? n.magFilter : m),
								(a.minFilter = void 0 !== n.minFilter ? n.minFilter : m),
								(a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1),
								void 0 !== n.format && (a.format = n.format),
								void 0 !== n.type && (a.type = n.type),
								void 0 !== n.mipmaps &&
									((a.mipmaps = n.mipmaps), (a.minFilter = g)),
								1 === n.mipmapCount && (a.minFilter = m),
								(a.needsUpdate = !0),
								e && e(a, n));
						},
						n,
						r
					),
					a
				);
			},
		})),
		(wc.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: wc,
			load: function (t, e, n, r) {
				var i = new gt(),
					a = new xc(this.manager);
				return (
					a.setCrossOrigin(this.crossOrigin),
					a.setPath(this.path),
					a.load(
						t,
						function (n) {
							i.image = n;
							var r =
								t.search(/\.jpe?g($|\?)/i) > 0 ||
								0 === t.search(/^data\:image\/jpeg/);
							(i.format = r ? S : T),
								(i.needsUpdate = !0),
								void 0 !== e && e(i);
						},
						n,
						r
					),
					i
				);
			},
		})),
		Object.assign(Mc.prototype, {
			getPoint: function () {
				return console.warn('THREE.Curve: .getPoint() not implemented.'), null;
			},
			getPointAt: function (t, e) {
				var n = this.getUtoTmapping(t);
				return this.getPoint(n, e);
			},
			getPoints: function (t) {
				void 0 === t && (t = 5);
				for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
				return e;
			},
			getSpacedPoints: function (t) {
				void 0 === t && (t = 5);
				for (var e = [], n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
				return e;
			},
			getLength: function () {
				var t = this.getLengths();
				return t[t.length - 1];
			},
			getLengths: function (t) {
				if (
					(void 0 === t && (t = this.arcLengthDivisions),
					this.cacheArcLengths &&
						this.cacheArcLengths.length === t + 1 &&
						!this.needsUpdate)
				)
					return this.cacheArcLengths;
				this.needsUpdate = !1;
				var e,
					n = [],
					r = this.getPoint(0),
					i = 0;
				n.push(0);
				for (var a = 1; a <= t; a++)
					(i += (e = this.getPoint(a / t)).distanceTo(r)), n.push(i), (r = e);
				return (this.cacheArcLengths = n), n;
			},
			updateArcLengths: function () {
				(this.needsUpdate = !0), this.getLengths();
			},
			getUtoTmapping: function (t, e) {
				var n,
					r = this.getLengths(),
					i = 0,
					a = r.length;
				n = e || t * r[a - 1];
				for (var o, s = 0, c = a - 1; s <= c; )
					if ((o = r[(i = Math.floor(s + (c - s) / 2))] - n) < 0) s = i + 1;
					else {
						if (!(o > 0)) {
							c = i;
							break;
						}
						c = i - 1;
					}
				if (r[(i = c)] === n) return i / (a - 1);
				var l = r[i];
				return (i + (n - l) / (r[i + 1] - l)) / (a - 1);
			},
			getTangent: function (t, e) {
				var n = 1e-4,
					r = t - n,
					i = t + n;
				r < 0 && (r = 0), i > 1 && (i = 1);
				var a = this.getPoint(r),
					o = this.getPoint(i),
					s = e || (a.isVector2 ? new pt() : new wt());
				return s.copy(o).sub(a).normalize(), s;
			},
			getTangentAt: function (t, e) {
				var n = this.getUtoTmapping(t);
				return this.getTangent(n, e);
			},
			computeFrenetFrames: function (t, e) {
				for (
					var n = new wt(),
						r = [],
						i = [],
						a = [],
						o = new wt(),
						s = new Jt(),
						c = 0;
					c <= t;
					c++
				) {
					var l = c / t;
					(r[c] = this.getTangentAt(l, new wt())), r[c].normalize();
				}
				(i[0] = new wt()), (a[0] = new wt());
				var u = Number.MAX_VALUE,
					h = Math.abs(r[0].x),
					d = Math.abs(r[0].y),
					p = Math.abs(r[0].z);
				h <= u && ((u = h), n.set(1, 0, 0)),
					d <= u && ((u = d), n.set(0, 1, 0)),
					p <= u && n.set(0, 0, 1),
					o.crossVectors(r[0], n).normalize(),
					i[0].crossVectors(r[0], o),
					a[0].crossVectors(r[0], i[0]);
				for (var f = 1; f <= t; f++) {
					if (
						((i[f] = i[f - 1].clone()),
						(a[f] = a[f - 1].clone()),
						o.crossVectors(r[f - 1], r[f]),
						o.length() > Number.EPSILON)
					) {
						o.normalize();
						var m = Math.acos(st.clamp(r[f - 1].dot(r[f]), -1, 1));
						i[f].applyMatrix4(s.makeRotationAxis(o, m));
					}
					a[f].crossVectors(r[f], i[f]);
				}
				if (!0 === e) {
					var v = Math.acos(st.clamp(i[0].dot(i[t]), -1, 1));
					(v /= t), r[0].dot(o.crossVectors(i[0], i[t])) > 0 && (v = -v);
					for (var g = 1; g <= t; g++)
						i[g].applyMatrix4(s.makeRotationAxis(r[g], v * g)),
							a[g].crossVectors(r[g], i[g]);
				}
				return { tangents: r, normals: i, binormals: a };
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			copy: function (t) {
				return (this.arcLengthDivisions = t.arcLengthDivisions), this;
			},
			toJSON: function () {
				var t = {
					metadata: { version: 4.5, type: 'Curve', generator: 'Curve.toJSON' },
				};
				return (
					(t.arcLengthDivisions = this.arcLengthDivisions),
					(t.type = this.type),
					t
				);
			},
			fromJSON: function (t) {
				return (this.arcLengthDivisions = t.arcLengthDivisions), this;
			},
		}),
		(Sc.prototype = Object.create(Mc.prototype)),
		(Sc.prototype.constructor = Sc),
		(Sc.prototype.isEllipseCurve = !0),
		(Sc.prototype.getPoint = function (t, e) {
			for (
				var n = e || new pt(),
					r = 2 * Math.PI,
					i = this.aEndAngle - this.aStartAngle,
					a = Math.abs(i) < Number.EPSILON;
				i < 0;

			)
				i += r;
			for (; i > r; ) i -= r;
			i < Number.EPSILON && (i = a ? 0 : r),
				!0 !== this.aClockwise || a || (i === r ? (i = -r) : (i -= r));
			var o = this.aStartAngle + t * i,
				s = this.aX + this.xRadius * Math.cos(o),
				c = this.aY + this.yRadius * Math.sin(o);
			if (0 !== this.aRotation) {
				var l = Math.cos(this.aRotation),
					u = Math.sin(this.aRotation),
					h = s - this.aX,
					d = c - this.aY;
				(s = h * l - d * u + this.aX), (c = h * u + d * l + this.aY);
			}
			return n.set(s, c);
		}),
		(Sc.prototype.copy = function (t) {
			return (
				Mc.prototype.copy.call(this, t),
				(this.aX = t.aX),
				(this.aY = t.aY),
				(this.xRadius = t.xRadius),
				(this.yRadius = t.yRadius),
				(this.aStartAngle = t.aStartAngle),
				(this.aEndAngle = t.aEndAngle),
				(this.aClockwise = t.aClockwise),
				(this.aRotation = t.aRotation),
				this
			);
		}),
		(Sc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			return (
				(t.aX = this.aX),
				(t.aY = this.aY),
				(t.xRadius = this.xRadius),
				(t.yRadius = this.yRadius),
				(t.aStartAngle = this.aStartAngle),
				(t.aEndAngle = this.aEndAngle),
				(t.aClockwise = this.aClockwise),
				(t.aRotation = this.aRotation),
				t
			);
		}),
		(Sc.prototype.fromJSON = function (t) {
			return (
				Mc.prototype.fromJSON.call(this, t),
				(this.aX = t.aX),
				(this.aY = t.aY),
				(this.xRadius = t.xRadius),
				(this.yRadius = t.yRadius),
				(this.aStartAngle = t.aStartAngle),
				(this.aEndAngle = t.aEndAngle),
				(this.aClockwise = t.aClockwise),
				(this.aRotation = t.aRotation),
				this
			);
		}),
		(Tc.prototype = Object.create(Sc.prototype)),
		(Tc.prototype.constructor = Tc),
		(Tc.prototype.isArcCurve = !0);
	var Ac = new wt(),
		Lc = new Ec(),
		Rc = new Ec(),
		Cc = new Ec();
	function Pc(t, e, n, r) {
		Mc.call(this),
			(this.type = 'CatmullRomCurve3'),
			(this.points = t || []),
			(this.closed = e || !1),
			(this.curveType = n || 'centripetal'),
			(this.tension = void 0 !== r ? r : 0.5);
	}
	function Ic(t, e, n, r, i) {
		var a = 0.5 * (r - e),
			o = 0.5 * (i - n),
			s = t * t;
		return (
			(2 * n - 2 * r + a + o) * (t * s) +
			(-3 * n + 3 * r - 2 * a - o) * s +
			a * t +
			n
		);
	}
	function Dc(t, e, n, r) {
		return (
			(function (t, e) {
				var n = 1 - t;
				return n * n * e;
			})(t, e) +
			(function (t, e) {
				return 2 * (1 - t) * t * e;
			})(t, n) +
			(function (t, e) {
				return t * t * e;
			})(t, r)
		);
	}
	function Nc(t, e, n, r, i) {
		return (
			(function (t, e) {
				var n = 1 - t;
				return n * n * n * e;
			})(t, e) +
			(function (t, e) {
				var n = 1 - t;
				return 3 * n * n * t * e;
			})(t, n) +
			(function (t, e) {
				return 3 * (1 - t) * t * t * e;
			})(t, r) +
			(function (t, e) {
				return t * t * t * e;
			})(t, i)
		);
	}
	function Oc(t, e, n, r) {
		Mc.call(this),
			(this.type = 'CubicBezierCurve'),
			(this.v0 = t || new pt()),
			(this.v1 = e || new pt()),
			(this.v2 = n || new pt()),
			(this.v3 = r || new pt());
	}
	function Bc(t, e, n, r) {
		Mc.call(this),
			(this.type = 'CubicBezierCurve3'),
			(this.v0 = t || new wt()),
			(this.v1 = e || new wt()),
			(this.v2 = n || new wt()),
			(this.v3 = r || new wt());
	}
	function zc(t, e) {
		Mc.call(this),
			(this.type = 'LineCurve'),
			(this.v1 = t || new pt()),
			(this.v2 = e || new pt());
	}
	function Gc(t, e) {
		Mc.call(this),
			(this.type = 'LineCurve3'),
			(this.v1 = t || new wt()),
			(this.v2 = e || new wt());
	}
	function Fc(t, e, n) {
		Mc.call(this),
			(this.type = 'QuadraticBezierCurve'),
			(this.v0 = t || new pt()),
			(this.v1 = e || new pt()),
			(this.v2 = n || new pt());
	}
	function Uc(t, e, n) {
		Mc.call(this),
			(this.type = 'QuadraticBezierCurve3'),
			(this.v0 = t || new wt()),
			(this.v1 = e || new wt()),
			(this.v2 = n || new wt());
	}
	function Hc(t) {
		Mc.call(this), (this.type = 'SplineCurve'), (this.points = t || []);
	}
	(Pc.prototype = Object.create(Mc.prototype)),
		(Pc.prototype.constructor = Pc),
		(Pc.prototype.isCatmullRomCurve3 = !0),
		(Pc.prototype.getPoint = function (t, e) {
			var n,
				r,
				i = e || new wt(),
				a = this.points,
				o = a.length,
				s = (o - (this.closed ? 0 : 1)) * t,
				c = Math.floor(s),
				l = s - c;
			this.closed
				? (c += c > 0 ? 0 : (Math.floor(Math.abs(c) / o) + 1) * o)
				: 0 === l && c === o - 1 && ((c = o - 2), (l = 1)),
				this.closed || c > 0
					? (n = a[(c - 1) % o])
					: (Ac.subVectors(a[0], a[1]).add(a[0]), (n = Ac));
			var u = a[c % o],
				h = a[(c + 1) % o];
			if (
				(this.closed || c + 2 < o
					? (r = a[(c + 2) % o])
					: (Ac.subVectors(a[o - 1], a[o - 2]).add(a[o - 1]), (r = Ac)),
				'centripetal' === this.curveType || 'chordal' === this.curveType)
			) {
				var d = 'chordal' === this.curveType ? 0.5 : 0.25,
					p = Math.pow(n.distanceToSquared(u), d),
					f = Math.pow(u.distanceToSquared(h), d),
					m = Math.pow(h.distanceToSquared(r), d);
				f < 1e-4 && (f = 1),
					p < 1e-4 && (p = f),
					m < 1e-4 && (m = f),
					Lc.initNonuniformCatmullRom(n.x, u.x, h.x, r.x, p, f, m),
					Rc.initNonuniformCatmullRom(n.y, u.y, h.y, r.y, p, f, m),
					Cc.initNonuniformCatmullRom(n.z, u.z, h.z, r.z, p, f, m);
			} else
				'catmullrom' === this.curveType &&
					(Lc.initCatmullRom(n.x, u.x, h.x, r.x, this.tension),
					Rc.initCatmullRom(n.y, u.y, h.y, r.y, this.tension),
					Cc.initCatmullRom(n.z, u.z, h.z, r.z, this.tension));
			return i.set(Lc.calc(l), Rc.calc(l), Cc.calc(l)), i;
		}),
		(Pc.prototype.copy = function (t) {
			Mc.prototype.copy.call(this, t), (this.points = []);
			for (var e = 0, n = t.points.length; e < n; e++) {
				var r = t.points[e];
				this.points.push(r.clone());
			}
			return (
				(this.closed = t.closed),
				(this.curveType = t.curveType),
				(this.tension = t.tension),
				this
			);
		}),
		(Pc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			t.points = [];
			for (var e = 0, n = this.points.length; e < n; e++) {
				var r = this.points[e];
				t.points.push(r.toArray());
			}
			return (
				(t.closed = this.closed),
				(t.curveType = this.curveType),
				(t.tension = this.tension),
				t
			);
		}),
		(Pc.prototype.fromJSON = function (t) {
			Mc.prototype.fromJSON.call(this, t), (this.points = []);
			for (var e = 0, n = t.points.length; e < n; e++) {
				var r = t.points[e];
				this.points.push(new wt().fromArray(r));
			}
			return (
				(this.closed = t.closed),
				(this.curveType = t.curveType),
				(this.tension = t.tension),
				this
			);
		}),
		(Oc.prototype = Object.create(Mc.prototype)),
		(Oc.prototype.constructor = Oc),
		(Oc.prototype.isCubicBezierCurve = !0),
		(Oc.prototype.getPoint = function (t, e) {
			var n = e || new pt(),
				r = this.v0,
				i = this.v1,
				a = this.v2,
				o = this.v3;
			return n.set(Nc(t, r.x, i.x, a.x, o.x), Nc(t, r.y, i.y, a.y, o.y)), n;
		}),
		(Oc.prototype.copy = function (t) {
			return (
				Mc.prototype.copy.call(this, t),
				this.v0.copy(t.v0),
				this.v1.copy(t.v1),
				this.v2.copy(t.v2),
				this.v3.copy(t.v3),
				this
			);
		}),
		(Oc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			return (
				(t.v0 = this.v0.toArray()),
				(t.v1 = this.v1.toArray()),
				(t.v2 = this.v2.toArray()),
				(t.v3 = this.v3.toArray()),
				t
			);
		}),
		(Oc.prototype.fromJSON = function (t) {
			return (
				Mc.prototype.fromJSON.call(this, t),
				this.v0.fromArray(t.v0),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this.v3.fromArray(t.v3),
				this
			);
		}),
		(Bc.prototype = Object.create(Mc.prototype)),
		(Bc.prototype.constructor = Bc),
		(Bc.prototype.isCubicBezierCurve3 = !0),
		(Bc.prototype.getPoint = function (t, e) {
			var n = e || new wt(),
				r = this.v0,
				i = this.v1,
				a = this.v2,
				o = this.v3;
			return (
				n.set(
					Nc(t, r.x, i.x, a.x, o.x),
					Nc(t, r.y, i.y, a.y, o.y),
					Nc(t, r.z, i.z, a.z, o.z)
				),
				n
			);
		}),
		(Bc.prototype.copy = function (t) {
			return (
				Mc.prototype.copy.call(this, t),
				this.v0.copy(t.v0),
				this.v1.copy(t.v1),
				this.v2.copy(t.v2),
				this.v3.copy(t.v3),
				this
			);
		}),
		(Bc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			return (
				(t.v0 = this.v0.toArray()),
				(t.v1 = this.v1.toArray()),
				(t.v2 = this.v2.toArray()),
				(t.v3 = this.v3.toArray()),
				t
			);
		}),
		(Bc.prototype.fromJSON = function (t) {
			return (
				Mc.prototype.fromJSON.call(this, t),
				this.v0.fromArray(t.v0),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this.v3.fromArray(t.v3),
				this
			);
		}),
		(zc.prototype = Object.create(Mc.prototype)),
		(zc.prototype.constructor = zc),
		(zc.prototype.isLineCurve = !0),
		(zc.prototype.getPoint = function (t, e) {
			var n = e || new pt();
			return (
				1 === t
					? n.copy(this.v2)
					: (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
				n
			);
		}),
		(zc.prototype.getPointAt = function (t, e) {
			return this.getPoint(t, e);
		}),
		(zc.prototype.getTangent = function (t, e) {
			var n = e || new pt();
			return n.copy(this.v2).sub(this.v1).normalize(), n;
		}),
		(zc.prototype.copy = function (t) {
			return (
				Mc.prototype.copy.call(this, t),
				this.v1.copy(t.v1),
				this.v2.copy(t.v2),
				this
			);
		}),
		(zc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
		}),
		(zc.prototype.fromJSON = function (t) {
			return (
				Mc.prototype.fromJSON.call(this, t),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this
			);
		}),
		(Gc.prototype = Object.create(Mc.prototype)),
		(Gc.prototype.constructor = Gc),
		(Gc.prototype.isLineCurve3 = !0),
		(Gc.prototype.getPoint = function (t, e) {
			var n = e || new wt();
			return (
				1 === t
					? n.copy(this.v2)
					: (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
				n
			);
		}),
		(Gc.prototype.getPointAt = function (t, e) {
			return this.getPoint(t, e);
		}),
		(Gc.prototype.copy = function (t) {
			return (
				Mc.prototype.copy.call(this, t),
				this.v1.copy(t.v1),
				this.v2.copy(t.v2),
				this
			);
		}),
		(Gc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
		}),
		(Gc.prototype.fromJSON = function (t) {
			return (
				Mc.prototype.fromJSON.call(this, t),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this
			);
		}),
		(Fc.prototype = Object.create(Mc.prototype)),
		(Fc.prototype.constructor = Fc),
		(Fc.prototype.isQuadraticBezierCurve = !0),
		(Fc.prototype.getPoint = function (t, e) {
			var n = e || new pt(),
				r = this.v0,
				i = this.v1,
				a = this.v2;
			return n.set(Dc(t, r.x, i.x, a.x), Dc(t, r.y, i.y, a.y)), n;
		}),
		(Fc.prototype.copy = function (t) {
			return (
				Mc.prototype.copy.call(this, t),
				this.v0.copy(t.v0),
				this.v1.copy(t.v1),
				this.v2.copy(t.v2),
				this
			);
		}),
		(Fc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			return (
				(t.v0 = this.v0.toArray()),
				(t.v1 = this.v1.toArray()),
				(t.v2 = this.v2.toArray()),
				t
			);
		}),
		(Fc.prototype.fromJSON = function (t) {
			return (
				Mc.prototype.fromJSON.call(this, t),
				this.v0.fromArray(t.v0),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this
			);
		}),
		(Uc.prototype = Object.create(Mc.prototype)),
		(Uc.prototype.constructor = Uc),
		(Uc.prototype.isQuadraticBezierCurve3 = !0),
		(Uc.prototype.getPoint = function (t, e) {
			var n = e || new wt(),
				r = this.v0,
				i = this.v1,
				a = this.v2;
			return (
				n.set(Dc(t, r.x, i.x, a.x), Dc(t, r.y, i.y, a.y), Dc(t, r.z, i.z, a.z)),
				n
			);
		}),
		(Uc.prototype.copy = function (t) {
			return (
				Mc.prototype.copy.call(this, t),
				this.v0.copy(t.v0),
				this.v1.copy(t.v1),
				this.v2.copy(t.v2),
				this
			);
		}),
		(Uc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			return (
				(t.v0 = this.v0.toArray()),
				(t.v1 = this.v1.toArray()),
				(t.v2 = this.v2.toArray()),
				t
			);
		}),
		(Uc.prototype.fromJSON = function (t) {
			return (
				Mc.prototype.fromJSON.call(this, t),
				this.v0.fromArray(t.v0),
				this.v1.fromArray(t.v1),
				this.v2.fromArray(t.v2),
				this
			);
		}),
		(Hc.prototype = Object.create(Mc.prototype)),
		(Hc.prototype.constructor = Hc),
		(Hc.prototype.isSplineCurve = !0),
		(Hc.prototype.getPoint = function (t, e) {
			var n = e || new pt(),
				r = this.points,
				i = (r.length - 1) * t,
				a = Math.floor(i),
				o = i - a,
				s = r[0 === a ? a : a - 1],
				c = r[a],
				l = r[a > r.length - 2 ? r.length - 1 : a + 1],
				u = r[a > r.length - 3 ? r.length - 1 : a + 2];
			return n.set(Ic(o, s.x, c.x, l.x, u.x), Ic(o, s.y, c.y, l.y, u.y)), n;
		}),
		(Hc.prototype.copy = function (t) {
			Mc.prototype.copy.call(this, t), (this.points = []);
			for (var e = 0, n = t.points.length; e < n; e++) {
				var r = t.points[e];
				this.points.push(r.clone());
			}
			return this;
		}),
		(Hc.prototype.toJSON = function () {
			var t = Mc.prototype.toJSON.call(this);
			t.points = [];
			for (var e = 0, n = this.points.length; e < n; e++) {
				var r = this.points[e];
				t.points.push(r.toArray());
			}
			return t;
		}),
		(Hc.prototype.fromJSON = function (t) {
			Mc.prototype.fromJSON.call(this, t), (this.points = []);
			for (var e = 0, n = t.points.length; e < n; e++) {
				var r = t.points[e];
				this.points.push(new pt().fromArray(r));
			}
			return this;
		});
	var kc = Object.freeze({
		__proto__: null,
		ArcCurve: Tc,
		CatmullRomCurve3: Pc,
		CubicBezierCurve: Oc,
		CubicBezierCurve3: Bc,
		EllipseCurve: Sc,
		LineCurve: zc,
		LineCurve3: Gc,
		QuadraticBezierCurve: Fc,
		QuadraticBezierCurve3: Uc,
		SplineCurve: Hc,
	});
	function Vc() {
		Mc.call(this),
			(this.type = 'CurvePath'),
			(this.curves = []),
			(this.autoClose = !1);
	}
	function Wc(t) {
		Vc.call(this),
			(this.type = 'Path'),
			(this.currentPoint = new pt()),
			t && this.setFromPoints(t);
	}
	function jc(t) {
		Wc.call(this, t),
			(this.uuid = st.generateUUID()),
			(this.type = 'Shape'),
			(this.holes = []);
	}
	function qc(t, e) {
		be.call(this),
			(this.type = 'Light'),
			(this.color = new Ve(t)),
			(this.intensity = void 0 !== e ? e : 1);
	}
	function Xc(t, e, n) {
		qc.call(this, t, n),
			(this.type = 'HemisphereLight'),
			this.position.copy(be.DefaultUp),
			this.updateMatrix(),
			(this.groundColor = new Ve(e));
	}
	function Yc(t) {
		(this.camera = t),
			(this.bias = 0),
			(this.normalBias = 0),
			(this.radius = 1),
			(this.mapSize = new pt(512, 512)),
			(this.map = null),
			(this.mapPass = null),
			(this.matrix = new Jt()),
			(this.autoUpdate = !0),
			(this.needsUpdate = !1),
			(this._frustum = new Qn()),
			(this._frameExtents = new pt(1, 1)),
			(this._viewportCount = 1),
			(this._viewports = [new yt(0, 0, 1, 1)]);
	}
	function Zc() {
		Yc.call(this, new Vn(50, 1, 0.5, 500)), (this.focus = 1);
	}
	function Jc(t, e, n, r, i, a) {
		qc.call(this, t, e),
			(this.type = 'SpotLight'),
			this.position.copy(be.DefaultUp),
			this.updateMatrix(),
			(this.target = new be()),
			Object.defineProperty(this, 'power', {
				get: function () {
					return this.intensity * Math.PI;
				},
				set: function (t) {
					this.intensity = t / Math.PI;
				},
			}),
			(this.distance = void 0 !== n ? n : 0),
			(this.angle = void 0 !== r ? r : Math.PI / 3),
			(this.penumbra = void 0 !== i ? i : 0),
			(this.decay = void 0 !== a ? a : 1),
			(this.shadow = new Zc());
	}
	function Qc() {
		Yc.call(this, new Vn(90, 1, 0.5, 500)),
			(this._frameExtents = new pt(4, 2)),
			(this._viewportCount = 6),
			(this._viewports = [
				new yt(2, 1, 1, 1),
				new yt(0, 1, 1, 1),
				new yt(3, 1, 1, 1),
				new yt(1, 1, 1, 1),
				new yt(3, 0, 1, 1),
				new yt(1, 0, 1, 1),
			]),
			(this._cubeDirections = [
				new wt(1, 0, 0),
				new wt(-1, 0, 0),
				new wt(0, 0, 1),
				new wt(0, 0, -1),
				new wt(0, 1, 0),
				new wt(0, -1, 0),
			]),
			(this._cubeUps = [
				new wt(0, 1, 0),
				new wt(0, 1, 0),
				new wt(0, 1, 0),
				new wt(0, 1, 0),
				new wt(0, 0, 1),
				new wt(0, 0, -1),
			]);
	}
	function Kc(t, e, n, r) {
		qc.call(this, t, e),
			(this.type = 'PointLight'),
			Object.defineProperty(this, 'power', {
				get: function () {
					return 4 * this.intensity * Math.PI;
				},
				set: function (t) {
					this.intensity = t / (4 * Math.PI);
				},
			}),
			(this.distance = void 0 !== n ? n : 0),
			(this.decay = void 0 !== r ? r : 1),
			(this.shadow = new Qc());
	}
	function $c(t, e, n, r, i, a) {
		kn.call(this),
			(this.type = 'OrthographicCamera'),
			(this.zoom = 1),
			(this.view = null),
			(this.left = void 0 !== t ? t : -1),
			(this.right = void 0 !== e ? e : 1),
			(this.top = void 0 !== n ? n : 1),
			(this.bottom = void 0 !== r ? r : -1),
			(this.near = void 0 !== i ? i : 0.1),
			(this.far = void 0 !== a ? a : 2e3),
			this.updateProjectionMatrix();
	}
	function tl() {
		Yc.call(this, new $c(-5, 5, 5, -5, 0.5, 500));
	}
	function el(t, e) {
		qc.call(this, t, e),
			(this.type = 'DirectionalLight'),
			this.position.copy(be.DefaultUp),
			this.updateMatrix(),
			(this.target = new be()),
			(this.shadow = new tl());
	}
	function nl(t, e) {
		qc.call(this, t, e), (this.type = 'AmbientLight');
	}
	function rl(t, e, n, r) {
		qc.call(this, t, e),
			(this.type = 'RectAreaLight'),
			(this.width = void 0 !== n ? n : 10),
			(this.height = void 0 !== r ? r : 10);
	}
	(Vc.prototype = Object.assign(Object.create(Mc.prototype), {
		constructor: Vc,
		add: function (t) {
			this.curves.push(t);
		},
		closePath: function () {
			var t = this.curves[0].getPoint(0),
				e = this.curves[this.curves.length - 1].getPoint(1);
			t.equals(e) || this.curves.push(new zc(e, t));
		},
		getPoint: function (t) {
			for (
				var e = t * this.getLength(), n = this.getCurveLengths(), r = 0;
				r < n.length;

			) {
				if (n[r] >= e) {
					var i = n[r] - e,
						a = this.curves[r],
						o = a.getLength(),
						s = 0 === o ? 0 : 1 - i / o;
					return a.getPointAt(s);
				}
				r++;
			}
			return null;
		},
		getLength: function () {
			var t = this.getCurveLengths();
			return t[t.length - 1];
		},
		updateArcLengths: function () {
			(this.needsUpdate = !0),
				(this.cacheLengths = null),
				this.getCurveLengths();
		},
		getCurveLengths: function () {
			if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
				return this.cacheLengths;
			for (var t = [], e = 0, n = 0, r = this.curves.length; n < r; n++)
				(e += this.curves[n].getLength()), t.push(e);
			return (this.cacheLengths = t), t;
		},
		getSpacedPoints: function (t) {
			void 0 === t && (t = 40);
			for (var e = [], n = 0; n <= t; n++) e.push(this.getPoint(n / t));
			return this.autoClose && e.push(e[0]), e;
		},
		getPoints: function (t) {
			t = t || 12;
			for (var e, n = [], r = 0, i = this.curves; r < i.length; r++)
				for (
					var a = i[r],
						o =
							a && a.isEllipseCurve
								? 2 * t
								: a && (a.isLineCurve || a.isLineCurve3)
								? 1
								: a && a.isSplineCurve
								? t * a.points.length
								: t,
						s = a.getPoints(o),
						c = 0;
					c < s.length;
					c++
				) {
					var l = s[c];
					(e && e.equals(l)) || (n.push(l), (e = l));
				}
			return (
				this.autoClose &&
					n.length > 1 &&
					!n[n.length - 1].equals(n[0]) &&
					n.push(n[0]),
				n
			);
		},
		copy: function (t) {
			Mc.prototype.copy.call(this, t), (this.curves = []);
			for (var e = 0, n = t.curves.length; e < n; e++) {
				var r = t.curves[e];
				this.curves.push(r.clone());
			}
			return (this.autoClose = t.autoClose), this;
		},
		toJSON: function () {
			var t = Mc.prototype.toJSON.call(this);
			(t.autoClose = this.autoClose), (t.curves = []);
			for (var e = 0, n = this.curves.length; e < n; e++) {
				var r = this.curves[e];
				t.curves.push(r.toJSON());
			}
			return t;
		},
		fromJSON: function (t) {
			Mc.prototype.fromJSON.call(this, t),
				(this.autoClose = t.autoClose),
				(this.curves = []);
			for (var e = 0, n = t.curves.length; e < n; e++) {
				var r = t.curves[e];
				this.curves.push(new kc[r.type]().fromJSON(r));
			}
			return this;
		},
	})),
		(Wc.prototype = Object.assign(Object.create(Vc.prototype), {
			constructor: Wc,
			setFromPoints: function (t) {
				this.moveTo(t[0].x, t[0].y);
				for (var e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
				return this;
			},
			moveTo: function (t, e) {
				return this.currentPoint.set(t, e), this;
			},
			lineTo: function (t, e) {
				var n = new zc(this.currentPoint.clone(), new pt(t, e));
				return this.curves.push(n), this.currentPoint.set(t, e), this;
			},
			quadraticCurveTo: function (t, e, n, r) {
				var i = new Fc(this.currentPoint.clone(), new pt(t, e), new pt(n, r));
				return this.curves.push(i), this.currentPoint.set(n, r), this;
			},
			bezierCurveTo: function (t, e, n, r, i, a) {
				var o = new Oc(
					this.currentPoint.clone(),
					new pt(t, e),
					new pt(n, r),
					new pt(i, a)
				);
				return this.curves.push(o), this.currentPoint.set(i, a), this;
			},
			splineThru: function (t) {
				var e = new Hc([this.currentPoint.clone()].concat(t));
				return (
					this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
				);
			},
			arc: function (t, e, n, r, i, a) {
				var o = this.currentPoint.x,
					s = this.currentPoint.y;
				return this.absarc(t + o, e + s, n, r, i, a), this;
			},
			absarc: function (t, e, n, r, i, a) {
				return this.absellipse(t, e, n, n, r, i, a), this;
			},
			ellipse: function (t, e, n, r, i, a, o, s) {
				var c = this.currentPoint.x,
					l = this.currentPoint.y;
				return this.absellipse(t + c, e + l, n, r, i, a, o, s), this;
			},
			absellipse: function (t, e, n, r, i, a, o, s) {
				var c = new Sc(t, e, n, r, i, a, o, s);
				if (this.curves.length > 0) {
					var l = c.getPoint(0);
					l.equals(this.currentPoint) || this.lineTo(l.x, l.y);
				}
				this.curves.push(c);
				var u = c.getPoint(1);
				return this.currentPoint.copy(u), this;
			},
			copy: function (t) {
				return (
					Vc.prototype.copy.call(this, t),
					this.currentPoint.copy(t.currentPoint),
					this
				);
			},
			toJSON: function () {
				var t = Vc.prototype.toJSON.call(this);
				return (t.currentPoint = this.currentPoint.toArray()), t;
			},
			fromJSON: function (t) {
				return (
					Vc.prototype.fromJSON.call(this, t),
					this.currentPoint.fromArray(t.currentPoint),
					this
				);
			},
		})),
		(jc.prototype = Object.assign(Object.create(Wc.prototype), {
			constructor: jc,
			getPointsHoles: function (t) {
				for (var e = [], n = 0, r = this.holes.length; n < r; n++)
					e[n] = this.holes[n].getPoints(t);
				return e;
			},
			extractPoints: function (t) {
				return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
			},
			copy: function (t) {
				Wc.prototype.copy.call(this, t), (this.holes = []);
				for (var e = 0, n = t.holes.length; e < n; e++) {
					var r = t.holes[e];
					this.holes.push(r.clone());
				}
				return this;
			},
			toJSON: function () {
				var t = Wc.prototype.toJSON.call(this);
				(t.uuid = this.uuid), (t.holes = []);
				for (var e = 0, n = this.holes.length; e < n; e++) {
					var r = this.holes[e];
					t.holes.push(r.toJSON());
				}
				return t;
			},
			fromJSON: function (t) {
				Wc.prototype.fromJSON.call(this, t),
					(this.uuid = t.uuid),
					(this.holes = []);
				for (var e = 0, n = t.holes.length; e < n; e++) {
					var r = t.holes[e];
					this.holes.push(new Wc().fromJSON(r));
				}
				return this;
			},
		})),
		(qc.prototype = Object.assign(Object.create(be.prototype), {
			constructor: qc,
			isLight: !0,
			copy: function (t) {
				return (
					be.prototype.copy.call(this, t),
					this.color.copy(t.color),
					(this.intensity = t.intensity),
					this
				);
			},
			toJSON: function (t) {
				var e = be.prototype.toJSON.call(this, t);
				return (
					(e.object.color = this.color.getHex()),
					(e.object.intensity = this.intensity),
					void 0 !== this.groundColor &&
						(e.object.groundColor = this.groundColor.getHex()),
					void 0 !== this.distance && (e.object.distance = this.distance),
					void 0 !== this.angle && (e.object.angle = this.angle),
					void 0 !== this.decay && (e.object.decay = this.decay),
					void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
					void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
					e
				);
			},
		})),
		(Xc.prototype = Object.assign(Object.create(qc.prototype), {
			constructor: Xc,
			isHemisphereLight: !0,
			copy: function (t) {
				return (
					qc.prototype.copy.call(this, t),
					this.groundColor.copy(t.groundColor),
					this
				);
			},
		})),
		Object.assign(Yc.prototype, {
			_projScreenMatrix: new Jt(),
			_lightPositionWorld: new wt(),
			_lookTarget: new wt(),
			getViewportCount: function () {
				return this._viewportCount;
			},
			getFrustum: function () {
				return this._frustum;
			},
			updateMatrices: function (t) {
				var e = this.camera,
					n = this.matrix,
					r = this._projScreenMatrix,
					i = this._lookTarget,
					a = this._lightPositionWorld;
				a.setFromMatrixPosition(t.matrixWorld),
					e.position.copy(a),
					i.setFromMatrixPosition(t.target.matrixWorld),
					e.lookAt(i),
					e.updateMatrixWorld(),
					r.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
					this._frustum.setFromProjectionMatrix(r),
					n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
					n.multiply(e.projectionMatrix),
					n.multiply(e.matrixWorldInverse);
			},
			getViewport: function (t) {
				return this._viewports[t];
			},
			getFrameExtents: function () {
				return this._frameExtents;
			},
			copy: function (t) {
				return (
					(this.camera = t.camera.clone()),
					(this.bias = t.bias),
					(this.radius = t.radius),
					this.mapSize.copy(t.mapSize),
					this
				);
			},
			clone: function () {
				return new this.constructor().copy(this);
			},
			toJSON: function () {
				var t = {};
				return (
					0 !== this.bias && (t.bias = this.bias),
					0 !== this.normalBias && (t.normalBias = this.normalBias),
					1 !== this.radius && (t.radius = this.radius),
					(512 === this.mapSize.x && 512 === this.mapSize.y) ||
						(t.mapSize = this.mapSize.toArray()),
					(t.camera = this.camera.toJSON(!1).object),
					delete t.camera.matrix,
					t
				);
			},
		}),
		(Zc.prototype = Object.assign(Object.create(Yc.prototype), {
			constructor: Zc,
			isSpotLightShadow: !0,
			updateMatrices: function (t) {
				var e = this.camera,
					n = 2 * st.RAD2DEG * t.angle * this.focus,
					r = this.mapSize.width / this.mapSize.height,
					i = t.distance || e.far;
				(n === e.fov && r === e.aspect && i === e.far) ||
					((e.fov = n),
					(e.aspect = r),
					(e.far = i),
					e.updateProjectionMatrix()),
					Yc.prototype.updateMatrices.call(this, t);
			},
		})),
		(Jc.prototype = Object.assign(Object.create(qc.prototype), {
			constructor: Jc,
			isSpotLight: !0,
			copy: function (t) {
				return (
					qc.prototype.copy.call(this, t),
					(this.distance = t.distance),
					(this.angle = t.angle),
					(this.penumbra = t.penumbra),
					(this.decay = t.decay),
					(this.target = t.target.clone()),
					(this.shadow = t.shadow.clone()),
					this
				);
			},
		})),
		(Qc.prototype = Object.assign(Object.create(Yc.prototype), {
			constructor: Qc,
			isPointLightShadow: !0,
			updateMatrices: function (t, e) {
				void 0 === e && (e = 0);
				var n = this.camera,
					r = this.matrix,
					i = this._lightPositionWorld,
					a = this._lookTarget,
					o = this._projScreenMatrix;
				i.setFromMatrixPosition(t.matrixWorld),
					n.position.copy(i),
					a.copy(n.position),
					a.add(this._cubeDirections[e]),
					n.up.copy(this._cubeUps[e]),
					n.lookAt(a),
					n.updateMatrixWorld(),
					r.makeTranslation(-i.x, -i.y, -i.z),
					o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
					this._frustum.setFromProjectionMatrix(o);
			},
		})),
		(Kc.prototype = Object.assign(Object.create(qc.prototype), {
			constructor: Kc,
			isPointLight: !0,
			copy: function (t) {
				return (
					qc.prototype.copy.call(this, t),
					(this.distance = t.distance),
					(this.decay = t.decay),
					(this.shadow = t.shadow.clone()),
					this
				);
			},
		})),
		($c.prototype = Object.assign(Object.create(kn.prototype), {
			constructor: $c,
			isOrthographicCamera: !0,
			copy: function (t, e) {
				return (
					kn.prototype.copy.call(this, t, e),
					(this.left = t.left),
					(this.right = t.right),
					(this.top = t.top),
					(this.bottom = t.bottom),
					(this.near = t.near),
					(this.far = t.far),
					(this.zoom = t.zoom),
					(this.view = null === t.view ? null : Object.assign({}, t.view)),
					this
				);
			},
			setViewOffset: function (t, e, n, r, i, a) {
				null === this.view &&
					(this.view = {
						enabled: !0,
						fullWidth: 1,
						fullHeight: 1,
						offsetX: 0,
						offsetY: 0,
						width: 1,
						height: 1,
					}),
					(this.view.enabled = !0),
					(this.view.fullWidth = t),
					(this.view.fullHeight = e),
					(this.view.offsetX = n),
					(this.view.offsetY = r),
					(this.view.width = i),
					(this.view.height = a),
					this.updateProjectionMatrix();
			},
			clearViewOffset: function () {
				null !== this.view && (this.view.enabled = !1),
					this.updateProjectionMatrix();
			},
			updateProjectionMatrix: function () {
				var t = (this.right - this.left) / (2 * this.zoom),
					e = (this.top - this.bottom) / (2 * this.zoom),
					n = (this.right + this.left) / 2,
					r = (this.top + this.bottom) / 2,
					i = n - t,
					a = n + t,
					o = r + e,
					s = r - e;
				if (null !== this.view && this.view.enabled) {
					var c = (this.right - this.left) / this.view.fullWidth / this.zoom,
						l = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
					(a = (i += c * this.view.offsetX) + c * this.view.width),
						(s = (o -= l * this.view.offsetY) - l * this.view.height);
				}
				this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far),
					this.projectionMatrixInverse.getInverse(this.projectionMatrix);
			},
			toJSON: function (t) {
				var e = be.prototype.toJSON.call(this, t);
				return (
					(e.object.zoom = this.zoom),
					(e.object.left = this.left),
					(e.object.right = this.right),
					(e.object.top = this.top),
					(e.object.bottom = this.bottom),
					(e.object.near = this.near),
					(e.object.far = this.far),
					null !== this.view && (e.object.view = Object.assign({}, this.view)),
					e
				);
			},
		})),
		(tl.prototype = Object.assign(Object.create(Yc.prototype), {
			constructor: tl,
			isDirectionalLightShadow: !0,
			updateMatrices: function (t) {
				Yc.prototype.updateMatrices.call(this, t);
			},
		})),
		(el.prototype = Object.assign(Object.create(qc.prototype), {
			constructor: el,
			isDirectionalLight: !0,
			copy: function (t) {
				return (
					qc.prototype.copy.call(this, t),
					(this.target = t.target.clone()),
					(this.shadow = t.shadow.clone()),
					this
				);
			},
		})),
		(nl.prototype = Object.assign(Object.create(qc.prototype), {
			constructor: nl,
			isAmbientLight: !0,
		})),
		(rl.prototype = Object.assign(Object.create(qc.prototype), {
			constructor: rl,
			isRectAreaLight: !0,
			copy: function (t) {
				return (
					qc.prototype.copy.call(this, t),
					(this.width = t.width),
					(this.height = t.height),
					this
				);
			},
			toJSON: function (t) {
				var e = qc.prototype.toJSON.call(this, t);
				return (
					(e.object.width = this.width), (e.object.height = this.height), e
				);
			},
		}));
	var il = (function () {
		function t() {
			Object.defineProperty(this, 'isSphericalHarmonics3', { value: !0 }),
				(this.coefficients = []);
			for (var t = 0; t < 9; t++) this.coefficients.push(new wt());
		}
		var e = t.prototype;
		return (
			(e.set = function (t) {
				for (var e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
				return this;
			}),
			(e.zero = function () {
				for (var t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
				return this;
			}),
			(e.getAt = function (t, e) {
				var n = t.x,
					r = t.y,
					i = t.z,
					a = this.coefficients;
				return (
					e.copy(a[0]).multiplyScalar(0.282095),
					e.addScaledVector(a[1], 0.488603 * r),
					e.addScaledVector(a[2], 0.488603 * i),
					e.addScaledVector(a[3], 0.488603 * n),
					e.addScaledVector(a[4], n * r * 1.092548),
					e.addScaledVector(a[5], r * i * 1.092548),
					e.addScaledVector(a[6], 0.315392 * (3 * i * i - 1)),
					e.addScaledVector(a[7], n * i * 1.092548),
					e.addScaledVector(a[8], 0.546274 * (n * n - r * r)),
					e
				);
			}),
			(e.getIrradianceAt = function (t, e) {
				var n = t.x,
					r = t.y,
					i = t.z,
					a = this.coefficients;
				return (
					e.copy(a[0]).multiplyScalar(0.886227),
					e.addScaledVector(a[1], 1.023328 * r),
					e.addScaledVector(a[2], 1.023328 * i),
					e.addScaledVector(a[3], 1.023328 * n),
					e.addScaledVector(a[4], 0.858086 * n * r),
					e.addScaledVector(a[5], 0.858086 * r * i),
					e.addScaledVector(a[6], 0.743125 * i * i - 0.247708),
					e.addScaledVector(a[7], 0.858086 * n * i),
					e.addScaledVector(a[8], 0.429043 * (n * n - r * r)),
					e
				);
			}),
			(e.add = function (t) {
				for (var e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
				return this;
			}),
			(e.addScaledSH = function (t, e) {
				for (var n = 0; n < 9; n++)
					this.coefficients[n].addScaledVector(t.coefficients[n], e);
				return this;
			}),
			(e.scale = function (t) {
				for (var e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
				return this;
			}),
			(e.lerp = function (t, e) {
				for (var n = 0; n < 9; n++)
					this.coefficients[n].lerp(t.coefficients[n], e);
				return this;
			}),
			(e.equals = function (t) {
				for (var e = 0; e < 9; e++)
					if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
				return !0;
			}),
			(e.copy = function (t) {
				return this.set(t.coefficients);
			}),
			(e.clone = function () {
				return new this.constructor().copy(this);
			}),
			(e.fromArray = function (t, e) {
				void 0 === e && (e = 0);
				for (var n = this.coefficients, r = 0; r < 9; r++)
					n[r].fromArray(t, e + 3 * r);
				return this;
			}),
			(e.toArray = function (t, e) {
				void 0 === t && (t = []), void 0 === e && (e = 0);
				for (var n = this.coefficients, r = 0; r < 9; r++)
					n[r].toArray(t, e + 3 * r);
				return t;
			}),
			(t.getBasisAt = function (t, e) {
				var n = t.x,
					r = t.y,
					i = t.z;
				(e[0] = 0.282095),
					(e[1] = 0.488603 * r),
					(e[2] = 0.488603 * i),
					(e[3] = 0.488603 * n),
					(e[4] = 1.092548 * n * r),
					(e[5] = 1.092548 * r * i),
					(e[6] = 0.315392 * (3 * i * i - 1)),
					(e[7] = 1.092548 * n * i),
					(e[8] = 0.546274 * (n * n - r * r));
			}),
			t
		);
	})();
	function al(t, e) {
		qc.call(this, void 0, e),
			(this.type = 'LightProbe'),
			(this.sh = void 0 !== t ? t : new il());
	}
	function ol(t) {
		fc.call(this, t), (this.textures = {});
	}
	(al.prototype = Object.assign(Object.create(qc.prototype), {
		constructor: al,
		isLightProbe: !0,
		copy: function (t) {
			return qc.prototype.copy.call(this, t), this.sh.copy(t.sh), this;
		},
		fromJSON: function (t) {
			return (this.intensity = t.intensity), this.sh.fromArray(t.sh), this;
		},
		toJSON: function (t) {
			var e = qc.prototype.toJSON.call(this, t);
			return (e.object.sh = this.sh.toArray()), e;
		},
	})),
		(ol.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: ol,
			load: function (t, e, n, r) {
				var i = this,
					a = new vc(i.manager);
				a.setPath(i.path),
					a.setRequestHeader(i.requestHeader),
					a.setWithCredentials(i.withCredentials),
					a.load(
						t,
						function (n) {
							try {
								e(i.parse(JSON.parse(n)));
							} catch (e) {
								r ? r(e) : console.error(e), i.manager.itemError(t);
							}
						},
						n,
						r
					);
			},
			parse: function (t) {
				var e = this.textures;
				function n(t) {
					return (
						void 0 === e[t] &&
							console.warn('THREE.MaterialLoader: Undefined texture', t),
						e[t]
					);
				}
				var r = new Zs[t.type]();
				if (
					(void 0 !== t.uuid && (r.uuid = t.uuid),
					void 0 !== t.name && (r.name = t.name),
					void 0 !== t.color && r.color.setHex(t.color),
					void 0 !== t.roughness && (r.roughness = t.roughness),
					void 0 !== t.metalness && (r.metalness = t.metalness),
					void 0 !== t.sheen && (r.sheen = new Ve().setHex(t.sheen)),
					void 0 !== t.emissive && r.emissive.setHex(t.emissive),
					void 0 !== t.specular && r.specular.setHex(t.specular),
					void 0 !== t.shininess && (r.shininess = t.shininess),
					void 0 !== t.clearcoat && (r.clearcoat = t.clearcoat),
					void 0 !== t.clearcoatRoughness &&
						(r.clearcoatRoughness = t.clearcoatRoughness),
					void 0 !== t.fog && (r.fog = t.fog),
					void 0 !== t.flatShading && (r.flatShading = t.flatShading),
					void 0 !== t.blending && (r.blending = t.blending),
					void 0 !== t.combine && (r.combine = t.combine),
					void 0 !== t.side && (r.side = t.side),
					void 0 !== t.opacity && (r.opacity = t.opacity),
					void 0 !== t.transparent && (r.transparent = t.transparent),
					void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest),
					void 0 !== t.depthTest && (r.depthTest = t.depthTest),
					void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite),
					void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite),
					void 0 !== t.stencilWrite && (r.stencilWrite = t.stencilWrite),
					void 0 !== t.stencilWriteMask &&
						(r.stencilWriteMask = t.stencilWriteMask),
					void 0 !== t.stencilFunc && (r.stencilFunc = t.stencilFunc),
					void 0 !== t.stencilRef && (r.stencilRef = t.stencilRef),
					void 0 !== t.stencilFuncMask &&
						(r.stencilFuncMask = t.stencilFuncMask),
					void 0 !== t.stencilFail && (r.stencilFail = t.stencilFail),
					void 0 !== t.stencilZFail && (r.stencilZFail = t.stencilZFail),
					void 0 !== t.stencilZPass && (r.stencilZPass = t.stencilZPass),
					void 0 !== t.wireframe && (r.wireframe = t.wireframe),
					void 0 !== t.wireframeLinewidth &&
						(r.wireframeLinewidth = t.wireframeLinewidth),
					void 0 !== t.wireframeLinecap &&
						(r.wireframeLinecap = t.wireframeLinecap),
					void 0 !== t.wireframeLinejoin &&
						(r.wireframeLinejoin = t.wireframeLinejoin),
					void 0 !== t.rotation && (r.rotation = t.rotation),
					1 !== t.linewidth && (r.linewidth = t.linewidth),
					void 0 !== t.dashSize && (r.dashSize = t.dashSize),
					void 0 !== t.gapSize && (r.gapSize = t.gapSize),
					void 0 !== t.scale && (r.scale = t.scale),
					void 0 !== t.polygonOffset && (r.polygonOffset = t.polygonOffset),
					void 0 !== t.polygonOffsetFactor &&
						(r.polygonOffsetFactor = t.polygonOffsetFactor),
					void 0 !== t.polygonOffsetUnits &&
						(r.polygonOffsetUnits = t.polygonOffsetUnits),
					void 0 !== t.skinning && (r.skinning = t.skinning),
					void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets),
					void 0 !== t.morphNormals && (r.morphNormals = t.morphNormals),
					void 0 !== t.dithering && (r.dithering = t.dithering),
					void 0 !== t.vertexTangents && (r.vertexTangents = t.vertexTangents),
					void 0 !== t.visible && (r.visible = t.visible),
					void 0 !== t.toneMapped && (r.toneMapped = t.toneMapped),
					void 0 !== t.userData && (r.userData = t.userData),
					void 0 !== t.vertexColors &&
						('number' == typeof t.vertexColors
							? (r.vertexColors = t.vertexColors > 0)
							: (r.vertexColors = t.vertexColors)),
					void 0 !== t.uniforms)
				)
					for (var i in t.uniforms) {
						var a = t.uniforms[i];
						switch (((r.uniforms[i] = {}), a.type)) {
							case 't':
								r.uniforms[i].value = n(a.value);
								break;
							case 'c':
								r.uniforms[i].value = new Ve().setHex(a.value);
								break;
							case 'v2':
								r.uniforms[i].value = new pt().fromArray(a.value);
								break;
							case 'v3':
								r.uniforms[i].value = new wt().fromArray(a.value);
								break;
							case 'v4':
								r.uniforms[i].value = new yt().fromArray(a.value);
								break;
							case 'm3':
								r.uniforms[i].value = new ft().fromArray(a.value);
								break;
							case 'm4':
								r.uniforms[i].value = new Jt().fromArray(a.value);
								break;
							default:
								r.uniforms[i].value = a.value;
						}
					}
				if (
					(void 0 !== t.defines && (r.defines = t.defines),
					void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader),
					void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader),
					void 0 !== t.extensions)
				)
					for (var o in t.extensions) r.extensions[o] = t.extensions[o];
				if (
					(void 0 !== t.shading && (r.flatShading = 1 === t.shading),
					void 0 !== t.size && (r.size = t.size),
					void 0 !== t.sizeAttenuation &&
						(r.sizeAttenuation = t.sizeAttenuation),
					void 0 !== t.map && (r.map = n(t.map)),
					void 0 !== t.matcap && (r.matcap = n(t.matcap)),
					void 0 !== t.alphaMap && (r.alphaMap = n(t.alphaMap)),
					void 0 !== t.bumpMap && (r.bumpMap = n(t.bumpMap)),
					void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale),
					void 0 !== t.normalMap && (r.normalMap = n(t.normalMap)),
					void 0 !== t.normalMapType && (r.normalMapType = t.normalMapType),
					void 0 !== t.normalScale)
				) {
					var s = t.normalScale;
					!1 === Array.isArray(s) && (s = [s, s]),
						(r.normalScale = new pt().fromArray(s));
				}
				return (
					void 0 !== t.displacementMap &&
						(r.displacementMap = n(t.displacementMap)),
					void 0 !== t.displacementScale &&
						(r.displacementScale = t.displacementScale),
					void 0 !== t.displacementBias &&
						(r.displacementBias = t.displacementBias),
					void 0 !== t.roughnessMap && (r.roughnessMap = n(t.roughnessMap)),
					void 0 !== t.metalnessMap && (r.metalnessMap = n(t.metalnessMap)),
					void 0 !== t.emissiveMap && (r.emissiveMap = n(t.emissiveMap)),
					void 0 !== t.emissiveIntensity &&
						(r.emissiveIntensity = t.emissiveIntensity),
					void 0 !== t.specularMap && (r.specularMap = n(t.specularMap)),
					void 0 !== t.envMap && (r.envMap = n(t.envMap)),
					void 0 !== t.envMapIntensity &&
						(r.envMapIntensity = t.envMapIntensity),
					void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity),
					void 0 !== t.refractionRatio &&
						(r.refractionRatio = t.refractionRatio),
					void 0 !== t.lightMap && (r.lightMap = n(t.lightMap)),
					void 0 !== t.lightMapIntensity &&
						(r.lightMapIntensity = t.lightMapIntensity),
					void 0 !== t.aoMap && (r.aoMap = n(t.aoMap)),
					void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity),
					void 0 !== t.gradientMap && (r.gradientMap = n(t.gradientMap)),
					void 0 !== t.clearcoatMap && (r.clearcoatMap = n(t.clearcoatMap)),
					void 0 !== t.clearcoatRoughnessMap &&
						(r.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)),
					void 0 !== t.clearcoatNormalMap &&
						(r.clearcoatNormalMap = n(t.clearcoatNormalMap)),
					void 0 !== t.clearcoatNormalScale &&
						(r.clearcoatNormalScale = new pt().fromArray(
							t.clearcoatNormalScale
						)),
					void 0 !== t.transmission && (r.transmission = t.transmission),
					void 0 !== t.transmissionMap &&
						(r.transmissionMap = n(t.transmissionMap)),
					r
				);
			},
			setTextures: function (t) {
				return (this.textures = t), this;
			},
		}));
	var sl = {
		decodeText: function (t) {
			if ('undefined' != typeof TextDecoder) return new TextDecoder().decode(t);
			for (var e = '', n = 0, r = t.length; n < r; n++)
				e += String.fromCharCode(t[n]);
			try {
				return decodeURIComponent(escape(e));
			} catch (t) {
				return e;
			}
		},
		extractUrlBase: function (t) {
			var e = t.lastIndexOf('/');
			return -1 === e ? './' : t.substr(0, e + 1);
		},
	};
	function cl() {
		vn.call(this),
			(this.type = 'InstancedBufferGeometry'),
			(this.instanceCount = 1 / 0);
	}
	function ll(t, e, n, r) {
		'number' == typeof n &&
			((r = n),
			(n = !1),
			console.error(
				'THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.'
			)),
			Je.call(this, t, e, n),
			(this.meshPerAttribute = r || 1);
	}
	function ul(t) {
		fc.call(this, t);
	}
	(cl.prototype = Object.assign(Object.create(vn.prototype), {
		constructor: cl,
		isInstancedBufferGeometry: !0,
		copy: function (t) {
			return (
				vn.prototype.copy.call(this, t),
				(this.instanceCount = t.instanceCount),
				this
			);
		},
		clone: function () {
			return new this.constructor().copy(this);
		},
		toJSON: function () {
			var t = vn.prototype.toJSON.call(this);
			return (
				(t.instanceCount = this.instanceCount),
				(t.isInstancedBufferGeometry = !0),
				t
			);
		},
	})),
		(ll.prototype = Object.assign(Object.create(Je.prototype), {
			constructor: ll,
			isInstancedBufferAttribute: !0,
			copy: function (t) {
				return (
					Je.prototype.copy.call(this, t),
					(this.meshPerAttribute = t.meshPerAttribute),
					this
				);
			},
			toJSON: function () {
				var t = Je.prototype.toJSON.call(this);
				return (
					(t.meshPerAttribute = this.meshPerAttribute),
					(t.isInstancedBufferAttribute = !0),
					t
				);
			},
		})),
		(ul.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: ul,
			load: function (t, e, n, r) {
				var i = this,
					a = new vc(i.manager);
				a.setPath(i.path),
					a.setRequestHeader(i.requestHeader),
					a.setWithCredentials(i.withCredentials),
					a.load(
						t,
						function (n) {
							try {
								e(i.parse(JSON.parse(n)));
							} catch (e) {
								r ? r(e) : console.error(e), i.manager.itemError(t);
							}
						},
						n,
						r
					);
			},
			parse: function (t) {
				var e = {},
					n = {};
				function r(t, r) {
					if (void 0 !== e[r]) return e[r];
					var i = t.interleavedBuffers[r],
						a = (function (t, e) {
							if (void 0 !== n[e]) return n[e];
							var r = t.arrayBuffers[e],
								i = new Uint32Array(r).buffer;
							return (n[e] = i), i;
						})(t, i.buffer),
						o = new ca(new dl[i.type](a), i.stride);
					return (o.uuid = i.uuid), (e[r] = o), o;
				}
				var i = t.isInstancedBufferGeometry ? new cl() : new vn(),
					a = t.data.index;
				if (void 0 !== a) {
					var o = new dl[a.type](a.array);
					i.setIndex(new Je(o, 1));
				}
				var s = t.data.attributes;
				for (var c in s) {
					var l = s[c],
						u = void 0;
					if (l.isInterleavedBufferAttribute) {
						u = new ha(r(t.data, l.data), l.itemSize, l.offset, l.normalized);
					} else {
						var h = new dl[l.type](l.array);
						u = new (l.isInstancedBufferAttribute ? ll : Je)(
							h,
							l.itemSize,
							l.normalized
						);
					}
					void 0 !== l.name && (u.name = l.name), i.setAttribute(c, u);
				}
				var d = t.data.morphAttributes;
				if (d)
					for (var p in d) {
						for (var f = d[p], m = [], v = 0, g = f.length; v < g; v++) {
							var y = f[v],
								x = void 0;
							if (y.isInterleavedBufferAttribute)
								x = new ha(
									r(t.data, y.data),
									y.itemSize,
									y.offset,
									y.normalized
								);
							else
								x = new Je(new dl[y.type](y.array), y.itemSize, y.normalized);
							void 0 !== y.name && (x.name = y.name), m.push(x);
						}
						i.morphAttributes[p] = m;
					}
				t.data.morphTargetsRelative && (i.morphTargetsRelative = !0);
				var _ = t.data.groups || t.data.drawcalls || t.data.offsets;
				if (void 0 !== _)
					for (var b = 0, w = _.length; b !== w; ++b) {
						var M = _[b];
						i.addGroup(M.start, M.count, M.materialIndex);
					}
				var S = t.data.boundingSphere;
				if (void 0 !== S) {
					var T = new wt();
					void 0 !== S.center && T.fromArray(S.center),
						(i.boundingSphere = new Ht(T, S.radius));
				}
				return (
					t.name && (i.name = t.name),
					t.userData && (i.userData = t.userData),
					i
				);
			},
		}));
	var hl,
		dl = {
			Int8Array: Int8Array,
			Uint8Array: Uint8Array,
			Uint8ClampedArray:
				'undefined' != typeof Uint8ClampedArray
					? Uint8ClampedArray
					: Uint8Array,
			Int16Array: Int16Array,
			Uint16Array: Uint16Array,
			Int32Array: Int32Array,
			Uint32Array: Uint32Array,
			Float32Array: Float32Array,
			Float64Array: Float64Array,
		},
		pl = (function (t) {
			function e(e) {
				return t.call(this, e) || this;
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.load = function (t, e, n, r) {
					var i = this,
						a = '' === this.path ? sl.extractUrlBase(t) : this.path;
					this.resourcePath = this.resourcePath || a;
					var o = new vc(this.manager);
					o.setPath(this.path),
						o.setRequestHeader(this.requestHeader),
						o.setWithCredentials(this.withCredentials),
						o.load(
							t,
							function (n) {
								var a = null;
								try {
									a = JSON.parse(n);
								} catch (e) {
									return (
										void 0 !== r && r(e),
										void console.error(
											"THREE:ObjectLoader: Can't parse " + t + '.',
											e.message
										)
									);
								}
								var o = a.metadata;
								void 0 !== o &&
								void 0 !== o.type &&
								'geometry' !== o.type.toLowerCase()
									? i.parse(a, e)
									: console.error("THREE.ObjectLoader: Can't load " + t);
							},
							n,
							r
						);
				}),
				(n.parse = function (t, e) {
					var n = this.parseShape(t.shapes),
						r = this.parseGeometries(t.geometries, n),
						i = this.parseImages(t.images, function () {
							void 0 !== e && e(s);
						}),
						a = this.parseTextures(t.textures, i),
						o = this.parseMaterials(t.materials, a),
						s = this.parseObject(t.object, r, o);
					return (
						t.animations && (s.animations = this.parseAnimations(t.animations)),
						(void 0 !== t.images && 0 !== t.images.length) ||
							(void 0 !== e && e(s)),
						s
					);
				}),
				(n.parseShape = function (t) {
					var e = {};
					if (void 0 !== t)
						for (var n = 0, r = t.length; n < r; n++) {
							var i = new jc().fromJSON(t[n]);
							e[i.uuid] = i;
						}
					return e;
				}),
				(n.parseGeometries = function (t, e) {
					var n,
						r = {};
					if (void 0 !== t)
						for (var i = new ul(), a = 0, o = t.length; a < o; a++) {
							var s = void 0,
								c = t[a];
							switch (c.type) {
								case 'PlaneGeometry':
								case 'PlaneBufferGeometry':
									s = new Gs[c.type](
										c.width,
										c.height,
										c.widthSegments,
										c.heightSegments
									);
									break;
								case 'BoxGeometry':
								case 'BoxBufferGeometry':
								case 'CubeGeometry':
									s = new Gs[c.type](
										c.width,
										c.height,
										c.depth,
										c.widthSegments,
										c.heightSegments,
										c.depthSegments
									);
									break;
								case 'CircleGeometry':
								case 'CircleBufferGeometry':
									s = new Gs[c.type](
										c.radius,
										c.segments,
										c.thetaStart,
										c.thetaLength
									);
									break;
								case 'CylinderGeometry':
								case 'CylinderBufferGeometry':
									s = new Gs[c.type](
										c.radiusTop,
										c.radiusBottom,
										c.height,
										c.radialSegments,
										c.heightSegments,
										c.openEnded,
										c.thetaStart,
										c.thetaLength
									);
									break;
								case 'ConeGeometry':
								case 'ConeBufferGeometry':
									s = new Gs[c.type](
										c.radius,
										c.height,
										c.radialSegments,
										c.heightSegments,
										c.openEnded,
										c.thetaStart,
										c.thetaLength
									);
									break;
								case 'SphereGeometry':
								case 'SphereBufferGeometry':
									s = new Gs[c.type](
										c.radius,
										c.widthSegments,
										c.heightSegments,
										c.phiStart,
										c.phiLength,
										c.thetaStart,
										c.thetaLength
									);
									break;
								case 'DodecahedronGeometry':
								case 'DodecahedronBufferGeometry':
								case 'IcosahedronGeometry':
								case 'IcosahedronBufferGeometry':
								case 'OctahedronGeometry':
								case 'OctahedronBufferGeometry':
								case 'TetrahedronGeometry':
								case 'TetrahedronBufferGeometry':
									s = new Gs[c.type](c.radius, c.detail);
									break;
								case 'RingGeometry':
								case 'RingBufferGeometry':
									s = new Gs[c.type](
										c.innerRadius,
										c.outerRadius,
										c.thetaSegments,
										c.phiSegments,
										c.thetaStart,
										c.thetaLength
									);
									break;
								case 'TorusGeometry':
								case 'TorusBufferGeometry':
									s = new Gs[c.type](
										c.radius,
										c.tube,
										c.radialSegments,
										c.tubularSegments,
										c.arc
									);
									break;
								case 'TorusKnotGeometry':
								case 'TorusKnotBufferGeometry':
									s = new Gs[c.type](
										c.radius,
										c.tube,
										c.tubularSegments,
										c.radialSegments,
										c.p,
										c.q
									);
									break;
								case 'TubeGeometry':
								case 'TubeBufferGeometry':
									s = new Gs[c.type](
										new kc[c.path.type]().fromJSON(c.path),
										c.tubularSegments,
										c.radius,
										c.radialSegments,
										c.closed
									);
									break;
								case 'LatheGeometry':
								case 'LatheBufferGeometry':
									s = new Gs[c.type](
										c.points,
										c.segments,
										c.phiStart,
										c.phiLength
									);
									break;
								case 'PolyhedronGeometry':
								case 'PolyhedronBufferGeometry':
									s = new Gs[c.type](
										c.vertices,
										c.indices,
										c.radius,
										c.details
									);
									break;
								case 'ShapeGeometry':
								case 'ShapeBufferGeometry':
									n = [];
									for (var l = 0, u = c.shapes.length; l < u; l++) {
										var h = e[c.shapes[l]];
										n.push(h);
									}
									s = new Gs[c.type](n, c.curveSegments);
									break;
								case 'ExtrudeGeometry':
								case 'ExtrudeBufferGeometry':
									n = [];
									for (var d = 0, p = c.shapes.length; d < p; d++) {
										var f = e[c.shapes[d]];
										n.push(f);
									}
									var m = c.options.extrudePath;
									void 0 !== m &&
										(c.options.extrudePath = new kc[m.type]().fromJSON(m)),
										(s = new Gs[c.type](n, c.options));
									break;
								case 'BufferGeometry':
								case 'InstancedBufferGeometry':
									s = i.parse(c);
									break;
								case 'Geometry':
									console.error(
										'THREE.ObjectLoader: Loading "Geometry" is not supported anymore.'
									);
									break;
								default:
									console.warn(
										'THREE.ObjectLoader: Unsupported geometry type "' +
											c.type +
											'"'
									);
									continue;
							}
							(s.uuid = c.uuid),
								void 0 !== c.name && (s.name = c.name),
								!0 === s.isBufferGeometry &&
									void 0 !== c.userData &&
									(s.userData = c.userData),
								(r[c.uuid] = s);
						}
					return r;
				}),
				(n.parseMaterials = function (t, e) {
					var n = {},
						r = {};
					if (void 0 !== t) {
						var i = new ol();
						i.setTextures(e);
						for (var a = 0, o = t.length; a < o; a++) {
							var s = t[a];
							if ('MultiMaterial' === s.type) {
								for (var c = [], l = 0; l < s.materials.length; l++) {
									var u = s.materials[l];
									void 0 === n[u.uuid] && (n[u.uuid] = i.parse(u)),
										c.push(n[u.uuid]);
								}
								r[s.uuid] = c;
							} else
								void 0 === n[s.uuid] && (n[s.uuid] = i.parse(s)),
									(r[s.uuid] = n[s.uuid]);
						}
					}
					return r;
				}),
				(n.parseAnimations = function (t) {
					for (var e = [], n = 0; n < t.length; n++) {
						var r = t[n],
							i = lc.parse(r);
						void 0 !== r.uuid && (i.uuid = r.uuid), e.push(i);
					}
					return e;
				}),
				(n.parseImages = function (t, e) {
					var n,
						r = this,
						i = {};
					function a(t) {
						return (
							r.manager.itemStart(t),
							n.load(
								t,
								function () {
									r.manager.itemEnd(t);
								},
								void 0,
								function () {
									r.manager.itemError(t), r.manager.itemEnd(t);
								}
							)
						);
					}
					if (void 0 !== t && t.length > 0) {
						var o = new dc(e);
						(n = new xc(o)).setCrossOrigin(this.crossOrigin);
						for (var s = 0, c = t.length; s < c; s++) {
							var l = t[s],
								u = l.url;
							if (Array.isArray(u)) {
								i[l.uuid] = [];
								for (var h = 0, d = u.length; h < d; h++) {
									var p = u[h],
										f = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(p)
											? p
											: r.resourcePath + p;
									i[l.uuid].push(a(f));
								}
							} else {
								var m = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)
									? l.url
									: r.resourcePath + l.url;
								i[l.uuid] = a(m);
							}
						}
					}
					return i;
				}),
				(n.parseTextures = function (t, e) {
					function n(t, e) {
						return 'number' == typeof t
							? t
							: (console.warn(
									'THREE.ObjectLoader.parseTexture: Constant should be in numeric form.',
									t
							  ),
							  e[t]);
					}
					var r = {};
					if (void 0 !== t)
						for (var i = 0, a = t.length; i < a; i++) {
							var o = t[i];
							void 0 === o.image &&
								console.warn(
									'THREE.ObjectLoader: No "image" specified for',
									o.uuid
								),
								void 0 === e[o.image] &&
									console.warn('THREE.ObjectLoader: Undefined image', o.image);
							var s = void 0;
							((s = Array.isArray(e[o.image])
								? new qn(e[o.image])
								: new gt(e[o.image])).needsUpdate = !0),
								(s.uuid = o.uuid),
								void 0 !== o.name && (s.name = o.name),
								void 0 !== o.mapping && (s.mapping = n(o.mapping, fl)),
								void 0 !== o.offset && s.offset.fromArray(o.offset),
								void 0 !== o.repeat && s.repeat.fromArray(o.repeat),
								void 0 !== o.center && s.center.fromArray(o.center),
								void 0 !== o.rotation && (s.rotation = o.rotation),
								void 0 !== o.wrap &&
									((s.wrapS = n(o.wrap[0], ml)), (s.wrapT = n(o.wrap[1], ml))),
								void 0 !== o.format && (s.format = o.format),
								void 0 !== o.type && (s.type = o.type),
								void 0 !== o.encoding && (s.encoding = o.encoding),
								void 0 !== o.minFilter && (s.minFilter = n(o.minFilter, vl)),
								void 0 !== o.magFilter && (s.magFilter = n(o.magFilter, vl)),
								void 0 !== o.anisotropy && (s.anisotropy = o.anisotropy),
								void 0 !== o.flipY && (s.flipY = o.flipY),
								void 0 !== o.premultiplyAlpha &&
									(s.premultiplyAlpha = o.premultiplyAlpha),
								void 0 !== o.unpackAlignment &&
									(s.unpackAlignment = o.unpackAlignment),
								(r[o.uuid] = s);
						}
					return r;
				}),
				(n.parseObject = function (t, e, n) {
					var r, i, a;
					function o(t) {
						return (
							void 0 === e[t] &&
								console.warn('THREE.ObjectLoader: Undefined geometry', t),
							e[t]
						);
					}
					function s(t) {
						if (void 0 !== t) {
							if (Array.isArray(t)) {
								for (var e = [], r = 0, i = t.length; r < i; r++) {
									var a = t[r];
									void 0 === n[a] &&
										console.warn('THREE.ObjectLoader: Undefined material', a),
										e.push(n[a]);
								}
								return e;
							}
							return (
								void 0 === n[t] &&
									console.warn('THREE.ObjectLoader: Undefined material', t),
								n[t]
							);
						}
					}
					switch (t.type) {
						case 'Scene':
							(r = new sa()),
								void 0 !== t.background &&
									Number.isInteger(t.background) &&
									(r.background = new Ve(t.background)),
								void 0 !== t.fog &&
									('Fog' === t.fog.type
										? (r.fog = new oa(t.fog.color, t.fog.near, t.fog.far))
										: 'FogExp2' === t.fog.type &&
										  (r.fog = new aa(t.fog.color, t.fog.density)));
							break;
						case 'PerspectiveCamera':
							(r = new Vn(t.fov, t.aspect, t.near, t.far)),
								void 0 !== t.focus && (r.focus = t.focus),
								void 0 !== t.zoom && (r.zoom = t.zoom),
								void 0 !== t.filmGauge && (r.filmGauge = t.filmGauge),
								void 0 !== t.filmOffset && (r.filmOffset = t.filmOffset),
								void 0 !== t.view && (r.view = Object.assign({}, t.view));
							break;
						case 'OrthographicCamera':
							(r = new $c(t.left, t.right, t.top, t.bottom, t.near, t.far)),
								void 0 !== t.zoom && (r.zoom = t.zoom),
								void 0 !== t.view && (r.view = Object.assign({}, t.view));
							break;
						case 'AmbientLight':
							r = new nl(t.color, t.intensity);
							break;
						case 'DirectionalLight':
							r = new el(t.color, t.intensity);
							break;
						case 'PointLight':
							r = new Kc(t.color, t.intensity, t.distance, t.decay);
							break;
						case 'RectAreaLight':
							r = new rl(t.color, t.intensity, t.width, t.height);
							break;
						case 'SpotLight':
							r = new Jc(
								t.color,
								t.intensity,
								t.distance,
								t.angle,
								t.penumbra,
								t.decay
							);
							break;
						case 'HemisphereLight':
							r = new Xc(t.color, t.groundColor, t.intensity);
							break;
						case 'LightProbe':
							r = new al().fromJSON(t);
							break;
						case 'SkinnedMesh':
							console.warn(
								'THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.'
							);
						case 'Mesh':
							r = new Nn((i = o(t.geometry)), (a = s(t.material)));
							break;
						case 'InstancedMesh':
							(i = o(t.geometry)), (a = s(t.material));
							var c = t.count,
								l = t.instanceMatrix;
							(r = new Wa(i, a, c)).instanceMatrix = new Je(
								new Float32Array(l.array),
								16
							);
							break;
						case 'LOD':
							r = new Na();
							break;
						case 'Line':
							r = new Qa(o(t.geometry), s(t.material), t.mode);
							break;
						case 'LineLoop':
							r = new eo(o(t.geometry), s(t.material));
							break;
						case 'LineSegments':
							r = new to(o(t.geometry), s(t.material));
							break;
						case 'PointCloud':
						case 'Points':
							r = new so(o(t.geometry), s(t.material));
							break;
						case 'Sprite':
							r = new Ta(s(t.material));
							break;
						case 'Group':
							r = new $i();
							break;
						default:
							r = new be();
					}
					if (
						((r.uuid = t.uuid),
						void 0 !== t.name && (r.name = t.name),
						void 0 !== t.matrix
							? (r.matrix.fromArray(t.matrix),
							  void 0 !== t.matrixAutoUpdate &&
									(r.matrixAutoUpdate = t.matrixAutoUpdate),
							  r.matrixAutoUpdate &&
									r.matrix.decompose(r.position, r.quaternion, r.scale))
							: (void 0 !== t.position && r.position.fromArray(t.position),
							  void 0 !== t.rotation && r.rotation.fromArray(t.rotation),
							  void 0 !== t.quaternion && r.quaternion.fromArray(t.quaternion),
							  void 0 !== t.scale && r.scale.fromArray(t.scale)),
						void 0 !== t.castShadow && (r.castShadow = t.castShadow),
						void 0 !== t.receiveShadow && (r.receiveShadow = t.receiveShadow),
						t.shadow &&
							(void 0 !== t.shadow.bias && (r.shadow.bias = t.shadow.bias),
							void 0 !== t.shadow.normalBias &&
								(r.shadow.normalBias = t.shadow.normalBias),
							void 0 !== t.shadow.radius && (r.shadow.radius = t.shadow.radius),
							void 0 !== t.shadow.mapSize &&
								r.shadow.mapSize.fromArray(t.shadow.mapSize),
							void 0 !== t.shadow.camera &&
								(r.shadow.camera = this.parseObject(t.shadow.camera))),
						void 0 !== t.visible && (r.visible = t.visible),
						void 0 !== t.frustumCulled && (r.frustumCulled = t.frustumCulled),
						void 0 !== t.renderOrder && (r.renderOrder = t.renderOrder),
						void 0 !== t.userData && (r.userData = t.userData),
						void 0 !== t.layers && (r.layers.mask = t.layers),
						void 0 !== t.children)
					)
						for (var u = t.children, h = 0; h < u.length; h++)
							r.add(this.parseObject(u[h], e, n));
					if ('LOD' === t.type) {
						void 0 !== t.autoUpdate && (r.autoUpdate = t.autoUpdate);
						for (var d = t.levels, p = 0; p < d.length; p++) {
							var f = d[p],
								m = r.getObjectByProperty('uuid', f.object);
							void 0 !== m && r.addLevel(m, f.distance);
						}
					}
					return r;
				}),
				(n.setTexturePath = function (t) {
					return (
						console.warn(
							'THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().'
						),
						this.setResourcePath(t)
					);
				}),
				e
			);
		})(fc),
		fl = {
			UVMapping: n,
			CubeReflectionMapping: r,
			CubeRefractionMapping: i,
			EquirectangularReflectionMapping: a,
			EquirectangularRefractionMapping: o,
			CubeUVReflectionMapping: s,
			CubeUVRefractionMapping: c,
		},
		ml = {
			RepeatWrapping: l,
			ClampToEdgeWrapping: u,
			MirroredRepeatWrapping: h,
		},
		vl = {
			NearestFilter: d,
			NearestMipmapNearestFilter: p,
			NearestMipmapLinearFilter: f,
			LinearFilter: m,
			LinearMipmapNearestFilter: v,
			LinearMipmapLinearFilter: g,
		};
	function gl(t) {
		'undefined' == typeof createImageBitmap &&
			console.warn(
				'THREE.ImageBitmapLoader: createImageBitmap() not supported.'
			),
			'undefined' == typeof fetch &&
				console.warn('THREE.ImageBitmapLoader: fetch() not supported.'),
			fc.call(this, t),
			(this.options = { premultiplyAlpha: 'none' });
	}
	function yl() {
		(this.type = 'ShapePath'),
			(this.color = new Ve()),
			(this.subPaths = []),
			(this.currentPath = null);
	}
	function xl(t) {
		(this.type = 'Font'), (this.data = t);
	}
	function _l(t, e, n, r, i) {
		var a = i.glyphs[t] || i.glyphs['?'];
		if (a) {
			var o,
				s,
				c,
				l,
				u,
				h,
				d,
				p,
				f = new yl();
			if (a.o)
				for (
					var m = a._cachedOutline || (a._cachedOutline = a.o.split(' ')),
						v = 0,
						g = m.length;
					v < g;

				) {
					switch (m[v++]) {
						case 'm':
							(o = m[v++] * e + n), (s = m[v++] * e + r), f.moveTo(o, s);
							break;
						case 'l':
							(o = m[v++] * e + n), (s = m[v++] * e + r), f.lineTo(o, s);
							break;
						case 'q':
							(c = m[v++] * e + n),
								(l = m[v++] * e + r),
								(u = m[v++] * e + n),
								(h = m[v++] * e + r),
								f.quadraticCurveTo(u, h, c, l);
							break;
						case 'b':
							(c = m[v++] * e + n),
								(l = m[v++] * e + r),
								(u = m[v++] * e + n),
								(h = m[v++] * e + r),
								(d = m[v++] * e + n),
								(p = m[v++] * e + r),
								f.bezierCurveTo(u, h, d, p, c, l);
					}
				}
			return { offsetX: a.ha * e, path: f };
		}
		console.error(
			'THREE.Font: character "' +
				t +
				'" does not exists in font family ' +
				i.familyName +
				'.'
		);
	}
	function bl(t) {
		fc.call(this, t);
	}
	(gl.prototype = Object.assign(Object.create(fc.prototype), {
		constructor: gl,
		isImageBitmapLoader: !0,
		setOptions: function (t) {
			return (this.options = t), this;
		},
		load: function (t, e, n, r) {
			void 0 === t && (t = ''),
				void 0 !== this.path && (t = this.path + t),
				(t = this.manager.resolveURL(t));
			var i = this,
				a = hc.get(t);
			if (void 0 !== a)
				return (
					i.manager.itemStart(t),
					setTimeout(function () {
						e && e(a), i.manager.itemEnd(t);
					}, 0),
					a
				);
			var o = {};
			(o.credentials =
				'anonymous' === this.crossOrigin ? 'same-origin' : 'include'),
				fetch(t, o)
					.then(function (t) {
						return t.blob();
					})
					.then(function (t) {
						return createImageBitmap(t, i.options);
					})
					.then(function (n) {
						hc.add(t, n), e && e(n), i.manager.itemEnd(t);
					})
					.catch(function (e) {
						r && r(e), i.manager.itemError(t), i.manager.itemEnd(t);
					}),
				i.manager.itemStart(t);
		},
	})),
		Object.assign(yl.prototype, {
			moveTo: function (t, e) {
				return (
					(this.currentPath = new Wc()),
					this.subPaths.push(this.currentPath),
					this.currentPath.moveTo(t, e),
					this
				);
			},
			lineTo: function (t, e) {
				return this.currentPath.lineTo(t, e), this;
			},
			quadraticCurveTo: function (t, e, n, r) {
				return this.currentPath.quadraticCurveTo(t, e, n, r), this;
			},
			bezierCurveTo: function (t, e, n, r, i, a) {
				return this.currentPath.bezierCurveTo(t, e, n, r, i, a), this;
			},
			splineThru: function (t) {
				return this.currentPath.splineThru(t), this;
			},
			toShapes: function (t, e) {
				function n(t) {
					for (var e = [], n = 0, r = t.length; n < r; n++) {
						var i = t[n],
							a = new jc();
						(a.curves = i.curves), e.push(a);
					}
					return e;
				}
				function r(t, e) {
					for (var n = e.length, r = !1, i = n - 1, a = 0; a < n; i = a++) {
						var o = e[i],
							s = e[a],
							c = s.x - o.x,
							l = s.y - o.y;
						if (Math.abs(l) > Number.EPSILON) {
							if (
								(l < 0 && ((o = e[a]), (c = -c), (s = e[i]), (l = -l)),
								t.y < o.y || t.y > s.y)
							)
								continue;
							if (t.y === o.y) {
								if (t.x === o.x) return !0;
							} else {
								var u = l * (t.x - o.x) - c * (t.y - o.y);
								if (0 === u) return !0;
								if (u < 0) continue;
								r = !r;
							}
						} else {
							if (t.y !== o.y) continue;
							if ((s.x <= t.x && t.x <= o.x) || (o.x <= t.x && t.x <= s.x))
								return !0;
						}
					}
					return r;
				}
				var i,
					a,
					o,
					s = as.isClockWise,
					c = this.subPaths;
				if (0 === c.length) return [];
				if (!0 === e) return n(c);
				var l = [];
				if (1 === c.length)
					return (a = c[0]), ((o = new jc()).curves = a.curves), l.push(o), l;
				var u = !s(c[0].getPoints());
				u = t ? !u : u;
				var h,
					d,
					p = [],
					f = [],
					m = [],
					v = 0;
				(f[v] = void 0), (m[v] = []);
				for (var g = 0, y = c.length; g < y; g++)
					(i = s((h = (a = c[g]).getPoints()))),
						(i = t ? !i : i)
							? (!u && f[v] && v++,
							  (f[v] = { s: new jc(), p: h }),
							  (f[v].s.curves = a.curves),
							  u && v++,
							  (m[v] = []))
							: m[v].push({ h: a, p: h[0] });
				if (!f[0]) return n(c);
				if (f.length > 1) {
					for (var x = !1, _ = [], b = 0, w = f.length; b < w; b++) p[b] = [];
					for (var M = 0, S = f.length; M < S; M++)
						for (var T = m[M], E = 0; E < T.length; E++) {
							for (var A = T[E], L = !0, R = 0; R < f.length; R++)
								r(A.p, f[R].p) &&
									(M !== R && _.push({ froms: M, tos: R, hole: E }),
									L ? ((L = !1), p[R].push(A)) : (x = !0));
							L && p[M].push(A);
						}
					_.length > 0 && (x || (m = p));
				}
				for (var C = 0, P = f.length; C < P; C++) {
					(o = f[C].s), l.push(o);
					for (var I = 0, D = (d = m[C]).length; I < D; I++)
						o.holes.push(d[I].h);
				}
				return l;
			},
		}),
		Object.assign(xl.prototype, {
			isFont: !0,
			generateShapes: function (t, e) {
				void 0 === e && (e = 100);
				for (
					var n = [],
						r = (function (t, e, n) {
							for (
								var r = Array.from ? Array.from(t) : String(t).split(''),
									i = e / n.resolution,
									a =
										(n.boundingBox.yMax -
											n.boundingBox.yMin +
											n.underlineThickness) *
										i,
									o = [],
									s = 0,
									c = 0,
									l = 0;
								l < r.length;
								l++
							) {
								var u = r[l];
								if ('\n' === u) (s = 0), (c -= a);
								else {
									var h = _l(u, i, s, c, n);
									(s += h.offsetX), o.push(h.path);
								}
							}
							return o;
						})(t, e, this.data),
						i = 0,
						a = r.length;
					i < a;
					i++
				)
					Array.prototype.push.apply(n, r[i].toShapes());
				return n;
			},
		}),
		(bl.prototype = Object.assign(Object.create(fc.prototype), {
			constructor: bl,
			load: function (t, e, n, r) {
				var i = this,
					a = new vc(this.manager);
				a.setPath(this.path),
					a.setRequestHeader(this.requestHeader),
					a.setWithCredentials(i.withCredentials),
					a.load(
						t,
						function (t) {
							var n;
							try {
								n = JSON.parse(t);
							} catch (e) {
								console.warn(
									'THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.'
								),
									(n = JSON.parse(t.substring(65, t.length - 2)));
							}
							var r = i.parse(n);
							e && e(r);
						},
						n,
						r
					);
			},
			parse: function (t) {
				return new xl(t);
			},
		}));
	var wl = {
		getContext: function () {
			return (
				void 0 === hl &&
					(hl = new (window.AudioContext || window.webkitAudioContext)()),
				hl
			);
		},
		setContext: function (t) {
			hl = t;
		},
	};
	function Ml(t) {
		fc.call(this, t);
	}
	function Sl(t, e, n) {
		al.call(this, void 0, n);
		var r = new Ve().set(t),
			i = new Ve().set(e),
			a = new wt(r.r, r.g, r.b),
			o = new wt(i.r, i.g, i.b),
			s = Math.sqrt(Math.PI),
			c = s * Math.sqrt(0.75);
		this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),
			this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c);
	}
	function Tl(t, e) {
		al.call(this, void 0, e);
		var n = new Ve().set(t);
		this.sh.coefficients[0]
			.set(n.r, n.g, n.b)
			.multiplyScalar(2 * Math.sqrt(Math.PI));
	}
	(Ml.prototype = Object.assign(Object.create(fc.prototype), {
		constructor: Ml,
		load: function (t, e, n, r) {
			var i = this,
				a = new vc(i.manager);
			a.setResponseType('arraybuffer'),
				a.setPath(i.path),
				a.setRequestHeader(i.requestHeader),
				a.setWithCredentials(i.withCredentials),
				a.load(
					t,
					function (n) {
						try {
							var a = n.slice(0);
							wl.getContext().decodeAudioData(a, function (t) {
								e(t);
							});
						} catch (e) {
							r ? r(e) : console.error(e), i.manager.itemError(t);
						}
					},
					n,
					r
				);
		},
	})),
		(Sl.prototype = Object.assign(Object.create(al.prototype), {
			constructor: Sl,
			isHemisphereLightProbe: !0,
			copy: function (t) {
				return al.prototype.copy.call(this, t), this;
			},
			toJSON: function (t) {
				return al.prototype.toJSON.call(this, t);
			},
		})),
		(Tl.prototype = Object.assign(Object.create(al.prototype), {
			constructor: Tl,
			isAmbientLightProbe: !0,
			copy: function (t) {
				return al.prototype.copy.call(this, t), this;
			},
			toJSON: function (t) {
				return al.prototype.toJSON.call(this, t);
			},
		}));
	var El = new Jt(),
		Al = new Jt();
	function Ll() {
		(this.type = 'StereoCamera'),
			(this.aspect = 1),
			(this.eyeSep = 0.064),
			(this.cameraL = new Vn()),
			this.cameraL.layers.enable(1),
			(this.cameraL.matrixAutoUpdate = !1),
			(this.cameraR = new Vn()),
			this.cameraR.layers.enable(2),
			(this.cameraR.matrixAutoUpdate = !1),
			(this._cache = {
				focus: null,
				fov: null,
				aspect: null,
				near: null,
				far: null,
				zoom: null,
				eyeSep: null,
			});
	}
	Object.assign(Ll.prototype, {
		update: function (t) {
			var e = this._cache;
			if (
				e.focus !== t.focus ||
				e.fov !== t.fov ||
				e.aspect !== t.aspect * this.aspect ||
				e.near !== t.near ||
				e.far !== t.far ||
				e.zoom !== t.zoom ||
				e.eyeSep !== this.eyeSep
			) {
				(e.focus = t.focus),
					(e.fov = t.fov),
					(e.aspect = t.aspect * this.aspect),
					(e.near = t.near),
					(e.far = t.far),
					(e.zoom = t.zoom),
					(e.eyeSep = this.eyeSep);
				var n,
					r,
					i = t.projectionMatrix.clone(),
					a = e.eyeSep / 2,
					o = (a * e.near) / e.focus,
					s = (e.near * Math.tan(st.DEG2RAD * e.fov * 0.5)) / e.zoom;
				(Al.elements[12] = -a),
					(El.elements[12] = a),
					(n = -s * e.aspect + o),
					(r = s * e.aspect + o),
					(i.elements[0] = (2 * e.near) / (r - n)),
					(i.elements[8] = (r + n) / (r - n)),
					this.cameraL.projectionMatrix.copy(i),
					(n = -s * e.aspect - o),
					(r = s * e.aspect - o),
					(i.elements[0] = (2 * e.near) / (r - n)),
					(i.elements[8] = (r + n) / (r - n)),
					this.cameraR.projectionMatrix.copy(i);
			}
			this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Al),
				this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(El);
		},
	});
	var Rl = (function () {
			function t(t) {
				(this.autoStart = void 0 === t || t),
					(this.startTime = 0),
					(this.oldTime = 0),
					(this.elapsedTime = 0),
					(this.running = !1);
			}
			var e = t.prototype;
			return (
				(e.start = function () {
					(this.startTime = (
						'undefined' == typeof performance ? Date : performance
					).now()),
						(this.oldTime = this.startTime),
						(this.elapsedTime = 0),
						(this.running = !0);
				}),
				(e.stop = function () {
					this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
				}),
				(e.getElapsedTime = function () {
					return this.getDelta(), this.elapsedTime;
				}),
				(e.getDelta = function () {
					var t = 0;
					if (this.autoStart && !this.running) return this.start(), 0;
					if (this.running) {
						var e = (
							'undefined' == typeof performance ? Date : performance
						).now();
						(t = (e - this.oldTime) / 1e3),
							(this.oldTime = e),
							(this.elapsedTime += t);
					}
					return t;
				}),
				t
			);
		})(),
		Cl = new wt(),
		Pl = new bt(),
		Il = new wt(),
		Dl = new wt(),
		Nl = (function (t) {
			function e() {
				var e;
				return (
					((e = t.call(this) || this).type = 'AudioListener'),
					(e.context = wl.getContext()),
					(e.gain = e.context.createGain()),
					e.gain.connect(e.context.destination),
					(e.filter = null),
					(e.timeDelta = 0),
					(e._clock = new Rl()),
					e
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.getInput = function () {
					return this.gain;
				}),
				(n.removeFilter = function () {
					return (
						null !== this.filter &&
							(this.gain.disconnect(this.filter),
							this.filter.disconnect(this.context.destination),
							this.gain.connect(this.context.destination),
							(this.filter = null)),
						this
					);
				}),
				(n.getFilter = function () {
					return this.filter;
				}),
				(n.setFilter = function (t) {
					return (
						null !== this.filter
							? (this.gain.disconnect(this.filter),
							  this.filter.disconnect(this.context.destination))
							: this.gain.disconnect(this.context.destination),
						(this.filter = t),
						this.gain.connect(this.filter),
						this.filter.connect(this.context.destination),
						this
					);
				}),
				(n.getMasterVolume = function () {
					return this.gain.gain.value;
				}),
				(n.setMasterVolume = function (t) {
					return (
						this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
						this
					);
				}),
				(n.updateMatrixWorld = function (e) {
					t.prototype.updateMatrixWorld.call(this, e);
					var n = this.context.listener,
						r = this.up;
					if (
						((this.timeDelta = this._clock.getDelta()),
						this.matrixWorld.decompose(Cl, Pl, Il),
						Dl.set(0, 0, -1).applyQuaternion(Pl),
						n.positionX)
					) {
						var i = this.context.currentTime + this.timeDelta;
						n.positionX.linearRampToValueAtTime(Cl.x, i),
							n.positionY.linearRampToValueAtTime(Cl.y, i),
							n.positionZ.linearRampToValueAtTime(Cl.z, i),
							n.forwardX.linearRampToValueAtTime(Dl.x, i),
							n.forwardY.linearRampToValueAtTime(Dl.y, i),
							n.forwardZ.linearRampToValueAtTime(Dl.z, i),
							n.upX.linearRampToValueAtTime(r.x, i),
							n.upY.linearRampToValueAtTime(r.y, i),
							n.upZ.linearRampToValueAtTime(r.z, i);
					} else
						n.setPosition(Cl.x, Cl.y, Cl.z),
							n.setOrientation(Dl.x, Dl.y, Dl.z, r.x, r.y, r.z);
				}),
				e
			);
		})(be),
		Ol = (function (t) {
			function e(e) {
				var n;
				return (
					((n = t.call(this) || this).type = 'Audio'),
					(n.listener = e),
					(n.context = e.context),
					(n.gain = n.context.createGain()),
					n.gain.connect(e.getInput()),
					(n.autoplay = !1),
					(n.buffer = null),
					(n.detune = 0),
					(n.loop = !1),
					(n.loopStart = 0),
					(n.loopEnd = 0),
					(n.offset = 0),
					(n.duration = void 0),
					(n.playbackRate = 1),
					(n.isPlaying = !1),
					(n.hasPlaybackControl = !0),
					(n.source = null),
					(n.sourceType = 'empty'),
					(n._startedAt = 0),
					(n._progress = 0),
					(n._connected = !1),
					(n.filters = []),
					n
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.getOutput = function () {
					return this.gain;
				}),
				(n.setNodeSource = function (t) {
					return (
						(this.hasPlaybackControl = !1),
						(this.sourceType = 'audioNode'),
						(this.source = t),
						this.connect(),
						this
					);
				}),
				(n.setMediaElementSource = function (t) {
					return (
						(this.hasPlaybackControl = !1),
						(this.sourceType = 'mediaNode'),
						(this.source = this.context.createMediaElementSource(t)),
						this.connect(),
						this
					);
				}),
				(n.setMediaStreamSource = function (t) {
					return (
						(this.hasPlaybackControl = !1),
						(this.sourceType = 'mediaStreamNode'),
						(this.source = this.context.createMediaStreamSource(t)),
						this.connect(),
						this
					);
				}),
				(n.setBuffer = function (t) {
					return (
						(this.buffer = t),
						(this.sourceType = 'buffer'),
						this.autoplay && this.play(),
						this
					);
				}),
				(n.play = function (t) {
					if ((void 0 === t && (t = 0), !0 !== this.isPlaying)) {
						if (!1 !== this.hasPlaybackControl) {
							this._startedAt = this.context.currentTime + t;
							var e = this.context.createBufferSource();
							return (
								(e.buffer = this.buffer),
								(e.loop = this.loop),
								(e.loopStart = this.loopStart),
								(e.loopEnd = this.loopEnd),
								(e.onended = this.onEnded.bind(this)),
								e.start(
									this._startedAt,
									this._progress + this.offset,
									this.duration
								),
								(this.isPlaying = !0),
								(this.source = e),
								this.setDetune(this.detune),
								this.setPlaybackRate(this.playbackRate),
								this.connect()
							);
						}
						console.warn('THREE.Audio: this Audio has no playback control.');
					} else console.warn('THREE.Audio: Audio is already playing.');
				}),
				(n.pause = function () {
					if (!1 !== this.hasPlaybackControl)
						return (
							!0 === this.isPlaying &&
								((this._progress +=
									Math.max(this.context.currentTime - this._startedAt, 0) *
									this.playbackRate),
								!0 === this.loop &&
									(this._progress =
										this._progress % (this.duration || this.buffer.duration)),
								this.source.stop(),
								(this.source.onended = null),
								(this.isPlaying = !1)),
							this
						);
					console.warn('THREE.Audio: this Audio has no playback control.');
				}),
				(n.stop = function () {
					if (!1 !== this.hasPlaybackControl)
						return (
							(this._progress = 0),
							this.source.stop(),
							(this.source.onended = null),
							(this.isPlaying = !1),
							this
						);
					console.warn('THREE.Audio: this Audio has no playback control.');
				}),
				(n.connect = function () {
					if (this.filters.length > 0) {
						this.source.connect(this.filters[0]);
						for (var t = 1, e = this.filters.length; t < e; t++)
							this.filters[t - 1].connect(this.filters[t]);
						this.filters[this.filters.length - 1].connect(this.getOutput());
					} else this.source.connect(this.getOutput());
					return (this._connected = !0), this;
				}),
				(n.disconnect = function () {
					if (this.filters.length > 0) {
						this.source.disconnect(this.filters[0]);
						for (var t = 1, e = this.filters.length; t < e; t++)
							this.filters[t - 1].disconnect(this.filters[t]);
						this.filters[this.filters.length - 1].disconnect(this.getOutput());
					} else this.source.disconnect(this.getOutput());
					return (this._connected = !1), this;
				}),
				(n.getFilters = function () {
					return this.filters;
				}),
				(n.setFilters = function (t) {
					return (
						t || (t = []),
						!0 === this._connected
							? (this.disconnect(), (this.filters = t), this.connect())
							: (this.filters = t),
						this
					);
				}),
				(n.setDetune = function (t) {
					if (((this.detune = t), void 0 !== this.source.detune))
						return (
							!0 === this.isPlaying &&
								this.source.detune.setTargetAtTime(
									this.detune,
									this.context.currentTime,
									0.01
								),
							this
						);
				}),
				(n.getDetune = function () {
					return this.detune;
				}),
				(n.getFilter = function () {
					return this.getFilters()[0];
				}),
				(n.setFilter = function (t) {
					return this.setFilters(t ? [t] : []);
				}),
				(n.setPlaybackRate = function (t) {
					if (!1 !== this.hasPlaybackControl)
						return (
							(this.playbackRate = t),
							!0 === this.isPlaying &&
								this.source.playbackRate.setTargetAtTime(
									this.playbackRate,
									this.context.currentTime,
									0.01
								),
							this
						);
					console.warn('THREE.Audio: this Audio has no playback control.');
				}),
				(n.getPlaybackRate = function () {
					return this.playbackRate;
				}),
				(n.onEnded = function () {
					this.isPlaying = !1;
				}),
				(n.getLoop = function () {
					return !1 === this.hasPlaybackControl
						? (console.warn('THREE.Audio: this Audio has no playback control.'),
						  !1)
						: this.loop;
				}),
				(n.setLoop = function (t) {
					if (!1 !== this.hasPlaybackControl)
						return (
							(this.loop = t),
							!0 === this.isPlaying && (this.source.loop = this.loop),
							this
						);
					console.warn('THREE.Audio: this Audio has no playback control.');
				}),
				(n.setLoopStart = function (t) {
					return (this.loopStart = t), this;
				}),
				(n.setLoopEnd = function (t) {
					return (this.loopEnd = t), this;
				}),
				(n.getVolume = function () {
					return this.gain.gain.value;
				}),
				(n.setVolume = function (t) {
					return (
						this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01),
						this
					);
				}),
				e
			);
		})(be),
		Bl = new wt(),
		zl = new bt(),
		Gl = new wt(),
		Fl = new wt(),
		Ul = (function (t) {
			function e(e) {
				var n;
				return (
					((n = t.call(this, e) || this).panner = n.context.createPanner()),
					(n.panner.panningModel = 'HRTF'),
					n.panner.connect(n.gain),
					n
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.getOutput = function () {
					return this.panner;
				}),
				(n.getRefDistance = function () {
					return this.panner.refDistance;
				}),
				(n.setRefDistance = function (t) {
					return (this.panner.refDistance = t), this;
				}),
				(n.getRolloffFactor = function () {
					return this.panner.rolloffFactor;
				}),
				(n.setRolloffFactor = function (t) {
					return (this.panner.rolloffFactor = t), this;
				}),
				(n.getDistanceModel = function () {
					return this.panner.distanceModel;
				}),
				(n.setDistanceModel = function (t) {
					return (this.panner.distanceModel = t), this;
				}),
				(n.getMaxDistance = function () {
					return this.panner.maxDistance;
				}),
				(n.setMaxDistance = function (t) {
					return (this.panner.maxDistance = t), this;
				}),
				(n.setDirectionalCone = function (t, e, n) {
					return (
						(this.panner.coneInnerAngle = t),
						(this.panner.coneOuterAngle = e),
						(this.panner.coneOuterGain = n),
						this
					);
				}),
				(n.updateMatrixWorld = function (e) {
					if (
						(t.prototype.updateMatrixWorld.call(this, e),
						!0 !== this.hasPlaybackControl || !1 !== this.isPlaying)
					) {
						this.matrixWorld.decompose(Bl, zl, Gl),
							Fl.set(0, 0, 1).applyQuaternion(zl);
						var n = this.panner;
						if (n.positionX) {
							var r = this.context.currentTime + this.listener.timeDelta;
							n.positionX.linearRampToValueAtTime(Bl.x, r),
								n.positionY.linearRampToValueAtTime(Bl.y, r),
								n.positionZ.linearRampToValueAtTime(Bl.z, r),
								n.orientationX.linearRampToValueAtTime(Fl.x, r),
								n.orientationY.linearRampToValueAtTime(Fl.y, r),
								n.orientationZ.linearRampToValueAtTime(Fl.z, r);
						} else
							n.setPosition(Bl.x, Bl.y, Bl.z),
								n.setOrientation(Fl.x, Fl.y, Fl.z);
					}
				}),
				e
			);
		})(Ol),
		Hl = (function () {
			function t(t, e) {
				(this.analyser = t.context.createAnalyser()),
					(this.analyser.fftSize = void 0 !== e ? e : 2048),
					(this.data = new Uint8Array(this.analyser.frequencyBinCount)),
					t.getOutput().connect(this.analyser);
			}
			var e = t.prototype;
			return (
				(e.getFrequencyData = function () {
					return this.analyser.getByteFrequencyData(this.data), this.data;
				}),
				(e.getAverageFrequency = function () {
					for (var t = 0, e = this.getFrequencyData(), n = 0; n < e.length; n++)
						t += e[n];
					return t / e.length;
				}),
				t
			);
		})();
	function kl(t, e, n) {
		var r, i, a;
		switch (((this.binding = t), (this.valueSize = n), e)) {
			case 'quaternion':
				(r = this._slerp),
					(i = this._slerpAdditive),
					(a = this._setAdditiveIdentityQuaternion),
					(this.buffer = new Float64Array(6 * n)),
					(this._workIndex = 5);
				break;
			case 'string':
			case 'bool':
				(r = this._select),
					(i = this._select),
					(a = this._setAdditiveIdentityOther),
					(this.buffer = new Array(5 * n));
				break;
			default:
				(r = this._lerp),
					(i = this._lerpAdditive),
					(a = this._setAdditiveIdentityNumeric),
					(this.buffer = new Float64Array(5 * n));
		}
		(this._mixBufferRegion = r),
			(this._mixBufferRegionAdditive = i),
			(this._setIdentity = a),
			(this._origIndex = 3),
			(this._addIndex = 4),
			(this.cumulativeWeight = 0),
			(this.cumulativeWeightAdditive = 0),
			(this.useCount = 0),
			(this.referenceCount = 0);
	}
	Object.assign(kl.prototype, {
		accumulate: function (t, e) {
			var n = this.buffer,
				r = this.valueSize,
				i = t * r + r,
				a = this.cumulativeWeight;
			if (0 === a) {
				for (var o = 0; o !== r; ++o) n[i + o] = n[o];
				a = e;
			} else {
				var s = e / (a += e);
				this._mixBufferRegion(n, i, 0, s, r);
			}
			this.cumulativeWeight = a;
		},
		accumulateAdditive: function (t) {
			var e = this.buffer,
				n = this.valueSize,
				r = n * this._addIndex;
			0 === this.cumulativeWeightAdditive && this._setIdentity(),
				this._mixBufferRegionAdditive(e, r, 0, t, n),
				(this.cumulativeWeightAdditive += t);
		},
		apply: function (t) {
			var e = this.valueSize,
				n = this.buffer,
				r = t * e + e,
				i = this.cumulativeWeight,
				a = this.cumulativeWeightAdditive,
				o = this.binding;
			if (
				((this.cumulativeWeight = 0),
				(this.cumulativeWeightAdditive = 0),
				i < 1)
			) {
				var s = e * this._origIndex;
				this._mixBufferRegion(n, r, s, 1 - i, e);
			}
			a > 0 && this._mixBufferRegionAdditive(n, r, this._addIndex * e, 1, e);
			for (var c = e, l = e + e; c !== l; ++c)
				if (n[c] !== n[c + e]) {
					o.setValue(n, r);
					break;
				}
		},
		saveOriginalState: function () {
			var t = this.binding,
				e = this.buffer,
				n = this.valueSize,
				r = n * this._origIndex;
			t.getValue(e, r);
			for (var i = n, a = r; i !== a; ++i) e[i] = e[r + (i % n)];
			this._setIdentity(),
				(this.cumulativeWeight = 0),
				(this.cumulativeWeightAdditive = 0);
		},
		restoreOriginalState: function () {
			var t = 3 * this.valueSize;
			this.binding.setValue(this.buffer, t);
		},
		_setAdditiveIdentityNumeric: function () {
			for (
				var t = this._addIndex * this.valueSize, e = t + this.valueSize, n = t;
				n < e;
				n++
			)
				this.buffer[n] = 0;
		},
		_setAdditiveIdentityQuaternion: function () {
			this._setAdditiveIdentityNumeric(),
				(this.buffer[this._addIndex * this.valueSize + 3] = 1);
		},
		_setAdditiveIdentityOther: function () {
			for (
				var t = this._origIndex * this.valueSize,
					e = this._addIndex * this.valueSize,
					n = 0;
				n < this.valueSize;
				n++
			)
				this.buffer[e + n] = this.buffer[t + n];
		},
		_select: function (t, e, n, r, i) {
			if (r >= 0.5) for (var a = 0; a !== i; ++a) t[e + a] = t[n + a];
		},
		_slerp: function (t, e, n, r) {
			bt.slerpFlat(t, e, t, e, t, n, r);
		},
		_slerpAdditive: function (t, e, n, r, i) {
			var a = this._workIndex * i;
			bt.multiplyQuaternionsFlat(t, a, t, e, t, n),
				bt.slerpFlat(t, e, t, e, t, a, r);
		},
		_lerp: function (t, e, n, r, i) {
			for (var a = 1 - r, o = 0; o !== i; ++o) {
				var s = e + o;
				t[s] = t[s] * a + t[n + o] * r;
			}
		},
		_lerpAdditive: function (t, e, n, r, i) {
			for (var a = 0; a !== i; ++a) {
				var o = e + a;
				t[o] = t[o] + t[n + a] * r;
			}
		},
	});
	var Vl = '\\[\\]\\.:\\/',
		Wl = new RegExp('[\\[\\]\\.:\\/]', 'g'),
		jl = '[^\\[\\]\\.:\\/]',
		ql = '[^' + Vl.replace('\\.', '') + ']',
		Xl = /((?:WC+[\/:])*)/.source.replace('WC', jl),
		Yl = /(WCOD+)?/.source.replace('WCOD', ql),
		Zl = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace('WC', jl),
		Jl = /\.(WC+)(?:\[(.+)\])?/.source.replace('WC', jl),
		Ql = new RegExp('^' + Xl + Yl + Zl + Jl + '$'),
		Kl = ['material', 'materials', 'bones'];
	function $l(t, e, n) {
		var r = n || tu.parseTrackName(e);
		(this._targetGroup = t), (this._bindings = t.subscribe_(e, r));
	}
	function tu(t, e, n) {
		(this.path = e),
			(this.parsedPath = n || tu.parseTrackName(e)),
			(this.node = tu.findNode(t, this.parsedPath.nodeName) || t),
			(this.rootNode = t);
	}
	function eu() {
		(this.uuid = st.generateUUID()),
			(this._objects = Array.prototype.slice.call(arguments)),
			(this.nCachedObjects_ = 0);
		var t = {};
		this._indicesByUUID = t;
		for (var e = 0, n = arguments.length; e !== n; ++e)
			t[arguments[e].uuid] = e;
		(this._paths = []),
			(this._parsedPaths = []),
			(this._bindings = []),
			(this._bindingsIndicesByPath = {});
		var r = this;
		this.stats = {
			objects: {
				get total() {
					return r._objects.length;
				},
				get inUse() {
					return this.total - r.nCachedObjects_;
				},
			},
			get bindingsPerObject() {
				return r._bindings.length;
			},
		};
	}
	Object.assign($l.prototype, {
		getValue: function (t, e) {
			this.bind();
			var n = this._targetGroup.nCachedObjects_,
				r = this._bindings[n];
			void 0 !== r && r.getValue(t, e);
		},
		setValue: function (t, e) {
			for (
				var n = this._bindings,
					r = this._targetGroup.nCachedObjects_,
					i = n.length;
				r !== i;
				++r
			)
				n[r].setValue(t, e);
		},
		bind: function () {
			for (
				var t = this._bindings,
					e = this._targetGroup.nCachedObjects_,
					n = t.length;
				e !== n;
				++e
			)
				t[e].bind();
		},
		unbind: function () {
			for (
				var t = this._bindings,
					e = this._targetGroup.nCachedObjects_,
					n = t.length;
				e !== n;
				++e
			)
				t[e].unbind();
		},
	}),
		Object.assign(tu, {
			Composite: $l,
			create: function (t, e, n) {
				return t && t.isAnimationObjectGroup
					? new tu.Composite(t, e, n)
					: new tu(t, e, n);
			},
			sanitizeNodeName: function (t) {
				return t.replace(/\s/g, '_').replace(Wl, '');
			},
			parseTrackName: function (t) {
				var e = Ql.exec(t);
				if (!e)
					throw new Error('PropertyBinding: Cannot parse trackName: ' + t);
				var n = {
						nodeName: e[2],
						objectName: e[3],
						objectIndex: e[4],
						propertyName: e[5],
						propertyIndex: e[6],
					},
					r = n.nodeName && n.nodeName.lastIndexOf('.');
				if (void 0 !== r && -1 !== r) {
					var i = n.nodeName.substring(r + 1);
					-1 !== Kl.indexOf(i) &&
						((n.nodeName = n.nodeName.substring(0, r)), (n.objectName = i));
				}
				if (null === n.propertyName || 0 === n.propertyName.length)
					throw new Error(
						'PropertyBinding: can not parse propertyName from trackName: ' + t
					);
				return n;
			},
			findNode: function (t, e) {
				if (
					!e ||
					'' === e ||
					'.' === e ||
					-1 === e ||
					e === t.name ||
					e === t.uuid
				)
					return t;
				if (t.skeleton) {
					var n = t.skeleton.getBoneByName(e);
					if (void 0 !== n) return n;
				}
				if (t.children) {
					var r = (function t(n) {
						for (var r = 0; r < n.length; r++) {
							var i = n[r];
							if (i.name === e || i.uuid === e) return i;
							var a = t(i.children);
							if (a) return a;
						}
						return null;
					})(t.children);
					if (r) return r;
				}
				return null;
			},
		}),
		Object.assign(tu.prototype, {
			_getValue_unavailable: function () {},
			_setValue_unavailable: function () {},
			BindingType: {
				Direct: 0,
				EntireArray: 1,
				ArrayElement: 2,
				HasFromToArray: 3,
			},
			Versioning: { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 },
			GetterByBindingType: [
				function (t, e) {
					t[e] = this.node[this.propertyName];
				},
				function (t, e) {
					for (var n = this.resolvedProperty, r = 0, i = n.length; r !== i; ++r)
						t[e++] = n[r];
				},
				function (t, e) {
					t[e] = this.resolvedProperty[this.propertyIndex];
				},
				function (t, e) {
					this.resolvedProperty.toArray(t, e);
				},
			],
			SetterByBindingTypeAndVersioning: [
				[
					function (t, e) {
						this.targetObject[this.propertyName] = t[e];
					},
					function (t, e) {
						(this.targetObject[this.propertyName] = t[e]),
							(this.targetObject.needsUpdate = !0);
					},
					function (t, e) {
						(this.targetObject[this.propertyName] = t[e]),
							(this.targetObject.matrixWorldNeedsUpdate = !0);
					},
				],
				[
					function (t, e) {
						for (
							var n = this.resolvedProperty, r = 0, i = n.length;
							r !== i;
							++r
						)
							n[r] = t[e++];
					},
					function (t, e) {
						for (
							var n = this.resolvedProperty, r = 0, i = n.length;
							r !== i;
							++r
						)
							n[r] = t[e++];
						this.targetObject.needsUpdate = !0;
					},
					function (t, e) {
						for (
							var n = this.resolvedProperty, r = 0, i = n.length;
							r !== i;
							++r
						)
							n[r] = t[e++];
						this.targetObject.matrixWorldNeedsUpdate = !0;
					},
				],
				[
					function (t, e) {
						this.resolvedProperty[this.propertyIndex] = t[e];
					},
					function (t, e) {
						(this.resolvedProperty[this.propertyIndex] = t[e]),
							(this.targetObject.needsUpdate = !0);
					},
					function (t, e) {
						(this.resolvedProperty[this.propertyIndex] = t[e]),
							(this.targetObject.matrixWorldNeedsUpdate = !0);
					},
				],
				[
					function (t, e) {
						this.resolvedProperty.fromArray(t, e);
					},
					function (t, e) {
						this.resolvedProperty.fromArray(t, e),
							(this.targetObject.needsUpdate = !0);
					},
					function (t, e) {
						this.resolvedProperty.fromArray(t, e),
							(this.targetObject.matrixWorldNeedsUpdate = !0);
					},
				],
			],
			getValue: function (t, e) {
				this.bind(), this.getValue(t, e);
			},
			setValue: function (t, e) {
				this.bind(), this.setValue(t, e);
			},
			bind: function () {
				var t = this.node,
					e = this.parsedPath,
					n = e.objectName,
					r = e.propertyName,
					i = e.propertyIndex;
				if (
					(t ||
						((t = tu.findNode(this.rootNode, e.nodeName) || this.rootNode),
						(this.node = t)),
					(this.getValue = this._getValue_unavailable),
					(this.setValue = this._setValue_unavailable),
					t)
				) {
					if (n) {
						var a = e.objectIndex;
						switch (n) {
							case 'materials':
								if (!t.material)
									return void console.error(
										'THREE.PropertyBinding: Can not bind to material as node does not have a material.',
										this
									);
								if (!t.material.materials)
									return void console.error(
										'THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.',
										this
									);
								t = t.material.materials;
								break;
							case 'bones':
								if (!t.skeleton)
									return void console.error(
										'THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.',
										this
									);
								t = t.skeleton.bones;
								for (var o = 0; o < t.length; o++)
									if (t[o].name === a) {
										a = o;
										break;
									}
								break;
							default:
								if (void 0 === t[n])
									return void console.error(
										'THREE.PropertyBinding: Can not bind to objectName of node undefined.',
										this
									);
								t = t[n];
						}
						if (void 0 !== a) {
							if (void 0 === t[a])
								return void console.error(
									'THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.',
									this,
									t
								);
							t = t[a];
						}
					}
					var s = t[r];
					if (void 0 !== s) {
						var c = this.Versioning.None;
						(this.targetObject = t),
							void 0 !== t.needsUpdate
								? (c = this.Versioning.NeedsUpdate)
								: void 0 !== t.matrixWorldNeedsUpdate &&
								  (c = this.Versioning.MatrixWorldNeedsUpdate);
						var l = this.BindingType.Direct;
						if (void 0 !== i) {
							if ('morphTargetInfluences' === r) {
								if (!t.geometry)
									return void console.error(
										'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.',
										this
									);
								if (!t.geometry.isBufferGeometry)
									return void console.error(
										'THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.',
										this
									);
								if (!t.geometry.morphAttributes)
									return void console.error(
										'THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.',
										this
									);
								void 0 !== t.morphTargetDictionary[i] &&
									(i = t.morphTargetDictionary[i]);
							}
							(l = this.BindingType.ArrayElement),
								(this.resolvedProperty = s),
								(this.propertyIndex = i);
						} else
							void 0 !== s.fromArray && void 0 !== s.toArray
								? ((l = this.BindingType.HasFromToArray),
								  (this.resolvedProperty = s))
								: Array.isArray(s)
								? ((l = this.BindingType.EntireArray),
								  (this.resolvedProperty = s))
								: (this.propertyName = r);
						(this.getValue = this.GetterByBindingType[l]),
							(this.setValue = this.SetterByBindingTypeAndVersioning[l][c]);
					} else {
						var u = e.nodeName;
						console.error(
							'THREE.PropertyBinding: Trying to update property for track: ' +
								u +
								'.' +
								r +
								" but it wasn't found.",
							t
						);
					}
				} else
					console.error(
						'THREE.PropertyBinding: Trying to update node for track: ' +
							this.path +
							" but it wasn't found."
					);
			},
			unbind: function () {
				(this.node = null),
					(this.getValue = this._getValue_unbound),
					(this.setValue = this._setValue_unbound);
			},
		}),
		Object.assign(tu.prototype, {
			_getValue_unbound: tu.prototype.getValue,
			_setValue_unbound: tu.prototype.setValue,
		}),
		Object.assign(eu.prototype, {
			isAnimationObjectGroup: !0,
			add: function () {
				for (
					var t = this._objects,
						e = this._indicesByUUID,
						n = this._paths,
						r = this._parsedPaths,
						i = this._bindings,
						a = i.length,
						o = void 0,
						s = t.length,
						c = this.nCachedObjects_,
						l = 0,
						u = arguments.length;
					l !== u;
					++l
				) {
					var h = arguments[l],
						d = h.uuid,
						p = e[d];
					if (void 0 === p) {
						(p = s++), (e[d] = p), t.push(h);
						for (var f = 0, m = a; f !== m; ++f)
							i[f].push(new tu(h, n[f], r[f]));
					} else if (p < c) {
						o = t[p];
						var v = --c,
							g = t[v];
						(e[g.uuid] = p), (t[p] = g), (e[d] = v), (t[v] = h);
						for (var y = 0, x = a; y !== x; ++y) {
							var _ = i[y],
								b = _[v],
								w = _[p];
							(_[p] = b),
								void 0 === w && (w = new tu(h, n[y], r[y])),
								(_[v] = w);
						}
					} else
						t[p] !== o &&
							console.error(
								'THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.'
							);
				}
				this.nCachedObjects_ = c;
			},
			remove: function () {
				for (
					var t = this._objects,
						e = this._indicesByUUID,
						n = this._bindings,
						r = n.length,
						i = this.nCachedObjects_,
						a = 0,
						o = arguments.length;
					a !== o;
					++a
				) {
					var s = arguments[a],
						c = s.uuid,
						l = e[c];
					if (void 0 !== l && l >= i) {
						var u = i++,
							h = t[u];
						(e[h.uuid] = l), (t[l] = h), (e[c] = u), (t[u] = s);
						for (var d = 0, p = r; d !== p; ++d) {
							var f = n[d],
								m = f[u],
								v = f[l];
							(f[l] = m), (f[u] = v);
						}
					}
				}
				this.nCachedObjects_ = i;
			},
			uncache: function () {
				for (
					var t = this._objects,
						e = this._indicesByUUID,
						n = this._bindings,
						r = n.length,
						i = this.nCachedObjects_,
						a = t.length,
						o = 0,
						s = arguments.length;
					o !== s;
					++o
				) {
					var c = arguments[o],
						l = c.uuid,
						u = e[l];
					if (void 0 !== u)
						if ((delete e[l], u < i)) {
							var h = --i,
								d = t[h],
								p = --a,
								f = t[p];
							(e[d.uuid] = u), (t[u] = d), (e[f.uuid] = h), (t[h] = f), t.pop();
							for (var m = 0, v = r; m !== v; ++m) {
								var g = n[m],
									y = g[h],
									x = g[p];
								(g[u] = y), (g[h] = x), g.pop();
							}
						} else {
							var _ = --a,
								b = t[_];
							(e[b.uuid] = u), (t[u] = b), t.pop();
							for (var w = 0, M = r; w !== M; ++w) {
								var S = n[w];
								(S[u] = S[_]), S.pop();
							}
						}
				}
				this.nCachedObjects_ = i;
			},
			subscribe_: function (t, e) {
				var n = this._bindingsIndicesByPath,
					r = n[t],
					i = this._bindings;
				if (void 0 !== r) return i[r];
				var a = this._paths,
					o = this._parsedPaths,
					s = this._objects,
					c = s.length,
					l = this.nCachedObjects_,
					u = new Array(c);
				(r = i.length), (n[t] = r), a.push(t), o.push(e), i.push(u);
				for (var h = l, d = s.length; h !== d; ++h) {
					var p = s[h];
					u[h] = new tu(p, t, e);
				}
				return u;
			},
			unsubscribe_: function (t) {
				var e = this._bindingsIndicesByPath,
					n = e[t];
				if (void 0 !== n) {
					var r = this._paths,
						i = this._parsedPaths,
						a = this._bindings,
						o = a.length - 1,
						s = a[o];
					(e[t[o]] = n),
						(a[n] = s),
						a.pop(),
						(i[n] = i[o]),
						i.pop(),
						(r[n] = r[o]),
						r.pop();
				}
			},
		});
	var nu = (function () {
		function t(t, e, n, r) {
			(this._mixer = t),
				(this._clip = e),
				(this._localRoot = n || null),
				(this.blendMode = r || e.blendMode);
			for (
				var i = e.tracks,
					a = i.length,
					o = new Array(a),
					s = { endingStart: H, endingEnd: H },
					c = 0;
				c !== a;
				++c
			) {
				var l = i[c].createInterpolant(null);
				(o[c] = l), (l.settings = s);
			}
			(this._interpolantSettings = s),
				(this._interpolants = o),
				(this._propertyBindings = new Array(a)),
				(this._cacheIndex = null),
				(this._byClipCacheIndex = null),
				(this._timeScaleInterpolant = null),
				(this._weightInterpolant = null),
				(this.loop = 2201),
				(this._loopCount = -1),
				(this._startTime = null),
				(this.time = 0),
				(this.timeScale = 1),
				(this._effectiveTimeScale = 1),
				(this.weight = 1),
				(this._effectiveWeight = 1),
				(this.repetitions = 1 / 0),
				(this.paused = !1),
				(this.enabled = !0),
				(this.clampWhenFinished = !1),
				(this.zeroSlopeAtStart = !0),
				(this.zeroSlopeAtEnd = !0);
		}
		var e = t.prototype;
		return (
			(e.play = function () {
				return this._mixer._activateAction(this), this;
			}),
			(e.stop = function () {
				return this._mixer._deactivateAction(this), this.reset();
			}),
			(e.reset = function () {
				return (
					(this.paused = !1),
					(this.enabled = !0),
					(this.time = 0),
					(this._loopCount = -1),
					(this._startTime = null),
					this.stopFading().stopWarping()
				);
			}),
			(e.isRunning = function () {
				return (
					this.enabled &&
					!this.paused &&
					0 !== this.timeScale &&
					null === this._startTime &&
					this._mixer._isActiveAction(this)
				);
			}),
			(e.isScheduled = function () {
				return this._mixer._isActiveAction(this);
			}),
			(e.startAt = function (t) {
				return (this._startTime = t), this;
			}),
			(e.setLoop = function (t, e) {
				return (this.loop = t), (this.repetitions = e), this;
			}),
			(e.setEffectiveWeight = function (t) {
				return (
					(this.weight = t),
					(this._effectiveWeight = this.enabled ? t : 0),
					this.stopFading()
				);
			}),
			(e.getEffectiveWeight = function () {
				return this._effectiveWeight;
			}),
			(e.fadeIn = function (t) {
				return this._scheduleFading(t, 0, 1);
			}),
			(e.fadeOut = function (t) {
				return this._scheduleFading(t, 1, 0);
			}),
			(e.crossFadeFrom = function (t, e, n) {
				if ((t.fadeOut(e), this.fadeIn(e), n)) {
					var r = this._clip.duration,
						i = t._clip.duration,
						a = i / r,
						o = r / i;
					t.warp(1, a, e), this.warp(o, 1, e);
				}
				return this;
			}),
			(e.crossFadeTo = function (t, e, n) {
				return t.crossFadeFrom(this, e, n);
			}),
			(e.stopFading = function () {
				var t = this._weightInterpolant;
				return (
					null !== t &&
						((this._weightInterpolant = null),
						this._mixer._takeBackControlInterpolant(t)),
					this
				);
			}),
			(e.setEffectiveTimeScale = function (t) {
				return (
					(this.timeScale = t),
					(this._effectiveTimeScale = this.paused ? 0 : t),
					this.stopWarping()
				);
			}),
			(e.getEffectiveTimeScale = function () {
				return this._effectiveTimeScale;
			}),
			(e.setDuration = function (t) {
				return (this.timeScale = this._clip.duration / t), this.stopWarping();
			}),
			(e.syncWith = function (t) {
				return (
					(this.time = t.time),
					(this.timeScale = t.timeScale),
					this.stopWarping()
				);
			}),
			(e.halt = function (t) {
				return this.warp(this._effectiveTimeScale, 0, t);
			}),
			(e.warp = function (t, e, n) {
				var r = this._mixer,
					i = r.time,
					a = this.timeScale,
					o = this._timeScaleInterpolant;
				null === o &&
					((o = r._lendControlInterpolant()), (this._timeScaleInterpolant = o));
				var s = o.parameterPositions,
					c = o.sampleValues;
				return (s[0] = i), (s[1] = i + n), (c[0] = t / a), (c[1] = e / a), this;
			}),
			(e.stopWarping = function () {
				var t = this._timeScaleInterpolant;
				return (
					null !== t &&
						((this._timeScaleInterpolant = null),
						this._mixer._takeBackControlInterpolant(t)),
					this
				);
			}),
			(e.getMixer = function () {
				return this._mixer;
			}),
			(e.getClip = function () {
				return this._clip;
			}),
			(e.getRoot = function () {
				return this._localRoot || this._mixer._root;
			}),
			(e._update = function (t, e, n, r) {
				if (this.enabled) {
					var i = this._startTime;
					if (null !== i) {
						var a = (t - i) * n;
						if (a < 0 || 0 === n) return;
						(this._startTime = null), (e = n * a);
					}
					e *= this._updateTimeScale(t);
					var o = this._updateTime(e),
						s = this._updateWeight(t);
					if (s > 0) {
						var c = this._interpolants,
							l = this._propertyBindings;
						switch (this.blendMode) {
							case j:
								for (var u = 0, h = c.length; u !== h; ++u)
									c[u].evaluate(o), l[u].accumulateAdditive(s);
								break;
							case W:
							default:
								for (var d = 0, p = c.length; d !== p; ++d)
									c[d].evaluate(o), l[d].accumulate(r, s);
						}
					}
				} else this._updateWeight(t);
			}),
			(e._updateWeight = function (t) {
				var e = 0;
				if (this.enabled) {
					e = this.weight;
					var n = this._weightInterpolant;
					if (null !== n) {
						var r = n.evaluate(t)[0];
						(e *= r),
							t > n.parameterPositions[1] &&
								(this.stopFading(), 0 === r && (this.enabled = !1));
					}
				}
				return (this._effectiveWeight = e), e;
			}),
			(e._updateTimeScale = function (t) {
				var e = 0;
				if (!this.paused) {
					e = this.timeScale;
					var n = this._timeScaleInterpolant;
					if (null !== n)
						(e *= n.evaluate(t)[0]),
							t > n.parameterPositions[1] &&
								(this.stopWarping(),
								0 === e ? (this.paused = !0) : (this.timeScale = e));
				}
				return (this._effectiveTimeScale = e), e;
			}),
			(e._updateTime = function (t) {
				var e = this._clip.duration,
					n = this.loop,
					r = this.time + t,
					i = this._loopCount,
					a = 2202 === n;
				if (0 === t) return -1 === i ? r : a && 1 == (1 & i) ? e - r : r;
				if (2200 === n) {
					-1 === i && ((this._loopCount = 0), this._setEndings(!0, !0, !1));
					t: {
						if (r >= e) r = e;
						else {
							if (!(r < 0)) {
								this.time = r;
								break t;
							}
							r = 0;
						}
						this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
							(this.time = r),
							this._mixer.dispatchEvent({
								type: 'finished',
								action: this,
								direction: t < 0 ? -1 : 1,
							});
					}
				} else {
					if (
						(-1 === i &&
							(t >= 0
								? ((i = 0), this._setEndings(!0, 0 === this.repetitions, a))
								: this._setEndings(0 === this.repetitions, !0, a)),
						r >= e || r < 0)
					) {
						var o = Math.floor(r / e);
						(r -= e * o), (i += Math.abs(o));
						var s = this.repetitions - i;
						if (s <= 0)
							this.clampWhenFinished ? (this.paused = !0) : (this.enabled = !1),
								(r = t > 0 ? e : 0),
								(this.time = r),
								this._mixer.dispatchEvent({
									type: 'finished',
									action: this,
									direction: t > 0 ? 1 : -1,
								});
						else {
							if (1 === s) {
								var c = t < 0;
								this._setEndings(c, !c, a);
							} else this._setEndings(!1, !1, a);
							(this._loopCount = i),
								(this.time = r),
								this._mixer.dispatchEvent({
									type: 'loop',
									action: this,
									loopDelta: o,
								});
						}
					} else this.time = r;
					if (a && 1 == (1 & i)) return e - r;
				}
				return r;
			}),
			(e._setEndings = function (t, e, n) {
				var r = this._interpolantSettings;
				n
					? ((r.endingStart = k), (r.endingEnd = k))
					: ((r.endingStart = t ? (this.zeroSlopeAtStart ? k : H) : V),
					  (r.endingEnd = e ? (this.zeroSlopeAtEnd ? k : H) : V));
			}),
			(e._scheduleFading = function (t, e, n) {
				var r = this._mixer,
					i = r.time,
					a = this._weightInterpolant;
				null === a &&
					((a = r._lendControlInterpolant()), (this._weightInterpolant = a));
				var o = a.parameterPositions,
					s = a.sampleValues;
				return (o[0] = i), (s[0] = e), (o[1] = i + t), (s[1] = n), this;
			}),
			t
		);
	})();
	function ru(t) {
		(this._root = t),
			this._initMemoryManager(),
			(this._accuIndex = 0),
			(this.time = 0),
			(this.timeScale = 1);
	}
	ru.prototype = Object.assign(Object.create(rt.prototype), {
		constructor: ru,
		_bindAction: function (t, e) {
			var n = t._localRoot || this._root,
				r = t._clip.tracks,
				i = r.length,
				a = t._propertyBindings,
				o = t._interpolants,
				s = n.uuid,
				c = this._bindingsByRootAndName,
				l = c[s];
			void 0 === l && ((l = {}), (c[s] = l));
			for (var u = 0; u !== i; ++u) {
				var h = r[u],
					d = h.name,
					p = l[d];
				if (void 0 !== p) a[u] = p;
				else {
					if (void 0 !== (p = a[u])) {
						null === p._cacheIndex &&
							(++p.referenceCount, this._addInactiveBinding(p, s, d));
						continue;
					}
					var f = e && e._propertyBindings[u].binding.parsedPath;
					++(p = new kl(tu.create(n, d, f), h.ValueTypeName, h.getValueSize()))
						.referenceCount,
						this._addInactiveBinding(p, s, d),
						(a[u] = p);
				}
				o[u].resultBuffer = p.buffer;
			}
		},
		_activateAction: function (t) {
			if (!this._isActiveAction(t)) {
				if (null === t._cacheIndex) {
					var e = (t._localRoot || this._root).uuid,
						n = t._clip.uuid,
						r = this._actionsByClip[n];
					this._bindAction(t, r && r.knownActions[0]),
						this._addInactiveAction(t, n, e);
				}
				for (var i = t._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
					var s = i[a];
					0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState());
				}
				this._lendAction(t);
			}
		},
		_deactivateAction: function (t) {
			if (this._isActiveAction(t)) {
				for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
					var i = e[n];
					0 == --i.useCount &&
						(i.restoreOriginalState(), this._takeBackBinding(i));
				}
				this._takeBackAction(t);
			}
		},
		_initMemoryManager: function () {
			(this._actions = []),
				(this._nActiveActions = 0),
				(this._actionsByClip = {}),
				(this._bindings = []),
				(this._nActiveBindings = 0),
				(this._bindingsByRootAndName = {}),
				(this._controlInterpolants = []),
				(this._nActiveControlInterpolants = 0);
			var t = this;
			this.stats = {
				actions: {
					get total() {
						return t._actions.length;
					},
					get inUse() {
						return t._nActiveActions;
					},
				},
				bindings: {
					get total() {
						return t._bindings.length;
					},
					get inUse() {
						return t._nActiveBindings;
					},
				},
				controlInterpolants: {
					get total() {
						return t._controlInterpolants.length;
					},
					get inUse() {
						return t._nActiveControlInterpolants;
					},
				},
			};
		},
		_isActiveAction: function (t) {
			var e = t._cacheIndex;
			return null !== e && e < this._nActiveActions;
		},
		_addInactiveAction: function (t, e, n) {
			var r = this._actions,
				i = this._actionsByClip,
				a = i[e];
			if (void 0 === a)
				(a = { knownActions: [t], actionByRoot: {} }),
					(t._byClipCacheIndex = 0),
					(i[e] = a);
			else {
				var o = a.knownActions;
				(t._byClipCacheIndex = o.length), o.push(t);
			}
			(t._cacheIndex = r.length), r.push(t), (a.actionByRoot[n] = t);
		},
		_removeInactiveAction: function (t) {
			var e = this._actions,
				n = e[e.length - 1],
				r = t._cacheIndex;
			(n._cacheIndex = r), (e[r] = n), e.pop(), (t._cacheIndex = null);
			var i = t._clip.uuid,
				a = this._actionsByClip,
				o = a[i],
				s = o.knownActions,
				c = s[s.length - 1],
				l = t._byClipCacheIndex;
			(c._byClipCacheIndex = l),
				(s[l] = c),
				s.pop(),
				(t._byClipCacheIndex = null),
				delete o.actionByRoot[(t._localRoot || this._root).uuid],
				0 === s.length && delete a[i],
				this._removeInactiveBindingsForAction(t);
		},
		_removeInactiveBindingsForAction: function (t) {
			for (var e = t._propertyBindings, n = 0, r = e.length; n !== r; ++n) {
				var i = e[n];
				0 == --i.referenceCount && this._removeInactiveBinding(i);
			}
		},
		_lendAction: function (t) {
			var e = this._actions,
				n = t._cacheIndex,
				r = this._nActiveActions++,
				i = e[r];
			(t._cacheIndex = r), (e[r] = t), (i._cacheIndex = n), (e[n] = i);
		},
		_takeBackAction: function (t) {
			var e = this._actions,
				n = t._cacheIndex,
				r = --this._nActiveActions,
				i = e[r];
			(t._cacheIndex = r), (e[r] = t), (i._cacheIndex = n), (e[n] = i);
		},
		_addInactiveBinding: function (t, e, n) {
			var r = this._bindingsByRootAndName,
				i = this._bindings,
				a = r[e];
			void 0 === a && ((a = {}), (r[e] = a)),
				(a[n] = t),
				(t._cacheIndex = i.length),
				i.push(t);
		},
		_removeInactiveBinding: function (t) {
			var e = this._bindings,
				n = t.binding,
				r = n.rootNode.uuid,
				i = n.path,
				a = this._bindingsByRootAndName,
				o = a[r],
				s = e[e.length - 1],
				c = t._cacheIndex;
			(s._cacheIndex = c),
				(e[c] = s),
				e.pop(),
				delete o[i],
				0 === Object.keys(o).length && delete a[r];
		},
		_lendBinding: function (t) {
			var e = this._bindings,
				n = t._cacheIndex,
				r = this._nActiveBindings++,
				i = e[r];
			(t._cacheIndex = r), (e[r] = t), (i._cacheIndex = n), (e[n] = i);
		},
		_takeBackBinding: function (t) {
			var e = this._bindings,
				n = t._cacheIndex,
				r = --this._nActiveBindings,
				i = e[r];
			(t._cacheIndex = r), (e[r] = t), (i._cacheIndex = n), (e[n] = i);
		},
		_lendControlInterpolant: function () {
			var t = this._controlInterpolants,
				e = this._nActiveControlInterpolants++,
				n = t[e];
			return (
				void 0 === n &&
					(((n = new $s(
						new Float32Array(2),
						new Float32Array(2),
						1,
						this._controlInterpolantsResultBuffer
					)).__cacheIndex = e),
					(t[e] = n)),
				n
			);
		},
		_takeBackControlInterpolant: function (t) {
			var e = this._controlInterpolants,
				n = t.__cacheIndex,
				r = --this._nActiveControlInterpolants,
				i = e[r];
			(t.__cacheIndex = r), (e[r] = t), (i.__cacheIndex = n), (e[n] = i);
		},
		_controlInterpolantsResultBuffer: new Float32Array(1),
		clipAction: function (t, e, n) {
			var r = e || this._root,
				i = r.uuid,
				a = 'string' == typeof t ? lc.findByName(r, t) : t,
				o = null !== a ? a.uuid : t,
				s = this._actionsByClip[o],
				c = null;
			if ((void 0 === n && (n = null !== a ? a.blendMode : W), void 0 !== s)) {
				var l = s.actionByRoot[i];
				if (void 0 !== l && l.blendMode === n) return l;
				(c = s.knownActions[0]), null === a && (a = c._clip);
			}
			if (null === a) return null;
			var u = new nu(this, a, e, n);
			return this._bindAction(u, c), this._addInactiveAction(u, o, i), u;
		},
		existingAction: function (t, e) {
			var n = e || this._root,
				r = n.uuid,
				i = 'string' == typeof t ? lc.findByName(n, t) : t,
				a = i ? i.uuid : t,
				o = this._actionsByClip[a];
			return (void 0 !== o && o.actionByRoot[r]) || null;
		},
		stopAllAction: function () {
			for (var t = this._actions, e = this._nActiveActions - 1; e >= 0; --e)
				t[e].stop();
			return this;
		},
		update: function (t) {
			t *= this.timeScale;
			for (
				var e = this._actions,
					n = this._nActiveActions,
					r = (this.time += t),
					i = Math.sign(t),
					a = (this._accuIndex ^= 1),
					o = 0;
				o !== n;
				++o
			) {
				e[o]._update(r, t, i, a);
			}
			for (
				var s = this._bindings, c = this._nActiveBindings, l = 0;
				l !== c;
				++l
			)
				s[l].apply(a);
			return this;
		},
		setTime: function (t) {
			this.time = 0;
			for (var e = 0; e < this._actions.length; e++) this._actions[e].time = 0;
			return this.update(t);
		},
		getRoot: function () {
			return this._root;
		},
		uncacheClip: function (t) {
			var e = this._actions,
				n = t.uuid,
				r = this._actionsByClip,
				i = r[n];
			if (void 0 !== i) {
				for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
					var c = a[o];
					this._deactivateAction(c);
					var l = c._cacheIndex,
						u = e[e.length - 1];
					(c._cacheIndex = null),
						(c._byClipCacheIndex = null),
						(u._cacheIndex = l),
						(e[l] = u),
						e.pop(),
						this._removeInactiveBindingsForAction(c);
				}
				delete r[n];
			}
		},
		uncacheRoot: function (t) {
			var e = t.uuid,
				n = this._actionsByClip;
			for (var r in n) {
				var i = n[r].actionByRoot[e];
				void 0 !== i &&
					(this._deactivateAction(i), this._removeInactiveAction(i));
			}
			var a = this._bindingsByRootAndName[e];
			if (void 0 !== a)
				for (var o in a) {
					var s = a[o];
					s.restoreOriginalState(), this._removeInactiveBinding(s);
				}
		},
		uncacheAction: function (t, e) {
			var n = this.existingAction(t, e);
			null !== n && (this._deactivateAction(n), this._removeInactiveAction(n));
		},
	});
	var iu = (function () {
		function t(t) {
			'string' == typeof t &&
				(console.warn('THREE.Uniform: Type parameter is no longer needed.'),
				(t = arguments[1])),
				(this.value = t);
		}
		return (
			(t.prototype.clone = function () {
				return new t(
					void 0 === this.value.clone ? this.value : this.value.clone()
				);
			}),
			t
		);
	})();
	function au(t, e, n) {
		ca.call(this, t, e), (this.meshPerAttribute = n || 1);
	}
	function ou(t, e, n, r, i) {
		(this.buffer = t),
			(this.type = e),
			(this.itemSize = n),
			(this.elementSize = r),
			(this.count = i),
			(this.version = 0);
	}
	function su(t, e, n, r) {
		(this.ray = new Zt(t, e)),
			(this.near = n || 0),
			(this.far = r || 1 / 0),
			(this.camera = null),
			(this.layers = new se()),
			(this.params = {
				Mesh: {},
				Line: { threshold: 1 },
				LOD: {},
				Points: { threshold: 1 },
				Sprite: {},
			}),
			Object.defineProperties(this.params, {
				PointCloud: {
					get: function () {
						return (
							console.warn(
								'THREE.Raycaster: params.PointCloud has been renamed to params.Points.'
							),
							this.Points
						);
					},
				},
			});
	}
	function cu(t, e) {
		return t.distance - e.distance;
	}
	function lu(t, e, n, r) {
		if ((t.layers.test(e.layers) && t.raycast(e, n), !0 === r))
			for (var i = t.children, a = 0, o = i.length; a < o; a++)
				lu(i[a], e, n, !0);
	}
	(au.prototype = Object.assign(Object.create(ca.prototype), {
		constructor: au,
		isInstancedInterleavedBuffer: !0,
		copy: function (t) {
			return (
				ca.prototype.copy.call(this, t),
				(this.meshPerAttribute = t.meshPerAttribute),
				this
			);
		},
		clone: function (t) {
			var e = ca.prototype.clone.call(this, t);
			return (e.meshPerAttribute = this.meshPerAttribute), e;
		},
		toJSON: function (t) {
			var e = ca.prototype.toJSON.call(this, t);
			return (
				(e.isInstancedInterleavedBuffer = !0),
				(e.meshPerAttribute = this.meshPerAttribute),
				e
			);
		},
	})),
		Object.defineProperty(ou.prototype, 'needsUpdate', {
			set: function (t) {
				!0 === t && this.version++;
			},
		}),
		Object.assign(ou.prototype, {
			isGLBufferAttribute: !0,
			setBuffer: function (t) {
				return (this.buffer = t), this;
			},
			setType: function (t, e) {
				return (this.type = t), (this.elementSize = e), this;
			},
			setItemSize: function (t) {
				return (this.itemSize = t), this;
			},
			setCount: function (t) {
				return (this.count = t), this;
			},
		}),
		Object.assign(su.prototype, {
			set: function (t, e) {
				this.ray.set(t, e);
			},
			setFromCamera: function (t, e) {
				e && e.isPerspectiveCamera
					? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
					  this.ray.direction
							.set(t.x, t.y, 0.5)
							.unproject(e)
							.sub(this.ray.origin)
							.normalize(),
					  (this.camera = e))
					: e && e.isOrthographicCamera
					? (this.ray.origin
							.set(t.x, t.y, (e.near + e.far) / (e.near - e.far))
							.unproject(e),
					  this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
					  (this.camera = e))
					: console.error('THREE.Raycaster: Unsupported camera type.');
			},
			intersectObject: function (t, e, n) {
				var r = n || [];
				return lu(t, this, r, e), r.sort(cu), r;
			},
			intersectObjects: function (t, e, n) {
				var r = n || [];
				if (!1 === Array.isArray(t))
					return (
						console.warn(
							'THREE.Raycaster.intersectObjects: objects is not an Array.'
						),
						r
					);
				for (var i = 0, a = t.length; i < a; i++) lu(t[i], this, r, e);
				return r.sort(cu), r;
			},
		});
	var uu = (function () {
			function t(t, e, n) {
				return (
					void 0 === t && (t = 1),
					void 0 === e && (e = 0),
					void 0 === n && (n = 0),
					(this.radius = t),
					(this.phi = e),
					(this.theta = n),
					this
				);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e, n) {
					return (this.radius = t), (this.phi = e), (this.theta = n), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return (
						(this.radius = t.radius),
						(this.phi = t.phi),
						(this.theta = t.theta),
						this
					);
				}),
				(e.makeSafe = function () {
					var t = 1e-6;
					return (
						(this.phi = Math.max(t, Math.min(Math.PI - t, this.phi))), this
					);
				}),
				(e.setFromVector3 = function (t) {
					return this.setFromCartesianCoords(t.x, t.y, t.z);
				}),
				(e.setFromCartesianCoords = function (t, e, n) {
					return (
						(this.radius = Math.sqrt(t * t + e * e + n * n)),
						0 === this.radius
							? ((this.theta = 0), (this.phi = 0))
							: ((this.theta = Math.atan2(t, n)),
							  (this.phi = Math.acos(st.clamp(e / this.radius, -1, 1)))),
						this
					);
				}),
				t
			);
		})(),
		hu = (function () {
			function t(t, e, n) {
				return (
					(this.radius = void 0 !== t ? t : 1),
					(this.theta = void 0 !== e ? e : 0),
					(this.y = void 0 !== n ? n : 0),
					this
				);
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e, n) {
					return (this.radius = t), (this.theta = e), (this.y = n), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return (
						(this.radius = t.radius),
						(this.theta = t.theta),
						(this.y = t.y),
						this
					);
				}),
				(e.setFromVector3 = function (t) {
					return this.setFromCartesianCoords(t.x, t.y, t.z);
				}),
				(e.setFromCartesianCoords = function (t, e, n) {
					return (
						(this.radius = Math.sqrt(t * t + n * n)),
						(this.theta = Math.atan2(t, n)),
						(this.y = e),
						this
					);
				}),
				t
			);
		})(),
		du = new pt(),
		pu = (function () {
			function t(t, e) {
				Object.defineProperty(this, 'isBox2', { value: !0 }),
					(this.min = void 0 !== t ? t : new pt(1 / 0, 1 / 0)),
					(this.max = void 0 !== e ? e : new pt(-1 / 0, -1 / 0));
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e) {
					return this.min.copy(t), this.max.copy(e), this;
				}),
				(e.setFromPoints = function (t) {
					this.makeEmpty();
					for (var e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
					return this;
				}),
				(e.setFromCenterAndSize = function (t, e) {
					var n = du.copy(e).multiplyScalar(0.5);
					return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return this.min.copy(t.min), this.max.copy(t.max), this;
				}),
				(e.makeEmpty = function () {
					return (
						(this.min.x = this.min.y = 1 / 0),
						(this.max.x = this.max.y = -1 / 0),
						this
					);
				}),
				(e.isEmpty = function () {
					return this.max.x < this.min.x || this.max.y < this.min.y;
				}),
				(e.getCenter = function (t) {
					return (
						void 0 === t &&
							(console.warn('THREE.Box2: .getCenter() target is now required'),
							(t = new pt())),
						this.isEmpty()
							? t.set(0, 0)
							: t.addVectors(this.min, this.max).multiplyScalar(0.5)
					);
				}),
				(e.getSize = function (t) {
					return (
						void 0 === t &&
							(console.warn('THREE.Box2: .getSize() target is now required'),
							(t = new pt())),
						this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
					);
				}),
				(e.expandByPoint = function (t) {
					return this.min.min(t), this.max.max(t), this;
				}),
				(e.expandByVector = function (t) {
					return this.min.sub(t), this.max.add(t), this;
				}),
				(e.expandByScalar = function (t) {
					return this.min.addScalar(-t), this.max.addScalar(t), this;
				}),
				(e.containsPoint = function (t) {
					return !(
						t.x < this.min.x ||
						t.x > this.max.x ||
						t.y < this.min.y ||
						t.y > this.max.y
					);
				}),
				(e.containsBox = function (t) {
					return (
						this.min.x <= t.min.x &&
						t.max.x <= this.max.x &&
						this.min.y <= t.min.y &&
						t.max.y <= this.max.y
					);
				}),
				(e.getParameter = function (t, e) {
					return (
						void 0 === e &&
							(console.warn(
								'THREE.Box2: .getParameter() target is now required'
							),
							(e = new pt())),
						e.set(
							(t.x - this.min.x) / (this.max.x - this.min.x),
							(t.y - this.min.y) / (this.max.y - this.min.y)
						)
					);
				}),
				(e.intersectsBox = function (t) {
					return !(
						t.max.x < this.min.x ||
						t.min.x > this.max.x ||
						t.max.y < this.min.y ||
						t.min.y > this.max.y
					);
				}),
				(e.clampPoint = function (t, e) {
					return (
						void 0 === e &&
							(console.warn('THREE.Box2: .clampPoint() target is now required'),
							(e = new pt())),
						e.copy(t).clamp(this.min, this.max)
					);
				}),
				(e.distanceToPoint = function (t) {
					return du.copy(t).clamp(this.min, this.max).sub(t).length();
				}),
				(e.intersect = function (t) {
					return this.min.max(t.min), this.max.min(t.max), this;
				}),
				(e.union = function (t) {
					return this.min.min(t.min), this.max.max(t.max), this;
				}),
				(e.translate = function (t) {
					return this.min.add(t), this.max.add(t), this;
				}),
				(e.equals = function (t) {
					return t.min.equals(this.min) && t.max.equals(this.max);
				}),
				t
			);
		})(),
		fu = new wt(),
		mu = new wt(),
		vu = (function () {
			function t(t, e) {
				(this.start = void 0 !== t ? t : new wt()),
					(this.end = void 0 !== e ? e : new wt());
			}
			var e = t.prototype;
			return (
				(e.set = function (t, e) {
					return this.start.copy(t), this.end.copy(e), this;
				}),
				(e.clone = function () {
					return new this.constructor().copy(this);
				}),
				(e.copy = function (t) {
					return this.start.copy(t.start), this.end.copy(t.end), this;
				}),
				(e.getCenter = function (t) {
					return (
						void 0 === t &&
							(console.warn('THREE.Line3: .getCenter() target is now required'),
							(t = new wt())),
						t.addVectors(this.start, this.end).multiplyScalar(0.5)
					);
				}),
				(e.delta = function (t) {
					return (
						void 0 === t &&
							(console.warn('THREE.Line3: .delta() target is now required'),
							(t = new wt())),
						t.subVectors(this.end, this.start)
					);
				}),
				(e.distanceSq = function () {
					return this.start.distanceToSquared(this.end);
				}),
				(e.distance = function () {
					return this.start.distanceTo(this.end);
				}),
				(e.at = function (t, e) {
					return (
						void 0 === e &&
							(console.warn('THREE.Line3: .at() target is now required'),
							(e = new wt())),
						this.delta(e).multiplyScalar(t).add(this.start)
					);
				}),
				(e.closestPointToPointParameter = function (t, e) {
					fu.subVectors(t, this.start), mu.subVectors(this.end, this.start);
					var n = mu.dot(mu),
						r = mu.dot(fu) / n;
					return e && (r = st.clamp(r, 0, 1)), r;
				}),
				(e.closestPointToPoint = function (t, e, n) {
					var r = this.closestPointToPointParameter(t, e);
					return (
						void 0 === n &&
							(console.warn(
								'THREE.Line3: .closestPointToPoint() target is now required'
							),
							(n = new wt())),
						this.delta(n).multiplyScalar(r).add(this.start)
					);
				}),
				(e.applyMatrix4 = function (t) {
					return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
				}),
				(e.equals = function (t) {
					return t.start.equals(this.start) && t.end.equals(this.end);
				}),
				t
			);
		})();
	function gu(t) {
		be.call(this),
			(this.material = t),
			(this.render = function () {}),
			(this.hasPositions = !1),
			(this.hasNormals = !1),
			(this.hasColors = !1),
			(this.hasUvs = !1),
			(this.positionArray = null),
			(this.normalArray = null),
			(this.colorArray = null),
			(this.uvArray = null),
			(this.count = 0);
	}
	(gu.prototype = Object.create(be.prototype)),
		(gu.prototype.constructor = gu),
		(gu.prototype.isImmediateRenderObject = !0);
	var yu = new wt(),
		xu = (function (t) {
			function e(e, n) {
				var r;
				((r = t.call(this) || this).light = e),
					r.light.updateMatrixWorld(),
					(r.matrix = e.matrixWorld),
					(r.matrixAutoUpdate = !1),
					(r.color = n);
				for (
					var i = new vn(),
						a = [
							0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0,
							1, 1, 0, 0, 0, 0, -1, 1,
						],
						o = 0,
						s = 1;
					o < 32;
					o++, s++
				) {
					var c = (o / 32) * Math.PI * 2,
						l = (s / 32) * Math.PI * 2;
					a.push(Math.cos(c), Math.sin(c), 1, Math.cos(l), Math.sin(l), 1);
				}
				i.setAttribute('position', new an(a, 3));
				var u = new ja({ fog: !1, toneMapped: !1 });
				return (r.cone = new to(i, u)), r.add(r.cone), r.update(), r;
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.dispose = function () {
					this.cone.geometry.dispose(), this.cone.material.dispose();
				}),
				(n.update = function () {
					this.light.updateMatrixWorld();
					var t = this.light.distance ? this.light.distance : 1e3,
						e = t * Math.tan(this.light.angle);
					this.cone.scale.set(e, e, t),
						yu.setFromMatrixPosition(this.light.target.matrixWorld),
						this.cone.lookAt(yu),
						void 0 !== this.color
							? this.cone.material.color.set(this.color)
							: this.cone.material.color.copy(this.light.color);
				}),
				e
			);
		})(be),
		_u = new wt(),
		bu = new Jt(),
		wu = new Jt(),
		Mu = (function (t) {
			function e(e) {
				for (
					var n,
						r = Su(e),
						i = new vn(),
						a = [],
						o = [],
						s = new Ve(0, 0, 1),
						c = new Ve(0, 1, 0),
						l = 0;
					l < r.length;
					l++
				) {
					var u = r[l];
					u.parent &&
						u.parent.isBone &&
						(a.push(0, 0, 0),
						a.push(0, 0, 0),
						o.push(s.r, s.g, s.b),
						o.push(c.r, c.g, c.b));
				}
				i.setAttribute('position', new an(a, 3)),
					i.setAttribute('color', new an(o, 3));
				var h = new ja({
					vertexColors: !0,
					depthTest: !1,
					depthWrite: !1,
					toneMapped: !1,
					transparent: !0,
				});
				return (
					((n = t.call(this, i, h) || this).type = 'SkeletonHelper'),
					(n.isSkeletonHelper = !0),
					(n.root = e),
					(n.bones = r),
					(n.matrix = e.matrixWorld),
					(n.matrixAutoUpdate = !1),
					n
				);
			}
			return (
				ut(e, t),
				(e.prototype.updateMatrixWorld = function (e) {
					var n = this.bones,
						r = this.geometry,
						i = r.getAttribute('position');
					wu.getInverse(this.root.matrixWorld);
					for (var a = 0, o = 0; a < n.length; a++) {
						var s = n[a];
						s.parent &&
							s.parent.isBone &&
							(bu.multiplyMatrices(wu, s.matrixWorld),
							_u.setFromMatrixPosition(bu),
							i.setXYZ(o, _u.x, _u.y, _u.z),
							bu.multiplyMatrices(wu, s.parent.matrixWorld),
							_u.setFromMatrixPosition(bu),
							i.setXYZ(o + 1, _u.x, _u.y, _u.z),
							(o += 2));
					}
					(r.getAttribute('position').needsUpdate = !0),
						t.prototype.updateMatrixWorld.call(this, e);
				}),
				e
			);
		})(to);
	function Su(t) {
		var e = [];
		t && t.isBone && e.push(t);
		for (var n = 0; n < t.children.length; n++)
			e.push.apply(e, Su(t.children[n]));
		return e;
	}
	var Tu = (function (t) {
			function e(e, n, r) {
				var i,
					a = new Ts(n, 4, 2),
					o = new Xe({ wireframe: !0, fog: !1, toneMapped: !1 });
				return (
					((i = t.call(this, a, o) || this).light = e),
					i.light.updateMatrixWorld(),
					(i.color = r),
					(i.type = 'PointLightHelper'),
					(i.matrix = i.light.matrixWorld),
					(i.matrixAutoUpdate = !1),
					i.update(),
					i
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.dispose = function () {
					this.geometry.dispose(), this.material.dispose();
				}),
				(n.update = function () {
					void 0 !== this.color
						? this.material.color.set(this.color)
						: this.material.color.copy(this.light.color);
				}),
				e
			);
		})(Nn),
		Eu = new wt(),
		Au = new Ve(),
		Lu = new Ve(),
		Ru = (function (t) {
			function e(e, n, r) {
				var i;
				((i = t.call(this) || this).light = e),
					i.light.updateMatrixWorld(),
					(i.matrix = e.matrixWorld),
					(i.matrixAutoUpdate = !1),
					(i.color = r);
				var a = new ms(n);
				a.rotateY(0.5 * Math.PI),
					(i.material = new Xe({ wireframe: !0, fog: !1, toneMapped: !1 })),
					void 0 === i.color && (i.material.vertexColors = !0);
				var o = a.getAttribute('position'),
					s = new Float32Array(3 * o.count);
				return (
					a.setAttribute('color', new Je(s, 3)),
					i.add(new Nn(a, i.material)),
					i.update(),
					i
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.dispose = function () {
					this.children[0].geometry.dispose(),
						this.children[0].material.dispose();
				}),
				(n.update = function () {
					var t = this.children[0];
					if (void 0 !== this.color) this.material.color.set(this.color);
					else {
						var e = t.geometry.getAttribute('color');
						Au.copy(this.light.color), Lu.copy(this.light.groundColor);
						for (var n = 0, r = e.count; n < r; n++) {
							var i = n < r / 2 ? Au : Lu;
							e.setXYZ(n, i.r, i.g, i.b);
						}
						e.needsUpdate = !0;
					}
					t.lookAt(Eu.setFromMatrixPosition(this.light.matrixWorld).negate());
				}),
				e
			);
		})(be),
		Cu = (function (t) {
			function e(e, n, r, i) {
				var a;
				(e = e || 10),
					(n = n || 10),
					(r = new Ve(void 0 !== r ? r : 4473924)),
					(i = new Ve(void 0 !== i ? i : 8947848));
				for (
					var o = n / 2,
						s = e / n,
						c = e / 2,
						l = [],
						u = [],
						h = 0,
						d = 0,
						p = -c;
					h <= n;
					h++, p += s
				) {
					l.push(-c, 0, p, c, 0, p), l.push(p, 0, -c, p, 0, c);
					var f = h === o ? r : i;
					f.toArray(u, d),
						(d += 3),
						f.toArray(u, d),
						(d += 3),
						f.toArray(u, d),
						(d += 3),
						f.toArray(u, d),
						(d += 3);
				}
				var m = new vn();
				m.setAttribute('position', new an(l, 3)),
					m.setAttribute('color', new an(u, 3));
				var v = new ja({ vertexColors: !0, toneMapped: !1 });
				return ((a = t.call(this, m, v) || this).type = 'GridHelper'), a;
			}
			return ut(e, t), e;
		})(to),
		Pu = (function (t) {
			function e(e, n, r, i, a, o) {
				var s;
				(e = e || 10),
					(n = n || 16),
					(r = r || 8),
					(i = i || 64),
					(a = new Ve(void 0 !== a ? a : 4473924)),
					(o = new Ve(void 0 !== o ? o : 8947848));
				for (var c = [], l = [], u = 0; u <= n; u++) {
					var h = (u / n) * (2 * Math.PI),
						d = Math.sin(h) * e,
						p = Math.cos(h) * e;
					c.push(0, 0, 0), c.push(d, 0, p);
					var f = 1 & u ? a : o;
					l.push(f.r, f.g, f.b), l.push(f.r, f.g, f.b);
				}
				for (var m = 0; m <= r; m++)
					for (var v = 1 & m ? a : o, g = e - (e / r) * m, y = 0; y < i; y++) {
						var x = (y / i) * (2 * Math.PI),
							_ = Math.sin(x) * g,
							b = Math.cos(x) * g;
						c.push(_, 0, b),
							l.push(v.r, v.g, v.b),
							(x = ((y + 1) / i) * (2 * Math.PI)),
							(_ = Math.sin(x) * g),
							(b = Math.cos(x) * g),
							c.push(_, 0, b),
							l.push(v.r, v.g, v.b);
					}
				var w = new vn();
				w.setAttribute('position', new an(c, 3)),
					w.setAttribute('color', new an(l, 3));
				var M = new ja({ vertexColors: !0, toneMapped: !1 });
				return ((s = t.call(this, w, M) || this).type = 'PolarGridHelper'), s;
			}
			return ut(e, t), e;
		})(to),
		Iu = new wt(),
		Du = new wt(),
		Nu = new wt(),
		Ou = (function (t) {
			function e(e, n, r) {
				var i;
				((i = t.call(this) || this).light = e),
					i.light.updateMatrixWorld(),
					(i.matrix = e.matrixWorld),
					(i.matrixAutoUpdate = !1),
					(i.color = r),
					void 0 === n && (n = 1);
				var a = new vn();
				a.setAttribute(
					'position',
					new an([-n, n, 0, n, n, 0, n, -n, 0, -n, -n, 0, -n, n, 0], 3)
				);
				var o = new ja({ fog: !1, toneMapped: !1 });
				return (
					(i.lightPlane = new Qa(a, o)),
					i.add(i.lightPlane),
					(a = new vn()).setAttribute(
						'position',
						new an([0, 0, 0, 0, 0, 1], 3)
					),
					(i.targetLine = new Qa(a, o)),
					i.add(i.targetLine),
					i.update(),
					i
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.dispose = function () {
					this.lightPlane.geometry.dispose(),
						this.lightPlane.material.dispose(),
						this.targetLine.geometry.dispose(),
						this.targetLine.material.dispose();
				}),
				(n.update = function () {
					Iu.setFromMatrixPosition(this.light.matrixWorld),
						Du.setFromMatrixPosition(this.light.target.matrixWorld),
						Nu.subVectors(Du, Iu),
						this.lightPlane.lookAt(Du),
						void 0 !== this.color
							? (this.lightPlane.material.color.set(this.color),
							  this.targetLine.material.color.set(this.color))
							: (this.lightPlane.material.color.copy(this.light.color),
							  this.targetLine.material.color.copy(this.light.color)),
						this.targetLine.lookAt(Du),
						(this.targetLine.scale.z = Nu.length());
				}),
				e
			);
		})(be),
		Bu = new wt(),
		zu = new kn(),
		Gu = (function (t) {
			function e(e) {
				var n,
					r = new vn(),
					i = new ja({ color: 16777215, vertexColors: !0, toneMapped: !1 }),
					a = [],
					o = [],
					s = {},
					c = new Ve(16755200),
					l = new Ve(16711680),
					u = new Ve(43775),
					h = new Ve(16777215),
					d = new Ve(3355443);
				function p(t, e, n) {
					f(t, n), f(e, n);
				}
				function f(t, e) {
					a.push(0, 0, 0),
						o.push(e.r, e.g, e.b),
						void 0 === s[t] && (s[t] = []),
						s[t].push(a.length / 3 - 1);
				}
				return (
					p('n1', 'n2', c),
					p('n2', 'n4', c),
					p('n4', 'n3', c),
					p('n3', 'n1', c),
					p('f1', 'f2', c),
					p('f2', 'f4', c),
					p('f4', 'f3', c),
					p('f3', 'f1', c),
					p('n1', 'f1', c),
					p('n2', 'f2', c),
					p('n3', 'f3', c),
					p('n4', 'f4', c),
					p('p', 'n1', l),
					p('p', 'n2', l),
					p('p', 'n3', l),
					p('p', 'n4', l),
					p('u1', 'u2', u),
					p('u2', 'u3', u),
					p('u3', 'u1', u),
					p('c', 't', h),
					p('p', 'c', d),
					p('cn1', 'cn2', d),
					p('cn3', 'cn4', d),
					p('cf1', 'cf2', d),
					p('cf3', 'cf4', d),
					r.setAttribute('position', new an(a, 3)),
					r.setAttribute('color', new an(o, 3)),
					((n = t.call(this, r, i) || this).type = 'CameraHelper'),
					(n.camera = e),
					n.camera.updateProjectionMatrix && n.camera.updateProjectionMatrix(),
					(n.matrix = e.matrixWorld),
					(n.matrixAutoUpdate = !1),
					(n.pointMap = s),
					n.update(),
					n
				);
			}
			return (
				ut(e, t),
				(e.prototype.update = function () {
					var t = this.geometry,
						e = this.pointMap;
					zu.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),
						Fu('c', e, t, zu, 0, 0, -1),
						Fu('t', e, t, zu, 0, 0, 1),
						Fu('n1', e, t, zu, -1, -1, -1),
						Fu('n2', e, t, zu, 1, -1, -1),
						Fu('n3', e, t, zu, -1, 1, -1),
						Fu('n4', e, t, zu, 1, 1, -1),
						Fu('f1', e, t, zu, -1, -1, 1),
						Fu('f2', e, t, zu, 1, -1, 1),
						Fu('f3', e, t, zu, -1, 1, 1),
						Fu('f4', e, t, zu, 1, 1, 1),
						Fu('u1', e, t, zu, 0.7, 1.1, -1),
						Fu('u2', e, t, zu, -0.7, 1.1, -1),
						Fu('u3', e, t, zu, 0, 2, -1),
						Fu('cf1', e, t, zu, -1, 0, 1),
						Fu('cf2', e, t, zu, 1, 0, 1),
						Fu('cf3', e, t, zu, 0, -1, 1),
						Fu('cf4', e, t, zu, 0, 1, 1),
						Fu('cn1', e, t, zu, -1, 0, -1),
						Fu('cn2', e, t, zu, 1, 0, -1),
						Fu('cn3', e, t, zu, 0, -1, -1),
						Fu('cn4', e, t, zu, 0, 1, -1),
						(t.getAttribute('position').needsUpdate = !0);
				}),
				e
			);
		})(to);
	function Fu(t, e, n, r, i, a, o) {
		Bu.set(i, a, o).unproject(r);
		var s = e[t];
		if (void 0 !== s)
			for (var c = n.getAttribute('position'), l = 0, u = s.length; l < u; l++)
				c.setXYZ(s[l], Bu.x, Bu.y, Bu.z);
	}
	var Uu,
		Hu,
		ku,
		Vu = new Tt(),
		Wu = (function (t) {
			function e(e, n) {
				var r;
				void 0 === n && (n = 16776960);
				var i = new Uint16Array([
						0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
						7,
					]),
					a = new Float32Array(24),
					o = new vn();
				return (
					o.setIndex(new Je(i, 1)),
					o.setAttribute('position', new Je(a, 3)),
					((r =
						t.call(this, o, new ja({ color: n, toneMapped: !1 })) ||
						this).object = e),
					(r.type = 'BoxHelper'),
					(r.matrixAutoUpdate = !1),
					r.update(),
					r
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.update = function (t) {
					if (
						(void 0 !== t &&
							console.warn(
								'THREE.BoxHelper: .update() has no longer arguments.'
							),
						void 0 !== this.object && Vu.setFromObject(this.object),
						!Vu.isEmpty())
					) {
						var e = Vu.min,
							n = Vu.max,
							r = this.geometry.attributes.position,
							i = r.array;
						(i[0] = n.x),
							(i[1] = n.y),
							(i[2] = n.z),
							(i[3] = e.x),
							(i[4] = n.y),
							(i[5] = n.z),
							(i[6] = e.x),
							(i[7] = e.y),
							(i[8] = n.z),
							(i[9] = n.x),
							(i[10] = e.y),
							(i[11] = n.z),
							(i[12] = n.x),
							(i[13] = n.y),
							(i[14] = e.z),
							(i[15] = e.x),
							(i[16] = n.y),
							(i[17] = e.z),
							(i[18] = e.x),
							(i[19] = e.y),
							(i[20] = e.z),
							(i[21] = n.x),
							(i[22] = e.y),
							(i[23] = e.z),
							(r.needsUpdate = !0),
							this.geometry.computeBoundingSphere();
					}
				}),
				(n.setFromObject = function (t) {
					return (this.object = t), this.update(), this;
				}),
				(n.copy = function (t) {
					return (
						to.prototype.copy.call(this, t), (this.object = t.object), this
					);
				}),
				e
			);
		})(to),
		ju = (function (t) {
			function e(e, n) {
				var r;
				void 0 === n && (n = 16776960);
				var i = new Uint16Array([
						0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3,
						7,
					]),
					a = new vn();
				return (
					a.setIndex(new Je(i, 1)),
					a.setAttribute(
						'position',
						new an(
							[
								1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1,
								-1, -1, 1, -1, -1,
							],
							3
						)
					),
					((r =
						t.call(this, a, new ja({ color: n, toneMapped: !1 })) || this).box =
						e),
					(r.type = 'Box3Helper'),
					r.geometry.computeBoundingSphere(),
					r
				);
			}
			return (
				ut(e, t),
				(e.prototype.updateMatrixWorld = function (e) {
					var n = this.box;
					n.isEmpty() ||
						(n.getCenter(this.position),
						n.getSize(this.scale),
						this.scale.multiplyScalar(0.5),
						t.prototype.updateMatrixWorld.call(this, e));
				}),
				e
			);
		})(to),
		qu = (function (t) {
			function e(e, n, r) {
				var i,
					a = void 0 !== r ? r : 16776960,
					o = new vn();
				o.setAttribute(
					'position',
					new an(
						[
							1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1,
							-1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0,
						],
						3
					)
				),
					o.computeBoundingSphere(),
					((i =
						t.call(this, o, new ja({ color: a, toneMapped: !1 })) ||
						this).type = 'PlaneHelper'),
					(i.plane = e),
					(i.size = void 0 === n ? 1 : n);
				var s = new vn();
				return (
					s.setAttribute(
						'position',
						new an(
							[1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1],
							3
						)
					),
					s.computeBoundingSphere(),
					i.add(
						new Nn(
							s,
							new Xe({
								color: a,
								opacity: 0.2,
								transparent: !0,
								depthWrite: !1,
								toneMapped: !1,
							})
						)
					),
					i
				);
			}
			return (
				ut(e, t),
				(e.prototype.updateMatrixWorld = function (e) {
					var n = -this.plane.constant;
					Math.abs(n) < 1e-8 && (n = 1e-8),
						this.scale.set(0.5 * this.size, 0.5 * this.size, n),
						(this.children[0].material.side = n < 0 ? 1 : 0),
						this.lookAt(this.plane.normal),
						t.prototype.updateMatrixWorld.call(this, e);
				}),
				e
			);
		})(Qa),
		Xu = new wt(),
		Yu = (function (t) {
			function e(e, n, r, i, a, o) {
				var s;
				return (
					((s = t.call(this) || this).type = 'ArrowHelper'),
					void 0 === e && (e = new wt(0, 0, 1)),
					void 0 === n && (n = new wt(0, 0, 0)),
					void 0 === r && (r = 1),
					void 0 === i && (i = 16776960),
					void 0 === a && (a = 0.2 * r),
					void 0 === o && (o = 0.2 * a),
					void 0 === Uu &&
						((Uu = new vn()).setAttribute(
							'position',
							new an([0, 0, 0, 0, 1, 0], 3)
						),
						(Hu = new wo(0, 0.5, 1, 5, 1)).translate(0, -0.5, 0)),
					s.position.copy(n),
					(s.line = new Qa(Uu, new ja({ color: i, toneMapped: !1 }))),
					(s.line.matrixAutoUpdate = !1),
					s.add(s.line),
					(s.cone = new Nn(Hu, new Xe({ color: i, toneMapped: !1 }))),
					(s.cone.matrixAutoUpdate = !1),
					s.add(s.cone),
					s.setDirection(e),
					s.setLength(r, a, o),
					s
				);
			}
			ut(e, t);
			var n = e.prototype;
			return (
				(n.setDirection = function (t) {
					if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
					else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
					else {
						Xu.set(t.z, 0, -t.x).normalize();
						var e = Math.acos(t.y);
						this.quaternion.setFromAxisAngle(Xu, e);
					}
				}),
				(n.setLength = function (t, e, n) {
					void 0 === e && (e = 0.2 * t),
						void 0 === n && (n = 0.2 * e),
						this.line.scale.set(1, Math.max(1e-4, t - e), 1),
						this.line.updateMatrix(),
						this.cone.scale.set(n, e, n),
						(this.cone.position.y = t),
						this.cone.updateMatrix();
				}),
				(n.setColor = function (t) {
					this.line.material.color.set(t), this.cone.material.color.set(t);
				}),
				(n.copy = function (e) {
					return (
						t.prototype.copy.call(this, e, !1),
						this.line.copy(e.line),
						this.cone.copy(e.cone),
						this
					);
				}),
				e
			);
		})(be),
		Zu = (function (t) {
			function e(e) {
				var n;
				void 0 === e && (e = 1);
				var r = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e],
					i = new vn();
				i.setAttribute('position', new an(r, 3)),
					i.setAttribute(
						'color',
						new an(
							[1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
							3
						)
					);
				var a = new ja({ vertexColors: !0, toneMapped: !1 });
				return ((n = t.call(this, i, a) || this).type = 'AxesHelper'), n;
			}
			return ut(e, t), e;
		})(to),
		Ju = Math.pow(2, 8),
		Qu = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
		Ku = 5 + Qu.length,
		$u = 20,
		th =
			(((ku = {})[3e3] = 0),
			(ku[3001] = 1),
			(ku[3002] = 2),
			(ku[3004] = 3),
			(ku[3005] = 4),
			(ku[3006] = 5),
			(ku[3007] = 6),
			ku),
		eh = new $c(),
		nh = dh(),
		rh = nh._lodPlanes,
		ih = nh._sizeLods,
		ah = nh._sigmas,
		oh = null,
		sh = (1 + Math.sqrt(5)) / 2,
		ch = 1 / sh,
		lh = [
			new wt(1, 1, 1),
			new wt(-1, 1, 1),
			new wt(1, 1, -1),
			new wt(-1, 1, -1),
			new wt(0, sh, ch),
			new wt(0, sh, -ch),
			new wt(ch, 0, sh),
			new wt(-ch, 0, sh),
			new wt(sh, ch, 0),
			new wt(-sh, ch, 0),
		],
		uh = (function () {
			function t(t) {
				var e, n, r;
				(this._renderer = t),
					(this._pingPongRenderTarget = null),
					(this._blurMaterial =
						((e = $u),
						(n = new Float32Array(e)),
						(r = new wt(0, 1, 0)),
						new Us({
							name: 'SphericalGaussianBlur',
							defines: { n: e },
							uniforms: {
								envMap: { value: null },
								samples: { value: 1 },
								weights: { value: n },
								latitudinal: { value: !1 },
								dTheta: { value: 0 },
								mipInt: { value: 0 },
								poleAxis: { value: r },
								inputEncoding: { value: th[3e3] },
								outputEncoding: { value: th[3e3] },
							},
							vertexShader:
								'\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t',
							fragmentShader:
								"\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t",
							blending: 0,
							depthTest: !1,
							depthWrite: !1,
						}))),
					(this._equirectShader = null),
					(this._cubemapShader = null),
					this._compileMaterial(this._blurMaterial);
			}
			var e = t.prototype;
			return (
				(e.fromScene = function (t, e, n, r) {
					void 0 === e && (e = 0),
						void 0 === n && (n = 0.1),
						void 0 === r && (r = 100),
						(oh = this._renderer.getRenderTarget());
					var i = this._allocateTargets();
					return (
						this._sceneToCubeUV(t, n, r, i),
						e > 0 && this._blur(i, 0, 0, e),
						this._applyPMREM(i),
						this._cleanup(i),
						i
					);
				}),
				(e.fromEquirectangular = function (t) {
					return this._fromTexture(t);
				}),
				(e.fromCubemap = function (t) {
					return this._fromTexture(t);
				}),
				(e.compileCubemapShader = function () {
					null === this._cubemapShader &&
						((this._cubemapShader = vh()),
						this._compileMaterial(this._cubemapShader));
				}),
				(e.compileEquirectangularShader = function () {
					null === this._equirectShader &&
						((this._equirectShader = mh()),
						this._compileMaterial(this._equirectShader));
				}),
				(e.dispose = function () {
					this._blurMaterial.dispose(),
						null !== this._cubemapShader && this._cubemapShader.dispose(),
						null !== this._equirectShader && this._equirectShader.dispose();
					for (var t = 0; t < rh.length; t++) rh[t].dispose();
				}),
				(e._cleanup = function (t) {
					this._pingPongRenderTarget.dispose(),
						this._renderer.setRenderTarget(oh),
						(t.scissorTest = !1),
						fh(t, 0, 0, t.width, t.height);
				}),
				(e._fromTexture = function (t) {
					oh = this._renderer.getRenderTarget();
					var e = this._allocateTargets(t);
					return (
						this._textureToCubeUV(t, e),
						this._applyPMREM(e),
						this._cleanup(e),
						e
					);
				}),
				(e._allocateTargets = function (t) {
					var e = {
							magFilter: d,
							minFilter: d,
							generateMipmaps: !1,
							type: y,
							format: 1023,
							encoding: hh(t) ? t.encoding : Z,
							depthBuffer: !1,
						},
						n = ph(e);
					return (n.depthBuffer = !t), (this._pingPongRenderTarget = ph(e)), n;
				}),
				(e._compileMaterial = function (t) {
					var e = new Nn(rh[0], t);
					this._renderer.compile(e, eh);
				}),
				(e._sceneToCubeUV = function (t, e, n, r) {
					var i = new Vn(90, 1, e, n),
						a = [1, -1, 1, 1, 1, 1],
						o = [1, 1, 1, -1, -1, -1],
						s = this._renderer,
						c = s.outputEncoding,
						l = s.toneMapping,
						u = s.getClearColor(),
						h = s.getClearAlpha();
					(s.toneMapping = 0), (s.outputEncoding = q);
					var d = t.background;
					if (d && d.isColor) {
						d.convertSRGBToLinear();
						var p = Math.max(d.r, d.g, d.b),
							f = Math.min(Math.max(Math.ceil(Math.log2(p)), -128), 127);
						d = d.multiplyScalar(Math.pow(2, -f));
						var m = (f + 128) / 255;
						s.setClearColor(d, m), (t.background = null);
					}
					for (var v = 0; v < 6; v++) {
						var g = v % 3;
						0 == g
							? (i.up.set(0, a[v], 0), i.lookAt(o[v], 0, 0))
							: 1 == g
							? (i.up.set(0, 0, a[v]), i.lookAt(0, o[v], 0))
							: (i.up.set(0, a[v], 0), i.lookAt(0, 0, o[v])),
							fh(r, g * Ju, v > 2 ? Ju : 0, Ju, Ju),
							s.setRenderTarget(r),
							s.render(t, i);
					}
					(s.toneMapping = l), (s.outputEncoding = c), s.setClearColor(u, h);
				}),
				(e._textureToCubeUV = function (t, e) {
					var n = this._renderer;
					t.isCubeTexture
						? null == this._cubemapShader && (this._cubemapShader = vh())
						: null == this._equirectShader && (this._equirectShader = mh());
					var r = t.isCubeTexture ? this._cubemapShader : this._equirectShader,
						i = new Nn(rh[0], r),
						a = r.uniforms;
					(a.envMap.value = t),
						t.isCubeTexture ||
							a.texelSize.value.set(1 / t.image.width, 1 / t.image.height),
						(a.inputEncoding.value = th[t.encoding]),
						(a.outputEncoding.value = th[e.texture.encoding]),
						fh(e, 0, 0, 3 * Ju, 2 * Ju),
						n.setRenderTarget(e),
						n.render(i, eh);
				}),
				(e._applyPMREM = function (t) {
					var e = this._renderer,
						n = e.autoClear;
					e.autoClear = !1;
					for (var r = 1; r < Ku; r++) {
						var i = Math.sqrt(ah[r] * ah[r] - ah[r - 1] * ah[r - 1]),
							a = lh[(r - 1) % lh.length];
						this._blur(t, r - 1, r, i, a);
					}
					e.autoClear = n;
				}),
				(e._blur = function (t, e, n, r, i) {
					var a = this._pingPongRenderTarget;
					this._halfBlur(t, a, e, n, r, 'latitudinal', i),
						this._halfBlur(a, t, n, n, r, 'longitudinal', i);
				}),
				(e._halfBlur = function (t, e, n, r, i, a, o) {
					var s = this._renderer,
						c = this._blurMaterial;
					'latitudinal' !== a &&
						'longitudinal' !== a &&
						console.error(
							'blur direction must be either latitudinal or longitudinal!'
						);
					var l = new Nn(rh[r], c),
						u = c.uniforms,
						h = ih[n] - 1,
						d = isFinite(i) ? Math.PI / (2 * h) : (2 * Math.PI) / 39,
						p = i / d,
						f = isFinite(i) ? 1 + Math.floor(3 * p) : $u;
					f > $u &&
						console.warn(
							'sigmaRadians, ' +
								i +
								', is too large and will clip, as it requested ' +
								f +
								' samples when the maximum is set to ' +
								$u
						);
					for (var m = [], v = 0, g = 0; g < $u; ++g) {
						var y = g / p,
							x = Math.exp((-y * y) / 2);
						m.push(x), 0 == g ? (v += x) : g < f && (v += 2 * x);
					}
					for (var _ = 0; _ < m.length; _++) m[_] = m[_] / v;
					(u.envMap.value = t.texture),
						(u.samples.value = f),
						(u.weights.value = m),
						(u.latitudinal.value = 'latitudinal' === a),
						o && (u.poleAxis.value = o),
						(u.dTheta.value = d),
						(u.mipInt.value = 8 - n),
						(u.inputEncoding.value = th[t.texture.encoding]),
						(u.outputEncoding.value = th[t.texture.encoding]);
					var b = ih[r];
					fh(
						e,
						3 * Math.max(0, Ju - 2 * b),
						(0 === r ? 0 : 2 * Ju) + 2 * b * (r > 4 ? r - 8 + 4 : 0),
						3 * b,
						2 * b
					),
						s.setRenderTarget(e),
						s.render(l, eh);
				}),
				t
			);
		})();
	function hh(t) {
		return (
			void 0 !== t &&
			t.type === y &&
			(t.encoding === q || t.encoding === X || t.encoding === Y)
		);
	}
	function dh() {
		for (var t = [], e = [], n = [], r = 8, i = 0; i < Ku; i++) {
			var a = Math.pow(2, r);
			e.push(a);
			var o = 1 / a;
			i > 4 ? (o = Qu[i - 8 + 4 - 1]) : 0 == i && (o = 0), n.push(o);
			for (
				var s = 1 / (a - 1),
					c = -s / 2,
					l = 1 + s / 2,
					u = [c, c, l, c, l, l, c, c, l, l, c, l],
					h = new Float32Array(108),
					d = new Float32Array(72),
					p = new Float32Array(36),
					f = 0;
				f < 6;
				f++
			) {
				var m = ((f % 3) * 2) / 3 - 1,
					v = f > 2 ? 0 : -1,
					g = [
						m,
						v,
						0,
						m + 2 / 3,
						v,
						0,
						m + 2 / 3,
						v + 1,
						0,
						m,
						v,
						0,
						m + 2 / 3,
						v + 1,
						0,
						m,
						v + 1,
						0,
					];
				h.set(g, 18 * f), d.set(u, 12 * f);
				var y = [f, f, f, f, f, f];
				p.set(y, 6 * f);
			}
			var x = new vn();
			x.setAttribute('position', new Je(h, 3)),
				x.setAttribute('uv', new Je(d, 2)),
				x.setAttribute('faceIndex', new Je(p, 1)),
				t.push(x),
				r > 4 && r--;
		}
		return { _lodPlanes: t, _sizeLods: e, _sigmas: n };
	}
	function ph(t) {
		var e = new xt(3 * Ju, 3 * Ju, t);
		return (
			(e.texture.mapping = s),
			(e.texture.name = 'PMREM.cubeUv'),
			(e.scissorTest = !0),
			e
		);
	}
	function fh(t, e, n, r, i) {
		t.viewport.set(e, n, r, i), t.scissor.set(e, n, r, i);
	}
	function mh() {
		return new Us({
			name: 'EquirectangularToCubeUV',
			uniforms: {
				envMap: { value: null },
				texelSize: { value: new pt(1, 1) },
				inputEncoding: { value: th[3e3] },
				outputEncoding: { value: th[3e3] },
			},
			vertexShader:
				'\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t',
			fragmentShader:
				'\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t',
			blending: 0,
			depthTest: !1,
			depthWrite: !1,
		});
	}
	function vh() {
		return new Us({
			name: 'CubemapToCubeUV',
			uniforms: {
				envMap: { value: null },
				inputEncoding: { value: th[3e3] },
				outputEncoding: { value: th[3e3] },
			},
			vertexShader:
				'\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t',
			fragmentShader:
				'\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t\n\n\t\tuniform int inputEncoding;\n\t\tuniform int outputEncoding;\n\n\t\t#include <encodings_pars_fragment>\n\n\t\tvec4 inputTexelToLinear( vec4 value ) {\n\n\t\t\tif ( inputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( inputEncoding == 1 ) {\n\n\t\t\t\treturn sRGBToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 2 ) {\n\n\t\t\t\treturn RGBEToLinear( value );\n\n\t\t\t} else if ( inputEncoding == 3 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 7.0 );\n\n\t\t\t} else if ( inputEncoding == 4 ) {\n\n\t\t\t\treturn RGBMToLinear( value, 16.0 );\n\n\t\t\t} else if ( inputEncoding == 5 ) {\n\n\t\t\t\treturn RGBDToLinear( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn GammaToLinear( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 linearToOutputTexel( vec4 value ) {\n\n\t\t\tif ( outputEncoding == 0 ) {\n\n\t\t\t\treturn value;\n\n\t\t\t} else if ( outputEncoding == 1 ) {\n\n\t\t\t\treturn LinearTosRGB( value );\n\n\t\t\t} else if ( outputEncoding == 2 ) {\n\n\t\t\t\treturn LinearToRGBE( value );\n\n\t\t\t} else if ( outputEncoding == 3 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 7.0 );\n\n\t\t\t} else if ( outputEncoding == 4 ) {\n\n\t\t\t\treturn LinearToRGBM( value, 16.0 );\n\n\t\t\t} else if ( outputEncoding == 5 ) {\n\n\t\t\t\treturn LinearToRGBD( value, 256.0 );\n\n\t\t\t} else {\n\n\t\t\t\treturn LinearToGamma( value, 2.2 );\n\n\t\t\t}\n\n\t\t}\n\n\t\tvec4 envMapTexelToLinear( vec4 color ) {\n\n\t\t\treturn inputTexelToLinear( color );\n\n\t\t}\n\t\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;\n\t\t\t\tgl_FragColor = linearToOutputTexel( gl_FragColor );\n\n\t\t\t}\n\t\t',
			blending: 0,
			depthTest: !1,
			depthWrite: !1,
		});
	}
	function gh(t) {
		console.warn(
			'THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.'
		),
			Pc.call(this, t),
			(this.type = 'catmullrom'),
			(this.closed = !0);
	}
	function yh(t) {
		console.warn(
			'THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.'
		),
			Pc.call(this, t),
			(this.type = 'catmullrom');
	}
	function xh(t) {
		console.warn(
			'THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.'
		),
			Pc.call(this, t),
			(this.type = 'catmullrom');
	}
	(Mc.create = function (t, e) {
		return (
			console.log('THREE.Curve.create() has been deprecated'),
			(t.prototype = Object.create(Mc.prototype)),
			(t.prototype.constructor = t),
			(t.prototype.getPoint = e),
			t
		);
	}),
		Object.assign(Vc.prototype, {
			createPointsGeometry: function (t) {
				console.warn(
					'THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'
				);
				var e = this.getPoints(t);
				return this.createGeometry(e);
			},
			createSpacedPointsGeometry: function (t) {
				console.warn(
					'THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'
				);
				var e = this.getSpacedPoints(t);
				return this.createGeometry(e);
			},
			createGeometry: function (t) {
				console.warn(
					'THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.'
				);
				for (var e = new yo(), n = 0, r = t.length; n < r; n++) {
					var i = t[n];
					e.vertices.push(new wt(i.x, i.y, i.z || 0));
				}
				return e;
			},
		}),
		Object.assign(Wc.prototype, {
			fromPoints: function (t) {
				return (
					console.warn(
						'THREE.Path: .fromPoints() has been renamed to .setFromPoints().'
					),
					this.setFromPoints(t)
				);
			},
		}),
		(gh.prototype = Object.create(Pc.prototype)),
		(yh.prototype = Object.create(Pc.prototype)),
		(xh.prototype = Object.create(Pc.prototype)),
		Object.assign(xh.prototype, {
			initFromArray: function () {
				console.error('THREE.Spline: .initFromArray() has been removed.');
			},
			getControlPointsArray: function () {
				console.error(
					'THREE.Spline: .getControlPointsArray() has been removed.'
				);
			},
			reparametrizeByArcLength: function () {
				console.error(
					'THREE.Spline: .reparametrizeByArcLength() has been removed.'
				);
			},
		}),
		(Cu.prototype.setColors = function () {
			console.error(
				'THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.'
			);
		}),
		(Mu.prototype.update = function () {
			console.error(
				'THREE.SkeletonHelper: update() no longer needs to be called.'
			);
		}),
		Object.assign(fc.prototype, {
			extractUrlBase: function (t) {
				return (
					console.warn(
						'THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.'
					),
					sl.extractUrlBase(t)
				);
			},
		}),
		(fc.Handlers = {
			add: function () {
				console.error(
					'THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.'
				);
			},
			get: function () {
				console.error(
					'THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.'
				);
			},
		}),
		Object.assign(pu.prototype, {
			center: function (t) {
				return (
					console.warn(
						'THREE.Box2: .center() has been renamed to .getCenter().'
					),
					this.getCenter(t)
				);
			},
			empty: function () {
				return (
					console.warn('THREE.Box2: .empty() has been renamed to .isEmpty().'),
					this.isEmpty()
				);
			},
			isIntersectionBox: function (t) {
				return (
					console.warn(
						'THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().'
					),
					this.intersectsBox(t)
				);
			},
			size: function (t) {
				return (
					console.warn('THREE.Box2: .size() has been renamed to .getSize().'),
					this.getSize(t)
				);
			},
		}),
		Object.assign(Tt.prototype, {
			center: function (t) {
				return (
					console.warn(
						'THREE.Box3: .center() has been renamed to .getCenter().'
					),
					this.getCenter(t)
				);
			},
			empty: function () {
				return (
					console.warn('THREE.Box3: .empty() has been renamed to .isEmpty().'),
					this.isEmpty()
				);
			},
			isIntersectionBox: function (t) {
				return (
					console.warn(
						'THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().'
					),
					this.intersectsBox(t)
				);
			},
			isIntersectionSphere: function (t) {
				return (
					console.warn(
						'THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().'
					),
					this.intersectsSphere(t)
				);
			},
			size: function (t) {
				return (
					console.warn('THREE.Box3: .size() has been renamed to .getSize().'),
					this.getSize(t)
				);
			},
		}),
		Object.assign(Ht.prototype, {
			empty: function () {
				return (
					console.warn(
						'THREE.Sphere: .empty() has been renamed to .isEmpty().'
					),
					this.isEmpty()
				);
			},
		}),
		(Qn.prototype.setFromMatrix = function (t) {
			return (
				console.warn(
					'THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().'
				),
				this.setFromProjectionMatrix(t)
			);
		}),
		(vu.prototype.center = function (t) {
			return (
				console.warn(
					'THREE.Line3: .center() has been renamed to .getCenter().'
				),
				this.getCenter(t)
			);
		}),
		Object.assign(st, {
			random16: function () {
				return (
					console.warn(
						'THREE.Math: .random16() has been deprecated. Use Math.random() instead.'
					),
					Math.random()
				);
			},
			nearestPowerOfTwo: function (t) {
				return (
					console.warn(
						'THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().'
					),
					st.floorPowerOfTwo(t)
				);
			},
			nextPowerOfTwo: function (t) {
				return (
					console.warn(
						'THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().'
					),
					st.ceilPowerOfTwo(t)
				);
			},
		}),
		Object.assign(ft.prototype, {
			flattenToArrayOffset: function (t, e) {
				return (
					console.warn(
						'THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'
					),
					this.toArray(t, e)
				);
			},
			multiplyVector3: function (t) {
				return (
					console.warn(
						'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.'
					),
					t.applyMatrix3(this)
				);
			},
			multiplyVector3Array: function () {
				console.error(
					'THREE.Matrix3: .multiplyVector3Array() has been removed.'
				);
			},
			applyToBufferAttribute: function (t) {
				return (
					console.warn(
						'THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.'
					),
					t.applyMatrix3(this)
				);
			},
			applyToVector3Array: function () {
				console.error(
					'THREE.Matrix3: .applyToVector3Array() has been removed.'
				);
			},
		}),
		Object.assign(Jt.prototype, {
			extractPosition: function (t) {
				return (
					console.warn(
						'THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().'
					),
					this.copyPosition(t)
				);
			},
			flattenToArrayOffset: function (t, e) {
				return (
					console.warn(
						'THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.'
					),
					this.toArray(t, e)
				);
			},
			getPosition: function () {
				return (
					console.warn(
						'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.'
					),
					new wt().setFromMatrixColumn(this, 3)
				);
			},
			setRotationFromQuaternion: function (t) {
				return (
					console.warn(
						'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().'
					),
					this.makeRotationFromQuaternion(t)
				);
			},
			multiplyToArray: function () {
				console.warn('THREE.Matrix4: .multiplyToArray() has been removed.');
			},
			multiplyVector3: function (t) {
				return (
					console.warn(
						'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.'
					),
					t.applyMatrix4(this)
				);
			},
			multiplyVector4: function (t) {
				return (
					console.warn(
						'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.'
					),
					t.applyMatrix4(this)
				);
			},
			multiplyVector3Array: function () {
				console.error(
					'THREE.Matrix4: .multiplyVector3Array() has been removed.'
				);
			},
			rotateAxis: function (t) {
				console.warn(
					'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.'
				),
					t.transformDirection(this);
			},
			crossVector: function (t) {
				return (
					console.warn(
						'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.'
					),
					t.applyMatrix4(this)
				);
			},
			translate: function () {
				console.error('THREE.Matrix4: .translate() has been removed.');
			},
			rotateX: function () {
				console.error('THREE.Matrix4: .rotateX() has been removed.');
			},
			rotateY: function () {
				console.error('THREE.Matrix4: .rotateY() has been removed.');
			},
			rotateZ: function () {
				console.error('THREE.Matrix4: .rotateZ() has been removed.');
			},
			rotateByAxis: function () {
				console.error('THREE.Matrix4: .rotateByAxis() has been removed.');
			},
			applyToBufferAttribute: function (t) {
				return (
					console.warn(
						'THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.'
					),
					t.applyMatrix4(this)
				);
			},
			applyToVector3Array: function () {
				console.error(
					'THREE.Matrix4: .applyToVector3Array() has been removed.'
				);
			},
			makeFrustum: function (t, e, n, r, i, a) {
				return (
					console.warn(
						'THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.'
					),
					this.makePerspective(t, e, r, n, i, a)
				);
			},
		}),
		(Te.prototype.isIntersectionLine = function (t) {
			return (
				console.warn(
					'THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().'
				),
				this.intersectsLine(t)
			);
		}),
		(bt.prototype.multiplyVector3 = function (t) {
			return (
				console.warn(
					'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.'
				),
				t.applyQuaternion(this)
			);
		}),
		Object.assign(Zt.prototype, {
			isIntersectionBox: function (t) {
				return (
					console.warn(
						'THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().'
					),
					this.intersectsBox(t)
				);
			},
			isIntersectionPlane: function (t) {
				return (
					console.warn(
						'THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().'
					),
					this.intersectsPlane(t)
				);
			},
			isIntersectionSphere: function (t) {
				return (
					console.warn(
						'THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().'
					),
					this.intersectsSphere(t)
				);
			},
		}),
		Object.assign(Be.prototype, {
			area: function () {
				return (
					console.warn(
						'THREE.Triangle: .area() has been renamed to .getArea().'
					),
					this.getArea()
				);
			},
			barycoordFromPoint: function (t, e) {
				return (
					console.warn(
						'THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'
					),
					this.getBarycoord(t, e)
				);
			},
			midpoint: function (t) {
				return (
					console.warn(
						'THREE.Triangle: .midpoint() has been renamed to .getMidpoint().'
					),
					this.getMidpoint(t)
				);
			},
			normal: function (t) {
				return (
					console.warn(
						'THREE.Triangle: .normal() has been renamed to .getNormal().'
					),
					this.getNormal(t)
				);
			},
			plane: function (t) {
				return (
					console.warn(
						'THREE.Triangle: .plane() has been renamed to .getPlane().'
					),
					this.getPlane(t)
				);
			},
		}),
		Object.assign(Be, {
			barycoordFromPoint: function (t, e, n, r, i) {
				return (
					console.warn(
						'THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().'
					),
					Be.getBarycoord(t, e, n, r, i)
				);
			},
			normal: function (t, e, n, r) {
				return (
					console.warn(
						'THREE.Triangle: .normal() has been renamed to .getNormal().'
					),
					Be.getNormal(t, e, n, r)
				);
			},
		}),
		Object.assign(jc.prototype, {
			extractAllPoints: function (t) {
				return (
					console.warn(
						'THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.'
					),
					this.extractPoints(t)
				);
			},
			extrude: function (t) {
				return (
					console.warn(
						'THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.'
					),
					new us(this, t)
				);
			},
			makeGeometry: function (t) {
				return (
					console.warn(
						'THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.'
					),
					new Ss(this, t)
				);
			},
		}),
		Object.assign(pt.prototype, {
			fromAttribute: function (t, e, n) {
				return (
					console.warn(
						'THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().'
					),
					this.fromBufferAttribute(t, e, n)
				);
			},
			distanceToManhattan: function (t) {
				return (
					console.warn(
						'THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'
					),
					this.manhattanDistanceTo(t)
				);
			},
			lengthManhattan: function () {
				return (
					console.warn(
						'THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().'
					),
					this.manhattanLength()
				);
			},
		}),
		Object.assign(wt.prototype, {
			setEulerFromRotationMatrix: function () {
				console.error(
					'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.'
				);
			},
			setEulerFromQuaternion: function () {
				console.error(
					'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.'
				);
			},
			getPositionFromMatrix: function (t) {
				return (
					console.warn(
						'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().'
					),
					this.setFromMatrixPosition(t)
				);
			},
			getScaleFromMatrix: function (t) {
				return (
					console.warn(
						'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().'
					),
					this.setFromMatrixScale(t)
				);
			},
			getColumnFromMatrix: function (t, e) {
				return (
					console.warn(
						'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().'
					),
					this.setFromMatrixColumn(e, t)
				);
			},
			applyProjection: function (t) {
				return (
					console.warn(
						'THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.'
					),
					this.applyMatrix4(t)
				);
			},
			fromAttribute: function (t, e, n) {
				return (
					console.warn(
						'THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().'
					),
					this.fromBufferAttribute(t, e, n)
				);
			},
			distanceToManhattan: function (t) {
				return (
					console.warn(
						'THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().'
					),
					this.manhattanDistanceTo(t)
				);
			},
			lengthManhattan: function () {
				return (
					console.warn(
						'THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().'
					),
					this.manhattanLength()
				);
			},
		}),
		Object.assign(yt.prototype, {
			fromAttribute: function (t, e, n) {
				return (
					console.warn(
						'THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().'
					),
					this.fromBufferAttribute(t, e, n)
				);
			},
			lengthManhattan: function () {
				return (
					console.warn(
						'THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().'
					),
					this.manhattanLength()
				);
			},
		}),
		Object.assign(yo.prototype, {
			computeTangents: function () {
				console.error('THREE.Geometry: .computeTangents() has been removed.');
			},
			computeLineDistances: function () {
				console.error(
					'THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.'
				);
			},
			applyMatrix: function (t) {
				return (
					console.warn(
						'THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4().'
					),
					this.applyMatrix4(t)
				);
			},
		}),
		Object.assign(be.prototype, {
			getChildByName: function (t) {
				return (
					console.warn(
						'THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().'
					),
					this.getObjectByName(t)
				);
			},
			renderDepth: function () {
				console.warn(
					'THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.'
				);
			},
			translate: function (t, e) {
				return (
					console.warn(
						'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.'
					),
					this.translateOnAxis(e, t)
				);
			},
			getWorldRotation: function () {
				console.error(
					'THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.'
				);
			},
			applyMatrix: function (t) {
				return (
					console.warn(
						'THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().'
					),
					this.applyMatrix4(t)
				);
			},
		}),
		Object.defineProperties(be.prototype, {
			eulerOrder: {
				get: function () {
					return (
						console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'),
						this.rotation.order
					);
				},
				set: function (t) {
					console.warn('THREE.Object3D: .eulerOrder is now .rotation.order.'),
						(this.rotation.order = t);
				},
			},
			useQuaternion: {
				get: function () {
					console.warn(
						'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
					);
				},
				set: function () {
					console.warn(
						'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
					);
				},
			},
		}),
		Object.assign(Nn.prototype, {
			setDrawMode: function () {
				console.error(
					'THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.'
				);
			},
		}),
		Object.defineProperties(Nn.prototype, {
			drawMode: {
				get: function () {
					return (
						console.error(
							'THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.'
						),
						0
					);
				},
				set: function () {
					console.error(
						'THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.'
					);
				},
			},
		}),
		Object.defineProperties(Na.prototype, {
			objects: {
				get: function () {
					return (
						console.warn('THREE.LOD: .objects has been renamed to .levels.'),
						this.levels
					);
				},
			},
		}),
		Object.defineProperty(Ga.prototype, 'useVertexTexture', {
			get: function () {
				console.warn('THREE.Skeleton: useVertexTexture has been removed.');
			},
			set: function () {
				console.warn('THREE.Skeleton: useVertexTexture has been removed.');
			},
		}),
		(Oa.prototype.initBones = function () {
			console.error('THREE.SkinnedMesh: initBones() has been removed.');
		}),
		Object.defineProperty(Mc.prototype, '__arcLengthDivisions', {
			get: function () {
				return (
					console.warn(
						'THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'
					),
					this.arcLengthDivisions
				);
			},
			set: function (t) {
				console.warn(
					'THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.'
				),
					(this.arcLengthDivisions = t);
			},
		}),
		(Vn.prototype.setLens = function (t, e) {
			console.warn(
				'THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.'
			),
				void 0 !== e && (this.filmGauge = e),
				this.setFocalLength(t);
		}),
		Object.defineProperties(qc.prototype, {
			onlyShadow: {
				set: function () {
					console.warn('THREE.Light: .onlyShadow has been removed.');
				},
			},
			shadowCameraFov: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowCameraFov is now .shadow.camera.fov.'
					),
						(this.shadow.camera.fov = t);
				},
			},
			shadowCameraLeft: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowCameraLeft is now .shadow.camera.left.'
					),
						(this.shadow.camera.left = t);
				},
			},
			shadowCameraRight: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowCameraRight is now .shadow.camera.right.'
					),
						(this.shadow.camera.right = t);
				},
			},
			shadowCameraTop: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowCameraTop is now .shadow.camera.top.'
					),
						(this.shadow.camera.top = t);
				},
			},
			shadowCameraBottom: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.'
					),
						(this.shadow.camera.bottom = t);
				},
			},
			shadowCameraNear: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowCameraNear is now .shadow.camera.near.'
					),
						(this.shadow.camera.near = t);
				},
			},
			shadowCameraFar: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowCameraFar is now .shadow.camera.far.'
					),
						(this.shadow.camera.far = t);
				},
			},
			shadowCameraVisible: {
				set: function () {
					console.warn(
						'THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.'
					);
				},
			},
			shadowBias: {
				set: function (t) {
					console.warn('THREE.Light: .shadowBias is now .shadow.bias.'),
						(this.shadow.bias = t);
				},
			},
			shadowDarkness: {
				set: function () {
					console.warn('THREE.Light: .shadowDarkness has been removed.');
				},
			},
			shadowMapWidth: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.'
					),
						(this.shadow.mapSize.width = t);
				},
			},
			shadowMapHeight: {
				set: function (t) {
					console.warn(
						'THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.'
					),
						(this.shadow.mapSize.height = t);
				},
			},
		}),
		Object.defineProperties(Je.prototype, {
			length: {
				get: function () {
					return (
						console.warn(
							'THREE.BufferAttribute: .length has been deprecated. Use .count instead.'
						),
						this.array.length
					);
				},
			},
			dynamic: {
				get: function () {
					return (
						console.warn(
							'THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'
						),
						this.usage === et
					);
				},
				set: function () {
					console.warn(
						'THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.'
					),
						this.setUsage(et);
				},
			},
		}),
		Object.assign(Je.prototype, {
			setDynamic: function (t) {
				return (
					console.warn(
						'THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.'
					),
					this.setUsage(!0 === t ? et : tt),
					this
				);
			},
			copyIndicesArray: function () {
				console.error(
					'THREE.BufferAttribute: .copyIndicesArray() has been removed.'
				);
			},
			setArray: function () {
				console.error(
					'THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers'
				);
			},
		}),
		Object.assign(vn.prototype, {
			addIndex: function (t) {
				console.warn(
					'THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().'
				),
					this.setIndex(t);
			},
			addAttribute: function (t, e) {
				return (
					console.warn(
						'THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().'
					),
					(e && e.isBufferAttribute) || (e && e.isInterleavedBufferAttribute)
						? 'index' === t
							? (console.warn(
									'THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.'
							  ),
							  this.setIndex(e),
							  this)
							: this.setAttribute(t, e)
						: (console.warn(
								'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).'
						  ),
						  this.setAttribute(t, new Je(arguments[1], arguments[2])))
				);
			},
			addDrawCall: function (t, e, n) {
				void 0 !== n &&
					console.warn(
						'THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.'
					),
					console.warn(
						'THREE.BufferGeometry: .addDrawCall() is now .addGroup().'
					),
					this.addGroup(t, e);
			},
			clearDrawCalls: function () {
				console.warn(
					'THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().'
				),
					this.clearGroups();
			},
			computeTangents: function () {
				console.warn(
					'THREE.BufferGeometry: .computeTangents() has been removed.'
				);
			},
			computeOffsets: function () {
				console.warn(
					'THREE.BufferGeometry: .computeOffsets() has been removed.'
				);
			},
			removeAttribute: function (t) {
				return (
					console.warn(
						'THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().'
					),
					this.deleteAttribute(t)
				);
			},
			applyMatrix: function (t) {
				return (
					console.warn(
						'THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().'
					),
					this.applyMatrix4(t)
				);
			},
		}),
		Object.defineProperties(vn.prototype, {
			drawcalls: {
				get: function () {
					return (
						console.error(
							'THREE.BufferGeometry: .drawcalls has been renamed to .groups.'
						),
						this.groups
					);
				},
			},
			offsets: {
				get: function () {
					return (
						console.warn(
							'THREE.BufferGeometry: .offsets has been renamed to .groups.'
						),
						this.groups
					);
				},
			},
		}),
		Object.defineProperties(cl.prototype, {
			maxInstancedCount: {
				get: function () {
					return (
						console.warn(
							'THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.'
						),
						this.instanceCount
					);
				},
				set: function (t) {
					console.warn(
						'THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.'
					),
						(this.instanceCount = t);
				},
			},
		}),
		Object.defineProperties(su.prototype, {
			linePrecision: {
				get: function () {
					return (
						console.warn(
							'THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.'
						),
						this.params.Line.threshold
					);
				},
				set: function (t) {
					console.warn(
						'THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.'
					),
						(this.params.Line.threshold = t);
				},
			},
		}),
		Object.defineProperties(ca.prototype, {
			dynamic: {
				get: function () {
					return (
						console.warn(
							'THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.'
						),
						this.usage === et
					);
				},
				set: function (t) {
					console.warn(
						'THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.'
					),
						this.setUsage(t);
				},
			},
		}),
		Object.assign(ca.prototype, {
			setDynamic: function (t) {
				return (
					console.warn(
						'THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.'
					),
					this.setUsage(!0 === t ? et : tt),
					this
				);
			},
			setArray: function () {
				console.error(
					'THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers'
				);
			},
		}),
		Object.assign(cs.prototype, {
			getArrays: function () {
				console.error(
					'THREE.ExtrudeBufferGeometry: .getArrays() has been removed.'
				);
			},
			addShapeList: function () {
				console.error(
					'THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.'
				);
			},
			addShape: function () {
				console.error(
					'THREE.ExtrudeBufferGeometry: .addShape() has been removed.'
				);
			},
		}),
		Object.assign(sa.prototype, {
			dispose: function () {
				console.error('THREE.Scene: .dispose() has been removed.');
			},
		}),
		Object.defineProperties(iu.prototype, {
			dynamic: {
				set: function () {
					console.warn(
						'THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.'
					);
				},
			},
			onUpdate: {
				value: function () {
					return (
						console.warn(
							'THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.'
						),
						this
					);
				},
			},
		}),
		Object.defineProperties(qe.prototype, {
			wrapAround: {
				get: function () {
					console.warn('THREE.Material: .wrapAround has been removed.');
				},
				set: function () {
					console.warn('THREE.Material: .wrapAround has been removed.');
				},
			},
			overdraw: {
				get: function () {
					console.warn('THREE.Material: .overdraw has been removed.');
				},
				set: function () {
					console.warn('THREE.Material: .overdraw has been removed.');
				},
			},
			wrapRGB: {
				get: function () {
					return (
						console.warn('THREE.Material: .wrapRGB has been removed.'), new Ve()
					);
				},
			},
			shading: {
				get: function () {
					console.error(
						'THREE.' +
							this.type +
							': .shading has been removed. Use the boolean .flatShading instead.'
					);
				},
				set: function (t) {
					console.warn(
						'THREE.' +
							this.type +
							': .shading has been removed. Use the boolean .flatShading instead.'
					),
						(this.flatShading = 1 === t);
				},
			},
			stencilMask: {
				get: function () {
					return (
						console.warn(
							'THREE.' +
								this.type +
								': .stencilMask has been removed. Use .stencilFuncMask instead.'
						),
						this.stencilFuncMask
					);
				},
				set: function (t) {
					console.warn(
						'THREE.' +
							this.type +
							': .stencilMask has been removed. Use .stencilFuncMask instead.'
					),
						(this.stencilFuncMask = t);
				},
			},
		}),
		Object.defineProperties(Vs.prototype, {
			metal: {
				get: function () {
					return (
						console.warn(
							'THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.'
						),
						!1
					);
				},
				set: function () {
					console.warn(
						'THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead'
					);
				},
			},
		}),
		Object.defineProperties(ks.prototype, {
			transparency: {
				get: function () {
					return (
						console.warn(
							'THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.'
						),
						this.transmission
					);
				},
				set: function (t) {
					console.warn(
						'THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission.'
					),
						(this.transmission = t);
				},
			},
		}),
		Object.defineProperties(Hn.prototype, {
			derivatives: {
				get: function () {
					return (
						console.warn(
							'THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'
						),
						this.extensions.derivatives
					);
				},
				set: function (t) {
					console.warn(
						'THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.'
					),
						(this.extensions.derivatives = t);
				},
			},
		}),
		Object.assign(ra.prototype, {
			clearTarget: function (t, e, n, r) {
				console.warn(
					'THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.'
				),
					this.setRenderTarget(t),
					this.clear(e, n, r);
			},
			animate: function (t) {
				console.warn(
					'THREE.WebGLRenderer: .animate() is now .setAnimationLoop().'
				),
					this.setAnimationLoop(t);
			},
			getCurrentRenderTarget: function () {
				return (
					console.warn(
						'THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().'
					),
					this.getRenderTarget()
				);
			},
			getMaxAnisotropy: function () {
				return (
					console.warn(
						'THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().'
					),
					this.capabilities.getMaxAnisotropy()
				);
			},
			getPrecision: function () {
				return (
					console.warn(
						'THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.'
					),
					this.capabilities.precision
				);
			},
			resetGLState: function () {
				return (
					console.warn(
						'THREE.WebGLRenderer: .resetGLState() is now .state.reset().'
					),
					this.state.reset()
				);
			},
			supportsFloatTextures: function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."
					),
					this.extensions.get('OES_texture_float')
				);
			},
			supportsHalfFloatTextures: function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."
					),
					this.extensions.get('OES_texture_half_float')
				);
			},
			supportsStandardDerivatives: function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."
					),
					this.extensions.get('OES_standard_derivatives')
				);
			},
			supportsCompressedTextureS3TC: function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."
					),
					this.extensions.get('WEBGL_compressed_texture_s3tc')
				);
			},
			supportsCompressedTexturePVRTC: function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."
					),
					this.extensions.get('WEBGL_compressed_texture_pvrtc')
				);
			},
			supportsBlendMinMax: function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."
					),
					this.extensions.get('EXT_blend_minmax')
				);
			},
			supportsVertexTextures: function () {
				return (
					console.warn(
						'THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.'
					),
					this.capabilities.vertexTextures
				);
			},
			supportsInstancedArrays: function () {
				return (
					console.warn(
						"THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."
					),
					this.extensions.get('ANGLE_instanced_arrays')
				);
			},
			enableScissorTest: function (t) {
				console.warn(
					'THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().'
				),
					this.setScissorTest(t);
			},
			initMaterial: function () {
				console.warn('THREE.WebGLRenderer: .initMaterial() has been removed.');
			},
			addPrePlugin: function () {
				console.warn('THREE.WebGLRenderer: .addPrePlugin() has been removed.');
			},
			addPostPlugin: function () {
				console.warn('THREE.WebGLRenderer: .addPostPlugin() has been removed.');
			},
			updateShadowMap: function () {
				console.warn(
					'THREE.WebGLRenderer: .updateShadowMap() has been removed.'
				);
			},
			setFaceCulling: function () {
				console.warn(
					'THREE.WebGLRenderer: .setFaceCulling() has been removed.'
				);
			},
			allocTextureUnit: function () {
				console.warn(
					'THREE.WebGLRenderer: .allocTextureUnit() has been removed.'
				);
			},
			setTexture: function () {
				console.warn('THREE.WebGLRenderer: .setTexture() has been removed.');
			},
			setTexture2D: function () {
				console.warn('THREE.WebGLRenderer: .setTexture2D() has been removed.');
			},
			setTextureCube: function () {
				console.warn(
					'THREE.WebGLRenderer: .setTextureCube() has been removed.'
				);
			},
			getActiveMipMapLevel: function () {
				return (
					console.warn(
						'THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().'
					),
					this.getActiveMipmapLevel()
				);
			},
		}),
		Object.defineProperties(ra.prototype, {
			shadowMapEnabled: {
				get: function () {
					return this.shadowMap.enabled;
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.'
					),
						(this.shadowMap.enabled = t);
				},
			},
			shadowMapType: {
				get: function () {
					return this.shadowMap.type;
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.'
					),
						(this.shadowMap.type = t);
				},
			},
			shadowMapCullFace: {
				get: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'
					);
				},
				set: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.'
					);
				},
			},
			context: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.'
						),
						this.getContext()
					);
				},
			},
			vr: {
				get: function () {
					return (
						console.warn('THREE.WebGLRenderer: .vr has been renamed to .xr'),
						this.xr
					);
				},
			},
			gammaInput: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.'
						),
						!1
					);
				},
				set: function () {
					console.warn(
						'THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.'
					);
				},
			},
			gammaOutput: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.'
						),
						!1
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.'
					),
						(this.outputEncoding = !0 === t ? X : q);
				},
			},
			toneMappingWhitePoint: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.'
						),
						1
					);
				},
				set: function () {
					console.warn(
						'THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.'
					);
				},
			},
		}),
		Object.defineProperties(Yi.prototype, {
			cullFace: {
				get: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'
					);
				},
				set: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.'
					);
				},
			},
			renderReverseSided: {
				get: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'
					);
				},
				set: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.'
					);
				},
			},
			renderSingleSided: {
				get: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'
					);
				},
				set: function () {
					console.warn(
						'THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.'
					);
				},
			},
		}),
		Object.defineProperties(xt.prototype, {
			wrapS: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'
						),
						this.texture.wrapS
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.'
					),
						(this.texture.wrapS = t);
				},
			},
			wrapT: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'
						),
						this.texture.wrapT
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.'
					),
						(this.texture.wrapT = t);
				},
			},
			magFilter: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'
						),
						this.texture.magFilter
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.'
					),
						(this.texture.magFilter = t);
				},
			},
			minFilter: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'
						),
						this.texture.minFilter
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.'
					),
						(this.texture.minFilter = t);
				},
			},
			anisotropy: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'
						),
						this.texture.anisotropy
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.'
					),
						(this.texture.anisotropy = t);
				},
			},
			offset: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .offset is now .texture.offset.'
						),
						this.texture.offset
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .offset is now .texture.offset.'
					),
						(this.texture.offset = t);
				},
			},
			repeat: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'
						),
						this.texture.repeat
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .repeat is now .texture.repeat.'
					),
						(this.texture.repeat = t);
				},
			},
			format: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .format is now .texture.format.'
						),
						this.texture.format
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .format is now .texture.format.'
					),
						(this.texture.format = t);
				},
			},
			type: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .type is now .texture.type.'
						),
						this.texture.type
					);
				},
				set: function (t) {
					console.warn('THREE.WebGLRenderTarget: .type is now .texture.type.'),
						(this.texture.type = t);
				},
			},
			generateMipmaps: {
				get: function () {
					return (
						console.warn(
							'THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'
						),
						this.texture.generateMipmaps
					);
				},
				set: function (t) {
					console.warn(
						'THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.'
					),
						(this.texture.generateMipmaps = t);
				},
			},
		}),
		Object.defineProperties(Ol.prototype, {
			load: {
				value: function (t) {
					console.warn(
						'THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.'
					);
					var e = this;
					return (
						new Ml().load(t, function (t) {
							e.setBuffer(t);
						}),
						this
					);
				},
			},
			startTime: {
				set: function () {
					console.warn('THREE.Audio: .startTime is now .play( delay ).');
				},
			},
		}),
		(Hl.prototype.getData = function () {
			return (
				console.warn(
					'THREE.AudioAnalyser: .getData() is now .getFrequencyData().'
				),
				this.getFrequencyData()
			);
		}),
		(jn.prototype.updateCubeMap = function (t, e) {
			return (
				console.warn('THREE.CubeCamera: .updateCubeMap() is now .update().'),
				this.update(t, e)
			);
		});
	var _h = {
		merge: function (t, e, n) {
			var r;
			console.warn(
				'THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.'
			),
				e.isMesh &&
					(e.matrixAutoUpdate && e.updateMatrix(),
					(r = e.matrix),
					(e = e.geometry)),
				t.merge(e, r, n);
		},
		center: function (t) {
			return (
				console.warn(
					'THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.'
				),
				t.center()
			);
		},
	};
	(mt.crossOrigin = void 0),
		(mt.loadTexture = function (t, e, n, r) {
			console.warn(
				'THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.'
			);
			var i = new wc();
			i.setCrossOrigin(this.crossOrigin);
			var a = i.load(t, n, void 0, r);
			return e && (a.mapping = e), a;
		}),
		(mt.loadTextureCube = function (t, e, n, r) {
			console.warn(
				'THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.'
			);
			var i = new _c();
			i.setCrossOrigin(this.crossOrigin);
			var a = i.load(t, n, void 0, r);
			return e && (a.mapping = e), a;
		}),
		(mt.loadCompressedTexture = function () {
			console.error(
				'THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.'
			);
		}),
		(mt.loadCompressedTextureCube = function () {
			console.error(
				'THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.'
			);
		});
	var bh = {
		createMultiMaterialObject: function () {
			console.error(
				'THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js'
			);
		},
		detach: function () {
			console.error(
				'THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js'
			);
		},
		attach: function () {
			console.error(
				'THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js'
			);
		},
	};
	'undefined' != typeof __THREE_DEVTOOLS__ &&
		__THREE_DEVTOOLS__.dispatchEvent(
			new CustomEvent('register', { detail: { revision: '121' } })
		),
		(t.ACESFilmicToneMapping = 4),
		(t.AddEquation = e),
		(t.AddOperation = 2),
		(t.AdditiveAnimationBlendMode = j),
		(t.AdditiveBlending = 2),
		(t.AlphaFormat = 1021),
		(t.AlwaysDepth = 1),
		(t.AlwaysStencilFunc = 519),
		(t.AmbientLight = nl),
		(t.AmbientLightProbe = Tl),
		(t.AnimationClip = lc),
		(t.AnimationLoader = gc),
		(t.AnimationMixer = ru),
		(t.AnimationObjectGroup = eu),
		(t.AnimationUtils = Js),
		(t.ArcCurve = Tc),
		(t.ArrayCamera = Ki),
		(t.ArrowHelper = Yu),
		(t.Audio = Ol),
		(t.AudioAnalyser = Hl),
		(t.AudioContext = wl),
		(t.AudioListener = Nl),
		(t.AudioLoader = Ml),
		(t.AxesHelper = Zu),
		(t.AxisHelper = function (t) {
			return (
				console.warn('THREE.AxisHelper has been renamed to THREE.AxesHelper.'),
				new Zu(t)
			);
		}),
		(t.BackSide = 1),
		(t.BasicDepthPacking = 3200),
		(t.BasicShadowMap = 0),
		(t.BinaryTextureLoader = function (t) {
			return (
				console.warn(
					'THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.'
				),
				new bc(t)
			);
		}),
		(t.Bone = Fa),
		(t.BooleanKeyframeTrack = nc),
		(t.BoundingBoxHelper = function (t, e) {
			return (
				console.warn(
					'THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.'
				),
				new Wu(t, e)
			);
		}),
		(t.Box2 = pu),
		(t.Box3 = Tt),
		(t.Box3Helper = ju),
		(t.BoxBufferGeometry = zn),
		(t.BoxGeometry = xo),
		(t.BoxHelper = Wu),
		(t.BufferAttribute = Je),
		(t.BufferGeometry = vn),
		(t.BufferGeometryLoader = ul),
		(t.ByteType = 1010),
		(t.Cache = hc),
		(t.Camera = kn),
		(t.CameraHelper = Gu),
		(t.CanvasRenderer = function () {
			console.error('THREE.CanvasRenderer has been removed');
		}),
		(t.CanvasTexture = ho),
		(t.CatmullRomCurve3 = Pc),
		(t.CineonToneMapping = 3),
		(t.CircleBufferGeometry = _o),
		(t.CircleGeometry = bo),
		(t.ClampToEdgeWrapping = u),
		(t.Clock = Rl),
		(t.ClosedSplineCurve3 = gh),
		(t.Color = Ve),
		(t.ColorKeyframeTrack = rc),
		(t.CompressedTexture = uo),
		(t.CompressedTextureLoader = yc),
		(t.ConeBufferGeometry = To),
		(t.ConeGeometry = So),
		(t.CubeCamera = jn),
		(t.CubeGeometry = xo),
		(t.CubeReflectionMapping = r),
		(t.CubeRefractionMapping = i),
		(t.CubeTexture = qn),
		(t.CubeTextureLoader = _c),
		(t.CubeUVReflectionMapping = s),
		(t.CubeUVRefractionMapping = c),
		(t.CubicBezierCurve = Oc),
		(t.CubicBezierCurve3 = Bc),
		(t.CubicInterpolant = Ks),
		(t.CullFaceBack = 1),
		(t.CullFaceFront = 2),
		(t.CullFaceFrontBack = 3),
		(t.CullFaceNone = 0),
		(t.Curve = Mc),
		(t.CurvePath = Vc),
		(t.CustomBlending = 5),
		(t.CustomToneMapping = 5),
		(t.CylinderBufferGeometry = wo),
		(t.CylinderGeometry = Mo),
		(t.Cylindrical = hu),
		(t.DataTexture = Yn),
		(t.DataTexture2DArray = yr),
		(t.DataTexture3D = xr),
		(t.DataTextureLoader = bc),
		(t.DecrementStencilOp = 7683),
		(t.DecrementWrapStencilOp = 34056),
		(t.DefaultLoadingManager = pc),
		(t.DepthFormat = E),
		(t.DepthStencilFormat = A),
		(t.DepthTexture = po),
		(t.DirectionalLight = el),
		(t.DirectionalLightHelper = Ou),
		(t.DiscreteInterpolant = tc),
		(t.DodecahedronBufferGeometry = Ao),
		(t.DodecahedronGeometry = Lo),
		(t.DoubleSide = 2),
		(t.DstAlphaFactor = 206),
		(t.DstColorFactor = 208),
		(t.DynamicBufferAttribute = function (t, e) {
			return (
				console.warn(
					'THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.'
				),
				new Je(t, e).setUsage(et)
			);
		}),
		(t.DynamicCopyUsage = 35050),
		(t.DynamicDrawUsage = et),
		(t.DynamicReadUsage = 35049),
		(t.EdgesGeometry = Do),
		(t.EdgesHelper = function (t, e) {
			return (
				console.warn(
					'THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.'
				),
				new to(
					new Do(t.geometry),
					new ja({ color: void 0 !== e ? e : 16777215 })
				)
			);
		}),
		(t.EllipseCurve = Sc),
		(t.EqualDepth = 4),
		(t.EqualStencilFunc = 514),
		(t.EquirectangularReflectionMapping = a),
		(t.EquirectangularRefractionMapping = o),
		(t.Euler = ie),
		(t.EventDispatcher = rt),
		(t.ExtrudeBufferGeometry = cs),
		(t.ExtrudeGeometry = us),
		(t.Face3 = We),
		(t.Face4 = function (t, e, n, r, i, a, o) {
			return (
				console.warn(
					'THREE.Face4 has been removed. A THREE.Face3 will be created instead.'
				),
				new We(t, e, n, i, a, o)
			);
		}),
		(t.FaceColors = 1),
		(t.FileLoader = vc),
		(t.FlatShading = 1),
		(t.Float32Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.'
				),
				new an(t, e)
			);
		}),
		(t.Float32BufferAttribute = an),
		(t.Float64Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.'
				),
				new on(t, e)
			);
		}),
		(t.Float64BufferAttribute = on),
		(t.FloatType = b),
		(t.Fog = oa),
		(t.FogExp2 = aa),
		(t.Font = xl),
		(t.FontLoader = bl),
		(t.FrontSide = 0),
		(t.Frustum = Qn),
		(t.GLBufferAttribute = ou),
		(t.GLSL1 = '100'),
		(t.GLSL3 = nt),
		(t.GammaEncoding = Y),
		(t.Geometry = yo),
		(t.GeometryUtils = _h),
		(t.GreaterDepth = 6),
		(t.GreaterEqualDepth = 5),
		(t.GreaterEqualStencilFunc = 518),
		(t.GreaterStencilFunc = 516),
		(t.GridHelper = Cu),
		(t.Group = $i),
		(t.HalfFloatType = w),
		(t.HemisphereLight = Xc),
		(t.HemisphereLightHelper = Ru),
		(t.HemisphereLightProbe = Sl),
		(t.IcosahedronBufferGeometry = hs),
		(t.IcosahedronGeometry = ds),
		(t.ImageBitmapLoader = gl),
		(t.ImageLoader = xc),
		(t.ImageUtils = mt),
		(t.ImmediateRenderObject = gu),
		(t.IncrementStencilOp = 7682),
		(t.IncrementWrapStencilOp = 34055),
		(t.InstancedBufferAttribute = ll),
		(t.InstancedBufferGeometry = cl),
		(t.InstancedInterleavedBuffer = au),
		(t.InstancedMesh = Wa),
		(t.Int16Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.'
				),
				new tn(t, e)
			);
		}),
		(t.Int16BufferAttribute = tn),
		(t.Int32Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.'
				),
				new nn(t, e)
			);
		}),
		(t.Int32BufferAttribute = nn),
		(t.Int8Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.'
				),
				new Qe(t, e)
			);
		}),
		(t.Int8BufferAttribute = Qe),
		(t.IntType = 1013),
		(t.InterleavedBuffer = ca),
		(t.InterleavedBufferAttribute = ha),
		(t.Interpolant = Qs),
		(t.InterpolateDiscrete = G),
		(t.InterpolateLinear = F),
		(t.InterpolateSmooth = U),
		(t.InvertStencilOp = 5386),
		(t.JSONLoader = function () {
			console.error('THREE.JSONLoader has been removed.');
		}),
		(t.KeepStencilOp = $),
		(t.KeyframeTrack = ec),
		(t.LOD = Na),
		(t.LatheBufferGeometry = ps),
		(t.LatheGeometry = fs),
		(t.Layers = se),
		(t.LensFlare = function () {
			console.error(
				'THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js'
			);
		}),
		(t.LessDepth = 2),
		(t.LessEqualDepth = 3),
		(t.LessEqualStencilFunc = 515),
		(t.LessStencilFunc = 513),
		(t.Light = qc),
		(t.LightProbe = al),
		(t.Line = Qa),
		(t.Line3 = vu),
		(t.LineBasicMaterial = ja),
		(t.LineCurve = zc),
		(t.LineCurve3 = Gc),
		(t.LineDashedMaterial = Ys),
		(t.LineLoop = eo),
		(t.LinePieces = 1),
		(t.LineSegments = to),
		(t.LineStrip = 0),
		(t.LinearEncoding = q),
		(t.LinearFilter = m),
		(t.LinearInterpolant = $s),
		(t.LinearMipMapLinearFilter = 1008),
		(t.LinearMipMapNearestFilter = 1007),
		(t.LinearMipmapLinearFilter = g),
		(t.LinearMipmapNearestFilter = v),
		(t.LinearToneMapping = 1),
		(t.Loader = fc),
		(t.LoaderUtils = sl),
		(t.LoadingManager = dc),
		(t.LogLuvEncoding = 3003),
		(t.LoopOnce = 2200),
		(t.LoopPingPong = 2202),
		(t.LoopRepeat = 2201),
		(t.LuminanceAlphaFormat = 1025),
		(t.LuminanceFormat = 1024),
		(t.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }),
		(t.Material = qe),
		(t.MaterialLoader = ol),
		(t.Math = st),
		(t.MathUtils = st),
		(t.Matrix3 = ft),
		(t.Matrix4 = Jt),
		(t.MaxEquation = 104),
		(t.Mesh = Nn),
		(t.MeshBasicMaterial = Xe),
		(t.MeshDepthMaterial = qi),
		(t.MeshDistanceMaterial = Xi),
		(t.MeshFaceMaterial = function (t) {
			return (
				console.warn(
					'THREE.MeshFaceMaterial has been removed. Use an Array instead.'
				),
				t
			);
		}),
		(t.MeshLambertMaterial = qs),
		(t.MeshMatcapMaterial = Xs),
		(t.MeshNormalMaterial = js),
		(t.MeshPhongMaterial = Vs),
		(t.MeshPhysicalMaterial = ks),
		(t.MeshStandardMaterial = Hs),
		(t.MeshToonMaterial = Ws),
		(t.MinEquation = 103),
		(t.MirroredRepeatWrapping = h),
		(t.MixOperation = 1),
		(t.MultiMaterial = function (t) {
			return (
				void 0 === t && (t = []),
				console.warn(
					'THREE.MultiMaterial has been removed. Use an Array instead.'
				),
				(t.isMultiMaterial = !0),
				(t.materials = t),
				(t.clone = function () {
					return t.slice();
				}),
				t
			);
		}),
		(t.MultiplyBlending = 4),
		(t.MultiplyOperation = 0),
		(t.NearestFilter = d),
		(t.NearestMipMapLinearFilter = 1005),
		(t.NearestMipMapNearestFilter = 1004),
		(t.NearestMipmapLinearFilter = f),
		(t.NearestMipmapNearestFilter = p),
		(t.NeverDepth = 0),
		(t.NeverStencilFunc = 512),
		(t.NoBlending = 0),
		(t.NoColors = 0),
		(t.NoToneMapping = 0),
		(t.NormalAnimationBlendMode = W),
		(t.NormalBlending = 1),
		(t.NotEqualDepth = 7),
		(t.NotEqualStencilFunc = 517),
		(t.NumberKeyframeTrack = ic),
		(t.Object3D = be),
		(t.ObjectLoader = pl),
		(t.ObjectSpaceNormalMap = 1),
		(t.OctahedronBufferGeometry = ms),
		(t.OctahedronGeometry = vs),
		(t.OneFactor = 201),
		(t.OneMinusDstAlphaFactor = 207),
		(t.OneMinusDstColorFactor = 209),
		(t.OneMinusSrcAlphaFactor = 205),
		(t.OneMinusSrcColorFactor = 203),
		(t.OrthographicCamera = $c),
		(t.PCFShadowMap = 1),
		(t.PCFSoftShadowMap = 2),
		(t.PMREMGenerator = uh),
		(t.ParametricBufferGeometry = gs),
		(t.ParametricGeometry = ys),
		(t.Particle = function (t) {
			return (
				console.warn('THREE.Particle has been renamed to THREE.Sprite.'),
				new Ta(t)
			);
		}),
		(t.ParticleBasicMaterial = function (t) {
			return (
				console.warn(
					'THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.'
				),
				new no(t)
			);
		}),
		(t.ParticleSystem = function (t, e) {
			return (
				console.warn('THREE.ParticleSystem has been renamed to THREE.Points.'),
				new so(t, e)
			);
		}),
		(t.ParticleSystemMaterial = function (t) {
			return (
				console.warn(
					'THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.'
				),
				new no(t)
			);
		}),
		(t.Path = Wc),
		(t.PerspectiveCamera = Vn),
		(t.Plane = Te),
		(t.PlaneBufferGeometry = tr),
		(t.PlaneGeometry = xs),
		(t.PlaneHelper = qu),
		(t.PointCloud = function (t, e) {
			return (
				console.warn('THREE.PointCloud has been renamed to THREE.Points.'),
				new so(t, e)
			);
		}),
		(t.PointCloudMaterial = function (t) {
			return (
				console.warn(
					'THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.'
				),
				new no(t)
			);
		}),
		(t.PointLight = Kc),
		(t.PointLightHelper = Tu),
		(t.Points = so),
		(t.PointsMaterial = no),
		(t.PolarGridHelper = Pu),
		(t.PolyhedronBufferGeometry = Eo),
		(t.PolyhedronGeometry = _s),
		(t.PositionalAudio = Ul),
		(t.PropertyBinding = tu),
		(t.PropertyMixer = kl),
		(t.QuadraticBezierCurve = Fc),
		(t.QuadraticBezierCurve3 = Uc),
		(t.Quaternion = bt),
		(t.QuaternionKeyframeTrack = oc),
		(t.QuaternionLinearInterpolant = ac),
		(t.REVISION = '121'),
		(t.RGBADepthPacking = 3201),
		(t.RGBAFormat = T),
		(t.RGBAIntegerFormat = 1033),
		(t.RGBA_ASTC_10x10_Format = 37819),
		(t.RGBA_ASTC_10x5_Format = 37816),
		(t.RGBA_ASTC_10x6_Format = 37817),
		(t.RGBA_ASTC_10x8_Format = 37818),
		(t.RGBA_ASTC_12x10_Format = 37820),
		(t.RGBA_ASTC_12x12_Format = 37821),
		(t.RGBA_ASTC_4x4_Format = 37808),
		(t.RGBA_ASTC_5x4_Format = 37809),
		(t.RGBA_ASTC_5x5_Format = 37810),
		(t.RGBA_ASTC_6x5_Format = 37811),
		(t.RGBA_ASTC_6x6_Format = 37812),
		(t.RGBA_ASTC_8x5_Format = 37813),
		(t.RGBA_ASTC_8x6_Format = 37814),
		(t.RGBA_ASTC_8x8_Format = 37815),
		(t.RGBA_BPTC_Format = 36492),
		(t.RGBA_ETC2_EAC_Format = z),
		(t.RGBA_PVRTC_2BPPV1_Format = O),
		(t.RGBA_PVRTC_4BPPV1_Format = N),
		(t.RGBA_S3TC_DXT1_Format = R),
		(t.RGBA_S3TC_DXT3_Format = C),
		(t.RGBA_S3TC_DXT5_Format = P),
		(t.RGBDEncoding = K),
		(t.RGBEEncoding = Z),
		(t.RGBEFormat = 1023),
		(t.RGBFormat = S),
		(t.RGBIntegerFormat = 1032),
		(t.RGBM16Encoding = Q),
		(t.RGBM7Encoding = J),
		(t.RGB_ETC1_Format = 36196),
		(t.RGB_ETC2_Format = B),
		(t.RGB_PVRTC_2BPPV1_Format = D),
		(t.RGB_PVRTC_4BPPV1_Format = I),
		(t.RGB_S3TC_DXT1_Format = L),
		(t.RGFormat = 1030),
		(t.RGIntegerFormat = 1031),
		(t.RawShaderMaterial = Us),
		(t.Ray = Zt),
		(t.Raycaster = su),
		(t.RectAreaLight = rl),
		(t.RedFormat = 1028),
		(t.RedIntegerFormat = 1029),
		(t.ReinhardToneMapping = 2),
		(t.RepeatWrapping = l),
		(t.ReplaceStencilOp = 7681),
		(t.ReverseSubtractEquation = 102),
		(t.RingBufferGeometry = bs),
		(t.RingGeometry = ws),
		(t.SRGB8_ALPHA8_ASTC_10x10_Format = 37851),
		(t.SRGB8_ALPHA8_ASTC_10x5_Format = 37848),
		(t.SRGB8_ALPHA8_ASTC_10x6_Format = 37849),
		(t.SRGB8_ALPHA8_ASTC_10x8_Format = 37850),
		(t.SRGB8_ALPHA8_ASTC_12x10_Format = 37852),
		(t.SRGB8_ALPHA8_ASTC_12x12_Format = 37853),
		(t.SRGB8_ALPHA8_ASTC_4x4_Format = 37840),
		(t.SRGB8_ALPHA8_ASTC_5x4_Format = 37841),
		(t.SRGB8_ALPHA8_ASTC_5x5_Format = 37842),
		(t.SRGB8_ALPHA8_ASTC_6x5_Format = 37843),
		(t.SRGB8_ALPHA8_ASTC_6x6_Format = 37844),
		(t.SRGB8_ALPHA8_ASTC_8x5_Format = 37845),
		(t.SRGB8_ALPHA8_ASTC_8x6_Format = 37846),
		(t.SRGB8_ALPHA8_ASTC_8x8_Format = 37847),
		(t.Scene = sa),
		(t.SceneUtils = bh),
		(t.ShaderChunk = er),
		(t.ShaderLib = rr),
		(t.ShaderMaterial = Hn),
		(t.ShadowMaterial = Fs),
		(t.Shape = jc),
		(t.ShapeBufferGeometry = Ms),
		(t.ShapeGeometry = Ss),
		(t.ShapePath = yl),
		(t.ShapeUtils = as),
		(t.ShortType = 1011),
		(t.Skeleton = Ga),
		(t.SkeletonHelper = Mu),
		(t.SkinnedMesh = Oa),
		(t.SmoothShading = 2),
		(t.Sphere = Ht),
		(t.SphereBufferGeometry = Ts),
		(t.SphereGeometry = Es),
		(t.Spherical = uu),
		(t.SphericalHarmonics3 = il),
		(t.Spline = xh),
		(t.SplineCurve = Hc),
		(t.SplineCurve3 = yh),
		(t.SpotLight = Jc),
		(t.SpotLightHelper = xu),
		(t.Sprite = Ta),
		(t.SpriteMaterial = da),
		(t.SrcAlphaFactor = 204),
		(t.SrcAlphaSaturateFactor = 210),
		(t.SrcColorFactor = 202),
		(t.StaticCopyUsage = 35046),
		(t.StaticDrawUsage = tt),
		(t.StaticReadUsage = 35045),
		(t.StereoCamera = Ll),
		(t.StreamCopyUsage = 35042),
		(t.StreamDrawUsage = 35040),
		(t.StreamReadUsage = 35041),
		(t.StringKeyframeTrack = sc),
		(t.SubtractEquation = 101),
		(t.SubtractiveBlending = 3),
		(t.TOUCH = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }),
		(t.TangentSpaceNormalMap = 0),
		(t.TetrahedronBufferGeometry = As),
		(t.TetrahedronGeometry = Ls),
		(t.TextBufferGeometry = Rs),
		(t.TextGeometry = Cs),
		(t.Texture = gt),
		(t.TextureLoader = wc),
		(t.TorusBufferGeometry = Ps),
		(t.TorusGeometry = Is),
		(t.TorusKnotBufferGeometry = Ds),
		(t.TorusKnotGeometry = Ns),
		(t.Triangle = Be),
		(t.TriangleFanDrawMode = 2),
		(t.TriangleStripDrawMode = 1),
		(t.TrianglesDrawMode = 0),
		(t.TubeBufferGeometry = Os),
		(t.TubeGeometry = Bs),
		(t.UVMapping = n),
		(t.Uint16Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.'
				),
				new en(t, e)
			);
		}),
		(t.Uint16BufferAttribute = en),
		(t.Uint32Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.'
				),
				new rn(t, e)
			);
		}),
		(t.Uint32BufferAttribute = rn),
		(t.Uint8Attribute = function (t, e) {
			return (
				console.warn(
					'THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.'
				),
				new Ke(t, e)
			);
		}),
		(t.Uint8BufferAttribute = Ke),
		(t.Uint8ClampedAttribute = function (t, e) {
			return (
				console.warn(
					'THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.'
				),
				new $e(t, e)
			);
		}),
		(t.Uint8ClampedBufferAttribute = $e),
		(t.Uniform = iu),
		(t.UniformsLib = nr),
		(t.UniformsUtils = Un),
		(t.UnsignedByteType = y),
		(t.UnsignedInt248Type = M),
		(t.UnsignedIntType = _),
		(t.UnsignedShort4444Type = 1017),
		(t.UnsignedShort5551Type = 1018),
		(t.UnsignedShort565Type = 1019),
		(t.UnsignedShortType = x),
		(t.VSMShadowMap = 3),
		(t.Vector2 = pt),
		(t.Vector3 = wt),
		(t.Vector4 = yt),
		(t.VectorKeyframeTrack = cc),
		(t.Vertex = function (t, e, n) {
			return (
				console.warn(
					'THREE.Vertex has been removed. Use THREE.Vector3 instead.'
				),
				new wt(t, e, n)
			);
		}),
		(t.VertexColors = 2),
		(t.VideoTexture = lo),
		(t.WebGL1Renderer = ia),
		(t.WebGLCubeRenderTarget = Xn),
		(t.WebGLMultisampleRenderTarget = _t),
		(t.WebGLRenderTarget = xt),
		(t.WebGLRenderTargetCube = function (t, e, n) {
			return (
				console.warn(
					'THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).'
				),
				new Xn(t, n)
			);
		}),
		(t.WebGLRenderer = ra),
		(t.WebGLUtils = Qi),
		(t.WireframeGeometry = zs),
		(t.WireframeHelper = function (t, e) {
			return (
				console.warn(
					'THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.'
				),
				new to(
					new zs(t.geometry),
					new ja({ color: void 0 !== e ? e : 16777215 })
				)
			);
		}),
		(t.WrapAroundEnding = V),
		(t.XHRLoader = function (t) {
			return (
				console.warn('THREE.XHRLoader has been renamed to THREE.FileLoader.'),
				new vc(t)
			);
		}),
		(t.ZeroCurvatureEnding = H),
		(t.ZeroFactor = 200),
		(t.ZeroSlopeEnding = k),
		(t.ZeroStencilOp = 0),
		(t.sRGBEncoding = X),
		Object.defineProperty(t, '__esModule', { value: !0 });
});

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

!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: (e.AOS = t());
})(this, function () {
	'use strict';
	var e =
			'undefined' != typeof window
				? window
				: 'undefined' != typeof global
				? global
				: 'undefined' != typeof self
				? self
				: {},
		t = 'Expected a function',
		n = NaN,
		o = '[object Symbol]',
		i = /^\s+|\s+$/g,
		a = /^[-+]0x[0-9a-f]+$/i,
		r = /^0b[01]+$/i,
		c = /^0o[0-7]+$/i,
		s = parseInt,
		u = 'object' == typeof e && e && e.Object === Object && e,
		d = 'object' == typeof self && self && self.Object === Object && self,
		l = u || d || Function('return this')(),
		f = Object.prototype.toString,
		m = Math.max,
		p = Math.min,
		b = function () {
			return l.Date.now();
		};
	function v(e, n, o) {
		var i,
			a,
			r,
			c,
			s,
			u,
			d = 0,
			l = !1,
			f = !1,
			v = !0;
		if ('function' != typeof e) throw new TypeError(t);
		function y(t) {
			var n = i,
				o = a;
			return (i = a = void 0), (d = t), (c = e.apply(o, n));
		}
		function h(e) {
			var t = e - u;
			return void 0 === u || t >= n || t < 0 || (f && e - d >= r);
		}
		function k() {
			var e = b();
			if (h(e)) return x(e);
			s = setTimeout(
				k,
				(function (e) {
					var t = n - (e - u);
					return f ? p(t, r - (e - d)) : t;
				})(e)
			);
		}
		function x(e) {
			return (s = void 0), v && i ? y(e) : ((i = a = void 0), c);
		}
		function O() {
			var e = b(),
				t = h(e);
			if (((i = arguments), (a = this), (u = e), t)) {
				if (void 0 === s)
					return (function (e) {
						return (d = e), (s = setTimeout(k, n)), l ? y(e) : c;
					})(u);
				if (f) return (s = setTimeout(k, n)), y(u);
			}
			return void 0 === s && (s = setTimeout(k, n)), c;
		}
		return (
			(n = w(n) || 0),
			g(o) &&
				((l = !!o.leading),
				(r = (f = 'maxWait' in o) ? m(w(o.maxWait) || 0, n) : r),
				(v = 'trailing' in o ? !!o.trailing : v)),
			(O.cancel = function () {
				void 0 !== s && clearTimeout(s), (d = 0), (i = u = a = s = void 0);
			}),
			(O.flush = function () {
				return void 0 === s ? c : x(b());
			}),
			O
		);
	}
	function g(e) {
		var t = typeof e;
		return !!e && ('object' == t || 'function' == t);
	}
	function w(e) {
		if ('number' == typeof e) return e;
		if (
			(function (e) {
				return (
					'symbol' == typeof e ||
					((function (e) {
						return !!e && 'object' == typeof e;
					})(e) &&
						f.call(e) == o)
				);
			})(e)
		)
			return n;
		if (g(e)) {
			var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
			e = g(t) ? t + '' : t;
		}
		if ('string' != typeof e) return 0 === e ? e : +e;
		e = e.replace(i, '');
		var u = r.test(e);
		return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
	}
	var y = function (e, n, o) {
			var i = !0,
				a = !0;
			if ('function' != typeof e) throw new TypeError(t);
			return (
				g(o) &&
					((i = 'leading' in o ? !!o.leading : i),
					(a = 'trailing' in o ? !!o.trailing : a)),
				v(e, n, { leading: i, maxWait: n, trailing: a })
			);
		},
		h = 'Expected a function',
		k = NaN,
		x = '[object Symbol]',
		O = /^\s+|\s+$/g,
		j = /^[-+]0x[0-9a-f]+$/i,
		E = /^0b[01]+$/i,
		N = /^0o[0-7]+$/i,
		z = parseInt,
		C = 'object' == typeof e && e && e.Object === Object && e,
		A = 'object' == typeof self && self && self.Object === Object && self,
		q = C || A || Function('return this')(),
		L = Object.prototype.toString,
		T = Math.max,
		M = Math.min,
		S = function () {
			return q.Date.now();
		};
	function D(e) {
		var t = typeof e;
		return !!e && ('object' == t || 'function' == t);
	}
	function H(e) {
		if ('number' == typeof e) return e;
		if (
			(function (e) {
				return (
					'symbol' == typeof e ||
					((function (e) {
						return !!e && 'object' == typeof e;
					})(e) &&
						L.call(e) == x)
				);
			})(e)
		)
			return k;
		if (D(e)) {
			var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
			e = D(t) ? t + '' : t;
		}
		if ('string' != typeof e) return 0 === e ? e : +e;
		e = e.replace(O, '');
		var n = E.test(e);
		return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
	}
	var $ = function (e, t, n) {
			var o,
				i,
				a,
				r,
				c,
				s,
				u = 0,
				d = !1,
				l = !1,
				f = !0;
			if ('function' != typeof e) throw new TypeError(h);
			function m(t) {
				var n = o,
					a = i;
				return (o = i = void 0), (u = t), (r = e.apply(a, n));
			}
			function p(e) {
				var n = e - s;
				return void 0 === s || n >= t || n < 0 || (l && e - u >= a);
			}
			function b() {
				var e = S();
				if (p(e)) return v(e);
				c = setTimeout(
					b,
					(function (e) {
						var n = t - (e - s);
						return l ? M(n, a - (e - u)) : n;
					})(e)
				);
			}
			function v(e) {
				return (c = void 0), f && o ? m(e) : ((o = i = void 0), r);
			}
			function g() {
				var e = S(),
					n = p(e);
				if (((o = arguments), (i = this), (s = e), n)) {
					if (void 0 === c)
						return (function (e) {
							return (u = e), (c = setTimeout(b, t)), d ? m(e) : r;
						})(s);
					if (l) return (c = setTimeout(b, t)), m(s);
				}
				return void 0 === c && (c = setTimeout(b, t)), r;
			}
			return (
				(t = H(t) || 0),
				D(n) &&
					((d = !!n.leading),
					(a = (l = 'maxWait' in n) ? T(H(n.maxWait) || 0, t) : a),
					(f = 'trailing' in n ? !!n.trailing : f)),
				(g.cancel = function () {
					void 0 !== c && clearTimeout(c), (u = 0), (o = s = i = c = void 0);
				}),
				(g.flush = function () {
					return void 0 === c ? r : v(S());
				}),
				g
			);
		},
		W = function () {};
	function P(e) {
		e &&
			e.forEach(function (e) {
				var t = Array.prototype.slice.call(e.addedNodes),
					n = Array.prototype.slice.call(e.removedNodes);
				if (
					(function e(t) {
						var n = void 0,
							o = void 0;
						for (n = 0; n < t.length; n += 1) {
							if ((o = t[n]).dataset && o.dataset.aos) return !0;
							if (o.children && e(o.children)) return !0;
						}
						return !1;
					})(t.concat(n))
				)
					return W();
			});
	}
	function Y() {
		return (
			window.MutationObserver ||
			window.WebKitMutationObserver ||
			window.MozMutationObserver
		);
	}
	var _ = {
			isSupported: function () {
				return !!Y();
			},
			ready: function (e, t) {
				var n = window.document,
					o = new (Y())(P);
				(W = t),
					o.observe(n.documentElement, {
						childList: !0,
						subtree: !0,
						removedNodes: !0,
					});
			},
		},
		B = function (e, t) {
			if (!(e instanceof t))
				throw new TypeError('Cannot call a class as a function');
		},
		F = (function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					(o.enumerable = o.enumerable || !1),
						(o.configurable = !0),
						'value' in o && (o.writable = !0),
						Object.defineProperty(e, o.key, o);
				}
			}
			return function (t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t;
			};
		})(),
		I =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var o in n)
						Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
				}
				return e;
			},
		K =
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
		G =
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
		J =
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
		Q =
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
	function R() {
		return navigator.userAgent || navigator.vendor || window.opera || '';
	}
	var U = new ((function () {
			function e() {
				B(this, e);
			}
			return (
				F(e, [
					{
						key: 'phone',
						value: function () {
							var e = R();
							return !(!K.test(e) && !G.test(e.substr(0, 4)));
						},
					},
					{
						key: 'mobile',
						value: function () {
							var e = R();
							return !(!J.test(e) && !Q.test(e.substr(0, 4)));
						},
					},
					{
						key: 'tablet',
						value: function () {
							return this.mobile() && !this.phone();
						},
					},
					{
						key: 'ie11',
						value: function () {
							return (
								'-ms-scroll-limit' in document.documentElement.style &&
								'-ms-ime-align' in document.documentElement.style
							);
						},
					},
				]),
				e
			);
		})())(),
		V = function (e, t) {
			var n = void 0;
			return (
				U.ie11()
					? (n = document.createEvent('CustomEvent')).initCustomEvent(
							e,
							!0,
							!0,
							{ detail: t }
					  )
					: (n = new CustomEvent(e, { detail: t })),
				document.dispatchEvent(n)
			);
		},
		X = function (e) {
			return e.forEach(function (e, t) {
				return (function (e, t) {
					var n = e.options,
						o = e.position,
						i = e.node,
						a =
							(e.data,
							function () {
								e.animated &&
									((function (e, t) {
										t &&
											t.forEach(function (t) {
												return e.classList.remove(t);
											});
									})(i, n.animatedClassNames),
									V('aos:out', i),
									e.options.id && V('aos:in:' + e.options.id, i),
									(e.animated = !1));
							});
					n.mirror && t >= o.out && !n.once
						? a()
						: t >= o.in
						? e.animated ||
						  ((function (e, t) {
								t &&
									t.forEach(function (t) {
										return e.classList.add(t);
									});
						  })(i, n.animatedClassNames),
						  V('aos:in', i),
						  e.options.id && V('aos:in:' + e.options.id, i),
						  (e.animated = !0))
						: e.animated && !n.once && a();
				})(e, window.pageYOffset);
			});
		},
		Z = function (e) {
			for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
				(t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
					(n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
					(e = e.offsetParent);
			return { top: n, left: t };
		},
		ee = function (e, t, n) {
			var o = e.getAttribute('data-aos-' + t);
			if (void 0 !== o) {
				if ('true' === o) return !0;
				if ('false' === o) return !1;
			}
			return o || n;
		},
		te = function (e, t) {
			return (
				e.forEach(function (e, n) {
					var o = ee(e.node, 'mirror', t.mirror),
						i = ee(e.node, 'once', t.once),
						a = ee(e.node, 'id'),
						r = t.useClassNames && e.node.getAttribute('data-aos'),
						c = [t.animatedClassName]
							.concat(r ? r.split(' ') : [])
							.filter(function (e) {
								return 'string' == typeof e;
							});
					t.initClassName && e.node.classList.add(t.initClassName),
						(e.position = {
							in: (function (e, t, n) {
								var o = window.innerHeight,
									i = ee(e, 'anchor'),
									a = ee(e, 'anchor-placement'),
									r = Number(ee(e, 'offset', a ? 0 : t)),
									c = a || n,
									s = e;
								i &&
									document.querySelectorAll(i) &&
									(s = document.querySelectorAll(i)[0]);
								var u = Z(s).top - o;
								switch (c) {
									case 'top-bottom':
										break;
									case 'center-bottom':
										u += s.offsetHeight / 2;
										break;
									case 'bottom-bottom':
										u += s.offsetHeight;
										break;
									case 'top-center':
										u += o / 2;
										break;
									case 'center-center':
										u += o / 2 + s.offsetHeight / 2;
										break;
									case 'bottom-center':
										u += o / 2 + s.offsetHeight;
										break;
									case 'top-top':
										u += o;
										break;
									case 'bottom-top':
										u += o + s.offsetHeight;
										break;
									case 'center-top':
										u += o + s.offsetHeight / 2;
								}
								return u + r;
							})(e.node, t.offset, t.anchorPlacement),
							out:
								o &&
								(function (e, t) {
									window.innerHeight;
									var n = ee(e, 'anchor'),
										o = ee(e, 'offset', t),
										i = e;
									return (
										n &&
											document.querySelectorAll(n) &&
											(i = document.querySelectorAll(n)[0]),
										Z(i).top + i.offsetHeight - o
									);
								})(e.node, t.offset),
						}),
						(e.options = { once: i, mirror: o, animatedClassNames: c, id: a });
				}),
				e
			);
		},
		ne = function () {
			var e = document.querySelectorAll('[data-aos]');
			return Array.prototype.map.call(e, function (e) {
				return { node: e };
			});
		},
		oe = [],
		ie = !1,
		ae = {
			offset: 120,
			delay: 0,
			easing: 'ease',
			duration: 400,
			disable: !1,
			once: !1,
			mirror: !1,
			anchorPlacement: 'top-bottom',
			startEvent: 'DOMContentLoaded',
			animatedClassName: 'aos-animate',
			initClassName: 'aos-init',
			useClassNames: !1,
			disableMutationObserver: !1,
			throttleDelay: 99,
			debounceDelay: 50,
		},
		re = function () {
			return document.all && !window.atob;
		},
		ce = function () {
			arguments.length > 0 &&
				void 0 !== arguments[0] &&
				arguments[0] &&
				(ie = !0),
				ie &&
					((oe = te(oe, ae)),
					X(oe),
					window.addEventListener(
						'scroll',
						y(function () {
							X(oe, ae.once);
						}, ae.throttleDelay)
					));
		},
		se = function () {
			if (((oe = ne()), de(ae.disable) || re())) return ue();
			ce();
		},
		ue = function () {
			oe.forEach(function (e, t) {
				e.node.removeAttribute('data-aos'),
					e.node.removeAttribute('data-aos-easing'),
					e.node.removeAttribute('data-aos-duration'),
					e.node.removeAttribute('data-aos-delay'),
					ae.initClassName && e.node.classList.remove(ae.initClassName),
					ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
			});
		},
		de = function (e) {
			return (
				!0 === e ||
				('mobile' === e && U.mobile()) ||
				('phone' === e && U.phone()) ||
				('tablet' === e && U.tablet()) ||
				('function' == typeof e && !0 === e())
			);
		};
	return {
		init: function (e) {
			return (
				(ae = I(ae, e)),
				(oe = ne()),
				ae.disableMutationObserver ||
					_.isSupported() ||
					(console.info(
						'\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
					),
					(ae.disableMutationObserver = !0)),
				ae.disableMutationObserver || _.ready('[data-aos]', se),
				de(ae.disable) || re()
					? ue()
					: (document
							.querySelector('body')
							.setAttribute('data-aos-easing', ae.easing),
					  document
							.querySelector('body')
							.setAttribute('data-aos-duration', ae.duration),
					  document
							.querySelector('body')
							.setAttribute('data-aos-delay', ae.delay),
					  -1 === ['DOMContentLoaded', 'load'].indexOf(ae.startEvent)
							? document.addEventListener(ae.startEvent, function () {
									ce(!0);
							  })
							: window.addEventListener('load', function () {
									ce(!0);
							  }),
					  'DOMContentLoaded' === ae.startEvent &&
							['complete', 'interactive'].indexOf(document.readyState) > -1 &&
							ce(!0),
					  window.addEventListener('resize', $(ce, ae.debounceDelay, !0)),
					  window.addEventListener(
							'orientationchange',
							$(ce, ae.debounceDelay, !0)
					  ),
					  oe)
			);
		},
		refresh: ce,
		refreshHard: se,
	};
});

// ------------------------------------------
// Rellax.js
// Buttery smooth parallax library
// Copyright (c) 2016 Moe Amaya (@moeamaya)
// MIT license
//
// Thanks to Paraxify.js and Jaime Cabllero
// for parallax concepts
// ------------------------------------------

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.Rellax = factory();
	}
})(typeof window !== 'undefined' ? window : global, function () {
	var Rellax = function (el, options) {
		'use strict';

		var self = Object.create(Rellax.prototype);

		var posY = 0;
		var screenY = 0;
		var posX = 0;
		var screenX = 0;
		var blocks = [];
		var pause = true;

		// check what requestAnimationFrame to use, and if
		// it's not supported, use the onscroll event
		var loop =
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			function (callback) {
				return setTimeout(callback, 1000 / 60);
			};

		// store the id for later use
		var loopId = null;

		// Test via a getter in the options object to see if the passive property is accessed
		var supportsPassive = false;
		try {
			var opts = Object.defineProperty({}, 'passive', {
				get: function () {
					supportsPassive = true;
				},
			});
			window.addEventListener('testPassive', null, opts);
			window.removeEventListener('testPassive', null, opts);
		} catch (e) {}

		// check what cancelAnimation method to use
		var clearLoop =
			window.cancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			clearTimeout;

		// check which transform property to use
		var transformProp =
			window.transformProp ||
			(function () {
				var testEl = document.createElement('div');
				if (testEl.style.transform === null) {
					var vendors = ['Webkit', 'Moz', 'ms'];
					for (var vendor in vendors) {
						if (testEl.style[vendors[vendor] + 'Transform'] !== undefined) {
							return vendors[vendor] + 'Transform';
						}
					}
				}
				return 'transform';
			})();

		// Default Settings
		self.options = {
			speed: -2,
			verticalSpeed: null,
			horizontalSpeed: null,
			breakpoints: [576, 768, 1201],
			center: false,
			wrapper: null,
			relativeToWrapper: false,
			round: true,
			vertical: true,
			horizontal: false,
			verticalScrollAxis: 'y',
			horizontalScrollAxis: 'x',
			callback: function () {},
		};

		// User defined options (might have more in the future)
		if (options) {
			Object.keys(options).forEach(function (key) {
				self.options[key] = options[key];
			});
		}

		function validateCustomBreakpoints() {
			if (
				self.options.breakpoints.length === 3 &&
				Array.isArray(self.options.breakpoints)
			) {
				var isAscending = true;
				var isNumerical = true;
				var lastVal;
				self.options.breakpoints.forEach(function (i) {
					if (typeof i !== 'number') isNumerical = false;
					if (lastVal !== null) {
						if (i < lastVal) isAscending = false;
					}
					lastVal = i;
				});
				if (isAscending && isNumerical) return;
			}
			// revert defaults if set incorrectly
			self.options.breakpoints = [576, 768, 1201];
			console.warn(
				'Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted'
			);
		}

		if (options && options.breakpoints) {
			validateCustomBreakpoints();
		}

		// By default, rellax class
		if (!el) {
			el = '.rellax';
		}

		// check if el is a className or a node
		var elements =
			typeof el === 'string' ? document.querySelectorAll(el) : [el];

		// Now query selector
		if (elements.length > 0) {
			self.elems = elements;
		}

		// The elements don't exist
		else {
			console.warn("Rellax: The elements you're trying to select don't exist.");
			return;
		}

		// Has a wrapper and it exists
		if (self.options.wrapper) {
			if (!self.options.wrapper.nodeType) {
				var wrapper = document.querySelector(self.options.wrapper);

				if (wrapper) {
					self.options.wrapper = wrapper;
				} else {
					console.warn(
						"Rellax: The wrapper you're trying to use doesn't exist."
					);
					return;
				}
			}
		}

		// set a placeholder for the current breakpoint
		var currentBreakpoint;

		// helper to determine current breakpoint
		var getCurrentBreakpoint = function (w) {
			var bp = self.options.breakpoints;
			if (w < bp[0]) return 'xs';
			if (w >= bp[0] && w < bp[1]) return 'sm';
			if (w >= bp[1] && w < bp[2]) return 'md';
			return 'lg';
		};

		// Get and cache initial position of all elements
		var cacheBlocks = function () {
			for (var i = 0; i < self.elems.length; i++) {
				var block = createBlock(self.elems[i]);
				blocks.push(block);
			}
		};

		// Let's kick this script off
		// Build array for cached element values
		var init = function () {
			for (var i = 0; i < blocks.length; i++) {
				self.elems[i].style.cssText = blocks[i].style;
			}

			blocks = [];

			screenY = window.innerHeight;
			screenX = window.innerWidth;
			currentBreakpoint = getCurrentBreakpoint(screenX);

			setPosition();

			cacheBlocks();

			animate();

			// If paused, unpause and set listener for window resizing events
			if (pause) {
				window.addEventListener('resize', init);
				pause = false;
				// Start the loop
				update();
			}
		};

		// We want to cache the parallax blocks'
		// values: base, top, height, speed
		// el: is dom object, return: el cache values
		var createBlock = function (el) {
			var dataPercentage = el.getAttribute('data-rellax-percentage');
			var dataSpeed = el.getAttribute('data-rellax-speed');
			var dataXsSpeed = el.getAttribute('data-rellax-xs-speed');
			var dataMobileSpeed = el.getAttribute('data-rellax-mobile-speed');
			var dataTabletSpeed = el.getAttribute('data-rellax-tablet-speed');
			var dataDesktopSpeed = el.getAttribute('data-rellax-desktop-speed');
			var dataVerticalSpeed = el.getAttribute('data-rellax-vertical-speed');
			var dataHorizontalSpeed = el.getAttribute('data-rellax-horizontal-speed');
			var dataVericalScrollAxis = el.getAttribute(
				'data-rellax-vertical-scroll-axis'
			);
			var dataHorizontalScrollAxis = el.getAttribute(
				'data-rellax-horizontal-scroll-axis'
			);
			var dataZindex = el.getAttribute('data-rellax-zindex') || 0;
			var dataMin = el.getAttribute('data-rellax-min');
			var dataMax = el.getAttribute('data-rellax-max');
			var dataMinX = el.getAttribute('data-rellax-min-x');
			var dataMaxX = el.getAttribute('data-rellax-max-x');
			var dataMinY = el.getAttribute('data-rellax-min-y');
			var dataMaxY = el.getAttribute('data-rellax-max-y');
			var mapBreakpoints;
			var breakpoints = true;

			if (
				!dataXsSpeed &&
				!dataMobileSpeed &&
				!dataTabletSpeed &&
				!dataDesktopSpeed
			) {
				breakpoints = false;
			} else {
				mapBreakpoints = {
					xs: dataXsSpeed,
					sm: dataMobileSpeed,
					md: dataTabletSpeed,
					lg: dataDesktopSpeed,
				};
			}

			// initializing at scrollY = 0 (top of browser), scrollX = 0 (left of browser)
			// ensures elements are positioned based on HTML layout.
			//
			// If the element has the percentage attribute, the posY and posX needs to be
			// the current scroll position's value, so that the elements are still positioned based on HTML layout
			var wrapperPosY = self.options.wrapper
				? self.options.wrapper.scrollTop
				: window.pageYOffset ||
				  document.documentElement.scrollTop ||
				  document.body.scrollTop;
			// If the option relativeToWrapper is true, use the wrappers offset to top, subtracted from the current page scroll.
			if (self.options.relativeToWrapper) {
				var scrollPosY =
					window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop;
				wrapperPosY = scrollPosY - self.options.wrapper.offsetTop;
			}
			var posY = self.options.vertical
				? dataPercentage || self.options.center
					? wrapperPosY
					: 0
				: 0;
			var posX = self.options.horizontal
				? dataPercentage || self.options.center
					? self.options.wrapper
						? self.options.wrapper.scrollLeft
						: window.pageXOffset ||
						  document.documentElement.scrollLeft ||
						  document.body.scrollLeft
					: 0
				: 0;

			var blockTop = posY + el.getBoundingClientRect().top;
			var blockHeight = el.clientHeight || el.offsetHeight || el.scrollHeight;

			var blockLeft = posX + el.getBoundingClientRect().left;
			var blockWidth = el.clientWidth || el.offsetWidth || el.scrollWidth;

			// apparently parallax equation everyone uses
			var percentageY = dataPercentage
				? dataPercentage
				: (posY - blockTop + screenY) / (blockHeight + screenY);
			var percentageX = dataPercentage
				? dataPercentage
				: (posX - blockLeft + screenX) / (blockWidth + screenX);
			if (self.options.center) {
				percentageX = 0.5;
				percentageY = 0.5;
			}

			// Optional individual block speed as data attr, otherwise global speed
			var speed =
				breakpoints && mapBreakpoints[currentBreakpoint] !== null
					? Number(mapBreakpoints[currentBreakpoint])
					: dataSpeed
					? dataSpeed
					: self.options.speed;
			var verticalSpeed = dataVerticalSpeed
				? dataVerticalSpeed
				: self.options.verticalSpeed;
			var horizontalSpeed = dataHorizontalSpeed
				? dataHorizontalSpeed
				: self.options.horizontalSpeed;

			// Optional individual block movement axis direction as data attr, otherwise global movement direction
			var verticalScrollAxis = dataVericalScrollAxis
				? dataVericalScrollAxis
				: self.options.verticalScrollAxis;
			var horizontalScrollAxis = dataHorizontalScrollAxis
				? dataHorizontalScrollAxis
				: self.options.horizontalScrollAxis;

			var bases = updatePosition(
				percentageX,
				percentageY,
				speed,
				verticalSpeed,
				horizontalSpeed
			);

			// ~~Store non-translate3d transforms~~
			// Store inline styles and extract transforms
			var style = el.style.cssText;
			var transform = '';

			// Check if there's an inline styled transform
			var searchResult = /transform\s*:/i.exec(style);
			if (searchResult) {
				// Get the index of the transform
				var index = searchResult.index;

				// Trim the style to the transform point and get the following semi-colon index
				var trimmedStyle = style.slice(index);
				var delimiter = trimmedStyle.indexOf(';');

				// Remove "transform" string and save the attribute
				if (delimiter) {
					transform =
						' ' + trimmedStyle.slice(11, delimiter).replace(/\s/g, '');
				} else {
					transform = ' ' + trimmedStyle.slice(11).replace(/\s/g, '');
				}
			}

			return {
				baseX: bases.x,
				baseY: bases.y,
				top: blockTop,
				left: blockLeft,
				height: blockHeight,
				width: blockWidth,
				speed: speed,
				verticalSpeed: verticalSpeed,
				horizontalSpeed: horizontalSpeed,
				verticalScrollAxis: verticalScrollAxis,
				horizontalScrollAxis: horizontalScrollAxis,
				style: style,
				transform: transform,
				zindex: dataZindex,
				min: dataMin,
				max: dataMax,
				minX: dataMinX,
				maxX: dataMaxX,
				minY: dataMinY,
				maxY: dataMaxY,
			};
		};

		// set scroll position (posY, posX)
		// side effect method is not ideal, but okay for now
		// returns true if the scroll changed, false if nothing happened
		var setPosition = function () {
			var oldY = posY;
			var oldX = posX;

			posY = self.options.wrapper
				? self.options.wrapper.scrollTop
				: (
						document.documentElement ||
						document.body.parentNode ||
						document.body
				  ).scrollTop || window.pageYOffset;
			posX = self.options.wrapper
				? self.options.wrapper.scrollLeft
				: (
						document.documentElement ||
						document.body.parentNode ||
						document.body
				  ).scrollLeft || window.pageXOffset;
			// If option relativeToWrapper is true, use relative wrapper value instead.
			if (self.options.relativeToWrapper) {
				var scrollPosY =
					(
						document.documentElement ||
						document.body.parentNode ||
						document.body
					).scrollTop || window.pageYOffset;
				posY = scrollPosY - self.options.wrapper.offsetTop;
			}

			if (oldY != posY && self.options.vertical) {
				// scroll changed, return true
				return true;
			}

			if (oldX != posX && self.options.horizontal) {
				// scroll changed, return true
				return true;
			}

			// scroll did not change
			return false;
		};

		// Ahh a pure function, gets new transform value
		// based on scrollPosition and speed
		// Allow for decimal pixel values
		var updatePosition = function (
			percentageX,
			percentageY,
			speed,
			verticalSpeed,
			horizontalSpeed
		) {
			var result = {};
			var valueX =
				(horizontalSpeed ? horizontalSpeed : speed) * (100 * (1 - percentageX));
			var valueY =
				(verticalSpeed ? verticalSpeed : speed) * (100 * (1 - percentageY));

			result.x = self.options.round
				? Math.round(valueX)
				: Math.round(valueX * 100) / 100;
			result.y = self.options.round
				? Math.round(valueY)
				: Math.round(valueY * 100) / 100;

			return result;
		};

		// Remove event listeners and loop again
		var deferredUpdate = function () {
			window.removeEventListener('resize', deferredUpdate);
			window.removeEventListener('orientationchange', deferredUpdate);
			(self.options.wrapper
				? self.options.wrapper
				: window
			).removeEventListener('scroll', deferredUpdate);
			(self.options.wrapper
				? self.options.wrapper
				: document
			).removeEventListener('touchmove', deferredUpdate);

			// loop again
			loopId = loop(update);
		};

		// Loop
		var update = function () {
			if (setPosition() && pause === false) {
				animate();

				// loop again
				loopId = loop(update);
			} else {
				loopId = null;

				// Don't animate until we get a position updating event
				window.addEventListener('resize', deferredUpdate);
				window.addEventListener('orientationchange', deferredUpdate);
				(self.options.wrapper ? self.options.wrapper : window).addEventListener(
					'scroll',
					deferredUpdate,
					supportsPassive ? { passive: true } : false
				);
				(self.options.wrapper
					? self.options.wrapper
					: document
				).addEventListener(
					'touchmove',
					deferredUpdate,
					supportsPassive ? { passive: true } : false
				);
			}
		};

		// Transform3d on parallax element
		var animate = function () {
			var positions;
			for (var i = 0; i < self.elems.length; i++) {
				// Determine relevant movement directions
				var verticalScrollAxis = blocks[i].verticalScrollAxis.toLowerCase();
				var horizontalScrollAxis = blocks[i].horizontalScrollAxis.toLowerCase();
				var verticalScrollX = verticalScrollAxis.indexOf('x') != -1 ? posY : 0;
				var verticalScrollY = verticalScrollAxis.indexOf('y') != -1 ? posY : 0;
				var horizontalScrollX =
					horizontalScrollAxis.indexOf('x') != -1 ? posX : 0;
				var horizontalScrollY =
					horizontalScrollAxis.indexOf('y') != -1 ? posX : 0;

				var percentageY =
					(verticalScrollY + horizontalScrollY - blocks[i].top + screenY) /
					(blocks[i].height + screenY);
				var percentageX =
					(verticalScrollX + horizontalScrollX - blocks[i].left + screenX) /
					(blocks[i].width + screenX);

				// Subtracting initialize value, so element stays in same spot as HTML
				positions = updatePosition(
					percentageX,
					percentageY,
					blocks[i].speed,
					blocks[i].verticalSpeed,
					blocks[i].horizontalSpeed
				);
				var positionY = positions.y - blocks[i].baseY;
				var positionX = positions.x - blocks[i].baseX;

				// The next two "if" blocks go like this:
				// Check if a limit is defined (first "min", then "max");
				// Check if we need to change the Y or the X
				// (Currently working only if just one of the axes is enabled)
				// Then, check if the new position is inside the allowed limit
				// If so, use new position. If not, set position to limit.

				// Check if a min limit is defined
				if (blocks[i].min !== null) {
					if (self.options.vertical && !self.options.horizontal) {
						positionY = positionY <= blocks[i].min ? blocks[i].min : positionY;
					}
					if (self.options.horizontal && !self.options.vertical) {
						positionX = positionX <= blocks[i].min ? blocks[i].min : positionX;
					}
				}

				// Check if directional min limits are defined
				if (blocks[i].minY != null) {
					positionY = positionY <= blocks[i].minY ? blocks[i].minY : positionY;
				}
				if (blocks[i].minX != null) {
					positionX = positionX <= blocks[i].minX ? blocks[i].minX : positionX;
				}

				// Check if a max limit is defined
				if (blocks[i].max !== null) {
					if (self.options.vertical && !self.options.horizontal) {
						positionY = positionY >= blocks[i].max ? blocks[i].max : positionY;
					}
					if (self.options.horizontal && !self.options.vertical) {
						positionX = positionX >= blocks[i].max ? blocks[i].max : positionX;
					}
				}

				// Check if directional max limits are defined
				if (blocks[i].maxY != null) {
					positionY = positionY >= blocks[i].maxY ? blocks[i].maxY : positionY;
				}
				if (blocks[i].maxX != null) {
					positionX = positionX >= blocks[i].maxX ? blocks[i].maxX : positionX;
				}

				var zindex = blocks[i].zindex;

				// Move that element
				// (Set the new translation and append initial inline transforms.)
				var translate =
					'translate3d(' +
					(self.options.horizontal ? positionX : '0') +
					'px,' +
					(self.options.vertical ? positionY : '0') +
					'px,' +
					zindex +
					'px) ' +
					blocks[i].transform;
				self.elems[i].style[transformProp] = translate;
			}
			self.options.callback(positions);
		};

		self.destroy = function () {
			for (var i = 0; i < self.elems.length; i++) {
				self.elems[i].style.cssText = blocks[i].style;
			}

			// Remove resize event listener if not pause, and pause
			if (!pause) {
				window.removeEventListener('resize', init);
				pause = true;
			}

			// Clear the animation loop to prevent possible memory leak
			clearLoop(loopId);
			loopId = null;
		};

		// Init
		init();

		// Allow to recalculate the initial values whenever we want
		self.refresh = init;

		return self;
	};
	return Rellax;
});
