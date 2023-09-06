import { Injectable } from '@nestjs/common';
import { ProjectDAO, queryOptions } from '../DAO/project.dao';
import { Project } from '../Schema/project.schema';

@Injectable()
export class ProjectService {
  constructor(private projectDAO: ProjectDAO) {}

  findAll(options: queryOptions = {}) {
    return this.projectDAO.findAll(options);
  }
  create(data: Project) {
    return this.projectDAO.create(data);
  }

  findOne(id: string) {
    return this.projectDAO.findOne(id);
  }
  update(id: string, data: Project) {
    return this.projectDAO.update(id, data);
  }
  delete(id: string) {
    return this.projectDAO.delete(id);
  }
}
