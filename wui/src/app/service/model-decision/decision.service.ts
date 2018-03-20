import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {Decision} from "./model-decision";

@Injectable()
export class DecisionService {

  constructor(private http: HttpClient) { }

  getDecisions(): Observable<Decision[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-Api-Key': environment.apiKey_decision
      })
    };

    return this.http.get<Decision[]>(environment.decision_endpoint, httpOptions);
  }
}
