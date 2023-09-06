import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Project } from 'src/projects/Schema/project.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  addresse: string;
  @Prop()
  status: string;
  @Prop()
  email: string;

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Project.name,
    },
  ])
  projects: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
