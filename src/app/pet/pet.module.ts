import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetComponent } from './pet.component'; 
import { PetCrudComponent } from './pet-crud/pet-crud.component';
import { SharedModule } from 'src/misc/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PetComponent, PetCrudComponent]
})
export class PetModule { }
