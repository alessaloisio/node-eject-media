# node-eject-media
Safely eject media on Windows, OSX, and Linux

Runs one of the following in a child_process:

* diskutil eject /drive (OSX)
* eject -f /drive (Linux)
* [EjectMedia](http://www.uwe-sieber.de/drivetools_e.html) Windows)

#Usage

    var ejectMedia = require('eject-media');
    ejectMedia.eject('/Volumes/Drive', function(error, stdin, stdout) {
    	
    	if (!error) console.log('ejected!';)

    });
