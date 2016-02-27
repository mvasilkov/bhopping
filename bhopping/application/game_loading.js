define(function () {
    'use strict'

    function init(game) {
        function loading() {
        }

        loading.prototype.preload = function () {
            game.load.image('box', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA' +
                            'ABQAAAAUAQAAAACl8iCgAAAADklEQVR4AWP8z/CRmhgAEwom1XWUb' +
                            '+EAAAAASUVORK5CYII=')
            game.load.image('ground', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEU' +
                            'gAAAfQAAAACAQAAAACGEROXAAAAEElEQVQImWP4TxH4wEChfgBe83' +
                            '1l4TdA5wAAAABJRU5ErkJggg==')

            game.stage.backgroundColor = '#2196F3'
        }

        loading.prototype.create = function () {
            game.state.start('running')
        }

        return loading
    }

    return { init: init }
})
