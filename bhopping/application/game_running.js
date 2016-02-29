define([
    'application/maps',
    'application/util',
], function (maps, util) {
    'use strict'
    /* globals Phaser: false */

    function init(game) {
        var bottom = game._height * 0.666|0
        var pad = 60, drop = bottom - 40
        var VK_SPACE = 0x20

        function running() {
            /* jshint validthis: true */
            this.pause = true
            this.deaths = 0
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

            this.levelUp(true)
        }

        running.prototype.update = function () {
            game.physics.arcade.collide(this.player, this.ground)

            util.moveRotateGooBox(this.player3, this.player)
            util.cameraTrackSprite(game._goo.camera, this.player)
        }

        running.prototype.levelUp = function (initial) {
            this.blocks.forEachAlive(function (b) { b.kill() })
            this.level = (this.level|0) + 1

            this.blocks3.forEach(function (b) { b.removeFromWorld() })
            this.blocks3 = []

            maps[this.level].forEach(function (tile, n) {
                var h, asc
                switch (tile) {
                    case 1: case 2: case 3: case 4:
                        asc = 0
                        h = -0.1 * tile * tile + tile - 0.6
                        break
                    case 5:
                        asc = 22
                        h = 0.3
                        break
                    default: return
                }

                var b = this.blocks.getFirstDead()
                b.reset(n * b.width + 100, bottom - asc - 1)
                b.anchor.setTo(0, 1)
                b.scale.setTo(1, h)

                this.blocks3.push(util.gooBoxFromBlock(b, 2))
            }, this)
        }

        return running
    }

    return { init: init }
})
