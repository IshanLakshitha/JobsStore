import { TestBed } from '@angular/core/testing';

import { AddVacancyService } from './add-vacancy.service';

describe('AddVacancyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddVacancyService = TestBed.get(AddVacancyService);
    expect(service).toBeTruthy();
  });
});
