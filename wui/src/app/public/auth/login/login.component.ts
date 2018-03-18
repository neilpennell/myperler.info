import {Component, OnInit} from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {ChallengeParameters, CognitoCallback, LoggedInCallback} from "../../../service/login-misc/cognito.service";
import {DynamoDBService} from "../../../service/ddb.service";
import {UserLoginService} from "../../../service/login-misc/user-login.service";

@Component({
  selector: 'awscognito-angular2-app',
  templateUrl: './login.html',
  styles: [`
    .container-signin {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class LoginComponent implements CognitoCallback, LoggedInCallback, OnInit {
  // email: string;
  // password: string;
  showSpinner = false;
  errorMessage: string;
  mfaStep = false;
  mfaData = {
    destination: '',
    callback: null
  };
  hidePassword = true;  // controls visabilty of password

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  // minLength - 8
  // one Upper Case
  // one Lowwer case
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  constructor(public router: Router,
              public ddb: DynamoDBService,
              public userService: UserLoginService) {
    console.log("LoginComponent constructor");
  }

  ngOnInit() {
    this.errorMessage = null;
    console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
    this.userService.isAuthenticated(this);
  }

  onLogin() {
    console.log("submit pressed");
    if (this.emailFormControl.value == null || this.passwordFormControl.value == null) {
      this.errorMessage = "All fields are required";
      return;
    }
    this.errorMessage = null;
    this.userService.authenticate(this.emailFormControl.value, this.passwordFormControl.value, this);
  }

  cognitoCallback(message: string, result: any) {
    if (message != null) { //error
      this.errorMessage = message;
      console.log("result: " + this.errorMessage);
      if (this.errorMessage === 'User is not confirmed.') {
        console.log("redirecting");
        this.router.navigate(['/home/confirmRegistration', this.emailFormControl.value]);
      } else if (this.errorMessage === 'User needs to set password.') {
        console.log("redirecting to set new password");
        this.router.navigate(['/home/newPassword']);
      }
    } else { //success
      this.ddb.writeLogEntry("login");
      this.router.navigate(['/securehome']);
    }
  }

  handleMFAStep(challengeName: string, challengeParameters: ChallengeParameters, callback: (confirmationCode: string) => any): void {
    this.mfaStep = true;
    this.mfaData.destination = challengeParameters.CODE_DELIVERY_DESTINATION;
    this.mfaData.callback = (code: string) => {
      if (code == null || code.length === 0) {
        this.errorMessage = "Code is required";
        return;
      }
      this.errorMessage = null;
      callback(code);
    };
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.router.navigate(['/securehome']);
    }
  }

  cancelMFA(): boolean {
    this.mfaStep = false;
    return false;   //necessary to prevent href navigation
  }
}
