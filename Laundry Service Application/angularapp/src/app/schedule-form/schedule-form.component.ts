import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  scheduleForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private apiService: ScheduleService,
    private router: Router  // Inject the Router service
  ) {
    this.scheduleForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      pickupDay: ['', Validators.required],
      pickupTimeSlot: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // You may fetch any additional data if needed
  }

  onSubmit(): void {
    if (this.scheduleForm.invalid) {
      return;
    }

    // Submit the form data to your API using apiService
    this.apiService.createSchedule(this.scheduleForm.value).subscribe(
      (response: any) => {
        // Handle success
        console.log('Schedule created successfully:', response);
        // Redirect to the schedule details page
        this.router.navigate(['/schedule-details']);
      },
      (error) => {
        // Handle error, e.g., display an error message
        console.error('Error creating schedule:', error);
      }
    );
  }
}
