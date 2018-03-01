const hide = require('./').hide;
const show = require('./').show;

hide().then(pid => {
  console.log(`Icons are hidden (pid: ${pid})`);
});

setTimeout(() => show(), 3000);
