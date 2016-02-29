define([
    'application/game_loading',
    'application/game_running',
    'application/game_over',
], function (loading, running, gameover) {
    'use strict'
    /* globals Phaser: false */

    function init(goo) {
        Phaser.RequestAnimationFrame.prototype.start = function () {
            this.isRunning = true

            goo.goo.callbacksPreProcess.push(function () {
                game.update(Date.now())
            })
        }

        var game = new Phaser.Game(600, 200, Phaser.AUTO, 'minimap')
        game._goo = goo

        game.state.add('loading', loading.init(game))
        game.state.add('running', running.init(game))
        game.state.add('gameover', gameover.init(game))

        return game
    }

    return { init: init }
})
