import { Component, OnInit,OnChanges, Output, EventEmitter, Input, } from '@angular/core';
import { Slidenav } from '../animations';
import { SlidenavService } from '../slidenav.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
  animations:[Slidenav]
})
export class HeaderMobileComponent implements OnInit{
 public opened:boolean=false;
  constructor(private sns:SlidenavService){

}


ngOnInit(){
  this.sns.getValue().subscribe((value)=>{
    this.opened=value;
  })
  console.log(this.sns.opened)
}


toogleSidnav(){
 if(!this.opened){
  this.sns.setValue(true);
 }else{
  this.sns.setValue(false);
 }
  
}
}


