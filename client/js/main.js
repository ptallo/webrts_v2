var PIXI = require('pixi.js');
var Game = require('../../server/Game.js');

var game = new Game();
document.body.appendChild(game.app.view);