import { _decorator, Component, Node, Vec3, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AutoRotateSc')
export class AutoRotateSc extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    @property
    speed:Vec3 = v3();
    
    start () {
        // Your initialization goes here.
    }

    update (deltaTime: number) {
        // Your update function goes here.
        this.node.setRotationFromEuler(
            this.node.eulerAngles.x + this.speed.x * deltaTime,
            this.node.eulerAngles.y + this.speed.y * deltaTime,
            this.node.eulerAngles.z + this.speed.z * deltaTime
        )
    }
}
