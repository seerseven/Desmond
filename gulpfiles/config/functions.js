module.exports = {
	formatter: function (filePath) {
		return (
			'@forward ' + "'" + filePath.replaceAll('_', '') + "'" + ';' + '\r\n'
		);
	},
	datetime: function () {
		var months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec',
		];
		var days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		var d = new Date();
		var day = days[d.getDay()];
		var hr = d.getHours();
		var min = d.getMinutes();
		var ampm = 'am';
		if (hr > 12) {
			hr -= 12;
			ampm = 'pm';
		}
		var strhr = hr.toString();
		var strmin = min.toString();
		var ti = strhr + strmin;
		// var ti = strhr;
		var date = d.getDate();
		var month = months[d.getMonth()];
		var year = d.getFullYear();
		var sh = '' + ti + ampm + '-' + date + month + year;
		var shCaps = sh.toUpperCase();
		return shCaps;
	},
};
