import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthModel } from './login/auth.model';

@Injectable()
export class AuthService {

  private isLoggedIn: boolean;

  constructor(
    private router: Router
  ) {
    this.isLoggedIn = false;
  }

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }


  public login(authModel: AuthModel): Observable<boolean> {
    const mockLogin = 'test';
    const mockPassword = 'test';

    if (authModel.login === mockLogin && authModel.password === mockPassword) {
      this.isLoggedIn = true;
    }

    return Observable.of(this.isLoggedIn);
  }
}
