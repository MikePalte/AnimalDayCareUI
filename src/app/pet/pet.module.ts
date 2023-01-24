import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component';
import { MaterialModule } from 'src/misc/material.module';
import { PetCrudComponent } from './pet-crud/pet-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PetComponent, PetCrudComponent]
})
export class PetModule { }
