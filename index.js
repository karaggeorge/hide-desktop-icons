const wallpaper = require('wallpaper');
const execa = require('execa');
const path = require('path');

const scriptPath = path.join(__dirname, 'scripts/HideIcons');

var hideProcess;

exports.hide = () => {
  return wallpaper.get().then(imagePath => {
    hideProcess = execa(scriptPath, [imagePath]);

    // Ensure icons are hidden before resolving the promise
    return new Promise(done => {
      setTimeout(done, 1000);
    });
  });
}

exports.show = () => hideProcess.kill();
