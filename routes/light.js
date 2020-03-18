var express = require('express');
var router = express.Router();
const Gpio = require('onoff').Gpio;
const LED = new Gpio(4, 'out');

//acende o led conectado no pino 4 da raspberry
router.post('/on', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    LED.writeSync(1);
    console.log("Led Aceso");
    res.json({ 'status': 'OK', 'data': 'Led Aceso' });
});

//apaga o led conectado no pino da raspberry
router.post('/off', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    LED.writeSync(0);
    console.log("Led Apagado");
    res.json({ 'status': 'OK', 'data': 'Led Apagado' });
});

module.exports = router;