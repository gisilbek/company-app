import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service'; 
import { CommonModule } from '@angular/common';

  
@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-list.component.html'
})

export class CompanyListComponent implements OnInit {
  companies: any[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompaniesWithAdmins().subscribe((data: any[]) => { this.companies = data; });
  }
}