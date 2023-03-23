import { ElementType } from 'src/config';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DepartmentElement } from './department-element.entity';

@Entity({ name: 'available-element' })
export class AvailableElement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column({ type: 'int', name: 'standard_width' })
  width: number;

  @Column({ type: 'int', name: 'standard_height' })
  height: number;

  @Column({ type: 'enum', enum: ElementType })
  type: ElementType;

  @Column({ name: 'is_deleted', type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_at', type: 'date', default: 'NOW()' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'date', default: 'NOW()' })
  updatedAt: Date;

  @OneToMany(
    () => DepartmentElement,
    (departmentElement) => departmentElement.type,
  )
  element: Element[];
}
