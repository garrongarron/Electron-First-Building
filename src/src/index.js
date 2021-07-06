//https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js

import box from "./Box.js";
import camera from "./Camera.js";
import light from "./Lights.js";
import renderer from "./Renderer.js";
import resize from "./Resize.js";
import scene from "./Scene.js";

scene.add(box)
scene.add(light)
camera.position.set(2, 2, -5)
light.position.set(2, 2, -5)

camera.lookAt(box.position)

resize.start(renderer)
setInterval(() => {
    box.rotation.y -= .01
    renderer.render(scene, camera) // ok!
}, 1000 / 20);



setTimeout(() => {
    alert('hola')
}, 5000);
