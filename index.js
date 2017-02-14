var child_process = require('child_process');
var os = require('os');
var path = require('path');

exports.eject = function(drive, callback) {

	var options = { timeout: 5000};
	var exePath;

	switch (os.platform()) {

		case 'win32' :
			exePath = path.join(__dirname, 'bin', 'EjectMedia.exe');
			child_process.execFile(exePath, [drive, '-L'], options, callback);
			break;

		case 'darwin' :
			exePath = '/usr/sbin/diskutil eject "' + drive + '"';
			child_process.exec(exePath, options, callback);
			break;

		case 'linux' :
			exePath = 'eject -f "' + drive + '"* 2>/dev/null || /bin/true';
			child_process.exec(exePath, options, callback);
			break;
	}
};

