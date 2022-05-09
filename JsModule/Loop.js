
const clock = new THREE.Clock();
let sumDelta = 0;
let flip = 0;

class Loop {
    constructor(camera, scene, renderer, controls) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.controls = controls;
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick();
            this.renderer.render(this.scene, this.camera);
        });
      }

    stop() {
        this.renderer.setAnimationLoop(null);
    }
    tick() {
        const delta = clock.getDelta();
        console.log(this.camera.position)
        sumDelta += delta;
            // console.log(sumDelta);
            // console.log(flip);
        this.controls.update();
        for (const object of this.updatables) {
            object.tick(delta, flip);
        }
      }
}
export { Loop }


