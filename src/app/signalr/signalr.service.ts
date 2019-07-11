import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as signalR from '@aspnet/signalr';

import { environment } from '../../environments/environment';

@Injectable()
export class SignalRService {
  constructor(private httpClient: HttpClient, ) { }

  buildSignalRConnection() {
    return new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(environment.notifyUrl)
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
    return this.httpClient.post(environment.messageUrl,
      {
        Type: 'message',
        Payload: JSON.stringify({ username, message, timestamp: new Date().toISOString() })
      },
      { responseType: 'text' }
    );
  }
}
