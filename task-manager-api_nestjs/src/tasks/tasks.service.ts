import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task,TaskDocument } from './entities/task.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {

    constructor(@InjectModel(Task.name) private readonly taskModel: Model<TaskDocument>) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskModel.create(createTaskDto);
  }

  findAll() {
    return this.taskModel.find();
  }

  async findOne(id: string) {
    const response= await this.taskModel.findOne({_id:id});
    return response;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findOneAndUpdate({_id:id},updateTaskDto);
  }

  remove(id: string) {
    return this.taskModel.findByIdAndDelete({_id:id})
  }
}
