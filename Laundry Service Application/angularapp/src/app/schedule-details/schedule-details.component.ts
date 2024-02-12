import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  schedules: any[]; // Define the data structure for your schedules

  constructor(private apiService: ScheduleService) {}

  ngOnInit(): void {
    // Fetch all schedules from your API
    this.apiService.getSchedules().subscribe(
      (data: any[]) => {
        this.schedules = data;
      },
      (error) => {
        console.error('Error fetching schedules:', error);
      }
    );
  }
}
