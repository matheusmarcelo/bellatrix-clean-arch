import MonsterRepositoryInMemory from "../../infra/in-memory/monster-repository-in-memory";
import { FindBattleMonster } from "./find-batltle-monster.use-case";

describe("FindBattleMonster", () => {
    it('find a monster to battle', async () => {
        const originalRandom = Math.random;
        Math.random = (): number => 0.2;

        const monsterRepository = new MonsterRepositoryInMemory();
        const findBattleMonster = new FindBattleMonster(monsterRepository);
        const monster = await findBattleMonster.execute();

        expect(monster).not.toBe(null);

        Math.random = originalRandom;
    });

    it('does not find a monster to battle', async () => {
        const originalRandom = Math.random;
        Math.random = (): number => 0.9;

        const monsterRepository = new MonsterRepositoryInMemory();
        const findBattleMonster = new FindBattleMonster(monsterRepository);
        const monster = await findBattleMonster.execute();

        expect(monster).toBe(null);

        Math.random = originalRandom;
    });
});