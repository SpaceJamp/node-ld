## Node.js Lego Dimensions Library

[![Join the chat at https://gitter.im/ags131/node-ld](https://badges.gitter.im/ags131/node-ld.svg)](https://gitter.im/ags131/node-ld?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![npm](https://nodei.co/npm/node-ld.png "NPM")

NOTE: This does not currently work for the Xbox version of the toypad. It will connect but no responses will be received. If someone manages to get it working, please let me know so I can make this more compatible.

Setup

uninstall the old version of Node. Delete any directories you've been working in.

install 10.15.3 of Node (I did this using nvm but because you're on Windows I'd just do it this way).

pull the repo from GitHub, extract it if needed and navigate to that folder.

Install

    run npm install --ignore-script 
This ignores the gyp scripts that are erroring out.

    run npm install 
which will now work normally without error.

Run

type node `node characters.js` into windows terminal 

You should have a prompt that says Enter NFC's UID: `Type in a number.`


### Windows libUSB setup (Only if using LibUSBTransport)
#### The following instructions are only needed if using the LibUSBTransport. 
#### The default transport is HIDTransport and works without a driver install.
Install node-4.1.2 (Latest version that works with node-usb)
[32Bit](https://nodejs.org/dist/v4.1.2/node-v4.1.2-x86.msi)
or
[64Bit](https://nodejs.org/dist/v4.1.2/node-v4.1.2-x64.msi)

Use Zadig to (In tools folder) to install the USB driver

1. Connect the ToyPad
2. Launch Zadig
3. Select Options > List All Devices
4. Use the dropdown to select `LEGO READER V2.10`
5. Click Install Driver
6. You may have to unplug and replug the portal for it to take effect.
7. At this point, this library should connect to it via the LibUSBTransport

### Samples

See demo.js and toypadDemo.js in the samples folder for example usage



