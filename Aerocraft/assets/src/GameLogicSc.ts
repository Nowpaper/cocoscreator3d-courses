import { _decorator, Component, Node, Prefab, instantiate, LabelComponent, ParticleSystemComponent, director } from 'cc';
import { FlyObjectSc, FlyObjectType } from './FlyObjectSc';
import { GameSpeedRateSc } from './GameSpeedRateSc';
const { ccclass, property } = _decorator;

@ccclass('GameLogicSc')
export class GameLogicSc extends Component {

    @property(ParticleSystemComponent)
    particle1:ParticleSystemComponent = null;
    @property(ParticleSystemComponent)
    particle2:ParticleSystemComponent = null;
    @property(LabelComponent)
    labelPower:LabelComponent = null;
    @property(LabelComponent)
    labelScore:LabelComponent = null;
    
    @property
    Score = 0;
    @property
    Power = 5;
    
    @property([Prefab])
    objects: Prefab[] = [];

    start() {
        // Your initialization goes here.
    }
    private time = 2;
    update(deltaTime: number) {
        // Your update function goes here.
        this.time += deltaTime * GameSpeedRateSc.speedRate;
        if (this.time >= 2) {
            this.time = 0;
            let gourp: Node = instantiate(this.objects[Math.floor(Math.random() * this.objects.length)]);
            let y = Math.random() * 7 - 3.5;
            for (let i = gourp.children.length - 1; i >= 0; i--) {
                let obj = gourp.children[i];
                obj.parent = this.node;
                obj.setPosition(
                    20 + obj.position.x,
                    y +  obj.position.y,
                    obj.position.z
                );
            }
        }
        this.labelPower.string = "能量：" + this.Power.toString();
        this.labelScore.string = "分数：" + this.Score.toString();
    }
    handleFlyObject(flyobject:FlyObjectSc){
        let particle:ParticleSystemComponent = null;
        if(flyobject.type == FlyObjectType.Power){
            this.Power += flyobject.value;
            particle = this.particle1;
            GameSpeedRateSc.speedRate = 1;
        }else if(flyobject.type == FlyObjectType.Score){
            this.Score += flyobject.value;
            particle = this.particle2;
        }
        particle.stop();
        particle.play();
        particle.node.setPosition(
            flyobject.node.position.x,
            flyobject.node.position.y,
            flyobject.node.position.z + 2
            );
    }
}

