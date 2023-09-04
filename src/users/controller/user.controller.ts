import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../schemas/user.schemas';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(
    @Query('limit') limit: string,
    @Query('page') page: string,
    @Query('search') search: string,
  ) {
    const p = page ? parseInt(page) : 1;
    const l = limit ? parseInt(limit) : 10;
    return this.userService.findAll({
      limit: l,
      page: p,
      search,
    });
  }

  @Post()
  create(@Body() data: User) {
    return this.userService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: User) {
    return this.userService.update(id, data);
  }
}
