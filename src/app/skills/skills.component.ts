import { Component } from '@angular/core';
import { skills } from '../projects_skills_json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  icons=skills;
}
