//download.js v4.2, by dandavis; 2008-2016. [CCBY2] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define([], factory);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.download = factory();
	}
})(this, function () {
	return function download(data, strFileName, strMimeType) {
		var self = window, // this script is only for browsers anyway...
			defaultMime = 'application/octet-stream', // this default mime also triggers iframe downloads
			mimeType = strMimeType || defaultMime,
			payload = data,
			url = !strFileName && !strMimeType && payload,
			anchor = document.createElement('a'),
			toString = function (a) {
				return String(a);
			},
			myBlob = self.Blob || self.MozBlob || self.WebKitBlob || toString,
			fileName = strFileName || 'download',
			blob,
			reader;
		myBlob = myBlob.call ? myBlob.bind(self) : Blob;

		if (String(this) === 'true') {
			//reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
			payload = [payload, mimeType];
			mimeType = payload[0];
			payload = payload[1];
		}

		if (url && url.length < 2048) {
			// if no filename and no mime, assume a url was passed as the only argument
			fileName = url.split('/').pop().split('?')[0];
			anchor.href = url; // assign href prop to temp anchor
			if (anchor.href.indexOf(url) !== -1) {
				// if the browser determines that it's a potentially valid url path:
				var ajax = new XMLHttpRequest();
				ajax.open('GET', url, true);
				ajax.responseType = 'blob';
				ajax.onload = function (e) {
					download(e.target.response, fileName, defaultMime);
				};
				setTimeout(function () {
					ajax.send();
				}, 0); // allows setting custom ajax headers using the return:
				return ajax;
			} // end if valid url?
		} // end if url?

		//go ahead and download dataURLs right away
		if (/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)) {
			if (payload.length > 1024 * 1024 * 1.999 && myBlob !== toString) {
				payload = dataUrlToBlob(payload);
				mimeType = payload.type || defaultMime;
			} else {
				return navigator.msSaveBlob // IE10 can't do a[download], only Blobs:
					? navigator.msSaveBlob(dataUrlToBlob(payload), fileName)
					: saver(payload); // everyone else can save dataURLs un-processed
			}
		} //end if dataURL passed?

		blob =
			payload instanceof myBlob
				? payload
				: new myBlob([payload], { type: mimeType });

		function dataUrlToBlob(strUrl) {
			var parts = strUrl.split(/[:;,]/),
				type = parts[1],
				decoder = parts[2] == 'base64' ? atob : decodeURIComponent,
				binData = decoder(parts.pop()),
				mx = binData.length,
				i = 0,
				uiArr = new Uint8Array(mx);

			for (i; i < mx; ++i) uiArr[i] = binData.charCodeAt(i);

			return new myBlob([uiArr], { type: type });
		}

		function saver(url, winMode) {
			if ('download' in anchor) {
				//html5 A[download]
				anchor.href = url;
				anchor.setAttribute('download', fileName);
				anchor.className = 'download-js-link';
				anchor.innerHTML = 'downloading...';
				anchor.style.display = 'none';
				document.body.appendChild(anchor);
				setTimeout(function () {
					anchor.click();
					document.body.removeChild(anchor);
					if (winMode === true) {
						setTimeout(function () {
							self.URL.revokeObjectURL(anchor.href);
						}, 250);
					}
				}, 66);
				return true;
			}

			// handle non-a[download] safari as best we can:
			if (
				/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(
					navigator.userAgent
				)
			) {
				url = url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
				if (!window.open(url)) {
					// popup blocked, offer direct download:
					if (
						confirm(
							'Displaying New Document\n\nUse Save As... to download, then click back to return to this page.'
						)
					) {
						location.href = url;
					}
				}
				return true;
			}

			//do iframe dataURL download (old ch+FF):
			var f = document.createElement('iframe');
			document.body.appendChild(f);

			if (!winMode) {
				// force a mime that will download:
				url = 'data:' + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
			}
			f.src = url;
			setTimeout(function () {
				document.body.removeChild(f);
			}, 333);
		} //end saver

		if (navigator.msSaveBlob) {
			// IE10+ : (has Blob, but not a[download] or URL)
			return navigator.msSaveBlob(blob, fileName);
		}

		if (self.URL) {
			// simple fast and modern way using Blob and URL:
			saver(self.URL.createObjectURL(blob), true);
		} else {
			// handle non-Blob()+non-URL browsers:
			if (typeof blob === 'string' || blob.constructor === toString) {
				try {
					return saver('data:' + mimeType + ';base64,' + self.btoa(blob));
				} catch (y) {
					return saver('data:' + mimeType + ',' + encodeURIComponent(blob));
				}
			}

			// Blob but not URL support:
			reader = new FileReader();
			reader.onload = function (e) {
				saver(this.result);
			};
			reader.readAsDataURL(blob);
		}
		return true;
	}; /* end download() */
});

