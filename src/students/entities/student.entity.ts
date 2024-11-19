import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'studentName' })
  name: string;

  @Column({ name: 'joinYear' })
  year: number;
}
