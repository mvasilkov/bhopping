define([
    'goo/math/Vector3',
    'goo/renderer/Material',
    'goo/renderer/shaders/ShaderLib',
    'goo/shapes/Box',
], function (Vector3, Material, ShaderLib, Box) {
    'use strict'
    var wow

    function _x(sprite) {
        return sprite.x - 300
    }

    function _y(sprite) {
        return 100 - sprite.y
    }

    function init(goo) {
        wow = goo.world
    }

    function gooBox(size, position, color) {
        var material = new Material(ShaderLib.uber)
        if (color)
            material.uniforms.materialDiffuse = color
        material.uniforms.materialSpecular = [0.5, 0.5, 0.5, 1]
        material.uniforms.materialAmbient = [0.5, 0.5, 0.5, 1]

        var box = wow.createEntity(new Box(size[0], size[1], size[2], 1, 1), material, position)
        box.addToWorld()

        return box
    }

    function gooBoxFromSprite(sprite, sz, color) {
        return gooBox([0.1 * sprite.width, 0.1 * sprite.height, sz],
                      [0.1 * _x(sprite), 0.1 * _y(sprite), 0], color)
    }

    function moveRotateGooBox(box, sprite) {
        box.transformComponent.setTranslation(0.1 * _x(sprite), 0.1 * _y(sprite), 0)
        box.transformComponent.setRotation(0, 0, -sprite.rotation)
    }

    function gooBoxFromBlock(block, sz) {
        return gooBox([0.1 * block.width, 0.1 * block.height, sz],
                      [0.1 * _x(block), 0.1 * (_y(block) + 0.5 * block.height), 0],
                      [0.5, 0.5, 0.5, 1])
    }

    function cameraTrackSprite(camera, sprite) {
        camera.transformComponent.lookAt(new Vector3(0.01 * _x(sprite), 2, 0), Vector3.UNIT_Y)
    }

    return {
        init: init,
        gooBoxFromSprite: gooBoxFromSprite,
        moveRotateGooBox: moveRotateGooBox,
        gooBoxFromBlock: gooBoxFromBlock,
        cameraTrackSprite: cameraTrackSprite,
    }
})
