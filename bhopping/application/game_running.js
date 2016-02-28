define([
    'application/util',
], function (util) {
    'use strict'

    function init(game) {
        var bottom = game._height * 0.666|0
        var pad = 60, drop = bottom - 40
        var VK_SPACE = 0x20

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

            this.blocks = game.add.group()
            this.blocks.createMultiple(20, 'box')

            game.physics.startSystem(Phaser.Physics.ARCADE)

            this.spacebar = game.input.keyboard.addKey(VK_SPACE)
            game.input.keyboard.addKeyCapture(VK_SPACE)

            this.ground3 = util.gooBoxFromSprite(this.ground, 2)
            this.player3 = util.gooBoxFromSprite(this.player, 2, [0.5, 0.5, 0.5, 1])
            this.blocks3 = []
        }

        running.prototype.update = function () {
            game.physics.arcade.collide(this.player, this.ground)

            util.moveRotateGooBox(this.player3, this.player)
            util.cameraTrackSprite(game._goo.camera, this.player)
        }

        return running
    }

    return { init: init }
})
