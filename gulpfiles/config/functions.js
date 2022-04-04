const auto = {
	init: function () {
		auto.enable();
	},
	enable: function () {
		const exportsArray = Object.keys(module.exports);
		exportsArray.map((element) => {
			return task(element, module.exports[element]);
		});
	},
};

// exports.society = auto.init;
