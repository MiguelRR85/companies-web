import { UserService } from './../../../shared/services/user.service';
import { SessionService } from './../../../shared/services/session.service';
import { Component } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { ApiError } from '../../../shared/models/api-error.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  user: User = new User();
  apiError: ApiError;

  constructor(private userService: UserService, private router: Router, private sessionService: SessionService) { }

  onSubmitRegister(registerForm: FormGroup): void {
    if (registerForm.valid) {
      this.userService.create(this.user)
        .subscribe(
          () => {
            this.sessionService.authenticate(this.user)
          },
          (error: ApiError) => this.apiError = error
        );
        this.sessionService.authenticate(this.user)
        .subscribe(
          () => {
            this.router.navigate(['/home']);
          },
          (error: ApiError) => this.apiError = error
        );
    }
  }

}
