import User from "src/entities/user.model";

interface IUserRepository {
    createOrUpdate(user: User): Promise<User>;
}

export default IUserRepository;