(() => {
	var t = {
			9662: (t, r, e) => {
				var n = e(7854),
					o = e(614),
					i = e(6330),
					a = n.TypeError;
				t.exports = function (t) {
					if (o(t)) return t;
					throw a(i(t) + ' is not a function');
				};
			},
			9483: (t, r, e) => {
				var n = e(7854),
					o = e(4411),
					i = e(6330),
					a = n.TypeError;
				t.exports = function (t) {
					if (o(t)) return t;
					throw a(i(t) + ' is not a constructor');
				};
			},
			6077: (t, r, e) => {
				var n = e(7854),
					o = e(614),
					i = n.String,
					a = n.TypeError;
				t.exports = function (t) {
					if ('object' == typeof t || o(t)) return t;
					throw a("Can't set " + i(t) + ' as a prototype');
				};
			},
			5787: (t, r, e) => {
				var n = e(7854),
					o = e(7976),
					i = n.TypeError;
				t.exports = function (t, r) {
					if (o(r, t)) return t;
					throw i('Incorrect invocation');
				};
			},
			9670: (t, r, e) => {
				var n = e(7854),
					o = e(111),
					i = n.String,
					a = n.TypeError;
				t.exports = function (t) {
					if (o(t)) return t;
					throw a(i(t) + ' is not an object');
				};
			},
			8533: (t, r, e) => {
				'use strict';
				var n = e(2092).forEach,
					o = e(9341)('forEach');
				t.exports = o
					? [].forEach
					: function (t) {
							return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
					  };
			},
			1318: (t, r, e) => {
				var n = e(5656),
					o = e(1400),
					i = e(6244),
					a = function (t) {
						return function (r, e, a) {
							var u,
								c = n(r),
								s = i(c),
								f = o(a, s);
							if (t && e != e) {
								for (; s > f; ) if ((u = c[f++]) != u) return !0;
							} else
								for (; s > f; f++)
									if ((t || f in c) && c[f] === e) return t || f || 0;
							return !t && -1;
						};
					};
				t.exports = { includes: a(!0), indexOf: a(!1) };
			},
			2092: (t, r, e) => {
				var n = e(9974),
					o = e(1702),
					i = e(8361),
					a = e(7908),
					u = e(6244),
					c = e(5417),
					s = o([].push),
					f = function (t) {
						var r = 1 == t,
							e = 2 == t,
							o = 3 == t,
							f = 4 == t,
							p = 6 == t,
							v = 7 == t,
							l = 5 == t || p;
						return function (h, d, y, m) {
							for (
								var g,
									b,
									x = a(h),
									w = i(x),
									S = n(d, y),
									j = u(w),
									O = 0,
									E = m || c,
									T = r ? E(h, j) : e || v ? E(h, 0) : void 0;
								j > O;
								O++
							)
								if ((l || O in w) && ((b = S((g = w[O]), O, x)), t))
									if (r) T[O] = b;
									else if (b)
										switch (t) {
											case 3:
												return !0;
											case 5:
												return g;
											case 6:
												return O;
											case 2:
												s(T, g);
										}
									else
										switch (t) {
											case 4:
												return !1;
											case 7:
												s(T, g);
										}
							return p ? -1 : o || f ? f : T;
						};
					};
				t.exports = {
					forEach: f(0),
					map: f(1),
					filter: f(2),
					some: f(3),
					every: f(4),
					find: f(5),
					findIndex: f(6),
					filterReject: f(7),
				};
			},
			9341: (t, r, e) => {
				'use strict';
				var n = e(7293);
				t.exports = function (t, r) {
					var e = [][t];
					return (
						!!e &&
						n(function () {
							e.call(
								null,
								r ||
									function () {
										return 1;
									},
								1
							);
						})
					);
				};
			},
			206: (t, r, e) => {
				var n = e(1702);
				t.exports = n([].slice);
			},
			7475: (t, r, e) => {
				var n = e(7854),
					o = e(3157),
					i = e(4411),
					a = e(111),
					u = e(5112)('species'),
					c = n.Array;
				t.exports = function (t) {
					var r;
					return (
						o(t) &&
							((r = t.constructor),
							((i(r) && (r === c || o(r.prototype))) ||
								(a(r) && null === (r = r[u]))) &&
								(r = void 0)),
						void 0 === r ? c : r
					);
				};
			},
			5417: (t, r, e) => {
				var n = e(7475);
				t.exports = function (t, r) {
					return new (n(t))(0 === r ? 0 : r);
				};
			},
			7072: (t, r, e) => {
				var n = e(5112)('iterator'),
					o = !1;
				try {
					var i = 0,
						a = {
							next: function () {
								return { done: !!i++ };
							},
							return: function () {
								o = !0;
							},
						};
					(a[n] = function () {
						return this;
					}),
						Array.from(a, function () {
							throw 2;
						});
				} catch (t) {}
				t.exports = function (t, r) {
					if (!r && !o) return !1;
					var e = !1;
					try {
						var i = {};
						(i[n] = function () {
							return {
								next: function () {
									return { done: (e = !0) };
								},
							};
						}),
							t(i);
					} catch (t) {}
					return e;
				};
			},
			4326: (t, r, e) => {
				var n = e(1702),
					o = n({}.toString),
					i = n(''.slice);
				t.exports = function (t) {
					return i(o(t), 8, -1);
				};
			},
			648: (t, r, e) => {
				var n = e(7854),
					o = e(1694),
					i = e(614),
					a = e(4326),
					u = e(5112)('toStringTag'),
					c = n.Object,
					s =
						'Arguments' ==
						a(
							(function () {
								return arguments;
							})()
						);
				t.exports = o
					? a
					: function (t) {
							var r, e, n;
							return void 0 === t
								? 'Undefined'
								: null === t
								? 'Null'
								: 'string' ==
								  typeof (e = (function (t, r) {
										try {
											return t[r];
										} catch (t) {}
								  })((r = c(t)), u))
								? e
								: s
								? a(r)
								: 'Object' == (n = a(r)) && i(r.callee)
								? 'Arguments'
								: n;
					  };
			},
			7741: (t, r, e) => {
				var n = e(1702)(''.replace),
					o = String(Error('zxcasd').stack),
					i = /\n\s*at [^:]*:[^\n]*/,
					a = i.test(o);
				t.exports = function (t, r) {
					if (a && 'string' == typeof t) for (; r--; ) t = n(t, i, '');
					return t;
				};
			},
			9920: (t, r, e) => {
				var n = e(2597),
					o = e(3887),
					i = e(1236),
					a = e(3070);
				t.exports = function (t, r, e) {
					for (var u = o(r), c = a.f, s = i.f, f = 0; f < u.length; f++) {
						var p = u[f];
						n(t, p) || (e && n(e, p)) || c(t, p, s(r, p));
					}
				};
			},
			8880: (t, r, e) => {
				var n = e(9781),
					o = e(3070),
					i = e(9114);
				t.exports = n
					? function (t, r, e) {
							return o.f(t, r, i(1, e));
					  }
					: function (t, r, e) {
							return (t[r] = e), t;
					  };
			},
			9114: (t) => {
				t.exports = function (t, r) {
					return {
						enumerable: !(1 & t),
						configurable: !(2 & t),
						writable: !(4 & t),
						value: r,
					};
				};
			},
			9781: (t, r, e) => {
				var n = e(7293);
				t.exports = !n(function () {
					return (
						7 !=
						Object.defineProperty({}, 1, {
							get: function () {
								return 7;
							},
						})[1]
					);
				});
			},
			317: (t, r, e) => {
				var n = e(7854),
					o = e(111),
					i = n.document,
					a = o(i) && o(i.createElement);
				t.exports = function (t) {
					return a ? i.createElement(t) : {};
				};
			},
			8324: (t) => {
				t.exports = {
					CSSRuleList: 0,
					CSSStyleDeclaration: 0,
					CSSValueList: 0,
					ClientRectList: 0,
					DOMRectList: 0,
					DOMStringList: 0,
					DOMTokenList: 1,
					DataTransferItemList: 0,
					FileList: 0,
					HTMLAllCollection: 0,
					HTMLCollection: 0,
					HTMLFormElement: 0,
					HTMLSelectElement: 0,
					MediaList: 0,
					MimeTypeArray: 0,
					NamedNodeMap: 0,
					NodeList: 1,
					PaintRequestList: 0,
					Plugin: 0,
					PluginArray: 0,
					SVGLengthList: 0,
					SVGNumberList: 0,
					SVGPathSegList: 0,
					SVGPointList: 0,
					SVGStringList: 0,
					SVGTransformList: 0,
					SourceBufferList: 0,
					StyleSheetList: 0,
					TextTrackCueList: 0,
					TextTrackList: 0,
					TouchList: 0,
				};
			},
			8509: (t, r, e) => {
				var n = e(317)('span').classList,
					o = n && n.constructor && n.constructor.prototype;
				t.exports = o === Object.prototype ? void 0 : o;
			},
			7871: (t) => {
				t.exports = 'object' == typeof window;
			},
			1528: (t, r, e) => {
				var n = e(8113),
					o = e(7854);
				t.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== o.Pebble;
			},
			6833: (t, r, e) => {
				var n = e(8113);
				t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
			},
			5268: (t, r, e) => {
				var n = e(4326),
					o = e(7854);
				t.exports = 'process' == n(o.process);
			},
			1036: (t, r, e) => {
				var n = e(8113);
				t.exports = /web0s(?!.*chrome)/i.test(n);
			},
			8113: (t, r, e) => {
				var n = e(5005);
				t.exports = n('navigator', 'userAgent') || '';
			},
			7392: (t, r, e) => {
				var n,
					o,
					i = e(7854),
					a = e(8113),
					u = i.process,
					c = i.Deno,
					s = (u && u.versions) || (c && c.version),
					f = s && s.v8;
				f && (o = (n = f.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
					!o &&
						a &&
						(!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
						(n = a.match(/Chrome\/(\d+)/)) &&
						(o = +n[1]),
					(t.exports = o);
			},
			748: (t) => {
				t.exports = [
					'constructor',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'toLocaleString',
					'toString',
					'valueOf',
				];
			},
			2914: (t, r, e) => {
				var n = e(7293),
					o = e(9114);
				t.exports = !n(function () {
					var t = Error('a');
					return (
						!('stack' in t) ||
						(Object.defineProperty(t, 'stack', o(1, 7)), 7 !== t.stack)
					);
				});
			},
			2109: (t, r, e) => {
				var n = e(7854),
					o = e(1236).f,
					i = e(8880),
					a = e(1320),
					u = e(3505),
					c = e(9920),
					s = e(4705);
				t.exports = function (t, r) {
					var e,
						f,
						p,
						v,
						l,
						h = t.target,
						d = t.global,
						y = t.stat;
					if ((e = d ? n : y ? n[h] || u(h, {}) : (n[h] || {}).prototype))
						for (f in r) {
							if (
								((v = r[f]),
								(p = t.noTargetGet ? (l = o(e, f)) && l.value : e[f]),
								!s(d ? f : h + (y ? '.' : '#') + f, t.forced) && void 0 !== p)
							) {
								if (typeof v == typeof p) continue;
								c(v, p);
							}
							(t.sham || (p && p.sham)) && i(v, 'sham', !0), a(e, f, v, t);
						}
				};
			},
			7293: (t) => {
				t.exports = function (t) {
					try {
						return !!t();
					} catch (t) {
						return !0;
					}
				};
			},
			2104: (t, r, e) => {
				var n = e(4374),
					o = Function.prototype,
					i = o.apply,
					a = o.call;
				t.exports =
					('object' == typeof Reflect && Reflect.apply) ||
					(n
						? a.bind(i)
						: function () {
								return a.apply(i, arguments);
						  });
			},
			9974: (t, r, e) => {
				var n = e(1702),
					o = e(9662),
					i = e(4374),
					a = n(n.bind);
				t.exports = function (t, r) {
					return (
						o(t),
						void 0 === r
							? t
							: i
							? a(t, r)
							: function () {
									return t.apply(r, arguments);
							  }
					);
				};
			},
			4374: (t, r, e) => {
				var n = e(7293);
				t.exports = !n(function () {
					var t = function () {}.bind();
					return 'function' != typeof t || t.hasOwnProperty('prototype');
				});
			},
			6916: (t, r, e) => {
				var n = e(4374),
					o = Function.prototype.call;
				t.exports = n
					? o.bind(o)
					: function () {
							return o.apply(o, arguments);
					  };
			},
			6530: (t, r, e) => {
				var n = e(9781),
					o = e(2597),
					i = Function.prototype,
					a = n && Object.getOwnPropertyDescriptor,
					u = o(i, 'name'),
					c = u && 'something' === function () {}.name,
					s = u && (!n || (n && a(i, 'name').configurable));
				t.exports = { EXISTS: u, PROPER: c, CONFIGURABLE: s };
			},
			1702: (t, r, e) => {
				var n = e(4374),
					o = Function.prototype,
					i = o.bind,
					a = o.call,
					u = n && i.bind(a, a);
				t.exports = n
					? function (t) {
							return t && u(t);
					  }
					: function (t) {
							return (
								t &&
								function () {
									return a.apply(t, arguments);
								}
							);
					  };
			},
			5005: (t, r, e) => {
				var n = e(7854),
					o = e(614),
					i = function (t) {
						return o(t) ? t : void 0;
					};
				t.exports = function (t, r) {
					return arguments.length < 2 ? i(n[t]) : n[t] && n[t][r];
				};
			},
			1246: (t, r, e) => {
				var n = e(648),
					o = e(8173),
					i = e(7497),
					a = e(5112)('iterator');
				t.exports = function (t) {
					if (null != t) return o(t, a) || o(t, '@@iterator') || i[n(t)];
				};
			},
			8554: (t, r, e) => {
				var n = e(7854),
					o = e(6916),
					i = e(9662),
					a = e(9670),
					u = e(6330),
					c = e(1246),
					s = n.TypeError;
				t.exports = function (t, r) {
					var e = arguments.length < 2 ? c(t) : r;
					if (i(e)) return a(o(e, t));
					throw s(u(t) + ' is not iterable');
				};
			},
			8173: (t, r, e) => {
				var n = e(9662);
				t.exports = function (t, r) {
					var e = t[r];
					return null == e ? void 0 : n(e);
				};
			},
			7854: (t, r, e) => {
				var n = function (t) {
					return t && t.Math == Math && t;
				};
				t.exports =
					n('object' == typeof globalThis && globalThis) ||
					n('object' == typeof window && window) ||
					n('object' == typeof self && self) ||
					n('object' == typeof e.g && e.g) ||
					(function () {
						return this;
					})() ||
					Function('return this')();
			},
			2597: (t, r, e) => {
				var n = e(1702),
					o = e(7908),
					i = n({}.hasOwnProperty);
				t.exports =
					Object.hasOwn ||
					function (t, r) {
						return i(o(t), r);
					};
			},
			3501: (t) => {
				t.exports = {};
			},
			842: (t, r, e) => {
				var n = e(7854);
				t.exports = function (t, r) {
					var e = n.console;
					e && e.error && (1 == arguments.length ? e.error(t) : e.error(t, r));
				};
			},
			490: (t, r, e) => {
				var n = e(5005);
				t.exports = n('document', 'documentElement');
			},
			4664: (t, r, e) => {
				var n = e(9781),
					o = e(7293),
					i = e(317);
				t.exports =
					!n &&
					!o(function () {
						return (
							7 !=
							Object.defineProperty(i('div'), 'a', {
								get: function () {
									return 7;
								},
							}).a
						);
					});
			},
			8361: (t, r, e) => {
				var n = e(7854),
					o = e(1702),
					i = e(7293),
					a = e(4326),
					u = n.Object,
					c = o(''.split);
				t.exports = i(function () {
					return !u('z').propertyIsEnumerable(0);
				})
					? function (t) {
							return 'String' == a(t) ? c(t, '') : u(t);
					  }
					: u;
			},
			9587: (t, r, e) => {
				var n = e(614),
					o = e(111),
					i = e(7674);
				t.exports = function (t, r, e) {
					var a, u;
					return (
						i &&
							n((a = r.constructor)) &&
							a !== e &&
							o((u = a.prototype)) &&
							u !== e.prototype &&
							i(t, u),
						t
					);
				};
			},
			2788: (t, r, e) => {
				var n = e(1702),
					o = e(614),
					i = e(5465),
					a = n(Function.toString);
				o(i.inspectSource) ||
					(i.inspectSource = function (t) {
						return a(t);
					}),
					(t.exports = i.inspectSource);
			},
			8340: (t, r, e) => {
				var n = e(111),
					o = e(8880);
				t.exports = function (t, r) {
					n(r) && 'cause' in r && o(t, 'cause', r.cause);
				};
			},
			9909: (t, r, e) => {
				var n,
					o,
					i,
					a = e(8536),
					u = e(7854),
					c = e(1702),
					s = e(111),
					f = e(8880),
					p = e(2597),
					v = e(5465),
					l = e(6200),
					h = e(3501),
					d = 'Object already initialized',
					y = u.TypeError,
					m = u.WeakMap;
				if (a || v.state) {
					var g = v.state || (v.state = new m()),
						b = c(g.get),
						x = c(g.has),
						w = c(g.set);
					(n = function (t, r) {
						if (x(g, t)) throw new y(d);
						return (r.facade = t), w(g, t, r), r;
					}),
						(o = function (t) {
							return b(g, t) || {};
						}),
						(i = function (t) {
							return x(g, t);
						});
				} else {
					var S = l('state');
					(h[S] = !0),
						(n = function (t, r) {
							if (p(t, S)) throw new y(d);
							return (r.facade = t), f(t, S, r), r;
						}),
						(o = function (t) {
							return p(t, S) ? t[S] : {};
						}),
						(i = function (t) {
							return p(t, S);
						});
				}
				t.exports = {
					set: n,
					get: o,
					has: i,
					enforce: function (t) {
						return i(t) ? o(t) : n(t, {});
					},
					getterFor: function (t) {
						return function (r) {
							var e;
							if (!s(r) || (e = o(r)).type !== t)
								throw y('Incompatible receiver, ' + t + ' required');
							return e;
						};
					},
				};
			},
			7659: (t, r, e) => {
				var n = e(5112),
					o = e(7497),
					i = n('iterator'),
					a = Array.prototype;
				t.exports = function (t) {
					return void 0 !== t && (o.Array === t || a[i] === t);
				};
			},
			3157: (t, r, e) => {
				var n = e(4326);
				t.exports =
					Array.isArray ||
					function (t) {
						return 'Array' == n(t);
					};
			},
			614: (t) => {
				t.exports = function (t) {
					return 'function' == typeof t;
				};
			},
			4411: (t, r, e) => {
				var n = e(1702),
					o = e(7293),
					i = e(614),
					a = e(648),
					u = e(5005),
					c = e(2788),
					s = function () {},
					f = [],
					p = u('Reflect', 'construct'),
					v = /^\s*(?:class|function)\b/,
					l = n(v.exec),
					h = !v.exec(s),
					d = function (t) {
						if (!i(t)) return !1;
						try {
							return p(s, f, t), !0;
						} catch (t) {
							return !1;
						}
					},
					y = function (t) {
						if (!i(t)) return !1;
						switch (a(t)) {
							case 'AsyncFunction':
							case 'GeneratorFunction':
							case 'AsyncGeneratorFunction':
								return !1;
						}
						try {
							return h || !!l(v, c(t));
						} catch (t) {
							return !0;
						}
					};
				(y.sham = !0),
					(t.exports =
						!p ||
						o(function () {
							var t;
							return (
								d(d.call) ||
								!d(Object) ||
								!d(function () {
									t = !0;
								}) ||
								t
							);
						})
							? y
							: d);
			},
			4705: (t, r, e) => {
				var n = e(7293),
					o = e(614),
					i = /#|\.prototype\./,
					a = function (t, r) {
						var e = c[u(t)];
						return e == f || (e != s && (o(r) ? n(r) : !!r));
					},
					u = (a.normalize = function (t) {
						return String(t).replace(i, '.').toLowerCase();
					}),
					c = (a.data = {}),
					s = (a.NATIVE = 'N'),
					f = (a.POLYFILL = 'P');
				t.exports = a;
			},
			111: (t, r, e) => {
				var n = e(614);
				t.exports = function (t) {
					return 'object' == typeof t ? null !== t : n(t);
				};
			},
			1913: (t) => {
				t.exports = !1;
			},
			2190: (t, r, e) => {
				var n = e(7854),
					o = e(5005),
					i = e(614),
					a = e(7976),
					u = e(3307),
					c = n.Object;
				t.exports = u
					? function (t) {
							return 'symbol' == typeof t;
					  }
					: function (t) {
							var r = o('Symbol');
							return i(r) && a(r.prototype, c(t));
					  };
			},
			408: (t, r, e) => {
				var n = e(7854),
					o = e(9974),
					i = e(6916),
					a = e(9670),
					u = e(6330),
					c = e(7659),
					s = e(6244),
					f = e(7976),
					p = e(8554),
					v = e(1246),
					l = e(9212),
					h = n.TypeError,
					d = function (t, r) {
						(this.stopped = t), (this.result = r);
					},
					y = d.prototype;
				t.exports = function (t, r, e) {
					var n,
						m,
						g,
						b,
						x,
						w,
						S,
						j = e && e.that,
						O = !(!e || !e.AS_ENTRIES),
						E = !(!e || !e.IS_ITERATOR),
						T = !(!e || !e.INTERRUPTED),
						P = o(r, j),
						L = function (t) {
							return n && l(n, 'normal', t), new d(!0, t);
						},
						_ = function (t) {
							return O
								? (a(t), T ? P(t[0], t[1], L) : P(t[0], t[1]))
								: T
								? P(t, L)
								: P(t);
						};
					if (E) n = t;
					else {
						if (!(m = v(t))) throw h(u(t) + ' is not iterable');
						if (c(m)) {
							for (g = 0, b = s(t); b > g; g++)
								if ((x = _(t[g])) && f(y, x)) return x;
							return new d(!1);
						}
						n = p(t, m);
					}
					for (w = n.next; !(S = i(w, n)).done; ) {
						try {
							x = _(S.value);
						} catch (t) {
							l(n, 'throw', t);
						}
						if ('object' == typeof x && x && f(y, x)) return x;
					}
					return new d(!1);
				};
			},
			9212: (t, r, e) => {
				var n = e(6916),
					o = e(9670),
					i = e(8173);
				t.exports = function (t, r, e) {
					var a, u;
					o(t);
					try {
						if (!(a = i(t, 'return'))) {
							if ('throw' === r) throw e;
							return e;
						}
						a = n(a, t);
					} catch (t) {
						(u = !0), (a = t);
					}
					if ('throw' === r) throw e;
					if (u) throw a;
					return o(a), e;
				};
			},
			7497: (t) => {
				t.exports = {};
			},
			6244: (t, r, e) => {
				var n = e(7466);
				t.exports = function (t) {
					return n(t.length);
				};
			},
			5948: (t, r, e) => {
				var n,
					o,
					i,
					a,
					u,
					c,
					s,
					f,
					p = e(7854),
					v = e(9974),
					l = e(1236).f,
					h = e(261).set,
					d = e(6833),
					y = e(1528),
					m = e(1036),
					g = e(5268),
					b = p.MutationObserver || p.WebKitMutationObserver,
					x = p.document,
					w = p.process,
					S = p.Promise,
					j = l(p, 'queueMicrotask'),
					O = j && j.value;
				O ||
					((n = function () {
						var t, r;
						for (g && (t = w.domain) && t.exit(); o; ) {
							(r = o.fn), (o = o.next);
							try {
								r();
							} catch (t) {
								throw (o ? a() : (i = void 0), t);
							}
						}
						(i = void 0), t && t.enter();
					}),
					d || g || m || !b || !x
						? !y && S && S.resolve
							? (((s = S.resolve(void 0)).constructor = S),
							  (f = v(s.then, s)),
							  (a = function () {
									f(n);
							  }))
							: g
							? (a = function () {
									w.nextTick(n);
							  })
							: ((h = v(h, p)),
							  (a = function () {
									h(n);
							  }))
						: ((u = !0),
						  (c = x.createTextNode('')),
						  new b(n).observe(c, { characterData: !0 }),
						  (a = function () {
								c.data = u = !u;
						  }))),
					(t.exports =
						O ||
						function (t) {
							var r = { fn: t, next: void 0 };
							i && (i.next = r), o || ((o = r), a()), (i = r);
						});
			},
			3366: (t, r, e) => {
				var n = e(7854);
				t.exports = n.Promise;
			},
			133: (t, r, e) => {
				var n = e(7392),
					o = e(7293);
				t.exports =
					!!Object.getOwnPropertySymbols &&
					!o(function () {
						var t = Symbol();
						return (
							!String(t) ||
							!(Object(t) instanceof Symbol) ||
							(!Symbol.sham && n && n < 41)
						);
					});
			},
			8536: (t, r, e) => {
				var n = e(7854),
					o = e(614),
					i = e(2788),
					a = n.WeakMap;
				t.exports = o(a) && /native code/.test(i(a));
			},
			8523: (t, r, e) => {
				'use strict';
				var n = e(9662),
					o = function (t) {
						var r, e;
						(this.promise = new t(function (t, n) {
							if (void 0 !== r || void 0 !== e)
								throw TypeError('Bad Promise constructor');
							(r = t), (e = n);
						})),
							(this.resolve = n(r)),
							(this.reject = n(e));
					};
				t.exports.f = function (t) {
					return new o(t);
				};
			},
			6277: (t, r, e) => {
				var n = e(1340);
				t.exports = function (t, r) {
					return void 0 === t ? (arguments.length < 2 ? '' : r) : n(t);
				};
			},
			3070: (t, r, e) => {
				var n = e(7854),
					o = e(9781),
					i = e(4664),
					a = e(3353),
					u = e(9670),
					c = e(4948),
					s = n.TypeError,
					f = Object.defineProperty,
					p = Object.getOwnPropertyDescriptor,
					v = 'enumerable',
					l = 'configurable',
					h = 'writable';
				r.f = o
					? a
						? function (t, r, e) {
								if (
									(u(t),
									(r = c(r)),
									u(e),
									'function' == typeof t &&
										'prototype' === r &&
										'value' in e &&
										h in e &&
										!e.writable)
								) {
									var n = p(t, r);
									n &&
										n.writable &&
										((t[r] = e.value),
										(e = {
											configurable: l in e ? e.configurable : n.configurable,
											enumerable: v in e ? e.enumerable : n.enumerable,
											writable: !1,
										}));
								}
								return f(t, r, e);
						  }
						: f
					: function (t, r, e) {
							if ((u(t), (r = c(r)), u(e), i))
								try {
									return f(t, r, e);
								} catch (t) {}
							if ('get' in e || 'set' in e) throw s('Accessors not supported');
							return 'value' in e && (t[r] = e.value), t;
					  };
			},
			1236: (t, r, e) => {
				var n = e(9781),
					o = e(6916),
					i = e(5296),
					a = e(9114),
					u = e(5656),
					c = e(4948),
					s = e(2597),
					f = e(4664),
					p = Object.getOwnPropertyDescriptor;
				r.f = n
					? p
					: function (t, r) {
							if (((t = u(t)), (r = c(r)), f))
								try {
									return p(t, r);
								} catch (t) {}
							if (s(t, r)) return a(!o(i.f, t, r), t[r]);
					  };
			},
			8006: (t, r, e) => {
				var n = e(6324),
					o = e(748).concat('length', 'prototype');
				r.f =
					Object.getOwnPropertyNames ||
					function (t) {
						return n(t, o);
					};
			},
			5181: (t, r) => {
				r.f = Object.getOwnPropertySymbols;
			},
			7976: (t, r, e) => {
				var n = e(1702);
				t.exports = n({}.isPrototypeOf);
			},
			6324: (t, r, e) => {
				var n = e(1702),
					o = e(2597),
					i = e(5656),
					a = e(1318).indexOf,
					u = e(3501),
					c = n([].push);
				t.exports = function (t, r) {
					var e,
						n = i(t),
						s = 0,
						f = [];
					for (e in n) !o(u, e) && o(n, e) && c(f, e);
					for (; r.length > s; ) o(n, (e = r[s++])) && (~a(f, e) || c(f, e));
					return f;
				};
			},
			1956: (t, r, e) => {
				var n = e(6324),
					o = e(748);
				t.exports =
					Object.keys ||
					function (t) {
						return n(t, o);
					};
			},
			5296: (t, r) => {
				'use strict';
				var e = {}.propertyIsEnumerable,
					n = Object.getOwnPropertyDescriptor,
					o = n && !e.call({ 1: 2 }, 1);
				r.f = o
					? function (t) {
							var r = n(this, t);
							return !!r && r.enumerable;
					  }
					: e;
			},
			7674: (t, r, e) => {
				var n = e(1702),
					o = e(9670),
					i = e(6077);
				t.exports =
					Object.setPrototypeOf ||
					('__proto__' in {}
						? (function () {
								var t,
									r = !1,
									e = {};
								try {
									(t = n(
										Object.getOwnPropertyDescriptor(
											Object.prototype,
											'__proto__'
										).set
									))(e, []),
										(r = e instanceof Array);
								} catch (t) {}
								return function (e, n) {
									return o(e), i(n), r ? t(e, n) : (e.__proto__ = n), e;
								};
						  })()
						: void 0);
			},
			288: (t, r, e) => {
				'use strict';
				var n = e(1694),
					o = e(648);
				t.exports = n
					? {}.toString
					: function () {
							return '[object ' + o(this) + ']';
					  };
			},
			2140: (t, r, e) => {
				var n = e(7854),
					o = e(6916),
					i = e(614),
					a = e(111),
					u = n.TypeError;
				t.exports = function (t, r) {
					var e, n;
					if ('string' === r && i((e = t.toString)) && !a((n = o(e, t))))
						return n;
					if (i((e = t.valueOf)) && !a((n = o(e, t)))) return n;
					if ('string' !== r && i((e = t.toString)) && !a((n = o(e, t))))
						return n;
					throw u("Can't convert object to primitive value");
				};
			},
			3887: (t, r, e) => {
				var n = e(5005),
					o = e(1702),
					i = e(8006),
					a = e(5181),
					u = e(9670),
					c = o([].concat);
				t.exports =
					n('Reflect', 'ownKeys') ||
					function (t) {
						var r = i.f(u(t)),
							e = a.f;
						return e ? c(r, e(t)) : r;
					};
			},
			2534: (t) => {
				t.exports = function (t) {
					try {
						return { error: !1, value: t() };
					} catch (t) {
						return { error: !0, value: t };
					}
				};
			},
			9478: (t, r, e) => {
				var n = e(9670),
					o = e(111),
					i = e(8523);
				t.exports = function (t, r) {
					if ((n(t), o(r) && r.constructor === t)) return r;
					var e = i.f(t);
					return (0, e.resolve)(r), e.promise;
				};
			},
			8572: (t) => {
				var r = function () {
					(this.head = null), (this.tail = null);
				};
				(r.prototype = {
					add: function (t) {
						var r = { item: t, next: null };
						this.head ? (this.tail.next = r) : (this.head = r), (this.tail = r);
					},
					get: function () {
						var t = this.head;
						if (t)
							return (
								(this.head = t.next),
								this.tail === t && (this.tail = null),
								t.item
							);
					},
				}),
					(t.exports = r);
			},
			2248: (t, r, e) => {
				var n = e(1320);
				t.exports = function (t, r, e) {
					for (var o in r) n(t, o, r[o], e);
					return t;
				};
			},
			1320: (t, r, e) => {
				var n = e(7854),
					o = e(614),
					i = e(2597),
					a = e(8880),
					u = e(3505),
					c = e(2788),
					s = e(9909),
					f = e(6530).CONFIGURABLE,
					p = s.get,
					v = s.enforce,
					l = String(String).split('String');
				(t.exports = function (t, r, e, c) {
					var s,
						p = !!c && !!c.unsafe,
						h = !!c && !!c.enumerable,
						d = !!c && !!c.noTargetGet,
						y = c && void 0 !== c.name ? c.name : r;
					o(e) &&
						('Symbol(' === String(y).slice(0, 7) &&
							(y = '[' + String(y).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
						(!i(e, 'name') || (f && e.name !== y)) && a(e, 'name', y),
						(s = v(e)).source ||
							(s.source = l.join('string' == typeof y ? y : ''))),
						t !== n
							? (p ? !d && t[r] && (h = !0) : delete t[r],
							  h ? (t[r] = e) : a(t, r, e))
							: h
							? (t[r] = e)
							: u(r, e);
				})(Function.prototype, 'toString', function () {
					return (o(this) && p(this).source) || c(this);
				});
			},
			4488: (t, r, e) => {
				var n = e(7854).TypeError;
				t.exports = function (t) {
					if (null == t) throw n("Can't call method on " + t);
					return t;
				};
			},
			3505: (t, r, e) => {
				var n = e(7854),
					o = Object.defineProperty;
				t.exports = function (t, r) {
					try {
						o(n, t, { value: r, configurable: !0, writable: !0 });
					} catch (e) {
						n[t] = r;
					}
					return r;
				};
			},
			6340: (t, r, e) => {
				'use strict';
				var n = e(5005),
					o = e(3070),
					i = e(5112),
					a = e(9781),
					u = i('species');
				t.exports = function (t) {
					var r = n(t),
						e = o.f;
					a &&
						r &&
						!r[u] &&
						e(r, u, {
							configurable: !0,
							get: function () {
								return this;
							},
						});
				};
			},
			8003: (t, r, e) => {
				var n = e(3070).f,
					o = e(2597),
					i = e(5112)('toStringTag');
				t.exports = function (t, r, e) {
					t && !e && (t = t.prototype),
						t && !o(t, i) && n(t, i, { configurable: !0, value: r });
				};
			},
			6200: (t, r, e) => {
				var n = e(2309),
					o = e(9711),
					i = n('keys');
				t.exports = function (t) {
					return i[t] || (i[t] = o(t));
				};
			},
			5465: (t, r, e) => {
				var n = e(7854),
					o = e(3505),
					i = '__core-js_shared__',
					a = n[i] || o(i, {});
				t.exports = a;
			},
			2309: (t, r, e) => {
				var n = e(1913),
					o = e(5465);
				(t.exports = function (t, r) {
					return o[t] || (o[t] = void 0 !== r ? r : {});
				})('versions', []).push({
					version: '3.21.1',
					mode: n ? 'pure' : 'global',
					copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
					license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
					source: 'https://github.com/zloirock/core-js',
				});
			},
			6707: (t, r, e) => {
				var n = e(9670),
					o = e(9483),
					i = e(5112)('species');
				t.exports = function (t, r) {
					var e,
						a = n(t).constructor;
					return void 0 === a || null == (e = n(a)[i]) ? r : o(e);
				};
			},
			261: (t, r, e) => {
				var n,
					o,
					i,
					a,
					u = e(7854),
					c = e(2104),
					s = e(9974),
					f = e(614),
					p = e(2597),
					v = e(7293),
					l = e(490),
					h = e(206),
					d = e(317),
					y = e(8053),
					m = e(6833),
					g = e(5268),
					b = u.setImmediate,
					x = u.clearImmediate,
					w = u.process,
					S = u.Dispatch,
					j = u.Function,
					O = u.MessageChannel,
					E = u.String,
					T = 0,
					P = {},
					L = 'onreadystatechange';
				try {
					n = u.location;
				} catch (t) {}
				var _ = function (t) {
						if (p(P, t)) {
							var r = P[t];
							delete P[t], r();
						}
					},
					F = function (t) {
						return function () {
							_(t);
						};
					},
					M = function (t) {
						_(t.data);
					},
					k = function (t) {
						u.postMessage(E(t), n.protocol + '//' + n.host);
					};
				(b && x) ||
					((b = function (t) {
						y(arguments.length, 1);
						var r = f(t) ? t : j(t),
							e = h(arguments, 1);
						return (
							(P[++T] = function () {
								c(r, void 0, e);
							}),
							o(T),
							T
						);
					}),
					(x = function (t) {
						delete P[t];
					}),
					g
						? (o = function (t) {
								w.nextTick(F(t));
						  })
						: S && S.now
						? (o = function (t) {
								S.now(F(t));
						  })
						: O && !m
						? ((a = (i = new O()).port2),
						  (i.port1.onmessage = M),
						  (o = s(a.postMessage, a)))
						: u.addEventListener &&
						  f(u.postMessage) &&
						  !u.importScripts &&
						  n &&
						  'file:' !== n.protocol &&
						  !v(k)
						? ((o = k), u.addEventListener('message', M, !1))
						: (o =
								L in d('script')
									? function (t) {
											l.appendChild(d('script')).onreadystatechange =
												function () {
													l.removeChild(this), _(t);
												};
									  }
									: function (t) {
											setTimeout(F(t), 0);
									  })),
					(t.exports = { set: b, clear: x });
			},
			1400: (t, r, e) => {
				var n = e(9303),
					o = Math.max,
					i = Math.min;
				t.exports = function (t, r) {
					var e = n(t);
					return e < 0 ? o(e + r, 0) : i(e, r);
				};
			},
			5656: (t, r, e) => {
				var n = e(8361),
					o = e(4488);
				t.exports = function (t) {
					return n(o(t));
				};
			},
			9303: (t) => {
				var r = Math.ceil,
					e = Math.floor;
				t.exports = function (t) {
					var n = +t;
					return n != n || 0 === n ? 0 : (n > 0 ? e : r)(n);
				};
			},
			7466: (t, r, e) => {
				var n = e(9303),
					o = Math.min;
				t.exports = function (t) {
					return t > 0 ? o(n(t), 9007199254740991) : 0;
				};
			},
			7908: (t, r, e) => {
				var n = e(7854),
					o = e(4488),
					i = n.Object;
				t.exports = function (t) {
					return i(o(t));
				};
			},
			7593: (t, r, e) => {
				var n = e(7854),
					o = e(6916),
					i = e(111),
					a = e(2190),
					u = e(8173),
					c = e(2140),
					s = e(5112),
					f = n.TypeError,
					p = s('toPrimitive');
				t.exports = function (t, r) {
					if (!i(t) || a(t)) return t;
					var e,
						n = u(t, p);
					if (n) {
						if (
							(void 0 === r && (r = 'default'), (e = o(n, t, r)), !i(e) || a(e))
						)
							return e;
						throw f("Can't convert object to primitive value");
					}
					return void 0 === r && (r = 'number'), c(t, r);
				};
			},
			4948: (t, r, e) => {
				var n = e(7593),
					o = e(2190);
				t.exports = function (t) {
					var r = n(t, 'string');
					return o(r) ? r : r + '';
				};
			},
			1694: (t, r, e) => {
				var n = {};
				(n[e(5112)('toStringTag')] = 'z'),
					(t.exports = '[object z]' === String(n));
			},
			1340: (t, r, e) => {
				var n = e(7854),
					o = e(648),
					i = n.String;
				t.exports = function (t) {
					if ('Symbol' === o(t))
						throw TypeError('Cannot convert a Symbol value to a string');
					return i(t);
				};
			},
			6330: (t, r, e) => {
				var n = e(7854).String;
				t.exports = function (t) {
					try {
						return n(t);
					} catch (t) {
						return 'Object';
					}
				};
			},
			9711: (t, r, e) => {
				var n = e(1702),
					o = 0,
					i = Math.random(),
					a = n((1).toString);
				t.exports = function (t) {
					return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + a(++o + i, 36);
				};
			},
			3307: (t, r, e) => {
				var n = e(133);
				t.exports = n && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
			},
			3353: (t, r, e) => {
				var n = e(9781),
					o = e(7293);
				t.exports =
					n &&
					o(function () {
						return (
							42 !=
							Object.defineProperty(function () {}, 'prototype', {
								value: 42,
								writable: !1,
							}).prototype
						);
					});
			},
			8053: (t, r, e) => {
				var n = e(7854).TypeError;
				t.exports = function (t, r) {
					if (t < r) throw n('Not enough arguments');
					return t;
				};
			},
			5112: (t, r, e) => {
				var n = e(7854),
					o = e(2309),
					i = e(2597),
					a = e(9711),
					u = e(133),
					c = e(3307),
					s = o('wks'),
					f = n.Symbol,
					p = f && f.for,
					v = c ? f : (f && f.withoutSetter) || a;
				t.exports = function (t) {
					if (!i(s, t) || (!u && 'string' != typeof s[t])) {
						var r = 'Symbol.' + t;
						u && i(f, t) ? (s[t] = f[t]) : (s[t] = c && p ? p(r) : v(r));
					}
					return s[t];
				};
			},
			9191: (t, r, e) => {
				'use strict';
				var n = e(5005),
					o = e(2597),
					i = e(8880),
					a = e(7976),
					u = e(7674),
					c = e(9920),
					s = e(9587),
					f = e(6277),
					p = e(8340),
					v = e(7741),
					l = e(2914),
					h = e(1913);
				t.exports = function (t, r, e, d) {
					var y = d ? 2 : 1,
						m = t.split('.'),
						g = m[m.length - 1],
						b = n.apply(null, m);
					if (b) {
						var x = b.prototype;
						if ((!h && o(x, 'cause') && delete x.cause, !e)) return b;
						var w = n('Error'),
							S = r(function (t, r) {
								var e = f(d ? r : t, void 0),
									n = d ? new b(t) : new b();
								return (
									void 0 !== e && i(n, 'message', e),
									l && i(n, 'stack', v(n.stack, 2)),
									this && a(x, this) && s(n, this, S),
									arguments.length > y && p(n, arguments[y]),
									n
								);
							});
						if (
							((S.prototype = x),
							'Error' !== g && (u ? u(S, w) : c(S, w, { name: !0 })),
							c(S, b),
							!h)
						)
							try {
								x.name !== g && i(x, 'name', g), (x.constructor = S);
							} catch (t) {}
						return S;
					}
				};
			},
			1703: (t, r, e) => {
				var n = e(2109),
					o = e(7854),
					i = e(2104),
					a = e(9191),
					u = 'WebAssembly',
					c = o.WebAssembly,
					s = 7 !== Error('e', { cause: 7 }).cause,
					f = function (t, r) {
						var e = {};
						(e[t] = a(t, r, s)), n({ global: !0, forced: s }, e);
					},
					p = function (t, r) {
						if (c && c[t]) {
							var e = {};
							(e[t] = a('WebAssembly.' + t, r, s)),
								n({ target: u, stat: !0, forced: s }, e);
						}
					};
				f('Error', function (t) {
					return function (r) {
						return i(t, this, arguments);
					};
				}),
					f('EvalError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					f('RangeError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					f('ReferenceError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					f('SyntaxError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					f('TypeError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					f('URIError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					p('CompileError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					p('LinkError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					}),
					p('RuntimeError', function (t) {
						return function (r) {
							return i(t, this, arguments);
						};
					});
			},
			8862: (t, r, e) => {
				var n = e(2109),
					o = e(7854),
					i = e(5005),
					a = e(2104),
					u = e(1702),
					c = e(7293),
					s = o.Array,
					f = i('JSON', 'stringify'),
					p = u(/./.exec),
					v = u(''.charAt),
					l = u(''.charCodeAt),
					h = u(''.replace),
					d = u((1).toString),
					y = /[\uD800-\uDFFF]/g,
					m = /^[\uD800-\uDBFF]$/,
					g = /^[\uDC00-\uDFFF]$/,
					b = function (t, r, e) {
						var n = v(e, r - 1),
							o = v(e, r + 1);
						return (p(m, t) && !p(g, o)) || (p(g, t) && !p(m, n))
							? '\\u' + d(l(t, 0), 16)
							: t;
					},
					x = c(function () {
						return (
							'"\\udf06\\ud834"' !== f('\udf06\ud834') ||
							'"\\udead"' !== f('\udead')
						);
					});
				f &&
					n(
						{ target: 'JSON', stat: !0, forced: x },
						{
							stringify: function (t, r, e) {
								for (var n = 0, o = arguments.length, i = s(o); n < o; n++)
									i[n] = arguments[n];
								var u = a(f, null, i);
								return 'string' == typeof u ? h(u, y, b) : u;
							},
						}
					);
			},
			9070: (t, r, e) => {
				var n = e(2109),
					o = e(9781),
					i = e(3070).f;
				n(
					{
						target: 'Object',
						stat: !0,
						forced: Object.defineProperty !== i,
						sham: !o,
					},
					{ defineProperty: i }
				);
			},
			7941: (t, r, e) => {
				var n = e(2109),
					o = e(7908),
					i = e(1956);
				n(
					{
						target: 'Object',
						stat: !0,
						forced: e(7293)(function () {
							i(1);
						}),
					},
					{
						keys: function (t) {
							return i(o(t));
						},
					}
				);
			},
			1539: (t, r, e) => {
				var n = e(1694),
					o = e(1320),
					i = e(288);
				n || o(Object.prototype, 'toString', i, { unsafe: !0 });
			},
			8674: (t, r, e) => {
				'use strict';
				var n,
					o,
					i,
					a,
					u = e(2109),
					c = e(1913),
					s = e(7854),
					f = e(5005),
					p = e(6916),
					v = e(3366),
					l = e(1320),
					h = e(2248),
					d = e(7674),
					y = e(8003),
					m = e(6340),
					g = e(9662),
					b = e(614),
					x = e(111),
					w = e(5787),
					S = e(2788),
					j = e(408),
					O = e(7072),
					E = e(6707),
					T = e(261).set,
					P = e(5948),
					L = e(9478),
					_ = e(842),
					F = e(8523),
					M = e(2534),
					k = e(8572),
					A = e(9909),
					D = e(4705),
					R = e(5112),
					I = e(7871),
					C = e(5268),
					N = e(7392),
					G = R('species'),
					V = 'Promise',
					q = A.getterFor(V),
					z = A.set,
					H = A.getterFor(V),
					U = v && v.prototype,
					W = v,
					B = U,
					J = s.TypeError,
					K = s.document,
					$ = s.process,
					X = F.f,
					Y = X,
					Q = !!(K && K.createEvent && s.dispatchEvent),
					Z = b(s.PromiseRejectionEvent),
					tt = 'unhandledrejection',
					rt = !1,
					et = D(V, function () {
						var t = S(W),
							r = t !== String(W);
						if (!r && 66 === N) return !0;
						if (c && !B.finally) return !0;
						if (N >= 51 && /native code/.test(t)) return !1;
						var e = new W(function (t) {
								t(1);
							}),
							n = function (t) {
								t(
									function () {},
									function () {}
								);
							};
						return (
							((e.constructor = {})[G] = n),
							!(rt = e.then(function () {}) instanceof n) || (!r && I && !Z)
						);
					}),
					nt =
						et ||
						!O(function (t) {
							W.all(t).catch(function () {});
						}),
					ot = function (t) {
						var r;
						return !(!x(t) || !b((r = t.then))) && r;
					},
					it = function (t, r) {
						var e,
							n,
							o,
							i = r.value,
							a = 1 == r.state,
							u = a ? t.ok : t.fail,
							c = t.resolve,
							s = t.reject,
							f = t.domain;
						try {
							u
								? (a || (2 === r.rejection && ft(r), (r.rejection = 1)),
								  !0 === u
										? (e = i)
										: (f && f.enter(), (e = u(i)), f && (f.exit(), (o = !0))),
								  e === t.promise
										? s(J('Promise-chain cycle'))
										: (n = ot(e))
										? p(n, e, c, s)
										: c(e))
								: s(i);
						} catch (t) {
							f && !o && f.exit(), s(t);
						}
					},
					at = function (t, r) {
						t.notified ||
							((t.notified = !0),
							P(function () {
								for (var e, n = t.reactions; (e = n.get()); ) it(e, t);
								(t.notified = !1), r && !t.rejection && ct(t);
							}));
					},
					ut = function (t, r, e) {
						var n, o;
						Q
							? (((n = K.createEvent('Event')).promise = r),
							  (n.reason = e),
							  n.initEvent(t, !1, !0),
							  s.dispatchEvent(n))
							: (n = { promise: r, reason: e }),
							!Z && (o = s['on' + t])
								? o(n)
								: t === tt && _('Unhandled promise rejection', e);
					},
					ct = function (t) {
						p(T, s, function () {
							var r,
								e = t.facade,
								n = t.value;
							if (
								st(t) &&
								((r = M(function () {
									C ? $.emit('unhandledRejection', n, e) : ut(tt, e, n);
								})),
								(t.rejection = C || st(t) ? 2 : 1),
								r.error)
							)
								throw r.value;
						});
					},
					st = function (t) {
						return 1 !== t.rejection && !t.parent;
					},
					ft = function (t) {
						p(T, s, function () {
							var r = t.facade;
							C
								? $.emit('rejectionHandled', r)
								: ut('rejectionhandled', r, t.value);
						});
					},
					pt = function (t, r, e) {
						return function (n) {
							t(r, n, e);
						};
					},
					vt = function (t, r, e) {
						t.done ||
							((t.done = !0),
							e && (t = e),
							(t.value = r),
							(t.state = 2),
							at(t, !0));
					},
					lt = function (t, r, e) {
						if (!t.done) {
							(t.done = !0), e && (t = e);
							try {
								if (t.facade === r) throw J("Promise can't be resolved itself");
								var n = ot(r);
								n
									? P(function () {
											var e = { done: !1 };
											try {
												p(n, r, pt(lt, e, t), pt(vt, e, t));
											} catch (r) {
												vt(e, r, t);
											}
									  })
									: ((t.value = r), (t.state = 1), at(t, !1));
							} catch (r) {
								vt({ done: !1 }, r, t);
							}
						}
					};
				if (
					et &&
					((B = (W = function (t) {
						w(this, B), g(t), p(n, this);
						var r = q(this);
						try {
							t(pt(lt, r), pt(vt, r));
						} catch (t) {
							vt(r, t);
						}
					}).prototype),
					((n = function (t) {
						z(this, {
							type: V,
							done: !1,
							notified: !1,
							parent: !1,
							reactions: new k(),
							rejection: !1,
							state: 0,
							value: void 0,
						});
					}).prototype = h(B, {
						then: function (t, r) {
							var e = H(this),
								n = X(E(this, W));
							return (
								(e.parent = !0),
								(n.ok = !b(t) || t),
								(n.fail = b(r) && r),
								(n.domain = C ? $.domain : void 0),
								0 == e.state
									? e.reactions.add(n)
									: P(function () {
											it(n, e);
									  }),
								n.promise
							);
						},
						catch: function (t) {
							return this.then(void 0, t);
						},
					})),
					(o = function () {
						var t = new n(),
							r = q(t);
						(this.promise = t),
							(this.resolve = pt(lt, r)),
							(this.reject = pt(vt, r));
					}),
					(F.f = X =
						function (t) {
							return t === W || t === i ? new o(t) : Y(t);
						}),
					!c && b(v) && U !== Object.prototype)
				) {
					(a = U.then),
						rt ||
							(l(
								U,
								'then',
								function (t, r) {
									var e = this;
									return new W(function (t, r) {
										p(a, e, t, r);
									}).then(t, r);
								},
								{ unsafe: !0 }
							),
							l(U, 'catch', B.catch, { unsafe: !0 }));
					try {
						delete U.constructor;
					} catch (t) {}
					d && d(U, B);
				}
				u({ global: !0, wrap: !0, forced: et }, { Promise: W }),
					y(W, V, !1, !0),
					m(V),
					(i = f(V)),
					u(
						{ target: V, stat: !0, forced: et },
						{
							reject: function (t) {
								var r = X(this);
								return p(r.reject, void 0, t), r.promise;
							},
						}
					),
					u(
						{ target: V, stat: !0, forced: c || et },
						{
							resolve: function (t) {
								return L(c && this === i ? W : this, t);
							},
						}
					),
					u(
						{ target: V, stat: !0, forced: nt },
						{
							all: function (t) {
								var r = this,
									e = X(r),
									n = e.resolve,
									o = e.reject,
									i = M(function () {
										var e = g(r.resolve),
											i = [],
											a = 0,
											u = 1;
										j(t, function (t) {
											var c = a++,
												s = !1;
											u++,
												p(e, r, t).then(function (t) {
													s || ((s = !0), (i[c] = t), --u || n(i));
												}, o);
										}),
											--u || n(i);
									});
								return i.error && o(i.value), e.promise;
							},
							race: function (t) {
								var r = this,
									e = X(r),
									n = e.reject,
									o = M(function () {
										var o = g(r.resolve);
										j(t, function (t) {
											p(o, r, t).then(e.resolve, n);
										});
									});
								return o.error && n(o.value), e.promise;
							},
						}
					);
			},
			4747: (t, r, e) => {
				var n = e(7854),
					o = e(8324),
					i = e(8509),
					a = e(8533),
					u = e(8880),
					c = function (t) {
						if (t && t.forEach !== a)
							try {
								u(t, 'forEach', a);
							} catch (r) {
								t.forEach = a;
							}
					};
				for (var s in o) o[s] && c(n[s] && n[s].prototype);
				c(i);
			},
		},
		r = {};
	function e(n) {
		var o = r[n];
		if (void 0 !== o) return o.exports;
		var i = (r[n] = { exports: {} });
		return t[n](i, i.exports, e), i.exports;
	}
	(e.d = (t, r) => {
		for (var n in r)
			e.o(r, n) &&
				!e.o(t, n) &&
				Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
	}),
		(e.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (t) {
				if ('object' == typeof window) return window;
			}
		})()),
		(e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
		(e.r = (t) => {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 });
		});
	var n = {};
	(() => {
		'use strict';
		e.r(n),
			e.d(n, {
				default: () => p,
				init: () => r,
				send: () => s,
				sendForm: () => f,
			});
		var t = { _origin: 'https://api.emailjs.com' },
			r = function (r) {
				var e =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: 'https://api.emailjs.com';
				(t._userID = r), (t._origin = e);
			},
			o =
				(e(8862),
				function (t, r, e) {
					if (!t)
						throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
					if (!r)
						throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
					if (!e)
						throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
					return !0;
				});
		e(1539), e(8674), e(4747), e(7941), e(1703), e(9070);
		function i(t, r) {
			for (var e = 0; e < r.length; e++) {
				var n = r[e];
				(n.enumerable = n.enumerable || !1),
					(n.configurable = !0),
					'value' in n && (n.writable = !0),
					Object.defineProperty(t, n.key, n);
			}
		}
		function a(t, r, e) {
			return r && i(t.prototype, r), e && i(t, e), t;
		}
		var u = a(function t(r) {
				!(function (t, r) {
					if (!(t instanceof r))
						throw new TypeError('Cannot call a class as a function');
				})(this, t),
					(this.status = r.status),
					(this.text = r.responseText);
			}),
			c = function (r, e) {
				var n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				return new Promise(function (o, i) {
					var a = new XMLHttpRequest();
					a.addEventListener('load', function (t) {
						var r = t.target,
							e = new u(r);
						200 === e.status || 'OK' === e.text ? o(e) : i(e);
					}),
						a.addEventListener('error', function (t) {
							var r = t.target;
							i(new u(r));
						}),
						a.open('POST', t._origin + r, !0),
						Object.keys(n).forEach(function (t) {
							a.setRequestHeader(t, n[t]);
						}),
						a.send(e);
				});
			},
			s = function (r, e, n, i) {
				var a = i || t._userID;
				o(a, r, e);
				var u = {
					lib_version: '3.5.0',
					user_id: a,
					service_id: r,
					template_id: e,
					template_params: n,
				};
				return c('/api/v1.0/email/send', JSON.stringify(u), {
					'Content-type': 'application/json',
				});
			},
			f = function (r, e, n, i) {
				var a = i || t._userID,
					u = (function (t) {
						var r;
						if (
							!(r = 'string' == typeof t ? document.querySelector(t) : t) ||
							'FORM' !== r.nodeName
						)
							throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
						return r;
					})(n);
				o(a, r, e);
				var s = new FormData(u);
				return (
					s.append('lib_version', '3.5.0'),
					s.append('service_id', r),
					s.append('template_id', e),
					s.append('user_id', a),
					c('/api/v1.0/email/send-form', s)
				);
			};
		const p = { init: r, send: s, sendForm: f };
	})(),
		(self.emailjs = n);
})();

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
