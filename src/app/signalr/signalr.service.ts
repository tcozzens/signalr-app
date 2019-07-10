import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SignalRService {
  constructor(private httpClient: HttpClient) { }

  getPreviousMessages(): Observable<any[]> {
    return this.httpClient
      .get(
        'https://5lqbx47uxa.execute-api.us-east-1.amazonaws.com/dev/messages'
      )
      .pipe(map((messages: any[]) => messages));
  }
}
