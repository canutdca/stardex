/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpToolsServiceService } from './http-tools-service.service';

describe('HttpToolsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpToolsServiceService]
    });
  });

  it('should ...', inject([HttpToolsServiceService], (service: HttpToolsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
