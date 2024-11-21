import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Product } from './product.entity';
import { Variation } from './variation.entity';

@Entity('product_variations')
export class ProductVariation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, product => product.variations)
  product: Product;

  @ManyToOne(() => Variation, variation => variation.productVariations)
  variation: Variation;

  @Column()
  value: string;

  @Column('int')
  stockQuantity: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  priceAdjustment: number;

  @Column({ unique: true })
  sku: string;

  @Column({ unique: true })
  barcode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}