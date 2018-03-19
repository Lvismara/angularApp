import {MenuItem} from '../menu-item/menu-item.model'
export class CartItem {

  constructor(public menuItem:MenuItem,public qtde:number=1){}

  value():number{
    return this.menuItem.price * this.qtde
  }
}
