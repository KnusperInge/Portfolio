
import { Component, Input } from '@angular/core';
import { Hoveranimation } from '../animations';
import { projects } from '../projects_skills_json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
animations:[Hoveranimation]
})

export class ProjectsComponent {
 
  constructor(){}

cursorPos:boolean=false;
id:number=0;
projects=projects;

 hoverStatus(id:number){
 this.cursorPos=true;
 this.id=id;
}

touchmove(id:number){
console.log('touch on object:',id);
this.cursorPos=true;
this.id=id;
}
}
