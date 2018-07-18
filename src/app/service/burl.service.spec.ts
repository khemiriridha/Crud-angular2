/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BurlService } from './burl.service';

describe('BurlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurlService]
    });
  });

  it('should ...', inject([BurlService], (service: BurlService) => {
    expect(service).toBeTruthy();
  }));
});
