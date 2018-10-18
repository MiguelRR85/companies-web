import { Component } from '@angular/core';
import { CompaniesService } from './../../../shared/services/companies.service';
import { Company } from './../../../shared/models/company.model';
import { ApiError } from '../../../shared/models/api-error.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-companies',
  templateUrl: './register-companies.component.html',
  styleUrls: ['./register-companies.component.css']
})
export class RegisterCompaniesComponent {
  userId: string;
  company: Company = new Company();
  apiError: ApiError;

  constructor(
    private companyService: CompaniesService, 
    private router: Router
  ) { }

  onSubmitRegister(registerForm: FormGroup): void {
    if (registerForm.valid) {
      this.companyService.create(this.company)
        .subscribe(
          () => {
            const { _id } = this.companyService.company 
            return this.router.navigate(['/companies', _id]);
          },
          (error: ApiError) => this.apiError = error
        );
    }
  }

}
