import { Component, OnInit, Input ,ContentChild ,AfterContentInit } from '@angular/core';
import {NgModel,FormControlName} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  input:any

  @Input() label:string

  @Input() sucessMessage:string

  @Input() erroMessage:string


  @ContentChild(NgModel) model:NgModel
  @ContentChild(FormControlName) control:FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){

    this.input=this.model || this.control

    if(this.input ===undefined){
      throw new Error('Usar NgModel ou FormControlName no componente')
    }
  }

}
