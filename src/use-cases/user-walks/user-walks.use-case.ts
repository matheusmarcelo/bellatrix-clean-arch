import { Injectable } from "@nestjs/common";
import IUserRepository from "src/contracts/i-user-repository.contract";
import User from "src/entities/user.model";

@Injectable()
export class UserWalks {
    private readonly userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(user: User, posX: number, posY: number): Promise<User> {
        // Change position
        user.posX = posX;
        user.posY = posY;

        // Save new position
        const persistedUser = await this.userRepository.createOrUpdate(user);

        // Find monster or nothing

        return persistedUser;
    }
}