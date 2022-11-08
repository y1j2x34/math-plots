import { TestBed } from '@angular/core/testing';

import { PlotColorListService } from './plot-color-list.service';

describe('PlotColorListService', () => {
  let service: PlotColorListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlotColorListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
