export const qry = {
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
	attr: function (cls, sel) {
		return $(sel).attr(cls);
	},
	prop: function (cls, val, sel) {
		$(sel).prop(cls, val);
	},
	data: function (cls, val, sel) {
		$(sel).data(cls, val);
	},
};

export const ejs = {
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
	get: function (attr, sel) {
		return sel.getAttribute(attr);
	},
};

export const get = {
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

export const id = {
	new: function (i, v) {
		s = get.id(i);
		ejs.set('id', v, s);
	},
	set: function (i, v) {
		s = get.class(i);
		ejs.set('id', v, s);
	},
};

export const dom = {
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
		return (s = get[e](i)), ejs[m](p, s);
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

export const loop = {
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
