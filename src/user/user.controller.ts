import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('paleto')
    createUser(
        @Body() dto: CreateUserDto
    ) { return this.userService.createUser(dto)}

    @Put()
    editUser(
        @Param('id') id: string
    ) {}

    @Delete()
    deleteUser(
        @Param('id') id: string
    ) {}
}
