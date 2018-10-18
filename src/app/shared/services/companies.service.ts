import { Injectable } from '@angular/core';
import { ApiError } from '../models/api-error.model';
import { BaseApiService } from './base-api.service';
import { Company } from '../models/company.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService extends BaseApiService {

  private static readonly COMPANY_API = `${BaseApiService.BASE_API}/companies`;

  private companies: Array<Company> = [];
  public company: Company;
  private companiesSubject: Subject<Array<Company>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Array<Company> | ApiError> {
    return this.http.get<Array<Company>>(CompaniesService.COMPANY_API, BaseApiService.defaultOptions)
      .pipe(
        map((companies: Array<Company>) => {
          companies = companies.map(company => Object.assign(new Company(), company));
          this.companies = companies;
          this.notifyCompaniesChanges();
          return companies;
        }),
        catchError(this.handleError)
      );
  }

  create(company: Company): Observable<Company | ApiError> {
    return this.http.post<Company>(`${CompaniesService.COMPANY_API}`, company, BaseApiService.defaultOptions)
      .pipe(
        map((company: Company) => {
          this.company = Object.assign(new Company(), company);
          return this.company;
        }),
        catchError(this.handleError));
  }

  private notifyCompaniesChanges(): void {
    this.companiesSubject.next(this.companies);
  }
}
