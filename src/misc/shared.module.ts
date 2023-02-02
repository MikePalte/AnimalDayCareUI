import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CrudActionBarComponent } from './crud-action-bar/crud-action-bar.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [CrudActionBarComponent, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [CrudActionBarComponent],
  providers: [],
})
export class SharedModule { }
