import {Component, OnInit} from "@angular/core";

declare let AWS: any;
declare let AWSCognito: any;


@Component({
  templateUrl: './landinghome.html'
})
export class HomeLandingComponent {
  constructor() {
    console.log("HomeLandingComponent constructor");
  }
}

@Component({
  templateUrl: './home.html',
  styles: [`
    mat-card {
      max-width: 80%;
      margin: 2em auto;
      text-align: center;
    }

    mat-toolbar-row {
      justify-content: space-between;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log("HomeComponent constructor");
  }

  ngOnInit() {

  }
}


