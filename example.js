const hide = require('./').hide;
const show = require('./').show;

hide().then(() => {
  console.log('Icons are hidden');
});

setTimeout(() => show(), 3000);
