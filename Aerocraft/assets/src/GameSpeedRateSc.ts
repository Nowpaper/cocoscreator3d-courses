import { _decorator, Component, Node, CameraComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameSpeedRateSc')
export class GameSpeedRateSc extends Component {
    public static speedRate:number = 1;
    @property(CameraComponent)
    camera:CameraComponent = null;
    @property
    maxRate = 5;
    start () {
        // Your initialization goes here.
    }

    update (deltaTime: number) {
        GameSpeedRateSc.speedRate += deltaTime * 0.5;
        if(GameSpeedRateSc.speedRate >= this.maxRate){
            GameSpeedRateSc.speedRate = this.maxRate;
        }
        let target = GameSpeedRateSc.speedRate * 5 + 45;
        this.camera.fov += (target - this.camera.fov) * deltaTime;
    }
}
