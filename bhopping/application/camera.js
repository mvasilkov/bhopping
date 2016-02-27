define([
    'goo/math/Vector3',
    'goo/renderer/Camera',
], function (Vector3, Camera) {
    'use strict'

    function init(goo) {
        var camera = goo.world.createEntity(new Camera(24, 1, 0.1, 256), [0, 40, 60])
        camera.transformComponent.lookAt(new Vector3(-2.4, 2, 0), Vector3.UNIT_Y)
        camera.addToWorld()

        return camera
    }

    return { init: init }
})
