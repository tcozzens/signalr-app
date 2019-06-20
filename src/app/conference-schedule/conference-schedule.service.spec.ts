import { TestBed } from '@angular/core/testing';

import { ConferenceScheduleService } from './conference-schedule.service';

describe('ConferenceScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceScheduleService = TestBed.get(ConferenceScheduleService);
    expect(service).toBeTruthy();
  });
});
