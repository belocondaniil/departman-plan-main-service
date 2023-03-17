import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { StandardElement } from './standard-element.entity';

@Entity()
export class Element {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => StandardElement, (standardElement) => standardElement.type)
  @JoinColumn()
  type: StandardElement;

  @Column('array')
  position: string[];

  @Column({ type: 'string', name: 'department_id' })
  departmentId: string;

  @Column('number')
  width: number;

  @Column({ name: 'is_deleted', type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_at', type: 'date', default: 'NOW()' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'date', default: 'NOW()' })
  updatedAt: Date;
}
