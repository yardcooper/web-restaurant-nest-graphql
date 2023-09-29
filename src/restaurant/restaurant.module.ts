import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantResolver } from './restaurant.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './models/restaurant.model';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  exports: [TypeOrmModule],
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantModule {}
