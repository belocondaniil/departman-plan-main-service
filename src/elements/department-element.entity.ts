import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AvailableElement } from './available-element.entity';

@Entity()
export class DepartmentElement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => AvailableElement, (standardElement) => standardElement.type)
  @JoinColumn()
  type: AvailableElement;

  @Column('array')
  position: string[];

  @Column({ type: 'string', name: 'department_id' })
  departmentId: string;

  @Column('int')
  width: number;

  @Column({ name: 'is_deleted', type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_at', type: 'date', default: 'NOW()' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'date', default: 'NOW()' })
  updatedAt: Date;
}
