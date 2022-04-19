/*! For license information please see globo_swatch.js.LICENSE.txt */
!(function (t) {
	var e = {};
	function n(i) {
		if (e[i]) return e[i].exports;
		var r = (e[i] = { i: i, l: !1, exports: {} });
		return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function (t, e, i) {
			n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
		}),
		(n.r = function (t) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(t, '__esModule', { value: !0 });
		}),
		(n.t = function (t, e) {
			if ((1 & e && (t = n(t)), 8 & e)) return t;
			if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
			var i = Object.create(null);
			if (
				(n.r(i),
				Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
				2 & e && 'string' != typeof t)
			)
				for (var r in t)
					n.d(
						i,
						r,
						function (e) {
							return t[e];
						}.bind(null, r)
					);
			return i;
		}),
		(n.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return n.d(e, 'a', e), e;
		}),
		(n.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = '/'),
		n((n.s = 167));
})({
	1: function (t, e, n) {
		var i, r, o;
		(r = 'undefined' != typeof window ? window : this),
			(o = function (n, r) {
				var o = [],
					a = n.document,
					s = o.slice,
					l = o.concat,
					u = o.push,
					c = o.indexOf,
					_ = {},
					d = _.toString,
					p = _.hasOwnProperty,
					h = {},
					f = function (t, e) {
						return new f.fn.init(t, e);
					},
					g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
					m = /^-ms-/,
					y = /-([\da-z])/gi,
					E = function (t, e) {
						return e.toUpperCase();
					};
				function v(t) {
					var e = !!t && 'length' in t && t.length,
						n = f.type(t);
					return (
						'function' !== n &&
						!f.isWindow(t) &&
						('array' === n ||
							0 === e ||
							('number' == typeof e && e > 0 && e - 1 in t))
					);
				}
				(f.fn = f.prototype =
					{
						jquery: '2.2.4',
						constructor: f,
						selector: '',
						length: 0,
						toArray: function () {
							return s.call(this);
						},
						get: function (t) {
							return null != t
								? t < 0
									? this[t + this.length]
									: this[t]
								: s.call(this);
						},
						pushStack: function (t) {
							var e = f.merge(this.constructor(), t);
							return (e.prevObject = this), (e.context = this.context), e;
						},
						each: function (t) {
							return f.each(this, t);
						},
						map: function (t) {
							return this.pushStack(
								f.map(this, function (e, n) {
									return t.call(e, n, e);
								})
							);
						},
						slice: function () {
							return this.pushStack(s.apply(this, arguments));
						},
						first: function () {
							return this.eq(0);
						},
						last: function () {
							return this.eq(-1);
						},
						eq: function (t) {
							var e = this.length,
								n = +t + (t < 0 ? e : 0);
							return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
						},
						end: function () {
							return this.prevObject || this.constructor();
						},
						push: u,
						sort: o.sort,
						splice: o.splice,
					}),
					(f.extend = f.fn.extend =
						function () {
							var t,
								e,
								n,
								i,
								r,
								o,
								a = arguments[0] || {},
								s = 1,
								l = arguments.length,
								u = !1;
							for (
								'boolean' == typeof a &&
									((u = a), (a = arguments[s] || {}), s++),
									'object' == typeof a || f.isFunction(a) || (a = {}),
									s === l && ((a = this), s--);
								s < l;
								s++
							)
								if (null != (t = arguments[s]))
									for (e in t)
										(n = a[e]),
											a !== (i = t[e]) &&
												(u && i && (f.isPlainObject(i) || (r = f.isArray(i)))
													? (r
															? ((r = !1), (o = n && f.isArray(n) ? n : []))
															: (o = n && f.isPlainObject(n) ? n : {}),
													  (a[e] = f.extend(u, o, i)))
													: void 0 !== i && (a[e] = i));
							return a;
						}),
					f.extend({
						expando: 'jQuery' + ('2.2.4' + Math.random()).replace(/\D/g, ''),
						isReady: !0,
						error: function (t) {
							throw new Error(t);
						},
						noop: function () {},
						isFunction: function (t) {
							return 'function' === f.type(t);
						},
						isArray: Array.isArray,
						isWindow: function (t) {
							return null != t && t === t.window;
						},
						isNumeric: function (t) {
							var e = t && t.toString();
							return !f.isArray(t) && e - parseFloat(e) + 1 >= 0;
						},
						isPlainObject: function (t) {
							var e;
							if ('object' !== f.type(t) || t.nodeType || f.isWindow(t))
								return !1;
							if (
								t.constructor &&
								!p.call(t, 'constructor') &&
								!p.call(t.constructor.prototype || {}, 'isPrototypeOf')
							)
								return !1;
							for (e in t);
							return void 0 === e || p.call(t, e);
						},
						isEmptyObject: function (t) {
							var e;
							for (e in t) return !1;
							return !0;
						},
						type: function (t) {
							return null == t
								? t + ''
								: 'object' == typeof t || 'function' == typeof t
								? _[d.call(t)] || 'object'
								: typeof t;
						},
						globalEval: function (t) {
							var e,
								n = eval;
							(t = f.trim(t)) &&
								(1 === t.indexOf('use strict')
									? (((e = a.createElement('script')).text = t),
									  a.head.appendChild(e).parentNode.removeChild(e))
									: n(t));
						},
						camelCase: function (t) {
							return t.replace(m, 'ms-').replace(y, E);
						},
						nodeName: function (t, e) {
							return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
						},
						each: function (t, e) {
							var n,
								i = 0;
							if (v(t))
								for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
							else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;
							return t;
						},
						trim: function (t) {
							return null == t ? '' : (t + '').replace(g, '');
						},
						makeArray: function (t, e) {
							var n = e || [];
							return (
								null != t &&
									(v(Object(t))
										? f.merge(n, 'string' == typeof t ? [t] : t)
										: u.call(n, t)),
								n
							);
						},
						inArray: function (t, e, n) {
							return null == e ? -1 : c.call(e, t, n);
						},
						merge: function (t, e) {
							for (var n = +e.length, i = 0, r = t.length; i < n; i++)
								t[r++] = e[i];
							return (t.length = r), t;
						},
						grep: function (t, e, n) {
							for (var i = [], r = 0, o = t.length, a = !n; r < o; r++)
								!e(t[r], r) !== a && i.push(t[r]);
							return i;
						},
						map: function (t, e, n) {
							var i,
								r,
								o = 0,
								a = [];
							if (v(t))
								for (i = t.length; o < i; o++)
									null != (r = e(t[o], o, n)) && a.push(r);
							else for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
							return l.apply([], a);
						},
						guid: 1,
						proxy: function (t, e) {
							var n, i, r;
							if (
								('string' == typeof e && ((n = t[e]), (e = t), (t = n)),
								f.isFunction(t))
							)
								return (
									(i = s.call(arguments, 2)),
									((r = function () {
										return t.apply(e || this, i.concat(s.call(arguments)));
									}).guid = t.guid =
										t.guid || f.guid++),
									r
								);
						},
						now: Date.now,
						support: h,
					}),
					'function' == typeof Symbol &&
						(f.fn[Symbol.iterator] = o[Symbol.iterator]),
					f.each(
						'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
							' '
						),
						function (t, e) {
							_['[object ' + e + ']'] = e.toLowerCase();
						}
					);
				var O = (function (t) {
					var e,
						n,
						i,
						r,
						o,
						a,
						s,
						l,
						u,
						c,
						_,
						d,
						p,
						h,
						f,
						g,
						m,
						y,
						E,
						v = 'sizzle' + 1 * new Date(),
						O = t.document,
						D = 0,
						P = 0,
						M = rt(),
						b = rt(),
						w = rt(),
						C = function (t, e) {
							return t === e && (_ = !0), 0;
						},
						T = {}.hasOwnProperty,
						A = [],
						x = A.pop,
						q = A.push,
						j = A.push,
						L = A.slice,
						I = function (t, e) {
							for (var n = 0, i = t.length; n < i; n++)
								if (t[n] === e) return n;
							return -1;
						},
						R =
							'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
						B = '[\\x20\\t\\r\\n\\f]',
						W = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
						U =
							'\\[' +
							B +
							'*(' +
							W +
							')(?:' +
							B +
							'*([*^$|!~]?=)' +
							B +
							'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
							W +
							'))|)' +
							B +
							'*\\]',
						K =
							':(' +
							W +
							')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
							U +
							')*)|.*)\\)|)',
						k = new RegExp(B + '+', 'g'),
						S = new RegExp(
							'^' + B + '+|((?:^|[^\\\\])(?:\\\\.)*)' + B + '+$',
							'g'
						),
						N = new RegExp('^' + B + '*,' + B + '*'),
						$ = new RegExp('^' + B + '*([>+~]|' + B + ')' + B + '*'),
						F = new RegExp('=' + B + '*([^\\]\'"]*?)' + B + '*\\]', 'g'),
						H = new RegExp(K),
						z = new RegExp('^' + W + '$'),
						V = {
							ID: new RegExp('^#(' + W + ')'),
							CLASS: new RegExp('^\\.(' + W + ')'),
							TAG: new RegExp('^(' + W + '|[*])'),
							ATTR: new RegExp('^' + U),
							PSEUDO: new RegExp('^' + K),
							CHILD: new RegExp(
								'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
									B +
									'*(even|odd|(([+-]|)(\\d*)n|)' +
									B +
									'*(?:([+-]|)' +
									B +
									'*(\\d+)|))' +
									B +
									'*\\)|)',
								'i'
							),
							bool: new RegExp('^(?:' + R + ')$', 'i'),
							needsContext: new RegExp(
								'^' +
									B +
									'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
									B +
									'*((?:-\\d)?\\d*)' +
									B +
									'*\\)|)(?=[^-]|$)',
								'i'
							),
						},
						G = /^(?:input|select|textarea|button)$/i,
						Q = /^h\d$/i,
						X = /^[^{]+\{\s*\[native \w/,
						Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
						J = /[+~]/,
						Z = /'|\\/g,
						tt = new RegExp(
							'\\\\([\\da-f]{1,6}' + B + '?|(' + B + ')|.)',
							'ig'
						),
						et = function (t, e, n) {
							var i = '0x' + e - 65536;
							return i != i || n
								? e
								: i < 0
								? String.fromCharCode(i + 65536)
								: String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
						},
						nt = function () {
							d();
						};
					try {
						j.apply((A = L.call(O.childNodes)), O.childNodes),
							A[O.childNodes.length].nodeType;
					} catch (t) {
						j = {
							apply: A.length
								? function (t, e) {
										q.apply(t, L.call(e));
								  }
								: function (t, e) {
										for (var n = t.length, i = 0; (t[n++] = e[i++]); );
										t.length = n - 1;
								  },
						};
					}
					function it(t, e, i, r) {
						var o,
							s,
							u,
							c,
							_,
							h,
							m,
							y,
							D = e && e.ownerDocument,
							P = e ? e.nodeType : 9;
						if (
							((i = i || []),
							'string' != typeof t || !t || (1 !== P && 9 !== P && 11 !== P))
						)
							return i;
						if (
							!r &&
							((e ? e.ownerDocument || e : O) !== p && d(e), (e = e || p), f)
						) {
							if (11 !== P && (h = Y.exec(t)))
								if ((o = h[1])) {
									if (9 === P) {
										if (!(u = e.getElementById(o))) return i;
										if (u.id === o) return i.push(u), i;
									} else if (
										D &&
										(u = D.getElementById(o)) &&
										E(e, u) &&
										u.id === o
									)
										return i.push(u), i;
								} else {
									if (h[2]) return j.apply(i, e.getElementsByTagName(t)), i;
									if (
										(o = h[3]) &&
										n.getElementsByClassName &&
										e.getElementsByClassName
									)
										return j.apply(i, e.getElementsByClassName(o)), i;
								}
							if (n.qsa && !w[t + ' '] && (!g || !g.test(t))) {
								if (1 !== P) (D = e), (y = t);
								else if ('object' !== e.nodeName.toLowerCase()) {
									for (
										(c = e.getAttribute('id'))
											? (c = c.replace(Z, '\\$&'))
											: e.setAttribute('id', (c = v)),
											s = (m = a(t)).length,
											_ = z.test(c) ? '#' + c : "[id='" + c + "']";
										s--;

									)
										m[s] = _ + ' ' + ht(m[s]);
									(y = m.join(',')), (D = (J.test(t) && dt(e.parentNode)) || e);
								}
								if (y)
									try {
										return j.apply(i, D.querySelectorAll(y)), i;
									} catch (t) {
									} finally {
										c === v && e.removeAttribute('id');
									}
							}
						}
						return l(t.replace(S, '$1'), e, i, r);
					}
					function rt() {
						var t = [];
						return function e(n, r) {
							return (
								t.push(n + ' ') > i.cacheLength && delete e[t.shift()],
								(e[n + ' '] = r)
							);
						};
					}
					function ot(t) {
						return (t[v] = !0), t;
					}
					function at(t) {
						var e = p.createElement('div');
						try {
							return !!t(e);
						} catch (t) {
							return !1;
						} finally {
							e.parentNode && e.parentNode.removeChild(e), (e = null);
						}
					}
					function st(t, e) {
						for (var n = t.split('|'), r = n.length; r--; )
							i.attrHandle[n[r]] = e;
					}
					function lt(t, e) {
						var n = e && t,
							i =
								n &&
								1 === t.nodeType &&
								1 === e.nodeType &&
								(~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
						if (i) return i;
						if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
						return t ? 1 : -1;
					}
					function ut(t) {
						return function (e) {
							return 'input' === e.nodeName.toLowerCase() && e.type === t;
						};
					}
					function ct(t) {
						return function (e) {
							var n = e.nodeName.toLowerCase();
							return ('input' === n || 'button' === n) && e.type === t;
						};
					}
					function _t(t) {
						return ot(function (e) {
							return (
								(e = +e),
								ot(function (n, i) {
									for (var r, o = t([], n.length, e), a = o.length; a--; )
										n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
								})
							);
						});
					}
					function dt(t) {
						return t && void 0 !== t.getElementsByTagName && t;
					}
					for (e in ((n = it.support = {}),
					(o = it.isXML =
						function (t) {
							var e = t && (t.ownerDocument || t).documentElement;
							return !!e && 'HTML' !== e.nodeName;
						}),
					(d = it.setDocument =
						function (t) {
							var e,
								r,
								a = t ? t.ownerDocument || t : O;
							return a !== p && 9 === a.nodeType && a.documentElement
								? ((h = (p = a).documentElement),
								  (f = !o(p)),
								  (r = p.defaultView) &&
										r.top !== r &&
										(r.addEventListener
											? r.addEventListener('unload', nt, !1)
											: r.attachEvent && r.attachEvent('onunload', nt)),
								  (n.attributes = at(function (t) {
										return (t.className = 'i'), !t.getAttribute('className');
								  })),
								  (n.getElementsByTagName = at(function (t) {
										return (
											t.appendChild(p.createComment('')),
											!t.getElementsByTagName('*').length
										);
								  })),
								  (n.getElementsByClassName = X.test(p.getElementsByClassName)),
								  (n.getById = at(function (t) {
										return (
											(h.appendChild(t).id = v),
											!p.getElementsByName || !p.getElementsByName(v).length
										);
								  })),
								  n.getById
										? ((i.find.ID = function (t, e) {
												if (void 0 !== e.getElementById && f) {
													var n = e.getElementById(t);
													return n ? [n] : [];
												}
										  }),
										  (i.filter.ID = function (t) {
												var e = t.replace(tt, et);
												return function (t) {
													return t.getAttribute('id') === e;
												};
										  }))
										: (delete i.find.ID,
										  (i.filter.ID = function (t) {
												var e = t.replace(tt, et);
												return function (t) {
													var n =
														void 0 !== t.getAttributeNode &&
														t.getAttributeNode('id');
													return n && n.value === e;
												};
										  })),
								  (i.find.TAG = n.getElementsByTagName
										? function (t, e) {
												return void 0 !== e.getElementsByTagName
													? e.getElementsByTagName(t)
													: n.qsa
													? e.querySelectorAll(t)
													: void 0;
										  }
										: function (t, e) {
												var n,
													i = [],
													r = 0,
													o = e.getElementsByTagName(t);
												if ('*' === t) {
													for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
													return i;
												}
												return o;
										  }),
								  (i.find.CLASS =
										n.getElementsByClassName &&
										function (t, e) {
											if (void 0 !== e.getElementsByClassName && f)
												return e.getElementsByClassName(t);
										}),
								  (m = []),
								  (g = []),
								  (n.qsa = X.test(p.querySelectorAll)) &&
										(at(function (t) {
											(h.appendChild(t).innerHTML =
												"<a id='" +
												v +
												"'></a><select id='" +
												v +
												"-\r\\' msallowcapture=''><option selected=''></option></select>"),
												t.querySelectorAll("[msallowcapture^='']").length &&
													g.push('[*^$]=' + B + '*(?:\'\'|"")'),
												t.querySelectorAll('[selected]').length ||
													g.push('\\[' + B + '*(?:value|' + R + ')'),
												t.querySelectorAll('[id~=' + v + '-]').length ||
													g.push('~='),
												t.querySelectorAll(':checked').length ||
													g.push(':checked'),
												t.querySelectorAll('a#' + v + '+*').length ||
													g.push('.#.+[+~]');
										}),
										at(function (t) {
											var e = p.createElement('input');
											e.setAttribute('type', 'hidden'),
												t.appendChild(e).setAttribute('name', 'D'),
												t.querySelectorAll('[name=d]').length &&
													g.push('name' + B + '*[*^$|!~]?='),
												t.querySelectorAll(':enabled').length ||
													g.push(':enabled', ':disabled'),
												t.querySelectorAll('*,:x'),
												g.push(',.*:');
										})),
								  (n.matchesSelector = X.test(
										(y =
											h.matches ||
											h.webkitMatchesSelector ||
											h.mozMatchesSelector ||
											h.oMatchesSelector ||
											h.msMatchesSelector)
								  )) &&
										at(function (t) {
											(n.disconnectedMatch = y.call(t, 'div')),
												y.call(t, "[s!='']:x"),
												m.push('!=', K);
										}),
								  (g = g.length && new RegExp(g.join('|'))),
								  (m = m.length && new RegExp(m.join('|'))),
								  (e = X.test(h.compareDocumentPosition)),
								  (E =
										e || X.test(h.contains)
											? function (t, e) {
													var n = 9 === t.nodeType ? t.documentElement : t,
														i = e && e.parentNode;
													return (
														t === i ||
														!(
															!i ||
															1 !== i.nodeType ||
															!(n.contains
																? n.contains(i)
																: t.compareDocumentPosition &&
																  16 & t.compareDocumentPosition(i))
														)
													);
											  }
											: function (t, e) {
													if (e)
														for (; (e = e.parentNode); ) if (e === t) return !0;
													return !1;
											  }),
								  (C = e
										? function (t, e) {
												if (t === e) return (_ = !0), 0;
												var i =
													!t.compareDocumentPosition -
													!e.compareDocumentPosition;
												return (
													i ||
													(1 &
														(i =
															(t.ownerDocument || t) === (e.ownerDocument || e)
																? t.compareDocumentPosition(e)
																: 1) ||
													(!n.sortDetached &&
														e.compareDocumentPosition(t) === i)
														? t === p || (t.ownerDocument === O && E(O, t))
															? -1
															: e === p || (e.ownerDocument === O && E(O, e))
															? 1
															: c
															? I(c, t) - I(c, e)
															: 0
														: 4 & i
														? -1
														: 1)
												);
										  }
										: function (t, e) {
												if (t === e) return (_ = !0), 0;
												var n,
													i = 0,
													r = t.parentNode,
													o = e.parentNode,
													a = [t],
													s = [e];
												if (!r || !o)
													return t === p
														? -1
														: e === p
														? 1
														: r
														? -1
														: o
														? 1
														: c
														? I(c, t) - I(c, e)
														: 0;
												if (r === o) return lt(t, e);
												for (n = t; (n = n.parentNode); ) a.unshift(n);
												for (n = e; (n = n.parentNode); ) s.unshift(n);
												for (; a[i] === s[i]; ) i++;
												return i
													? lt(a[i], s[i])
													: a[i] === O
													? -1
													: s[i] === O
													? 1
													: 0;
										  }),
								  p)
								: p;
						}),
					(it.matches = function (t, e) {
						return it(t, null, null, e);
					}),
					(it.matchesSelector = function (t, e) {
						if (
							((t.ownerDocument || t) !== p && d(t),
							(e = e.replace(F, "='$1']")),
							n.matchesSelector &&
								f &&
								!w[e + ' '] &&
								(!m || !m.test(e)) &&
								(!g || !g.test(e)))
						)
							try {
								var i = y.call(t, e);
								if (
									i ||
									n.disconnectedMatch ||
									(t.document && 11 !== t.document.nodeType)
								)
									return i;
							} catch (t) {}
						return it(e, p, null, [t]).length > 0;
					}),
					(it.contains = function (t, e) {
						return (t.ownerDocument || t) !== p && d(t), E(t, e);
					}),
					(it.attr = function (t, e) {
						(t.ownerDocument || t) !== p && d(t);
						var r = i.attrHandle[e.toLowerCase()],
							o =
								r && T.call(i.attrHandle, e.toLowerCase())
									? r(t, e, !f)
									: void 0;
						return void 0 !== o
							? o
							: n.attributes || !f
							? t.getAttribute(e)
							: (o = t.getAttributeNode(e)) && o.specified
							? o.value
							: null;
					}),
					(it.error = function (t) {
						throw new Error('Syntax error, unrecognized expression: ' + t);
					}),
					(it.uniqueSort = function (t) {
						var e,
							i = [],
							r = 0,
							o = 0;
						if (
							((_ = !n.detectDuplicates),
							(c = !n.sortStable && t.slice(0)),
							t.sort(C),
							_)
						) {
							for (; (e = t[o++]); ) e === t[o] && (r = i.push(o));
							for (; r--; ) t.splice(i[r], 1);
						}
						return (c = null), t;
					}),
					(r = it.getText =
						function (t) {
							var e,
								n = '',
								i = 0,
								o = t.nodeType;
							if (o) {
								if (1 === o || 9 === o || 11 === o) {
									if ('string' == typeof t.textContent) return t.textContent;
									for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
								} else if (3 === o || 4 === o) return t.nodeValue;
							} else for (; (e = t[i++]); ) n += r(e);
							return n;
						}),
					((i = it.selectors =
						{
							cacheLength: 50,
							createPseudo: ot,
							match: V,
							attrHandle: {},
							find: {},
							relative: {
								'>': { dir: 'parentNode', first: !0 },
								' ': { dir: 'parentNode' },
								'+': { dir: 'previousSibling', first: !0 },
								'~': { dir: 'previousSibling' },
							},
							preFilter: {
								ATTR: function (t) {
									return (
										(t[1] = t[1].replace(tt, et)),
										(t[3] = (t[3] || t[4] || t[5] || '').replace(tt, et)),
										'~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
										t.slice(0, 4)
									);
								},
								CHILD: function (t) {
									return (
										(t[1] = t[1].toLowerCase()),
										'nth' === t[1].slice(0, 3)
											? (t[3] || it.error(t[0]),
											  (t[4] = +(t[4]
													? t[5] + (t[6] || 1)
													: 2 * ('even' === t[3] || 'odd' === t[3]))),
											  (t[5] = +(t[7] + t[8] || 'odd' === t[3])))
											: t[3] && it.error(t[0]),
										t
									);
								},
								PSEUDO: function (t) {
									var e,
										n = !t[6] && t[2];
									return V.CHILD.test(t[0])
										? null
										: (t[3]
												? (t[2] = t[4] || t[5] || '')
												: n &&
												  H.test(n) &&
												  (e = a(n, !0)) &&
												  (e = n.indexOf(')', n.length - e) - n.length) &&
												  ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
										  t.slice(0, 3));
								},
							},
							filter: {
								TAG: function (t) {
									var e = t.replace(tt, et).toLowerCase();
									return '*' === t
										? function () {
												return !0;
										  }
										: function (t) {
												return t.nodeName && t.nodeName.toLowerCase() === e;
										  };
								},
								CLASS: function (t) {
									var e = M[t + ' '];
									return (
										e ||
										((e = new RegExp('(^|' + B + ')' + t + '(' + B + '|$)')) &&
											M(t, function (t) {
												return e.test(
													('string' == typeof t.className && t.className) ||
														(void 0 !== t.getAttribute &&
															t.getAttribute('class')) ||
														''
												);
											}))
									);
								},
								ATTR: function (t, e, n) {
									return function (i) {
										var r = it.attr(i, t);
										return null == r
											? '!=' === e
											: !e ||
													((r += ''),
													'=' === e
														? r === n
														: '!=' === e
														? r !== n
														: '^=' === e
														? n && 0 === r.indexOf(n)
														: '*=' === e
														? n && r.indexOf(n) > -1
														: '$=' === e
														? n && r.slice(-n.length) === n
														: '~=' === e
														? (' ' + r.replace(k, ' ') + ' ').indexOf(n) > -1
														: '|=' === e &&
														  (r === n ||
																r.slice(0, n.length + 1) === n + '-'));
									};
								},
								CHILD: function (t, e, n, i, r) {
									var o = 'nth' !== t.slice(0, 3),
										a = 'last' !== t.slice(-4),
										s = 'of-type' === e;
									return 1 === i && 0 === r
										? function (t) {
												return !!t.parentNode;
										  }
										: function (e, n, l) {
												var u,
													c,
													_,
													d,
													p,
													h,
													f = o !== a ? 'nextSibling' : 'previousSibling',
													g = e.parentNode,
													m = s && e.nodeName.toLowerCase(),
													y = !l && !s,
													E = !1;
												if (g) {
													if (o) {
														for (; f; ) {
															for (d = e; (d = d[f]); )
																if (
																	s
																		? d.nodeName.toLowerCase() === m
																		: 1 === d.nodeType
																)
																	return !1;
															h = f = 'only' === t && !h && 'nextSibling';
														}
														return !0;
													}
													if (
														((h = [a ? g.firstChild : g.lastChild]), a && y)
													) {
														for (
															E =
																(p =
																	(u =
																		(c =
																			(_ = (d = g)[v] || (d[v] = {}))[
																				d.uniqueID
																			] || (_[d.uniqueID] = {}))[t] ||
																		[])[0] === D && u[1]) && u[2],
																d = p && g.childNodes[p];
															(d =
																(++p && d && d[f]) || (E = p = 0) || h.pop());

														)
															if (1 === d.nodeType && ++E && d === e) {
																c[t] = [D, p, E];
																break;
															}
													} else if (
														(y &&
															(E = p =
																(u =
																	(c =
																		(_ = (d = e)[v] || (d[v] = {}))[
																			d.uniqueID
																		] || (_[d.uniqueID] = {}))[t] || [])[0] ===
																	D && u[1]),
														!1 === E)
													)
														for (
															;
															(d =
																(++p && d && d[f]) || (E = p = 0) || h.pop()) &&
															((s
																? d.nodeName.toLowerCase() !== m
																: 1 !== d.nodeType) ||
																!++E ||
																(y &&
																	((c =
																		(_ = d[v] || (d[v] = {}))[d.uniqueID] ||
																		(_[d.uniqueID] = {}))[t] = [D, E]),
																d !== e));

														);
													return (E -= r) === i || (E % i == 0 && E / i >= 0);
												}
										  };
								},
								PSEUDO: function (t, e) {
									var n,
										r =
											i.pseudos[t] ||
											i.setFilters[t.toLowerCase()] ||
											it.error('unsupported pseudo: ' + t);
									return r[v]
										? r(e)
										: r.length > 1
										? ((n = [t, t, '', e]),
										  i.setFilters.hasOwnProperty(t.toLowerCase())
												? ot(function (t, n) {
														for (var i, o = r(t, e), a = o.length; a--; )
															t[(i = I(t, o[a]))] = !(n[i] = o[a]);
												  })
												: function (t) {
														return r(t, 0, n);
												  })
										: r;
								},
							},
							pseudos: {
								not: ot(function (t) {
									var e = [],
										n = [],
										i = s(t.replace(S, '$1'));
									return i[v]
										? ot(function (t, e, n, r) {
												for (var o, a = i(t, null, r, []), s = t.length; s--; )
													(o = a[s]) && (t[s] = !(e[s] = o));
										  })
										: function (t, r, o) {
												return (
													(e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop()
												);
										  };
								}),
								has: ot(function (t) {
									return function (e) {
										return it(t, e).length > 0;
									};
								}),
								contains: ot(function (t) {
									return (
										(t = t.replace(tt, et)),
										function (e) {
											return (
												(e.textContent || e.innerText || r(e)).indexOf(t) > -1
											);
										}
									);
								}),
								lang: ot(function (t) {
									return (
										z.test(t || '') || it.error('unsupported lang: ' + t),
										(t = t.replace(tt, et).toLowerCase()),
										function (e) {
											var n;
											do {
												if (
													(n = f
														? e.lang
														: e.getAttribute('xml:lang') ||
														  e.getAttribute('lang'))
												)
													return (
														(n = n.toLowerCase()) === t ||
														0 === n.indexOf(t + '-')
													);
											} while ((e = e.parentNode) && 1 === e.nodeType);
											return !1;
										}
									);
								}),
								target: function (e) {
									var n = t.location && t.location.hash;
									return n && n.slice(1) === e.id;
								},
								root: function (t) {
									return t === h;
								},
								focus: function (t) {
									return (
										t === p.activeElement &&
										(!p.hasFocus || p.hasFocus()) &&
										!!(t.type || t.href || ~t.tabIndex)
									);
								},
								enabled: function (t) {
									return !1 === t.disabled;
								},
								disabled: function (t) {
									return !0 === t.disabled;
								},
								checked: function (t) {
									var e = t.nodeName.toLowerCase();
									return (
										('input' === e && !!t.checked) ||
										('option' === e && !!t.selected)
									);
								},
								selected: function (t) {
									return (
										t.parentNode && t.parentNode.selectedIndex,
										!0 === t.selected
									);
								},
								empty: function (t) {
									for (t = t.firstChild; t; t = t.nextSibling)
										if (t.nodeType < 6) return !1;
									return !0;
								},
								parent: function (t) {
									return !i.pseudos.empty(t);
								},
								header: function (t) {
									return Q.test(t.nodeName);
								},
								input: function (t) {
									return G.test(t.nodeName);
								},
								button: function (t) {
									var e = t.nodeName.toLowerCase();
									return (
										('input' === e && 'button' === t.type) || 'button' === e
									);
								},
								text: function (t) {
									var e;
									return (
										'input' === t.nodeName.toLowerCase() &&
										'text' === t.type &&
										(null == (e = t.getAttribute('type')) ||
											'text' === e.toLowerCase())
									);
								},
								first: _t(function () {
									return [0];
								}),
								last: _t(function (t, e) {
									return [e - 1];
								}),
								eq: _t(function (t, e, n) {
									return [n < 0 ? n + e : n];
								}),
								even: _t(function (t, e) {
									for (var n = 0; n < e; n += 2) t.push(n);
									return t;
								}),
								odd: _t(function (t, e) {
									for (var n = 1; n < e; n += 2) t.push(n);
									return t;
								}),
								lt: _t(function (t, e, n) {
									for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
									return t;
								}),
								gt: _t(function (t, e, n) {
									for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
									return t;
								}),
							},
						}).pseudos.nth = i.pseudos.eq),
					{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
						i.pseudos[e] = ut(e);
					for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ct(e);
					function pt() {}
					function ht(t) {
						for (var e = 0, n = t.length, i = ''; e < n; e++) i += t[e].value;
						return i;
					}
					function ft(t, e, n) {
						var i = e.dir,
							r = n && 'parentNode' === i,
							o = P++;
						return e.first
							? function (e, n, o) {
									for (; (e = e[i]); )
										if (1 === e.nodeType || r) return t(e, n, o);
							  }
							: function (e, n, a) {
									var s,
										l,
										u,
										c = [D, o];
									if (a) {
										for (; (e = e[i]); )
											if ((1 === e.nodeType || r) && t(e, n, a)) return !0;
									} else
										for (; (e = e[i]); )
											if (1 === e.nodeType || r) {
												if (
													(s = (l =
														(u = e[v] || (e[v] = {}))[e.uniqueID] ||
														(u[e.uniqueID] = {}))[i]) &&
													s[0] === D &&
													s[1] === o
												)
													return (c[2] = s[2]);
												if (((l[i] = c), (c[2] = t(e, n, a)))) return !0;
											}
							  };
					}
					function gt(t) {
						return t.length > 1
							? function (e, n, i) {
									for (var r = t.length; r--; ) if (!t[r](e, n, i)) return !1;
									return !0;
							  }
							: t[0];
					}
					function mt(t, e, n, i, r) {
						for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)
							(o = t[s]) && ((n && !n(o, i, r)) || (a.push(o), u && e.push(s)));
						return a;
					}
					function yt(t, e, n, i, r, o) {
						return (
							i && !i[v] && (i = yt(i)),
							r && !r[v] && (r = yt(r, o)),
							ot(function (o, a, s, l) {
								var u,
									c,
									_,
									d = [],
									p = [],
									h = a.length,
									f =
										o ||
										(function (t, e, n) {
											for (var i = 0, r = e.length; i < r; i++) it(t, e[i], n);
											return n;
										})(e || '*', s.nodeType ? [s] : s, []),
									g = !t || (!o && e) ? f : mt(f, d, t, s, l),
									m = n ? (r || (o ? t : h || i) ? [] : a) : g;
								if ((n && n(g, m, s, l), i))
									for (u = mt(m, p), i(u, [], s, l), c = u.length; c--; )
										(_ = u[c]) && (m[p[c]] = !(g[p[c]] = _));
								if (o) {
									if (r || t) {
										if (r) {
											for (u = [], c = m.length; c--; )
												(_ = m[c]) && u.push((g[c] = _));
											r(null, (m = []), u, l);
										}
										for (c = m.length; c--; )
											(_ = m[c]) &&
												(u = r ? I(o, _) : d[c]) > -1 &&
												(o[u] = !(a[u] = _));
									}
								} else (m = mt(m === a ? m.splice(h, m.length) : m)), r ? r(null, a, m, l) : j.apply(a, m);
							})
						);
					}
					function Et(t) {
						for (
							var e,
								n,
								r,
								o = t.length,
								a = i.relative[t[0].type],
								s = a || i.relative[' '],
								l = a ? 1 : 0,
								c = ft(
									function (t) {
										return t === e;
									},
									s,
									!0
								),
								_ = ft(
									function (t) {
										return I(e, t) > -1;
									},
									s,
									!0
								),
								d = [
									function (t, n, i) {
										var r =
											(!a && (i || n !== u)) ||
											((e = n).nodeType ? c(t, n, i) : _(t, n, i));
										return (e = null), r;
									},
								];
							l < o;
							l++
						)
							if ((n = i.relative[t[l].type])) d = [ft(gt(d), n)];
							else {
								if ((n = i.filter[t[l].type].apply(null, t[l].matches))[v]) {
									for (r = ++l; r < o && !i.relative[t[r].type]; r++);
									return yt(
										l > 1 && gt(d),
										l > 1 &&
											ht(
												t
													.slice(0, l - 1)
													.concat({ value: ' ' === t[l - 2].type ? '*' : '' })
											).replace(S, '$1'),
										n,
										l < r && Et(t.slice(l, r)),
										r < o && Et((t = t.slice(r))),
										r < o && ht(t)
									);
								}
								d.push(n);
							}
						return gt(d);
					}
					return (
						(pt.prototype = i.filters = i.pseudos),
						(i.setFilters = new pt()),
						(a = it.tokenize =
							function (t, e) {
								var n,
									r,
									o,
									a,
									s,
									l,
									u,
									c = b[t + ' '];
								if (c) return e ? 0 : c.slice(0);
								for (s = t, l = [], u = i.preFilter; s; ) {
									for (a in ((n && !(r = N.exec(s))) ||
										(r && (s = s.slice(r[0].length) || s), l.push((o = []))),
									(n = !1),
									(r = $.exec(s)) &&
										((n = r.shift()),
										o.push({ value: n, type: r[0].replace(S, ' ') }),
										(s = s.slice(n.length))),
									i.filter))
										!(r = V[a].exec(s)) ||
											(u[a] && !(r = u[a](r))) ||
											((n = r.shift()),
											o.push({ value: n, type: a, matches: r }),
											(s = s.slice(n.length)));
									if (!n) break;
								}
								return e ? s.length : s ? it.error(t) : b(t, l).slice(0);
							}),
						(s = it.compile =
							function (t, e) {
								var n,
									r = [],
									o = [],
									s = w[t + ' '];
								if (!s) {
									for (e || (e = a(t)), n = e.length; n--; )
										(s = Et(e[n]))[v] ? r.push(s) : o.push(s);
									(s = w(
										t,
										(function (t, e) {
											var n = e.length > 0,
												r = t.length > 0,
												o = function (o, a, s, l, c) {
													var _,
														h,
														g,
														m = 0,
														y = '0',
														E = o && [],
														v = [],
														O = u,
														P = o || (r && i.find.TAG('*', c)),
														M = (D += null == O ? 1 : Math.random() || 0.1),
														b = P.length;
													for (
														c && (u = a === p || a || c);
														y !== b && null != (_ = P[y]);
														y++
													) {
														if (r && _) {
															for (
																h = 0,
																	a ||
																		_.ownerDocument === p ||
																		(d(_), (s = !f));
																(g = t[h++]);

															)
																if (g(_, a || p, s)) {
																	l.push(_);
																	break;
																}
															c && (D = M);
														}
														n && ((_ = !g && _) && m--, o && E.push(_));
													}
													if (((m += y), n && y !== m)) {
														for (h = 0; (g = e[h++]); ) g(E, v, a, s);
														if (o) {
															if (m > 0)
																for (; y--; )
																	E[y] || v[y] || (v[y] = x.call(l));
															v = mt(v);
														}
														j.apply(l, v),
															c &&
																!o &&
																v.length > 0 &&
																m + e.length > 1 &&
																it.uniqueSort(l);
													}
													return c && ((D = M), (u = O)), E;
												};
											return n ? ot(o) : o;
										})(o, r)
									)).selector = t;
								}
								return s;
							}),
						(l = it.select =
							function (t, e, r, o) {
								var l,
									u,
									c,
									_,
									d,
									p = 'function' == typeof t && t,
									h = !o && a((t = p.selector || t));
								if (((r = r || []), 1 === h.length)) {
									if (
										(u = h[0] = h[0].slice(0)).length > 2 &&
										'ID' === (c = u[0]).type &&
										n.getById &&
										9 === e.nodeType &&
										f &&
										i.relative[u[1].type]
									) {
										if (
											!(e = (i.find.ID(c.matches[0].replace(tt, et), e) ||
												[])[0])
										)
											return r;
										p && (e = e.parentNode),
											(t = t.slice(u.shift().value.length));
									}
									for (
										l = V.needsContext.test(t) ? 0 : u.length;
										l-- && ((c = u[l]), !i.relative[(_ = c.type)]);

									)
										if (
											(d = i.find[_]) &&
											(o = d(
												c.matches[0].replace(tt, et),
												(J.test(u[0].type) && dt(e.parentNode)) || e
											))
										) {
											if ((u.splice(l, 1), !(t = o.length && ht(u))))
												return j.apply(r, o), r;
											break;
										}
								}
								return (
									(p || s(t, h))(
										o,
										e,
										!f,
										r,
										!e || (J.test(t) && dt(e.parentNode)) || e
									),
									r
								);
							}),
						(n.sortStable = v.split('').sort(C).join('') === v),
						(n.detectDuplicates = !!_),
						d(),
						(n.sortDetached = at(function (t) {
							return 1 & t.compareDocumentPosition(p.createElement('div'));
						})),
						at(function (t) {
							return (
								(t.innerHTML = "<a href='#'></a>"),
								'#' === t.firstChild.getAttribute('href')
							);
						}) ||
							st('type|href|height|width', function (t, e, n) {
								if (!n)
									return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
							}),
						(n.attributes &&
							at(function (t) {
								return (
									(t.innerHTML = '<input/>'),
									t.firstChild.setAttribute('value', ''),
									'' === t.firstChild.getAttribute('value')
								);
							})) ||
							st('value', function (t, e, n) {
								if (!n && 'input' === t.nodeName.toLowerCase())
									return t.defaultValue;
							}),
						at(function (t) {
							return null == t.getAttribute('disabled');
						}) ||
							st(R, function (t, e, n) {
								var i;
								if (!n)
									return !0 === t[e]
										? e.toLowerCase()
										: (i = t.getAttributeNode(e)) && i.specified
										? i.value
										: null;
							}),
						it
					);
				})(n);
				(f.find = O),
					(f.expr = O.selectors),
					(f.expr[':'] = f.expr.pseudos),
					(f.uniqueSort = f.unique = O.uniqueSort),
					(f.text = O.getText),
					(f.isXMLDoc = O.isXML),
					(f.contains = O.contains);
				var D = function (t, e, n) {
						for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
							if (1 === t.nodeType) {
								if (r && f(t).is(n)) break;
								i.push(t);
							}
						return i;
					},
					P = function (t, e) {
						for (var n = []; t; t = t.nextSibling)
							1 === t.nodeType && t !== e && n.push(t);
						return n;
					},
					M = f.expr.match.needsContext,
					b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
					w = /^.[^:#\[\.,]*$/;
				function C(t, e, n) {
					if (f.isFunction(e))
						return f.grep(t, function (t, i) {
							return !!e.call(t, i, t) !== n;
						});
					if (e.nodeType)
						return f.grep(t, function (t) {
							return (t === e) !== n;
						});
					if ('string' == typeof e) {
						if (w.test(e)) return f.filter(e, t, n);
						e = f.filter(e, t);
					}
					return f.grep(t, function (t) {
						return c.call(e, t) > -1 !== n;
					});
				}
				(f.filter = function (t, e, n) {
					var i = e[0];
					return (
						n && (t = ':not(' + t + ')'),
						1 === e.length && 1 === i.nodeType
							? f.find.matchesSelector(i, t)
								? [i]
								: []
							: f.find.matches(
									t,
									f.grep(e, function (t) {
										return 1 === t.nodeType;
									})
							  )
					);
				}),
					f.fn.extend({
						find: function (t) {
							var e,
								n = this.length,
								i = [],
								r = this;
							if ('string' != typeof t)
								return this.pushStack(
									f(t).filter(function () {
										for (e = 0; e < n; e++)
											if (f.contains(r[e], this)) return !0;
									})
								);
							for (e = 0; e < n; e++) f.find(t, r[e], i);
							return (
								((i = this.pushStack(n > 1 ? f.unique(i) : i)).selector = this
									.selector
									? this.selector + ' ' + t
									: t),
								i
							);
						},
						filter: function (t) {
							return this.pushStack(C(this, t || [], !1));
						},
						not: function (t) {
							return this.pushStack(C(this, t || [], !0));
						},
						is: function (t) {
							return !!C(
								this,
								'string' == typeof t && M.test(t) ? f(t) : t || [],
								!1
							).length;
						},
					});
				var T,
					A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
				((f.fn.init = function (t, e, n) {
					var i, r;
					if (!t) return this;
					if (((n = n || T), 'string' == typeof t)) {
						if (
							!(i =
								'<' === t[0] && '>' === t[t.length - 1] && t.length >= 3
									? [null, t, null]
									: A.exec(t)) ||
							(!i[1] && e)
						)
							return !e || e.jquery
								? (e || n).find(t)
								: this.constructor(e).find(t);
						if (i[1]) {
							if (
								((e = e instanceof f ? e[0] : e),
								f.merge(
									this,
									f.parseHTML(
										i[1],
										e && e.nodeType ? e.ownerDocument || e : a,
										!0
									)
								),
								b.test(i[1]) && f.isPlainObject(e))
							)
								for (i in e)
									f.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
							return this;
						}
						return (
							(r = a.getElementById(i[2])) &&
								r.parentNode &&
								((this.length = 1), (this[0] = r)),
							(this.context = a),
							(this.selector = t),
							this
						);
					}
					return t.nodeType
						? ((this.context = this[0] = t), (this.length = 1), this)
						: f.isFunction(t)
						? void 0 !== n.ready
							? n.ready(t)
							: t(f)
						: (void 0 !== t.selector &&
								((this.selector = t.selector), (this.context = t.context)),
						  f.makeArray(t, this));
				}).prototype = f.fn),
					(T = f(a));
				var x = /^(?:parents|prev(?:Until|All))/,
					q = { children: !0, contents: !0, next: !0, prev: !0 };
				function j(t, e) {
					for (; (t = t[e]) && 1 !== t.nodeType; );
					return t;
				}
				f.fn.extend({
					has: function (t) {
						var e = f(t, this),
							n = e.length;
						return this.filter(function () {
							for (var t = 0; t < n; t++) if (f.contains(this, e[t])) return !0;
						});
					},
					closest: function (t, e) {
						for (
							var n,
								i = 0,
								r = this.length,
								o = [],
								a =
									M.test(t) || 'string' != typeof t
										? f(t, e || this.context)
										: 0;
							i < r;
							i++
						)
							for (n = this[i]; n && n !== e; n = n.parentNode)
								if (
									n.nodeType < 11 &&
									(a
										? a.index(n) > -1
										: 1 === n.nodeType && f.find.matchesSelector(n, t))
								) {
									o.push(n);
									break;
								}
						return this.pushStack(o.length > 1 ? f.uniqueSort(o) : o);
					},
					index: function (t) {
						return t
							? 'string' == typeof t
								? c.call(f(t), this[0])
								: c.call(this, t.jquery ? t[0] : t)
							: this[0] && this[0].parentNode
							? this.first().prevAll().length
							: -1;
					},
					add: function (t, e) {
						return this.pushStack(f.uniqueSort(f.merge(this.get(), f(t, e))));
					},
					addBack: function (t) {
						return this.add(
							null == t ? this.prevObject : this.prevObject.filter(t)
						);
					},
				}),
					f.each(
						{
							parent: function (t) {
								var e = t.parentNode;
								return e && 11 !== e.nodeType ? e : null;
							},
							parents: function (t) {
								return D(t, 'parentNode');
							},
							parentsUntil: function (t, e, n) {
								return D(t, 'parentNode', n);
							},
							next: function (t) {
								return j(t, 'nextSibling');
							},
							prev: function (t) {
								return j(t, 'previousSibling');
							},
							nextAll: function (t) {
								return D(t, 'nextSibling');
							},
							prevAll: function (t) {
								return D(t, 'previousSibling');
							},
							nextUntil: function (t, e, n) {
								return D(t, 'nextSibling', n);
							},
							prevUntil: function (t, e, n) {
								return D(t, 'previousSibling', n);
							},
							siblings: function (t) {
								return P((t.parentNode || {}).firstChild, t);
							},
							children: function (t) {
								return P(t.firstChild);
							},
							contents: function (t) {
								return t.contentDocument || f.merge([], t.childNodes);
							},
						},
						function (t, e) {
							f.fn[t] = function (n, i) {
								var r = f.map(this, e, n);
								return (
									'Until' !== t.slice(-5) && (i = n),
									i && 'string' == typeof i && (r = f.filter(i, r)),
									this.length > 1 &&
										(q[t] || f.uniqueSort(r), x.test(t) && r.reverse()),
									this.pushStack(r)
								);
							};
						}
					);
				var L,
					I = /\S+/g;
				function R() {
					a.removeEventListener('DOMContentLoaded', R),
						n.removeEventListener('load', R),
						f.ready();
				}
				(f.Callbacks = function (t) {
					t =
						'string' == typeof t
							? (function (t) {
									var e = {};
									return (
										f.each(t.match(I) || [], function (t, n) {
											e[n] = !0;
										}),
										e
									);
							  })(t)
							: f.extend({}, t);
					var e,
						n,
						i,
						r,
						o = [],
						a = [],
						s = -1,
						l = function () {
							for (r = t.once, i = e = !0; a.length; s = -1)
								for (n = a.shift(); ++s < o.length; )
									!1 === o[s].apply(n[0], n[1]) &&
										t.stopOnFalse &&
										((s = o.length), (n = !1));
							t.memory || (n = !1), (e = !1), r && (o = n ? [] : '');
						},
						u = {
							add: function () {
								return (
									o &&
										(n && !e && ((s = o.length - 1), a.push(n)),
										(function e(n) {
											f.each(n, function (n, i) {
												f.isFunction(i)
													? (t.unique && u.has(i)) || o.push(i)
													: i && i.length && 'string' !== f.type(i) && e(i);
											});
										})(arguments),
										n && !e && l()),
									this
								);
							},
							remove: function () {
								return (
									f.each(arguments, function (t, e) {
										for (var n; (n = f.inArray(e, o, n)) > -1; )
											o.splice(n, 1), n <= s && s--;
									}),
									this
								);
							},
							has: function (t) {
								return t ? f.inArray(t, o) > -1 : o.length > 0;
							},
							empty: function () {
								return o && (o = []), this;
							},
							disable: function () {
								return (r = a = []), (o = n = ''), this;
							},
							disabled: function () {
								return !o;
							},
							lock: function () {
								return (r = a = []), n || (o = n = ''), this;
							},
							locked: function () {
								return !!r;
							},
							fireWith: function (t, n) {
								return (
									r ||
										((n = [t, (n = n || []).slice ? n.slice() : n]),
										a.push(n),
										e || l()),
									this
								);
							},
							fire: function () {
								return u.fireWith(this, arguments), this;
							},
							fired: function () {
								return !!i;
							},
						};
					return u;
				}),
					f.extend({
						Deferred: function (t) {
							var e = [
									['resolve', 'done', f.Callbacks('once memory'), 'resolved'],
									['reject', 'fail', f.Callbacks('once memory'), 'rejected'],
									['notify', 'progress', f.Callbacks('memory')],
								],
								n = 'pending',
								i = {
									state: function () {
										return n;
									},
									always: function () {
										return r.done(arguments).fail(arguments), this;
									},
									then: function () {
										var t = arguments;
										return f
											.Deferred(function (n) {
												f.each(e, function (e, o) {
													var a = f.isFunction(t[e]) && t[e];
													r[o[1]](function () {
														var t = a && a.apply(this, arguments);
														t && f.isFunction(t.promise)
															? t
																	.promise()
																	.progress(n.notify)
																	.done(n.resolve)
																	.fail(n.reject)
															: n[o[0] + 'With'](
																	this === i ? n.promise() : this,
																	a ? [t] : arguments
															  );
													});
												}),
													(t = null);
											})
											.promise();
									},
									promise: function (t) {
										return null != t ? f.extend(t, i) : i;
									},
								},
								r = {};
							return (
								(i.pipe = i.then),
								f.each(e, function (t, o) {
									var a = o[2],
										s = o[3];
									(i[o[1]] = a.add),
										s &&
											a.add(
												function () {
													n = s;
												},
												e[1 ^ t][2].disable,
												e[2][2].lock
											),
										(r[o[0]] = function () {
											return (
												r[o[0] + 'With'](this === r ? i : this, arguments), this
											);
										}),
										(r[o[0] + 'With'] = a.fireWith);
								}),
								i.promise(r),
								t && t.call(r, r),
								r
							);
						},
						when: function (t) {
							var e,
								n,
								i,
								r = 0,
								o = s.call(arguments),
								a = o.length,
								l = 1 !== a || (t && f.isFunction(t.promise)) ? a : 0,
								u = 1 === l ? t : f.Deferred(),
								c = function (t, n, i) {
									return function (r) {
										(n[t] = this),
											(i[t] = arguments.length > 1 ? s.call(arguments) : r),
											i === e ? u.notifyWith(n, i) : --l || u.resolveWith(n, i);
									};
								};
							if (a > 1)
								for (
									e = new Array(a), n = new Array(a), i = new Array(a);
									r < a;
									r++
								)
									o[r] && f.isFunction(o[r].promise)
										? o[r]
												.promise()
												.progress(c(r, n, e))
												.done(c(r, i, o))
												.fail(u.reject)
										: --l;
							return l || u.resolveWith(i, o), u.promise();
						},
					}),
					(f.fn.ready = function (t) {
						return f.ready.promise().done(t), this;
					}),
					f.extend({
						isReady: !1,
						readyWait: 1,
						holdReady: function (t) {
							t ? f.readyWait++ : f.ready(!0);
						},
						ready: function (t) {
							(!0 === t ? --f.readyWait : f.isReady) ||
								((f.isReady = !0),
								(!0 !== t && --f.readyWait > 0) ||
									(L.resolveWith(a, [f]),
									f.fn.triggerHandler &&
										(f(a).triggerHandler('ready'), f(a).off('ready'))));
						},
					}),
					(f.ready.promise = function (t) {
						return (
							L ||
								((L = f.Deferred()),
								'complete' === a.readyState ||
								('loading' !== a.readyState && !a.documentElement.doScroll)
									? n.setTimeout(f.ready)
									: (a.addEventListener('DOMContentLoaded', R),
									  n.addEventListener('load', R))),
							L.promise(t)
						);
					}),
					f.ready.promise();
				var B = function (t, e, n, i, r, o, a) {
						var s = 0,
							l = t.length,
							u = null == n;
						if ('object' === f.type(n))
							for (s in ((r = !0), n)) B(t, e, s, n[s], !0, o, a);
						else if (
							void 0 !== i &&
							((r = !0),
							f.isFunction(i) || (a = !0),
							u &&
								(a
									? (e.call(t, i), (e = null))
									: ((u = e),
									  (e = function (t, e, n) {
											return u.call(f(t), n);
									  }))),
							e)
						)
							for (; s < l; s++)
								e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
						return r ? t : u ? e.call(t) : l ? e(t[0], n) : o;
					},
					W = function (t) {
						return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
					};
				function U() {
					this.expando = f.expando + U.uid++;
				}
				(U.uid = 1),
					(U.prototype = {
						register: function (t, e) {
							var n = e || {};
							return (
								t.nodeType
									? (t[this.expando] = n)
									: Object.defineProperty(t, this.expando, {
											value: n,
											writable: !0,
											configurable: !0,
									  }),
								t[this.expando]
							);
						},
						cache: function (t) {
							if (!W(t)) return {};
							var e = t[this.expando];
							return (
								e ||
									((e = {}),
									W(t) &&
										(t.nodeType
											? (t[this.expando] = e)
											: Object.defineProperty(t, this.expando, {
													value: e,
													configurable: !0,
											  }))),
								e
							);
						},
						set: function (t, e, n) {
							var i,
								r = this.cache(t);
							if ('string' == typeof e) r[e] = n;
							else for (i in e) r[i] = e[i];
							return r;
						},
						get: function (t, e) {
							return void 0 === e
								? this.cache(t)
								: t[this.expando] && t[this.expando][e];
						},
						access: function (t, e, n) {
							var i;
							return void 0 === e || (e && 'string' == typeof e && void 0 === n)
								? void 0 !== (i = this.get(t, e))
									? i
									: this.get(t, f.camelCase(e))
								: (this.set(t, e, n), void 0 !== n ? n : e);
						},
						remove: function (t, e) {
							var n,
								i,
								r,
								o = t[this.expando];
							if (void 0 !== o) {
								if (void 0 === e) this.register(t);
								else {
									f.isArray(e)
										? (i = e.concat(e.map(f.camelCase)))
										: ((r = f.camelCase(e)),
										  (i =
												e in o
													? [e, r]
													: (i = r) in o
													? [i]
													: i.match(I) || [])),
										(n = i.length);
									for (; n--; ) delete o[i[n]];
								}
								(void 0 === e || f.isEmptyObject(o)) &&
									(t.nodeType
										? (t[this.expando] = void 0)
										: delete t[this.expando]);
							}
						},
						hasData: function (t) {
							var e = t[this.expando];
							return void 0 !== e && !f.isEmptyObject(e);
						},
					});
				var K = new U(),
					k = new U(),
					S = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
					N = /[A-Z]/g;
				function $(t, e, n) {
					var i;
					if (void 0 === n && 1 === t.nodeType)
						if (
							((i = 'data-' + e.replace(N, '-$&').toLowerCase()),
							'string' == typeof (n = t.getAttribute(i)))
						) {
							try {
								n =
									'true' === n ||
									('false' !== n &&
										('null' === n
											? null
											: +n + '' === n
											? +n
											: S.test(n)
											? f.parseJSON(n)
											: n));
							} catch (t) {}
							k.set(t, e, n);
						} else n = void 0;
					return n;
				}
				f.extend({
					hasData: function (t) {
						return k.hasData(t) || K.hasData(t);
					},
					data: function (t, e, n) {
						return k.access(t, e, n);
					},
					removeData: function (t, e) {
						k.remove(t, e);
					},
					_data: function (t, e, n) {
						return K.access(t, e, n);
					},
					_removeData: function (t, e) {
						K.remove(t, e);
					},
				}),
					f.fn.extend({
						data: function (t, e) {
							var n,
								i,
								r,
								o = this[0],
								a = o && o.attributes;
							if (void 0 === t) {
								if (
									this.length &&
									((r = k.get(o)),
									1 === o.nodeType && !K.get(o, 'hasDataAttrs'))
								) {
									for (n = a.length; n--; )
										a[n] &&
											0 === (i = a[n].name).indexOf('data-') &&
											((i = f.camelCase(i.slice(5))), $(o, i, r[i]));
									K.set(o, 'hasDataAttrs', !0);
								}
								return r;
							}
							return 'object' == typeof t
								? this.each(function () {
										k.set(this, t);
								  })
								: B(
										this,
										function (e) {
											var n, i;
											if (o && void 0 === e)
												return void 0 !==
													(n =
														k.get(o, t) ||
														k.get(o, t.replace(N, '-$&').toLowerCase()))
													? n
													: ((i = f.camelCase(t)),
													  void 0 !== (n = k.get(o, i)) ||
													  void 0 !== (n = $(o, i, void 0))
															? n
															: void 0);
											(i = f.camelCase(t)),
												this.each(function () {
													var n = k.get(this, i);
													k.set(this, i, e),
														t.indexOf('-') > -1 &&
															void 0 !== n &&
															k.set(this, t, e);
												});
										},
										null,
										e,
										arguments.length > 1,
										null,
										!0
								  );
						},
						removeData: function (t) {
							return this.each(function () {
								k.remove(this, t);
							});
						},
					}),
					f.extend({
						queue: function (t, e, n) {
							var i;
							if (t)
								return (
									(e = (e || 'fx') + 'queue'),
									(i = K.get(t, e)),
									n &&
										(!i || f.isArray(n)
											? (i = K.access(t, e, f.makeArray(n)))
											: i.push(n)),
									i || []
								);
						},
						dequeue: function (t, e) {
							e = e || 'fx';
							var n = f.queue(t, e),
								i = n.length,
								r = n.shift(),
								o = f._queueHooks(t, e);
							'inprogress' === r && ((r = n.shift()), i--),
								r &&
									('fx' === e && n.unshift('inprogress'),
									delete o.stop,
									r.call(
										t,
										function () {
											f.dequeue(t, e);
										},
										o
									)),
								!i && o && o.empty.fire();
						},
						_queueHooks: function (t, e) {
							var n = e + 'queueHooks';
							return (
								K.get(t, n) ||
								K.access(t, n, {
									empty: f.Callbacks('once memory').add(function () {
										K.remove(t, [e + 'queue', n]);
									}),
								})
							);
						},
					}),
					f.fn.extend({
						queue: function (t, e) {
							var n = 2;
							return (
								'string' != typeof t && ((e = t), (t = 'fx'), n--),
								arguments.length < n
									? f.queue(this[0], t)
									: void 0 === e
									? this
									: this.each(function () {
											var n = f.queue(this, t, e);
											f._queueHooks(this, t),
												'fx' === t &&
													'inprogress' !== n[0] &&
													f.dequeue(this, t);
									  })
							);
						},
						dequeue: function (t) {
							return this.each(function () {
								f.dequeue(this, t);
							});
						},
						clearQueue: function (t) {
							return this.queue(t || 'fx', []);
						},
						promise: function (t, e) {
							var n,
								i = 1,
								r = f.Deferred(),
								o = this,
								a = this.length,
								s = function () {
									--i || r.resolveWith(o, [o]);
								};
							for (
								'string' != typeof t && ((e = t), (t = void 0)), t = t || 'fx';
								a--;

							)
								(n = K.get(o[a], t + 'queueHooks')) &&
									n.empty &&
									(i++, n.empty.add(s));
							return s(), r.promise(e);
						},
					});
				var F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
					H = new RegExp('^(?:([+-])=|)(' + F + ')([a-z%]*)$', 'i'),
					z = ['Top', 'Right', 'Bottom', 'Left'],
					V = function (t, e) {
						return (
							(t = e || t),
							'none' === f.css(t, 'display') || !f.contains(t.ownerDocument, t)
						);
					};
				function G(t, e, n, i) {
					var r,
						o = 1,
						a = 20,
						s = i
							? function () {
									return i.cur();
							  }
							: function () {
									return f.css(t, e, '');
							  },
						l = s(),
						u = (n && n[3]) || (f.cssNumber[e] ? '' : 'px'),
						c = (f.cssNumber[e] || ('px' !== u && +l)) && H.exec(f.css(t, e));
					if (c && c[3] !== u) {
						(u = u || c[3]), (n = n || []), (c = +l || 1);
						do {
							(c /= o = o || '.5'), f.style(t, e, c + u);
						} while (o !== (o = s() / l) && 1 !== o && --a);
					}
					return (
						n &&
							((c = +c || +l || 0),
							(r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
							i && ((i.unit = u), (i.start = c), (i.end = r))),
						r
					);
				}
				var Q = /^(?:checkbox|radio)$/i,
					X = /<([\w:-]+)/,
					Y = /^$|\/(?:java|ecma)script/i,
					J = {
						option: [1, "<select multiple='multiple'>", '</select>'],
						thead: [1, '<table>', '</table>'],
						col: [2, '<table><colgroup>', '</colgroup></table>'],
						tr: [2, '<table><tbody>', '</tbody></table>'],
						td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
						_default: [0, '', ''],
					};
				function Z(t, e) {
					var n =
						void 0 !== t.getElementsByTagName
							? t.getElementsByTagName(e || '*')
							: void 0 !== t.querySelectorAll
							? t.querySelectorAll(e || '*')
							: [];
					return void 0 === e || (e && f.nodeName(t, e)) ? f.merge([t], n) : n;
				}
				function tt(t, e) {
					for (var n = 0, i = t.length; n < i; n++)
						K.set(t[n], 'globalEval', !e || K.get(e[n], 'globalEval'));
				}
				(J.optgroup = J.option),
					(J.tbody = J.tfoot = J.colgroup = J.caption = J.thead),
					(J.th = J.td);
				var et,
					nt,
					it = /<|&#?\w+;/;
				function rt(t, e, n, i, r) {
					for (
						var o,
							a,
							s,
							l,
							u,
							c,
							_ = e.createDocumentFragment(),
							d = [],
							p = 0,
							h = t.length;
						p < h;
						p++
					)
						if ((o = t[p]) || 0 === o)
							if ('object' === f.type(o)) f.merge(d, o.nodeType ? [o] : o);
							else if (it.test(o)) {
								for (
									a = a || _.appendChild(e.createElement('div')),
										s = (X.exec(o) || ['', ''])[1].toLowerCase(),
										l = J[s] || J._default,
										a.innerHTML = l[1] + f.htmlPrefilter(o) + l[2],
										c = l[0];
									c--;

								)
									a = a.lastChild;
								f.merge(d, a.childNodes), ((a = _.firstChild).textContent = '');
							} else d.push(e.createTextNode(o));
					for (_.textContent = '', p = 0; (o = d[p++]); )
						if (i && f.inArray(o, i) > -1) r && r.push(o);
						else if (
							((u = f.contains(o.ownerDocument, o)),
							(a = Z(_.appendChild(o), 'script')),
							u && tt(a),
							n)
						)
							for (c = 0; (o = a[c++]); ) Y.test(o.type || '') && n.push(o);
					return _;
				}
				(et = a.createDocumentFragment().appendChild(a.createElement('div'))),
					(nt = a.createElement('input')).setAttribute('type', 'radio'),
					nt.setAttribute('checked', 'checked'),
					nt.setAttribute('name', 't'),
					et.appendChild(nt),
					(h.checkClone = et.cloneNode(!0).cloneNode(!0).lastChild.checked),
					(et.innerHTML = '<textarea>x</textarea>'),
					(h.noCloneChecked = !!et.cloneNode(!0).lastChild.defaultValue);
				var ot = /^key/,
					at = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
					st = /^([^.]*)(?:\.(.+)|)/;
				function lt() {
					return !0;
				}
				function ut() {
					return !1;
				}
				function ct() {
					try {
						return a.activeElement;
					} catch (t) {}
				}
				function _t(t, e, n, i, r, o) {
					var a, s;
					if ('object' == typeof e) {
						for (s in ('string' != typeof n && ((i = i || n), (n = void 0)), e))
							_t(t, s, n, i, e[s], o);
						return t;
					}
					if (
						(null == i && null == r
							? ((r = n), (i = n = void 0))
							: null == r &&
							  ('string' == typeof n
									? ((r = i), (i = void 0))
									: ((r = i), (i = n), (n = void 0))),
						!1 === r)
					)
						r = ut;
					else if (!r) return t;
					return (
						1 === o &&
							((a = r),
							((r = function (t) {
								return f().off(t), a.apply(this, arguments);
							}).guid = a.guid || (a.guid = f.guid++))),
						t.each(function () {
							f.event.add(this, e, r, i, n);
						})
					);
				}
				(f.event = {
					global: {},
					add: function (t, e, n, i, r) {
						var o,
							a,
							s,
							l,
							u,
							c,
							_,
							d,
							p,
							h,
							g,
							m = K.get(t);
						if (m)
							for (
								n.handler && ((n = (o = n).handler), (r = o.selector)),
									n.guid || (n.guid = f.guid++),
									(l = m.events) || (l = m.events = {}),
									(a = m.handle) ||
										(a = m.handle =
											function (e) {
												return void 0 !== f && f.event.triggered !== e.type
													? f.event.dispatch.apply(t, arguments)
													: void 0;
											}),
									u = (e = (e || '').match(I) || ['']).length;
								u--;

							)
								(p = g = (s = st.exec(e[u]) || [])[1]),
									(h = (s[2] || '').split('.').sort()),
									p &&
										((_ = f.event.special[p] || {}),
										(p = (r ? _.delegateType : _.bindType) || p),
										(_ = f.event.special[p] || {}),
										(c = f.extend(
											{
												type: p,
												origType: g,
												data: i,
												handler: n,
												guid: n.guid,
												selector: r,
												needsContext: r && f.expr.match.needsContext.test(r),
												namespace: h.join('.'),
											},
											o
										)),
										(d = l[p]) ||
											(((d = l[p] = []).delegateCount = 0),
											(_.setup && !1 !== _.setup.call(t, i, h, a)) ||
												(t.addEventListener && t.addEventListener(p, a))),
										_.add &&
											(_.add.call(t, c),
											c.handler.guid || (c.handler.guid = n.guid)),
										r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
										(f.event.global[p] = !0));
					},
					remove: function (t, e, n, i, r) {
						var o,
							a,
							s,
							l,
							u,
							c,
							_,
							d,
							p,
							h,
							g,
							m = K.hasData(t) && K.get(t);
						if (m && (l = m.events)) {
							for (u = (e = (e || '').match(I) || ['']).length; u--; )
								if (
									((p = g = (s = st.exec(e[u]) || [])[1]),
									(h = (s[2] || '').split('.').sort()),
									p)
								) {
									for (
										_ = f.event.special[p] || {},
											d = l[(p = (i ? _.delegateType : _.bindType) || p)] || [],
											s =
												s[2] &&
												new RegExp(
													'(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
												),
											a = o = d.length;
										o--;

									)
										(c = d[o]),
											(!r && g !== c.origType) ||
												(n && n.guid !== c.guid) ||
												(s && !s.test(c.namespace)) ||
												(i &&
													i !== c.selector &&
													('**' !== i || !c.selector)) ||
												(d.splice(o, 1),
												c.selector && d.delegateCount--,
												_.remove && _.remove.call(t, c));
									a &&
										!d.length &&
										((_.teardown && !1 !== _.teardown.call(t, h, m.handle)) ||
											f.removeEvent(t, p, m.handle),
										delete l[p]);
								} else for (p in l) f.event.remove(t, p + e[u], n, i, !0);
							f.isEmptyObject(l) && K.remove(t, 'handle events');
						}
					},
					dispatch: function (t) {
						t = f.event.fix(t);
						var e,
							n,
							i,
							r,
							o,
							a = [],
							l = s.call(arguments),
							u = (K.get(this, 'events') || {})[t.type] || [],
							c = f.event.special[t.type] || {};
						if (
							((l[0] = t),
							(t.delegateTarget = this),
							!c.preDispatch || !1 !== c.preDispatch.call(this, t))
						) {
							for (
								a = f.event.handlers.call(this, t, u), e = 0;
								(r = a[e++]) && !t.isPropagationStopped();

							)
								for (
									t.currentTarget = r.elem, n = 0;
									(o = r.handlers[n++]) && !t.isImmediatePropagationStopped();

								)
									(t.rnamespace && !t.rnamespace.test(o.namespace)) ||
										((t.handleObj = o),
										(t.data = o.data),
										void 0 !==
											(i = (
												(f.event.special[o.origType] || {}).handle || o.handler
											).apply(r.elem, l)) &&
											!1 === (t.result = i) &&
											(t.preventDefault(), t.stopPropagation()));
							return c.postDispatch && c.postDispatch.call(this, t), t.result;
						}
					},
					handlers: function (t, e) {
						var n,
							i,
							r,
							o,
							a = [],
							s = e.delegateCount,
							l = t.target;
						if (
							s &&
							l.nodeType &&
							('click' !== t.type || isNaN(t.button) || t.button < 1)
						)
							for (; l !== this; l = l.parentNode || this)
								if (
									1 === l.nodeType &&
									(!0 !== l.disabled || 'click' !== t.type)
								) {
									for (i = [], n = 0; n < s; n++)
										void 0 === i[(r = (o = e[n]).selector + ' ')] &&
											(i[r] = o.needsContext
												? f(r, this).index(l) > -1
												: f.find(r, this, null, [l]).length),
											i[r] && i.push(o);
									i.length && a.push({ elem: l, handlers: i });
								}
						return (
							s < e.length && a.push({ elem: this, handlers: e.slice(s) }), a
						);
					},
					props:
						'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
							' '
						),
					fixHooks: {},
					keyHooks: {
						props: 'char charCode key keyCode'.split(' '),
						filter: function (t, e) {
							return (
								null == t.which &&
									(t.which = null != e.charCode ? e.charCode : e.keyCode),
								t
							);
						},
					},
					mouseHooks: {
						props:
							'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
								' '
							),
						filter: function (t, e) {
							var n,
								i,
								r,
								o = e.button;
							return (
								null == t.pageX &&
									null != e.clientX &&
									((i = (n = t.target.ownerDocument || a).documentElement),
									(r = n.body),
									(t.pageX =
										e.clientX +
										((i && i.scrollLeft) || (r && r.scrollLeft) || 0) -
										((i && i.clientLeft) || (r && r.clientLeft) || 0)),
									(t.pageY =
										e.clientY +
										((i && i.scrollTop) || (r && r.scrollTop) || 0) -
										((i && i.clientTop) || (r && r.clientTop) || 0))),
								t.which ||
									void 0 === o ||
									(t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
								t
							);
						},
					},
					fix: function (t) {
						if (t[f.expando]) return t;
						var e,
							n,
							i,
							r = t.type,
							o = t,
							s = this.fixHooks[r];
						for (
							s ||
								(this.fixHooks[r] = s =
									at.test(r)
										? this.mouseHooks
										: ot.test(r)
										? this.keyHooks
										: {}),
								i = s.props ? this.props.concat(s.props) : this.props,
								t = new f.Event(o),
								e = i.length;
							e--;

						)
							t[(n = i[e])] = o[n];
						return (
							t.target || (t.target = a),
							3 === t.target.nodeType && (t.target = t.target.parentNode),
							s.filter ? s.filter(t, o) : t
						);
					},
					special: {
						load: { noBubble: !0 },
						focus: {
							trigger: function () {
								if (this !== ct() && this.focus) return this.focus(), !1;
							},
							delegateType: 'focusin',
						},
						blur: {
							trigger: function () {
								if (this === ct() && this.blur) return this.blur(), !1;
							},
							delegateType: 'focusout',
						},
						click: {
							trigger: function () {
								if (
									'checkbox' === this.type &&
									this.click &&
									f.nodeName(this, 'input')
								)
									return this.click(), !1;
							},
							_default: function (t) {
								return f.nodeName(t.target, 'a');
							},
						},
						beforeunload: {
							postDispatch: function (t) {
								void 0 !== t.result &&
									t.originalEvent &&
									(t.originalEvent.returnValue = t.result);
							},
						},
					},
				}),
					(f.removeEvent = function (t, e, n) {
						t.removeEventListener && t.removeEventListener(e, n);
					}),
					(f.Event = function (t, e) {
						if (!(this instanceof f.Event)) return new f.Event(t, e);
						t && t.type
							? ((this.originalEvent = t),
							  (this.type = t.type),
							  (this.isDefaultPrevented =
									t.defaultPrevented ||
									(void 0 === t.defaultPrevented && !1 === t.returnValue)
										? lt
										: ut))
							: (this.type = t),
							e && f.extend(this, e),
							(this.timeStamp = (t && t.timeStamp) || f.now()),
							(this[f.expando] = !0);
					}),
					(f.Event.prototype = {
						constructor: f.Event,
						isDefaultPrevented: ut,
						isPropagationStopped: ut,
						isImmediatePropagationStopped: ut,
						isSimulated: !1,
						preventDefault: function () {
							var t = this.originalEvent;
							(this.isDefaultPrevented = lt),
								t && !this.isSimulated && t.preventDefault();
						},
						stopPropagation: function () {
							var t = this.originalEvent;
							(this.isPropagationStopped = lt),
								t && !this.isSimulated && t.stopPropagation();
						},
						stopImmediatePropagation: function () {
							var t = this.originalEvent;
							(this.isImmediatePropagationStopped = lt),
								t && !this.isSimulated && t.stopImmediatePropagation(),
								this.stopPropagation();
						},
					}),
					f.each(
						{
							mouseenter: 'mouseover',
							mouseleave: 'mouseout',
							pointerenter: 'pointerover',
							pointerleave: 'pointerout',
						},
						function (t, e) {
							f.event.special[t] = {
								delegateType: e,
								bindType: e,
								handle: function (t) {
									var n,
										i = this,
										r = t.relatedTarget,
										o = t.handleObj;
									return (
										(r && (r === i || f.contains(i, r))) ||
											((t.type = o.origType),
											(n = o.handler.apply(this, arguments)),
											(t.type = e)),
										n
									);
								},
							};
						}
					),
					f.fn.extend({
						on: function (t, e, n, i) {
							return _t(this, t, e, n, i);
						},
						one: function (t, e, n, i) {
							return _t(this, t, e, n, i, 1);
						},
						off: function (t, e, n) {
							var i, r;
							if (t && t.preventDefault && t.handleObj)
								return (
									(i = t.handleObj),
									f(t.delegateTarget).off(
										i.namespace ? i.origType + '.' + i.namespace : i.origType,
										i.selector,
										i.handler
									),
									this
								);
							if ('object' == typeof t) {
								for (r in t) this.off(r, e, t[r]);
								return this;
							}
							return (
								(!1 !== e && 'function' != typeof e) || ((n = e), (e = void 0)),
								!1 === n && (n = ut),
								this.each(function () {
									f.event.remove(this, t, n, e);
								})
							);
						},
					});
				var dt =
						/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
					pt = /<script|<style|<link/i,
					ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
					ft = /^true\/(.*)/,
					gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
				function mt(t, e) {
					return f.nodeName(t, 'table') &&
						f.nodeName(11 !== e.nodeType ? e : e.firstChild, 'tr')
						? t.getElementsByTagName('tbody')[0] ||
								t.appendChild(t.ownerDocument.createElement('tbody'))
						: t;
				}
				function yt(t) {
					return (t.type = (null !== t.getAttribute('type')) + '/' + t.type), t;
				}
				function Et(t) {
					var e = ft.exec(t.type);
					return e ? (t.type = e[1]) : t.removeAttribute('type'), t;
				}
				function vt(t, e) {
					var n, i, r, o, a, s, l, u;
					if (1 === e.nodeType) {
						if (
							K.hasData(t) &&
							((o = K.access(t)), (a = K.set(e, o)), (u = o.events))
						)
							for (r in (delete a.handle, (a.events = {}), u))
								for (n = 0, i = u[r].length; n < i; n++)
									f.event.add(e, r, u[r][n]);
						k.hasData(t) &&
							((s = k.access(t)), (l = f.extend({}, s)), k.set(e, l));
					}
				}
				function Ot(t, e, n, i) {
					e = l.apply([], e);
					var r,
						o,
						a,
						s,
						u,
						c,
						_ = 0,
						d = t.length,
						p = d - 1,
						g = e[0],
						m = f.isFunction(g);
					if (
						m ||
						(d > 1 && 'string' == typeof g && !h.checkClone && ht.test(g))
					)
						return t.each(function (r) {
							var o = t.eq(r);
							m && (e[0] = g.call(this, r, o.html())), Ot(o, e, n, i);
						});
					if (
						d &&
						((o = (r = rt(e, t[0].ownerDocument, !1, t, i)).firstChild),
						1 === r.childNodes.length && (r = o),
						o || i)
					) {
						for (s = (a = f.map(Z(r, 'script'), yt)).length; _ < d; _++)
							(u = r),
								_ !== p &&
									((u = f.clone(u, !0, !0)), s && f.merge(a, Z(u, 'script'))),
								n.call(t[_], u, _);
						if (s)
							for (
								c = a[a.length - 1].ownerDocument, f.map(a, Et), _ = 0;
								_ < s;
								_++
							)
								(u = a[_]),
									Y.test(u.type || '') &&
										!K.access(u, 'globalEval') &&
										f.contains(c, u) &&
										(u.src
											? f._evalUrl && f._evalUrl(u.src)
											: f.globalEval(u.textContent.replace(gt, '')));
					}
					return t;
				}
				function Dt(t, e, n) {
					for (
						var i, r = e ? f.filter(e, t) : t, o = 0;
						null != (i = r[o]);
						o++
					)
						n || 1 !== i.nodeType || f.cleanData(Z(i)),
							i.parentNode &&
								(n && f.contains(i.ownerDocument, i) && tt(Z(i, 'script')),
								i.parentNode.removeChild(i));
					return t;
				}
				f.extend({
					htmlPrefilter: function (t) {
						return t.replace(dt, '<$1></$2>');
					},
					clone: function (t, e, n) {
						var i,
							r,
							o,
							a,
							s,
							l,
							u,
							c = t.cloneNode(!0),
							_ = f.contains(t.ownerDocument, t);
						if (
							!(
								h.noCloneChecked ||
								(1 !== t.nodeType && 11 !== t.nodeType) ||
								f.isXMLDoc(t)
							)
						)
							for (a = Z(c), i = 0, r = (o = Z(t)).length; i < r; i++)
								(s = o[i]),
									(l = a[i]),
									(u = void 0),
									'input' === (u = l.nodeName.toLowerCase()) && Q.test(s.type)
										? (l.checked = s.checked)
										: ('input' !== u && 'textarea' !== u) ||
										  (l.defaultValue = s.defaultValue);
						if (e)
							if (n)
								for (
									o = o || Z(t), a = a || Z(c), i = 0, r = o.length;
									i < r;
									i++
								)
									vt(o[i], a[i]);
							else vt(t, c);
						return (
							(a = Z(c, 'script')).length > 0 && tt(a, !_ && Z(t, 'script')), c
						);
					},
					cleanData: function (t) {
						for (
							var e, n, i, r = f.event.special, o = 0;
							void 0 !== (n = t[o]);
							o++
						)
							if (W(n)) {
								if ((e = n[K.expando])) {
									if (e.events)
										for (i in e.events)
											r[i]
												? f.event.remove(n, i)
												: f.removeEvent(n, i, e.handle);
									n[K.expando] = void 0;
								}
								n[k.expando] && (n[k.expando] = void 0);
							}
					},
				}),
					f.fn.extend({
						domManip: Ot,
						detach: function (t) {
							return Dt(this, t, !0);
						},
						remove: function (t) {
							return Dt(this, t);
						},
						text: function (t) {
							return B(
								this,
								function (t) {
									return void 0 === t
										? f.text(this)
										: this.empty().each(function () {
												(1 !== this.nodeType &&
													11 !== this.nodeType &&
													9 !== this.nodeType) ||
													(this.textContent = t);
										  });
								},
								null,
								t,
								arguments.length
							);
						},
						append: function () {
							return Ot(this, arguments, function (t) {
								(1 !== this.nodeType &&
									11 !== this.nodeType &&
									9 !== this.nodeType) ||
									mt(this, t).appendChild(t);
							});
						},
						prepend: function () {
							return Ot(this, arguments, function (t) {
								if (
									1 === this.nodeType ||
									11 === this.nodeType ||
									9 === this.nodeType
								) {
									var e = mt(this, t);
									e.insertBefore(t, e.firstChild);
								}
							});
						},
						before: function () {
							return Ot(this, arguments, function (t) {
								this.parentNode && this.parentNode.insertBefore(t, this);
							});
						},
						after: function () {
							return Ot(this, arguments, function (t) {
								this.parentNode &&
									this.parentNode.insertBefore(t, this.nextSibling);
							});
						},
						empty: function () {
							for (var t, e = 0; null != (t = this[e]); e++)
								1 === t.nodeType &&
									(f.cleanData(Z(t, !1)), (t.textContent = ''));
							return this;
						},
						clone: function (t, e) {
							return (
								(t = null != t && t),
								(e = null == e ? t : e),
								this.map(function () {
									return f.clone(this, t, e);
								})
							);
						},
						html: function (t) {
							return B(
								this,
								function (t) {
									var e = this[0] || {},
										n = 0,
										i = this.length;
									if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
									if (
										'string' == typeof t &&
										!pt.test(t) &&
										!J[(X.exec(t) || ['', ''])[1].toLowerCase()]
									) {
										t = f.htmlPrefilter(t);
										try {
											for (; n < i; n++)
												1 === (e = this[n] || {}).nodeType &&
													(f.cleanData(Z(e, !1)), (e.innerHTML = t));
											e = 0;
										} catch (t) {}
									}
									e && this.empty().append(t);
								},
								null,
								t,
								arguments.length
							);
						},
						replaceWith: function () {
							var t = [];
							return Ot(
								this,
								arguments,
								function (e) {
									var n = this.parentNode;
									f.inArray(this, t) < 0 &&
										(f.cleanData(Z(this)), n && n.replaceChild(e, this));
								},
								t
							);
						},
					}),
					f.each(
						{
							appendTo: 'append',
							prependTo: 'prepend',
							insertBefore: 'before',
							insertAfter: 'after',
							replaceAll: 'replaceWith',
						},
						function (t, e) {
							f.fn[t] = function (t) {
								for (
									var n, i = [], r = f(t), o = r.length - 1, a = 0;
									a <= o;
									a++
								)
									(n = a === o ? this : this.clone(!0)),
										f(r[a])[e](n),
										u.apply(i, n.get());
								return this.pushStack(i);
							};
						}
					);
				var Pt,
					Mt = { HTML: 'block', BODY: 'block' };
				function bt(t, e) {
					var n = f(e.createElement(t)).appendTo(e.body),
						i = f.css(n[0], 'display');
					return n.detach(), i;
				}
				function wt(t) {
					var e = a,
						n = Mt[t];
					return (
						n ||
							(('none' !== (n = bt(t, e)) && n) ||
								((e = (Pt = (
									Pt || f("<iframe frameborder='0' width='0' height='0'/>")
								).appendTo(e.documentElement))[0].contentDocument).write(),
								e.close(),
								(n = bt(t, e)),
								Pt.detach()),
							(Mt[t] = n)),
						n
					);
				}
				var Ct = /^margin/,
					Tt = new RegExp('^(' + F + ')(?!px)[a-z%]+$', 'i'),
					At = function (t) {
						var e = t.ownerDocument.defaultView;
						return (e && e.opener) || (e = n), e.getComputedStyle(t);
					},
					xt = function (t, e, n, i) {
						var r,
							o,
							a = {};
						for (o in e) (a[o] = t.style[o]), (t.style[o] = e[o]);
						for (o in ((r = n.apply(t, i || [])), e)) t.style[o] = a[o];
						return r;
					},
					qt = a.documentElement;
				function jt(t, e, n) {
					var i,
						r,
						o,
						a,
						s = t.style;
					return (
						('' !==
							(a = (n = n || At(t)) ? n.getPropertyValue(e) || n[e] : void 0) &&
							void 0 !== a) ||
							f.contains(t.ownerDocument, t) ||
							(a = f.style(t, e)),
						n &&
							!h.pixelMarginRight() &&
							Tt.test(a) &&
							Ct.test(e) &&
							((i = s.width),
							(r = s.minWidth),
							(o = s.maxWidth),
							(s.minWidth = s.maxWidth = s.width = a),
							(a = n.width),
							(s.width = i),
							(s.minWidth = r),
							(s.maxWidth = o)),
						void 0 !== a ? a + '' : a
					);
				}
				function Lt(t, e) {
					return {
						get: function () {
							if (!t()) return (this.get = e).apply(this, arguments);
							delete this.get;
						},
					};
				}
				!(function () {
					var t,
						e,
						i,
						r,
						o = a.createElement('div'),
						s = a.createElement('div');
					function l() {
						(s.style.cssText =
							'-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
							(s.innerHTML = ''),
							qt.appendChild(o);
						var a = n.getComputedStyle(s);
						(t = '1%' !== a.top),
							(r = '2px' === a.marginLeft),
							(e = '4px' === a.width),
							(s.style.marginRight = '50%'),
							(i = '4px' === a.marginRight),
							qt.removeChild(o);
					}
					s.style &&
						((s.style.backgroundClip = 'content-box'),
						(s.cloneNode(!0).style.backgroundClip = ''),
						(h.clearCloneStyle = 'content-box' === s.style.backgroundClip),
						(o.style.cssText =
							'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
						o.appendChild(s),
						f.extend(h, {
							pixelPosition: function () {
								return l(), t;
							},
							boxSizingReliable: function () {
								return null == e && l(), e;
							},
							pixelMarginRight: function () {
								return null == e && l(), i;
							},
							reliableMarginLeft: function () {
								return null == e && l(), r;
							},
							reliableMarginRight: function () {
								var t,
									e = s.appendChild(a.createElement('div'));
								return (
									(e.style.cssText = s.style.cssText =
										'-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
									(e.style.marginRight = e.style.width = '0'),
									(s.style.width = '1px'),
									qt.appendChild(o),
									(t = !parseFloat(n.getComputedStyle(e).marginRight)),
									qt.removeChild(o),
									s.removeChild(e),
									t
								);
							},
						}));
				})();
				var It = /^(none|table(?!-c[ea]).+)/,
					Rt = { position: 'absolute', visibility: 'hidden', display: 'block' },
					Bt = { letterSpacing: '0', fontWeight: '400' },
					Wt = ['Webkit', 'O', 'Moz', 'ms'],
					Ut = a.createElement('div').style;
				function Kt(t) {
					if (t in Ut) return t;
					for (var e = t[0].toUpperCase() + t.slice(1), n = Wt.length; n--; )
						if ((t = Wt[n] + e) in Ut) return t;
				}
				function kt(t, e, n) {
					var i = H.exec(e);
					return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || 'px') : e;
				}
				function St(t, e, n, i, r) {
					for (
						var o =
								n === (i ? 'border' : 'content') ? 4 : 'width' === e ? 1 : 0,
							a = 0;
						o < 4;
						o += 2
					)
						'margin' === n && (a += f.css(t, n + z[o], !0, r)),
							i
								? ('content' === n && (a -= f.css(t, 'padding' + z[o], !0, r)),
								  'margin' !== n &&
										(a -= f.css(t, 'border' + z[o] + 'Width', !0, r)))
								: ((a += f.css(t, 'padding' + z[o], !0, r)),
								  'padding' !== n &&
										(a += f.css(t, 'border' + z[o] + 'Width', !0, r)));
					return a;
				}
				function Nt(t, e, n) {
					var i = !0,
						r = 'width' === e ? t.offsetWidth : t.offsetHeight,
						o = At(t),
						a = 'border-box' === f.css(t, 'boxSizing', !1, o);
					if (r <= 0 || null == r) {
						if (
							(((r = jt(t, e, o)) < 0 || null == r) && (r = t.style[e]),
							Tt.test(r))
						)
							return r;
						(i = a && (h.boxSizingReliable() || r === t.style[e])),
							(r = parseFloat(r) || 0);
					}
					return r + St(t, e, n || (a ? 'border' : 'content'), i, o) + 'px';
				}
				function $t(t, e) {
					for (var n, i, r, o = [], a = 0, s = t.length; a < s; a++)
						(i = t[a]).style &&
							((o[a] = K.get(i, 'olddisplay')),
							(n = i.style.display),
							e
								? (o[a] || 'none' !== n || (i.style.display = ''),
								  '' === i.style.display &&
										V(i) &&
										(o[a] = K.access(i, 'olddisplay', wt(i.nodeName))))
								: ((r = V(i)),
								  ('none' === n && r) ||
										K.set(i, 'olddisplay', r ? n : f.css(i, 'display'))));
					for (a = 0; a < s; a++)
						(i = t[a]).style &&
							((e && 'none' !== i.style.display && '' !== i.style.display) ||
								(i.style.display = e ? o[a] || '' : 'none'));
					return t;
				}
				function Ft(t, e, n, i, r) {
					return new Ft.prototype.init(t, e, n, i, r);
				}
				f.extend({
					cssHooks: {
						opacity: {
							get: function (t, e) {
								if (e) {
									var n = jt(t, 'opacity');
									return '' === n ? '1' : n;
								}
							},
						},
					},
					cssNumber: {
						animationIterationCount: !0,
						columnCount: !0,
						fillOpacity: !0,
						flexGrow: !0,
						flexShrink: !0,
						fontWeight: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
					},
					cssProps: { float: 'cssFloat' },
					style: function (t, e, n, i) {
						if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
							var r,
								o,
								a,
								s = f.camelCase(e),
								l = t.style;
							if (
								((e = f.cssProps[s] || (f.cssProps[s] = Kt(s) || s)),
								(a = f.cssHooks[e] || f.cssHooks[s]),
								void 0 === n)
							)
								return a && 'get' in a && void 0 !== (r = a.get(t, !1, i))
									? r
									: l[e];
							'string' == (o = typeof n) &&
								(r = H.exec(n)) &&
								r[1] &&
								((n = G(t, e, r)), (o = 'number')),
								null != n &&
									n == n &&
									('number' === o &&
										(n += (r && r[3]) || (f.cssNumber[s] ? '' : 'px')),
									h.clearCloneStyle ||
										'' !== n ||
										0 !== e.indexOf('background') ||
										(l[e] = 'inherit'),
									(a && 'set' in a && void 0 === (n = a.set(t, n, i))) ||
										(l[e] = n));
						}
					},
					css: function (t, e, n, i) {
						var r,
							o,
							a,
							s = f.camelCase(e);
						return (
							(e = f.cssProps[s] || (f.cssProps[s] = Kt(s) || s)),
							(a = f.cssHooks[e] || f.cssHooks[s]) &&
								'get' in a &&
								(r = a.get(t, !0, n)),
							void 0 === r && (r = jt(t, e, i)),
							'normal' === r && e in Bt && (r = Bt[e]),
							'' === n || n
								? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
								: r
						);
					},
				}),
					f.each(['height', 'width'], function (t, e) {
						f.cssHooks[e] = {
							get: function (t, n, i) {
								if (n)
									return It.test(f.css(t, 'display')) && 0 === t.offsetWidth
										? xt(t, Rt, function () {
												return Nt(t, e, i);
										  })
										: Nt(t, e, i);
							},
							set: function (t, n, i) {
								var r,
									o = i && At(t),
									a =
										i &&
										St(
											t,
											e,
											i,
											'border-box' === f.css(t, 'boxSizing', !1, o),
											o
										);
								return (
									a &&
										(r = H.exec(n)) &&
										'px' !== (r[3] || 'px') &&
										((t.style[e] = n), (n = f.css(t, e))),
									kt(0, n, a)
								);
							},
						};
					}),
					(f.cssHooks.marginLeft = Lt(h.reliableMarginLeft, function (t, e) {
						if (e)
							return (
								(parseFloat(jt(t, 'marginLeft')) ||
									t.getBoundingClientRect().left -
										xt(t, { marginLeft: 0 }, function () {
											return t.getBoundingClientRect().left;
										})) + 'px'
							);
					})),
					(f.cssHooks.marginRight = Lt(h.reliableMarginRight, function (t, e) {
						if (e)
							return xt(t, { display: 'inline-block' }, jt, [t, 'marginRight']);
					})),
					f.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
						(f.cssHooks[t + e] = {
							expand: function (n) {
								for (
									var i = 0,
										r = {},
										o = 'string' == typeof n ? n.split(' ') : [n];
									i < 4;
									i++
								)
									r[t + z[i] + e] = o[i] || o[i - 2] || o[0];
								return r;
							},
						}),
							Ct.test(t) || (f.cssHooks[t + e].set = kt);
					}),
					f.fn.extend({
						css: function (t, e) {
							return B(
								this,
								function (t, e, n) {
									var i,
										r,
										o = {},
										a = 0;
									if (f.isArray(e)) {
										for (i = At(t), r = e.length; a < r; a++)
											o[e[a]] = f.css(t, e[a], !1, i);
										return o;
									}
									return void 0 !== n ? f.style(t, e, n) : f.css(t, e);
								},
								t,
								e,
								arguments.length > 1
							);
						},
						show: function () {
							return $t(this, !0);
						},
						hide: function () {
							return $t(this);
						},
						toggle: function (t) {
							return 'boolean' == typeof t
								? t
									? this.show()
									: this.hide()
								: this.each(function () {
										V(this) ? f(this).show() : f(this).hide();
								  });
						},
					}),
					(f.Tween = Ft),
					(Ft.prototype = {
						constructor: Ft,
						init: function (t, e, n, i, r, o) {
							(this.elem = t),
								(this.prop = n),
								(this.easing = r || f.easing._default),
								(this.options = e),
								(this.start = this.now = this.cur()),
								(this.end = i),
								(this.unit = o || (f.cssNumber[n] ? '' : 'px'));
						},
						cur: function () {
							var t = Ft.propHooks[this.prop];
							return t && t.get ? t.get(this) : Ft.propHooks._default.get(this);
						},
						run: function (t) {
							var e,
								n = Ft.propHooks[this.prop];
							return (
								this.options.duration
									? (this.pos = e =
											f.easing[this.easing](
												t,
												this.options.duration * t,
												0,
												1,
												this.options.duration
											))
									: (this.pos = e = t),
								(this.now = (this.end - this.start) * e + this.start),
								this.options.step &&
									this.options.step.call(this.elem, this.now, this),
								n && n.set ? n.set(this) : Ft.propHooks._default.set(this),
								this
							);
						},
					}),
					(Ft.prototype.init.prototype = Ft.prototype),
					(Ft.propHooks = {
						_default: {
							get: function (t) {
								var e;
								return 1 !== t.elem.nodeType ||
									(null != t.elem[t.prop] && null == t.elem.style[t.prop])
									? t.elem[t.prop]
									: (e = f.css(t.elem, t.prop, '')) && 'auto' !== e
									? e
									: 0;
							},
							set: function (t) {
								f.fx.step[t.prop]
									? f.fx.step[t.prop](t)
									: 1 !== t.elem.nodeType ||
									  (null == t.elem.style[f.cssProps[t.prop]] &&
											!f.cssHooks[t.prop])
									? (t.elem[t.prop] = t.now)
									: f.style(t.elem, t.prop, t.now + t.unit);
							},
						},
					}),
					(Ft.propHooks.scrollTop = Ft.propHooks.scrollLeft =
						{
							set: function (t) {
								t.elem.nodeType &&
									t.elem.parentNode &&
									(t.elem[t.prop] = t.now);
							},
						}),
					(f.easing = {
						linear: function (t) {
							return t;
						},
						swing: function (t) {
							return 0.5 - Math.cos(t * Math.PI) / 2;
						},
						_default: 'swing',
					}),
					(f.fx = Ft.prototype.init),
					(f.fx.step = {});
				var Ht,
					zt,
					Vt = /^(?:toggle|show|hide)$/,
					Gt = /queueHooks$/;
				function Qt() {
					return (
						n.setTimeout(function () {
							Ht = void 0;
						}),
						(Ht = f.now())
					);
				}
				function Xt(t, e) {
					var n,
						i = 0,
						r = { height: t };
					for (e = e ? 1 : 0; i < 4; i += 2 - e)
						r['margin' + (n = z[i])] = r['padding' + n] = t;
					return e && (r.opacity = r.width = t), r;
				}
				function Yt(t, e, n) {
					for (
						var i,
							r = (Jt.tweeners[e] || []).concat(Jt.tweeners['*']),
							o = 0,
							a = r.length;
						o < a;
						o++
					)
						if ((i = r[o].call(n, e, t))) return i;
				}
				function Jt(t, e, n) {
					var i,
						r,
						o = 0,
						a = Jt.prefilters.length,
						s = f.Deferred().always(function () {
							delete l.elem;
						}),
						l = function () {
							if (r) return !1;
							for (
								var e = Ht || Qt(),
									n = Math.max(0, u.startTime + u.duration - e),
									i = 1 - (n / u.duration || 0),
									o = 0,
									a = u.tweens.length;
								o < a;
								o++
							)
								u.tweens[o].run(i);
							return (
								s.notifyWith(t, [u, i, n]),
								i < 1 && a ? n : (s.resolveWith(t, [u]), !1)
							);
						},
						u = s.promise({
							elem: t,
							props: f.extend({}, e),
							opts: f.extend(
								!0,
								{ specialEasing: {}, easing: f.easing._default },
								n
							),
							originalProperties: e,
							originalOptions: n,
							startTime: Ht || Qt(),
							duration: n.duration,
							tweens: [],
							createTween: function (e, n) {
								var i = f.Tween(
									t,
									u.opts,
									e,
									n,
									u.opts.specialEasing[e] || u.opts.easing
								);
								return u.tweens.push(i), i;
							},
							stop: function (e) {
								var n = 0,
									i = e ? u.tweens.length : 0;
								if (r) return this;
								for (r = !0; n < i; n++) u.tweens[n].run(1);
								return (
									e
										? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e]))
										: s.rejectWith(t, [u, e]),
									this
								);
							},
						}),
						c = u.props;
					for (
						(function (t, e) {
							var n, i, r, o, a;
							for (n in t)
								if (
									((r = e[(i = f.camelCase(n))]),
									(o = t[n]),
									f.isArray(o) && ((r = o[1]), (o = t[n] = o[0])),
									n !== i && ((t[i] = o), delete t[n]),
									(a = f.cssHooks[i]) && ('expand' in a))
								)
									for (n in ((o = a.expand(o)), delete t[i], o))
										(n in t) || ((t[n] = o[n]), (e[n] = r));
								else e[i] = r;
						})(c, u.opts.specialEasing);
						o < a;
						o++
					)
						if ((i = Jt.prefilters[o].call(u, t, c, u.opts)))
							return (
								f.isFunction(i.stop) &&
									(f._queueHooks(u.elem, u.opts.queue).stop = f.proxy(
										i.stop,
										i
									)),
								i
							);
					return (
						f.map(c, Yt, u),
						f.isFunction(u.opts.start) && u.opts.start.call(t, u),
						f.fx.timer(f.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
						u
							.progress(u.opts.progress)
							.done(u.opts.done, u.opts.complete)
							.fail(u.opts.fail)
							.always(u.opts.always)
					);
				}
				(f.Animation = f.extend(Jt, {
					tweeners: {
						'*': [
							function (t, e) {
								var n = this.createTween(t, e);
								return G(n.elem, t, H.exec(e), n), n;
							},
						],
					},
					tweener: function (t, e) {
						f.isFunction(t) ? ((e = t), (t = ['*'])) : (t = t.match(I));
						for (var n, i = 0, r = t.length; i < r; i++)
							(n = t[i]),
								(Jt.tweeners[n] = Jt.tweeners[n] || []),
								Jt.tweeners[n].unshift(e);
					},
					prefilters: [
						function (t, e, n) {
							var i,
								r,
								o,
								a,
								s,
								l,
								u,
								c = this,
								_ = {},
								d = t.style,
								p = t.nodeType && V(t),
								h = K.get(t, 'fxshow');
							for (i in (n.queue ||
								(null == (s = f._queueHooks(t, 'fx')).unqueued &&
									((s.unqueued = 0),
									(l = s.empty.fire),
									(s.empty.fire = function () {
										s.unqueued || l();
									})),
								s.unqueued++,
								c.always(function () {
									c.always(function () {
										s.unqueued--, f.queue(t, 'fx').length || s.empty.fire();
									});
								})),
							1 === t.nodeType &&
								('height' in e || 'width' in e) &&
								((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
								'inline' ===
									('none' === (u = f.css(t, 'display'))
										? K.get(t, 'olddisplay') || wt(t.nodeName)
										: u) &&
									'none' === f.css(t, 'float') &&
									(d.display = 'inline-block')),
							n.overflow &&
								((d.overflow = 'hidden'),
								c.always(function () {
									(d.overflow = n.overflow[0]),
										(d.overflowX = n.overflow[1]),
										(d.overflowY = n.overflow[2]);
								})),
							e))
								if (((r = e[i]), Vt.exec(r))) {
									if (
										(delete e[i],
										(o = o || 'toggle' === r),
										r === (p ? 'hide' : 'show'))
									) {
										if ('show' !== r || !h || void 0 === h[i]) continue;
										p = !0;
									}
									_[i] = (h && h[i]) || f.style(t, i);
								} else u = void 0;
							if (f.isEmptyObject(_))
								'inline' === ('none' === u ? wt(t.nodeName) : u) &&
									(d.display = u);
							else
								for (i in (h
									? 'hidden' in h && (p = h.hidden)
									: (h = K.access(t, 'fxshow', {})),
								o && (h.hidden = !p),
								p
									? f(t).show()
									: c.done(function () {
											f(t).hide();
									  }),
								c.done(function () {
									var e;
									for (e in (K.remove(t, 'fxshow'), _)) f.style(t, e, _[e]);
								}),
								_))
									(a = Yt(p ? h[i] : 0, i, c)),
										i in h ||
											((h[i] = a.start),
											p &&
												((a.end = a.start),
												(a.start = 'width' === i || 'height' === i ? 1 : 0)));
						},
					],
					prefilter: function (t, e) {
						e ? Jt.prefilters.unshift(t) : Jt.prefilters.push(t);
					},
				})),
					(f.speed = function (t, e, n) {
						var i =
							t && 'object' == typeof t
								? f.extend({}, t)
								: {
										complete: n || (!n && e) || (f.isFunction(t) && t),
										duration: t,
										easing: (n && e) || (e && !f.isFunction(e) && e),
								  };
						return (
							(i.duration = f.fx.off
								? 0
								: 'number' == typeof i.duration
								? i.duration
								: i.duration in f.fx.speeds
								? f.fx.speeds[i.duration]
								: f.fx.speeds._default),
							(null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
							(i.old = i.complete),
							(i.complete = function () {
								f.isFunction(i.old) && i.old.call(this),
									i.queue && f.dequeue(this, i.queue);
							}),
							i
						);
					}),
					f.fn.extend({
						fadeTo: function (t, e, n, i) {
							return this.filter(V)
								.css('opacity', 0)
								.show()
								.end()
								.animate({ opacity: e }, t, n, i);
						},
						animate: function (t, e, n, i) {
							var r = f.isEmptyObject(t),
								o = f.speed(e, n, i),
								a = function () {
									var e = Jt(this, f.extend({}, t), o);
									(r || K.get(this, 'finish')) && e.stop(!0);
								};
							return (
								(a.finish = a),
								r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
							);
						},
						stop: function (t, e, n) {
							var i = function (t) {
								var e = t.stop;
								delete t.stop, e(n);
							};
							return (
								'string' != typeof t && ((n = e), (e = t), (t = void 0)),
								e && !1 !== t && this.queue(t || 'fx', []),
								this.each(function () {
									var e = !0,
										r = null != t && t + 'queueHooks',
										o = f.timers,
										a = K.get(this);
									if (r) a[r] && a[r].stop && i(a[r]);
									else for (r in a) a[r] && a[r].stop && Gt.test(r) && i(a[r]);
									for (r = o.length; r--; )
										o[r].elem !== this ||
											(null != t && o[r].queue !== t) ||
											(o[r].anim.stop(n), (e = !1), o.splice(r, 1));
									(!e && n) || f.dequeue(this, t);
								})
							);
						},
						finish: function (t) {
							return (
								!1 !== t && (t = t || 'fx'),
								this.each(function () {
									var e,
										n = K.get(this),
										i = n[t + 'queue'],
										r = n[t + 'queueHooks'],
										o = f.timers,
										a = i ? i.length : 0;
									for (
										n.finish = !0,
											f.queue(this, t, []),
											r && r.stop && r.stop.call(this, !0),
											e = o.length;
										e--;

									)
										o[e].elem === this &&
											o[e].queue === t &&
											(o[e].anim.stop(!0), o.splice(e, 1));
									for (e = 0; e < a; e++)
										i[e] && i[e].finish && i[e].finish.call(this);
									delete n.finish;
								})
							);
						},
					}),
					f.each(['toggle', 'show', 'hide'], function (t, e) {
						var n = f.fn[e];
						f.fn[e] = function (t, i, r) {
							return null == t || 'boolean' == typeof t
								? n.apply(this, arguments)
								: this.animate(Xt(e, !0), t, i, r);
						};
					}),
					f.each(
						{
							slideDown: Xt('show'),
							slideUp: Xt('hide'),
							slideToggle: Xt('toggle'),
							fadeIn: { opacity: 'show' },
							fadeOut: { opacity: 'hide' },
							fadeToggle: { opacity: 'toggle' },
						},
						function (t, e) {
							f.fn[t] = function (t, n, i) {
								return this.animate(e, t, n, i);
							};
						}
					),
					(f.timers = []),
					(f.fx.tick = function () {
						var t,
							e = 0,
							n = f.timers;
						for (Ht = f.now(); e < n.length; e++)
							(t = n[e])() || n[e] !== t || n.splice(e--, 1);
						n.length || f.fx.stop(), (Ht = void 0);
					}),
					(f.fx.timer = function (t) {
						f.timers.push(t), t() ? f.fx.start() : f.timers.pop();
					}),
					(f.fx.interval = 13),
					(f.fx.start = function () {
						zt || (zt = n.setInterval(f.fx.tick, f.fx.interval));
					}),
					(f.fx.stop = function () {
						n.clearInterval(zt), (zt = null);
					}),
					(f.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
					(f.fn.delay = function (t, e) {
						return (
							(t = (f.fx && f.fx.speeds[t]) || t),
							(e = e || 'fx'),
							this.queue(e, function (e, i) {
								var r = n.setTimeout(e, t);
								i.stop = function () {
									n.clearTimeout(r);
								};
							})
						);
					}),
					(function () {
						var t = a.createElement('input'),
							e = a.createElement('select'),
							n = e.appendChild(a.createElement('option'));
						(t.type = 'checkbox'),
							(h.checkOn = '' !== t.value),
							(h.optSelected = n.selected),
							(e.disabled = !0),
							(h.optDisabled = !n.disabled),
							((t = a.createElement('input')).value = 't'),
							(t.type = 'radio'),
							(h.radioValue = 't' === t.value);
					})();
				var Zt,
					te = f.expr.attrHandle;
				f.fn.extend({
					attr: function (t, e) {
						return B(this, f.attr, t, e, arguments.length > 1);
					},
					removeAttr: function (t) {
						return this.each(function () {
							f.removeAttr(this, t);
						});
					},
				}),
					f.extend({
						attr: function (t, e, n) {
							var i,
								r,
								o = t.nodeType;
							if (3 !== o && 8 !== o && 2 !== o)
								return void 0 === t.getAttribute
									? f.prop(t, e, n)
									: ((1 === o && f.isXMLDoc(t)) ||
											((e = e.toLowerCase()),
											(r =
												f.attrHooks[e] ||
												(f.expr.match.bool.test(e) ? Zt : void 0))),
									  void 0 !== n
											? null === n
												? void f.removeAttr(t, e)
												: r && 'set' in r && void 0 !== (i = r.set(t, n, e))
												? i
												: (t.setAttribute(e, n + ''), n)
											: r && 'get' in r && null !== (i = r.get(t, e))
											? i
											: null == (i = f.find.attr(t, e))
											? void 0
											: i);
						},
						attrHooks: {
							type: {
								set: function (t, e) {
									if (
										!h.radioValue &&
										'radio' === e &&
										f.nodeName(t, 'input')
									) {
										var n = t.value;
										return t.setAttribute('type', e), n && (t.value = n), e;
									}
								},
							},
						},
						removeAttr: function (t, e) {
							var n,
								i,
								r = 0,
								o = e && e.match(I);
							if (o && 1 === t.nodeType)
								for (; (n = o[r++]); )
									(i = f.propFix[n] || n),
										f.expr.match.bool.test(n) && (t[i] = !1),
										t.removeAttribute(n);
						},
					}),
					(Zt = {
						set: function (t, e, n) {
							return !1 === e ? f.removeAttr(t, n) : t.setAttribute(n, n), n;
						},
					}),
					f.each(f.expr.match.bool.source.match(/\w+/g), function (t, e) {
						var n = te[e] || f.find.attr;
						te[e] = function (t, e, i) {
							var r, o;
							return (
								i ||
									((o = te[e]),
									(te[e] = r),
									(r = null != n(t, e, i) ? e.toLowerCase() : null),
									(te[e] = o)),
								r
							);
						};
					});
				var ee = /^(?:input|select|textarea|button)$/i,
					ne = /^(?:a|area)$/i;
				f.fn.extend({
					prop: function (t, e) {
						return B(this, f.prop, t, e, arguments.length > 1);
					},
					removeProp: function (t) {
						return this.each(function () {
							delete this[f.propFix[t] || t];
						});
					},
				}),
					f.extend({
						prop: function (t, e, n) {
							var i,
								r,
								o = t.nodeType;
							if (3 !== o && 8 !== o && 2 !== o)
								return (
									(1 === o && f.isXMLDoc(t)) ||
										((e = f.propFix[e] || e), (r = f.propHooks[e])),
									void 0 !== n
										? r && 'set' in r && void 0 !== (i = r.set(t, n, e))
											? i
											: (t[e] = n)
										: r && 'get' in r && null !== (i = r.get(t, e))
										? i
										: t[e]
								);
						},
						propHooks: {
							tabIndex: {
								get: function (t) {
									var e = f.find.attr(t, 'tabindex');
									return e
										? parseInt(e, 10)
										: ee.test(t.nodeName) || (ne.test(t.nodeName) && t.href)
										? 0
										: -1;
								},
							},
						},
						propFix: { for: 'htmlFor', class: 'className' },
					}),
					h.optSelected ||
						(f.propHooks.selected = {
							get: function (t) {
								var e = t.parentNode;
								return e && e.parentNode && e.parentNode.selectedIndex, null;
							},
							set: function (t) {
								var e = t.parentNode;
								e &&
									(e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
							},
						}),
					f.each(
						[
							'tabIndex',
							'readOnly',
							'maxLength',
							'cellSpacing',
							'cellPadding',
							'rowSpan',
							'colSpan',
							'useMap',
							'frameBorder',
							'contentEditable',
						],
						function () {
							f.propFix[this.toLowerCase()] = this;
						}
					);
				var ie = /[\t\r\n\f]/g;
				function re(t) {
					return (t.getAttribute && t.getAttribute('class')) || '';
				}
				f.fn.extend({
					addClass: function (t) {
						var e,
							n,
							i,
							r,
							o,
							a,
							s,
							l = 0;
						if (f.isFunction(t))
							return this.each(function (e) {
								f(this).addClass(t.call(this, e, re(this)));
							});
						if ('string' == typeof t && t)
							for (e = t.match(I) || []; (n = this[l++]); )
								if (
									((r = re(n)),
									(i = 1 === n.nodeType && (' ' + r + ' ').replace(ie, ' ')))
								) {
									for (a = 0; (o = e[a++]); )
										i.indexOf(' ' + o + ' ') < 0 && (i += o + ' ');
									r !== (s = f.trim(i)) && n.setAttribute('class', s);
								}
						return this;
					},
					removeClass: function (t) {
						var e,
							n,
							i,
							r,
							o,
							a,
							s,
							l = 0;
						if (f.isFunction(t))
							return this.each(function (e) {
								f(this).removeClass(t.call(this, e, re(this)));
							});
						if (!arguments.length) return this.attr('class', '');
						if ('string' == typeof t && t)
							for (e = t.match(I) || []; (n = this[l++]); )
								if (
									((r = re(n)),
									(i = 1 === n.nodeType && (' ' + r + ' ').replace(ie, ' ')))
								) {
									for (a = 0; (o = e[a++]); )
										for (; i.indexOf(' ' + o + ' ') > -1; )
											i = i.replace(' ' + o + ' ', ' ');
									r !== (s = f.trim(i)) && n.setAttribute('class', s);
								}
						return this;
					},
					toggleClass: function (t, e) {
						var n = typeof t;
						return 'boolean' == typeof e && 'string' === n
							? e
								? this.addClass(t)
								: this.removeClass(t)
							: f.isFunction(t)
							? this.each(function (n) {
									f(this).toggleClass(t.call(this, n, re(this), e), e);
							  })
							: this.each(function () {
									var e, i, r, o;
									if ('string' === n)
										for (
											i = 0, r = f(this), o = t.match(I) || [];
											(e = o[i++]);

										)
											r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
									else
										(void 0 !== t && 'boolean' !== n) ||
											((e = re(this)) && K.set(this, '__className__', e),
											this.setAttribute &&
												this.setAttribute(
													'class',
													e || !1 === t
														? ''
														: K.get(this, '__className__') || ''
												));
							  });
					},
					hasClass: function (t) {
						var e,
							n,
							i = 0;
						for (e = ' ' + t + ' '; (n = this[i++]); )
							if (
								1 === n.nodeType &&
								(' ' + re(n) + ' ').replace(ie, ' ').indexOf(e) > -1
							)
								return !0;
						return !1;
					},
				});
				var oe = /\r/g,
					ae = /[\x20\t\r\n\f]+/g;
				f.fn.extend({
					val: function (t) {
						var e,
							n,
							i,
							r = this[0];
						return arguments.length
							? ((i = f.isFunction(t)),
							  this.each(function (n) {
									var r;
									1 === this.nodeType &&
										(null == (r = i ? t.call(this, n, f(this).val()) : t)
											? (r = '')
											: 'number' == typeof r
											? (r += '')
											: f.isArray(r) &&
											  (r = f.map(r, function (t) {
													return null == t ? '' : t + '';
											  })),
										((e =
											f.valHooks[this.type] ||
											f.valHooks[this.nodeName.toLowerCase()]) &&
											'set' in e &&
											void 0 !== e.set(this, r, 'value')) ||
											(this.value = r));
							  }))
							: r
							? (e =
									f.valHooks[r.type] || f.valHooks[r.nodeName.toLowerCase()]) &&
							  'get' in e &&
							  void 0 !== (n = e.get(r, 'value'))
								? n
								: 'string' == typeof (n = r.value)
								? n.replace(oe, '')
								: null == n
								? ''
								: n
							: void 0;
					},
				}),
					f.extend({
						valHooks: {
							option: {
								get: function (t) {
									var e = f.find.attr(t, 'value');
									return null != e ? e : f.trim(f.text(t)).replace(ae, ' ');
								},
							},
							select: {
								get: function (t) {
									for (
										var e,
											n,
											i = t.options,
											r = t.selectedIndex,
											o = 'select-one' === t.type || r < 0,
											a = o ? null : [],
											s = o ? r + 1 : i.length,
											l = r < 0 ? s : o ? r : 0;
										l < s;
										l++
									)
										if (
											((n = i[l]).selected || l === r) &&
											(h.optDisabled
												? !n.disabled
												: null === n.getAttribute('disabled')) &&
											(!n.parentNode.disabled ||
												!f.nodeName(n.parentNode, 'optgroup'))
										) {
											if (((e = f(n).val()), o)) return e;
											a.push(e);
										}
									return a;
								},
								set: function (t, e) {
									for (
										var n, i, r = t.options, o = f.makeArray(e), a = r.length;
										a--;

									)
										((i = r[a]).selected =
											f.inArray(f.valHooks.option.get(i), o) > -1) && (n = !0);
									return n || (t.selectedIndex = -1), o;
								},
							},
						},
					}),
					f.each(['radio', 'checkbox'], function () {
						(f.valHooks[this] = {
							set: function (t, e) {
								if (f.isArray(e))
									return (t.checked = f.inArray(f(t).val(), e) > -1);
							},
						}),
							h.checkOn ||
								(f.valHooks[this].get = function (t) {
									return null === t.getAttribute('value') ? 'on' : t.value;
								});
					});
				var se = /^(?:focusinfocus|focusoutblur)$/;
				f.extend(f.event, {
					trigger: function (t, e, i, r) {
						var o,
							s,
							l,
							u,
							c,
							_,
							d,
							h = [i || a],
							g = p.call(t, 'type') ? t.type : t,
							m = p.call(t, 'namespace') ? t.namespace.split('.') : [];
						if (
							((s = l = i = i || a),
							3 !== i.nodeType &&
								8 !== i.nodeType &&
								!se.test(g + f.event.triggered) &&
								(g.indexOf('.') > -1 &&
									((m = g.split('.')), (g = m.shift()), m.sort()),
								(c = g.indexOf(':') < 0 && 'on' + g),
								((t = t[f.expando]
									? t
									: new f.Event(g, 'object' == typeof t && t)).isTrigger = r
									? 2
									: 3),
								(t.namespace = m.join('.')),
								(t.rnamespace = t.namespace
									? new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)')
									: null),
								(t.result = void 0),
								t.target || (t.target = i),
								(e = null == e ? [t] : f.makeArray(e, [t])),
								(d = f.event.special[g] || {}),
								r || !d.trigger || !1 !== d.trigger.apply(i, e)))
						) {
							if (!r && !d.noBubble && !f.isWindow(i)) {
								for (
									u = d.delegateType || g, se.test(u + g) || (s = s.parentNode);
									s;
									s = s.parentNode
								)
									h.push(s), (l = s);
								l === (i.ownerDocument || a) &&
									h.push(l.defaultView || l.parentWindow || n);
							}
							for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
								(t.type = o > 1 ? u : d.bindType || g),
									(_ =
										(K.get(s, 'events') || {})[t.type] && K.get(s, 'handle')) &&
										_.apply(s, e),
									(_ = c && s[c]) &&
										_.apply &&
										W(s) &&
										((t.result = _.apply(s, e)),
										!1 === t.result && t.preventDefault());
							return (
								(t.type = g),
								r ||
									t.isDefaultPrevented() ||
									(d._default && !1 !== d._default.apply(h.pop(), e)) ||
									!W(i) ||
									(c &&
										f.isFunction(i[g]) &&
										!f.isWindow(i) &&
										((l = i[c]) && (i[c] = null),
										(f.event.triggered = g),
										i[g](),
										(f.event.triggered = void 0),
										l && (i[c] = l))),
								t.result
							);
						}
					},
					simulate: function (t, e, n) {
						var i = f.extend(new f.Event(), n, { type: t, isSimulated: !0 });
						f.event.trigger(i, null, e);
					},
				}),
					f.fn.extend({
						trigger: function (t, e) {
							return this.each(function () {
								f.event.trigger(t, e, this);
							});
						},
						triggerHandler: function (t, e) {
							var n = this[0];
							if (n) return f.event.trigger(t, e, n, !0);
						},
					}),
					f.each(
						'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
							' '
						),
						function (t, e) {
							f.fn[e] = function (t, n) {
								return arguments.length > 0
									? this.on(e, null, t, n)
									: this.trigger(e);
							};
						}
					),
					f.fn.extend({
						hover: function (t, e) {
							return this.mouseenter(t).mouseleave(e || t);
						},
					}),
					(h.focusin = 'onfocusin' in n),
					h.focusin ||
						f.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
							var n = function (t) {
								f.event.simulate(e, t.target, f.event.fix(t));
							};
							f.event.special[e] = {
								setup: function () {
									var i = this.ownerDocument || this,
										r = K.access(i, e);
									r || i.addEventListener(t, n, !0),
										K.access(i, e, (r || 0) + 1);
								},
								teardown: function () {
									var i = this.ownerDocument || this,
										r = K.access(i, e) - 1;
									r
										? K.access(i, e, r)
										: (i.removeEventListener(t, n, !0), K.remove(i, e));
								},
							};
						});
				var le = n.location,
					ue = f.now(),
					ce = /\?/;
				(f.parseJSON = function (t) {
					return JSON.parse(t + '');
				}),
					(f.parseXML = function (t) {
						var e;
						if (!t || 'string' != typeof t) return null;
						try {
							e = new n.DOMParser().parseFromString(t, 'text/xml');
						} catch (t) {
							e = void 0;
						}
						return (
							(e && !e.getElementsByTagName('parsererror').length) ||
								f.error('Invalid XML: ' + t),
							e
						);
					});
				var _e = /#.*$/,
					de = /([?&])_=[^&]*/,
					pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
					he = /^(?:GET|HEAD)$/,
					fe = /^\/\//,
					ge = {},
					me = {},
					ye = '*/'.concat('*'),
					Ee = a.createElement('a');
				function ve(t) {
					return function (e, n) {
						'string' != typeof e && ((n = e), (e = '*'));
						var i,
							r = 0,
							o = e.toLowerCase().match(I) || [];
						if (f.isFunction(n))
							for (; (i = o[r++]); )
								'+' === i[0]
									? ((i = i.slice(1) || '*'), (t[i] = t[i] || []).unshift(n))
									: (t[i] = t[i] || []).push(n);
					};
				}
				function Oe(t, e, n, i) {
					var r = {},
						o = t === me;
					function a(s) {
						var l;
						return (
							(r[s] = !0),
							f.each(t[s] || [], function (t, s) {
								var u = s(e, n, i);
								return 'string' != typeof u || o || r[u]
									? o
										? !(l = u)
										: void 0
									: (e.dataTypes.unshift(u), a(u), !1);
							}),
							l
						);
					}
					return a(e.dataTypes[0]) || (!r['*'] && a('*'));
				}
				function De(t, e) {
					var n,
						i,
						r = f.ajaxSettings.flatOptions || {};
					for (n in e)
						void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
					return i && f.extend(!0, t, i), t;
				}
				(Ee.href = le.href),
					f.extend({
						active: 0,
						lastModified: {},
						etag: {},
						ajaxSettings: {
							url: le.href,
							type: 'GET',
							isLocal:
								/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
									le.protocol
								),
							global: !0,
							processData: !0,
							async: !0,
							contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
							accepts: {
								'*': ye,
								text: 'text/plain',
								html: 'text/html',
								xml: 'application/xml, text/xml',
								json: 'application/json, text/javascript',
							},
							contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
							responseFields: {
								xml: 'responseXML',
								text: 'responseText',
								json: 'responseJSON',
							},
							converters: {
								'* text': String,
								'text html': !0,
								'text json': f.parseJSON,
								'text xml': f.parseXML,
							},
							flatOptions: { url: !0, context: !0 },
						},
						ajaxSetup: function (t, e) {
							return e ? De(De(t, f.ajaxSettings), e) : De(f.ajaxSettings, t);
						},
						ajaxPrefilter: ve(ge),
						ajaxTransport: ve(me),
						ajax: function (t, e) {
							'object' == typeof t && ((e = t), (t = void 0)), (e = e || {});
							var i,
								r,
								o,
								s,
								l,
								u,
								c,
								_,
								d = f.ajaxSetup({}, e),
								p = d.context || d,
								h = d.context && (p.nodeType || p.jquery) ? f(p) : f.event,
								g = f.Deferred(),
								m = f.Callbacks('once memory'),
								y = d.statusCode || {},
								E = {},
								v = {},
								O = 0,
								D = 'canceled',
								P = {
									readyState: 0,
									getResponseHeader: function (t) {
										var e;
										if (2 === O) {
											if (!s)
												for (s = {}; (e = pe.exec(o)); )
													s[e[1].toLowerCase()] = e[2];
											e = s[t.toLowerCase()];
										}
										return null == e ? null : e;
									},
									getAllResponseHeaders: function () {
										return 2 === O ? o : null;
									},
									setRequestHeader: function (t, e) {
										var n = t.toLowerCase();
										return O || ((t = v[n] = v[n] || t), (E[t] = e)), this;
									},
									overrideMimeType: function (t) {
										return O || (d.mimeType = t), this;
									},
									statusCode: function (t) {
										var e;
										if (t)
											if (O < 2) for (e in t) y[e] = [y[e], t[e]];
											else P.always(t[P.status]);
										return this;
									},
									abort: function (t) {
										var e = t || D;
										return i && i.abort(e), M(0, e), this;
									},
								};
							if (
								((g.promise(P).complete = m.add),
								(P.success = P.done),
								(P.error = P.fail),
								(d.url = ((t || d.url || le.href) + '')
									.replace(_e, '')
									.replace(fe, le.protocol + '//')),
								(d.type = e.method || e.type || d.method || d.type),
								(d.dataTypes = f
									.trim(d.dataType || '*')
									.toLowerCase()
									.match(I) || ['']),
								null == d.crossDomain)
							) {
								u = a.createElement('a');
								try {
									(u.href = d.url),
										(u.href = u.href),
										(d.crossDomain =
											Ee.protocol + '//' + Ee.host !=
											u.protocol + '//' + u.host);
								} catch (t) {
									d.crossDomain = !0;
								}
							}
							if (
								(d.data &&
									d.processData &&
									'string' != typeof d.data &&
									(d.data = f.param(d.data, d.traditional)),
								Oe(ge, d, e, P),
								2 === O)
							)
								return P;
							for (_ in ((c = f.event && d.global) &&
								0 == f.active++ &&
								f.event.trigger('ajaxStart'),
							(d.type = d.type.toUpperCase()),
							(d.hasContent = !he.test(d.type)),
							(r = d.url),
							d.hasContent ||
								(d.data &&
									((r = d.url += (ce.test(r) ? '&' : '?') + d.data),
									delete d.data),
								!1 === d.cache &&
									(d.url = de.test(r)
										? r.replace(de, '$1_=' + ue++)
										: r + (ce.test(r) ? '&' : '?') + '_=' + ue++)),
							d.ifModified &&
								(f.lastModified[r] &&
									P.setRequestHeader('If-Modified-Since', f.lastModified[r]),
								f.etag[r] && P.setRequestHeader('If-None-Match', f.etag[r])),
							((d.data && d.hasContent && !1 !== d.contentType) ||
								e.contentType) &&
								P.setRequestHeader('Content-Type', d.contentType),
							P.setRequestHeader(
								'Accept',
								d.dataTypes[0] && d.accepts[d.dataTypes[0]]
									? d.accepts[d.dataTypes[0]] +
											('*' !== d.dataTypes[0] ? ', ' + ye + '; q=0.01' : '')
									: d.accepts['*']
							),
							d.headers))
								P.setRequestHeader(_, d.headers[_]);
							if (
								d.beforeSend &&
								(!1 === d.beforeSend.call(p, P, d) || 2 === O)
							)
								return P.abort();
							for (_ in ((D = 'abort'), { success: 1, error: 1, complete: 1 }))
								P[_](d[_]);
							if ((i = Oe(me, d, e, P))) {
								if (
									((P.readyState = 1),
									c && h.trigger('ajaxSend', [P, d]),
									2 === O)
								)
									return P;
								d.async &&
									d.timeout > 0 &&
									(l = n.setTimeout(function () {
										P.abort('timeout');
									}, d.timeout));
								try {
									(O = 1), i.send(E, M);
								} catch (t) {
									if (!(O < 2)) throw t;
									M(-1, t);
								}
							} else M(-1, 'No Transport');
							function M(t, e, a, s) {
								var u,
									_,
									E,
									v,
									D,
									M = e;
								2 !== O &&
									((O = 2),
									l && n.clearTimeout(l),
									(i = void 0),
									(o = s || ''),
									(P.readyState = t > 0 ? 4 : 0),
									(u = (t >= 200 && t < 300) || 304 === t),
									a &&
										(v = (function (t, e, n) {
											for (
												var i, r, o, a, s = t.contents, l = t.dataTypes;
												'*' === l[0];

											)
												l.shift(),
													void 0 === i &&
														(i =
															t.mimeType ||
															e.getResponseHeader('Content-Type'));
											if (i)
												for (r in s)
													if (s[r] && s[r].test(i)) {
														l.unshift(r);
														break;
													}
											if (l[0] in n) o = l[0];
											else {
												for (r in n) {
													if (!l[0] || t.converters[r + ' ' + l[0]]) {
														o = r;
														break;
													}
													a || (a = r);
												}
												o = o || a;
											}
											if (o) return o !== l[0] && l.unshift(o), n[o];
										})(d, P, a)),
									(v = (function (t, e, n, i) {
										var r,
											o,
											a,
											s,
											l,
											u = {},
											c = t.dataTypes.slice();
										if (c[1])
											for (a in t.converters)
												u[a.toLowerCase()] = t.converters[a];
										for (o = c.shift(); o; )
											if (
												(t.responseFields[o] && (n[t.responseFields[o]] = e),
												!l &&
													i &&
													t.dataFilter &&
													(e = t.dataFilter(e, t.dataType)),
												(l = o),
												(o = c.shift()))
											)
												if ('*' === o) o = l;
												else if ('*' !== l && l !== o) {
													if (!(a = u[l + ' ' + o] || u['* ' + o]))
														for (r in u)
															if (
																(s = r.split(' '))[1] === o &&
																(a = u[l + ' ' + s[0]] || u['* ' + s[0]])
															) {
																!0 === a
																	? (a = u[r])
																	: !0 !== u[r] &&
																	  ((o = s[0]), c.unshift(s[1]));
																break;
															}
													if (!0 !== a)
														if (a && t.throws) e = a(e);
														else
															try {
																e = a(e);
															} catch (t) {
																return {
																	state: 'parsererror',
																	error: a
																		? t
																		: 'No conversion from ' + l + ' to ' + o,
																};
															}
												}
										return { state: 'success', data: e };
									})(d, v, P, u)),
									u
										? (d.ifModified &&
												((D = P.getResponseHeader('Last-Modified')) &&
													(f.lastModified[r] = D),
												(D = P.getResponseHeader('etag')) && (f.etag[r] = D)),
										  204 === t || 'HEAD' === d.type
												? (M = 'nocontent')
												: 304 === t
												? (M = 'notmodified')
												: ((M = v.state), (_ = v.data), (u = !(E = v.error))))
										: ((E = M), (!t && M) || ((M = 'error'), t < 0 && (t = 0))),
									(P.status = t),
									(P.statusText = (e || M) + ''),
									u ? g.resolveWith(p, [_, M, P]) : g.rejectWith(p, [P, M, E]),
									P.statusCode(y),
									(y = void 0),
									c &&
										h.trigger(u ? 'ajaxSuccess' : 'ajaxError', [
											P,
											d,
											u ? _ : E,
										]),
									m.fireWith(p, [P, M]),
									c &&
										(h.trigger('ajaxComplete', [P, d]),
										--f.active || f.event.trigger('ajaxStop')));
							}
							return P;
						},
						getJSON: function (t, e, n) {
							return f.get(t, e, n, 'json');
						},
						getScript: function (t, e) {
							return f.get(t, void 0, e, 'script');
						},
					}),
					f.each(['get', 'post'], function (t, e) {
						f[e] = function (t, n, i, r) {
							return (
								f.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
								f.ajax(
									f.extend(
										{ url: t, type: e, dataType: r, data: n, success: i },
										f.isPlainObject(t) && t
									)
								)
							);
						};
					}),
					(f._evalUrl = function (t) {
						return f.ajax({
							url: t,
							type: 'GET',
							dataType: 'script',
							async: !1,
							global: !1,
							throws: !0,
						});
					}),
					f.fn.extend({
						wrapAll: function (t) {
							var e;
							return f.isFunction(t)
								? this.each(function (e) {
										f(this).wrapAll(t.call(this, e));
								  })
								: (this[0] &&
										((e = f(t, this[0].ownerDocument).eq(0).clone(!0)),
										this[0].parentNode && e.insertBefore(this[0]),
										e
											.map(function () {
												for (var t = this; t.firstElementChild; )
													t = t.firstElementChild;
												return t;
											})
											.append(this)),
								  this);
						},
						wrapInner: function (t) {
							return f.isFunction(t)
								? this.each(function (e) {
										f(this).wrapInner(t.call(this, e));
								  })
								: this.each(function () {
										var e = f(this),
											n = e.contents();
										n.length ? n.wrapAll(t) : e.append(t);
								  });
						},
						wrap: function (t) {
							var e = f.isFunction(t);
							return this.each(function (n) {
								f(this).wrapAll(e ? t.call(this, n) : t);
							});
						},
						unwrap: function () {
							return this.parent()
								.each(function () {
									f.nodeName(this, 'body') ||
										f(this).replaceWith(this.childNodes);
								})
								.end();
						},
					}),
					(f.expr.filters.hidden = function (t) {
						return !f.expr.filters.visible(t);
					}),
					(f.expr.filters.visible = function (t) {
						return (
							t.offsetWidth > 0 ||
							t.offsetHeight > 0 ||
							t.getClientRects().length > 0
						);
					});
				var Pe = /%20/g,
					Me = /\[\]$/,
					be = /\r?\n/g,
					we = /^(?:submit|button|image|reset|file)$/i,
					Ce = /^(?:input|select|textarea|keygen)/i;
				function Te(t, e, n, i) {
					var r;
					if (f.isArray(e))
						f.each(e, function (e, r) {
							n || Me.test(t)
								? i(t, r)
								: Te(
										t +
											'[' +
											('object' == typeof r && null != r ? e : '') +
											']',
										r,
										n,
										i
								  );
						});
					else if (n || 'object' !== f.type(e)) i(t, e);
					else for (r in e) Te(t + '[' + r + ']', e[r], n, i);
				}
				(f.param = function (t, e) {
					var n,
						i = [],
						r = function (t, e) {
							(e = f.isFunction(e) ? e() : null == e ? '' : e),
								(i[i.length] =
									encodeURIComponent(t) + '=' + encodeURIComponent(e));
						};
					if (
						(void 0 === e && (e = f.ajaxSettings && f.ajaxSettings.traditional),
						f.isArray(t) || (t.jquery && !f.isPlainObject(t)))
					)
						f.each(t, function () {
							r(this.name, this.value);
						});
					else for (n in t) Te(n, t[n], e, r);
					return i.join('&').replace(Pe, '+');
				}),
					f.fn.extend({
						serialize: function () {
							return f.param(this.serializeArray());
						},
						serializeArray: function () {
							return this.map(function () {
								var t = f.prop(this, 'elements');
								return t ? f.makeArray(t) : this;
							})
								.filter(function () {
									var t = this.type;
									return (
										this.name &&
										!f(this).is(':disabled') &&
										Ce.test(this.nodeName) &&
										!we.test(t) &&
										(this.checked || !Q.test(t))
									);
								})
								.map(function (t, e) {
									var n = f(this).val();
									return null == n
										? null
										: f.isArray(n)
										? f.map(n, function (t) {
												return { name: e.name, value: t.replace(be, '\r\n') };
										  })
										: { name: e.name, value: n.replace(be, '\r\n') };
								})
								.get();
						},
					}),
					(f.ajaxSettings.xhr = function () {
						try {
							return new n.XMLHttpRequest();
						} catch (t) {}
					});
				var Ae = { 0: 200, 1223: 204 },
					xe = f.ajaxSettings.xhr();
				(h.cors = !!xe && 'withCredentials' in xe),
					(h.ajax = xe = !!xe),
					f.ajaxTransport(function (t) {
						var e, i;
						if (h.cors || (xe && !t.crossDomain))
							return {
								send: function (r, o) {
									var a,
										s = t.xhr();
									if (
										(s.open(t.type, t.url, t.async, t.username, t.password),
										t.xhrFields)
									)
										for (a in t.xhrFields) s[a] = t.xhrFields[a];
									for (a in (t.mimeType &&
										s.overrideMimeType &&
										s.overrideMimeType(t.mimeType),
									t.crossDomain ||
										r['X-Requested-With'] ||
										(r['X-Requested-With'] = 'XMLHttpRequest'),
									r))
										s.setRequestHeader(a, r[a]);
									(e = function (t) {
										return function () {
											e &&
												((e =
													i =
													s.onload =
													s.onerror =
													s.onabort =
													s.onreadystatechange =
														null),
												'abort' === t
													? s.abort()
													: 'error' === t
													? 'number' != typeof s.status
														? o(0, 'error')
														: o(s.status, s.statusText)
													: o(
															Ae[s.status] || s.status,
															s.statusText,
															'text' !== (s.responseType || 'text') ||
																'string' != typeof s.responseText
																? { binary: s.response }
																: { text: s.responseText },
															s.getAllResponseHeaders()
													  ));
										};
									}),
										(s.onload = e()),
										(i = s.onerror = e('error')),
										void 0 !== s.onabort
											? (s.onabort = i)
											: (s.onreadystatechange = function () {
													4 === s.readyState &&
														n.setTimeout(function () {
															e && i();
														});
											  }),
										(e = e('abort'));
									try {
										s.send((t.hasContent && t.data) || null);
									} catch (t) {
										if (e) throw t;
									}
								},
								abort: function () {
									e && e();
								},
							};
					}),
					f.ajaxSetup({
						accepts: {
							script:
								'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
						},
						contents: { script: /\b(?:java|ecma)script\b/ },
						converters: {
							'text script': function (t) {
								return f.globalEval(t), t;
							},
						},
					}),
					f.ajaxPrefilter('script', function (t) {
						void 0 === t.cache && (t.cache = !1),
							t.crossDomain && (t.type = 'GET');
					}),
					f.ajaxTransport('script', function (t) {
						var e, n;
						if (t.crossDomain)
							return {
								send: function (i, r) {
									(e = f('<script>')
										.prop({ charset: t.scriptCharset, src: t.url })
										.on(
											'load error',
											(n = function (t) {
												e.remove(),
													(n = null),
													t && r('error' === t.type ? 404 : 200, t.type);
											})
										)),
										a.head.appendChild(e[0]);
								},
								abort: function () {
									n && n();
								},
							};
					});
				var qe = [],
					je = /(=)\?(?=&|$)|\?\?/;
				f.ajaxSetup({
					jsonp: 'callback',
					jsonpCallback: function () {
						var t = qe.pop() || f.expando + '_' + ue++;
						return (this[t] = !0), t;
					},
				}),
					f.ajaxPrefilter('json jsonp', function (t, e, i) {
						var r,
							o,
							a,
							s =
								!1 !== t.jsonp &&
								(je.test(t.url)
									? 'url'
									: 'string' == typeof t.data &&
									  0 ===
											(t.contentType || '').indexOf(
												'application/x-www-form-urlencoded'
											) &&
									  je.test(t.data) &&
									  'data');
						if (s || 'jsonp' === t.dataTypes[0])
							return (
								(r = t.jsonpCallback =
									f.isFunction(t.jsonpCallback)
										? t.jsonpCallback()
										: t.jsonpCallback),
								s
									? (t[s] = t[s].replace(je, '$1' + r))
									: !1 !== t.jsonp &&
									  (t.url += (ce.test(t.url) ? '&' : '?') + t.jsonp + '=' + r),
								(t.converters['script json'] = function () {
									return a || f.error(r + ' was not called'), a[0];
								}),
								(t.dataTypes[0] = 'json'),
								(o = n[r]),
								(n[r] = function () {
									a = arguments;
								}),
								i.always(function () {
									void 0 === o ? f(n).removeProp(r) : (n[r] = o),
										t[r] && ((t.jsonpCallback = e.jsonpCallback), qe.push(r)),
										a && f.isFunction(o) && o(a[0]),
										(a = o = void 0);
								}),
								'script'
							);
					}),
					(f.parseHTML = function (t, e, n) {
						if (!t || 'string' != typeof t) return null;
						'boolean' == typeof e && ((n = e), (e = !1)), (e = e || a);
						var i = b.exec(t),
							r = !n && [];
						return i
							? [e.createElement(i[1])]
							: ((i = rt([t], e, r)),
							  r && r.length && f(r).remove(),
							  f.merge([], i.childNodes));
					});
				var Le = f.fn.load;
				function Ie(t) {
					return f.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
				}
				(f.fn.load = function (t, e, n) {
					if ('string' != typeof t && Le) return Le.apply(this, arguments);
					var i,
						r,
						o,
						a = this,
						s = t.indexOf(' ');
					return (
						s > -1 && ((i = f.trim(t.slice(s))), (t = t.slice(0, s))),
						f.isFunction(e)
							? ((n = e), (e = void 0))
							: e && 'object' == typeof e && (r = 'POST'),
						a.length > 0 &&
							f
								.ajax({ url: t, type: r || 'GET', dataType: 'html', data: e })
								.done(function (t) {
									(o = arguments),
										a.html(i ? f('<div>').append(f.parseHTML(t)).find(i) : t);
								})
								.always(
									n &&
										function (t, e) {
											a.each(function () {
												n.apply(this, o || [t.responseText, e, t]);
											});
										}
								),
						this
					);
				}),
					f.each(
						[
							'ajaxStart',
							'ajaxStop',
							'ajaxComplete',
							'ajaxError',
							'ajaxSuccess',
							'ajaxSend',
						],
						function (t, e) {
							f.fn[e] = function (t) {
								return this.on(e, t);
							};
						}
					),
					(f.expr.filters.animated = function (t) {
						return f.grep(f.timers, function (e) {
							return t === e.elem;
						}).length;
					}),
					(f.offset = {
						setOffset: function (t, e, n) {
							var i,
								r,
								o,
								a,
								s,
								l,
								u = f.css(t, 'position'),
								c = f(t),
								_ = {};
							'static' === u && (t.style.position = 'relative'),
								(s = c.offset()),
								(o = f.css(t, 'top')),
								(l = f.css(t, 'left')),
								('absolute' === u || 'fixed' === u) &&
								(o + l).indexOf('auto') > -1
									? ((a = (i = c.position()).top), (r = i.left))
									: ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
								f.isFunction(e) && (e = e.call(t, n, f.extend({}, s))),
								null != e.top && (_.top = e.top - s.top + a),
								null != e.left && (_.left = e.left - s.left + r),
								'using' in e ? e.using.call(t, _) : c.css(_);
						},
					}),
					f.fn.extend({
						offset: function (t) {
							if (arguments.length)
								return void 0 === t
									? this
									: this.each(function (e) {
											f.offset.setOffset(this, t, e);
									  });
							var e,
								n,
								i = this[0],
								r = { top: 0, left: 0 },
								o = i && i.ownerDocument;
							return o
								? ((e = o.documentElement),
								  f.contains(e, i)
										? ((r = i.getBoundingClientRect()),
										  (n = Ie(o)),
										  {
												top: r.top + n.pageYOffset - e.clientTop,
												left: r.left + n.pageXOffset - e.clientLeft,
										  })
										: r)
								: void 0;
						},
						position: function () {
							if (this[0]) {
								var t,
									e,
									n = this[0],
									i = { top: 0, left: 0 };
								return (
									'fixed' === f.css(n, 'position')
										? (e = n.getBoundingClientRect())
										: ((t = this.offsetParent()),
										  (e = this.offset()),
										  f.nodeName(t[0], 'html') || (i = t.offset()),
										  (i.top += f.css(t[0], 'borderTopWidth', !0)),
										  (i.left += f.css(t[0], 'borderLeftWidth', !0))),
									{
										top: e.top - i.top - f.css(n, 'marginTop', !0),
										left: e.left - i.left - f.css(n, 'marginLeft', !0),
									}
								);
							}
						},
						offsetParent: function () {
							return this.map(function () {
								for (
									var t = this.offsetParent;
									t && 'static' === f.css(t, 'position');

								)
									t = t.offsetParent;
								return t || qt;
							});
						},
					}),
					f.each(
						{ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
						function (t, e) {
							var n = 'pageYOffset' === e;
							f.fn[t] = function (i) {
								return B(
									this,
									function (t, i, r) {
										var o = Ie(t);
										if (void 0 === r) return o ? o[e] : t[i];
										o
											? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
											: (t[i] = r);
									},
									t,
									i,
									arguments.length
								);
							};
						}
					),
					f.each(['top', 'left'], function (t, e) {
						f.cssHooks[e] = Lt(h.pixelPosition, function (t, n) {
							if (n)
								return (
									(n = jt(t, e)), Tt.test(n) ? f(t).position()[e] + 'px' : n
								);
						});
					}),
					f.each({ Height: 'height', Width: 'width' }, function (t, e) {
						f.each(
							{ padding: 'inner' + t, content: e, '': 'outer' + t },
							function (n, i) {
								f.fn[i] = function (i, r) {
									var o = arguments.length && (n || 'boolean' != typeof i),
										a = n || (!0 === i || !0 === r ? 'margin' : 'border');
									return B(
										this,
										function (e, n, i) {
											var r;
											return f.isWindow(e)
												? e.document.documentElement['client' + t]
												: 9 === e.nodeType
												? ((r = e.documentElement),
												  Math.max(
														e.body['scroll' + t],
														r['scroll' + t],
														e.body['offset' + t],
														r['offset' + t],
														r['client' + t]
												  ))
												: void 0 === i
												? f.css(e, n, a)
												: f.style(e, n, i, a);
										},
										e,
										o ? i : void 0,
										o,
										null
									);
								};
							}
						);
					}),
					f.fn.extend({
						bind: function (t, e, n) {
							return this.on(t, null, e, n);
						},
						unbind: function (t, e) {
							return this.off(t, null, e);
						},
						delegate: function (t, e, n, i) {
							return this.on(e, t, n, i);
						},
						undelegate: function (t, e, n) {
							return 1 === arguments.length
								? this.off(t, '**')
								: this.off(e, t || '**', n);
						},
						size: function () {
							return this.length;
						},
					}),
					(f.fn.andSelf = f.fn.addBack),
					void 0 ===
						(i = function () {
							return f;
						}.apply(e, [])) || (t.exports = i);
				var Re = n.jQuery,
					Be = n.$;
				return (
					(f.noConflict = function (t) {
						return (
							n.$ === f && (n.$ = Be), t && n.jQuery === f && (n.jQuery = Re), f
						);
					}),
					r || (n.jQuery = n.$ = f),
					f
				);
			}),
			'object' == typeof t.exports
				? (t.exports = r.document
						? o(r, !0)
						: function (t) {
								if (!t.document)
									throw new Error('jQuery requires a window with a document');
								return o(t);
						  })
				: o(r);
	},
	167: function (t, e, n) {
		t.exports = n(168);
	},
	168: function (module, __webpack_exports__, __webpack_require__) {
		'use strict';
		__webpack_require__.r(__webpack_exports__);
		var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
			jquery__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
				jquery__WEBPACK_IMPORTED_MODULE_0__
			),
			_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94),
			t,
			e,
			n;
		function _typeof(t) {
			return (_typeof =
				'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
					? function (t) {
							return typeof t;
					  }
					: function (t) {
							return t &&
								'function' == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? 'symbol'
								: typeof t;
					  })(t);
		}
		(window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a),
			(window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a),
			(window.GloboSwatch = window.GloboSwatch || {}),
			(GloboSwatch = function (t) {
				(this.page = t.page),
					(this.domain = t.shop.domain),
					(this.name = t.shop.name),
					(this.product = t.product),
					(this.curVariant = t.curVariant),
					(this.enable_collection_page = t.settings.enable_collection_page),
					(this.enable_product_page = t.settings.enable_product_page),
					(this.enable_mandatory = t.settings.enable_mandatory),
					(this.optionsApp = t.options),
					(this.style_collection_page_swatch =
						t.collection_page.customize_swatch),
					(this.style_collection_page_button =
						t.collection_page.customize_button),
					(this.align_content = t.collection_page.float),
					(this.style_product_page_swatch = t.product_page.customize_swatch),
					(this.style_product_page_button = t.product_page.customize_button),
					(this.align_content_detail = t.product_page.float),
					(this.show_number_stock = t.product_page.show_number_stock),
					(this.show_add_to_cart_button = t.settings.show_add_to_cart_button),
					(this.add_to_cart_ajax = t.settings.add_to_cart_ajax),
					(this.show_option_name = t.settings.show_option_name),
					(this.out_of_stock = t.settings.out_of_stock),
					(this.add_to_cart_text = t.settings.add_to_cart_text),
					(this.added_to_cart_text = t.settings.added_to_cart_text),
					(this.sold_out_text = t.settings.sold_out_text),
					(this.text_required = t.settings.text_required),
					(this.sort_option = t.settings.sort_option),
					(this.show_one_variant_product = t.settings.show_one_variant_product),
					(this.show_one_variant_collection =
						t.settings.show_one_variant_collection),
					(this.group_image = t.settings.group_image),
					(this.show_limit_variant = t.settings.show_limit_variant),
					(this.limit_variant = t.settings.limit_variant),
					(this.carousel = t.collection_page.carousel);
			}),
			(GloboSwatch.prototype.init = function () {
				var app = this,
					installed = !1;
				if (
					(jquery__WEBPACK_IMPORTED_MODULE_0___default()('script').each(
						function () {
							-1 !=
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
									.text()
									.indexOf('globo.swatch.init.js?') &&
								-1 !=
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.text()
										.indexOf('asyncLoad') &&
								-1 ==
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.text()
										.indexOf('initSchema') &&
								(installed = !0);
						}
					),
					installed)
				) {
					var selectors = {
							priceCollectionSelector:
								'.price, .product-price, .productitem--price, .product-item-price, p.color--primary-meta.m0.font-size--sm.line-height--4.wd--font-size--m.wd--line-height--4, p.color--primary-accent.m0.font-size--sm.line-height--4.wd--font-size--m.wd--line-height--4, .money-styling, .card__price, .product-card__price, .product__prices, .grid-product__price-wrap, .product-item--price, .grid-link__meta, .prod-price, .product-grid--price, .product-item__price, .product-list-item-price, .grid-product__price, .product_image_caption span, .price_wrapper',
							productThumbnailsImageSelector: [
								'.product__media-item:not(.is-active)',
								'.product-gallery--media-thumbnail',
								'.product-single__thumbnails .swiper-slide',
								'.product-medias__thumbnail',
								'.thumbnail-list__item',
								'.product-single__thumbnails .product-single__thumbnails-item',
								'.thumbs .thumb',
								'.product-gallery .thumbnails .thumbnail',
								'.product-thumbnails .product-thumbnail',
								'.product__thumbnails .product-flickity__slides .nine-twelfths.md--up--one-whole',
								'#thumblist .thumb_item',
								'#ProductThumbs-product-template li',
								'#product-image-thumbnails li',
								'.product-gallery--navigation .product-gallery--thumbnail-trigger',
								'#product-thumbnails li',
								'.productimages .thumbs ul li',
								'#product-photos .thumbnails a',
								'.product-single__thumbnails .product-single__thumbnail-item',
								'.product-single__thumbnails .thumbnail-wrapper.grid__item',
								'.product-photo-thumbs .grid-item',
								'#product-thumbnails-product-template .thumbnails .thumbnail-gallery-item',
								'.product__slideshow--nav img',
								'.product__thumbs--beside .product__thumb-item',
								'.product-thumbnails .product-slideshow-pagination-item',
								'.productThumbs li',
								'.product_slider .flex-control-thumbs li',
								'#product-photos .thumb_product',
								'.product-images .product-thumbnails img',
								'.Product__SlideshowNavScroller .Product__SlideshowNavImage',
								'#image-block .flex-control-thumbs li',
								'.product-detail .gallery .thumbnails a',
								'ul.product__thumbnails .product__thumbnail',
								'.product_gallery_nav .gallery-cell',
								'.product-single__photo .slick-dots li',
								'ul#ProductThumbs li.grid__item',
								'html.product .secondary-images .secondary-image',
								'#product-area .pager .wrap.thumb',
								'.product-single__thumbnails .product-single__media-wrapper',
							],
							singleOptionSelector:
								'.option-selectors,.wetheme-dropdown__select,.single-option-selector, select[data-single-option-selector], .pretty-select select, .select-wrapper select, .selector-wrapper select, .product-form__select .form__input--select',
							selectOptionDetail:
								'.ProductForm__Option,product-options-root,product-variant-selector,.product-form__controls-group--options,.option-selector,.product__swatches,.pf-option-swatches,.option-values,.option-header,.product-variant-picker-block,.product-details__option-wrapper,.product-options,.tt-swatches-container,.form-options,product-variants,.selectorVariants,.variants:not(.product-form),.product__variants__wrap,.g-variant-selector,.swatches,.pf-variant-radio,.radio-wrapper,.gf_variants-wrapper,.product-form--variants,variant-radios,.vario-variant-wrapper,#nt_variations,variant-selects,.pf-variant-select,.pf-variant-label,.product-single__swatches,.select:not(.number),.product-form__controls-group-options,.product-form-option,.swatches-type-products,.form-field.form-options,.swatch,form select[name="id"],.tt-product-head__options,.variant-wrapper,.swatches-wrapper,.swatches__container,.product-form__controls-group:nth-child(1):not(.product-form__controls-group--submit),.product-swatches,#product-options .product-swatches, form#AddToCartForm > .swatch, .product-form--alt .form-field.form-options, .materialize-select, .product-form__select, .product-single__meta .radio-wrapper.product-form__item, .product__form-wrapper .product-form__item:not(.product-form__quantity-selector),.product-form .product-form__item:not(.product-form__quantity-selector,.product-form__item--quantity,.product-form__item--submit), .variations .product-attribute, .product-details-wrapper .inline-field-wrapper, .product-single__form .variant-wrapper, .product__info .product__form .product__variants .form__control, .variant-group .variant-group-multiple, .card__section form[action="/cart/add"] .product-form__variants',
							btnValidationAddtocart:
								'.product-single__form .add-to-cart,form#AddToCartForm button#AddToCart,form.shopify-product-form button.add-to-cart,form[action*="/cart/add"] [name="add"], form[action*="/cart/add"] button#AddToCartDesk, form[data-product-form] button[data-product-add], .product-form--atc-button[data-product-atc], .globo-validationForm, button.single_add_to_cart_button.ajax_form_cart, input#AddToCart-product-template, button[data-action="add-to-cart"], .product-details-wrapper .add-to-cart input, form.product-menu-form .product-menu-button[data-product-menu-button-atc], .product-add input#AddToCart, #product-content #add-to-cart #addToCart, .product-form-submit-wrap .add-to-cart-button, .productForm-block .productForm-submit, .btn-wrapper-c .add, .product-submit input.add-to-cart, .form-element-quantity-submit .form-element-submit-button, .quantity-submit-row__submit input, form#AddToCartForm .product-add input#addToCart, .product__form .product__add-to-cart, #product-description form .product-add .add, .product-add input.button.product-add-available, .globo__validation-default, #product-area .product-details-wrapper .options .selector-wrapper .submit',
						},
						Shopify = Shopify || {};
					if (
						((Shopify.money_format = Globo.moneyFormat),
						(Shopify.formatMoney = function (t, e) {
							'string' == typeof t && (t = t.replace('.', ''));
							var n = '',
								i = /\{\{\s*(\w+)\s*\}\}/,
								r = e || this.money_format;
							function o(t, e) {
								return void 0 === t ? e : t;
							}
							function a(t, e, n, i) {
								if (
									((e = o(e, 2)),
									(n = o(n, ',')),
									(i = o(i, '.')),
									isNaN(t) || null == t)
								)
									return 0;
								var r = (t = (t / 100).toFixed(e)).split('.');
								return (
									r[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + n) +
									(r[1] ? i + r[1] : '')
								);
							}
							switch (r.match(i)[1]) {
								case 'amount':
									n = a(t, 2);
									break;
								case 'amount_no_decimals':
									n = a(t, 0);
									break;
								case 'amount_with_comma_separator':
									n = a(t, 2, '.', ',');
									break;
								case 'amount_no_decimals_with_comma_separator':
									n = a(t, 0, '.', ',');
							}
							return r.replace(i, n);
						}),
						app.enable_collection_page &&
							(getTemplateSwatchCollections(),
							getAttrParentAndHidePrice(),
							getAddtocartCollection(),
							getToggleDropdownList(),
							changeImageCollection(),
							changeSwatchOptionValueCollection(),
							app.carousel &&
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.gvowl-carousel'
								).owlCarousel({
									loop: !1,
									autoWidth: !0,
									margin: 10,
									nav: !1,
									navClass: ['gvowl-prev', 'gvowl-next'],
									navText: [
										'<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16" fill-rule="evenodd"></path></svg>',
										'<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16" fill-rule="evenodd"></path></svg>',
									],
								})),
						app.enable_product_page &&
							('product' === app.page ||
								('index' === app.page && void 0 !== window.featuredProduct)))
					) {
						var optionsApps = app.optionsApp,
							styleOptions = getListKeyStyle(optionsApps),
							listColors = getListColors(optionsApps),
							listColors2 = getListColors2(optionsApps),
							listColorImage = getListColorImage(optionsApps),
							listColorImageUrl = getListColorImageUrl(optionsApps),
							listSelectType = getListSelectType(optionsApps),
							listOrderOptions = getListOrderOptions(optionsApps);
						'index' === app.page &&
							void 0 !== window.curVariant &&
							void 0 !== window.featuredProduct &&
							((app.curVariant = window.curVariant),
							(app.product = window.featuredProduct));
						var current_variant = app.curVariant,
							product = app.product,
							productVariants = app.product.variants;
						insertAfterSwatchProduct(),
							setTimeout(function () {
								getTemplateSwatchProduct(),
									hideSelectAndPriceProduct(),
									getToggleDropdownListProductDetail(),
									sortSwatchOptionsProduct(product.id),
									showNumberStock(current_variant),
									(app.product.variants.length > 1 ||
										(1 == app.product.variants.length &&
											'Default Title' != app.product.variants[0].title)) &&
										productDetailVariantsProcess(productVariants);
							}, 300);
					}
				}
				function getGSCollection() {
					var t = [];
					return (
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.GWS-product-item'
						).each(function () {
							var e =
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(
										'id'
									),
								n =
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(
										'url'
									),
								i = JSON.parse(
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).html()
								);
							(i.url = n), (t[e] = i);
						}),
						t
					);
				}
				function getListKeyStyle(t) {
					for (var e = {}, n = 0; n < t.length; n++)
						e[t[n].name] = t[n].display_style;
					return e;
				}
				function getListColors(t) {
					for (var e = [], n = 0; n < t.length; n++)
						for (var i = 0; i < t[n].option_items.length; i++)
							void 0 !== t[n].option_items[i].custom.color_1 &&
								(e[t[n].name + '-' + t[n].option_items[i].value] =
									t[n].option_items[i].custom.color_1);
					return Object.assign({}, e);
				}
				function getListColors2(t) {
					for (var e = [], n = 0; n < t.length; n++)
						for (var i = 0; i < t[n].option_items.length; i++)
							void 0 !== t[n].option_items[i].custom.color_2 &&
								(e[t[n].name + '-' + t[n].option_items[i].value] =
									t[n].option_items[i].custom.color_2);
					return Object.assign({}, e);
				}
				function getListColorImage(t) {
					for (var e = [], n = 0; n < t.length; n++)
						for (var i = 0; i < t[n].option_items.length; i++)
							void 0 !== t[n].option_items[i].custom.upload_file.src &&
								(e[t[n].name + '-' + t[n].option_items[i].value] =
									t[n].option_items[i].custom.upload_file.src);
					return Object.assign({}, e);
				}
				function getListColorImageUrl(t) {
					for (var e = [], n = 0; n < t.length; n++)
						for (var i = 0; i < t[n].option_items.length; i++)
							void 0 !== t[n].option_items[i].custom.image_url.src &&
								(e[t[n].name + '-' + t[n].option_items[i].value] =
									t[n].option_items[i].custom.image_url.src);
					return Object.assign({}, e);
				}
				function getListSelectType(t) {
					for (var e = [], n = 0; n < t.length; n++)
						for (var i = 0; i < t[n].option_items.length; i++)
							void 0 !== t[n].option_items[i].select_type &&
								(e[t[n].name + '-' + t[n].option_items[i].value] =
									t[n].option_items[i].select_type);
					return Object.assign({}, e);
				}
				function getListOrderOptions(t) {
					for (var e = [], n = 0; n < t.length; n++) e[t[n].name] = t[n].order;
					return Object.assign({}, e);
				}
				function hideArrowSelect() {
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(
						'.ul-globo-dropdown-option'
					).each(function (t, e) {
						1 ===
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).find(
								'.select-option--dropdown'
							).length &&
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
								.find('.globo-arrow-select')
								.remove();
					});
				}
				function sortSwatchOptionsCollection(t) {
					if (app.sort_option) {
						var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.swatches-globo[product-swatch-id="' + t + '"]'
						)
							.eq(0)
							.find('.globo-swatch-list .swatch--gl');
						if (e.length > 1) {
							var n = e.sort(function (t, e) {
								var n = parseInt(
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).data(
											'order'
										)
									),
									i = parseInt(
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).data(
											'order'
										)
									);
								return n < i ? -1 : n > i ? 1 : 0;
							});
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'.swatches-globo[product-swatch-id="' +
									t +
									'"] .globo-swatch-list'
							).html(n);
						}
					}
				}
				function getTemplateSwatchCollections() {
					if (
						((GSCollection = getGSCollection()),
						'undefined' != typeof GSCollection)
					)
						for (
							var t = Object.keys(GSCollection),
								e = app.optionsApp,
								n = getListKeyStyle(e),
								i = getListColors(e),
								r = getListColors2(e),
								o = getListColorImage(e),
								a = getListColorImageUrl(e),
								s = getListSelectType(e),
								l = getListOrderOptions(e),
								u = 0;
							u < t.length;
							u++
						) {
							var c = GSCollection[t[u]],
								_ =
									(GSCollection[t[u]].currentVariantCollection,
									document.getElementById('globoSwatchCollection').innerHTML),
								d =
									(document.querySelector('.swatches-globo'),
									app.optionsApp.filter(function (t) {
										return t.settings && t.settings.enable_collection;
									}));
							d = d.map(function (t) {
								return t.name;
							});
							var p = _engine__WEBPACK_IMPORTED_MODULE_1__.a.parseAndRenderSync(
								_,
								{
									product: c,
									configs: {
										visibleOptions: d,
										displayStyles: n,
										displayColors: i,
										displayColors2: r,
										displayColorsImage: o,
										displayColorsImageUrl: a,
										displaySelectType: s,
										style_collection_page_swatch:
											app.style_collection_page_swatch,
										style_collection_page_button:
											app.style_collection_page_button,
										align_content: app.align_content,
										showAddtocart: app.show_add_to_cart_button,
										isAjaxcart: app.add_to_cart_ajax,
										isOptionname: app.show_option_name,
										styleSoldout: app.out_of_stock,
										txtAddtocart: app.add_to_cart_text,
										txtAddedtocart: app.added_to_cart_text,
										txtSoldout: app.sold_out_text,
										sortOption: app.sort_option,
										listOrderOptions: l,
										show_one_variant: app.show_one_variant_collection,
										show_limit_variant: app.show_limit_variant,
										limit_variant: app.limit_variant,
										carousel: app.carousel,
									},
								}
							);
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'[product-swatch-id="' + c.id + '"]'
							).html(p),
								sortSwatchOptionsCollection(c.id);
						}
				}
				function getAttrParentAndHidePrice() {
					jquery__WEBPACK_IMPORTED_MODULE_0___default()('.swatches-globo').each(
						function () {
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
								.parent()
								.parent()
								.attr(
									'product-selector',
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr(
										'product-swatch-id'
									)
								);
						}
					);
				}
				function getAddtocartCollection() {
					var txtAdded = app.added_to_cart_text,
						updateCart = function (t) {
							jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
								url: '/cart.js',
								type: 'get',
								dataType: 'json',
								success: function (e) {
									window.dispatchEvent(
										new CustomEvent('globoSwatchProductsUpdateCart', {
											detail: { cart: e, ids: t },
										})
									);
								},
							});
						};
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
						'click',
						'.globo-ajax-form-cart',
						function (e) {
							e.preventDefault();
							var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
								f = t.closest('.swatches-globo'),
								idDataForm = f.find('.globo-selector-all').val();
							jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
								type: 'POST',
								url: '/cart/add.js',
								data: { quantity: 1, id: idDataForm },
								dataType: 'json',
								success: function (t) {
									app.add_to_cart_ajax
										? updateCart(idDataForm)
										: (window.location.href = '/cart');
								},
								error: function error(XMLHttpRequest, textStatus) {
									var data = eval('(' + XMLHttpRequest.responseText + ')');
									data.message &&
										(alert(data.message + ': ' + data.description),
										t.prop('disabled', !0));
								},
								complete: function (e) {
									200 == e.status && t.html(txtAdded);
								},
							});
						}
					);
				}
				function getToggleDropdownList() {
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(
						'.ul-globo-dropdown-option'
					).length &&
						(hideArrowSelect(),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.ul-globo-dropdown-option li.swatches-options'
						).on('click', function (t) {
							t.preventDefault(), t.stopPropagation();
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
								.siblings()
								.toggle();
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
								.parent()
								.prepend(this),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
									.find('input[type=radio]')
									.prop('checked', !0)
									.trigger('change');
						}),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
							'click',
							function (t) {
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(t.target).is(
									'.ul-globo-dropdown-option'
								) ||
									(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.ul-globo-dropdown-option li.swatches-options'
									).hide(),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.ul-globo-dropdown-option li.swatches-options:first-child'
									).show());
							}
						));
				}
				function getToggleDropdownListProductDetail() {
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(
						'.ul-globo-dropdown-option'
					).length &&
						(hideArrowSelect(),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
							'click',
							'.ul-globo-dropdown-option .select-globo-init',
							function (t) {
								t.preventDefault(),
									t.stopPropagation(),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.ul-globo-dropdown-option')
										.children('li:not(.select-globo-init)')
										.toggle();
							}
						),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
							'click',
							'.ul-globo-dropdown-option li:not(.select-globo-init)',
							function (t) {
								t.preventDefault(),
									t.stopPropagation(),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.siblings()
										.toggle(),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.select-globo-init'
									).length
										? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
												.parent()
												.find('.select-globo-init')
												.html(
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														this
													).html()
												)
										: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
												.parent()
												.prepend(this),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.find('input[type=radio]')
										.prop('checked', !0)
										.trigger('change');
							}
						));
				}
				function changeImageCollection() {
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
						'click',
						'.g-variant-color li',
						function () {
							var t =
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr(
										'productId'
									),
								e =
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr(
										'productImage'
									);
							if (e) {
								if (
									(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('[product-selector="' + t + '"]')
										.find('img')
										.first()
										.attr('src', e),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('[product-selector="' + t + '"]')
										.find('img')
										.first()
										.attr('srcset', e),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('article.collection-product')
										.find('img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('article.collection-product')
											.find('img')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('article.collection-product')
											.find('img')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('.product-item')
										.find('.product-item__thumbnail img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item')
											.find('.product-item__thumbnail img')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item')
											.find('.product-item__thumbnail img')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('.product-item')
										.find('.product-item__images img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item')
											.find('.product-item__images img')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item')
											.find('.product-item__images img')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('article.productgrid--item')
										.find('img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('article.productgrid--item')
											.find('img')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('article.productgrid--item')
											.find('img')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('.product-item-v1')
										.find('.img-product img.img-responsive').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item-v1')
											.find('.img-product img.img-responsive')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item-v1')
											.find('.img-product img.img-responsive')
											.first()
											.attr('srcset', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item-v1')
											.find('.img-product img.img-responsive.img-product-hover')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.product-item-v1')
											.find('.img-product img.img-responsive.img-product-hover')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('img.product__image').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.product__image')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.product__image')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('.card__inner img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.card__inner img')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.card__inner img')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('.card__media img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.card__media img')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.card__media img')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('img.product__img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.product__img')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.product__img')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('img.grid-view-item__image').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.grid-view-item__image')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.grid-view-item__image')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('img.product--image').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.product--image')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('img.product--image')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('.product-card__image img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.product-card__image img')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.product-card__image img')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.product-block')
										.find('.primary-image img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-block')
											.find('.primary-image img')
											.first()
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-block')
											.find('.primary-image img')
											.first()
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.Grid__Cell')
										.find('.ProductItem__Image').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.Grid__Cell')
											.find('.ProductItem__Image')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.Grid__Cell')
											.find('.ProductItem__Image')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.product-item')
										.find('.product-item__image').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-item')
											.find('.product-item__image')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-item')
											.find('.product-item__image')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.site-box')
										.find('.box--product-image.primary img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.site-box')
											.find('.box--product-image.primary img')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.site-box')
											.find('.box--product-image.primary img')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.product-index')
										.find('.prod-image img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-index')
											.find('.prod-image img')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-index')
											.find('.prod-image img')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.Carousel__Cell')
										.find('img.ProductItem__Image').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.Carousel__Cell')
											.find('img.ProductItem__Image')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.Carousel__Cell')
											.find('img.ProductItem__Image')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.tt-col-item')
										.find('.tt-image-box img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.tt-col-item')
											.find('.tt-image-box img')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.tt-col-item')
											.find('.tt-image-box img')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.product-grid-item')
										.find('a.product__media').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-grid-item')
											.find('a.product__media')
											.attr('style', 'background-image: url(' + e + ')'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-grid-item')
											.find('a.product__media-hover .product__media-hover-img')
											.attr('style', 'background-image: url(' + e + ')')),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.product-grid-item')
										.find('.collection__image__top').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-grid-item')
											.find('.collection__image__top')
											.attr('style', 'background-image: url(' + e + ')'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-grid-item')
											.find('.collection__image__bottom')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.product-grid-item')
											.find('.collection__image__bottom')
											.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('.grid-product__image-mask .grid__image-ratio')
										.length)
								) {
									var n = this;
									setTimeout(function () {
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(n)
											.closest('.grid__item')
											.find('.grid-product__image-mask .grid__image-ratio')
											.attr('style', 'background-image: url(' + e + ')');
									}, 500);
								}
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
									.closest('.grid__item')
									.find('.grid-product__image-mask .image-wrap img').length &&
									(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('.grid-product__image-mask .image-wrap img')
										.attr('src', e),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('.grid-product__image-mask .image-wrap img')
										.attr('srcset', e),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find(
											'.grid-product__image-mask .grid-product__secondary-image img'
										)
										.attr('src', e),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find(
											'.grid-product__image-mask .grid-product__secondary-image img'
										)
										.attr('srcset', e)),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.closest('.grid__item')
										.find('.card--product .media img').length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.card--product .media img')
											.attr('src', e),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.grid__item')
											.find('.card--product .media img')
											.attr('srcset', e));
							}
						}
					);
				}
				function changeSwatchOptionValueCollection() {
					var t = app.add_to_cart_text,
						e = app.sold_out_text;
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
						'change',
						'.swatches-globo .swatch--gl .swatches-options :radio',
						function () {
							var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
									.parents('.swatches-globo')
									.find('.swatch--gl'),
								i = [],
								r = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
								.parents('.swatch--gl')
								.find('.name-variant')
								.text(': ' + r),
								jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(
									n,
									function (t, e) {
										var n =
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr(
												'data-option-index'
											);
										i[n] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
											.find('input[type="radio"]:checked')
											.val();
									}
								);
							for (var o = '', a = 0; a < i.length; a++)
								void 0 !== i[a] &&
									(o += '[data-option' + parseInt(a + 1) + '="' + i[a] + '"]');
							var s = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
									.parents('.swatches-globo')
									.find('select[name="idGlobo"] option' + o)
									.first()
									.val(),
								l = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
									.parents('.swatches-globo')
									.find('select[name="idGlobo"] option' + o)
									.data('available');
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
								.parents('.swatches-globo')
								.find('select[name="idGlobo"]')
								.val(s),
								l
									? (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.swatches-globo')
											.find('.globo--add-to-cart')
											.html(t),
									  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.swatches-globo')
											.find('.globo--add-to-cart')
											.removeAttr('disabled'))
									: (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.swatches-globo')
											.find('.globo--add-to-cart')
											.html(e),
									  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.swatches-globo')
											.find('.globo--add-to-cart')
											.attr('disabled', 'disabled'));
							var u = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
								.parents('.swatches-globo')
								.find('select[name="idGlobo"] option:selected')
								.val();
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'.globo-swatch-lists-price li'
							).each(function () {
								if (
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr(
										'data-value'
									) === u
								) {
									var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.globo-swatch-lists-price li[data-value="' +
												u +
												'"] .gw-li-price'
										).html(),
										e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.globo-swatch-lists-price li[data-value="' +
												u +
												'"] .gw-li-compareprice'
										).html();
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('.swatches-globo')
										.find('.globo-cs-product_price')
										.html(t),
										void 0 !== e
											? jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
													.parents('.swatches-globo')
													.find('.globo-cs-product_oldprice')
													.html(e)
											: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
													.parents('.swatches-globo')
													.find('.globo-cs-product_oldprice')
													.html('');
								}
							});
							var c = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
									.parents('.swatches-globo')
									.attr('product-swatch-id'),
								_ =
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents(
										'.swatches-globo'
									),
								d = _.find('.globo-swatch-list .swatch--gl');
							d.length > 1 &&
								_.find('.swatch--gl :radio').each(function () {
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parent()
										.removeClass('globo-out-of-stock');
								}),
								d.each(function (t, e) {
									t =
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr(
											'data-option-index'
										);
									var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
										.find('input[type="radio"]:checked')
										.val();
									d.each(function (e, i) {
										e =
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(i).attr(
												'data-option-index'
											);
										t !== e &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(i)
												.find(':radio')
												.each(function (i, r) {
													for (
														var o = !1,
															a = 0,
															s = GSCollection[c].variants.length;
														a < s;
														a++
													) {
														var l = GSCollection[c].variants[a];
														!1 !== l.available &&
															l.options[t] == n &&
															l.options[e] ==
																jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																	r
																).val() &&
															(o = !0);
													}
													!1 === o &&
														jquery__WEBPACK_IMPORTED_MODULE_0___default()(r)
															.parent()
															.not('.select-option--dropdown')
															.addClass('globo-out-of-stock');
												});
									});
								});
						}
					);
				}
				function insertAfterSwatchProduct() {
					0 ==
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.globo-swatch-product-detail'
						).length &&
						(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'form[action*="/cart/add"]'
						).length > 1
							? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'<div class="globo-swatch-product-detail"></div>'
							  ).insertAfter(
									'form[action*="/cart/add"]:visible:first [name="id"]'
							  )
							: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'form[action*="/cart/add"] [name="id"]'
							  ).parent('label').length
							? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'<div class="globo-swatch-product-detail"></div>'
							  ).insertAfter(
									'form[action*="/cart/add"] label[for="product-select-simple"]'
							  )
							: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'<div class="globo-swatch-product-detail"></div>'
							  ).insertAfter('form[action*="/cart/add"] [name="id"]:first'),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'form.product-menu-form[action*="/cart/add"]'
						).length &&
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'<div class="globo-swatch-product-detail"></div>'
							).insertAfter(
								'form.product-menu-form[action*="/cart/add"] [name="id"]'
							));
				}
				function getTemplateSwatchProduct() {
					var t = document.getElementById('globoSwatchProductDetail').innerHTML,
						e = _engine__WEBPACK_IMPORTED_MODULE_1__.a.parseAndRenderSync(t, {
							product: product,
							configs: {
								displayStyles: styleOptions,
								displayColors: listColors,
								displayColors2: listColors2,
								displayColorsImage: listColorImage,
								displayColorsImageUrl: listColorImageUrl,
								displaySelectType: listSelectType,
								style_product_page_swatch: app.style_product_page_swatch,
								style_product_page_button: app.style_product_page_button,
								align_content: app.align_content_detail,
								showNumberStock: app.show_number_stock,
								styleSoldout: app.out_of_stock,
								enableMandatory: app.enable_mandatory,
								sortOption: app.sort_option,
								current_variant: current_variant,
								listOrderOptions: listOrderOptions,
								show_one_variant: app.show_one_variant_product,
							},
						});
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(
						'.globo-swatch-product-detail'
					).html(e),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass(
							'globo-swatch-app'
						);
				}
				function hideSelectAndPriceProduct() {
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(
						selectors.selectOptionDetail
					).hide(),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.product__sticky dl.price'
						).hide(),
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.product__sticky .globo-product-swatch-price'
						).show(),
						setTimeout(function () {
							jquery__WEBPACK_IMPORTED_MODULE_0___default()('.selector-wrapper')
								.length &&
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.selector-wrapper:not(.product-qty)'
								).hide();
						}, 300);
				}
				function sortSwatchOptionsProduct(t) {
					if (app.sort_option) {
						var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.globo-swatch-product-detail .globo-swatch-list .swatch--gl'
						);
						if (e.length > 1) {
							var n = e.sort(function (t, e) {
								var n = parseInt(
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(t).data(
											'order'
										)
									),
									i = parseInt(
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).data(
											'order'
										)
									);
								return n < i ? -1 : n > i ? 1 : 0;
							});
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'.globo-swatch-product-detail .globo-swatch-list'
							).html(n);
						}
					}
				}
				function showNumberStock(t) {
					if (
						app.show_number_stock &&
						0 == app.enable_mandatory &&
						null != t.inventory_management
					) {
						var e = t.inventory_quantity;
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'.globo-number-stock-variant'
						).html('Stock: only ' + e + ' left in stock');
					}
				}
				function changeCurrencyApp() {
					('undefined' != typeof DoublyGlobalCurrency &&
						jquery__WEBPACK_IMPORTED_MODULE_0___default()(
							'select.currency-switcher'
						).length &&
						DoublyGlobalCurrency.convertAll(
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'select.currency-switcher'
							).val()
						),
					'undefined' != typeof conversionBearAutoCurrencyConverter &&
						'function' ==
							typeof conversionBearAutoCurrencyConverter.convertPricesOnPage &&
						conversionBearAutoCurrencyConverter.convertPricesOnPage(),
					jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="currencies"]')
						.length &&
						'undefined' != typeof Currency &&
						void 0 !== Currency.convertAll &&
						Currency.convertAll(
							window.shopCurrency,
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'[name=currencies]'
							).val()
						),
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(
						'.CurrencySelector__Select'
					).length &&
						'this.form.submit()' !=
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'.CurrencySelector__Select'
							).attr('onchange')) &&
						document
							.querySelectorAll('.CurrencySelector__Select')
							.forEach(function (t) {
								app.dispatchCustomEvent(t, 'change');
							});
					(('undefined' != typeof Currency &&
						void 0 !== Currency.moneyFormats) ||
						('undefined' != typeof ACSCurrency &&
							void 0 !== ACSCurrency.moneyFormats)) &&
						'undefined' != typeof mlvedaload &&
						mlvedaload(),
						'undefined' != typeof BOLD &&
							void 0 !== BOLD.common &&
							void 0 !== BOLD.common.eventEmitter &&
							BOLD.common.eventEmitter.emit('BOLD_CURRENCY_double_check');
				}
				function automatedVariantImageSwatch() {
					jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
						'change',
						'.globo-swatch-product-detail .g-variant-color-detail :radio',
						function () {
							for (
								var t =
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(),
									e = 0;
								e < selectors.productThumbnailsImageSelector.length;
								e++
							) {
								var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									selectors.productThumbnailsImageSelector[e]
								);
								jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(
									n,
									function (e, n) {
										var i =
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(n).attr(
												'data-color'
											);
										t == i
											? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													n
											  ).removeClass('hide')
											: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													n
											  ).addClass('hide'),
											'AllColors' ==
												jquery__WEBPACK_IMPORTED_MODULE_0___default()(n).data(
													'color'
												) &&
												jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													n
												).removeClass('hide');
									}
								);
							}
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'.product-single__thumbnails.slick-initialized'
							).length &&
								window.dispatchEvent(
									new CustomEvent('colorChange', { detail: { color: t } })
								),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'#product-thumbnails-product-template .thumbnails.slick-initialized'
								).length &&
									window.dispatchEvent(
										new CustomEvent('colorChangeFaster', {
											detail: { color: t },
										})
									);
						}
					);
				}
				function productDetailVariantsProcess(t) {
					if (t.length > 0) {
						if (
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'select[name="id"]'
							).closest('form[action="/cart/add"]').length
						)
							var e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'select[name="id"]'
							).closest('form[action="/cart/add"]');
						else if (
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'form.shopify-product-form'
							).length
						)
							e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'form.shopify-product-form'
							);
						else
							e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
								'form[action="/cart/add"]'
							);
						!(function () {
							if (0 == app.enable_mandatory || product.variants.length <= 1)
								for (var t = 0, n = app.curVariant.options.length; t < n; t++) {
									var i = e.find(
										'.swatch--gl[data-option-index="' +
											t +
											'"] :radio[value="' +
											app.curVariant.options[t] +
											'"]'
									);
									i.length && (i.get(0).checked = !0);
								}
						})(),
							setTimeout(function () {
								window.innerWidth >= 750 &&
									app.group_image &&
									(function () {
										if (
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.g-variant-color-detail'
											).length
										) {
											for (
												var t = '', e = 0;
												e < app.product.options.length;
												e++
											) {
												var n = app.optionsApp.find(function (t) {
													return t.name == app.product.options[e];
												});
												(1 != n.display_style && 2 != n.display_style) ||
													(t = 'option' + (e + 1));
											}
											for (
												var i = app.curVariant[t], r = 0;
												r < selectors.productThumbnailsImageSelector.length;
												r++
											)
												jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													selectors.productThumbnailsImageSelector[r]
												).addClass('hide');
											for (
												var o = [],
													a = [],
													s = ((r = 0), product.variants.length);
												r < s;
												r++
											) {
												var l = product.variants[r];
												-1 == o.indexOf(l[t]) &&
													(o.push(l[t]),
													l.featured_media &&
														(a[l.featured_media.position] = l[t]));
											}
											if (
												(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(
													a,
													function (t, e) {
														if (void 0 !== e)
															for (
																var n = t - 1, i = product.media.length;
																n < i;
																n++
															)
																for (
																	var r = 0;
																	r <
																	selectors.productThumbnailsImageSelector
																		.length;
																	r++
																)
																	jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																		selectors.productThumbnailsImageSelector[r]
																	)
																		.eq(n)
																		.attr('data-color', e);
													}
												),
												-1 !==
													jquery__WEBPACK_IMPORTED_MODULE_0___default.a.inArray(
														i,
														o
													))
											)
												for (
													r = 0;
													r < selectors.productThumbnailsImageSelector.length;
													r++
												)
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														selectors.productThumbnailsImageSelector[r] +
															'[data-color="' +
															i +
															'"]'
													).removeClass('hide');
											for (
												r = 0;
												r < selectors.productThumbnailsImageSelector.length;
												r++
											)
												jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													selectors.productThumbnailsImageSelector[r]
												).each(function (t, e) {
													void 0 ===
														jquery__WEBPACK_IMPORTED_MODULE_0___default()(
															e
														).data('color') &&
														(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
															e
														).removeClass('hide'),
														jquery__WEBPACK_IMPORTED_MODULE_0___default()(
															e
														).attr('data-color', 'AllColors'));
												});
										}
									})();
							}, 300),
							(function () {
								if (
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form[action*="/cart/add"]'
									).length > 1
								)
									for (var e = 0, n = t.length; e < n; e++)
										t[e].compare_at_price > t[e].price
											? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form[action*="/cart/add"]:visible:first select[name="id"] option:eq(' +
														e +
														')'
											  ).attr({
													'data-option1': t[e].option1,
													'data-option2': t[e].option2,
													'data-option3': t[e].option3,
													'data-available': t[e].available,
													'data-price': Shopify.formatMoney(
														t[e].price,
														Shopify.money_format
													),
													'data-compare-price': Shopify.formatMoney(
														t[e].compare_at_price,
														Shopify.money_format
													),
													'data-globoquantity': t[e].inventory_quantity,
													'data-inventory-management':
														t[e].inventory_management,
											  })
											: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form[action*="/cart/add"]:visible:first select[name="id"] option:eq(' +
														e +
														')'
											  ).attr({
													'data-option1': t[e].option1,
													'data-option2': t[e].option2,
													'data-option3': t[e].option3,
													'data-available': t[e].available,
													'data-price': Shopify.formatMoney(
														t[e].price,
														Shopify.money_format
													),
													'data-globoquantity': t[e].inventory_quantity,
													'data-inventory-management':
														t[e].inventory_management,
											  });
								else
									for (e = 0, n = t.length; e < n; e++)
										t[e].compare_at_price > t[e].price
											? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form[action*="/cart/add"] select[name="id"] option:eq(' +
														e +
														')'
											  ).attr({
													'data-option1': t[e].option1,
													'data-option2': t[e].option2,
													'data-option3': t[e].option3,
													'data-available': t[e].available,
													'data-price': Shopify.formatMoney(
														t[e].price,
														Shopify.money_format
													),
													'data-compare-price': Shopify.formatMoney(
														t[e].compare_at_price,
														Shopify.money_format
													),
													'data-globoquantity': t[e].inventory_quantity,
													'data-inventory-management':
														t[e].inventory_management,
											  })
											: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form[action*="/cart/add"] select[name="id"] option:eq(' +
														e +
														')'
											  ).attr({
													'data-option1': t[e].option1,
													'data-option2': t[e].option2,
													'data-option3': t[e].option3,
													'data-available': t[e].available,
													'data-price': Shopify.formatMoney(
														t[e].price,
														Shopify.money_format
													),
													'data-globoquantity': t[e].inventory_quantity,
													'data-inventory-management':
														t[e].inventory_management,
											  });
								if (
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form.product-menu-form[action*="/cart/add"]'
									).length
								)
									for (e = 0, n = t.length; e < n; e++)
										t[e].compare_at_price > t[e].price
											? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form.product-menu-form[action*="/cart/add"] select[name="id"] option:eq(' +
														e +
														')'
											  ).attr({
													'data-option1': t[e].option1,
													'data-option2': t[e].option2,
													'data-option3': t[e].option3,
													'data-available': t[e].available,
													'data-price': Shopify.formatMoney(
														t[e].price,
														Shopify.money_format
													),
													'data-compare-price': Shopify.formatMoney(
														t[e].compare_at_price,
														Shopify.money_format
													),
													'data-globoquantity': t[e].inventory_quantity,
													'data-inventory-management':
														t[e].inventory_management,
											  })
											: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form.product-menu-form[action*="/cart/add"] select[name="id"] option:eq(' +
														e +
														')'
											  ).attr({
													'data-option1': t[e].option1,
													'data-option2': t[e].option2,
													'data-option3': t[e].option3,
													'data-available': t[e].available,
													'data-price': Shopify.formatMoney(
														t[e].price,
														Shopify.money_format
													),
													'data-globoquantity': t[e].inventory_quantity,
													'data-inventory-management':
														t[e].inventory_management,
											  });
							})(),
							jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(
								'change',
								'.globo-swatch-product-detail .swatch--gl .select-option :radio',
								function () {
									var n = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.globo-swatch-product-detail .swatch--gl')
											.find('.name-option')
											.attr('data-name'),
										i = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('.globo-swatch-product-detail .swatch--gl')
											.attr('data-option-index'),
										r =
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr(
												'data-variantId'
											),
										o =
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(),
										a = parseInt(i) + 1;
									jQuery(this)
										.closest('form[action="/cart/add"]')
										.find(selectors.singleOptionSelector)
										.eq(i)
										.find('[value="' + o + '"]').length &&
										(o = jQuery(this)
											.closest('form[action="/cart/add"]')
											.find(selectors.singleOptionSelector)
											.eq(i)
											.find('[value="' + o + '"]')
											.val()),
										jQuery(this)
											.closest('form[action="/cart/add"]')
											.find(selectors.singleOptionSelector)
											.eq(i)
											.val(o)
											.trigger('change'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-0'
										).length &&
											document
												.getElementById('SingleOptionSelector-0')
												.dispatchEvent(new CustomEvent('change')),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-1'
										).length &&
											document
												.getElementById('SingleOptionSelector-1')
												.dispatchEvent(new CustomEvent('change')),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-2'
										).length &&
											document
												.getElementById('SingleOptionSelector-2')
												.dispatchEvent(new CustomEvent('change')),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-0'
										).length &&
											document
												.getElementById('SingleOptionSelector-0')
												.dispatchEvent(new Event('change', { bubbles: !0 })),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-1'
										).length &&
											document
												.getElementById('SingleOptionSelector-1')
												.dispatchEvent(new Event('change', { bubbles: !0 })),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-2'
										).length &&
											document
												.getElementById('SingleOptionSelector-2')
												.dispatchEvent(new Event('change', { bubbles: !0 })),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#ProductSelect-product-template-option-0'
										).length &&
											document
												.getElementById(
													'ProductSelect-product-template-option-0'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 })),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#ProductSelect-product-template-option-1'
										).length &&
											document
												.getElementById(
													'ProductSelect-product-template-option-1'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 })),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#ProductSelect-product-template-option-2'
										).length &&
											document
												.getElementById(
													'ProductSelect-product-template-option-2'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 })),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-product-0'
										).length &&
											((document.getElementById(
												'SingleOptionSelector-product-0'
											).value = o),
											document
												.getElementById('SingleOptionSelector-product-0')
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-product-1'
										).length &&
											((document.getElementById(
												'SingleOptionSelector-product-1'
											).value = o),
											document
												.getElementById('SingleOptionSelector-product-1')
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#SingleOptionSelector-product-2'
										).length &&
											((document.getElementById(
												'SingleOptionSelector-product-2'
											).value = o),
											document
												.getElementById('SingleOptionSelector-product-2')
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#Option-product-' + i
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#Option-product-' + i
											)
												.val(o)
												.trigger('change'),
											document
												.getElementById('Option-product-' + i)
												.dispatchEvent(new CustomEvent('change')));
									try {
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#nt_variations .swatches-select[data-option-index="' +
												i +
												'"] a[data-val="' +
												o.toLowerCase().replaceAll(' ', '-') +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#nt_variations .swatches-select[data-option-index="' +
													i +
													'"] a[data-val="' +
													o.toLowerCase().replaceAll(' ', '-') +
													'"]'
											).trigger('click');
									} catch (t) {
										console.error(t);
									}
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.radio__button input[value="' + o + '"]'
									).length &&
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.radio__button input[value="' + o + '"]'
										).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.selector-wrapper[data-select-position="' +
												a +
												'"] input[value="' +
												o +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.selector-wrapper[data-select-position="' +
													a +
													'"] input[value="' +
													o +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.option-selector__btns input.opt-btn[value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.option-selector__btns input.opt-btn[value="' +
													o +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'input[value="' + o + '"][name="' + n + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'input[value="' + o + '"][name="' + n + '"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-form__option button[data-button="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product-form__option button[data-button="' + o + '"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.option-value-input[value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.option-value-input[value="' + o + '"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product__swatches span[data-swatch-option="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product__swatches span[data-swatch-option="' +
													o +
													'"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.pf-option-swatches  .pf-vs-radio[data-option-name="' +
												n +
												'"] input[value="' +
												o +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.pf-option-swatches  .pf-vs-radio[data-option-name="' +
													n +
													'"] input[value="' +
													o +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.option-values input.option-value-input[value="' +
												o +
												'"][data-product-option="option' +
												a +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.option-values input.option-value-input[value="' +
													o +
													'"][data-product-option="option' +
													a +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.tt-options-swatch a[data-value="' + o + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.tt-options-swatch a[data-value="' + o + '"]'
											).trigger('click'),
											document
												.querySelector(
													'.tt-options-swatch a[data-value="' + o + '"]'
												)
												.dispatchEvent(new Event('click', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.pg__option[data-index="' +
												i +
												'"] a[data-value="' +
												o +
												'"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.pg__option[data-index="' +
													i +
													'"] a[data-value="' +
													o +
													'"]'
											).trigger('click'),
											document
												.querySelector(
													'.pg__option[data-index="' +
														i +
														'"] a[data-value="' +
														o +
														'"]'
												)
												.dispatchEvent(new Event('click', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'product-form__input input[name="' +
												n +
												'"][value="' +
												o +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'product-form__input input[name="' +
													n +
													'"][value="' +
													o +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'input.form-radio[value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'input.form-radio[value="' + o + '"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-details__option-wrapper select[data-product-option="' +
												i +
												'"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product-details__option-wrapper select[data-product-option="' +
													i +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.product-details__option-wrapper select[data-product-option="' +
														i +
														'"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										void 0 !== n &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#option-' + n.toLowerCase()
											).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#option-' + n.toLowerCase()
											)
												.val(o)
												.trigger('change'),
											document
												.getElementById('option-' + n.toLowerCase())
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.select-popout__option[data-value="' + o + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.select-popout__option[data-value="' + o + '"]'
											)
												.parent()
												.trigger('click'),
											document
												.querySelector(
													'.select-popout__option[data-value="' + o + '"]'
												)
												.dispatchEvent(new Event('click', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#data-variant-option-' + i
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#data-variant-option-' + i
											)
												.val(o)
												.trigger('change'),
											setTimeout(function () {
												document
													.getElementById('data-variant-option-' + i)
													.dispatchEvent(new Event('change', { bubbles: !0 }));
											}, 500)),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'input.product-variant__input[value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'input.product-variant__input[value="' + o + '"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.variant-input input[value="' +
												o +
												'"][data-index="option' +
												a +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.variant-input input[value="' +
													o +
													'"][data-index="option' +
													a +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.radios--container .radios--input[value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.radios--container .radios--input[value="' + o + '"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.selector-wrapper li a[data-value="' + o + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.selector-wrapper li a[data-value="' + o + '"]'
											).trigger('click'),
											document
												.querySelector(
													'.selector-wrapper li a[data-value="' + o + '"]'
												)
												.dispatchEvent(new Event('click', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.single-option-selector[data-index="option' +
												a +
												'"][value="' +
												o +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.single-option-selector[data-index="option' +
													a +
													'"][value="' +
													o +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.single-option-selector[data-variant-option-index="' +
												i +
												'"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.single-option-selector[data-variant-option-index="' +
													i +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.single-option-selector[data-variant-option-index="' +
														i +
														'"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.single-option-selector[data-option="option' + a + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.single-option-selector[data-option="option' + a + '"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.single-option-selector[data-option="option' +
														a +
														'"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.pf-variant-radio input[value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.pf-variant-radio input[value="' + o + '"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.disclosure--option-link[data-value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.disclosure--option-link[data-value="' + o + '"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'variant-radios fieldset input[value="' + o + '"]'
										).length &&
											document
												.querySelector(
													'variant-radios fieldset input[value="' + o + '"]'
												)
												.click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.popout-list__option[data-value="' + o + '"]'
										).length &&
											document
												.querySelector(
													'.popout-list__option[data-value="' + o + '"]'
												)
												.click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.color-swatch__radio[data-option-position="' +
												a +
												'"][value="' +
												o +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.color-swatch__radio[data-option-position="' +
													a +
													'"][value="' +
													o +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.option-selector[data-option-number="' + a + '"]'
										).length &&
											((document.querySelectorAll(
												'.option-selector[data-option-number="' + a + '"]'
											)[0].value = o),
											document
												.querySelectorAll(
													'.option-selector[data-option-number="' + a + '"]'
												)[0]
												.dispatchEvent(new CustomEvent('change'))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-form__single-selector[data-option-position="' +
												a +
												'"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product-form__single-selector[data-option-position="' +
													a +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.product-form__single-selector[data-option-position="' +
														a +
														'"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.swatches__container[data-option-index="' +
												a +
												'"] input[value="' +
												o +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.swatches__container[data-option-index="' +
													a +
													'"] input[value="' +
													o +
													'"]'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'select.single-option-selector__radio[data-index="option' +
												a +
												'"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'select.single-option-selector__radio[data-index="option' +
													a +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'select.single-option-selector__radio[data-index="option' +
														a +
														'"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-form__input input[value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product-form__input input[value="' + o + '"]'
											).trigger('click');
									try {
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#product-' + n.toLowerCase() + '.product__variant'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#product-' + n.toLowerCase() + '.product__variant'
											)
												.val(o)
												.trigger('change'),
											document
												.getElementById('product-' + n.toLowerCase())
												.dispatchEvent(new Event('change', { bubbles: !0 })));
									} catch (t) {}
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product-form__input .select select.select__select[name="options[' +
											n +
											']"]'
									).length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-form__input .select select.select__select[name="options[' +
												n +
												']"]'
										)
											.val(o)
											.trigger('change'),
										document
											.querySelector(
												'.product-form__input .select select.select__select[name="options[' +
													n +
													']"]'
											)
											.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'select[name="options[' + n + ']"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'select[name="options[' + n + ']"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector('select[name="options[' + n + ']"]')
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.selector-wrapper[data-option-position="' + a + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.selector-wrapper[data-option-position="' +
													a +
													'"] input[value="' +
													o +
													'"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.pf-variant-select[data-key="' + n + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.pf-variant-select[data-key="' + n + '"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.pf-variant-select[data-key="' + n + '"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.pf-variant-select[data-option-name="' + n + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.pf-variant-select[data-option-name="' + n + '"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.pf-variant-select[data-option-name="' + n + '"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 })));
									try {
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#' + n + '.single-option-selector'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#' + n + '.single-option-selector'
											)
												.val(o)
												.trigger('change'),
											document
												.getElementById(n)
												.dispatchEvent(new Event('change', { bubbles: !0 })));
									} catch (t) {}
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'input[data-single-option-selector][value="' + o + '"]'
									).length &&
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'input[data-single-option-selector][value="' + o + '"]'
										).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.swatch-element input[value="' + r + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.swatch-element input[value="' + r + '"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-variants[data-product-option="' + a + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product-variants[data-product-option="' + a + '"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.product-variants[data-product-option="' + a + '"]'
												)
												.dispatchEvent(new CustomEvent('change'))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'input[name="option-' + a + '"][value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'input[name="option-' + a + '"][value="' + o + '"]'
											).trigger('click');
									try {
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.nt_select_pr_' + i
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.nt_select_pr_' +
													i +
													' li[data-value="' +
													o
														.toLowerCase()
														.replaceAll(' ', '-')
														.replaceAll('/', '-') +
													'"]'
											).trigger('click');
									} catch (t) {
										console.error(t);
									}
									jquery__WEBPACK_IMPORTED_MODULE_0___default()('#Option' + a)
										.length &&
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#Option' + a
										)
											.val(o)
											.trigger('change'),
										document
											.getElementById('Option' + a)
											.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'li[data-escape="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'li[data-escape="' + o + '"] span.swatch__value_pr'
											).click(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-form__chip-input'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product-form__chip-input[value="' + o + '"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'input[name="option-' + i + '"][value="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'input[name="option-' + i + '"][value="' + o + '"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.ColorSwatch__Radio'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'input[name="option-' + i + '"][value="' + o + '"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.selector-wrapper fieldset.single-option-radio'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'input[data-index="option' + a + '"][value="' + o + '"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.single-option-radio[data-option="option' +
												a +
												'"] input[value="' +
												o +
												'"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.single-option-radio[data-option="option' +
													a +
													'"] input[value="' +
													o +
													'"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.single-option-selector[data-option-index="' + i + '"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.single-option-selector[data-option-index="' + i + '"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.single-option-selector[data-option-index="' +
														i +
														'"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.grid__item.radio-wrapper'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.single-option-selector__radio[data-index="option' +
													a +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.single-option-selector__radio[data-index="option' +
														a +
														'"]'
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'[data-product-swatch-input]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'[name="option-' + i + '"][value="' + o + '"]'
											)
												.val('changed')
												.val(o)
												.trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-single__form .product-form__item'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#ProductSelect-option-' + i
											)
												.find('input:radio[value="' + o + '"]')
												.val('changed')
												.val(o)
												.trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.option-values .option-value-input'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.option-values'
											)
												.find(
													'.option-value-input[data-product-option="option' +
														a +
														'"][value="' +
														o +
														'"]'
												)
												.val('changed')
												.val(o)
												.trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.variant-wrapper .variant-input-wrap'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#ProductSelect-' + app.product.id + '-option-' + i
											)
												.find('input:radio[value="' + o + '"]')
												.val('changed')
												.val(o)
												.trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.variant-wrapper .variant-input-wrap'
										).find(
											'#SingleOptionSelector-' + app.product.id + '-option-' + i
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#SingleOptionSelector-' +
													app.product.id +
													'-option-' +
													i
											)
												.val(o)
												.trigger('change'),
											document
												.getElementById(
													'SingleOptionSelector-' +
														app.product.id +
														'-option-' +
														i
												)
												.dispatchEvent(new Event('change', { bubbles: !0 }))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.variant-input[data-index="option' + a + '"] input'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.variant-input[data-index="option' +
													a +
													'"] input[value="' +
													o +
													'"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'#product-content #add-to-cart .product-variant'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'#product-content #add-to-cart #selector-' + i
											)
												.find('select')
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'#product-content #add-to-cart #selector-0 select'
												)
												.dispatchEvent(new Event('change')),
											document
												.querySelector(
													'#product-content #add-to-cart #selector-1 select'
												)
												.dispatchEvent(new Event('change')),
											document
												.querySelector(
													'#product-content #add-to-cart #selector-2 select'
												)
												.dispatchEvent(new Event('change'))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.variant-group-multiple select.product-single__variants'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.variant-group-multiple select.product-single__variants[data-opnum=' +
													i +
													']'
											)
												.val(o)
												.trigger('change'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'form.shopify-product-form .select select'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'form.shopify-product-form .select select#productSelect-option-' +
													i
											)
												.val(o)
												.trigger('change'),
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'select#productSelect-option-0'
											).length &&
												document
													.querySelector('select#productSelect-option-0')
													.dispatchEvent(new Event('change')),
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'select#productSelect-option-1'
											).length &&
												document
													.querySelector('select#productSelect-option-1')
													.dispatchEvent(new Event('change')),
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'select#productSelect-option-2'
											).length &&
												document
													.querySelector('select#productSelect-option-2')
													.dispatchEvent(new Event('change'))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.form-field-select-wrapper .form-field-select[data-product-option="' +
												i +
												'"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.form-field-select-wrapper .form-field-select[data-product-option="' +
													i +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.form-field-select-wrapper .form-field-select[data-product-option="' +
														i +
														'"]'
												)
												.dispatchEvent(new Event('change'))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.form-field-select-wrapper .form-field-select[data-variant-option-index="' +
												i +
												'"]'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.form-field-select-wrapper .form-field-select[data-variant-option-index="' +
													i +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'.form-field-select-wrapper .form-field-select[data-variant-option-index="' +
														i +
														'"]'
												)
												.dispatchEvent(new Event('change'))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product-options .select-wrapper .single-option-selector'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product-options .select-wrapper .single-option-selector[data-option-index=' +
													i +
													']'
											)
												.val(o)
												.trigger('change'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.Popover__ValueList .Popover__Value'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.Popover__ValueList .Popover__Value[data-option-position=' +
													a +
													'][data-value="' +
													o +
													'"]'
											).trigger('click'),
										app.enable_mandatory &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.ProductForm .ProductForm__AddToCart'
											).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.ProductForm .ProductForm__AddToCart'
											).hide(),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.form-element-select select.form-element'
										).length &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.form-element-select select.form-element[data-product-option="option' +
													a +
													'"]'
											)
												.val(o)
												.trigger('change'),
											document
												.querySelector(
													'select.form-element[data-product-option="option1"]'
												)
												.dispatchEvent(new Event('change')),
											document
												.querySelector(
													'select.form-element[data-product-option="option2"]'
												)
												.dispatchEvent(new Event('change')),
											document
												.querySelector(
													'select.form-element[data-product-option="option3"]'
												)
												.dispatchEvent(new Event('change'))),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product__variants .form__control .single-option-selector'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product__variants .form__control .single-option-selector[name="single-option-selector-' +
													i +
													'"][value="' +
													o +
													'"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product__variants .form__control select.single-option-selector'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'select#single-option-selector-' + i
											)
												.val(o)
												.trigger('change'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.option label.option-label .option-input'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.option label.option-label .option-input[name="option-' +
													i +
													'"][value="' +
													o +
													'"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.product__swatches [data-swatch-option="' + o + '"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.product__swatches [data-swatch-option="' + o + '"]'
											).trigger('click'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.globo--option-selector'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'.globo--option-selector[data-option-number="' +
													a +
													'"]'
											)
												.val(o)
												.trigger('change'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.swatch--gl')
											.find('.name-variant')
											.text(': ' + o);
									var s = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('.globo-swatch-product-detail')
											.find('.swatch--gl'),
										l = [];
									if (
										(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(
											s,
											function (t, e) {
												var n =
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).attr(
														'data-option-index'
													);
												l[n] = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
													.find('input[type="radio"]:checked')
													.val();
											}
										),
										3 == l.length)
									) {
										if (void 0 !== l[0] && void 0 !== l[1] && void 0 !== l[2]) {
											var u = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												this
											)
												.closest('form[action="/cart/add"]')
												.find(
													'select[name="id"] option[data-option1="' +
														l[0] +
														'"][data-option2="' +
														l[1] +
														'"][data-option3="' +
														l[2] +
														'"][data-available="true"]'
												)
												.first()
												.val();
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
												.closest('form[action="/cart/add"]')
												.find('select[name="id"]')
												.val(u);
										}
									} else if (2 == l.length) {
										if (void 0 !== l[0] && void 0 !== l[1]) {
											var c = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												this
											)
												.closest('form[action="/cart/add"]')
												.find(
													'select[name="id"] option[data-option1="' +
														l[0] +
														'"][data-option2="' +
														l[1] +
														'"][data-available="true"]'
												)
												.first()
												.val();
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
												.closest('form[action="/cart/add"]')
												.find('select[name="id"]')
												.val(c);
										}
									} else if (1 == l.length && void 0 !== l[0]) {
										var _ = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('form[action="/cart/add"]')
											.find(
												'select[name="id"] option[data-option1="' +
													l[0] +
													'"][data-available="true"]'
											)
											.first()
											.val();
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.closest('form[action="/cart/add"]')
											.find('select[name="id"]')
											.val(_);
									}
									!(function (n) {
										var i = e.find('.globo-swatch-product-detail .swatch--gl');
										i.length > 1 &&
											e
												.find(
													'.globo-swatch-product-detail .swatch--gl:not([data-option-index="' +
														n +
														'"]) :radio'
												)
												.each(function () {
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
														.parent()
														.removeClass('globo-out-of-stock');
												}),
											i.each(function (e, n) {
												e =
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(n).attr(
														'data-option-index'
													);
												var r = jquery__WEBPACK_IMPORTED_MODULE_0___default()(n)
													.find('input[type="radio"]:checked')
													.val();
												void 0 !== r &&
													i.each(function (n, i) {
														(n =
															jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																i
															).attr('data-option-index')),
															e !== n &&
																jquery__WEBPACK_IMPORTED_MODULE_0___default()(i)
																	.find(':radio')
																	.each(function (i, o) {
																		for (
																			var a = !1, s = 0, l = t.length;
																			s < l;
																			s++
																		) {
																			var u = t[s];
																			!1 !== u.available &&
																				u.options[e] == r &&
																				u.options[n] ==
																					jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																						o
																					).val() &&
																				(a = !0);
																		}
																		!1 === a &&
																			jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																				o
																			)
																				.parent()
																				.not('.select-option--dropdown')
																				.addClass('globo-out-of-stock');
																	});
													});
											});
									})(i);
									var d = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
										.parents('form[action="/cart/add"]')
										.find('select[name="id"] option:selected')
										.val();
									if (
										((globoswatch.curVariant =
											globoswatch.product.variants.find(function (t) {
												return t.id == d;
											})),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.globo-swatch-detail-lists-price li'
										).each(function () {
											if (
												jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													this
												).attr('data-value') === d
											) {
												var t = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.globo-swatch-detail-lists-price li[data-value="' +
															d +
															'"] .gw-li-price'
													).html(),
													e = jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.globo-swatch-detail-lists-price li[data-value="' +
															d +
															'"] .gw-li-compareprice'
													).html();
												jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
													.parents('form[action="/cart/add"]')
													.find('.globo-cs-product_price')
													.html(t),
													void 0 !== e
														? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																this
														  )
																.parents('form[action="/cart/add"]')
																.find('.globo-cs-product_oldprice')
																.html(e)
														: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																this
														  )
																.parents('form[action="/cart/add"]')
																.find('.globo-cs-product_oldprice')
																.html('');
											}
										}),
										app.show_number_stock)
									) {
										var p = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('form[action="/cart/add"]')
											.find('select[name="id"] option:selected')
											.data('globoquantity');
										'shopify' ==
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)
											.parents('form[action="/cart/add"]')
											.find('select[name="id"] option:selected')
											.data('inventory-management')
											? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.globo-number-stock-variant'
											  ).html('Stock: only ' + p + ' left in stock')
											: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.globo-number-stock-variant'
											  ).html('');
									}
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.pf-variant-select'
									).length &&
										document
											.querySelector('.pf-variant-select')
											.dispatchEvent(new Event('change')),
										changeCurrencyApp();
									var h = document.createEvent('Event');
									h.initEvent('globo_change_variant_product_detail', !0, !0),
										document.dispatchEvent(h);
								}
							),
							window.innerWidth >= 750 &&
								app.group_image &&
								automatedVariantImageSwatch(),
							app.enable_mandatory &&
								product.variants.length > 1 &&
								(setTimeout(function () {
									if (
										(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'select#ProductSelect-product-template'
										).length
											? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form[action*="/cart/add"] select#ProductSelect-product-template'
											  )
													.prepend('<option value="">None</option>')
													.val('')
													.trigger('change')
											: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form[action*="/cart/add"]:visible:first select[name="id"]'
											  )
													.prepend('<option value="">None</option>')
													.val('')
													.trigger('change'),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'form.product-menu-form[action*="/cart/add"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'form.product-menu-form[action*="/cart/add"] select[name="id"]'
											)
												.prepend('<option value="">None</option>')
												.val('')
												.trigger('change'),
										app.curVariant.options.length)
									) {
										var t = app.curVariant.id;
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.globo-swatch-product-detail input:radio:checked'
										).length > 0 &&
											(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'select#ProductSelect-product-template'
											).length
												? jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'form[action*="/cart/add"] select#ProductSelect-product-template'
												  ).val(t)
												: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'form[action*="/cart/add"]:visible:first select[name="id"]'
												  ).val(t));
									}
								}, 1e3),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'#content #product-form li#product-add'
								).length &&
									(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'li#product-add .add-to-cart'
									).hide(),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'#content #product-form li#product-add'
									).append(
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											"<button class='action-btn accent-text add-to-cart globo-validationForm' type='button'>" +
												app.add_to_cart_text +
												'</button>'
										)
									)),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'input#addtocart-product-template[name="ajouter"]'
								).length &&
									(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'input#addtocart-product-template[name="ajouter"]'
									).hide(),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product .item .info form.shopify-product-form'
									).append(
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											"<button class='add-to-cart globo-validationForm' type='button'>" +
												app.add_to_cart_text +
												'</button>'
										)
									)),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'#product-add input#AddToCart'
								).length &&
									(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'#product-add input#AddToCart'
									).attr('style', 'display:none !important'),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form#AddToCartForm #product-add'
									).append(
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											"<button class='add globo-validationForm' type='button'>" +
												app.add_to_cart_text +
												'</button>'
										)
									)),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.ProductForm .ProductForm__AddToCart'
								).length &&
									0 ==
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'.globo-validationForm'
										).length &&
									(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.ProductForm .ProductForm__AddToCart'
									).hide(),
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										"<button id='AddToCart' class='Button Button--full Button--secondary globo-validationForm' type='button' data-action='add-to-cart'>" +
											app.add_to_cart_text +
											'</button>'
									).insertAfter('.ProductForm .ProductForm__AddToCart')),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'form[data-product-form] button[data-product-add]'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form[data-product-form] button[data-product-add]'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'form#AddToCartForm button#AddToCart'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form#AddToCartForm button#AddToCart'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'input#AddToCart-product-template'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'input#AddToCart-product-template'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.product-details-wrapper .add-to-cart input'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product-details-wrapper .add-to-cart input'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.product-add input#AddToCart'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product-add input#AddToCart'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'#product-content #add-to-cart #addToCart'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'#product-content #add-to-cart #addToCart'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.product-form-submit-wrap .add-to-cart-button'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product-form-submit-wrap .add-to-cart-button'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'form[action*="/cart/add"] button#AddToCartDesk'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form[action*="/cart/add"] button#AddToCartDesk'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.productForm-block .productForm-submit'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.productForm-block .productForm-submit'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'form.shopify-product-form button.add-to-cart'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form.shopify-product-form button.add-to-cart'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.btn-wrapper-c .add'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.btn-wrapper-c .add'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.product-submit input.add-to-cart'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product-submit input.add-to-cart'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.form-element-quantity-submit .form-element-submit-button'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.form-element-quantity-submit .form-element-submit-button'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.quantity-submit-row__submit input.button'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.quantity-submit-row__submit input.button'
									).prop('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'form#AddToCartForm .product-add input#addToCart'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'form#AddToCartForm .product-add input#addToCart'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.product__form .product__add-to-cart'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product__form .product__add-to-cart'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'#product-description form .product-add .add'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'#product-description form .product-add .add'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'.product-add input.button.product-add-available'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'.product-add input.button.product-add-available'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									'#product-area .product-details-wrapper .options .selector-wrapper .submit'
								).length &&
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(
										'#product-area .product-details-wrapper .options .selector-wrapper .submit'
									).attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
									.find(
										'[name="add"], .product-form--atc-button[data-product-atc], button.single_add_to_cart_button.ajax_form_cart, button[data-action="add-to-cart"], .globo__validation-default'
									)
									.attr('type', 'button'),
								jquery__WEBPACK_IMPORTED_MODULE_0___default()(
									selectors.btnValidationAddtocart
								).on('click', function (t) {
									var n = !0;
									jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
										.find('.globo-swatch-product-detail input:radio')
										.each(function () {
											var t =
												jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													this
												).attr('name');
											0 ==
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(e).find(
												'.globo-swatch-product-detail input:radio[name="' +
													t +
													'"]:checked'
											).length
												? (n = !1)
												: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.errorOptions[data-nameinput="' + t + '"]'
												  ).remove();
										}),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											'form[action="/cart/add.js"]'
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												'form[action="/cart/add.js"]'
											)
												.find('.globo-swatch-product-detail input:radio')
												.each(function () {
													var t =
														jquery__WEBPACK_IMPORTED_MODULE_0___default()(
															this
														).attr('name');
													0 ==
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'form[action="/cart/add.js"]'
													).find(
														'.globo-swatch-product-detail input:radio[name=' +
															t +
															']:checked'
													).length
														? (n = !1)
														: jquery__WEBPACK_IMPORTED_MODULE_0___default()(
																'.errorOptions[data-nameinput="' + t + '"]'
														  ).remove();
												}),
										jquery__WEBPACK_IMPORTED_MODULE_0___default()(
											selectors.btnValidationAddtocart
										).length &&
											jquery__WEBPACK_IMPORTED_MODULE_0___default()(
												selectors.btnValidationAddtocart
											).attr('type', 'submit'),
										n
											? (jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.errorOptions'
											  ).remove(),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e)
													.find(
														'[name="add"], .product-form--atc-button[data-product-atc], input#AddToCart-product-template, button[data-action="add-to-cart"], .globo__validation-default'
													)
													.attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.product-details-wrapper .add-to-cart input'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.product-details-wrapper .add-to-cart input'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.product-add input#AddToCart'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.product-add input#AddToCart'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'#product-content #add-to-cart #addToCart'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'#product-content #add-to-cart #addToCart'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.product-form-submit-wrap .add-to-cart-button'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.product-form-submit-wrap .add-to-cart-button'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form[action*="/cart/add"] button#AddToCartDesk'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'form[action*="/cart/add"] button#AddToCartDesk'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.productForm-block .productForm-submit'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.productForm-block .productForm-submit'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.btn-wrapper-c .add'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.btn-wrapper-c .add'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.product-submit input.add-to-cart'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.product-submit input.add-to-cart'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.form-element-quantity-submit .form-element-submit-button'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.form-element-quantity-submit .form-element-submit-button'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.quantity-submit-row__submit input.button'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.quantity-submit-row__submit input.button'
													).prop('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'form#AddToCartForm .product-add input#addToCart'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'form#AddToCartForm .product-add input#addToCart'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.product__form .product__add-to-cart'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.product__form .product__add-to-cart'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'#product-description form .product-add .add'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'#product-description form .product-add .add'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.product-add input.button.product-add-available'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.product-add input.button.product-add-available'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'#product-area .product-details-wrapper .options .selector-wrapper .submit'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'#product-area .product-details-wrapper .options .selector-wrapper .submit'
													).attr('type', 'submit'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'#content #product-form li#product-add'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'li#product-add .add-to-cart'
													).trigger('click'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'input#addtocart-product-template[name="ajouter"]'
											  ).length &&
													(jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.add-to-cart.globo-validationForm'
													).hide(),
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'input#addtocart-product-template[name="ajouter"]'
													).trigger('click')),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'#product-add input#AddToCart'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'#product-add input#AddToCart'
													).trigger('click'),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.ProductForm .ProductForm__AddToCart'
											  ).length &&
													jquery__WEBPACK_IMPORTED_MODULE_0___default()(
														'.ProductForm .ProductForm__AddToCart'
													).trigger('click'))
											: (t.preventDefault(),
											  jquery__WEBPACK_IMPORTED_MODULE_0___default()(
													'.errorOptions'
											  ).html(app.text_required));
								}));
					}
				}
			}),
			jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(
				function () {
					if (
						((window.globoswatch = new GloboSwatch(GloboSwatchConfig)),
						globoswatch.init(),
						'product' == GloboSwatchConfig.page &&
							jQuery('.g-variant-color-detail').length)
					) {
						var t = GloboSwatchConfig.curVariant.option1;
						setTimeout(function () {
							jQuery('.product-single__thumbnails.slick-initialized').length &&
								(jQuery('.product-single__thumbnail-item').removeClass('hide'),
								jQuery('.product-single__thumbnails').slick('slickUnfilter'),
								jQuery('.product-single__thumbnails').slick(
									'slickFilter',
									'.product-single__thumbnail-item[data-color="' +
										t +
										'"], .product-single__thumbnail-item[data-color="AllColors"]'
								)),
								jQuery(
									'#product-thumbnails-product-template .thumbnails.slick-initialized'
								).length &&
									(jQuery(
										'#product-thumbnails-product-template .thumbnails .thumbnail-gallery-item'
									).removeClass('hide'),
									jQuery(
										'#product-thumbnails-product-template .thumbnails'
									).slick('slickUnfilter'),
									jQuery(
										'#product-thumbnails-product-template .thumbnails'
									).slick(
										'slickFilter',
										'div[data-color="' + t + '"], div[data-color="AllColors"]'
									));
						}, 1e3),
							window.addEventListener('colorChange', function (t) {
								jQuery('.product-single__thumbnail-item').removeClass('hide'),
									jQuery('.product-single__thumbnails').slick('slickUnfilter'),
									jQuery('.product-single__thumbnails').slick(
										'slickFilter',
										'.product-single__thumbnail-item[data-color="' +
											t.detail.color +
											'"], .product-single__thumbnail-item[data-color="AllColors"]'
									);
							}),
							window.addEventListener('colorChangeFaster', function (t) {
								jQuery(
									'#product-thumbnails-product-template .thumbnails .thumbnail-gallery-item'
								).removeClass('hide'),
									jQuery(
										'#product-thumbnails-product-template .thumbnails'
									).slick('slickUnfilter'),
									jQuery(
										'#product-thumbnails-product-template .thumbnails'
									).slick(
										'slickFilter',
										'div[data-color="' +
											t.detail.color +
											'"], div[data-color="AllColors"]'
									);
							});
					}
				}
			),
			(function (t, e, n, i) {
				function r(e, n) {
					(this.settings = null),
						(this.options = t.extend({}, r.Defaults, n)),
						(this.$element = t(e)),
						(this._handlers = {}),
						(this._plugins = {}),
						(this._supress = {}),
						(this._current = null),
						(this._speed = null),
						(this._coordinates = []),
						(this._breakpoint = null),
						(this._width = null),
						(this._items = []),
						(this._clones = []),
						(this._mergers = []),
						(this._widths = []),
						(this._invalidated = {}),
						(this._pipe = []),
						(this._drag = {
							time: null,
							target: null,
							pointer: null,
							stage: { start: null, current: null },
							direction: null,
						}),
						(this._states = {
							current: {},
							tags: {
								initializing: ['busy'],
								animating: ['busy'],
								dragging: ['interacting'],
							},
						}),
						t.each(
							['onResize', 'onThrottledResize'],
							t.proxy(function (e, n) {
								this._handlers[n] = t.proxy(this[n], this);
							}, this)
						),
						t.each(
							r.Plugins,
							t.proxy(function (t, e) {
								this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
									this
								);
							}, this)
						),
						t.each(
							r.Workers,
							t.proxy(function (e, n) {
								this._pipe.push({
									filter: n.filter,
									run: t.proxy(n.run, this),
								});
							}, this)
						),
						this.setup(),
						this.initialize();
				}
				(r.Defaults = {
					items: 3,
					loop: !1,
					center: !1,
					rewind: !1,
					mouseDrag: !0,
					touchDrag: !0,
					pullDrag: !0,
					freeDrag: !1,
					margin: 0,
					stagePadding: 0,
					merge: !1,
					mergeFit: !0,
					autoWidth: !1,
					startPosition: 0,
					rtl: !1,
					smartSpeed: 250,
					fluidSpeed: !1,
					dragEndSpeed: !1,
					responsive: {},
					responsiveRefreshRate: 200,
					responsiveBaseElement: e,
					fallbackEasing: 'swing',
					info: !1,
					nestedItemSelector: !1,
					itemElement: 'div',
					stageElement: 'div',
					refreshClass: 'owl-refresh',
					loadedClass: 'owl-loaded',
					loadingClass: 'owl-loading',
					rtlClass: 'owl-rtl',
					responsiveClass: 'owl-responsive',
					dragClass: 'owl-drag',
					itemClass: 'owl-item',
					stageClass: 'owl-stage',
					stageOuterClass: 'owl-stage-outer',
					grabClass: 'owl-grab',
				}),
					(r.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
					(r.Type = { Event: 'event', State: 'state' }),
					(r.Plugins = {}),
					(r.Workers = [
						{
							filter: ['width', 'settings'],
							run: function () {
								this._width = this.$element.width();
							},
						},
						{
							filter: ['width', 'items', 'settings'],
							run: function (t) {
								t.current =
									this._items && this._items[this.relative(this._current)];
							},
						},
						{
							filter: ['items', 'settings'],
							run: function () {
								this.$stage.children('.cloned').remove();
							},
						},
						{
							filter: ['width', 'items', 'settings'],
							run: function (t) {
								var e = this.settings.margin || '',
									n = !this.settings.autoWidth,
									i = this.settings.rtl,
									r = {
										width: 'auto',
										'margin-left': i ? e : '',
										'margin-right': i ? '' : e,
									};
								!n && this.$stage.children().css(r), (t.css = r);
							},
						},
						{
							filter: ['width', 'items', 'settings'],
							run: function (t) {
								var e =
										(this.width() / this.settings.items).toFixed(3) -
										this.settings.margin,
									n = null,
									i = this._items.length,
									r = !this.settings.autoWidth,
									o = [];
								for (t.items = { merge: !1, width: e }; i--; )
									(n = this._mergers[i]),
										(n =
											(this.settings.mergeFit &&
												Math.min(n, this.settings.items)) ||
											n),
										(t.items.merge = n > 1 || t.items.merge),
										(o[i] = r ? e * n : this._items[i].width());
								this._widths = o;
							},
						},
						{
							filter: ['items', 'settings'],
							run: function () {
								var e = [],
									n = this._items,
									i = this.settings,
									r = Math.max(2 * i.items, 4),
									o = 2 * Math.ceil(n.length / 2),
									a = i.loop && n.length ? (i.rewind ? r : Math.max(r, o)) : 0,
									s = '',
									l = '';
								for (a /= 2; a--; )
									e.push(this.normalize(e.length / 2, !0)),
										(s += n[e[e.length - 1]][0].outerHTML),
										e.push(
											this.normalize(n.length - 1 - (e.length - 1) / 2, !0)
										),
										(l = n[e[e.length - 1]][0].outerHTML + l);
								(this._clones = e),
									t(s).addClass('cloned').appendTo(this.$stage),
									t(l).addClass('cloned').prependTo(this.$stage);
							},
						},
						{
							filter: ['width', 'items', 'settings'],
							run: function () {
								for (
									var t = this.settings.rtl ? 1 : -1,
										e = this._clones.length + this._items.length,
										n = -1,
										i = 0,
										r = 0,
										o = [];
									++n < e;

								)
									(i = o[n - 1] || 0),
										(r = this._widths[this.relative(n)] + this.settings.margin),
										o.push(i + r * t);
								this._coordinates = o;
							},
						},
						{
							filter: ['width', 'items', 'settings'],
							run: function () {
								var t = this.settings.stagePadding,
									e = this._coordinates,
									n = {
										width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
										'padding-left': t || '',
										'padding-right': t || '',
									};
								this.$stage.css(n);
							},
						},
						{
							filter: ['width', 'items', 'settings'],
							run: function (t) {
								var e = this._coordinates.length,
									n = !this.settings.autoWidth,
									i = this.$stage.children();
								if (n && t.items.merge)
									for (; e--; )
										(t.css.width = this._widths[this.relative(e)]),
											i.eq(e).css(t.css);
								else n && ((t.css.width = t.items.width), i.css(t.css));
							},
						},
						{
							filter: ['items'],
							run: function () {
								this._coordinates.length < 1 && this.$stage.removeAttr('style');
							},
						},
						{
							filter: ['width', 'items', 'settings'],
							run: function (t) {
								(t.current = t.current
									? this.$stage.children().index(t.current)
									: 0),
									(t.current = Math.max(
										this.minimum(),
										Math.min(this.maximum(), t.current)
									)),
									this.reset(t.current);
							},
						},
						{
							filter: ['position'],
							run: function () {
								this.animate(this.coordinates(this._current));
							},
						},
						{
							filter: ['width', 'position', 'items', 'settings'],
							run: function () {
								var t,
									e,
									n,
									i,
									r = this.settings.rtl ? 1 : -1,
									o = 2 * this.settings.stagePadding,
									a = this.coordinates(this.current()) + o,
									s = a + this.width() * r,
									l = [];
								for (n = 0, i = this._coordinates.length; n < i; n++)
									(t = this._coordinates[n - 1] || 0),
										(e = Math.abs(this._coordinates[n]) + o * r),
										((this.op(t, '<=', a) && this.op(t, '>', s)) ||
											(this.op(e, '<', a) && this.op(e, '>', s))) &&
											l.push(n);
								this.$stage.children('.active').removeClass('active'),
									this.$stage
										.children(':eq(' + l.join('), :eq(') + ')')
										.addClass('active'),
									this.settings.center &&
										(this.$stage.children('.center').removeClass('center'),
										this.$stage
											.children()
											.eq(this.current())
											.addClass('center'));
							},
						},
					]),
					(r.prototype.initialize = function () {
						var e, n, i;
						this.enter('initializing'),
							this.trigger('initialize'),
							this.$element.toggleClass(
								this.settings.rtlClass,
								this.settings.rtl
							),
							this.settings.autoWidth &&
								!this.is('pre-loading') &&
								((e = this.$element.find('img')),
								(n = this.settings.nestedItemSelector
									? '.' + this.settings.nestedItemSelector
									: void 0),
								(i = this.$element.children(n).width()),
								e.length && i <= 0 && this.preloadAutoWidthImages(e)),
							this.$element.addClass(this.options.loadingClass),
							(this.$stage = t(
								'<' +
									this.settings.stageElement +
									' class="' +
									this.settings.stageClass +
									'"/>'
							).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
							this.$element.append(this.$stage.parent()),
							this.replace(this.$element.children().not(this.$stage.parent())),
							this.$element.is(':visible')
								? this.refresh()
								: this.invalidate('width'),
							this.$element
								.removeClass(this.options.loadingClass)
								.addClass(this.options.loadedClass),
							this.registerEventHandlers(),
							this.leave('initializing'),
							this.trigger('initialized');
					}),
					(r.prototype.setup = function () {
						var e = this.viewport(),
							n = this.options.responsive,
							i = -1,
							r = null;
						n
							? (t.each(n, function (t) {
									t <= e && t > i && (i = Number(t));
							  }),
							  'function' ==
									typeof (r = t.extend({}, this.options, n[i])).stagePadding &&
									(r.stagePadding = r.stagePadding()),
							  delete r.responsive,
							  r.responsiveClass &&
									this.$element.attr(
										'class',
										this.$element
											.attr('class')
											.replace(
												new RegExp(
													'(' + this.options.responsiveClass + '-)\\S+\\s',
													'g'
												),
												'$1' + i
											)
									))
							: (r = t.extend({}, this.options)),
							this.trigger('change', {
								property: { name: 'settings', value: r },
							}),
							(this._breakpoint = i),
							(this.settings = r),
							this.invalidate('settings'),
							this.trigger('changed', {
								property: { name: 'settings', value: this.settings },
							});
					}),
					(r.prototype.optionsLogic = function () {
						this.settings.autoWidth &&
							((this.settings.stagePadding = !1), (this.settings.merge = !1));
					}),
					(r.prototype.prepare = function (e) {
						var n = this.trigger('prepare', { content: e });
						return (
							n.data ||
								(n.data = t('<' + this.settings.itemElement + '/>')
									.addClass(this.options.itemClass)
									.append(e)),
							this.trigger('prepared', { content: n.data }),
							n.data
						);
					}),
					(r.prototype.update = function () {
						for (
							var e = 0,
								n = this._pipe.length,
								i = t.proxy(function (t) {
									return this[t];
								}, this._invalidated),
								r = {};
							e < n;

						)
							(this._invalidated.all ||
								t.grep(this._pipe[e].filter, i).length > 0) &&
								this._pipe[e].run(r),
								e++;
						(this._invalidated = {}), !this.is('valid') && this.enter('valid');
					}),
					(r.prototype.width = function (t) {
						switch ((t = t || r.Width.Default)) {
							case r.Width.Inner:
							case r.Width.Outer:
								return this._width;
							default:
								return (
									this._width -
									2 * this.settings.stagePadding +
									this.settings.margin
								);
						}
					}),
					(r.prototype.refresh = function () {
						this.enter('refreshing'),
							this.trigger('refresh'),
							this.setup(),
							this.optionsLogic(),
							this.$element.addClass(this.options.refreshClass),
							this.update(),
							this.$element.removeClass(this.options.refreshClass),
							this.leave('refreshing'),
							this.trigger('refreshed');
					}),
					(r.prototype.onThrottledResize = function () {
						e.clearTimeout(this.resizeTimer),
							(this.resizeTimer = e.setTimeout(
								this._handlers.onResize,
								this.settings.responsiveRefreshRate
							));
					}),
					(r.prototype.onResize = function () {
						return (
							!!this._items.length &&
							this._width !== this.$element.width() &&
							!!this.$element.is(':visible') &&
							(this.enter('resizing'),
							this.trigger('resize').isDefaultPrevented()
								? (this.leave('resizing'), !1)
								: (this.invalidate('width'),
								  this.refresh(),
								  this.leave('resizing'),
								  void this.trigger('resized')))
						);
					}),
					(r.prototype.registerEventHandlers = function () {
						t.support.transition &&
							this.$stage.on(
								t.support.transition.end + '.owl.core',
								t.proxy(this.onTransitionEnd, this)
							),
							!1 !== this.settings.responsive &&
								this.on(e, 'resize', this._handlers.onThrottledResize),
							this.settings.mouseDrag &&
								(this.$element.addClass(this.options.dragClass),
								this.$stage.on(
									'mousedown.owl.core',
									t.proxy(this.onDragStart, this)
								),
								this.$stage.on(
									'dragstart.owl.core selectstart.owl.core',
									function () {
										return !1;
									}
								)),
							this.settings.touchDrag &&
								(this.$stage.on(
									'touchstart.owl.core',
									t.proxy(this.onDragStart, this)
								),
								this.$stage.on(
									'touchcancel.owl.core',
									t.proxy(this.onDragEnd, this)
								));
					}),
					(r.prototype.onDragStart = function (e) {
						var i = null;
						3 !== e.which &&
							(t.support.transform
								? (i = {
										x: (i = this.$stage
											.css('transform')
											.replace(/.*\(|\)| /g, '')
											.split(','))[16 === i.length ? 12 : 4],
										y: i[16 === i.length ? 13 : 5],
								  })
								: ((i = this.$stage.position()),
								  (i = {
										x: this.settings.rtl
											? i.left +
											  this.$stage.width() -
											  this.width() +
											  this.settings.margin
											: i.left,
										y: i.top,
								  })),
							this.is('animating') &&
								(t.support.transform ? this.animate(i.x) : this.$stage.stop(),
								this.invalidate('position')),
							this.$element.toggleClass(
								this.options.grabClass,
								'mousedown' === e.type
							),
							this.speed(0),
							(this._drag.time = new Date().getTime()),
							(this._drag.target = t(e.target)),
							(this._drag.stage.start = i),
							(this._drag.stage.current = i),
							(this._drag.pointer = this.pointer(e)),
							t(n).on(
								'mouseup.owl.core touchend.owl.core',
								t.proxy(this.onDragEnd, this)
							),
							t(n).one(
								'mousemove.owl.core touchmove.owl.core',
								t.proxy(function (e) {
									var i = this.difference(this._drag.pointer, this.pointer(e));
									t(n).on(
										'mousemove.owl.core touchmove.owl.core',
										t.proxy(this.onDragMove, this)
									),
										(Math.abs(i.x) < Math.abs(i.y) && this.is('valid')) ||
											(e.preventDefault(),
											this.enter('dragging'),
											this.trigger('drag'));
								}, this)
							));
					}),
					(r.prototype.onDragMove = function (t) {
						var e = null,
							n = null,
							i = null,
							r = this.difference(this._drag.pointer, this.pointer(t)),
							o = this.difference(this._drag.stage.start, r);
						this.is('dragging') &&
							(t.preventDefault(),
							this.settings.loop
								? ((e = this.coordinates(this.minimum())),
								  (n = this.coordinates(this.maximum() + 1) - e),
								  (o.x = ((((o.x - e) % n) + n) % n) + e))
								: ((e = this.settings.rtl
										? this.coordinates(this.maximum())
										: this.coordinates(this.minimum())),
								  (n = this.settings.rtl
										? this.coordinates(this.minimum())
										: this.coordinates(this.maximum())),
								  (i = this.settings.pullDrag ? (-1 * r.x) / 5 : 0),
								  (o.x = Math.max(Math.min(o.x, e + i), n + i))),
							(this._drag.stage.current = o),
							this.animate(o.x));
					}),
					(r.prototype.onDragEnd = function (e) {
						var i = this.difference(this._drag.pointer, this.pointer(e)),
							r = this._drag.stage.current,
							o = (i.x > 0) ^ this.settings.rtl ? 'left' : 'right';
						t(n).off('.owl.core'),
							this.$element.removeClass(this.options.grabClass),
							((0 !== i.x && this.is('dragging')) || !this.is('valid')) &&
								(this.speed(
									this.settings.dragEndSpeed || this.settings.smartSpeed
								),
								this.current(
									this.closest(r.x, 0 !== i.x ? o : this._drag.direction)
								),
								this.invalidate('position'),
								this.update(),
								(this._drag.direction = o),
								(Math.abs(i.x) > 3 ||
									new Date().getTime() - this._drag.time > 300) &&
									this._drag.target.one('click.owl.core', function () {
										return !1;
									})),
							this.is('dragging') &&
								(this.leave('dragging'), this.trigger('dragged'));
					}),
					(r.prototype.closest = function (e, n) {
						var i = -1,
							r = this.width(),
							o = this.coordinates();
						return (
							this.settings.freeDrag ||
								t.each(
									o,
									t.proxy(function (t, a) {
										return (
											'left' === n && e > a - 30 && e < a + 30
												? (i = t)
												: 'right' === n && e > a - r - 30 && e < a - r + 30
												? (i = t + 1)
												: this.op(e, '<', a) &&
												  this.op(e, '>', o[t + 1] || a - r) &&
												  (i = 'left' === n ? t + 1 : t),
											-1 === i
										);
									}, this)
								),
							this.settings.loop ||
								(this.op(e, '>', o[this.minimum()])
									? (i = e = this.minimum())
									: this.op(e, '<', o[this.maximum()]) &&
									  (i = e = this.maximum())),
							i
						);
					}),
					(r.prototype.animate = function (e) {
						var n = this.speed() > 0;
						this.is('animating') && this.onTransitionEnd(),
							n && (this.enter('animating'), this.trigger('translate')),
							t.support.transform3d && t.support.transition
								? this.$stage.css({
										transform: 'translate3d(' + e + 'px,0px,0px)',
										transition: this.speed() / 1e3 + 's',
								  })
								: n
								? this.$stage.animate(
										{ left: e + 'px' },
										this.speed(),
										this.settings.fallbackEasing,
										t.proxy(this.onTransitionEnd, this)
								  )
								: this.$stage.css({ left: e + 'px' });
					}),
					(r.prototype.is = function (t) {
						return this._states.current[t] && this._states.current[t] > 0;
					}),
					(r.prototype.current = function (t) {
						if (void 0 === t) return this._current;
						if (0 !== this._items.length) {
							if (((t = this.normalize(t)), this._current !== t)) {
								var e = this.trigger('change', {
									property: { name: 'position', value: t },
								});
								void 0 !== e.data && (t = this.normalize(e.data)),
									(this._current = t),
									this.invalidate('position'),
									this.trigger('changed', {
										property: { name: 'position', value: this._current },
									});
							}
							return this._current;
						}
					}),
					(r.prototype.invalidate = function (e) {
						return (
							'string' === t.type(e) &&
								((this._invalidated[e] = !0),
								this.is('valid') && this.leave('valid')),
							t.map(this._invalidated, function (t, e) {
								return e;
							})
						);
					}),
					(r.prototype.reset = function (t) {
						void 0 !== (t = this.normalize(t)) &&
							((this._speed = 0),
							(this._current = t),
							this.suppress(['translate', 'translated']),
							this.animate(this.coordinates(t)),
							this.release(['translate', 'translated']));
					}),
					(r.prototype.normalize = function (t, e) {
						var n = this._items.length,
							i = e ? 0 : this._clones.length;
						return (
							!this.isNumeric(t) || n < 1
								? (t = void 0)
								: (t < 0 || t >= n + i) &&
								  (t = ((((t - i / 2) % n) + n) % n) + i / 2),
							t
						);
					}),
					(r.prototype.relative = function (t) {
						return (t -= this._clones.length / 2), this.normalize(t, !0);
					}),
					(r.prototype.maximum = function (t) {
						var e,
							n,
							i,
							r = this.settings,
							o = this._coordinates.length;
						if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
						else if (r.autoWidth || r.merge) {
							for (
								e = this._items.length,
									n = this._items[--e].width(),
									i = this.$element.width();
								e-- &&
								!((n += this._items[e].width() + this.settings.margin) > i);

							);
							o = e + 1;
						} else
							o = r.center
								? this._items.length - 1
								: this._items.length - r.items;
						return t && (o -= this._clones.length / 2), Math.max(o, 0);
					}),
					(r.prototype.minimum = function (t) {
						return t ? 0 : this._clones.length / 2;
					}),
					(r.prototype.items = function (t) {
						return void 0 === t
							? this._items.slice()
							: ((t = this.normalize(t, !0)), this._items[t]);
					}),
					(r.prototype.mergers = function (t) {
						return void 0 === t
							? this._mergers.slice()
							: ((t = this.normalize(t, !0)), this._mergers[t]);
					}),
					(r.prototype.clones = function (e) {
						var n = this._clones.length / 2,
							i = n + this._items.length,
							r = function (t) {
								return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2;
							};
						return void 0 === e
							? t.map(this._clones, function (t, e) {
									return r(e);
							  })
							: t.map(this._clones, function (t, n) {
									return t === e ? r(n) : null;
							  });
					}),
					(r.prototype.speed = function (t) {
						return void 0 !== t && (this._speed = t), this._speed;
					}),
					(r.prototype.coordinates = function (e) {
						var n,
							i = 1,
							r = e - 1;
						return void 0 === e
							? t.map(
									this._coordinates,
									t.proxy(function (t, e) {
										return this.coordinates(e);
									}, this)
							  )
							: (this.settings.center
									? (this.settings.rtl && ((i = -1), (r = e + 1)),
									  (n = this._coordinates[e]),
									  (n +=
											((this.width() - n + (this._coordinates[r] || 0)) / 2) *
											i))
									: (n = this._coordinates[r] || 0),
							  (n = Math.ceil(n)));
					}),
					(r.prototype.duration = function (t, e, n) {
						return 0 === n
							? 0
							: Math.min(Math.max(Math.abs(e - t), 1), 6) *
									Math.abs(n || this.settings.smartSpeed);
					}),
					(r.prototype.to = function (t, e) {
						var n = this.current(),
							i = null,
							r = t - this.relative(n),
							o = (r > 0) - (r < 0),
							a = this._items.length,
							s = this.minimum(),
							l = this.maximum();
						this.settings.loop
							? (!this.settings.rewind &&
									Math.abs(r) > a / 2 &&
									(r += -1 * o * a),
							  (i = (((((t = n + r) - s) % a) + a) % a) + s) !== t &&
									i - r <= l &&
									i - r > 0 &&
									((n = i - r), (t = i), this.reset(n)))
							: (t = this.settings.rewind
									? ((t % (l += 1)) + l) % l
									: Math.max(s, Math.min(l, t))),
							this.speed(this.duration(n, t, e)),
							this.current(t),
							this.$element.is(':visible') && this.update();
					}),
					(r.prototype.next = function (t) {
						(t = t || !1), this.to(this.relative(this.current()) + 1, t);
					}),
					(r.prototype.prev = function (t) {
						(t = t || !1), this.to(this.relative(this.current()) - 1, t);
					}),
					(r.prototype.onTransitionEnd = function (t) {
						if (
							void 0 !== t &&
							(t.stopPropagation(),
							(t.target || t.srcElement || t.originalTarget) !==
								this.$stage.get(0))
						)
							return !1;
						this.leave('animating'), this.trigger('translated');
					}),
					(r.prototype.viewport = function () {
						var i;
						return (
							this.options.responsiveBaseElement !== e
								? (i = t(this.options.responsiveBaseElement).width())
								: e.innerWidth
								? (i = e.innerWidth)
								: n.documentElement && n.documentElement.clientWidth
								? (i = n.documentElement.clientWidth)
								: console.warn('Can not detect viewport width.'),
							i
						);
					}),
					(r.prototype.replace = function (e) {
						this.$stage.empty(),
							(this._items = []),
							e && (e = e instanceof jQuery ? e : t(e)),
							this.settings.nestedItemSelector &&
								(e = e.find('.' + this.settings.nestedItemSelector)),
							e
								.filter(function () {
									return 1 === this.nodeType;
								})
								.each(
									t.proxy(function (t, e) {
										(e = this.prepare(e)),
											this.$stage.append(e),
											this._items.push(e),
											this._mergers.push(
												1 *
													e
														.find('[data-merge]')
														.addBack('[data-merge]')
														.attr('data-merge') || 1
											);
									}, this)
								),
							this.reset(
								this.isNumeric(this.settings.startPosition)
									? this.settings.startPosition
									: 0
							),
							this.invalidate('items');
					}),
					(r.prototype.add = function (e, n) {
						var i = this.relative(this._current);
						(n = void 0 === n ? this._items.length : this.normalize(n, !0)),
							(e = e instanceof jQuery ? e : t(e)),
							this.trigger('add', { content: e, position: n }),
							(e = this.prepare(e)),
							0 === this._items.length || n === this._items.length
								? (0 === this._items.length && this.$stage.append(e),
								  0 !== this._items.length && this._items[n - 1].after(e),
								  this._items.push(e),
								  this._mergers.push(
										1 *
											e
												.find('[data-merge]')
												.addBack('[data-merge]')
												.attr('data-merge') || 1
								  ))
								: (this._items[n].before(e),
								  this._items.splice(n, 0, e),
								  this._mergers.splice(
										n,
										0,
										1 *
											e
												.find('[data-merge]')
												.addBack('[data-merge]')
												.attr('data-merge') || 1
								  )),
							this._items[i] && this.reset(this._items[i].index()),
							this.invalidate('items'),
							this.trigger('added', { content: e, position: n });
					}),
					(r.prototype.remove = function (t) {
						void 0 !== (t = this.normalize(t, !0)) &&
							(this.trigger('remove', { content: this._items[t], position: t }),
							this._items[t].remove(),
							this._items.splice(t, 1),
							this._mergers.splice(t, 1),
							this.invalidate('items'),
							this.trigger('removed', { content: null, position: t }));
					}),
					(r.prototype.preloadAutoWidthImages = function (e) {
						e.each(
							t.proxy(function (e, n) {
								this.enter('pre-loading'),
									(n = t(n)),
									t(new Image())
										.one(
											'load',
											t.proxy(function (t) {
												n.attr('src', t.target.src),
													n.css('opacity', 1),
													this.leave('pre-loading'),
													!this.is('pre-loading') &&
														!this.is('initializing') &&
														this.refresh();
											}, this)
										)
										.attr(
											'src',
											n.attr('src') ||
												n.attr('data-src') ||
												n.attr('data-src-retina')
										);
							}, this)
						);
					}),
					(r.prototype.destroy = function () {
						for (var i in (this.$element.off('.owl.core'),
						this.$stage.off('.owl.core'),
						t(n).off('.owl.core'),
						!1 !== this.settings.responsive &&
							(e.clearTimeout(this.resizeTimer),
							this.off(e, 'resize', this._handlers.onThrottledResize)),
						this._plugins))
							this._plugins[i].destroy();
						this.$stage.children('.cloned').remove(),
							this.$stage.unwrap(),
							this.$stage.children().contents().unwrap(),
							this.$stage.children().unwrap(),
							this.$element
								.removeClass(this.options.refreshClass)
								.removeClass(this.options.loadingClass)
								.removeClass(this.options.loadedClass)
								.removeClass(this.options.rtlClass)
								.removeClass(this.options.dragClass)
								.removeClass(this.options.grabClass)
								.attr(
									'class',
									this.$element
										.attr('class')
										.replace(
											new RegExp(
												this.options.responsiveClass + '-\\S+\\s',
												'g'
											),
											''
										)
								)
								.removeData('owl.carousel');
					}),
					(r.prototype.op = function (t, e, n) {
						var i = this.settings.rtl;
						switch (e) {
							case '<':
								return i ? t > n : t < n;
							case '>':
								return i ? t < n : t > n;
							case '>=':
								return i ? t <= n : t >= n;
							case '<=':
								return i ? t >= n : t <= n;
						}
					}),
					(r.prototype.on = function (t, e, n, i) {
						t.addEventListener
							? t.addEventListener(e, n, i)
							: t.attachEvent && t.attachEvent('on' + e, n);
					}),
					(r.prototype.off = function (t, e, n, i) {
						t.removeEventListener
							? t.removeEventListener(e, n, i)
							: t.detachEvent && t.detachEvent('on' + e, n);
					}),
					(r.prototype.trigger = function (e, n, i, o, a) {
						var s = {
								item: { count: this._items.length, index: this.current() },
							},
							l = t.camelCase(
								t
									.grep(['on', e, i], function (t) {
										return t;
									})
									.join('-')
									.toLowerCase()
							),
							u = t.Event(
								[e, 'owl', i || 'carousel'].join('.').toLowerCase(),
								t.extend({ relatedTarget: this }, s, n)
							);
						return (
							this._supress[e] ||
								(t.each(this._plugins, function (t, e) {
									e.onTrigger && e.onTrigger(u);
								}),
								this.register({ type: r.Type.Event, name: e }),
								this.$element.trigger(u),
								this.settings &&
									'function' == typeof this.settings[l] &&
									this.settings[l].call(this, u)),
							u
						);
					}),
					(r.prototype.enter = function (e) {
						t.each(
							[e].concat(this._states.tags[e] || []),
							t.proxy(function (t, e) {
								void 0 === this._states.current[e] &&
									(this._states.current[e] = 0),
									this._states.current[e]++;
							}, this)
						);
					}),
					(r.prototype.leave = function (e) {
						t.each(
							[e].concat(this._states.tags[e] || []),
							t.proxy(function (t, e) {
								this._states.current[e]--;
							}, this)
						);
					}),
					(r.prototype.register = function (e) {
						if (e.type === r.Type.Event) {
							if (
								(t.event.special[e.name] || (t.event.special[e.name] = {}),
								!t.event.special[e.name].owl)
							) {
								var n = t.event.special[e.name]._default;
								(t.event.special[e.name]._default = function (t) {
									return !n ||
										!n.apply ||
										(t.namespace && -1 !== t.namespace.indexOf('owl'))
										? t.namespace && t.namespace.indexOf('owl') > -1
										: n.apply(this, arguments);
								}),
									(t.event.special[e.name].owl = !0);
							}
						} else
							e.type === r.Type.State &&
								(this._states.tags[e.name]
									? (this._states.tags[e.name] = this._states.tags[
											e.name
									  ].concat(e.tags))
									: (this._states.tags[e.name] = e.tags),
								(this._states.tags[e.name] = t.grep(
									this._states.tags[e.name],
									t.proxy(function (n, i) {
										return t.inArray(n, this._states.tags[e.name]) === i;
									}, this)
								)));
					}),
					(r.prototype.suppress = function (e) {
						t.each(
							e,
							t.proxy(function (t, e) {
								this._supress[e] = !0;
							}, this)
						);
					}),
					(r.prototype.release = function (e) {
						t.each(
							e,
							t.proxy(function (t, e) {
								delete this._supress[e];
							}, this)
						);
					}),
					(r.prototype.pointer = function (t) {
						var n = { x: null, y: null };
						return (
							(t =
								(t = t.originalEvent || t || e.event).touches &&
								t.touches.length
									? t.touches[0]
									: t.changedTouches && t.changedTouches.length
									? t.changedTouches[0]
									: t).pageX
								? ((n.x = t.pageX), (n.y = t.pageY))
								: ((n.x = t.clientX), (n.y = t.clientY)),
							n
						);
					}),
					(r.prototype.isNumeric = function (t) {
						return !isNaN(parseFloat(t));
					}),
					(r.prototype.difference = function (t, e) {
						return { x: t.x - e.x, y: t.y - e.y };
					}),
					(t.fn.owlCarousel = function (e) {
						var n = Array.prototype.slice.call(arguments, 1);
						return this.each(function () {
							var i = t(this),
								o = i.data('owl.carousel');
							o ||
								((o = new r(this, 'object' == _typeof(e) && e)),
								i.data('owl.carousel', o),
								t.each(
									[
										'next',
										'prev',
										'to',
										'destroy',
										'refresh',
										'replace',
										'add',
										'remove',
									],
									function (e, n) {
										o.register({ type: r.Type.Event, name: n }),
											o.$element.on(
												n + '.owl.carousel.core',
												t.proxy(function (t) {
													t.namespace &&
														t.relatedTarget !== this &&
														(this.suppress([n]),
														o[n].apply(this, [].slice.call(arguments, 1)),
														this.release([n]));
												}, o)
											);
									}
								)),
								'string' == typeof e && '_' !== e.charAt(0) && o[e].apply(o, n);
						});
					}),
					(t.fn.owlCarousel.Constructor = r);
			})(window.Zepto || window.jQuery, window, document),
			(t = window.Zepto || window.jQuery),
			(e = window),
			document,
			(n = function e(n) {
				(this._core = n),
					(this._interval = null),
					(this._visible = null),
					(this._handlers = {
						'initialized.owl.carousel': t.proxy(function (t) {
							t.namespace && this._core.settings.autoRefresh && this.watch();
						}, this),
					}),
					(this._core.options = t.extend({}, e.Defaults, this._core.options)),
					this._core.$element.on(this._handlers);
			}),
			(n.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
			(n.prototype.watch = function () {
				this._interval ||
					((this._visible = this._core.$element.is(':visible')),
					(this._interval = e.setInterval(
						t.proxy(this.refresh, this),
						this._core.settings.autoRefreshInterval
					)));
			}),
			(n.prototype.refresh = function () {
				this._core.$element.is(':visible') !== this._visible &&
					((this._visible = !this._visible),
					this._core.$element.toggleClass('owl-hidden', !this._visible),
					this._visible &&
						this._core.invalidate('width') &&
						this._core.refresh());
			}),
			(n.prototype.destroy = function () {
				var t, n;
				for (t in (e.clearInterval(this._interval), this._handlers))
					this._core.$element.off(t, this._handlers[t]);
				for (n in Object.getOwnPropertyNames(this))
					'function' != typeof this[n] && (this[n] = null);
			}),
			(t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n),
			(function (t, e, n, i) {
				var r = function e(n) {
					(this._core = n),
						(this._loaded = []),
						(this._handlers = {
							'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
								t.proxy(function (e) {
									if (
										e.namespace &&
										this._core.settings &&
										this._core.settings.lazyLoad &&
										((e.property && 'position' == e.property.name) ||
											'initialized' == e.type)
									)
										for (
											var n = this._core.settings,
												i = (n.center && Math.ceil(n.items / 2)) || n.items,
												r = (n.center && -1 * i) || 0,
												o =
													(e.property && void 0 !== e.property.value
														? e.property.value
														: this._core.current()) + r,
												a = this._core.clones().length,
												s = t.proxy(function (t, e) {
													this.load(e);
												}, this);
											r++ < i;

										)
											this.load(a / 2 + this._core.relative(o)),
												a &&
													t.each(this._core.clones(this._core.relative(o)), s),
												o++;
								}, this),
						}),
						(this._core.options = t.extend({}, e.Defaults, this._core.options)),
						this._core.$element.on(this._handlers);
				};
				(r.Defaults = { lazyLoad: !1 }),
					(r.prototype.load = function (n) {
						var i = this._core.$stage.children().eq(n),
							r = i && i.find('.owl-lazy');
						!r ||
							t.inArray(i.get(0), this._loaded) > -1 ||
							(r.each(
								t.proxy(function (n, i) {
									var r,
										o = t(i),
										a =
											(e.devicePixelRatio > 1 && o.attr('data-src-retina')) ||
											o.attr('data-src');
									this._core.trigger('load', { element: o, url: a }, 'lazy'),
										o.is('img')
											? o
													.one(
														'load.owl.lazy',
														t.proxy(function () {
															o.css('opacity', 1),
																this._core.trigger(
																	'loaded',
																	{ element: o, url: a },
																	'lazy'
																);
														}, this)
													)
													.attr('src', a)
											: (((r = new Image()).onload = t.proxy(function () {
													o.css({
														'background-image': 'url("' + a + '")',
														opacity: '1',
													}),
														this._core.trigger(
															'loaded',
															{ element: o, url: a },
															'lazy'
														);
											  }, this)),
											  (r.src = a));
								}, this)
							),
							this._loaded.push(i.get(0)));
					}),
					(r.prototype.destroy = function () {
						var t, e;
						for (t in this.handlers)
							this._core.$element.off(t, this.handlers[t]);
						for (e in Object.getOwnPropertyNames(this))
							'function' != typeof this[e] && (this[e] = null);
					}),
					(t.fn.owlCarousel.Constructor.Plugins.Lazy = r);
			})(window.Zepto || window.jQuery, window, document),
			(function (t, e, n, i) {
				var r = function e(n) {
					(this._core = n),
						(this._handlers = {
							'initialized.owl.carousel refreshed.owl.carousel': t.proxy(
								function (t) {
									t.namespace &&
										this._core.settings.autoHeight &&
										this.update();
								},
								this
							),
							'changed.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this._core.settings.autoHeight &&
									'position' == t.property.name &&
									this.update();
							}, this),
							'loaded.owl.lazy': t.proxy(function (t) {
								t.namespace &&
									this._core.settings.autoHeight &&
									t.element
										.closest('.' + this._core.settings.itemClass)
										.index() === this._core.current() &&
									this.update();
							}, this),
						}),
						(this._core.options = t.extend({}, e.Defaults, this._core.options)),
						this._core.$element.on(this._handlers);
				};
				(r.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
					(r.prototype.update = function () {
						var e,
							n = this._core._current,
							i = n + this._core.settings.items,
							r = this._core.$stage.children().toArray().slice(n, i),
							o = [];
						t.each(r, function (e, n) {
							o.push(t(n).height());
						}),
							(e = Math.max.apply(null, o)),
							this._core.$stage
								.parent()
								.height(e)
								.addClass(this._core.settings.autoHeightClass);
					}),
					(r.prototype.destroy = function () {
						var t, e;
						for (t in this._handlers)
							this._core.$element.off(t, this._handlers[t]);
						for (e in Object.getOwnPropertyNames(this))
							'function' != typeof this[e] && (this[e] = null);
					}),
					(t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r);
			})(window.Zepto || window.jQuery, window, document),
			(function (t, e, n, i) {
				var r = function e(n) {
					(this._core = n),
						(this._videos = {}),
						(this._playing = null),
						(this._handlers = {
							'initialized.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this._core.register({
										type: 'state',
										name: 'playing',
										tags: ['interacting'],
									});
							}, this),
							'resize.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this._core.settings.video &&
									this.isInFullScreen() &&
									t.preventDefault();
							}, this),
							'refreshed.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this._core.is('resizing') &&
									this._core.$stage.find('.cloned .owl-video-frame').remove();
							}, this),
							'changed.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									'position' === t.property.name &&
									this._playing &&
									this.stop();
							}, this),
							'prepared.owl.carousel': t.proxy(function (e) {
								if (e.namespace) {
									var n = t(e.content).find('.owl-video');
									n.length &&
										(n.css('display', 'none'), this.fetch(n, t(e.content)));
								}
							}, this),
						}),
						(this._core.options = t.extend({}, e.Defaults, this._core.options)),
						this._core.$element.on(this._handlers),
						this._core.$element.on(
							'click.owl.video',
							'.owl-video-play-icon',
							t.proxy(function (t) {
								this.play(t);
							}, this)
						);
				};
				(r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
					(r.prototype.fetch = function (t, e) {
						var n = t.attr('data-vimeo-id')
								? 'vimeo'
								: t.attr('data-vzaar-id')
								? 'vzaar'
								: 'youtube',
							i =
								t.attr('data-vimeo-id') ||
								t.attr('data-youtube-id') ||
								t.attr('data-vzaar-id'),
							r = t.attr('data-width') || this._core.settings.videoWidth,
							o = t.attr('data-height') || this._core.settings.videoHeight,
							a = t.attr('href');
						if (!a) throw new Error('Missing video URL.');
						if (
							(i = a.match(
								/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
							))[3].indexOf('youtu') > -1
						)
							n = 'youtube';
						else if (i[3].indexOf('vimeo') > -1) n = 'vimeo';
						else {
							if (!(i[3].indexOf('vzaar') > -1))
								throw new Error('Video URL not supported.');
							n = 'vzaar';
						}
						(i = i[6]),
							(this._videos[a] = { type: n, id: i, width: r, height: o }),
							e.attr('data-video', a),
							this.thumbnail(t, this._videos[a]);
					}),
					(r.prototype.thumbnail = function (e, n) {
						var i,
							r,
							o =
								n.width && n.height
									? 'style="width:' + n.width + 'px;height:' + n.height + 'px;"'
									: '',
							a = e.find('img'),
							s = 'src',
							l = '',
							u = this._core.settings,
							c = function (t) {
								(i = u.lazyLoad
									? '<div class="owl-video-tn ' +
									  l +
									  '" ' +
									  s +
									  '="' +
									  t +
									  '"></div>'
									: '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
									  t +
									  ')"></div>'),
									e.after(i),
									e.after('<div class="owl-video-play-icon"></div>');
							};
						if (
							(e.wrap('<div class="owl-video-wrapper"' + o + '></div>'),
							this._core.settings.lazyLoad &&
								((s = 'data-src'), (l = 'owl-lazy')),
							a.length)
						)
							return c(a.attr(s)), a.remove(), !1;
						'youtube' === n.type
							? ((r = '//img.youtube.com/vi/' + n.id + '/hqdefault.jpg'), c(r))
							: 'vimeo' === n.type
							? t.ajax({
									type: 'GET',
									url: '//vimeo.com/api/v2/video/' + n.id + '.json',
									jsonp: 'callback',
									dataType: 'jsonp',
									success: function (t) {
										(r = t[0].thumbnail_large), c(r);
									},
							  })
							: 'vzaar' === n.type &&
							  t.ajax({
									type: 'GET',
									url: '//vzaar.com/api/videos/' + n.id + '.json',
									jsonp: 'callback',
									dataType: 'jsonp',
									success: function (t) {
										(r = t.framegrab_url), c(r);
									},
							  });
					}),
					(r.prototype.stop = function () {
						this._core.trigger('stop', null, 'video'),
							this._playing.find('.owl-video-frame').remove(),
							this._playing.removeClass('owl-video-playing'),
							(this._playing = null),
							this._core.leave('playing'),
							this._core.trigger('stopped', null, 'video');
					}),
					(r.prototype.play = function (e) {
						var n,
							i = t(e.target).closest('.' + this._core.settings.itemClass),
							r = this._videos[i.attr('data-video')],
							o = r.width || '100%',
							a = r.height || this._core.$stage.height();
						this._playing ||
							(this._core.enter('playing'),
							this._core.trigger('play', null, 'video'),
							(i = this._core.items(this._core.relative(i.index()))),
							this._core.reset(i.index()),
							'youtube' === r.type
								? (n =
										'<iframe width="' +
										o +
										'" height="' +
										a +
										'" src="//www.youtube.com/embed/' +
										r.id +
										'?autoplay=1&rel=0&v=' +
										r.id +
										'" frameborder="0" allowfullscreen></iframe>')
								: 'vimeo' === r.type
								? (n =
										'<iframe src="//player.vimeo.com/video/' +
										r.id +
										'?autoplay=1" width="' +
										o +
										'" height="' +
										a +
										'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
								: 'vzaar' === r.type &&
								  (n =
										'<iframe frameborder="0"height="' +
										a +
										'"width="' +
										o +
										'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
										r.id +
										'/player?autoplay=true"></iframe>'),
							t('<div class="owl-video-frame">' + n + '</div>').insertAfter(
								i.find('.owl-video')
							),
							(this._playing = i.addClass('owl-video-playing')));
					}),
					(r.prototype.isInFullScreen = function () {
						var e =
							n.fullscreenElement ||
							n.mozFullScreenElement ||
							n.webkitFullscreenElement;
						return e && t(e).parent().hasClass('owl-video-frame');
					}),
					(r.prototype.destroy = function () {
						var t, e;
						for (t in (this._core.$element.off('click.owl.video'),
						this._handlers))
							this._core.$element.off(t, this._handlers[t]);
						for (e in Object.getOwnPropertyNames(this))
							'function' != typeof this[e] && (this[e] = null);
					}),
					(t.fn.owlCarousel.Constructor.Plugins.Video = r);
			})(window.Zepto || window.jQuery, window, document),
			(function (t, e, n, i) {
				var r = function e(n) {
					(this.core = n),
						(this.core.options = t.extend({}, e.Defaults, this.core.options)),
						(this.swapping = !0),
						(this.previous = void 0),
						(this.next = void 0),
						(this.handlers = {
							'change.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									'position' == t.property.name &&
									((this.previous = this.core.current()),
									(this.next = t.property.value));
							}, this),
							'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':
								t.proxy(function (t) {
									t.namespace && (this.swapping = 'translated' == t.type);
								}, this),
							'translate.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this.swapping &&
									(this.core.options.animateOut ||
										this.core.options.animateIn) &&
									this.swap();
							}, this),
						}),
						this.core.$element.on(this.handlers);
				};
				(r.Defaults = { animateOut: !1, animateIn: !1 }),
					(r.prototype.swap = function () {
						if (
							1 === this.core.settings.items &&
							t.support.animation &&
							t.support.transition
						) {
							this.core.speed(0);
							var e,
								n = t.proxy(this.clear, this),
								i = this.core.$stage.children().eq(this.previous),
								r = this.core.$stage.children().eq(this.next),
								o = this.core.settings.animateIn,
								a = this.core.settings.animateOut;
							this.core.current() !== this.previous &&
								(a &&
									((e =
										this.core.coordinates(this.previous) -
										this.core.coordinates(this.next)),
									i
										.one(t.support.animation.end, n)
										.css({ left: e + 'px' })
										.addClass('animated owl-animated-out')
										.addClass(a)),
								o &&
									r
										.one(t.support.animation.end, n)
										.addClass('animated owl-animated-in')
										.addClass(o));
						}
					}),
					(r.prototype.clear = function (e) {
						t(e.target)
							.css({ left: '' })
							.removeClass('animated owl-animated-out owl-animated-in')
							.removeClass(this.core.settings.animateIn)
							.removeClass(this.core.settings.animateOut),
							this.core.onTransitionEnd();
					}),
					(r.prototype.destroy = function () {
						var t, e;
						for (t in this.handlers)
							this.core.$element.off(t, this.handlers[t]);
						for (e in Object.getOwnPropertyNames(this))
							'function' != typeof this[e] && (this[e] = null);
					}),
					(t.fn.owlCarousel.Constructor.Plugins.Animate = r);
			})(window.Zepto || window.jQuery, window, document),
			(function (t, e, n, i) {
				var r = function e(n) {
					(this._core = n),
						(this._timeout = null),
						(this._paused = !1),
						(this._handlers = {
							'changed.owl.carousel': t.proxy(function (t) {
								t.namespace && 'settings' === t.property.name
									? this._core.settings.autoplay
										? this.play()
										: this.stop()
									: t.namespace &&
									  'position' === t.property.name &&
									  this._core.settings.autoplay &&
									  this._setAutoPlayInterval();
							}, this),
							'initialized.owl.carousel': t.proxy(function (t) {
								t.namespace && this._core.settings.autoplay && this.play();
							}, this),
							'play.owl.autoplay': t.proxy(function (t, e, n) {
								t.namespace && this.play(e, n);
							}, this),
							'stop.owl.autoplay': t.proxy(function (t) {
								t.namespace && this.stop();
							}, this),
							'mouseover.owl.autoplay': t.proxy(function () {
								this._core.settings.autoplayHoverPause &&
									this._core.is('rotating') &&
									this.pause();
							}, this),
							'mouseleave.owl.autoplay': t.proxy(function () {
								this._core.settings.autoplayHoverPause &&
									this._core.is('rotating') &&
									this.play();
							}, this),
							'touchstart.owl.core': t.proxy(function () {
								this._core.settings.autoplayHoverPause &&
									this._core.is('rotating') &&
									this.pause();
							}, this),
							'touchend.owl.core': t.proxy(function () {
								this._core.settings.autoplayHoverPause && this.play();
							}, this),
						}),
						this._core.$element.on(this._handlers),
						(this._core.options = t.extend({}, e.Defaults, this._core.options));
				};
				(r.Defaults = {
					autoplay: !1,
					autoplayTimeout: 5e3,
					autoplayHoverPause: !1,
					autoplaySpeed: !1,
				}),
					(r.prototype.play = function (t, e) {
						(this._paused = !1),
							this._core.is('rotating') ||
								(this._core.enter('rotating'), this._setAutoPlayInterval());
					}),
					(r.prototype._getNextTimeout = function (i, r) {
						return (
							this._timeout && e.clearTimeout(this._timeout),
							e.setTimeout(
								t.proxy(function () {
									this._paused ||
										this._core.is('busy') ||
										this._core.is('interacting') ||
										n.hidden ||
										this._core.next(r || this._core.settings.autoplaySpeed);
								}, this),
								i || this._core.settings.autoplayTimeout
							)
						);
					}),
					(r.prototype._setAutoPlayInterval = function () {
						this._timeout = this._getNextTimeout();
					}),
					(r.prototype.stop = function () {
						this._core.is('rotating') &&
							(e.clearTimeout(this._timeout), this._core.leave('rotating'));
					}),
					(r.prototype.pause = function () {
						this._core.is('rotating') && (this._paused = !0);
					}),
					(r.prototype.destroy = function () {
						var t, e;
						for (t in (this.stop(), this._handlers))
							this._core.$element.off(t, this._handlers[t]);
						for (e in Object.getOwnPropertyNames(this))
							'function' != typeof this[e] && (this[e] = null);
					}),
					(t.fn.owlCarousel.Constructor.Plugins.autoplay = r);
			})(window.Zepto || window.jQuery, window, document),
			(function (t, e, n, i) {
				var r = function e(n) {
					(this._core = n),
						(this._initialized = !1),
						(this._pages = []),
						(this._controls = {}),
						(this._templates = []),
						(this.$element = this._core.$element),
						(this._overrides = {
							next: this._core.next,
							prev: this._core.prev,
							to: this._core.to,
						}),
						(this._handlers = {
							'prepared.owl.carousel': t.proxy(function (e) {
								e.namespace &&
									this._core.settings.dotsData &&
									this._templates.push(
										'<div class="' +
											this._core.settings.dotClass +
											'">' +
											t(e.content)
												.find('[data-dot]')
												.addBack('[data-dot]')
												.attr('data-dot') +
											'</div>'
									);
							}, this),
							'added.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this._core.settings.dotsData &&
									this._templates.splice(t.position, 0, this._templates.pop());
							}, this),
							'remove.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this._core.settings.dotsData &&
									this._templates.splice(t.position, 1);
							}, this),
							'changed.owl.carousel': t.proxy(function (t) {
								t.namespace && 'position' == t.property.name && this.draw();
							}, this),
							'initialized.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									!this._initialized &&
									(this._core.trigger('initialize', null, 'navigation'),
									this.initialize(),
									this.update(),
									this.draw(),
									(this._initialized = !0),
									this._core.trigger('initialized', null, 'navigation'));
							}, this),
							'refreshed.owl.carousel': t.proxy(function (t) {
								t.namespace &&
									this._initialized &&
									(this._core.trigger('refresh', null, 'navigation'),
									this.update(),
									this.draw(),
									this._core.trigger('refreshed', null, 'navigation'));
							}, this),
						}),
						(this._core.options = t.extend({}, e.Defaults, this._core.options)),
						this.$element.on(this._handlers);
				};
				(r.Defaults = {
					nav: !1,
					navText: ['prev', 'next'],
					navSpeed: !1,
					navElement: 'div',
					navContainer: !1,
					navContainerClass: 'owl-nav',
					navClass: ['owl-prev', 'owl-next'],
					slideBy: 1,
					dotClass: 'owl-dot',
					dotsClass: 'owl-dots',
					dots: !0,
					dotsEach: !1,
					dotsData: !1,
					dotsSpeed: !1,
					dotsContainer: !1,
				}),
					(r.prototype.initialize = function () {
						var e,
							n = this._core.settings;
						for (e in ((this._controls.$relative = (
							n.navContainer
								? t(n.navContainer)
								: t('<div>')
										.addClass(n.navContainerClass)
										.appendTo(this.$element)
						).addClass('disabled')),
						(this._controls.$previous = t('<' + n.navElement + '>')
							.addClass(n.navClass[0])
							.html(n.navText[0])
							.prependTo(this._controls.$relative)
							.on(
								'click',
								t.proxy(function (t) {
									this.prev(n.navSpeed);
								}, this)
							)),
						(this._controls.$next = t('<' + n.navElement + '>')
							.addClass(n.navClass[1])
							.html(n.navText[1])
							.appendTo(this._controls.$relative)
							.on(
								'click',
								t.proxy(function (t) {
									this.next(n.navSpeed);
								}, this)
							)),
						n.dotsData ||
							(this._templates = [
								t('<div>')
									.addClass(n.dotClass)
									.append(t('<span>'))
									.prop('outerHTML'),
							]),
						(this._controls.$absolute = (
							n.dotsContainer
								? t(n.dotsContainer)
								: t('<div>').addClass(n.dotsClass).appendTo(this.$element)
						).addClass('disabled')),
						this._controls.$absolute.on(
							'click',
							'div',
							t.proxy(function (e) {
								var i = t(e.target).parent().is(this._controls.$absolute)
									? t(e.target).index()
									: t(e.target).parent().index();
								e.preventDefault(), this.to(i, n.dotsSpeed);
							}, this)
						),
						this._overrides))
							this._core[e] = t.proxy(this[e], this);
					}),
					(r.prototype.destroy = function () {
						var t, e, n, i;
						for (t in this._handlers) this.$element.off(t, this._handlers[t]);
						for (e in this._controls) this._controls[e].remove();
						for (i in this.overides) this._core[i] = this._overrides[i];
						for (n in Object.getOwnPropertyNames(this))
							'function' != typeof this[n] && (this[n] = null);
					}),
					(r.prototype.update = function () {
						var t,
							e,
							n = this._core.clones().length / 2,
							i = n + this._core.items().length,
							r = this._core.maximum(!0),
							o = this._core.settings,
							a =
								o.center || o.autoWidth || o.dotsData
									? 1
									: o.dotsEach || o.items;
						if (
							('page' !== o.slideBy &&
								(o.slideBy = Math.min(o.slideBy, o.items)),
							o.dots || 'page' == o.slideBy)
						)
							for (this._pages = [], t = n, e = 0; t < i; t++) {
								if (e >= a || 0 === e) {
									if (
										(this._pages.push({
											start: Math.min(r, t - n),
											end: t - n + a - 1,
										}),
										Math.min(r, t - n) === r)
									)
										break;
									e = 0;
								}
								e += this._core.mergers(this._core.relative(t));
							}
					}),
					(r.prototype.draw = function () {
						var e,
							n = this._core.settings,
							i = this._core.items().length <= n.items,
							r = this._core.relative(this._core.current()),
							o = n.loop || n.rewind;
						this._controls.$relative.toggleClass('disabled', !n.nav || i),
							n.nav &&
								(this._controls.$previous.toggleClass(
									'disabled',
									!o && r <= this._core.minimum(!0)
								),
								this._controls.$next.toggleClass(
									'disabled',
									!o && r >= this._core.maximum(!0)
								)),
							this._controls.$absolute.toggleClass('disabled', !n.dots || i),
							n.dots &&
								((e =
									this._pages.length -
									this._controls.$absolute.children().length),
								n.dotsData && 0 !== e
									? this._controls.$absolute.html(this._templates.join(''))
									: e > 0
									? this._controls.$absolute.append(
											new Array(e + 1).join(this._templates[0])
									  )
									: e < 0 &&
									  this._controls.$absolute.children().slice(e).remove(),
								this._controls.$absolute.find('.active').removeClass('active'),
								this._controls.$absolute
									.children()
									.eq(t.inArray(this.current(), this._pages))
									.addClass('active'));
					}),
					(r.prototype.onTrigger = function (e) {
						var n = this._core.settings;
						e.page = {
							index: t.inArray(this.current(), this._pages),
							count: this._pages.length,
							size:
								n &&
								(n.center || n.autoWidth || n.dotsData
									? 1
									: n.dotsEach || n.items),
						};
					}),
					(r.prototype.current = function () {
						var e = this._core.relative(this._core.current());
						return t
							.grep(
								this._pages,
								t.proxy(function (t, n) {
									return t.start <= e && t.end >= e;
								}, this)
							)
							.pop();
					}),
					(r.prototype.getPosition = function (e) {
						var n,
							i,
							r = this._core.settings;
						return (
							'page' == r.slideBy
								? ((n = t.inArray(this.current(), this._pages)),
								  (i = this._pages.length),
								  e ? ++n : --n,
								  (n = this._pages[((n % i) + i) % i].start))
								: ((n = this._core.relative(this._core.current())),
								  (i = this._core.items().length),
								  e ? (n += r.slideBy) : (n -= r.slideBy)),
							n
						);
					}),
					(r.prototype.next = function (e) {
						t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
					}),
					(r.prototype.prev = function (e) {
						t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
					}),
					(r.prototype.to = function (e, n, i) {
						var r;
						!i && this._pages.length
							? ((r = this._pages.length),
							  t.proxy(this._overrides.to, this._core)(
									this._pages[((e % r) + r) % r].start,
									n
							  ))
							: t.proxy(this._overrides.to, this._core)(e, n);
					}),
					(t.fn.owlCarousel.Constructor.Plugins.Navigation = r);
			})(window.Zepto || window.jQuery, window, document),
			(function (t, e, n, i) {
				var r = function n(i) {
					(this._core = i),
						(this._hashes = {}),
						(this.$element = this._core.$element),
						(this._handlers = {
							'initialized.owl.carousel': t.proxy(function (n) {
								n.namespace &&
									'URLHash' === this._core.settings.startPosition &&
									t(e).trigger('hashchange.owl.navigation');
							}, this),
							'prepared.owl.carousel': t.proxy(function (e) {
								if (e.namespace) {
									var n = t(e.content)
										.find('[data-hash]')
										.addBack('[data-hash]')
										.attr('data-hash');
									if (!n) return;
									this._hashes[n] = e.content;
								}
							}, this),
							'changed.owl.carousel': t.proxy(function (n) {
								if (n.namespace && 'position' === n.property.name) {
									var i = this._core.items(
											this._core.relative(this._core.current())
										),
										r = t
											.map(this._hashes, function (t, e) {
												return t === i ? e : null;
											})
											.join();
									if (!r || e.location.hash.slice(1) === r) return;
									e.location.hash = r;
								}
							}, this),
						}),
						(this._core.options = t.extend({}, n.Defaults, this._core.options)),
						this.$element.on(this._handlers),
						t(e).on(
							'hashchange.owl.navigation',
							t.proxy(function (t) {
								var n = e.location.hash.substring(1),
									i = this._core.$stage.children(),
									r = this._hashes[n] && i.index(this._hashes[n]);
								void 0 !== r &&
									r !== this._core.current() &&
									this._core.to(this._core.relative(r), !1, !0);
							}, this)
						);
				};
				(r.Defaults = { URLhashListener: !1 }),
					(r.prototype.destroy = function () {
						var n, i;
						for (n in (t(e).off('hashchange.owl.navigation'), this._handlers))
							this._core.$element.off(n, this._handlers[n]);
						for (i in Object.getOwnPropertyNames(this))
							'function' != typeof this[i] && (this[i] = null);
					}),
					(t.fn.owlCarousel.Constructor.Plugins.Hash = r);
			})(window.Zepto || window.jQuery, window, document),
			(function (t, e, n, i) {
				var r = t('<support>').get(0).style,
					o = 'Webkit Moz O ms'.split(' '),
					a = {
						transition: {
							end: {
								WebkitTransition: 'webkitTransitionEnd',
								MozTransition: 'transitionend',
								OTransition: 'oTransitionEnd',
								transition: 'transitionend',
							},
						},
						animation: {
							end: {
								WebkitAnimation: 'webkitAnimationEnd',
								MozAnimation: 'animationend',
								OAnimation: 'oAnimationEnd',
								animation: 'animationend',
							},
						},
					};
				function s(e, n) {
					var i = !1,
						a = e.charAt(0).toUpperCase() + e.slice(1);
					return (
						t.each((e + ' ' + o.join(a + ' ') + a).split(' '), function (t, e) {
							if (void 0 !== r[e]) return (i = !n || e), !1;
						}),
						i
					);
				}
				function l(t) {
					return s(t, !0);
				}
				!!s('transition') &&
					((t.support.transition = new String(l('transition'))),
					(t.support.transition.end = a.transition.end[t.support.transition])),
					!!s('animation') &&
						((t.support.animation = new String(l('animation'))),
						(t.support.animation.end = a.animation.end[t.support.animation])),
					s('transform') &&
						((t.support.transform = new String(l('transform'))),
						(t.support.transform3d = !!s('perspective')));
			})(window.Zepto || window.jQuery, window, document);
	},
	30: function (t, e, n) {
		'use strict';
		n.d(e, 'a', function () {
			return ke;
		});
		class i {
			valueOf() {}
			liquidMethodMissing(t) {}
		}
		var r = function () {
			return (r =
				Object.assign ||
				function (t) {
					for (var e, n = 1, i = arguments.length; n < i; n++)
						for (var r in (e = arguments[n]))
							Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
					return t;
				}).apply(this, arguments);
		};
		const o = Object.prototype.toString,
			a = String.prototype.toLowerCase;
		function s(t) {
			return '[object String]' === o.call(t);
		}
		function l(t) {
			return 'function' == typeof t;
		}
		function u(t) {
			return d((t = c(t))) ? '' : String(t);
		}
		function c(t) {
			return t instanceof i ? t.valueOf() : t;
		}
		function _(t) {
			return 'number' == typeof t;
		}
		function d(t) {
			return null == t;
		}
		function p(t) {
			return '[object Array]' === o.call(t);
		}
		function h(t, e) {
			t = t || {};
			for (const n in t) if (t.hasOwnProperty(n) && !1 === e(t[n], n, t)) break;
			return t;
		}
		function f(t) {
			return t[t.length - 1];
		}
		function g(t) {
			const e = typeof t;
			return null !== t && ('object' === e || 'function' === e);
		}
		function m(t, e, n = 1) {
			const i = [];
			for (let r = t; r < e; r += n) i.push(r);
			return i;
		}
		function y(t, e, n = ' ') {
			return E(t, e, n, (t, e) => e + t);
		}
		function E(t, e, n, i) {
			let r = e - (t = String(t)).length;
			for (; r-- > 0; ) t = i(t, n);
			return t;
		}
		function v(t) {
			return t;
		}
		function O(t) {
			return t.replace(
				/(\w?)([A-Z])/g,
				(t, e, n) => (e ? e + '_' : '') + n.toLowerCase()
			);
		}
		function D(t, e) {
			return null == t && null == e
				? 0
				: null == t
				? 1
				: null == e || (t = a.call(t)) < (e = a.call(e))
				? -1
				: t > e
				? 1
				: 0;
		}
		class P {
			constructor(t, e, n, i) {
				(this.key = t), (this.value = e), (this.next = n), (this.prev = i);
			}
		}
		class M {
			constructor(t, e = 0) {
				(this.limit = t),
					(this.size = e),
					(this.cache = {}),
					(this.head = new P('HEAD', null, null, null)),
					(this.tail = new P('TAIL', null, null, null)),
					(this.head.next = this.tail),
					(this.tail.prev = this.head);
			}
			write(t, e) {
				if (this.cache[t]) this.cache[t].value = e;
				else {
					const n = new P(t, e, this.head.next, this.head);
					(this.head.next.prev = n),
						(this.head.next = n),
						(this.cache[t] = n),
						this.size++,
						this.ensureLimit();
				}
			}
			read(t) {
				if (!this.cache[t]) return;
				const { value: e } = this.cache[t];
				return this.remove(t), this.write(t, e), e;
			}
			remove(t) {
				const e = this.cache[t];
				(e.prev.next = e.next),
					(e.next.prev = e.prev),
					delete this.cache[t],
					this.size--;
			}
			clear() {
				(this.head.next = this.tail),
					(this.tail.prev = this.head),
					(this.size = 0),
					(this.cache = {});
			}
			ensureLimit() {
				this.size > this.limit && this.remove(this.tail.prev.key);
			}
		}
		const b = {
			root: ['.'],
			cache: void 0,
			extname: '',
			dynamicPartials: !0,
			jsTruthy: !1,
			trimTagRight: !1,
			trimTagLeft: !1,
			trimOutputRight: !1,
			trimOutputLeft: !1,
			greedy: !0,
			tagDelimiterLeft: '{%',
			tagDelimiterRight: '%}',
			outputDelimiterLeft: '{{',
			outputDelimiterRight: '}}',
			strictFilters: !1,
			strictVariables: !1,
			globals: {},
		};
		function w(t) {
			if (
				((t = t || {}).hasOwnProperty('root') && (t.root = C(t.root)),
				t.hasOwnProperty('cache'))
			) {
				let e;
				(e =
					'number' == typeof t.cache
						? t.cache > 0
							? new M(t.cache)
							: void 0
						: 'object' == typeof t.cache
						? t.cache
						: t.cache
						? new M(1024)
						: void 0),
					(t.cache = e);
			}
			return t;
		}
		function C(t) {
			return p(t) ? t : s(t) ? [t] : [];
		}
		class T {
			constructor(t = {}, e = b, n = !1) {
				(this.scopes = [{}]),
					(this.registers = {}),
					(this.sync = n),
					(this.opts = e),
					(this.globals = e.globals),
					(this.environments = t);
			}
			getRegister(t, e = {}) {
				return (this.registers[t] = this.registers[t] || e);
			}
			setRegister(t, e) {
				return (this.registers[t] = e);
			}
			saveRegister(...t) {
				return t.map((t) => [t, this.getRegister(t)]);
			}
			restoreRegister(t) {
				return t.forEach(([t, e]) => this.setRegister(t, e));
			}
			getAll() {
				return [this.globals, this.environments, ...this.scopes].reduce(
					(t, e) => r(t, e),
					{}
				);
			}
			get(t) {
				const e = this.findScope(t[0]);
				return this.getFromScope(e, t);
			}
			getFromScope(t, e) {
				return (
					'string' == typeof e && (e = e.split('.')),
					e.reduce((t, e) => {
						if (
							((t = (function (t, e) {
								if (d(t)) return t;
								if (
									(t = (function t(e) {
										return e && l(e.toLiquid) ? t(e.toLiquid()) : e;
									})(t)) instanceof i
								)
									return l(t[e])
										? t[e]()
										: t.hasOwnProperty(e)
										? t[e]
										: t.liquidMethodMissing(e);
								return 'size' === e
									? (function (t) {
											return p(t) || s(t) ? t.length : t.size;
									  })(t)
									: 'first' === e
									? (function (t) {
											return p(t) ? t[0] : t.first;
									  })(t)
									: 'last' === e
									? (function (t) {
											return p(t) ? t[t.length - 1] : t.last;
									  })(t)
									: t[e];
							})(t, e)),
							d(t) && this.opts.strictVariables)
						)
							throw new TypeError('undefined variable: ' + e);
						return t;
					}, t)
				);
			}
			push(t) {
				return this.scopes.push(t);
			}
			pop() {
				return this.scopes.pop();
			}
			bottom() {
				return this.scopes[0];
			}
			findScope(t) {
				for (let e = this.scopes.length - 1; e >= 0; e--) {
					const n = this.scopes[e];
					if (t in n) return n;
				}
				return t in this.environments ? this.environments : this.globals;
			}
		}
		var A,
			x = Object.freeze({
				resolve: function (t, e, n) {
					return (
						t.length && '/' !== f(t) && (t += '/'),
						(function (t, e) {
							const n = document.createElement('base');
							n.href = t;
							const i = document.getElementsByTagName('head')[0];
							i.insertBefore(n, i.firstChild);
							const r = document.createElement('a');
							r.href = e;
							const o = r.href;
							return i.removeChild(n), o;
						})(t, e).replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, (t, e, i) => {
							const r = i.split('/').pop();
							return /\.\w+$/.test(r) ? t : e + i + n;
						})
					);
				},
				readFile: async function (t) {
					return new Promise((e, n) => {
						const i = new XMLHttpRequest();
						(i.onload = () => {
							i.status >= 200 && i.status < 300
								? e(i.responseText)
								: n(new Error(i.statusText));
						}),
							(i.onerror = () => {
								n(
									new Error('An error occurred whilst receiving the response.')
								);
							}),
							i.open('GET', t),
							i.send();
					});
				},
				readFileSync: function (t) {
					const e = new XMLHttpRequest();
					if (
						(e.open('GET', t, !1), e.send(), e.status < 200 || e.status >= 300)
					)
						throw new Error(e.statusText);
					return e.responseText;
				},
				exists: async function (t) {
					return !0;
				},
				existsSync: function (t) {
					return !0;
				},
			});
		function q(t) {
			return !!(N(t) & A.Delimited);
		}
		function j(t) {
			return N(t) === A.Operator;
		}
		function L(t) {
			return N(t) === A.HTML;
		}
		function I(t) {
			return N(t) === A.Output;
		}
		function R(t) {
			return N(t) === A.Tag;
		}
		function B(t) {
			return N(t) === A.Quoted;
		}
		function W(t) {
			return N(t) === A.Literal;
		}
		function U(t) {
			return N(t) === A.Number;
		}
		function K(t) {
			return N(t) === A.PropertyAccess;
		}
		function k(t) {
			return N(t) === A.Word;
		}
		function S(t) {
			return N(t) === A.Range;
		}
		function N(t) {
			return t ? t.kind : -1;
		}
		!(function (t) {
			(t[(t.Number = 1)] = 'Number'),
				(t[(t.Literal = 2)] = 'Literal'),
				(t[(t.Tag = 4)] = 'Tag'),
				(t[(t.Output = 8)] = 'Output'),
				(t[(t.HTML = 16)] = 'HTML'),
				(t[(t.Filter = 32)] = 'Filter'),
				(t[(t.Hash = 64)] = 'Hash'),
				(t[(t.PropertyAccess = 128)] = 'PropertyAccess'),
				(t[(t.Word = 256)] = 'Word'),
				(t[(t.Range = 512)] = 'Range'),
				(t[(t.Quoted = 1024)] = 'Quoted'),
				(t[(t.Operator = 2048)] = 'Operator'),
				(t[(t.Delimited = 12)] = 'Delimited');
		})(A || (A = {}));
		const $ = [
			0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0,
			33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
			0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 0, 0, 0, 0, 0,
		];
		function F(t, e) {
			if (!t || !L(t)) return;
			const n = e ? 4 : 16;
			for (; $[t.input.charCodeAt(t.end - 1 - t.trimRight)] & n; )
				t.trimRight++;
		}
		function H(t, e) {
			if (!t || !L(t)) return;
			const n = e ? 4 : 16;
			for (; $[t.input.charCodeAt(t.begin + t.trimLeft)] & n; ) t.trimLeft++;
			'\n' === t.input.charAt(t.begin + t.trimLeft) && t.trimLeft++;
		}
		$[160] =
			$[5760] =
			$[6158] =
			$[8192] =
			$[8193] =
			$[8194] =
			$[8195] =
			$[8196] =
			$[8197] =
			$[8198] =
			$[8199] =
			$[8200] =
			$[8201] =
			$[8202] =
			$[8232] =
			$[8233] =
			$[8239] =
			$[8287] =
			$[12288] =
				4;
		class z {
			constructor(t, e, n, i, r) {
				(this.kind = t),
					(this.input = e),
					(this.begin = n),
					(this.end = i),
					(this.file = r);
			}
			getText() {
				return this.input.slice(this.begin, this.end);
			}
			getPosition() {
				let [t, e] = [1, 1];
				for (let n = 0; n < this.begin; n++)
					'\n' === this.input[n] ? (t++, (e = 1)) : e++;
				return [t, e];
			}
			size() {
				return this.end - this.begin;
			}
		}
		class V extends z {
			constructor(t, e) {
				super(A.Number, t.input, t.begin, e ? e.end : t.end, t.file),
					(this.whole = t),
					(this.decimal = e);
			}
		}
		class G extends z {
			constructor(t, e, n, i) {
				super(A.Word, t, e, n, i),
					(this.input = t),
					(this.begin = e),
					(this.end = n),
					(this.file = i),
					(this.content = this.getText());
			}
			isNumber(t = !1) {
				for (
					let e =
						t && 64 & $[this.input.charCodeAt(this.begin)]
							? this.begin + 1
							: this.begin;
					e < this.end;
					e++
				)
					if (!(32 & $[this.input.charCodeAt(e)])) return !1;
				return !0;
			}
		}
		class Q extends i {
			equals(t) {
				return s(t) || p(t)
					? 0 === t.length
					: !!g(t) && 0 === Object.keys(t).length;
			}
			gt() {
				return !1;
			}
			geq() {
				return !1;
			}
			lt() {
				return !1;
			}
			leq() {
				return !1;
			}
			valueOf() {
				return '';
			}
		}
		class X extends Q {
			equals(t) {
				return (
					!1 === t || !!d(c(t)) || (s(t) ? /^\s*$/.test(t) : super.equals(t))
				);
			}
		}
		class Y extends i {
			equals(t) {
				return d(c(t)) || t instanceof X;
			}
			gt() {
				return !1;
			}
			geq() {
				return !1;
			}
			lt() {
				return !1;
			}
			leq() {
				return !1;
			}
			valueOf() {
				return null;
			}
		}
		const J = {
			true: !0,
			false: !1,
			nil: new Y(),
			null: new Y(),
			empty: new Q(),
			blank: new X(),
		};
		class Z extends z {
			constructor(t, e, n, i) {
				super(A.Literal, t, e, n, i),
					(this.input = t),
					(this.begin = e),
					(this.end = n),
					(this.file = i),
					(this.literal = this.getText());
			}
		}
		const tt = {
			'==': 1,
			'!=': 1,
			'>': 1,
			'<': 1,
			'>=': 1,
			'<=': 1,
			contains: 1,
			and: 0,
			or: 0,
		};
		class et extends z {
			constructor(t, e, n, i) {
				super(A.Operator, t, e, n, i),
					(this.input = t),
					(this.begin = e),
					(this.end = n),
					(this.file = i),
					(this.operator = this.getText());
			}
			getPrecedence() {
				return tt[this.getText()];
			}
		}
		const nt = /[\da-fA-F]/,
			it = /[0-7]/,
			rt = { b: '\b', f: '\f', n: '\n', r: '\r', t: '\t', v: '\v' };
		function ot(t) {
			const e = t.charCodeAt(0);
			return e >= 97 ? e - 87 : e >= 65 ? e - 55 : e - 48;
		}
		function at(t) {
			let e = '';
			for (let n = 1; n < t.length - 1; n++)
				if ('\\' === t[n])
					if (void 0 !== rt[t[n + 1]]) e += rt[t[++n]];
					else if ('u' === t[n + 1]) {
						let i = 0,
							r = n + 2;
						for (; r <= n + 5 && nt.test(t[r]); ) i = 16 * i + ot(t[r++]);
						(n = r - 1), (e += String.fromCharCode(i));
					} else if (it.test(t[n + 1])) {
						let i = n + 1,
							r = 0;
						for (; i <= n + 3 && it.test(t[i]); ) r = 8 * r + ot(t[i++]);
						(n = i - 1), (e += String.fromCharCode(r));
					} else e += t[++n];
				else e += t[n];
			return e;
		}
		class st extends z {
			constructor(t, e, n) {
				super(A.PropertyAccess, t.input, t.begin, n, t.file),
					(this.variable = t),
					(this.props = e);
			}
			getVariableAsText() {
				return this.variable instanceof G
					? this.variable.getText()
					: at(this.variable.getText());
			}
		}
		class lt extends Error {
			constructor(t, e) {
				super(t.message), (this.originalError = t), (this.token = e);
			}
			update() {
				const t = this.originalError,
					e = (function (t) {
						const [e] = t.getPosition(),
							n = t.input.split('\n'),
							i = Math.max(e - 2, 1),
							r = Math.min(e + 3, n.length);
						return m(i, r + 1)
							.map(
								(t) =>
									`${t === e ? '>> ' : '   '}${y(
										String(t),
										String(r).length
									)}| ${n[t - 1]}`
							)
							.join('\n');
					})(this.token);
				(this.message = (function (t, e) {
					e.file && (t += ', file:' + e.file);
					const [n, i] = e.getPosition();
					return (t += `, line:${n}, col:${i}`);
				})(t.message, this.token)),
					(this.stack =
						this.message + '\n' + e + '\n' + this.stack + '\nFrom ' + t.stack);
			}
		}
		class ut extends lt {
			constructor(t, e) {
				super(new Error(t), e),
					(this.name = 'TokenizationError'),
					super.update();
			}
		}
		class ct extends lt {
			constructor(t, e) {
				super(t, e),
					(this.name = 'ParseError'),
					(this.message = t.message),
					super.update();
			}
		}
		class _t extends lt {
			constructor(t, e) {
				super(t, e.token),
					(this.name = 'RenderError'),
					(this.message = t.message),
					super.update();
			}
			static is(t) {
				return t instanceof _t;
			}
		}
		class dt extends Error {
			constructor(t) {
				super(t), (this.name = 'AssertionError'), (this.message = t + '');
			}
		}
		function pt(t, e) {
			if (!t) {
				const n = e ? e() : `expect ${t} to be true`;
				throw new dt(n);
			}
		}
		class ht extends z {
			constructor(t, e, n, i, r, o) {
				super(A.Filter, n, i, r, o), (this.name = t), (this.args = e);
			}
		}
		class ft extends z {
			constructor(t, e, n, i, r, o) {
				super(A.Hash, t, e, n, o),
					(this.input = t),
					(this.begin = e),
					(this.end = n),
					(this.name = i),
					(this.value = r),
					(this.file = o);
			}
		}
		class gt extends z {
			constructor(t, e, n, i) {
				super(A.Quoted, t, e, n, i),
					(this.input = t),
					(this.begin = e),
					(this.end = n),
					(this.file = i);
			}
		}
		class mt extends z {
			constructor(t, e, n, i) {
				super(A.HTML, t, e, n, i),
					(this.input = t),
					(this.begin = e),
					(this.end = n),
					(this.file = i),
					(this.trimLeft = 0),
					(this.trimRight = 0);
			}
			getContent() {
				return this.input.slice(
					this.begin + this.trimLeft,
					this.end - this.trimRight
				);
			}
		}
		class yt extends z {
			constructor(t, e, n, i, r, o, a, s) {
				super(t, n, i, r, s),
					(this.trimLeft = !1),
					(this.trimRight = !1),
					(this.content = this.getText());
				const l = '-' === e[0],
					u = '-' === f(e);
				(this.content = e.slice(l ? 1 : 0, u ? -1 : e.length).trim()),
					(this.trimLeft = l || o),
					(this.trimRight = u || a);
			}
		}
		class Et extends yt {
			constructor(t, e, n, i, r) {
				const {
						trimTagLeft: o,
						trimTagRight: a,
						tagDelimiterLeft: s,
						tagDelimiterRight: l,
					} = i,
					u = t.slice(e + s.length, n - l.length);
				super(A.Tag, u, t, e, n, o, a, r);
				let c = 0;
				for (; 1 & $[this.content.charCodeAt(c)]; ) c++;
				if (((this.name = this.content.slice(0, c)), !this.name))
					throw new ut('illegal tag syntax', this);
				let _ = c;
				for (; 4 & $[this.content.charCodeAt(_)]; ) _++;
				this.args = this.content.slice(_);
			}
		}
		class vt extends z {
			constructor(t, e, n, i, r, o) {
				super(A.Range, t, e, n, o),
					(this.input = t),
					(this.begin = e),
					(this.end = n),
					(this.lhs = i),
					(this.rhs = r),
					(this.file = o);
			}
		}
		class Ot extends yt {
			constructor(t, e, n, i, r) {
				const {
						trimOutputLeft: o,
						trimOutputRight: a,
						outputDelimiterLeft: s,
						outputDelimiterRight: l,
					} = i,
					u = t.slice(e + s.length, n - l.length);
				super(A.Output, u, t, e, n, o, a, r);
			}
		}
		const Dt = {
			a: { n: { d: { end: !0, needBoundary: !0 } } },
			o: { r: { end: !0, needBoundary: !0 } },
			c: {
				o: {
					n: { t: { a: { i: { n: { s: { end: !0, needBoundary: !0 } } } } } },
				},
			},
			'=': { '=': { end: !0 } },
			'!': { '=': { end: !0 } },
			'>': { end: !0, '=': { end: !0 } },
			'<': { end: !0, '=': { end: !0 } },
		};
		class Pt {
			constructor(t, e = '') {
				(this.input = t), (this.file = e), (this.p = 0), (this.N = t.length);
			}
			*readExpression() {
				const t = this.readValue();
				if (t)
					for (yield t; this.p < this.N; ) {
						const t = this.readOperator();
						if (!t) return;
						const e = this.readValue();
						if (!e) return;
						yield t, yield e;
					}
			}
			readOperator() {
				this.skipBlank();
				const t = (function (t, e, n = t.length) {
					let i,
						r = Dt,
						o = e;
					for (; r[t[o]] && o < n; ) (r = r[t[o++]]), r.end && (i = r);
					return i ? (i.needBoundary && 1 & t.charCodeAt(o) ? -1 : o) : -1;
				})(this.input, this.p, this.p + 8);
				if (-1 !== t)
					return new et(this.input, this.p, (this.p = t), this.file);
			}
			readFilters() {
				const t = [];
				for (;;) {
					const e = this.readFilter();
					if (!e) return t;
					t.push(e);
				}
			}
			readFilter() {
				if ((this.skipBlank(), this.end())) return null;
				pt('|' === this.peek(), () => 'unexpected token at ' + this.snapshot()),
					this.p++;
				const t = this.p,
					e = this.readWord();
				if (!e.size()) return null;
				const n = [];
				if ((this.skipBlank(), ':' === this.peek()))
					do {
						++this.p;
						const t = this.readFilterArg();
						for (
							t && n.push(t);
							this.p < this.N && ',' !== this.peek() && '|' !== this.peek();

						)
							++this.p;
					} while (',' === this.peek());
				return new ht(e.getText(), n, this.input, t, this.p, this.file);
			}
			readFilterArg() {
				const t = this.readValue();
				if (!t) return;
				if ((this.skipBlank(), ':' !== this.peek())) return t;
				++this.p;
				const e = this.readValue();
				return [t.getText(), e];
			}
			readTopLevelTokens(t = b) {
				const e = [];
				for (; this.p < this.N; ) {
					const n = this.readTopLevelToken(t);
					e.push(n);
				}
				return (
					(function (t, e) {
						e = Object.assign({ greedy: !0 }, e);
						let n = !1;
						for (let i = 0; i < t.length; i++) {
							const r = t[i];
							q(r) &&
								(!n && r.trimLeft && F(t[i - 1], e.greedy),
								R(r) &&
									('raw' === r.name
										? (n = !0)
										: 'endraw' === r.name && (n = !1)),
								!n && r.trimRight && H(t[i + 1], e.greedy));
						}
					})(e, t),
					e
				);
			}
			readTopLevelToken(t) {
				const { tagDelimiterLeft: e, outputDelimiterLeft: n } = t;
				return this.matchWord(e)
					? this.readTagToken(t)
					: this.matchWord(n)
					? this.readOutputToken(t)
					: this.readHTMLToken(t);
			}
			readHTMLToken(t) {
				const e = this.p;
				for (; this.p < this.N; ) {
					const { tagDelimiterLeft: e, outputDelimiterLeft: n } = t;
					if (this.matchWord(e)) break;
					if (this.matchWord(n)) break;
					++this.p;
				}
				return new mt(this.input, e, this.p, this.file);
			}
			readTagToken(t) {
				const { file: e, input: n } = this,
					{ tagDelimiterRight: i } = t,
					r = this.p;
				return (
					-1 === this.readTo(i) &&
						this.mkError(`tag ${this.snapshot(r)} not closed`, r),
					new Et(n, r, this.p, t, e)
				);
			}
			readOutputToken(t) {
				const { file: e, input: n } = this,
					{ outputDelimiterRight: i } = t,
					r = this.p;
				return (
					-1 === this.readTo(i) &&
						this.mkError(`output ${this.snapshot(r)} not closed`, r),
					new Ot(n, r, this.p, t, e)
				);
			}
			mkError(t, e) {
				throw new ut(t, new G(this.input, e, this.N, this.file));
			}
			snapshot(t = this.p) {
				return JSON.stringify(
					((e = this.input.slice(t)),
					(n = 16),
					e.length > n ? e.substr(0, n - 3) + '...' : e)
				);
				var e, n;
			}
			readWord() {
				this.skipBlank();
				const t = this.p;
				for (; 1 & this.peekType(); ) ++this.p;
				return new G(this.input, t, this.p, this.file);
			}
			readHashes() {
				const t = [];
				for (;;) {
					const e = this.readHash();
					if (!e) return t;
					t.push(e);
				}
			}
			readHash() {
				this.skipBlank(), ',' === this.peek() && ++this.p;
				const t = this.p,
					e = this.readWord();
				if (!e.size()) return;
				let n;
				return (
					this.skipBlank(),
					':' === this.peek() && (++this.p, (n = this.readValue())),
					new ft(this.input, t, this.p, e, n, this.file)
				);
			}
			remaining() {
				return this.input.slice(this.p);
			}
			advance(t = 1) {
				this.p += t;
			}
			end() {
				return this.p >= this.N;
			}
			readTo(t) {
				for (; this.p < this.N; )
					if ((++this.p, this.reverseMatchWord(t))) return this.p;
				return -1;
			}
			readValue() {
				const t = this.readQuoted() || this.readRange();
				if (t) return t;
				if ('[' === this.peek()) {
					this.p++;
					const t = this.readQuoted();
					if (!t) return;
					if (']' !== this.peek()) return;
					return this.p++, new st(t, [], this.p);
				}
				const e = this.readWord();
				if (!e.size()) return;
				let n = e.isNumber(!0);
				const i = [];
				for (;;)
					if ('[' === this.peek()) {
						(n = !1), this.p++;
						const t =
							this.readValue() || new G(this.input, this.p, this.p, this.file);
						this.readTo(']'), i.push(t);
					} else {
						if ('.' !== this.peek() || '.' === this.peek(1)) break;
						{
							this.p++;
							const t = this.readWord();
							if (!t.size()) break;
							t.isNumber() || (n = !1), i.push(t);
						}
					}
				return !i.length && J.hasOwnProperty(e.content)
					? new Z(this.input, e.begin, e.end, this.file)
					: n
					? new V(e, i[0])
					: new st(e, i, this.p);
			}
			readRange() {
				this.skipBlank();
				const t = this.p;
				if ('(' !== this.peek()) return;
				++this.p;
				const e = this.readValueOrThrow();
				this.p += 2;
				const n = this.readValueOrThrow();
				return ++this.p, new vt(this.input, t, this.p, e, n, this.file);
			}
			readValueOrThrow() {
				const t = this.readValue();
				return (
					pt(t, () => `unexpected token ${this.snapshot()}, value expected`), t
				);
			}
			readQuoted() {
				this.skipBlank();
				const t = this.p;
				if (!(8 & this.peekType())) return;
				++this.p;
				let e = !1;
				for (
					;
					this.p < this.N &&
					(++this.p, this.input[this.p - 1] !== this.input[t] || e);

				)
					e ? (e = !1) : '\\' === this.input[this.p - 1] && (e = !0);
				return new gt(this.input, t, this.p, this.file);
			}
			readFileName() {
				const t = this.p;
				for (
					;
					!(4 & this.peekType()) && ',' !== this.peek() && this.p < this.N;

				)
					this.p++;
				return new G(this.input, t, this.p, this.file);
			}
			matchWord(t) {
				for (let e = 0; e < t.length; e++)
					if (t[e] !== this.input[this.p + e]) return !1;
				return !0;
			}
			reverseMatchWord(t) {
				for (let e = 0; e < t.length; e++)
					if (t[t.length - 1 - e] !== this.input[this.p - 1 - e]) return !1;
				return !0;
			}
			peekType(t = 0) {
				return $[this.input.charCodeAt(this.p + t)];
			}
			peek(t = 0) {
				return this.input[this.p + t];
			}
			skipBlank() {
				for (; 4 & this.peekType(); ) ++this.p;
			}
		}
		class Mt {
			constructor() {
				(this.html = ''), (this.break = !1), (this.continue = !1);
			}
			write(t) {
				this.html += t;
			}
		}
		class bt {
			*renderTemplates(t, e, n = new Mt()) {
				for (const i of t)
					try {
						const t = yield i.render(e, n);
						if ((t && n.write(t), n.break || n.continue)) break;
					} catch (t) {
						throw _t.is(t) ? t : new _t(t, i);
					}
				return n.html;
			}
		}
		class wt {
			constructor(t, e) {
				(this.handlers = {}),
					(this.stopRequested = !1),
					(this.tokens = t),
					(this.parseToken = e);
			}
			on(t, e) {
				return (this.handlers[t] = e), this;
			}
			trigger(t, e) {
				const n = this.handlers[t];
				return !!n && (n(e), !0);
			}
			start() {
				let t;
				for (
					this.trigger('start');
					!this.stopRequested && (t = this.tokens.shift());

				) {
					if (this.trigger('token', t)) continue;
					if (R(t) && this.trigger('tag:' + t.name, t)) continue;
					const e = this.parseToken(t, this.tokens);
					this.trigger('template', e);
				}
				return this.stopRequested || this.trigger('end'), this;
			}
			stop() {
				return (this.stopRequested = !0), this;
			}
		}
		class Ct {
			constructor(t) {
				this.token = t;
			}
		}
		function Tt(t) {
			return t && l(t.equals);
		}
		function At(t, e) {
			return !xt(t, e);
		}
		function xt(t, e) {
			return e.opts.jsTruthy ? !t : !1 === t || null == t;
		}
		const qt = {
			'==': (t, e) => (Tt(t) ? t.equals(e) : Tt(e) ? e.equals(t) : t === e),
			'!=': (t, e) => (Tt(t) ? !t.equals(e) : Tt(e) ? !e.equals(t) : t !== e),
			'>': (t, e) => (Tt(t) ? t.gt(e) : Tt(e) ? e.lt(t) : t > e),
			'<': (t, e) => (Tt(t) ? t.lt(e) : Tt(e) ? e.gt(t) : t < e),
			'>=': (t, e) => (Tt(t) ? t.geq(e) : Tt(e) ? e.leq(t) : t >= e),
			'<=': (t, e) => (Tt(t) ? t.leq(e) : Tt(e) ? e.geq(t) : t <= e),
			contains: (t, e) => !(!t || !l(t.indexOf)) && t.indexOf(e) > -1,
			and: (t, e, n) => At(t, n) && At(e, n),
			or: (t, e, n) => At(t, n) || At(e, n),
		};
		class jt {
			constructor(t) {
				this.operands = [];
				const e = new Pt(t);
				this.postfix = (function* (t) {
					const e = [];
					for (const n of t)
						if (j(n)) {
							for (
								;
								e.length && e[e.length - 1].getPrecedence() > n.getPrecedence();

							)
								yield e.pop();
							e.push(n);
						} else yield n;
					for (; e.length; ) yield e.pop();
				})(e.readExpression());
			}
			evaluate(t) {
				for (const e of this.postfix)
					if (j(e)) {
						const n = this.operands.pop(),
							i = Rt(e, this.operands.pop(), n, t);
						this.operands.push(i);
					} else this.operands.push(Lt(e, t));
				return this.operands[0];
			}
			*value(t) {
				return c(this.evaluate(t));
			}
		}
		function Lt(t, e) {
			if ((pt(e, () => 'unable to evaluate: context not defined'), K(t))) {
				const n = t.getVariableAsText(),
					i = t.props.map((t) => Lt(t, e));
				return e.get([n, ...i]);
			}
			return S(t)
				? (function (t, e) {
						const n = Lt(t.lhs, e),
							i = Lt(t.rhs, e);
						return m(+n, +i + 1);
				  })(t, e)
				: W(t)
				? (function (t) {
						return J[t.literal];
				  })(t)
				: U(t)
				? (function (t) {
						const e =
							t.whole.content + '.' + (t.decimal ? t.decimal.content : '');
						return Number(e);
				  })(t)
				: k(t)
				? t.getText()
				: B(t)
				? It(t)
				: void 0;
		}
		function It(t) {
			return at(t.getText());
		}
		function Rt(t, e, n, i) {
			return (0, qt[t.operator])(e, n, i);
		}
		class Bt {
			constructor(t) {
				this.hash = {};
				const e = new Pt(t);
				for (const t of e.readHashes()) this.hash[t.name.content] = t.value;
			}
			*render(t) {
				const e = {};
				for (const n of Object.keys(this.hash))
					e[n] = yield Lt(this.hash[n], t);
				return e;
			}
		}
		function Wt(t) {
			const e = { then: (e) => e(t), catch: () => e };
			return e;
		}
		function Ut(t) {
			const e = { then: (n, i) => (i ? i(t) : e), catch: (e) => e(t) };
			return e;
		}
		function Kt(t) {
			return (function (t) {
				return t && l(t.then);
			})(t)
				? t
				: (function (t) {
						return t && l(t.next) && l(t.throw) && l(t.return);
				  })(t)
				? (function e(n) {
						let i;
						try {
							i = t.next(n);
						} catch (t) {
							return Ut(t);
						}
						return i.done
							? Wt(i.value)
							: Kt(i.value).then(e, (n) => {
									let i;
									try {
										i = t.throw(n);
									} catch (t) {
										return Ut(t);
									}
									return i.done ? Wt(i.value) : e(i.value);
							  });
				  })()
				: Wt(t);
		}
		function kt(t) {
			return Promise.resolve(Kt(t));
		}
		function St(t) {
			let e;
			return (
				Kt(t)
					.then((t) => ((e = t), Wt(e)))
					.catch((t) => {
						throw t;
					}),
				e
			);
		}
		class Nt extends Ct {
			constructor(t, e, n) {
				super(t), (this.name = t.name);
				const i = n.tags.get(t.name);
				(this.impl = Object.create(i)),
					(this.impl.liquid = n),
					this.impl.parse && this.impl.parse(t, e);
			}
			*render(t, e) {
				const n = yield new Bt(this.token.args).render(t),
					i = this.impl;
				if (l(i.render)) return yield i.render(t, e, n);
			}
		}
		Nt.impls = {};
		class $t {
			constructor(t, e, n) {
				(this.name = t), (this.impl = e || v), (this.args = n);
			}
			*render(t, e) {
				const n = [];
				for (const t of this.args)
					p(t) ? n.push([t[0], yield Lt(t[1], e)]) : n.push(yield Lt(t, e));
				return yield this.impl.apply({ context: e }, [t, ...n]);
			}
		}
		class Ft {
			constructor(t, e) {
				(this.filterMap = e), (this.filters = []);
				const n = new Pt(t);
				(this.initial = n.readValue()),
					(this.filters = n
						.readFilters()
						.map(
							({ name: t, args: e }) => new $t(t, this.filterMap.get(t), e)
						));
			}
			*value(t) {
				let e = yield Lt(this.initial, t);
				for (const n of this.filters) e = yield n.render(e, t);
				return e;
			}
		}
		class Ht extends Ct {
			constructor(t, e) {
				super(t), (this.value = new Ft(t.content, e));
			}
			*render(t, e) {
				const n = yield this.value.value(t);
				e.write(u(c(n)));
			}
		}
		class zt extends Ct {
			constructor(t) {
				super(t), (this.str = t.getContent());
			}
			*render(t, e) {
				e.write(this.str);
			}
		}
		class Vt {
			constructor(t) {
				this.liquid = t;
			}
			parse(t) {
				let e;
				const n = [];
				for (; (e = t.shift()); ) n.push(this.parseToken(e, t));
				return n;
			}
			parseToken(t, e) {
				try {
					return R(t)
						? new Nt(t, e, this.liquid)
						: I(t)
						? new Ht(t, this.liquid.filters)
						: new zt(t);
				} catch (e) {
					throw new ct(e, t);
				}
			}
			parseStream(t) {
				return new wt(t, (t, e) => this.parseToken(t, e));
			}
		}
		var Gt = {
			parse: function (t) {
				const e = new Pt(t.args);
				(this.key = e.readWord().content),
					e.skipBlank(),
					pt('=' === e.peek(), () => 'illegal token ' + t.getText()),
					e.advance(),
					(this.value = e.remaining());
			},
			render: function* (t) {
				t.bottom()[this.key] = yield this.liquid._evalValue(this.value, t);
			},
		};
		function Qt(t) {
			return p(t)
				? t
				: s(t) && t.length > 0
				? [t]
				: g(t)
				? Object.keys(t).map((e) => [e, t[e]])
				: [];
		}
		function Xt(t) {
			return p(t) ? t : [t];
		}
		class Yt extends i {
			constructor(t) {
				super(), (this.i = 0), (this.length = t);
			}
			next() {
				this.i++;
			}
			index0() {
				return this.i;
			}
			index() {
				return this.i + 1;
			}
			first() {
				return 0 === this.i;
			}
			last() {
				return this.i === this.length - 1;
			}
			rindex() {
				return this.length - this.i;
			}
			rindex0() {
				return this.length - this.i - 1;
			}
			valueOf() {
				return JSON.stringify(this);
			}
		}
		var Jt = {
				type: 'block',
				parse: function (t, e) {
					const n = new Pt(t.args),
						i = n.readWord(),
						r = n.readWord(),
						o = n.readValue();
					let a;
					pt(
						i.size() && 'in' === r.content && o,
						() => 'illegal tag: ' + t.getText()
					),
						(this.variable = i.content),
						(this.collection = o),
						(this.hash = new Bt(n.remaining())),
						(this.templates = []),
						(this.elseTemplates = []);
					const s = this.liquid.parser
						.parseStream(e)
						.on('start', () => (a = this.templates))
						.on('tag:else', () => (a = this.elseTemplates))
						.on('tag:endfor', () => s.stop())
						.on('template', (t) => a.push(t))
						.on('end', () => {
							throw new Error(`tag ${t.getText()} not closed`);
						});
					s.start();
				},
				render: function* (t, e) {
					const n = this.liquid.renderer;
					let i = Qt(yield Lt(this.collection, t));
					if (!i.length)
						return void (yield n.renderTemplates(this.elseTemplates, t, e));
					const r = yield this.hash.render(t),
						o = r.offset || 0,
						a = void 0 === r.limit ? i.length : r.limit;
					(i = i.slice(o, o + a)), 'reversed' in r && i.reverse();
					const s = { forloop: new Yt(i.length) };
					t.push(s);
					for (const r of i) {
						if (
							((s[this.variable] = r),
							yield n.renderTemplates(this.templates, t, e),
							e.break)
						) {
							e.break = !1;
							break;
						}
						(e.continue = !1), s.forloop.next();
					}
					t.pop();
				},
			},
			Zt = {
				parse: function (t, e) {
					const n = new Pt(t.args);
					(this.variable = (function (t) {
						const e = t.readWord().content;
						if (e) return e;
						const n = t.readQuoted();
						if (n) return It(n);
					})(n)),
						pt(this.variable, () => t.args + ' not valid identifier'),
						(this.templates = []);
					const i = this.liquid.parser.parseStream(e);
					i
						.on('tag:endcapture', () => i.stop())
						.on('template', (t) => this.templates.push(t))
						.on('end', () => {
							throw new Error(`tag ${t.getText()} not closed`);
						}),
						i.start();
				},
				render: function* (t) {
					const e = this.liquid.renderer,
						n = yield e.renderTemplates(this.templates, t);
					t.bottom()[this.variable] = n;
				},
			};
		var te,
			ee = {
				parse: function (t, e) {
					(this.cond = t.args), (this.cases = []), (this.elseTemplates = []);
					let n = [];
					const i = this.liquid.parser
						.parseStream(e)
						.on('tag:when', (t) => {
							this.cases.push({ val: t.args, templates: (n = []) });
						})
						.on('tag:else', () => (n = this.elseTemplates))
						.on('tag:endcase', () => i.stop())
						.on('template', (t) => n.push(t))
						.on('end', () => {
							throw new Error(`tag ${t.getText()} not closed`);
						});
					i.start();
				},
				render: function* (t, e) {
					const n = this.liquid.renderer,
						i = yield new jt(this.cond).value(t);
					for (let r = 0; r < this.cases.length; r++) {
						const o = this.cases[r];
						if ((yield new jt(o.val).value(t)) === i)
							return void (yield n.renderTemplates(o.templates, t, e));
					}
					yield n.renderTemplates(this.elseTemplates, t, e);
				},
			},
			ne = {
				parse: function (t, e) {
					const n = this.liquid.parser.parseStream(e);
					n
						.on('token', (t) => {
							'endcomment' === t.name && n.stop();
						})
						.on('end', () => {
							throw new Error(`tag ${t.getText()} not closed`);
						}),
						n.start();
				},
			};
		!(function (t) {
			(t[(t.OUTPUT = 0)] = 'OUTPUT'), (t[(t.STORE = 1)] = 'STORE');
		})(te || (te = {}));
		var ie = te,
			re = {
				parse: function (t) {
					const e = t.args,
						n = new Pt(e);
					(this.file = this.liquid.options.dynamicPartials
						? n.readValue()
						: n.readFileName()),
						pt(this.file, () => `illegal argument "${t.args}"`);
					const i = n.p;
					'with' === n.readWord().content
						? (n.skipBlank(),
						  ':' !== n.peek() ? (this.withVar = n.readValue()) : (n.p = i))
						: (n.p = i),
						(this.hash = new Bt(n.remaining()));
				},
				render: function* (t, e) {
					const { liquid: n, hash: i, withVar: r, file: o } = this,
						{ renderer: a } = n,
						s = t.opts.dynamicPartials
							? B(o)
								? yield a.renderTemplates(n.parse(It(o)), t)
								: yield Lt(o, t)
							: o.getText();
					pt(s, () => `illegal filename "${o.getText()}":"${s}"`);
					const l = t.saveRegister('blocks', 'blockMode');
					t.setRegister('blocks', {}), t.setRegister('blockMode', ie.OUTPUT);
					const u = yield i.render(t);
					r && (u[s] = Lt(r, t));
					const c = yield n._parseFile(s, t.opts, t.sync);
					t.push(u),
						yield a.renderTemplates(c, t, e),
						t.pop(),
						t.restoreRegister(l);
				},
			},
			oe = {
				parse: function (t) {
					const e = t.args,
						n = new Pt(e);
					for (
						this.file = this.liquid.options.dynamicPartials
							? n.readValue()
							: n.readFileName(),
							pt(this.file, () => `illegal argument "${t.args}"`);
						!n.end();

					) {
						n.skipBlank();
						const t = n.p,
							e = n.readWord();
						if (
							('with' === e.content || 'for' === e.content) &&
							(n.skipBlank(), ':' !== n.peek())
						) {
							const t = n.readValue();
							if (t) {
								const i = n.p;
								let r;
								'as' === n.readWord().content ? (r = n.readWord()) : (n.p = i),
									(this[e.content] = { value: t, alias: r && r.content }),
									n.skipBlank(),
									',' === n.peek() && n.advance();
								continue;
							}
						}
						n.p = t;
						break;
					}
					this.hash = new Bt(n.remaining());
				},
				render: function* (t, e) {
					const { liquid: n, file: i, hash: r } = this,
						{ renderer: o } = n,
						a = t.opts.dynamicPartials
							? B(i)
								? yield o.renderTemplates(n.parse(It(i)), t)
								: Lt(i, t)
							: i.getText();
					pt(a, () => `illegal filename "${i.getText()}":"${a}"`);
					const s = new T({}, t.opts, t.sync),
						l = yield r.render(t);
					if (this.with) {
						const { value: e, alias: n } = this.with;
						l[n || a] = Lt(e, t);
					}
					if ((s.push(l), this.for)) {
						const { value: i, alias: r } = this.for;
						let u = Lt(i, t);
						(u = Qt(u)), (l.forloop = new Yt(u.length));
						for (const t of u) {
							l[r] = t;
							const i = yield n._parseFile(a, s.opts, s.sync);
							yield o.renderTemplates(i, s, e), l.forloop.next();
						}
					} else {
						const t = yield n._parseFile(a, s.opts, s.sync);
						yield o.renderTemplates(t, s, e);
					}
				},
			},
			ae = {
				parse: function (t) {
					const e = new Pt(t.args);
					this.variable = e.readWord().content;
				},
				render: function (t, e) {
					const n = t.environments;
					_(n[this.variable]) || (n[this.variable] = 0),
						e.write(u(--n[this.variable]));
				},
			},
			se = {
				parse: function (t) {
					const e = new Pt(t.args),
						n = e.readValue();
					for (
						e.skipBlank(),
							this.candidates = [],
							n &&
								(':' === e.peek()
									? ((this.group = n), e.advance())
									: this.candidates.push(n));
						!e.end();

					) {
						const t = e.readValue();
						t && this.candidates.push(t), e.readTo(',');
					}
					pt(this.candidates.length, () => 'empty candidates: ' + t.getText());
				},
				render: function (t, e) {
					const n = `cycle:${Lt(this.group, t)}:` + this.candidates.join(','),
						i = t.getRegister('cycle');
					let r = i[n];
					void 0 === r && (r = i[n] = 0);
					const o = this.candidates[r];
					(r = (r + 1) % this.candidates.length), (i[n] = r);
					const a = Lt(o, t);
					e.write(a);
				},
			},
			le = {
				parse: function (t, e) {
					let n;
					(this.branches = []), (this.elseTemplates = []);
					const i = this.liquid.parser
						.parseStream(e)
						.on('start', () =>
							this.branches.push({ cond: t.args, templates: (n = []) })
						)
						.on('tag:elsif', (t) => {
							this.branches.push({ cond: t.args, templates: (n = []) });
						})
						.on('tag:else', () => (n = this.elseTemplates))
						.on('tag:endif', () => i.stop())
						.on('template', (t) => n.push(t))
						.on('end', () => {
							throw new Error(`tag ${t.getText()} not closed`);
						});
					i.start();
				},
				render: function* (t, e) {
					const n = this.liquid.renderer;
					for (const i of this.branches) {
						if (At(yield new jt(i.cond).value(t), t))
							return void (yield n.renderTemplates(i.templates, t, e));
					}
					yield n.renderTemplates(this.elseTemplates, t, e);
				},
			},
			ue = {
				parse: function (t) {
					const e = new Pt(t.args);
					this.variable = e.readWord().content;
				},
				render: function (t, e) {
					const n = t.environments;
					_(n[this.variable]) || (n[this.variable] = 0);
					const i = n[this.variable];
					n[this.variable]++, e.write(u(i));
				},
			},
			ce = {
				parse: function (t, e) {
					const n = new Pt(t.args),
						i = this.liquid.options.dynamicPartials
							? n.readValue()
							: n.readFileName();
					pt(i, () => `illegal argument "${t.args}"`),
						(this.file = i),
						(this.hash = new Bt(n.remaining())),
						(this.tpls = this.liquid.parser.parse(e));
				},
				render: function* (t, e) {
					const { liquid: n, hash: i, file: r } = this,
						{ renderer: o } = n,
						a = t.opts.dynamicPartials
							? B(r)
								? yield o.renderTemplates(n.parse(It(r)), t)
								: Lt(this.file, t)
							: r.getText();
					pt(a, () => `illegal filename "${r.getText()}":"${a}"`),
						t.setRegister('blockMode', ie.STORE);
					const s = t.getRegister('blocks'),
						l = yield o.renderTemplates(this.tpls, t);
					void 0 === s[''] && (s[''] = l);
					const u = yield n._parseFile(a, t.opts, t.sync);
					t.push(yield i.render(t)), t.setRegister('blockMode', ie.OUTPUT);
					const c = yield o.renderTemplates(u, t);
					t.pop(), e.write(c);
				},
			},
			_e = {
				parse: function (t, e) {
					const n = /\w+/.exec(t.args);
					(this.block = n ? n[0] : ''), (this.tpls = []);
					const i = this.liquid.parser
						.parseStream(e)
						.on('tag:endblock', () => i.stop())
						.on('template', (t) => this.tpls.push(t))
						.on('end', () => {
							throw new Error(`tag ${t.getText()} not closed`);
						});
					i.start();
				},
				render: function* (t, e) {
					const n = t.getRegister('blocks'),
						i = n[this.block],
						r = this.liquid.renderer,
						o = void 0 !== i ? i : yield r.renderTemplates(this.tpls, t);
					t.getRegister('blockMode', ie.OUTPUT) !== ie.STORE
						? e.write(o)
						: (n[this.block] = o);
				},
			},
			de = {
				parse: function (t, e) {
					this.tokens = [];
					const n = this.liquid.parser.parseStream(e);
					n
						.on('token', (t) => {
							'endraw' === t.name ? n.stop() : this.tokens.push(t);
						})
						.on('end', () => {
							throw new Error(`tag ${t.getText()} not closed`);
						}),
						n.start();
				},
				render: function () {
					return this.tokens.map((t) => t.getText()).join('');
				},
			};
		class pe extends Yt {
			constructor(t, e) {
				super(t), (this.length = t), (this.cols = e);
			}
			row() {
				return Math.floor(this.i / this.cols) + 1;
			}
			col0() {
				return this.i % this.cols;
			}
			col() {
				return this.col0() + 1;
			}
			col_first() {
				return 0 === this.col0();
			}
			col_last() {
				return this.col() === this.cols;
			}
		}
		const he = {
				assign: Gt,
				for: Jt,
				capture: Zt,
				case: ee,
				comment: ne,
				include: re,
				render: oe,
				decrement: ae,
				increment: ue,
				cycle: se,
				if: le,
				layout: ce,
				block: _e,
				raw: de,
				tablerow: {
					parse: function (t, e) {
						const n = new Pt(t.args);
						(this.variable = n.readWord()), n.skipBlank();
						const i = n.readWord();
						let r;
						pt(i && 'in' === i.content, () => 'illegal tag: ' + t.getText()),
							(this.collection = n.readValue()),
							(this.hash = new Bt(n.remaining())),
							(this.templates = []);
						const o = this.liquid.parser
							.parseStream(e)
							.on('start', () => (r = this.templates))
							.on('tag:endtablerow', () => o.stop())
							.on('template', (t) => r.push(t))
							.on('end', () => {
								throw new Error(`tag ${t.getText()} not closed`);
							});
						o.start();
					},
					render: function* (t, e) {
						let n = Qt(yield Lt(this.collection, t));
						const i = yield this.hash.render(t),
							r = i.offset || 0,
							o = void 0 === i.limit ? n.length : i.limit;
						n = n.slice(r, r + o);
						const a = i.cols || n.length,
							s = this.liquid.renderer,
							l = new pe(n.length, a),
							u = { tablerowloop: l };
						t.push(u);
						for (let i = 0; i < n.length; i++, l.next())
							(u[this.variable.content] = n[i]),
								0 === l.col0() &&
									(1 !== l.row() && e.write('</tr>'),
									e.write(`<tr class="row${l.row()}">`)),
								e.write(`<td class="col${l.col()}">`),
								yield s.renderTemplates(this.templates, t, e),
								e.write('</td>');
						n.length && e.write('</tr>'), t.pop();
					},
				},
				unless: {
					parse: function (t, e) {
						let n;
						(this.templates = []), (this.elseTemplates = []);
						const i = this.liquid.parser
							.parseStream(e)
							.on('start', () => {
								(n = this.templates), (this.cond = t.args);
							})
							.on('tag:else', () => (n = this.elseTemplates))
							.on('tag:endunless', () => i.stop())
							.on('template', (t) => n.push(t))
							.on('end', () => {
								throw new Error(`tag ${t.getText()} not closed`);
							});
						i.start();
					},
					render: function* (t, e) {
						const n = this.liquid.renderer,
							i = yield new jt(this.cond).value(t);
						yield xt(i, t)
							? n.renderTemplates(this.templates, t, e)
							: n.renderTemplates(this.elseTemplates, t, e);
					},
				},
				break: {
					render: function (t, e) {
						e.break = !0;
					},
				},
				continue: {
					render: function (t, e) {
						e.continue = !0;
					},
				},
			},
			fe = {
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				'"': '&#34;',
				"'": '&#39;',
			},
			ge = {
				'&amp;': '&',
				'&lt;': '<',
				'&gt;': '>',
				'&#34;': '"',
				'&#39;': "'",
			};
		function me(t) {
			return u(t).replace(/&|<|>|"|'/g, (t) => fe[t]);
		}
		const ye = Math.abs,
			Ee = Math.max,
			ve = Math.min,
			Oe = Math.ceil,
			De = Math.floor;
		const Pe = /%([-_0^#:]+)?(\d+)?([EO])?(.)/,
			Me = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			be = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			],
			we = Me.map(Ae),
			Ce = be.map(Ae),
			Te = { 1: 'st', 2: 'nd', 3: 'rd', default: 'th' };
		function Ae(t) {
			return t.slice(0, 3);
		}
		function xe(t) {
			return [
				31,
				(function (t) {
					const e = t.getFullYear();
					return !(0 != (3 & e) || !(e % 100 || (e % 400 == 0 && e)));
				})(t)
					? 29
					: 28,
				31,
				30,
				31,
				30,
				31,
				31,
				30,
				31,
				30,
				31,
			];
		}
		function qe(t) {
			let e = 0;
			for (let n = 0; n < t.getMonth(); ++n) e += xe(t)[n];
			return e + t.getDate();
		}
		function je(t, e) {
			const n = qe(t) + (e - t.getDay()),
				i = 7 - new Date(t.getFullYear(), 0, 1).getDay() + e;
			return String(Math.floor((n - i) / 7) + 1);
		}
		const Le = {
				d: 2,
				e: 2,
				H: 2,
				I: 2,
				j: 3,
				k: 2,
				l: 2,
				L: 3,
				m: 2,
				M: 2,
				S: 2,
				U: 2,
				W: 2,
			},
			Ie = {
				a: ' ',
				A: ' ',
				b: ' ',
				B: ' ',
				c: ' ',
				e: ' ',
				k: ' ',
				l: ' ',
				p: ' ',
				P: ' ',
			},
			Re = {
				a: (t) => Ce[t.getDay()],
				A: (t) => be[t.getDay()],
				b: (t) => we[t.getMonth()],
				B: (t) => Me[t.getMonth()],
				c: (t) => t.toLocaleString(),
				C: (t) =>
					(function (t) {
						return parseInt(t.getFullYear().toString().substring(0, 2), 10);
					})(t),
				d: (t) => t.getDate(),
				e: (t) => t.getDate(),
				H: (t) => t.getHours(),
				I: (t) => String(t.getHours() % 12 || 12),
				j: (t) => qe(t),
				k: (t) => t.getHours(),
				l: (t) => String(t.getHours() % 12 || 12),
				L: (t) => t.getMilliseconds(),
				m: (t) => t.getMonth() + 1,
				M: (t) => t.getMinutes(),
				N: (t, e) => {
					const n = Number(e.width) || 9;
					return (function (t, e, n = ' ') {
						return E(t, e, n, (t, e) => t + e);
					})(String(t.getMilliseconds()).substr(0, n), n, '0');
				},
				p: (t) => (t.getHours() < 12 ? 'AM' : 'PM'),
				P: (t) => (t.getHours() < 12 ? 'am' : 'pm'),
				q: (t) =>
					(function (t) {
						const e = t.getDate().toString(),
							n = parseInt(e.slice(-1));
						return Te[n] || Te.default;
					})(t),
				s: (t) => Math.round(t.valueOf() / 1e3),
				S: (t) => t.getSeconds(),
				u: (t) => t.getDay() || 7,
				U: (t) => je(t, 0),
				w: (t) => t.getDay(),
				W: (t) => je(t, 1),
				x: (t) => t.toLocaleDateString(),
				X: (t) => t.toLocaleTimeString(),
				y: (t) => t.getFullYear().toString().substring(2, 4),
				Y: (t) => t.getFullYear(),
				z: (t, e) => {
					const n = t.getTimezoneOffset(),
						i = Math.abs(n),
						r = i % 60;
					return (
						(n > 0 ? '-' : '+') +
						y(Math.floor(i / 60), 2, '0') +
						(e.flags[':'] ? ':' : '') +
						y(r, 2, '0')
					);
				},
				t: () => '\t',
				n: () => '\n',
				'%': () => '%',
			};
		function Be(t, e) {
			const [n, i = '', r, o, a] = e,
				s = Re[a];
			if (!s) return n;
			const l = {};
			for (const t of i) l[t] = !0;
			let u = String(s(t, { flags: l, width: r, modifier: o })),
				c = Ie[a] || '0',
				_ = r || Le[a] || 0;
			var d;
			return (
				l['^']
					? (u = u.toUpperCase())
					: l['#'] &&
					  ((d = u),
					  (u = [...d].some((t) => t >= 'a' && t <= 'z')
							? d.toUpperCase()
							: d.toLowerCase())),
				l._ ? (c = ' ') : l[0] && (c = '0'),
				l['-'] && (_ = 0),
				y(u, _, c)
			);
		}
		Re.h = Re.b;
		var We = Object.freeze({
			escape: me,
			escapeOnce: function (t) {
				return me(
					(function (t) {
						return String(t).replace(/&(amp|lt|gt|#34|#39);/g, (t) => ge[t]);
					})(t)
				);
			},
			newlineToBr: function (t) {
				return t.replace(/\n/g, '<br/>');
			},
			stripHtml: function (t) {
				return t.replace(
					/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,
					''
				);
			},
			abs: ye,
			atLeast: Ee,
			atMost: ve,
			ceil: Oe,
			dividedBy: (t, e) => t / e,
			floor: De,
			minus: (t, e) => t - e,
			modulo: (t, e) => t % e,
			times: (t, e) => t * e,
			round: function (t, e = 0) {
				const n = Math.pow(10, e);
				return Math.round(t * n) / n;
			},
			plus: function (t, e) {
				return Number(t) + Number(e);
			},
			sortNatural: function (t, e) {
				return t && t.sort
					? void 0 !== e
						? [...t].sort((t, n) => D(t[e], n[e]))
						: [...t].sort(D)
					: [];
			},
			urlDecode: (t) => t.split('+').map(decodeURIComponent).join(' '),
			urlEncode: (t) => t.split(' ').map(encodeURIComponent).join('+'),
			join: (t, e) => t.join(void 0 === e ? ' ' : e),
			last: (t) => (p(t) ? f(t) : ''),
			first: (t) => (p(t) ? t[0] : ''),
			reverse: (t) => [...t].reverse(),
			sort: function (t, e) {
				const n = (t) => (e ? this.context.getFromScope(t, e.split('.')) : t);
				return Xt(t).sort((t, e) =>
					(t = n(t)) < (e = n(e)) ? -1 : t > e ? 1 : 0
				);
			},
			size: (t) => (t && t.length) || 0,
			map: function (t, e) {
				return Xt(t).map((t) => this.context.getFromScope(t, e.split('.')));
			},
			concat: function (t, e) {
				return Xt(t).concat(e);
			},
			slice: function (t, e, n = 1) {
				return (e = e < 0 ? t.length + e : e), t.slice(e, e + n);
			},
			where: function (t, e, n) {
				return Xt(t).filter((t) => {
					const i = this.context.getFromScope(t, String(e).split('.'));
					return void 0 === n ? At(i, this.context) : i === n;
				});
			},
			uniq: function (t) {
				const e = {};
				return (t || []).filter(
					(t) => !e.hasOwnProperty(String(t)) && ((e[String(t)] = !0), !0)
				);
			},
			date: function (t, e) {
				let n = t;
				return (
					'now' === t || 'today' === t
						? (n = new Date())
						: _(t)
						? (n = new Date(1e3 * t))
						: s(t) && (n = /^\d+$/.test(t) ? new Date(1e3 * +t) : new Date(t)),
					(function (t) {
						return t instanceof Date && !isNaN(t.getTime());
					})(n)
						? (function (t, e) {
								let n,
									i = '',
									r = e;
								for (; (n = Pe.exec(r)); )
									(i += r.slice(0, n.index)),
										(r = r.slice(n.index + n[0].length)),
										(i += Be(t, n));
								return i + r;
						  })(n, e)
						: t
				);
			},
			Default: function (t, e) {
				return p(t) || s(t)
					? t.length
						? t
						: e
					: xt(c(t), this.context)
					? e
					: t;
			},
			json: function (t) {
				return JSON.stringify(t);
			},
			append: function (t, e) {
				return pt(void 0 !== e, () => 'append expect 2 arguments'), u(t) + u(e);
			},
			prepend: function (t, e) {
				return (
					pt(void 0 !== e, () => 'prepend expect 2 arguments'), u(e) + u(t)
				);
			},
			lstrip: function (t) {
				return u(t).replace(/^\s+/, '');
			},
			downcase: function (t) {
				return u(t).toLowerCase();
			},
			upcase: function (t) {
				return u(t).toUpperCase();
			},
			remove: function (t, e) {
				return u(t).split(e).join('');
			},
			removeFirst: function (t, e) {
				return u(t).replace(e, '');
			},
			rstrip: function (t) {
				return u(t).replace(/\s+$/, '');
			},
			split: function (t, e) {
				return u(t).split(e);
			},
			strip: function (t) {
				return u(t).trim();
			},
			stripNewlines: function (t) {
				return u(t).replace(/\n/g, '');
			},
			capitalize: function (t) {
				return (t = u(t)).charAt(0).toUpperCase() + t.slice(1);
			},
			replace: function (t, e, n) {
				return u(t).split(e).join(n);
			},
			replaceFirst: function (t, e, n) {
				return u(t).replace(e, n);
			},
			truncate: function (t, e = 50, n = '...') {
				return (t = u(t)).length <= e ? t : t.substr(0, e - n.length) + n;
			},
			truncatewords: function (t, e = 15, n = '...') {
				const i = t.split(/\s+/);
				let r = i.slice(0, e).join(' ');
				return i.length >= e && (r += n), r;
			},
		});
		class Ue {
			constructor() {
				this.impls = {};
			}
			get(t) {
				const e = this.impls[t];
				return pt(e, () => `tag "${t}" not found`), e;
			}
			set(t, e) {
				this.impls[t] = e;
			}
		}
		class Ke {
			constructor(t) {
				(this.strictFilters = t), (this.impls = {});
			}
			get(t) {
				const e = this.impls[t];
				return pt(e || !this.strictFilters, () => 'undefined filter: ' + t), e;
			}
			set(t, e) {
				this.impls[t] = e;
			}
			create(t, e) {
				return new $t(t, this.get(t), e);
			}
		}
		class ke {
			constructor(t = {}) {
				var e;
				(this.options = ((e = w(t)), Object.assign({}, b, e))),
					(this.parser = new Vt(this)),
					(this.renderer = new bt()),
					(this.fs = t.fs || x),
					(this.filters = new Ke(this.options.strictFilters)),
					(this.tags = new Ue()),
					h(he, (t, e) => this.registerTag(O(e), t)),
					h(We, (t, e) => this.registerFilter(O(e), t));
			}
			parse(t, e) {
				const n = new Pt(t, e).readTopLevelTokens(this.options);
				return this.parser.parse(n);
			}
			_render(t, e, n, i) {
				const r = Object.assign({}, this.options, w(n)),
					o = new T(e, r, i);
				return this.renderer.renderTemplates(t, o);
			}
			async render(t, e, n) {
				return kt(this._render(t, e, n, !1));
			}
			renderSync(t, e, n) {
				return St(this._render(t, e, n, !0));
			}
			_parseAndRender(t, e, n, i) {
				const r = this.parse(t);
				return this._render(r, e, n, i);
			}
			async parseAndRender(t, e, n) {
				return kt(this._parseAndRender(t, e, n, !1));
			}
			parseAndRenderSync(t, e, n) {
				return St(this._parseAndRender(t, e, n, !0));
			}
			*_parseFile(t, e, n) {
				const i = Object.assign({}, this.options, w(e)),
					r = i.root.map((e) => this.fs.resolve(e, t, i.extname));
				if (void 0 !== this.fs.fallback) {
					const e = this.fs.fallback(t);
					void 0 !== e && r.push(e);
				}
				for (const t of r) {
					const { cache: e } = i;
					if (e) {
						const n = yield e.read(t);
						if (n) return n;
					}
					if (!(n ? this.fs.existsSync(t) : yield this.fs.exists(t))) continue;
					const r = this.parse(
						n ? this.fs.readFileSync(t) : yield this.fs.readFile(t),
						t
					);
					return e && e.write(t, r), r;
				}
				throw this.lookupError(t, i.root);
			}
			async parseFile(t, e) {
				return kt(this._parseFile(t, e, !1));
			}
			parseFileSync(t, e) {
				return St(this._parseFile(t, e, !0));
			}
			async renderFile(t, e, n) {
				const i = await this.parseFile(t, n);
				return this.render(i, e, n);
			}
			renderFileSync(t, e, n) {
				const i = w(n),
					r = this.parseFileSync(t, i);
				return this.renderSync(r, e, n);
			}
			_evalValue(t, e) {
				return new Ft(t, this.filters).value(e);
			}
			async evalValue(t, e) {
				return kt(this._evalValue(t, e));
			}
			evalValueSync(t, e) {
				return St(this._evalValue(t, e));
			}
			registerFilter(t, e) {
				this.filters.set(t, e);
			}
			registerTag(t, e) {
				this.tags.set(t, e);
			}
			plugin(t) {
				return t.call(this, ke);
			}
			express() {
				const t = this;
				return function (e, n, i) {
					const r = { root: [...C(this.root), ...t.options.root] };
					t.renderFile(e, n, r).then((t) => i(null, t), i);
				};
			}
			lookupError(t, e) {
				const n = new Error('ENOENT');
				return (
					(n.message = `ENOENT: Failed to lookup "${t}" in "${e}"`),
					(n.code = 'ENOENT'),
					n
				);
			}
			async getTemplate(t, e) {
				return this.parseFile(t, e);
			}
			getTemplateSync(t, e) {
				return this.parseFileSync(t, e);
			}
		}
	},
	94: function (t, e, n) {
		'use strict';
		var i = new (n(30).a)(),
			r = function (t, e, n, i) {
				function r(t, e) {
					return void 0 === t ? e : t;
				}
				function o(t, e, n, i, o) {
					if (
						((e = r(e, 2)),
						(n = r(n, ',')),
						(i = r(i, '.')),
						isNaN(t) || null == t)
					)
						return 0;
					var a = (t = (t / 100).toFixed(e)).split('.');
					return (
						a[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + n) +
						(a[1] && (o || parseInt(a[1]) > 0) ? i + a[1] : '')
					);
				}
				'string' == typeof t && (t = t.replace('.', ''));
				var a = '',
					s = /\{\{\s*(\w+)\s*\}\}/,
					l = e;
				switch (l.match(s)[1]) {
					case 'amount':
						a = o(t, 2, ',', '.', i);
						break;
					case 'amount_no_decimals':
						a = o(t, 0, ',', '.', i);
						break;
					case 'amount_with_comma_separator':
						a = o(t, 2, '.', ',', i);
						break;
					case 'amount_with_space_separator':
						a = o(t, 2, ' ', ',', i);
						break;
					case 'amount_with_period_and_space_separator':
						a = o(t, 2, ' ', '.', i);
						break;
					case 'amount_no_decimals_with_comma_separator':
						a = o(t, 0, '.', ',', i);
						break;
					case 'amount_no_decimals_with_space_separator':
						a = o(t, 0, ' ', '', i);
						break;
					case 'amount_with_space_separator':
						a = o(t, 2, ' ', ',', i);
						break;
					case 'amount_with_apostrophe_separator':
						a = o(t, 2, "'", '.', i);
				}
				return n ? l.replace(s, a) : a;
			};
		i.registerFilter('money', function (t) {
			return r(t, window.Globo.moneyFormat, !0, !0);
		}),
			i.registerFilter('money_without_trailing_zeros', function (t) {
				return r(t, window.Globo.moneyFormat, !0, !1);
			}),
			i.registerFilter('money_without_currency', function (t) {
				return r(t, window.Globo.moneyFormat, !1, !1);
			}),
			i.registerFilter('asset_url', function (t) {
				return window.Globo.assetsUrl + t;
			}),
			i.registerFilter('files_url', function (t) {
				return window.Globo.filesUrl + t;
			}),
			i.registerFilter('img_url', function (t, e, n) {
				n = n || !1;
				var i = t.split('.').pop(),
					r = t.lastIndexOf(i) - 1;
				return t.slice(0, r) + '_' + e + t.slice(r);
			}),
			(e.a = i);
	},
});
