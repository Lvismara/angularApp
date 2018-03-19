import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';

//modulos de rotas
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'

//modulos de paginas e components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import {RestaurantService} from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewComponent } from './restaurant-detail/review/review.component'
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component'

//modulo de formularios
import { FormsModule,FormBuilder } from '@angular/forms';
//import { InputComponent } from './resources/input/input.component';
//import { RadioComponent } from './resources/radio/radio.component';
import { OrderItemComponent } from './order/order-item/order-item.component'
import { OrderService} from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { RatingComponent } from './resources/rating/rating.component';
import { ReactiveFormsModule} from '@angular/forms'
import { SharedModule} from './resources/shared.module'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    //AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewComponent,
    OrderComponent,
    //InputComponent,
    //RadioComponent,
    OrderItemComponent,
    DeliveryCostsComponent,
    OrderSumaryComponent,
    //RatingComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    //FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantService,OrderService,ShoppingCartService,{provide:LOCALE_ID,useValue:'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
