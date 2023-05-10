import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';

@Injectable()
export class UserService {

    createUser(dto: CreateUserDto) {
        return { ok: 'create un usuario pelotudo'}
    }
}
