import { createCamera } from '../JsModule/Camera.js';
import { createCube } from '../JsModule/Cube.js';
import {createCube1 } from '../JsModule/Cube1.js';
import {createCube2 } from '../JsModule/Cube2.js';
import {createCube3 } from '../JsModule/Cube3.js';
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
    const cube3 = createCube2();
    const cube4 = createCube3();
    cube1.position.x += 2;
    cube1.rotation.set(0, 0, 0);
    cube2.rotation.set(0, 0, 0);
    loop.updatables.push(cube1);
    loop.updatables.push(cube2);
    for(let i = 0; i < 4; i++) {
      loop.updatables.push(cube3[i]);
      scene.add(cube3[i]);
    }

    for(let i = 0; i < 50; i++) {
      loop.updatables.push(cube4[i]);
      scene.add(cube4[i]);
    }
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

