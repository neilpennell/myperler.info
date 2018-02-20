import {Component} from '@angular/core';
import {AttendeeService} from "./service/model-attendee/attendee.service";
import {Attendee} from "./service/model-attendee/model-attendee";
import { AsyncPipe } from '@angular/common';

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
    // this.heroService.getHeroes()
    //   .subscribe(heroes => this.heroes = heroes);

    this.attendeeService.getAttendees().
      subscribe(data => this.attendees = data);

    // this.attendeeService.getAttendees().subscribe(data => {
    //   console.log('data');
    //   console.log(data);
    //   // this.attendees.push(data);
    //   this.attendees = data;
    //   console.log('attendees');
    //   console.log(this.attendees);
    // });
  }
}
