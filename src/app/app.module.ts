import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImpressumComponent } from './impressum/impressum.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';

import { MatButtonModule } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SlidenavService } from './slidenav.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartscreenComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ImpressumComponent,
    PrivacypolicyComponent,
    HeaderMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    ScrollingModule,
  ],
  providers: [SlidenavService],
  bootstrap: [AppComponent],
})
export class AppModule {}
