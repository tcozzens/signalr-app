import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import * as signalR from '@aspnet/signalr';
import { connect } from 'tls';

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
      .withUrl('http://localhost:5000/notify')
      // For prod
      // .withUrl('http://signalrapi-prod.us-east-1.elasticbeanstalk.com/notify')
      .build();

    connection.start()
      .then(() => console.log('Connected!'))
      .catch((err) => console.log(err.toString()));

    connection.on('BroadcastMessage', (type: string, payload: string) => {
      this.messageService.add({ severity: type, summary: payload, detail: 'Via SignalR' });
    });
  }
}
