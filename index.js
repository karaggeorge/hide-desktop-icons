const wallpaper = require('wallpaper');
const execa = require('execa');
const path = require('path');
const fkill = require('fkill');
const electronUtil = require('electron-util/node');

const scriptPath = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'scripts/HideIcons');

var hideProcess;

const createWindow = (imagePath, done, { detached }) => {
  hideProcess = execa(scriptPath, [imagePath], { detached });

  // Ensure icons are hidden before resolving the promise
  hideProcess.stdout.on('data', data => {
    if(data.toString().trim() === 'READY') {
      done(hideProcess.pid);
    }
  });
};

exports.hide = (imagePath, opts = {}) => new Promise(done => {
  if (!imagePath) {
    wallpaper.get().then(wallpaper => createWindow(wallpaper, done, opts));
  } else {
    createWindow(imagePath, done, opts);
  }
});

exports.show = () => hideProcess.kill();

exports.forceShow = () => fkill('HideIcons');
