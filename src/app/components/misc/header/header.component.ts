import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from './../../../shared/services/session.service';
import { Router } from '@angular/router';
import { User } from './../../../shared/models/user.model';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

 user: User;
 onUserChanges: Subscription;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    this.user = this.sessionService.user;
    this.onUserChanges = this.sessionService.onUserChanges()
      .subscribe((user: User) => this.user = user);
  }

  onClickLogout():void {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/login'])
      })
  }

}
