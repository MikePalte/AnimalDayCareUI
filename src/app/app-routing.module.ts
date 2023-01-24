import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCrudComponent } from './pet/pet-crud/pet-crud.component';
import { PetComponent } from './pet/pet.component';
import { PetResolverService } from './services/resolvers/pet-resolver.service';


const routes: Routes = [{
  path: "",
  component: PetComponent,
  resolve: {data: PetResolverService}
},
{
  path: "pets",
  component: PetComponent,
  resolve: {data: PetResolverService}
},
{
  path: "pet/:id",
  component: PetCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
