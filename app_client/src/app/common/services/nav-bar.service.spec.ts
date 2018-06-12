import { TestBed, inject } from '@angular/core/testing';

import { NavBarService } from './nav-bar.service';

describe('NavBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavBarService]
    });
  });

  it('should ...', inject([NavBarService], (service: NavBarService) => {
    expect(service).toBeTruthy();
  }));
});
