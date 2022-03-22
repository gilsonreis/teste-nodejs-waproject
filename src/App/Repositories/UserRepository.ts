import { User } from '@Entities/User';
import IUserRepository from "@Repositories/Contracts/IUserRepository";
import {getRepository, Repository} from "typeorm";


class UserRepository implements IUserRepository {
    
    private repository: Repository<User>
    
    constructor() {
        this.repository = getRepository(User);
    }
    
    public async PegarPorEmail(email: string) {
        return await this.repository.findOne({email});
    }
}

export default UserRepository;
