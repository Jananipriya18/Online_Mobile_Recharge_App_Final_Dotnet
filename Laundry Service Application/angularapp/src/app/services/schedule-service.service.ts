import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiBaseUrl = 'https://localhost:7206/api'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  getPackages(): Observable<any[]> {
    const url = `${this.apiBaseUrl}/laundry/packages`;
    return this.http.get<any[]>(url);
  }

  getStatuses(): Observable<any[]> {
    const url = `${this.apiBaseUrl}/laundry/status`;
    return this.http.get<any[]>(url);
  }

  getSchedules(): Observable<any[]> {
    const url = `${this.apiBaseUrl}/laundry/schedules`;
    return this.http.get<any[]>(url);
  }

  createSchedule(scheduleData: any): Observable<any> {
    const url = `${this.apiBaseUrl}/laundry/schedule/add`;
    return this.http.post<any>(url, scheduleData);
  }

  updateSchedule(scheduleId: number, statusId: number): Observable<any> {
    const url = `${this.apiBaseUrl}/laundry/schedule/update/${scheduleId}/${statusId}`;
    return this.http.put<any>(url, statusId);
  }

  deleteSchedule(id: number): Observable<any> {
    const url = `${this.apiBaseUrl}/laundry/schedule/delete/${id}`;
    return this.http.delete(url);
  }
}
