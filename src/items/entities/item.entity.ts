import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity('items')
export class Item {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'ItemName' })
  name: string;

  @Column({ name: 'ItemPrice' })
  price: number;
}
