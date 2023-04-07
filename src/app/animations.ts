import {trigger,state,style, animate,transition,} from '@angular/animations';

export const Hoveranimation= [
  trigger('show',[
    transition(':enter',[
    style({transform: 'translate(-100px,-100px)'}),
    animate('250ms',style({transform: 'translate(0,0)'}))
  ]) ,
  // transition(':leave',[
  //   style({   transform: 'translate(0,0)'}),
  //   animate('350ms',style({transform: 'translate(-100px,-100px)'}))
  // ])
  ])
]

export const Slidenav=[
  trigger('show',[
    transition(':enter',[
    style({transform: 'translate(100px,0px)'}),
    animate('250ms',style({transform: 'translate(0,0)'}))
  ]) ,
  transition(':leave',[
    style({   transform: 'translate(0,0)'}),
    animate('350ms',style({transform: 'translate(100px,0px)'}))
  ])
  ])
]