import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { DataSource } from 'typeorm';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly dataSource: DataSource) {}

  @Post('')
  async create(@Body() body) {
    const studentRepo = this.dataSource.getRepository(Student);
    const student = new Student();
    student.name = 'Ahmed';
    student.year = 2019;

    await studentRepo.save(student);
    return { message: 'Student is addedd successfully', student: student };
  }

  @Get('/students')
  async findAll() {
    const studentRepo = this.dataSource.getRepository(Student);
    const students = await studentRepo.find();

    return { students: students };
  }
}
