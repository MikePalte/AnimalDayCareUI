import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component';
import { MaterialModule } from 'src/misc/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [PetComponent]
})
export class PetModule { }
