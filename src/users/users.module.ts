import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserDAO } from './DAO/user.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schemas';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ProjectsModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserDAO],
})
export class UsersModule {}
