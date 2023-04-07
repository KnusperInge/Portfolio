import { Component, HostListener, OnInit } from '@angular/core';
import { SlidenavService } from './slidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;

  mobilModus: boolean = false;
  public opened: boolean = false;

  constructor(private sns: SlidenavService) {
    this.onWindowResize();

    this.opened = this.sns.opened;
  }

  toogle() {
    setTimeout(() => {
      this.sns.setValue(false);
    }, 250);
  }

  ngOnInit() {
    this.sns.getValue().subscribe((value) => {
      this.opened = value;
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth < 990) {
      this.mobilModus = true;
    } else {
      this.mobilModus = false;
    }
  }
}
