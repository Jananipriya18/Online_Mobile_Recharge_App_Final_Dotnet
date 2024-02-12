import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleService } from '../services/schedule-service.service';
@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  schedules: any[]; // Define the data structure for your schedules
  packageOptions: any[]; // Define the data structure for your package options
  statusOptions: any[]; // Define the data structure for your status options

  constructor(
    private route: ActivatedRoute,
    private apiService: ScheduleService
  ) {}

  ngOnInit(): void {
    // Fetch all schedules from your API
    this.apiService.getSchedules().subscribe((data: any[]) => {
      this.schedules = data;
    });

    // Fetch package options from your API
    this.apiService.getPackages().subscribe((packages: any[]) => {
      this.packageOptions = packages;
    });

    // Fetch status options from your API
    this.apiService.getStatuses().subscribe((statuses: any[]) => {
      this.statusOptions = statuses;
    });


  }

  // // Helper function to get the package name based on packageId
  getPackageName(packageId: number): string {
    const selectedPackage = this.packageOptions.find((pkg) => pkg.id === packageId);
    return selectedPackage ? selectedPackage.name : '';
  }

  // Helper function to get the status name based on statusId
  getStatusName(statusId: number): string {
    const selectedStatus = this.statusOptions.find((status) => status.id === statusId);
    return selectedStatus ? selectedStatus.name : '';
  }

  // Function to update the status for a schedule
  updateStatus(schedule: any): void {

    console.log(schedule.statusId);
    console.log(schedule.id);

    // Call your API service method to update the status
    this.apiService.updateSchedule(schedule.id, schedule.statusId).subscribe(
      (response: any) => {
        // Handle success, e.g., show a success message
        console.log('Status updated successfully:', response);
      },
      (error) => {
        // Handle error, e.g., display an error message
        console.error('Error updating status:', error);
      }
    );
  }

  deleteSchedule(id: number): void {
    if (confirm('Are you sure you want to delete this schedule?')) {
      this.apiService.deleteSchedule(id).subscribe(
        () => {
          this.schedules = this.schedules.filter(schedule => schedule.id !== id);
        },
        (error) => {
          // Handle the error, display an error message, etc.
          console.error('Error deleting schedule:', error);
        }
      );
    }
  }
}
