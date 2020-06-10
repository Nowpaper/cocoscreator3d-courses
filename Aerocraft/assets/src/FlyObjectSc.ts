import { _decorator, Component, Node, Enum } from 'cc';
const { ccclass, property } = _decorator;

export enum FlyObjectType{
    Power,Score
}
Enum(FlyObjectType);
@ccclass('FlyObjectSc')
export class FlyObjectSc extends Component {
    @property({type:FlyObjectType})
    type:FlyObjectType = FlyObjectType.Score;
    @property
    value:number = 0;

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
