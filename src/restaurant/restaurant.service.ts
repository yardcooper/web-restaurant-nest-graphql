import { Injectable } from '@nestjs/common';
import { Item } from './models/restaurant.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemInput } from './dto/create-item.input';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
  ) {}

  createItem(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemsRepository.create(createItemInput);

    return this.itemsRepository.save(newItem);
  }

  findAllItems(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findItem(id: number): Promise<Item> {
    return this.itemsRepository.findOneBy({ id });
  }
}
