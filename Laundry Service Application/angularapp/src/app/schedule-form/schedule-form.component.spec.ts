import { ComponentFixture, TestBed, waitForAsync, tick, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ScheduleService } from '../services/schedule-service.service';
import { of } from 'rxjs';

import { ScheduleFormComponent } from './schedule-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ScheduleFormComponent', () => {
  let fixture: ComponentFixture<ScheduleFormComponent>;
  let component: ScheduleFormComponent;
  let mockScheduleService: any;

  beforeEach(waitForAsync(() => {
    mockScheduleService = {
      createSchedule: () => of({ message: 'Schedule created successfully' }),
    };

    TestBed.configureTestingModule({
      declarations: [ScheduleFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      providers: [{ provide: ScheduleService, useValue: mockScheduleService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should have a form with the correct form controls', () => {
    expect(component.scheduleForm).toBeDefined();
    expect(component.scheduleForm.controls.fullName).toBeDefined();
    expect(component.scheduleForm.controls.mobileNumber).toBeDefined();
    expect(component.scheduleForm.controls.email).toBeDefined();
    expect(component.scheduleForm.controls.address).toBeDefined();
    expect(component.scheduleForm.controls.pickupDay).toBeDefined();
    expect(component.scheduleForm.controls.pickupTimeSlot).toBeDefined();
  });

  // fit('should submit the form when valid', fakeAsync(() => {
  //   // Fill in form values
  //   component.scheduleForm.patchValue({
  //     fullName: 'John Doe',
  //     mobileNumber: '123-456-7890',
  //     email: 'john@example.com',
  //     address: '123 Main St',
  //     pickupDay: 'Monday',
  //     pickupTimeSlot: '1-3pm',
  //   });

  //   // Simulate form submission
  //   spyOn(component as any, 'onSubmit').and.callThrough();
  //   const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
  //   submitButton.click();
  //   tick();
  //   fixture.detectChanges(); // Update the view after form submission

  //   expect(component.onSubmit).toHaveBeenCalled();
  //   // Add additional expectations based on your specific logic after form submission
  // }));

  fit('should render the Schedule Pick-Up header', () => {
    const headerElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(headerElement.textContent).toContain('Schedule Pick-Up');
  });

  fit('should render form controls and labels', () => {
    const formElements = fixture.debugElement.queryAll(By.css('form input, form select'));
    expect(formElements.length).toBe(6); // Adjust the count based on your actual form controls

    // Check if form control elements have associated labels
    for (const formElement of formElements) {
      const labelElement = fixture.debugElement.query(By.css(`label[for="${formElement.nativeElement.id}"]`));
      expect(labelElement).toBeTruthy();
    }
  });

  fit('should render the submit button', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;
    expect(submitButton).toBeTruthy();
  });
});
