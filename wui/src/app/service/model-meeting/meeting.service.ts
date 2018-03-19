import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {Meeting} from "./model-meeting";

@Injectable()
export class MeetingService {

  constructor(private http: HttpClient) { }

  getMeetings(): Observable<Meeting[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Api-Key': environment.apiKey_meetings
      })
    };

    return this.http.get<Meeting[]>(environment.meeting_endpoint, httpOptions);
  }
}
