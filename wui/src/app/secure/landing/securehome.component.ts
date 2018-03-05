import {Component, OnDestroy, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoggedInCallback} from "../../service/cognito.service";
import {UserLoginService} from "../../service/user-login.service";


@Component({
  selector: 'awscognito-angular2-app',
  templateUrl: './secureHome.html',
  styleUrls: ['./secureHome.css']
})
export class SecureHomeComponent implements OnInit, OnDestroy, LoggedInCallback {

  shouldRun = true;
  events = [];

  constructor(public router: Router,
              public userService: UserLoginService,) {
    this.userService.isAuthenticated(this);
    console.log("SecureHomeComponent: constructor");
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.router.navigate(['/home/login']);
    }
  }
}

