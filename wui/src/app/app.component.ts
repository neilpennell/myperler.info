import {Component} from '@angular/core';
// import {AttendeeService} from "./service/model-attendee/attendee.service";
import {Attendee} from "./service/model-attendee/model-attendee";
import {Observable} from "rxjs/Observable";
import {AwsUtil} from "./service/aws.service";
import {UserLoginService} from "./service/user-login.service";
import {CognitoUtil} from "./service/cognito.service";
import * as AWS from 'aws-sdk';

// templateUrl: './app.component.html',

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPerler.Info';
  attendees: Observable<Attendee[]>;

  constructor(
    public awsUtil: AwsUtil,
    public userService: UserLoginService,
    public cognito: CognitoUtil) {
    console.log(`AppComponent: constructor`);
  }

  ngOnInit() {
    // this.attendeeService.getAttendees().subscribe(data => {
    //   this.attendees = data;
    // });
    // this.attendees = this.attendeeService.getAttendees();
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
