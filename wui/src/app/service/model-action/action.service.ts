import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {Action} from "./model-action";

@Injectable()
export class ActionService {

  constructor(private http: HttpClient) { }

  getActions(): Observable<Action[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Api-Key': environment.apiKey_action
      })
    };

    return this.http.get<Action[]>(environment.action_endpoint, httpOptions);
  }
}
