import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User>{
    return this.usersService.create(createUserDto)
  }

  @Get()
  async findAll(): Promise<User[]>{
    return this.usersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id:string ): Promise<User>{
    return this.usersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id:string, 
    @Body() updateUser: CreateUserDto, 
  ): Promise<User>{
    return this.usersService.update(id, updateUser)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Boolean> {
    try {
      const user = this.usersService.delete(id);
      if(!user){
        throw new NotFoundException("User not found")
      }
      return true
    } catch (error) {
      throw new NotFoundException("User not found");
    }
  }
}