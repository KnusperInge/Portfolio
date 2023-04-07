import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn:'root'
})

export class SlidenavService{
private routerInfo:BehaviorSubject<boolean>;
 public opened:boolean=false;


 constructor(){
 this.routerInfo = new BehaviorSubject<boolean>(false);
 }


setValue(newValue:boolean):void{
  this.routerInfo.next(newValue);

}

getValue():Observable<boolean>{
  return this.routerInfo.asObservable();
}

}