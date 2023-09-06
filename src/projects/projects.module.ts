import { Module } from '@nestjs/common';
import { ProjectService } from './service/project.service';
import { ProjectController } from './controller/project.controller';
import { ProjectDAO } from './DAO/project.dao';
import { Project, ProjectSchema } from './Schema/project.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectDAO],
  exports: [ProjectService],
})
export class ProjectsModule {}
