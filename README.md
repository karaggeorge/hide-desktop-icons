Hide Desktop Icons (MacOS only for now)
==

Temporarily hide the desktop icons by placing a window that takes up the entire screen and contains the wallpaper image right aboev the icons. The window won't show up in the Mission Control and it won't be moveable.

**Important:** This package does not work on Windows or Linux

**Important:** This will only hide the icons for the currently main display and workspace

## Instalation

To install hide-desktop-icons in your project add it using NPM
```javascript
npm install hide-desktop-icons
```

or yarn
```javascript
yarn add hide-desktop-icons
```

After that you can import the various functions as follows:
```js
import desktopIcons from 'hide-desktop-icons';
```

or 

```js
const desktopIcons = require('hide-desktop-icons')
```

## Usage

### `hide(void): Promise`

Returns a Promise that will resolve when the windows are hidden.

```js
desktopIcons.hide().then(() => {
  console.log('Icons are now hidden');
});
```

### `show(void): void`

Shows the windows again. This should be called before exiting to make sure the window gets destroyed.

```js
desktopIcons.show();
```

## Contributing

Please feel free to submit a Pull Request, report a Bug or propose a Feature!

This package was created for [Kap](https://github.com/wulkano/kap)

## Related

[wallpaper](https://github.com/sindresorhus/wallpaper) - Get/Set the user's wallpaper

## License
MIT Licensed. Copyright (c) George Karagkiaouris 2017.
