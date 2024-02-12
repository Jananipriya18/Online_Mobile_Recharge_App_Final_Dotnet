import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ScheduleService } from './schedule-service.service';

describe('ScheduleService', () => {
  let service: ScheduleService;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScheduleService]
    });

    service = TestBed.inject(ScheduleService);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  fit('ScheduleService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('ScheduleService_should_create_a_schedule', () => {
    const mockScheduleData = { fullName: 'John Doe', mobileNumber: '1234567890' };

    service['createSchedule'](mockScheduleData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiBaseUrl']}/laundry/schedule/add`);
    expect(req.request.method).toBe('POST');
    req.flush({ message: 'Schedule created successfully' });
  });
  afterEach(() => {
    httpMock.verify();
  });
});
