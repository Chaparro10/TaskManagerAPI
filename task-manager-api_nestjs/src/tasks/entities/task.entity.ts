import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';



export type TaskDocument =HydratedDocument<Task>;
@Schema()
export class Task {
  @Prop({required:true})
  title: string;

  @Prop({required:true})
  description: string;

  @Prop({required:true})
  idUser: number;

  @Prop()
  status: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}


export const TaskSchema = SchemaFactory.createForClass(Task);