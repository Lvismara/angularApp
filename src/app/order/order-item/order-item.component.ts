import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';
import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {

  @Input() items:CartItem[]

  @Output() increaseQtde= new EventEmitter<CartItem>()
  @Output() decreaseQtde= new EventEmitter<CartItem>()
  @Output() removeItem= new EventEmitter<CartItem>()


  constructor() { }

  ngOnInit() {
  }

  emitAddQtdeItem(item:CartItem){
    this.increaseQtde.emit(item)
  }

  emitLessQtdeItem(item:CartItem){
    this.decreaseQtde.emit(item)
  }

  emitRemoveItem(item:CartItem){
    this.removeItem.emit(item)
  }

}
