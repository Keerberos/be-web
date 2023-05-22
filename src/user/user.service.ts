import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    
  ) {}

  createUser(user: CreateUserDto) {
    const newUser = this.userRepository.create(user);
    console.log('new user', newUser);
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }

  getUser(email) {
    return this.userRepository.findBy({ email: email });
  }

  login(userDto: CreateUserDto) {
    const { email, password } = userDto;
    return this.userRepository.findBy({ email: email, password: password });
  }
  
  deleteUser(username: string) {
    return this.userRepository.delete({ username: username });
  }

  updateUser(username: string, user: UpdateUserDto) {
    return this.userRepository.update({username: username}, user)
  }
}
