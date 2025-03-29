export default class Monster {
    id: number;
    name: string;
    level: number;
    atkMin: number;
    atkMax: number;
    xp: number;
    spawnChange: number;

    constructor(props) {
        this.id = props.id;
        this.name = props.name;
        this.level = props.level;
        this.atkMin = props.atkMin;
        this.atkMax = props.atkMax;
        this.xp = props.xp;
        this.spawnChange = props.spawnChange;
    }
}