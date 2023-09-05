import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schemas';
import { Model, QueryOptions } from 'mongoose';

@Injectable()
export class UserDAO {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  findAll(options: QueryOptions) {
    return this.userModel.aggregate([
      {
        $match: {
          $or: [
            {
              firstName: {
                $regex: options.search || '',
                $options: 'i',
              },
            },
            {
              email: {
                $regex: options.search || '',
                $options: 'i',
              },
            },
            {
              lastName: {
                $regex: options.search || '',
                $options: 'i',
              },
            },
          ],
        },
      },
      {
        $match: options.filter || {},
      },
      {
        $sort: {
          [options.sort || '_id']: -1,
        },
      },
      {
        $skip: options.limit * (options.page - 1) || 0,
      },
      {
        $limit: options.limit || 10,
      },
    ]);
  }

  create(data: User) {
    return this.userModel.create(data);
  }

  delete(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }

  findOne(id: string) {
    return this.userModel.findOne({ _id: id });
  }

  update(id: string, data: User) {
    return this.userModel.updateOne({ _id: id }, data);
  }
}

export interface queryOptions {
  search?: string;
  sort?: string;
  limit?: number;
  page?: number;
  filter?: any;
}
