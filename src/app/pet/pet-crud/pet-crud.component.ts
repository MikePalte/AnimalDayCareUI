import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from 'src/models/pet.model';

const PET_DATA: Pet ={
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
};
@Component({
  selector: 'app-pet-crud',
  templateUrl: './pet-crud.component.html',
  styleUrls: ['./pet-crud.component.css']
})
export class PetCrudComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  header = 'Pet CRUD'
  constructor(private fb: FormBuilder,
    private route: Router,) { }

  ngOnInit() {
    this.createForm();
    //patch form with temp data
    this.form.patchValue(PET_DATA);
  }

  createForm() {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      owner: this.fb.group({
        id: ['', [Validators.required]],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
      }),
      animalType: this.fb.group({
        id: ['', [Validators.required]],
        name: ['', [Validators.required]],
      })
    });
  }

}
