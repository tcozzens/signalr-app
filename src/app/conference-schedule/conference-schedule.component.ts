import { Component, OnInit } from '@angular/core';
import { ConferenceScheduleService } from './conference-schedule.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-conference-schedule',
  templateUrl: './conference-schedule.component.html',
  styleUrls: ['./conference-schedule.component.css']
})
export class ConferenceScheduleComponent implements OnInit {
  conferenceData;

  constructor(private conferenceScheduleService: ConferenceScheduleService) { }

  ngOnInit() {
    this.conferenceData = this.conferenceScheduleService.getConferences().pipe(
      map((conference: any) => {
        return conference;
      })
    );
  }

}
