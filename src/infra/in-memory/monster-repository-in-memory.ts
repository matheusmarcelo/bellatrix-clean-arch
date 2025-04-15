import IMonsterRepository from "src/contracts/i-monster-repository.contract";
import Monster from "src/entities/monster.model";

class MonsterRepositoryInMemory implements IMonsterRepository {
    private monsters: Monster[] = [
        {
            id: 1,
            name: "Rato",
            level: 1,
            atkMin: 2,
            atkMax: 3,
            xp: 10,
            spawnChange: 0.3,
        },
        {
            id: 2,
            name: "Goblin",
            level: 5,
            atkMin: 5,
            atkMax: 7,
            xp: 30,
            spawnChange: 0.1,
        }
    ];

    async getAll(): Promise<Monster[]> {
        return this.monsters;
    }
}

export default MonsterRepositoryInMemory;