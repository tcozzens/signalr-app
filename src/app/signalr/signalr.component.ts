import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.css']
})
export class SignalrComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl('http://localhost:5000/notify')
      // For prod
      // .withUrl('http://signalrapi-prod.us-east-1.elasticbeanstalk.com/notify')
      .build();

    connection
      .start()
      .then(() => console.log('Connected!'))
      .catch(err => console.log(err.toString()));

    connection.on('BroadcastMessage', (type: string, payload: string) => {
      this.snackBar.open(payload, 'Close', { duration: 3000 });
    });
  }
}
