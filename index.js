const wallpaper = require('wallpaper');
const execa = require('execa');
const path = require('path');

const scriptPath = path.join(__dirname, 'scripts/HideIcons');

var hideProcess;

const createWindow = (imagePath, done) => {
  hideProcess = execa(scriptPath, [imagePath]);

  // Ensure icons are hidden before resolving the promise
  hideProcess.stdout.on('data', data => {
    if(data.toString().trim() === 'READY') done();
  });
};

exports.hide = imagePath => new Promise(done => {
  if (!imagePath) {
    wallpaper.get().then(wallpaper => createWindow(wallpaper, done));
  } else {
    createWindow(imagePath, done);
  }
});

exports.show = () => hideProcess.kill();
