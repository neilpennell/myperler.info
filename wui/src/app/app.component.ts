import {Component} from '@angular/core';
import {AttendeeService} from "./service/model-attendee/attendee.service";
import {Attendee} from "./service/model-attendee/model-attendee";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPerler.Info';
  attendees: Attendee[];

  constructor(private attendeeService: AttendeeService) {
  }

  ngOnInit() {
    this.attendees = [];
    this.attendeeService.getAttendees().subscribe(data => {
      console.log(data);
      this.attendees.push(data);
    });
  }
}
