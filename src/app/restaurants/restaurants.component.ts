import { Component, OnInit } from '@angular/core';
import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantService} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants:Restaurant[]

  constructor(private restaurantService:RestaurantService) { }

  ngOnInit(){

  //mapear a requisoção e implementar o retorno na classe
    this.restaurantService.restaurants().subscribe(
      restaurants=> this.restaurants=restaurants
    )

  }

}
