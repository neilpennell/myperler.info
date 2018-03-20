import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {LogoutComponent, RegistrationConfirmationComponent} from './public/auth/confirm/confirmRegistration.component';
import {ForgotPassword2Component, ForgotPasswordStep1Component} from './public/auth/forgot/forgotPassword.component';
import {LoginComponent} from './public/auth/login/login.component';
import {MFAComponent} from './public/auth/mfa/mfa.component';
import {NewPasswordComponent} from './public/auth/newpassword/newpassword.component';
import {RegisterComponent} from './public/auth/register/registration.component';
import {ResendCodeComponent} from './public/auth/resend/resendCode.component';
import {HomeComponent, HomeLandingComponent} from './public/home.component';
import {SecureHomeComponent} from './secure/landing/securehome.component';
import {AwsUtil} from './service/login-misc/aws.service';
import {CognitoUtil} from './service/login-misc/cognito.service';
import {DynamoDBService} from './service/ddb.service';

import {AttendeeService} from './service/model-attendee/attendee.service';
import {UserLoginService} from './service/login-misc/user-login.service';
import {UserParametersService} from './service/login-misc/user-parameters.service';
import {UserRegistrationService} from './service/login-misc/user-registration.service';

import {CustomMaterialModule} from './shared/custom-material/custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './secure/main-dashboard/dashboard/dashboard.component';
import {StatModule} from './secure/stat/stat.module';
import {ActionService} from "./service/model-action/action.service";
import {DecisionService} from "./service/model-decision/decision.service";
import {DiscussionService} from "./service/model-discussion/discussion.service";
import {MeetingService} from "./service/model-meeting/meeting.service";
import {TaskService} from "./service/model-task/task.service";
import { MeetingCardComponent } from './secure/main-dashboard/meeting-card/meeting-card.component';

@NgModule({
  declarations: [
    NewPasswordComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationConfirmationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPassword2Component,
    RegisterComponent,
    MFAComponent,
    HomeLandingComponent,
    HomeComponent,
    SecureHomeComponent,


    AppComponent,

    DashboardComponent,

    MeetingCardComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StatModule,
    routing
  ],
  providers: [
    AttendeeService,
    CognitoUtil,
    AwsUtil,
    DynamoDBService,
    UserRegistrationService,
    UserLoginService,
    UserParametersService,
    ActionService,
    DecisionService,
    DiscussionService,
    MeetingService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
