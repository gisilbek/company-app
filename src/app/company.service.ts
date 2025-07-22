import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompaniesWithAdmins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/with-admins`);
  }

  createCompanyWithAdmin(data: any) {
    return this.http.post(`${this.apiUrl}/with-admin`, data);
  }
}
