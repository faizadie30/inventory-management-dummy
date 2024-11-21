import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ProductVariation } from './product-variation.entity';

@Entity('variations')
export class Variation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text', { array: true })
  options: string[];

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => ProductVariation, productVariation => productVariation.variation)
  productVariations: ProductVariation[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}