import { SessionService } from './../../../shared/services/session.service';
import { CompaniesService } from './../../../shared/services/companies.service';
import { Company } from './../../../shared/models/company.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-companies-item',
  templateUrl: './companies-item.component.html'
})
export class CompaniesItemComponent implements OnInit {

  @Input() company: Company = new Company();
  
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private companyService: CompaniesService
  ) { }

  ngOnInit() {
  }

}
