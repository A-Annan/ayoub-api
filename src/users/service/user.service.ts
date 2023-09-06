import { Injectable } from '@nestjs/common';
import { UserDAO, queryOptions } from '../DAO/user.dao';
import { User } from '../schemas/user.schemas';
import { ProjectService } from 'src/projects/service/project.service';
import { Project } from 'src/projects/Schema/project.schema';

@Injectable()
export class UserService {
  constructor(
    private userDAO: UserDAO,
    private projectService: ProjectService,
  ) {}

  async addProject(id: string, data: Project) {
    const project = await this.projectService.create(data);
    return this.userDAO.addProject(id, project);
  }
  findAll(options: queryOptions = {}) {
    return this.userDAO.findAll(options);
  }
  create(data: User) {
    return this.userDAO.create(data);
  }

  findOne(id: string) {
    return this.userDAO.findOne(id);
  }
  update(id: string, data: User) {
    return this.userDAO.update(id, data);
  }
  delete(id: string) {
    return this.userDAO.delete(id);
  }
}
