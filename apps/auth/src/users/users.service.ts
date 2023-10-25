import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}
    
    async create(createUserDTO: CreateUserDTO) {
        return this,this.usersRepository.create(createUserDTO);
    }
}
