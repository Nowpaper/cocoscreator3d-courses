import { _decorator, Component, Node, systemEvent, SystemEventType, EventMouse, director, ColliderComponent, ITriggerEvent, find } from 'cc';
import { FlyObjectSc } from './FlyObjectSc';
import { GameLogicSc } from './GameLogicSc';
const { ccclass, property } = _decorator;

@ccclass('AerocraftSc')
export class AerocraftSc extends Component {

    start () {
        // Your initialization goes here.
        systemEvent.on(SystemEventType.MOUSE_MOVE,this.onMouseMove,this); 
        let Collider = this.getComponent(ColliderComponent);
        Collider.on('onTriggerEnter', this.onTrigger, this);
    }
    
    private onTrigger (event: ITriggerEvent) {
        let objectsc = event.otherCollider.node.parent.getComponent(FlyObjectSc);
        find('game').getComponent(GameLogicSc).handleFlyObject(objectsc);
        event.otherCollider.node.parent.destroy();
    }
    onMouseMove(e:EventMouse){
        let rate = e.getLocationInView().y / director.getWinSize().height;
        this.targetY = 5 - 10 * rate;
        
    }
    @property
    speed = 8;
    private targetY = 0;
    update (deltaTime: number) {
        // Your update function goes here.
        let sub = this.targetY - this.node.position.y;
        if(Math.abs(sub) > 0.1){
            let add = this.speed * deltaTime * sub;
            this.node.setPosition(
                this.node.position.x,
                this.node.position.y + add,
                this.node.position.z
            );
            this.node.setRotationFromEuler(0,0,sub * 30);
        }
    }
}
