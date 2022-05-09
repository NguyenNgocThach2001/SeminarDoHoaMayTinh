import { createCamera } from '../JsModule/Camera.js';
import { createCube } from '../JsModule/Cube.js';
import {createCube1 } from '../JsModule/Cube1.js';
import { createScene } from '../JsModule/Scene.js';

import { createRenderer } from '../JsModule/Renderer.js';
import { Resizer } from '../JsModule/Resizer.js';
import { createHuman, MovingForward } from './Human.js';
import { createPlane} from './Plane.js';
import { Loop} from '../JsModule/Loop.js';
import { OrbitControls } from 'https://unpkg.com/three@0.119.1/examples/jsm/controls/OrbitControls.js';

let camera;
let renderer;
let scene;
let loop;
let controls;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
    loop = new Loop(camera, scene, renderer, controls);
    container.append(renderer.domElement);

    const cube1 = createCube1();
    const cube2 = createCube();
    cube1.position.x += 2;
    cube1.rotation.x += 5;
    cube2.position.x -= 2;
    cube2.rotation.x -= 5;
    cube1.rotation.x = 0;
    cube1.rotation.y = 0;
    cube1.rotation.z = 0;
    cube2.rotation.x = 0;
    cube2.rotation.y = 0;
    cube2.rotation.z = 0;
    loop.updatables.push(cube1);
    loop.updatables.push(cube2);
    
    scene.add(cube1);
    scene.add(cube2);
    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
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

