import { Injectable } from '@angular/core';

import { TemplateCreate } from './template-create';
import { TEMPLATES } from '../mock.template-create';

@Injectable()
export class TemplateCreateService {
    getTemplates(): Promise<TemplateCreate[]> {
      return Promise.resolve(TEMPLATES);
    }
}