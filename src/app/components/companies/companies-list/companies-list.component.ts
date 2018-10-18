import { CompaniesService } from './../../../shared/services/companies.service';
import { Company } from './../../../shared/models/company.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html'
})
export class CompaniesListComponent implements OnInit {
  companies: Array<Company> = [];
  finderPattern: string;
  
  constructor(private CompanyService: CompaniesService) { }

  ngOnInit() {
    this.CompanyService.list()
      .subscribe(
        (companies: Array<Company>) => this.companies = companies
      );
  }
  onPatternChange(pattern: string) {
    this.finderPattern = pattern;
  }

}
