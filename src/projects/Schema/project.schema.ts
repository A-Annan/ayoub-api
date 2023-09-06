import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
  _id?: string;
  @Prop()
  name: string;
  @Prop()
  startDate: string;

  @Prop()
  endDate: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
