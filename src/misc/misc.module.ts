import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule,
    TopNavComponent
  ],
  declarations: [TopNavComponent]
})
export class MiscModule { }
