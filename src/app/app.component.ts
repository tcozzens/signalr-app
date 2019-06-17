import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('http://signalrapi-prod.us-east-1.elasticbeanstalk.com/notify')
      .build();

    // tslint:disable-next-line: only-arrow-functions
    connection.start().then(function () {
      console.log('Connected!');
      // tslint:disable-next-line: only-arrow-functions
    }).catch(function (err) {
      return console.error(err.toString());
    });

    connection.on('BroadcastMessage', (type: string, payload: string) => {
      this.messageService.add({ severity: type, summary: payload, detail: 'Via SignalR' });
    });
  }
}
