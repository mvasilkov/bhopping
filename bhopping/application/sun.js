define([
    'goo/renderer/light/PointLight',
], function (PointLight) {
    'use strict'

    function init(goo) {
        var light = new PointLight
        light.color.set(1, 1, 1)

        var sun = goo.world.createEntity(light, [2, 20, 10])
        sun.addToWorld()

        return sun
    }

    return { init: init }
})
