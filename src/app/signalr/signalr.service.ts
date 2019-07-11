import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class SignalRService {
  constructor(private httpClient: HttpClient, ) { }

  buildSignalRConnection() {
    return new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      // For prod
      // .withUrl('http://signalrapi-prod.us-east-1.elasticbeanstalk.com/notify')
      // For dev
      .withUrl('http://localhost:5000/notify')
      .build();
  }

  getPreviousMessages(): Observable<any> {
    return this.httpClient
      .get(
        'https://5lqbx47uxa.execute-api.us-east-1.amazonaws.com/dev/messages'
      )
      .pipe(map((messages: any) => messages));
  }

  submitNewMessage(username, message): Observable<any> {
    // For prod
    // return this.httpClient.post('http://signalrapi-prod.us-east-1.elasticbeanstalk.com/api/message',
    // For dev
    return this.httpClient.post('http://localhost:5000/api/message',
      {
        Type: 'message',
        Payload: JSON.stringify({ username, message, timestamp: new Date().toISOString() })
      },
      { responseType: 'text' }
    );
  }
}
