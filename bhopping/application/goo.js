define([
    'goo/entities/GooRunner',
    'application/background',
    'application/camera',
    'application/sun',
    '_canvas',
], function (GooRunner, background, camera, sun, canvas) {
    'use strict'

    var goo = new GooRunner({
        canvas: canvas,
        logo: false,
        showStats: true,
    })

    goo.renderer.setClearColor(0, 0, 0, 1)

    return {
        goo: goo,
        background: background.init(goo),
        camera: camera.init(goo),
        sun: sun.init(goo),
    }
})
