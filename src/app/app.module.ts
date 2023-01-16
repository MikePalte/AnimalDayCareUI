import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/misc/material.module';
import { TopNavComponent } from 'src/misc/top-nav/top-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetModule } from './pet/pet.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PetModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
