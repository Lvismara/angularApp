import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../restaurants/restaurants.service'
import {ActivatedRoute} from "@angular/router"
import {Observable} from 'rxjs/Observable'


@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews:Observable<any>

  constructor(private restaurantService:RestaurantService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.reviews=this.restaurantService.reviewOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
