import{ NgModule,ModuleWithProviders} from '@angular/core'
import{ CommonModule} from '@angular/common'
import{ FormsModule,ReactiveFormsModule} from '@angular/forms'

//import{RouterModule,Routes} from '@angular/router'
import{ InputComponent} from './input/input.component'
import{ RadioComponent} from './radio/radio.component'
import{ RatingComponent} from './rating/rating.component'

import { ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantService} from '../restaurants/restaurants.service'
import { OrderService} from '../order/order.service';
import { SanckbarComponent } from './messages/sanckbar/sanckbar.component'


@NgModule({
  declarations:[InputComponent,RadioComponent,RatingComponent, SanckbarComponent],
  imports:[CommonModule,FormsModule,ReactiveFormsModule],
  exports:[InputComponent,RadioComponent,RatingComponent,CommonModule,FormsModule,ReactiveFormsModule,SanckbarComponent]
})

export class SharedModule {
  static forRoot():ModuleWithProviders{
    return {
      ngModule:SharedModule,
      providers:[ShoppingCartService,RestaurantService,OrderService]
    }
  }
}
