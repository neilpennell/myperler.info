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
  attendees: Observable<Attendee[]>;

  constructor(private attendeeService: AttendeeService) {
  }

  ngOnInit() {
    // this.attendeeService.getAttendees().subscribe(data => {
    //   this.attendees = data;
    // });
    this.attendees = this.attendeeService.getAttendees();
  }
}
