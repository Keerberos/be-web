import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';
import { UserService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() newUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(newUser);
  }

  @Get()
  getUsers(): Promise<UserEntity[]> {
    return this.userService.getUsers();
  }

  @Delete(':username')
  deleteUser(@Param('username') username: string) {
    return this.userService.deleteUser(username);
  }

  @Patch(':username')
  updateUser(
    @Param('username') username: string,
    @Body() user:UpdateUserDto
    ) {
        return this.userService.updateUser(username, user)
    }
}
