import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
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
import {AboutComponent, HomeComponent, HomeLandingComponent} from './public/home.component';
// import {UseractivityComponent} from "./secure/useractivity/useractivity.component";
// import {MyProfileComponent} from "./secure/profile/myprofile.component";
import {SecureHomeComponent} from './secure/landing/securehome.component';
import {AwsUtil} from './service/aws.service';
import {CognitoUtil} from './service/cognito.service';
// import {JwtComponent} from "./secure/jwttokens/jwt.component";
import {DynamoDBService} from './service/ddb.service';

import {AttendeeService} from './service/model-attendee/attendee.service';
import {UserLoginService} from './service/user-login.service';
import {UserParametersService} from './service/user-parameters.service';
import {UserRegistrationService} from './service/user-registration.service';

import {CustomMaterialModule} from "./shared/custom-material/custom-material.module";


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
    AboutComponent,
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
