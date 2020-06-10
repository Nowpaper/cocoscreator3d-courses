import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CloudSc')
export class CloudSc extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
        this.node.setPosition(
            this.node.position.x,
            Math.random() * 10 - 5,
            this.node.position.z
        );
        for(let node of this.node.children){
            let scale = Math.random() * 1 + 0.3;
            node.setScale(
                scale,scale,scale
            );
        }
    }

    update (deltaTime: number) {
        // Your update function goes here.
        if(this.node.position.x <= -20){
            this.node.setPosition(
                20,
                Math.random() * 10 - 5,
                this.node.position.z
            );
            for(let node of this.node.children){
                let scale = Math.random() * 1 + 0.3;
                node.setScale(
                    scale,scale,scale
                );
            }
        }
    }
}
