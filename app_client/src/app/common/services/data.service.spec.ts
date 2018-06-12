import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, Http]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
