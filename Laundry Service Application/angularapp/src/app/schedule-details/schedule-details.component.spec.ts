import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../services/schedule-service.service';
import { of } from 'rxjs';

import { ScheduleDetailsComponent } from './schedule-details.component';
import { By } from '@angular/platform-browser';

describe('ScheduleDetailsComponent', () => {
  let component: ScheduleDetailsComponent;
  let fixture: ComponentFixture<ScheduleDetailsComponent>;
  let mockActivatedRoute: any;
  let mockScheduleService: any;

  beforeEach(waitForAsync(() => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => '1', // Replace with a sample ID if needed
        },
      },
    };

    mockScheduleService = {
      getSchedules: () => of([
        { id: 1, fullName: 'John Doe', mobileNumber: '123-456-7890', email: 'john.doe@example.com', address: '123 Main St', pickupDay: 'Monday', pickupTimeSlot: '1-3pm' },
        { id: 2, fullName: 'Jane Smith', mobileNumber: '987-654-3210', email: 'jane.smith@example.com', address: '456 Oak Ave', pickupDay: 'Tuesday', pickupTimeSlot: '5-7pm' },
        { id: 3, fullName: 'Jane Smith', mobileNumber: '987-654-3210', email: 'jane.smith@example.com', address: '456 Oak Ave', pickupDay: 'Wednesday', pickupTimeSlot: '3-5pm' },
      ]),
    };

    TestBed.configureTestingModule({
      declarations: [ScheduleDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ScheduleService, useValue: mockScheduleService },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
  
  fit('should fetch schedules on initialization', () => {
    component.ngOnInit();
    expect(component.schedules.length).toBe(3);
  });

  fit('should render schedule data correctly', () => {
    const mockSchedules = [
      { id: 1, fullName: 'John Doe', mobileNumber: '123-456-7890', email: 'john.doe@example.com', address: '123 Main St', pickupDay: 'Monday', pickupTimeSlot: '1-3pm' },
      { id: 2, fullName: 'Jane Smith', mobileNumber: '987-654-3210', email: 'jane.smith@example.com', address: '456 Oak Ave', pickupDay: 'Tuesday', pickupTimeSlot: '5-7pm' },
    ];

    component.schedules = mockSchedules;
    fixture.detectChanges();

    const scheduleRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(scheduleRows.length).toBe(mockSchedules.length);

    for (let i = 0; i < mockSchedules.length; i++) {
      const row = scheduleRows[i].queryAll(By.css('td'));
      expect(row.length).toBe(7);

      expect(row[0].nativeElement.textContent).toContain(mockSchedules[i].id.toString());
      expect(row[1].nativeElement.textContent).toContain(mockSchedules[i].fullName);
      expect(row[2].nativeElement.textContent).toContain(mockSchedules[i].mobileNumber);
      expect(row[3].nativeElement.textContent).toContain(mockSchedules[i].address);
      expect(row[4].nativeElement.textContent).toContain(mockSchedules[i].pickupDay);
      expect(row[5].nativeElement.textContent).toContain(mockSchedules[i].pickupTimeSlot);
      expect(row[6].nativeElement.textContent).toContain(mockSchedules[i].email);
    }
  });
});
