import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pet } from 'src/models/pet.model';


const PET_DATA: Pet[] =[{
  id: "d337c1e4-748e-447e-8994-33d5e200c52a",
  firstName: "Chewy",
  lastName: "Palte",
  dateOfBirth: "1989-06-11T00:00:00",
  ownerId: "17f00098-e740-490f-9bcd-89d9158f0243",
  animalTypeId: "1dfaefbb-6898-445a-ae96-a2c8fb6779c3",
  owner: {
    id: "17f00098-e740-490f-9bcd-89d9158f0243",
    firstName: "Michael",
    lastName: "Palte",
    dateOfBirth: "1989-06-11T00:00:00"
  },
  animalType: {
    id: "1dfaefbb-6898-445a-ae96-a2c8fb6779c3",
    name: "Dog"
  }
},]

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth'];
  dataSource: MatTableDataSource<Pet> = new MatTableDataSource<Pet>();

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Pet>(PET_DATA);
  }

}
