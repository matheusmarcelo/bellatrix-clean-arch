export default class User {
    id: number;
    name: string;
    level: number;
    atkMin: number;
    atkMax: number;
    xp: number;
    posX: number;
    posY: number;

    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.level = props.level;
        this.atkMin = props.atkMin;
        this.atkMax = props.atkMax;
        this.xp = props.xp;
        this.posX = props.posX;
        this.posY = props.posY;
    }
}