import { Component } from '@angular/core';
import { CompanyService } from '../company.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-company-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-create.component.html'
})

export class CompanyCreateComponent {
  data = {
    company: { name: '', description: '' },
    admin: { name: '', email: '', password: '' }
  };

  constructor(private companyService: CompanyService) { }

  createCompany(): void {
    this.companyService.createCompanyWithAdmin(this.data).subscribe(response => {
      console.log('Empresa y admin creados:', response);
      this.data = {
        company: { name: '', description: '' },
        admin: { name: '', email: '', password: '' }
      };
    });
  }
}


