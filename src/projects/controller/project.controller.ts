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
import { ProjectService } from '../service/project.service';
import { Project } from '../Schema/project.schema';

@Controller('project')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Get()
  findAll(
    @Query('limit') limit: string,
    @Query('page') page: string,
    @Query('search') search: string,
  ) {
    const p = page ? parseInt(page) : 1;
    const l = limit ? parseInt(limit) : 10;
    return this.projectService.findAll({
      limit: l,
      page: p,
      search,
    });
  }

  @Post()
  create(@Body() data: Project) {
    return this.projectService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.projectService.delete(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Project) {
    return this.projectService.update(id, data);
  }
}
