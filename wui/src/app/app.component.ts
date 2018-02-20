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
  // attendees: Object[];

  constructor(private attendeeService: AttendeeService) {

    // this.attendees.push(new Attendee({createdAt: 1519079503198, id: "2ca26c7e-2a41-48b5-9346-edae00e8936d", name: "user 3", updatedAt: 1519079503198}));
    // this.attendees.push(new Attendee({createdAt: 1519079501614, id: "551d0c17-a8df-43f5-b3e3-2b4c827db49b", name: "user 1", updatedAt: 1519079501614}));
    // this.attendees.push(new Attendee({createdAt: 1519079502934, id: "652a7b67-3b4e-40f3-9c63-464417ff5746", name: "user 2", updatedAt: 1519079502934}));
    // this.attendees.push(new Attendee({createdAt: 1519079503447, id: "6f39a555-b6ec-42fe-8f3c-e904d7743ad9", name: "user 4", updatedAt: 1519079503447}));
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
