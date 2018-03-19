import {Injectable} from '@angular/core'
import {CartItem} from  '../restaurant-detail/shopping-cart/cart-item.model'
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import {Order,OrderItem} from './order.model'
import {Observable} from 'rxjs/Observable'
import {Http,Headers,RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import {REST_APP_API} from'../app.api'

@Injectable()
export class OrderService{

  constructor(private shoppingcartService:ShoppingCartService,private http:Http){}

  itemsValue():number{
    return this.shoppingcartService.total()
  }

  cartItems():CartItem[]{
    return this.shoppingcartService.items
  }

  increaseQtde(item:CartItem){
    this.shoppingcartService.increaseQtde(item)
  }

  decreaseQtde(item:CartItem){
    this.shoppingcartService.decreaseQtde(item)
  }

  removeItem(item:CartItem){
    this.shoppingcartService.removeItem(item)
  }

  clear(){
    this.shoppingcartService.clear()
  }

  checkOrder(order:Order): Observable<string>{
    const header =new Headers()
    header.append('Content-Type','application/json')
    return this.http.post(
      `${REST_APP_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({headers:header})).map(respose=>respose.json()).map(order=>order.id)

  }

}
