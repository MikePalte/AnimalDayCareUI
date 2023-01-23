/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PetResolverService } from './pet-resolver.service';

describe('Service: PetResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetResolverService]
    });
  });

  it('should ...', inject([PetResolverService], (service: PetResolverService) => {
    expect(service).toBeTruthy();
  }));
});
