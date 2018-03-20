import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

import {MeetingService} from "../../../service/model-meeting/meeting.service";
import {Meeting} from "../../../service/model-meeting/model-meeting";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  meetings: Observable<Meeting[]>;
  count: Observable<number>;

  constructor(public meetinService: MeetingService) {
  }

  ngOnInit() {
    this.meetings = this.meetinService.getMeetings();
    this.count = this.meetinService.getMeetingCount();
  }

}
