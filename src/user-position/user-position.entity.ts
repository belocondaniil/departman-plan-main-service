import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user-position' })
export class UserPosition {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('point')
  position: string;

  @Column({ type: 'text', name: 'department_id' })
  departmentId: string;

  @Column({ type: 'text', name: 'user_id' })
  userId: string;

  @Column({ name: 'is_deleted', type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_at', type: 'date', default: 'NOW()' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'date', default: 'NOW()' })
  updatedAt: Date;
}
