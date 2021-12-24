const Spinners = require('spinnies');

const point = { 
  interval: 70,
  frames: ["∙∙∙",
			"●∙∙",
			"∙●∙",
			"∙∙●",
			"∙∙∙"]
}
const spinners = new Spinners({
  spinner: point,
  color: 'blue',
  succeedColor: 'green',
  failColor: 'red',
  spinnerColor: 'white'
});


function spinOn () {

setTimeout(() => {
  spinners.add('1', { text: 'co' });
}, 0)
setTimeout(() => {
  spinners.add('1', { text: 'cone' });
}, 200)
setTimeout(() => {
  spinners.add('1', { text: 'conect' });
}, 400)
setTimeout(() => {
  spinners.add('1', { text: 'conectando' });
}, 600)
setTimeout(() => {
  spinners.add('1', { text: 'conectando a' });
}, 700)
setTimeout(() => {
  spinners.add('1', { text: 'conectando a kriz.' });
}, 800)
setTimeout(() => {
  spinners.add('1', { text: 'conectando a kriz..' });
}, 900)
setTimeout(() => {
  spinners.add('1', { text: 'conectando a kriz...' });
}, 1000)
setTimeout(() => {
  spinners.add('1', { text: 'conectando a kriz.' });
}, 1200)
setTimeout(() => {
  spinners.add('1', { text: 'conectando a kriz..' });
}, 1300)
setTimeout(() => {
  spinners.succeed('1', { text: 'Kriz esta conectado' });
}, 1400)
}

module.exports = { spinOn };
