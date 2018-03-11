import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Attendee} from "./model-attendee";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AttendeeService {
  private attendeeURL = 'https://api.myperler.info/v1/attendees';

  constructor(private http: HttpClient) {
  }

  getAttendees(): Observable<Attendee[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Api-Key': environment.apiKey_attendees
      })
    };

    return this.http.get<Attendee[]>(this.attendeeURL, httpOptions);
  }
}
