import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item/menu-item.model'

export class ShoppingCartService{
  items:CartItem[]=[]

  clear(){
    this.items=[]
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=>mItem.menuItem.id === item.id)

    if(foundItem){
      this.increaseQtde(foundItem)
    }else{
      this.items.push(new CartItem(item))
    }
  }

  increaseQtde(item:CartItem){
    item.qtde =item.qtde+1
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item),1)
  }

  decreaseQtde(item:CartItem){
    if(item.qtde>1){
      item.qtde =item.qtde-1
    }else{
      this.removeItem(item)
    }
  }

  total():number{
    let soma:number = 0
    for(let index of this.items){
      soma+=index.value()
    }
    return soma
    //outra inplementação da soma do total utilizando map
    //return this.itens.map(item=> item.value()).reduce((prev,value)=>prev+value,0)
  }

}
