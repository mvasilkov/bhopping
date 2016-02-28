define([
    'goo/entities/GooRunner',
    'application/background',
    'application/camera',
    'application/sun',
    'application/util',
    '_canvas',
    '_debug',
], function (GooRunner, background, camera, sun, util, canvas, debug) {
    'use strict'

    var goo = new GooRunner({
        canvas: canvas,
        logo: false,
        showStats: debug,
    })

    goo.renderer.setClearColor(0, 0, 0, 1)

    return {
        goo: goo,
        background: background.init(goo),
        camera: camera.init(goo),
        _sun: sun.init(goo),
        util: util.init(goo),
    }
})
