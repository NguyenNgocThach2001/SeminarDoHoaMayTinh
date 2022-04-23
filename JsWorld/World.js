import { createCamera } from '../JsModule/Camera.js';
import { createCube } from '../JsModule/Cube.js';
import { createScene } from '../JsModule/Scene.js';

import { createRenderer } from '../JsModule/Renderer.js';
import { Resizer } from '../JsModule/Resizer.js';
import { createHuman, MovingForward } from './Human.js';
import { createPlane} from './Plane.js';
import { Loop} from '../JsModule/Loop.js';

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const cube1 = createCube();
    const cube2 = createCube();
    cube1.position.x += 2;
    cube1.rotation.x += 5;
    cube2.position.x -= 2;
    cube2.rotation.x -= 5;
    scene.add(cube1);
    scene.add(cube2);
    const resizer = new Resizer(container, camera, renderer);
  }
  
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }

}

export { World };