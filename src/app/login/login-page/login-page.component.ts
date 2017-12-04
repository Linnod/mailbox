import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthModel } from '../auth.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Urls } from '../../urls.consts';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public loginControl: FormControl;
  public passwordControl: FormControl;

  public showAuthError: boolean;
  public authErrorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginControl = new FormControl();
    this.passwordControl = new FormControl();
  }


  public login(): void {
    const authModel: AuthModel = {
      login: this.loginControl.value,
      password: this.passwordControl.value
    };

    this.authService.login(authModel).subscribe(response => {
      if (!response) {
        this.showAuthError = !response;
        this.authErrorMessage = 'Login or password are incorrect';
        return;
      }

      this.router.navigate([Urls.mailBoxInboxUrl()]);
    });
  }
}
