import { TestBed, inject } from '@angular/core/testing';

import { MailProviderService } from './mail-provider.service';

describe('MailProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailProviderService]
    });
  });

  it('should be created', inject([MailProviderService], (service: MailProviderService) => {
    expect(service).toBeTruthy();
  }));
});
