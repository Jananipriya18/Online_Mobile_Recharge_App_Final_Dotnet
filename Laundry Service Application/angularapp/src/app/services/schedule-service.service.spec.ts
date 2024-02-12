// import { TestBed, inject, waitForAsync } from '@angular/core/testing';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { ScheduleService } from './schedule-service.service';

// describe('ScheduleService', () => {
//   let service: ScheduleService;
//   let httpMock: HttpTestingController;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [ScheduleService]
//     });

//     service = TestBed.inject(ScheduleService);
//     httpMock = TestBed.inject(HttpTestingController);
//   }));

//   fit('ScheduleService_should_be_created', () => {
//     expect(service).toBeTruthy();
//   });

//   fit('ScheduleService_should_get_packages', () => {
//     const mockPackages = [{ id: 1, name: 'Package A' }, { id: 2, name: 'Package B' }];

//     service['getPackages']().subscribe(packages => {
//       expect(packages).toEqual(mockPackages);
//     });

//     const req = httpMock.expectOne(`${service['apiBaseUrl']}/laundry/packages`);
//     expect(req.request.method).toBe('GET');
//     req.flush(mockPackages);
//   });

//   fit('ScheduleService_should_get_statuses', () => {
//     const mockStatuses = [{ id: 1, name: 'Status A' }, { id: 2, name: 'Status B' }];

//     service['getStatuses']().subscribe(statuses => {
//       expect(statuses).toEqual(mockStatuses);
//     });

//     const req = httpMock.expectOne(`${service['apiBaseUrl']}/laundry/status`);
//     expect(req.request.method).toBe('GET');
//     req.flush(mockStatuses);
//   });

//   fit('ScheduleService_should_get_schedules', () => {
//     const mockSchedules = [{ id: 1, fullName: 'John Doe' }, { id: 2, fullName: 'Jane Smith' }];

//     service['getSchedules']().subscribe(schedules => {
//       expect(schedules).toEqual(mockSchedules);
//     });

//     const req = httpMock.expectOne(`${service['apiBaseUrl']}/laundry/schedules`);
//     expect(req.request.method).toBe('GET');
//     req.flush(mockSchedules);
//   });

//   fit('ScheduleService_should_create_a_schedule', () => {
//     const mockScheduleData = { fullName: 'John Doe', mobileNumber: '1234567890' };

//     service['createSchedule'](mockScheduleData).subscribe(response => {
//       expect(response).toBeTruthy();
//     });

//     const req = httpMock.expectOne(`${service['apiBaseUrl']}/laundry/schedule/add`);
//     expect(req.request.method).toBe('POST');
//     req.flush({ message: 'Schedule created successfully' });
//   });

//   fit('ScheduleService_should_update_a_schedule', () => {
//     const scheduleId = 1;
//     const statusId = 2;

//     service['updateSchedule'](scheduleId, statusId).subscribe(response => {
//       expect(response).toBeTruthy();
//       console.log("asd"+response);

//     });

//     const req = httpMock.expectOne(`${service['apiBaseUrl']}/laundry/schedule/updte/${scheduleId}/${statusId}`);
//     expect(req.request.method).toBe('PUT');
//     req.flush({ message: 'Status updated successfully' });
//   });

//   fit('ScheduleService_should_delete_a_schedule', () => {
//     const scheduleId = 1;

//     service['deleteSchedule'](scheduleId).subscribe(response => {
//       expect(response).toBeTruthy();
//     });

//     const req = httpMock.expectOne(`${service['apiBaseUrl']}/laundry/schedule/delete/${scheduleId}`);
//     expect(req.request.method).toBe('DELETE');
//     req.flush({});
//   });

//   afterEach(() => {
//     httpMock.verify();
//   });
// });
