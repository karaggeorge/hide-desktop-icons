const wallpaper = require('wallpaper');
const execa = require('execa');
const path = require('path');

const scriptPath = path.join(__dirname, 'swift/HideIcons');

var hideProcess;

exports.hide = () => {
  wallpaper.get().then(imagePath => {
    hideProcess = execa(scriptPath, [imagePath]);
  });
}

exports.show = () => hideProcess.kill();
