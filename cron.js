const { exec } = require('child_process');
const { stdout } = require('process');
var CronJob = require('cron').CronJob;
var job = new CronJob(
	'* * * * *',
	function () {
		exec('gulp verMaster', (error, stdout, strerr) => {
			console.log('Desmond Version Changed');
		});
		exec('gulp verCore', (error, stdout, strerr) => {
			console.log('App Version Changed');
		});
	},
	null,
	true,
	'America/Los_Angeles'
);
// Use this if the 4th param is default value(false)
// job.start()
