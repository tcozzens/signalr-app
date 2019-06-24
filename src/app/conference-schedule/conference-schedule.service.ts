import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class ConferenceScheduleService {

  constructor(private http: HttpClient) { }

  getConferences() {
    // return this.http.get('http://conference-data-api-dev.us-east-1.elasticbeanstalk.com/conferences');
    return this.http.get('http://localhost:3000/conferences');
  }
}
