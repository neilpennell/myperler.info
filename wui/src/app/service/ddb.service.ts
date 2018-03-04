import {Injectable} from "@angular/core";
import {CognitoUtil} from "./cognito.service";
import {environment} from "../../environments/environment";
import * as AWS from "aws-sdk/global";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';

export class UserTrail {
  id: string;
  userId: string;
  activityDate: string;
  type: string;

  createdAt: number;
  updatedAt: number;

  constructor(data: any) {
    this.id = data.id;
    this.userId = data.userId;
    this.activityDate = data.activityDate;
    this.type = data.type;

    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}


/**
 * Created by Vladimir Budilov
 */

@Injectable()
export class DynamoDBService {

  constructor(public cognitoUtil: CognitoUtil, private http: HttpClient) {
    console.log("DynamoDBService: constructor");
  }

  getAWS() {
    return AWS;
  }

  writeLogEntry(type: string) {
    try {
      let date = new Date().toString();
      console.log("DynamoDBService: Writing log entry. Type:" + type + " ID: " + this.cognitoUtil.getCognitoIdentity() + " Date: " + date);
      this.writeAPI(this.cognitoUtil.getCognitoIdentity(), date, type).subscribe(data => {
        console.log("DynamoDBService: wrote entry: " + JSON.stringify(data))
      });
    } catch (exc) {
      console.log("DynamoDBService: Couldn't write to DDB");
    }

  }


  writeAPI(data: string, date: string, _type: string): Observable<UserTrail> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Api-Key': environment.apiKey_usertrail
      })
    };
    const url = 'https://nuniqwivxa.execute-api.us-east-1.amazonaws.com/dev/myperlerUsers';
    let item: UserTrail;
    item = new UserTrail({userId: data, activityDate: date, type: _type});
    return this.http.post(environment.userTrail_endpoint, item, httpOptions)
      .pipe(
        catchError(this.handleError)
      );

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}


