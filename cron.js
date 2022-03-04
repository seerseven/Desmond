const { exec } = require('child_process');
const { stdout } = require('process');
var CronJob = require('cron').CronJob;
var job = new CronJob(
	'* * * * *',
	function () {
		exec('gulp', (error, stdout, strerr) => {
			console.log('Version Changed');
		});
	},
	null,
	true,
	'America/Los_Angeles'
);
// Use this if the 4th param is default value(false)
// job.start()
