import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions, Types } from 'mongoose';
import { Project, ProjectDocument } from '../Schema/project.schema';

@Injectable()
export class ProjectDAO {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  findAll(options: QueryOptions) {
    return this.projectModel.aggregate([
      {
        $match: {
          $or: [
            {
              name: {
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

  create(data: Project) {
    return this.projectModel.create(data);
  }

  delete(id: string) {
    return this.projectModel.deleteOne({ _id: id });
  }

  findOne(id: string) {
    return this.projectModel.findOne({ _id: id });
  }

  update(id: string, data: Project) {
    return this.projectModel.updateOne({ _id: id }, data);
  }
}

export interface queryOptions {
  search?: string;
  sort?: string;
  limit?: number;
  page?: number;
  filter?: any;
}
