import { Component, OnInit ,Input ,forwardRef} from '@angular/core';
import { RadioOption} from './radio-option.model'
import { ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RadioComponent),
      multi:true
    }
  ]
})
export class RadioComponent implements OnInit,ControlValueAccessor{

  @Input() options:RadioOption[]

  value:any

  onChange:any

  constructor() {}

  ngOnInit() {
  }

  writeValue(obj: any): void {
    this.value=obj
  }

  registerOnChange(fn: any): void {
    this.onChange=fn
  }

  //desnecessarios para esse exemplo
  registerOnTouched(fn: any): void {}

  //desnecessarios para esse exemplo
  setDisabledState?(isDisabled: boolean): void{}

  setValue(valor:any){
    this.value=valor
    this.onChange(this.value)
  }

}
