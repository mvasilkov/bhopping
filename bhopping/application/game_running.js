define(function () {
    'use strict'

    function init(game) {
        var bottom = game._height * 0.666|0
        var pad = 60, drop = bottom - 40

        function running() {
        }

        function _setPhysics(sprite) {
            game.physics.enable(sprite, Phaser.Physics.ARCADE)
            sprite.anchor.setTo(0.5, 0.5)
        }

        running.prototype.create = function () {
            this.ground = game.add.sprite(0.5 * game._width, bottom, 'ground')
            _setPhysics(this.ground)
            this.ground.body.immovable = true

            this.player = game.add.sprite(pad, drop, 'box')
            _setPhysics(this.player)
            this.player.body.gravity.setTo(0, 1000)

            game.physics.startSystem(Phaser.Physics.ARCADE)
        }

        running.prototype.update = function () {
            game.physics.arcade.collide(this.player, this.ground)
        }

        return running
    }

    return { init: init }
})
