import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service'; // Import your API service here

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  scheduleForm: FormGroup;
  packageOptions: any[]; // Array to hold package options from the API


  constructor(private fb: FormBuilder, private apiService: ScheduleService) {
    this.scheduleForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      area: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      pickupDay: ['', Validators.required],
      pickupTimeSlot: ['', Validators.required],
      packageId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch package options from your API and populate packageOptions array
    this.apiService.getPackages().subscribe((packages: any[]) => {
      this.packageOptions = packages;
    });
  }
  onSubmit(): void {
    if (this.scheduleForm.invalid) {
      return;
    }
    console.log("asd");


    // Submit the form data to your API using apiService
    this.apiService.createSchedule(this.scheduleForm.value).subscribe(
      (response: any) => {
        // Handle success, e.g., show a success message
        console.log('Schedule created successfully:', response);
        window.location.href = '/schedule-details';
      },
      (error) => {
        // Handle error, e.g., display an error message
        console.error('Error creating schedule:', error);
      }
    );
  }
}
