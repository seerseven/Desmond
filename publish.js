const { exec } = require('child_process');
const { stdout } = require('process');

exec('npm publish', (error, stdout, strerr) => {
	console.log('Packaged Published');
});
