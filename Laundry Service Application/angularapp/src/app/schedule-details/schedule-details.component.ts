import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule-service.service';
import { UserSchedule } from '../models/user-schedule.model';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  schedules: UserSchedule[]; // Define the data structure for your schedules

  constructor(private apiService: ScheduleService) {}

  ngOnInit(): void {
    // Fetch all schedules from your API
    this.apiService.getSchedules().subscribe(
      (data: UserSchedule[]) => {
        this.schedules = data;
      },
      (error) => {
        console.error('Error fetching schedules:', error);
      }
    );
  }
}
