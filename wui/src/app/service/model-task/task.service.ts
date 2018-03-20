import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";
import {Task} from "./model-task";

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Api-Key': environment.apiKey_task
      })
    };

    return this.http.get<Task[]>(environment.task_endpoint, httpOptions);
  }
}
