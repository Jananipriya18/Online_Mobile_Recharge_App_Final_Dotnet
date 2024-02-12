import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ScheduleService } from '../services/schedule-service.service';
import { of } from 'rxjs';

import { ScheduleFormComponent } from './schedule-form.component';
import { HttpClientModule } from '@angular/common/http';

describe('ScheduleFormComponent', () => {
  let fixture: ComponentFixture<ScheduleFormComponent>;
  let component: ScheduleFormComponent;
  let mockScheduleService: any;

  beforeEach(waitForAsync(() => {
    mockScheduleService = {
      ['getPackages']: () => of([
        { id: 1, name: 'Package A' },
        { id: 2, name: 'Package B' },
      ]),
      ['createSchedule']: () => of({ message: 'Schedule created successfully' }),
    };

    TestBed.configureTestingModule({
      declarations: [ScheduleFormComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
      providers: [{ useValue: mockScheduleService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('Schedule_Form_Component_should_have_a_form_with_the_correct_form_controls', () => {
    expect(component['scheduleForm']).toBeDefined();
    expect(component['scheduleForm']['controls']['fullName']).toBeDefined();
    expect(component['scheduleForm']['controls']['mobileNumber']).toBeDefined();
    expect(component['scheduleForm']['controls']['email']).toBeDefined();
    expect(component['scheduleForm']['controls']['address']).toBeDefined();
    expect(component['scheduleForm']['controls']['pickupDay']).toBeDefined();
    expect(component['scheduleForm']['controls']['pickupTimeSlot']).toBeDefined();
  });

  fit('Schedule_Form_Component_should_submit_the_form_when_valid', () => {
    // Fill in form values
    component.scheduleForm.patchValue({
      // fullName: 'John Doe',
      // mobileNumber: '123-456-7890',
      // email: 'john@example.com',
      // address: '123 Main St',
      // area: 'Sample Area',
      // pincode: '123456',
      // pickupDay: 'Monday',
      // pickupTimeSlot: '1-3pm',
      // packageId: 1,
    });

    // Simulate form submission
    spyOn(component as any, 'onSubmit').and.callThrough();
    // component['onSubit'] = jasmine.createSpy('onSubmit');
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    submitButton['nativeElement'].click();

    fixture.detectChanges(); // Update the view after form submission

    expect(component['onSubmit']).toHaveBeenCalled();
    // Add additional expectations based on your specific logic after form submission
  });

  fit('Schedule_Form_Component_should_be_create', () => {
    expect(component).toBeTruthy();
  });

  fit('Schedule_Form_Component_should_render_the_Schedule_Pick_Up_header', () => {
    const headerElement = fixture.debugElement.query(By.css('h2'));
    expect(headerElement['nativeElement'].textContent).toContain('Schedule Pick-Up');
  });

  fit('Schedule_Form_Component_should_render_form_controls_and_labels', () => {
    const formElements = fixture.debugElement.queryAll(By.css('form input, form select'));
    expect(formElements.length).toBe(9); // Adjust the count based on your actual form controls

    // Check if form control elements have associated labels
    for (const formElement of formElements) {
      const labelElement = fixture.debugElement.query(By.css(`label[for="${formElement.nativeElement.id}"]`));
      expect(labelElement).toBeTruthy();
    }
  });

  fit('Schedule_Form_Component_should_render_the_submit_button', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(submitButton).toBeTruthy();
  });
});
