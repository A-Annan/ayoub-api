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
  async findAll(options: queryOptions = {}) {
    const result = await this.userDAO.findAll(options);
    return { docs: result[0].docs, meta: result[0].meta[0] };
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
