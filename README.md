Hide Desktop Icons (MacOS only for now)
==

Temporarily hide the desktop icons by placing a window that takes up the entire screen and contains the wallpaper image right above the icons. The window won't show up in the Mission Control and it won't be moveable.

**Important:** This package does not work on Windows or Linux

**Important:** This will only hide the icons for the currently main display and workspace

## Installation

Install with NPM
```javascript
npm install hide-desktop-icons
```

or Yarn
```javascript
yarn add hide-desktop-icons
```

Import various functions as follows:
```js
import desktopIcons from 'hide-desktop-icons';
```

or 

```js
const desktopIcons = require('hide-desktop-icons')
```

## Usage

### `hide(filePath, [options]): Promise`

Returns a Promise that will resolve when the windows are hidden with the pid of the `child_process`.


**filePath** (type: `String`) is the path to the file which is to be used as the new wallpaper. If this is undefined, the default user wallpaper will be used

**options** (type: `Object`) 
- **detached** (type: `bool`, default: `false`) detach the child process. This allows the parent process to exit without showing the icons. Make sure you cleanup at some point by killing the process, using [forceShow](https://github.com/karaggeorge/hide-desktop-icons#forceshowvoid-void)


```js
desktopIcons.hide().then(pid => {
  console.log(`Icons are now hidden (pid: ${pid})`);
});
```

### `show(void): void`

Shows the windows again. This should be called before exiting to make sure the window gets destroyed.

```js
desktopIcons.show();
```

### `forceShow(void): void`

Shows the windows again by killing the process. Works even if the icons were hidden by a different script.

```js
desktopIcons.forceShow();
```

## Contributing

Please feel free to submit a Pull Request, report a Bug or propose a Feature!

This package was created for [Kap](https://github.com/wulkano/kap)

## Related

[wallpaper](https://github.com/sindresorhus/wallpaper) - Get/Set the user's wallpaper

## License
MIT Licensed. Copyright (c) George Karagkiaouris 2017.
