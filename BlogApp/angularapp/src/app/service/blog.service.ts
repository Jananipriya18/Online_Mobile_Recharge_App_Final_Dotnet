import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogmodel } from '../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'https://localhost:7160/api/blog';

  constructor(private http: HttpClient) { }

  addBlog(blog: Blogmodel): Observable<Blogmodel> {
    console.log('Adding Blog:', blog);
    return this.http.post<Blogmodel>(`${this.apiUrl}`, blog);
  }
  
  getBlogs(): Observable<Blogmodel[]> {
    console.log('Getting Blogs');
    return this.http.get<Blogmodel[]>(`${this.apiUrl}`);
  }
}
