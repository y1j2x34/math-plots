import { TestBed } from '@angular/core/testing';

import { FormulaListService } from './formula-list.service';

describe('FormulaListService', () => {
  let service: FormulaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
