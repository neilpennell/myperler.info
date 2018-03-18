import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LoggedInCallback} from "../../service/login-misc/cognito.service";
import {UserLoginService} from "../../service/login-misc/user-login.service";


@Component({
  selector: 'awscognito-angular2-app',
  templateUrl: './secureHome.html',
  styleUrls: ['./secureHome.css']
})
export class SecureHomeComponent implements OnInit, LoggedInCallback {

  constructor(public router: Router,
              public userService: UserLoginService,) {
    this.userService.isAuthenticated(this);
    console.log("SecureHomeComponent: constructor");
  }

  ngOnInit() {
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (!isLoggedIn) {
      this.router.navigate(['/home/login']);
    }
  }
}

