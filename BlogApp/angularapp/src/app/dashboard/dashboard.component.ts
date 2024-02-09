import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Blogmodel } from '../model/blog.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  blogs: Blogmodel[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(
      (data: Blogmodel[]) => {
        this.blogs = data;
      },
      error => {
        console.error('Error fetching blogs:', error);
      }
    );
  }
}
