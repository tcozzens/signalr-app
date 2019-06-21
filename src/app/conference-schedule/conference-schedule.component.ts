import { Component, OnInit } from '@angular/core';
import { ConferenceScheduleService } from './conference-schedule.service';
import { find, tap, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-conference-schedule',
  templateUrl: './conference-schedule.component.html',
  styleUrls: ['./conference-schedule.component.css']
})
export class ConferenceScheduleComponent implements OnInit {
  conferenceData;
  conferenceSessions;

  constructor(private conferenceScheduleService: ConferenceScheduleService) { }

  ngOnInit() {
    this.conferenceData = this.conferenceScheduleService.getConferences();
  }

  conferenceSelected(conferenceName) {
    this.conferenceSessions = this.conferenceData.pipe(
      map((conferences: any) => conferences.find(conference => conference.name === conferenceName)),
      map((x: any) => x.sessions)
    );
  }
}
