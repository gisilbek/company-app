import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient) {}

  getCompaniesWithAdmins(): Observable<any[]> {
   return this.http.get<any[]>('https://company-management-ayoo.onrender.com/companies/with-admins');
  }

  createCompanyWithAdmin(data: any) {
    return this.http.post('https://company-management-ayoo.onrender.com/companies/with-admin', data);
  }

}


