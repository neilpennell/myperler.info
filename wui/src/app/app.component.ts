import {Component} from '@angular/core';
import {Attendee} from "./service/model-attendee/model-attendee";
import {Observable} from "rxjs/Observable";
import {AwsUtil} from "./service/login-misc/aws.service";
import {UserLoginService} from "./service/login-misc/user-login.service";
import {CognitoUtil} from "./service/login-misc/cognito.service";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>`,
  styles: [`
    body {
      margin: 0;
      font-family: Roboto, sans-serif;
    }
  `]
})
export class AppComponent {
  titleTxt = 'myPerler.Info';
  // attendees: Observable<Attendee[]>;

  constructor(
    public awsUtil: AwsUtil,
    public userService: UserLoginService,
    public cognito: CognitoUtil,
    private title: Title) {
    console.log(`AppComponent: constructor`);
  }

  ngOnInit() {
    // this.attendeeService.getAttendees().subscribe(data => {
    //   this.attendees = data;
    // });
    // this.attendees = this.attendeeService.getAttendees();
    this.title.setTitle(this.titleTxt);
    console.log(`AppComponent: Checking if the user is already authenticated`);
    this.userService.isAuthenticated(this);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
    console.log('AppComponent: the user is authenticated: ' + isLoggedIn);
    let mythis = this;
    this.cognito.getIdToken({
      callback() {

      },
      callbackWithParam(token: any) {
        // Include the passed-in callback here as well so that it's executed downstream
        console.log('AppComponent: calling initAwsService in callback')
        mythis.awsUtil.initAwsService(null, isLoggedIn, token);
      }
    });
  }

}
