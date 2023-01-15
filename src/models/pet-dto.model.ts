import { AnimalType } from "./animal-type.model";
import { Owner } from "./owner.model";

export interface PetDTO{
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  ownerId: string,
  animalTypeId: string,
  owner: Owner,
  animalType: AnimalType
}
