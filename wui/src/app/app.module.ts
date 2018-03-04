import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

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
import {AwsUtil} from './service/aws.service';
import {CognitoUtil} from './service/cognito.service';
import {DynamoDBService} from './service/ddb.service';

import {AttendeeService} from './service/model-attendee/attendee.service';
import {UserLoginService} from './service/user-login.service';
import {UserParametersService} from './service/user-parameters.service';
import {UserRegistrationService} from './service/user-registration.service';

import {CustomMaterialModule} from "./shared/custom-material/custom-material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



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


    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AttendeeService,
    CognitoUtil,
    AwsUtil,
    DynamoDBService,
    UserRegistrationService,
    UserLoginService,
    UserParametersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
