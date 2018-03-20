import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {Discussion} from "./model-discussion";

@Injectable()
export class DiscussionService {

  constructor(private http: HttpClient) { }

  getDiscussions(): Observable<Discussion[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Api-Key': environment.apiKey_discussion
      })
    };

    return this.http.get<Discussion[]>(environment.discussion_endpoint, httpOptions);
  }
}
