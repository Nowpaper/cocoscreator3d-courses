import { _decorator, Component, Node, ColliderComponent, ICollisionEvent } from 'cc';
import { GameLogic } from './GameLogic';
const { ccclass, property } = _decorator;

@ccclass('Bottom')
export class Bottom extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    public start () {
        let Collider = this.getComponent(ColliderComponent);
        Collider.on('onCollisionStay', this.onCollision, this);
    }
    
    private onCollision (event: ICollisionEvent) {
        event.otherCollider.node.destroy();
        this.node.parent.getComponent(GameLogic).score += 10;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
