import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate} from '@angular/animations'


@Component({
  selector: 'mt-sanckbar',
  templateUrl: './sanckbar.component.html',
  styleUrls: ['./sanckbar.component.css'],
  animations:[
    trigger('snack-visibility',[
      state('hidden',style({
        opacity:0,
        bottom: '0px'
      })),
      state('visible',style({
        opacity:1,
        bottom: '30px'
      })),
      transition('hidden => visible',animate('500ms 0s ease-in')),
      transition('visible => hidden',animate('500ms 0s ease-out'))
    ])
  ]
})

export class SanckbarComponent implements OnInit {

  snackInitialvisibility:string ='hidden'

  message:string='Hello there!'

  constructor() { }

  ngOnInit() {
  }

  toggleSnack(){
    this.snackInitialvisibility=this.snackInitialvisibility ==='hidden' ? 'visible' : 'hidden'
  }
}
