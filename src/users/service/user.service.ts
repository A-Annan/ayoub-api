import { Injectable } from '@nestjs/common';
import { UserDAO, queryOptions } from '../DAO/user.dao';
import { User } from '../schemas/user.schemas';

@Injectable()
export class UserService {
  constructor(private userDAO: UserDAO) {}

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
