const wallpaper = require('wallpaper');
const execa = require('execa');

var script;

exports.hide = () => {
  wallpaper.get().then(imagePath => {
    script = execa('swift/HideIcons', [imagePath]);
  });
}

exports.show = () => script.kill();
