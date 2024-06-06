## Node.js Lego Dimensions Library

[![Join the chat at https://gitter.im/ags131/node-ld](https://badges.gitter.im/ags131/node-ld.svg)](https://gitter.im/ags131/node-ld?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![npm](https://nodei.co/npm/node-ld.png "NPM")

**Better instructions here**: https://www.reddit.com/r/node/comments/u92piu/comment/i5pl5fl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

NOTE: This does not currently work for the Xbox version of the toypad. It will connect but no responses will be received. If someone manages to get it working, please let me know so I can make this more compatible.

### Requirements 
Computer with Node.js 4.1 or newer. https://nodejs.org
Tested and developed on node.js 4.1+
NFC enabled Iphone Download Smart NFC $1.99 on app store and NFC Tools to lock the character chips you write

### If you want to write Vehicles

 This will only work for the basic versions of the vehicles.
How Character and Vehicle Tag Codes Work

Basically, the lines that you are writing to your NFC tag correspond to a few different things.

Line 35 will always be 00000000.

Lines 36 and 37 are generated based on the Character/Vehicle ID.
For Characters, the program combines the NFC Tag’s UID with the Character ID to create a wholly unique string for these lines.
But for Vehicles, Line 36 is based solely on the Vehicle ID. The NFC Tag UID does not matter for Line 36. Meanwhile, for Vehicles, Line 37 is always 00000000.

Line 38 identifies which type of token is being used.

    Character tokens will always be 00000000

    Vehicle tokens will always be 00010000

Line 43 is based solely on the NFC Tag’s UID. It is the same regardless of if the tag is being used for a Character or a Vehicle.

A Basic Vehicle Token will always look like this:

    Line 35 (0x23): 00000000

    Line 36 (0x24): STRING BASED ON VEHICLE ID

    Line 37 (0x25): 00000000

    Line 38 (0x26): 00010000

    Line 43 (0x2B): STRING BASED ON NFC TAG UID

Because Line 36 for Vehicles is always the same, we can build a table that matches every Vehicle to its corresponding Line 36.

For example, Bad Cop’s Police Car (Vehicle ID 1200), will always produce a Line 36 of E8030000. So a token that contains the Police Car would look like this:

    Line 35 (0x23): 00000000

    Line 36 (0x24): E8030000

    Line 37 (0x25): 00000000

    Line 38 (0x26): 00010000

    Line 43 (0x2B): STRING BASED ON NFC TAG UID

So all we need to do to finish the token is to generate Line 43. Luckily, Line 43 is only based on the NFC Tag’s UID, so it is always the same regardless of if the token is for Characters or for Vehicles. Because our program generates Line 43 when it gives us our Character strings, we can use it to construct our Vehicle strings.
Steps

    Run the command “node characters.js” (with no quotation marks)

    Your Terminal/Command Line should now say “Enter NFC’s UID”

    Enter the UID and record the output for line 43

    Find your vehicle in the reference sheet

    Write 00000000 to Line 35

    Write the correct code to Line 36 based on the reference sheet

    Write 00000000 to Line 37

    Write 00010000 to Line 38

    Write the output from step 3 to Line 43
Credit = https://www.reddit.com/r/Legodimensions/comments/rl827n/comment/i7c1rvo/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button

#### Linux 
libusb-1.0

### Installation

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



