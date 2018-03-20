import {Component, Input, OnInit} from '@angular/core';
import {Meeting} from "../../../service/model-meeting/model-meeting";

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.css']
})
export class MeetingCardComponent implements OnInit {
  @Input() meeting: Meeting;

  constructor() { }

  ngOnInit() {
  }

}
