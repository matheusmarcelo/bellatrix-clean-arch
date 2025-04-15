import { Injectable } from "@nestjs/common";
import IUserRepository from "src/contracts/i-user-repository.contract";
import User from "src/entities/user.model";

@Injectable()
class UserRepositoryInMemory implements IUserRepository {
    private users: User[] = [];

    async createOrUpdate(user: User): Promise<User> {
        const index = this.users.findIndex(user => user.id == user.id);

        if(index == -1) {
            this.users.push(user);
        } else {
            this.users[index] = user;
        }

        return user;
    }

    async getById(id: number): Promise<User | null> {
        return this.users.find(user => user.id == id) || null;
    }
}

export default UserRepositoryInMemory;