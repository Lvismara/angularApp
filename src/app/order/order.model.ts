class Order{
  constructor(
    public addrees:string,
    public addreesnumber:number,
    public optionalAddrees:string,
    public paymentOption:string,
    public buyItems:OrderItem[]=[],
  ){}

}

class OrderItem{
  constructor(public qtde:number, public menuId:string){}
}

export{OrderItem,Order}
