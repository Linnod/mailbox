import { CanActivate } from "@angular/router/src/interfaces";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";
import { Urls } from "../urls.consts";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const result = this.authService.isAuthenticated();

    if (!result) {
      this.router.navigate([Urls.loginUrl()]);
    }

    return result;
  }
}
