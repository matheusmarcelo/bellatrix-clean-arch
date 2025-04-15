import User from "src/entities/user.model";

interface IUserRepository {
    createOrUpdate(user: User): Promise<User>;
    getById(id: number): Promise<User | null>;
}

export default IUserRepository;