import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DisebarComponent } from './components/disebar/disebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    DisebarComponent,
    ContactPageComponent,
    SearchboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    HomePageComponent,AboutPageComponent,DisebarComponent,ContactPageComponent,SearchboxComponent
  ]
})
export class SharedModule { }
