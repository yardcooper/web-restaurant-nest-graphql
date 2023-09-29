import { Args, Resolver, Query, Int, Mutation } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { Item } from './models/restaurant.model';
import { CreateItemInput } from './dto/create-item.input';

@Resolver((of) => Item)
export class RestaurantResolver {
  constructor(private itemsService: RestaurantService) {}

  @Query((returns) => Item)
  getItem(@Args('id', { type: () => Int }) id: number): Promise<Item> {
    return this.itemsService.findItem(id);
  }

  @Query((returns) => [Item])
  items(): Promise<Item[]> {
    return this.itemsService.findAllItems();
  }

  @Mutation((returns) => Item)
  addItem(
    @Args('createItemInput') createItemInput: CreateItemInput,
  ): Promise<Item> {
    return this.itemsService.createItem(createItemInput);
  }
}
