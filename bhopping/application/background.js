define([
    'goo/renderer/Material',
    'goo/renderer/TextureCreator',
    'goo/renderer/shaders/ShaderLib',
    'goo/shapes/Quad',
], function (Material, TextureCreator, ShaderLib, Quad) {
    'use strict'

    function init(goo) {
        var material = new Material(ShaderLib.textured)
        material.depthState.write = false

        var loader = new TextureCreator
        loader.loadTexture2D('assets/images/background0.png')
        .then(function (texture) {
            material.setTexture('DIFFUSE_MAP', texture)
        }, function () {
            console.error('Error loading image: background0.png')
        })

        var background = goo.world.createEntity(new Quad(100, 100, 1, 1), material, [0, -10, -25])
        background.addToWorld()

        return background
    }

    return { init: init }
})
