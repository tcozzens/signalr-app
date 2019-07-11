import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SignalRService } from './signalr.service';

@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.css']
})
export class SignalrComponent implements OnInit {
  submitForm = this.formBuilder.group({
    userName: ['', Validators.required],
    message: ['', Validators.required]
  });

  previousMessages = new BehaviorSubject([]);

  displayedColumns: string[] = ['timestamp', 'username', 'message'];

  constructor(private formBuilder: FormBuilder, private signalrService: SignalRService) { }

  ngOnInit(): void {
    this.signalrService.getPreviousMessages().pipe(
      map((messages) => this.previousMessages.next(JSON.parse(messages.body))),
      take(1)
    ).subscribe();

    const connection = this.signalrService.buildSignalRConnection();

    connection
      .start()
      .then(() => console.log('Connected!'))
      .catch(err => console.log(err.toString()));

    connection.on('BroadcastMessage', (type: string, payload: string) => {
      this.signalrService.getPreviousMessages().pipe(
        map((messages) => this.previousMessages.next(JSON.parse(messages.body)))
      ).subscribe();
    });
  }

  open() {
    this.signalrService.submitNewMessage(this.submitForm.controls.userName.value, this.submitForm.controls.message.value)
      .pipe(
        take(1)
      )
      .subscribe();

    this.submitForm.controls.message.reset();
  }
}
