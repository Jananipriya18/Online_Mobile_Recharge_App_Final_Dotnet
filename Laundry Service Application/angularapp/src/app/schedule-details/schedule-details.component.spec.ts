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
      ['getSchedules']: () => of([
        // Define sample schedules here for your test
        { id: 1, fullName: 'John Doe', /* other properties */ },
        { id: 2, fullName: 'Jane Smith', /* other properties */ },
        { id: 3, fullName: 'Jane Smith', /* other properties */ },
      ]),
      ['getPackages']: () => of([
        // Define sample package options here for your test
        { id: 1, name: 'Package A' },
        { id: 2, name: 'Package B' },
      ]),
      ['getStatuses']: () => of([
        // Define sample status options here for your test
        { id: 1, name: 'Status A' },
        { id: 2, name: 'Status B' },
      ]),
      ['updateSchedule']: () => of({ message: 'Status updated successfully' }),
      ['deleteSchedule']: () => of(null),
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should fetch schedules, packages, and statuses on initialization', () => {
    // Assuming you have a method to fetch data and initialize component properties
    component['ngOnInit']();

    expect(component['schedules'].length).toBe(3); // Modify the length based on your sample data
    expect(component['packageOptions'].length).toBe(2); // Modify the length based on your sample data
    expect(component['statusOptions'].length).toBe(2); // Modify the length based on your sample data
  });

  fit('should update status for a schedule', () => {
    const sampleSchedule = { id: 1, statusId: 1 };
    component['schedules'] = [sampleSchedule];

    // Call the updateStatus method
    const updateMethod = component['updateStatus'](sampleSchedule);
    expect(sampleSchedule['statusId']).toBe(1);
  });

  fit('should delete a schedule', () => {
    const sampleSchedule = { id: 1 };
    component['schedules'] = [sampleSchedule];

    spyOn(window as any, 'confirm').and.returnValue(true); // Mocking the confirmation dialog

    // Call the deleteSchedule method
    component['deleteSchedule'](sampleSchedule.id);

    // Expect the schedule to be deleted from the component's list
    expect(component['schedules'].length).toBe(0);
  });

  fit('should render a table with specific columns', () => {
    const tableElement = fixture.debugElement.query(By.css('table'));
    expect(tableElement).toBeTruthy();

    const tableHeaders = tableElement.queryAll(By.css('thead th'));
    expect(tableHeaders.length).toBe(12); // Adjust the count based on your actual table structure
  });

  fit('should render schedule data correctly', () => {
    const mockSchedules = [
      {
        id: 1,
        fullName: 'John Doe',
        mobileNumber: '123-456-7890',
        // Add other properties here as needed
      },
      {
        id: 2,
        fullName: 'Jane Smith',
        mobileNumber: '987-654-3210',
        // Add other properties here as needed
      },
    ];

    component['schedules'] = mockSchedules;
    fixture.detectChanges();

    const scheduleRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(scheduleRows.length).toBe(mockSchedules.length);

    for (let i = 0; i < mockSchedules.length; i++) {
      const row = scheduleRows[i].queryAll(By.css('td'));
      expect(row.length).toBe(12); // Adjust the count based on your actual table structure

      // Check if the rendered data matches the mock data
      expect(row[0]['nativeElement'].textContent).toContain(mockSchedules[i].id.toString());
      expect(row[1]['nativeElement'].textContent).toContain(mockSchedules[i].fullName);
      expect(row[2]['nativeElement'].textContent).toContain(mockSchedules[i].mobileNumber);
      // Add similar checks for other properties
    }
  });
});
