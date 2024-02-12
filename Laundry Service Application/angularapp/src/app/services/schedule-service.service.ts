import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiBaseUrl = 'https://8080-fcebdccccdbcfacbdcbaeadbebabcdebdca.premiumproject.examly.io/api'; 

  constructor(private http: HttpClient) { }

  getSchedules(): Observable<any[]> {
    const url = `${this.apiBaseUrl}/laundry/schedules`;
    return this.http.get<any[]>(url);
  }

  createSchedule(scheduleData: any): Observable<any> {
    const url = `${this.apiBaseUrl}/laundry/schedule/add`;
    return this.http.post<any>(url, scheduleData);
  }

}
