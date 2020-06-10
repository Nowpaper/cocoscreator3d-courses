import { _decorator, Component, Node, Vec3, v3, director } from 'cc';
import { GameSpeedRateSc } from './GameSpeedRateSc';
const { ccclass, property } = _decorator;

@ccclass('ObjectMoveSc')
export class ObjectMoveSc extends Component {
    start () {
        // Your initialization goes here.
    }
    @property
    speed:Vec3 = v3(3,0,0);
    update (deltaTime: number) {
        this.node.setPosition(
            this.node.position.x + this.speed.x * deltaTime * GameSpeedRateSc.speedRate,
            this.node.position.y + this.speed.y * deltaTime * GameSpeedRateSc.speedRate,
            this.node.position.z + this.speed.z * deltaTime * GameSpeedRateSc.speedRate
        )
    }
}
