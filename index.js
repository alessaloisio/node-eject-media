var child_process = require('child_process');
var os = require('os')
var path = require('path');
var unmount = require('unmount');

exports.eject = function(drive, callback) {

	if (os.platform() == 'win32'){

		var exePath = path.join(__dirname, 'bin', 'EjectMedia.exe');
		var params = [drive,'L'];
		var options = { timeout: 5000};

		child_process.execFile(exePath, params, options, callback);
	}
	else {

		ejectUnix(drive, callback);
	}

};

