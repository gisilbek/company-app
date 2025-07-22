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
   return this.http.get<any[]>('http://localhost:3000/companies/with-admins');
  }

  createCompanyWithAdmin(data: any) {
    return this.http.post('http://localhost:3000/companies/with-admin', data);
  }

}


