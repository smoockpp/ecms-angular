import { Component, OnInit } from '@angular/core';
import { TemplateCreate } from './template-create';
import { TemplateCreateService } from './template-create.service';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.scss'],
  providers: [TemplateCreateService]
})
export class TemplateCreateComponent implements OnInit {
  title: 'ECMS - Template Create';
  templates: TemplateCreate[];
  selectedTemplate: TemplateCreate;

  constructor(private templateCreateService: TemplateCreateService) {

  }

  getTemplates(): void {
    this.templateCreateService.getTemplates().then(templates => this.templates = templates)
  }

  ngOnInit() {
    this.getTemplates();
  }

  onSelect(template: TemplateCreate): void {
    this.selectedTemplate = template;
  }

}
