define([
    'application/game_loading',
    'application/game_running',
    'application/game_over',
], function (loading, running, gameover) {
    'use strict'

    Phaser.RequestAnimationFrame.prototype.start = function () {
        this.isRunning = true
    }

    var game = new Phaser.Game(600, 200, Phaser.AUTO, 'minimap')

    game.state.add('loading', loading.init(game))
    game.state.add('running', running.init(game))
    game.state.add('gameover', gameover.init(game))

    return game
})
