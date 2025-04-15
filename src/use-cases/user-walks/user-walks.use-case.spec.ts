import User from "../../entities/user.model";
import { UserWalks } from "./user-walks.use-case";
import UserRepositoryInMemory from "../../infra/in-memory/user-repository-in-memory";
import MonsterRepositoryInMemory from "../../infra/in-memory/monster-repository-in-memory";

describe("UserWalks", () => {

   
    it('change the user position', async () => {
        const user = new User({
            id: 1,
            name: "r20",
            level: 1,
            xp: 0,
            posX: 0,
            posY: 0,
            atkMin: 3,
            atkMax: 5
        });

        const userRepositoryInMemory = new UserRepositoryInMemory();
        const monsterRepositoryInMemory = new MonsterRepositoryInMemory();
        
        const userWalks = new UserWalks(userRepositoryInMemory, monsterRepositoryInMemory);

        await userWalks.execute(user, 1, 1);
        const updatedUser = await userRepositoryInMemory.getById(user.id);

        expect(updatedUser?.posX).toBe(1);
        expect(updatedUser?.posY).toBe(1);
    });
});