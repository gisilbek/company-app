import { Component } from '@angular/core';
import { CompanyService } from '../company.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-company-create',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './company-create.component.html'
})
export class CompanyCreateComponent {
  data = {
    company: { name: '', description: '' },
    admin: { name: '', email: '', password: '' }
  };

  constructor(
    private companyService: CompanyService,
    private snackBar: MatSnackBar
  ) {}

  createCompany(): void {
    this.companyService.createCompanyWithAdmin(this.data).subscribe({
      next: (response) => {
        this.snackBar.open('Empresa registrada con éxito', 'Cerrar', {
          duration: 3000
        });
        this.data = {
          company: { name: '', description: '' },
          admin: { name: '', email: '', password: '' }
        };
      },
      error: (error) => {
        console.error('Error al crear empresa:', error);
        this.snackBar.open('Error al registrar empresa', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
}


