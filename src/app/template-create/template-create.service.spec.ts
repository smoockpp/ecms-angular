import { TestBed, inject } from '@angular/core/testing';

import { TemplateCreateService } from './template-create.service';

describe('TemplateCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateCreateService]
    });
  });

  it('should ...', inject([TemplateCreateService], (service: TemplateCreateService) => {
    expect(service).toBeTruthy();
  }));
});
