import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { ContacComponent } from './home/contac/contac.component';
import { InfoComponent } from './home/info/info.component';
import { StudiesComponent } from './home/studies/studies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    ContacComponent,
    InfoComponent,
    StudiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
