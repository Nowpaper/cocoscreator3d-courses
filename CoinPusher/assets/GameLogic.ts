import { _decorator, Component, Node, Prefab, LabelComponent, systemEvent, SystemEventType, Touch, view, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameLogic')
export class GameLogic extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;
    @property(Prefab)
    coin:Prefab = null;
    @property(LabelComponent)
    label:LabelComponent = null;
    start () {
        // Your initialization goes here.
        systemEvent.on(SystemEventType.TOUCH_END,this.touch_end,this);
    }
    private touch_end(e:Touch){
        let rate = e.getLocationX() / view.getCanvasSize().width;
        let x = (4 * rate) - 2;
        let coin:Node = instantiate(this.coin);
        this.node.addChild(coin);
        coin.setPosition(x,3,0.18);
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    
    private _score : number = 0;
    public get score() : number {
        return this._score;
    }
    public set score(v : number) {
        this._score = v;
        this.label.string = v.toString();
    }
    
}
