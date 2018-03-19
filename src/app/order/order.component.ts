import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../resources/radio/radio-option.model'
import {OrderService} from './order.service'
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model'
import {Order} from './order.model'
import {OrderItem} from './order.model'
import {Router} from '@angular/router'
import {FormGroup, FormBuilder ,Validators,AbstractControl} from '@angular/forms'

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  emailPattern=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPattern=/^[0-9]*$/

  orderForm:FormGroup

  delivery:number=10

  paymentOptions:RadioOption[]=[
    {label:'Dinheiro',value:'MON'},
    {label:'Cartão Debito',value:'DEB'},
    {label:'Vale Alimentação',value:'REF'}
  ]
  constructor(private orderService:OrderService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    //validador do formulario
    this.orderForm=this.formBuilder.group({
       name: this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
       email: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
       emailConfirmation: this.formBuilder.control('',[Validators.required,Validators.pattern(this.emailPattern)]),
       address: this.formBuilder.control('',[Validators.required,Validators.minLength(5)]),
       addressNumber: this.formBuilder.control('',[Validators.required,Validators.minLength(2),Validators.pattern(this.numberPattern)]),
       optionalAddrees: this.formBuilder.control(''),
       paymentOption: this.formBuilder.control('',[Validators.required])
    } ,
    //validador entre campos do grupo ou a funcoes de validação externas
    {validator:OrderComponent.equalsTo})
  }

  static equalsTo(group:AbstractControl): {[key:string]:boolean} {
    //busca referencia ao atributo do grup
    const email =group.get('email')
    const emailConfirmation =group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }

    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  itemsValue():number{
    return this.orderService.itemsValue()
  }

  cartItems():CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQtde(item:CartItem){
    this.orderService.increaseQtde(item)
  }

  decreaseQtde(item:CartItem){
    this.orderService.decreaseQtde(item)
  }

  removeItem(item:CartItem){
    this.orderService.removeItem(item)
  }


  checkOrder(order:Order){
    order.buyItems=this.cartItems().map((item:CartItem)=> new OrderItem(item.qtde,item.menuItem.id))
    this.orderService.checkOrder(order).subscribe((orderId:string) =>{
      this.router.navigate(['/order-sumary'])
      console.log(`compra comcluida: ${orderId}`)
      this.orderService.clear()
    })
  }

}
