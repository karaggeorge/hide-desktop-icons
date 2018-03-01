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
      hideProcess.stdout.on('data', data => {
        if(data.toString().trim() === 'READY') done();
      });
    });
  });
}

exports.show = () => hideProcess.kill();
