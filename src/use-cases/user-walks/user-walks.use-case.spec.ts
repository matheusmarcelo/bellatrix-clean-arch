import User from "../../entities/user.model";
import { UserWalks } from "./user-walks.use-case";
import UserRepositoryInMemory from "../../infra/in-memory/user-repository-in-memory";

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

        const userWalks = new UserWalks(new UserRepositoryInMemory());

        const persistedUser = await userWalks.execute(user, 1, 1);

        expect(persistedUser.posX).toBe(1);
        expect(persistedUser.posY).toBe(1);
    });
});