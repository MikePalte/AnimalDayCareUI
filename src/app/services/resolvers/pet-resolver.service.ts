import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Pet } from 'src/models/pet.model';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class PetResolverService implements Resolve<Pet[]> {

constructor(private dataService: DataService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pet[]> {
   return this.dataService.get<Pet[]>('Pets').pipe(
    //Map the resp to an array of Pets
    map((resp) => {
       return resp as Pet[];
    }),
    //Handle Error
    catchError((err) => {
      this.router.navigateByUrl('/404');
      return throwError(() => new Error(err.message));
    })) as Observable<Pet[]>;
  }


}
