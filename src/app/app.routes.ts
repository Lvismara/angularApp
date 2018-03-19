import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component'
import {MenuComponent} from './restaurant-detail/menu/menu.component'
import {ReviewComponent} from './restaurant-detail/review/review.component'
import {OrderComponent} from './order/order.component'
import {OrderSumaryComponent} from './order-sumary/order-sumary.component'



//define rotas do app
export const ROUTES:Routes=[
  {path: '',component:HomeComponent},
  {path: 'restaurants',component:RestaurantsComponent},
  {path: 'restaurants/:id',component:RestaurantDetailComponent,
  //definir path filho para abas internas
   children:[
       {path: '',redirectTo:'menu',pathMatch:'full'}, //componente padrao da primeira inicialização
       {path: 'menu',component:MenuComponent},
       {path: 'reviews',component:ReviewComponent}
   ]},
  {path: 'order',loadChildren:'./order/order.module#OrderModule'},
  {path: 'order-sumary',component:OrderSumaryComponent},
  {path: 'about',loadChildren: './about/about.module#AboutModule'}
]
