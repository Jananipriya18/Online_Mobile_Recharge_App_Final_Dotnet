import { Component, OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';
import { Blogmodel } from '../model/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: Blogmodel = new Blogmodel(); 

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  addBlog() {
    this.blogService.addBlog(this.blog).subscribe(
      (data) => {
        console.log('Blog added successfully:', data);
        this.resetForm();
      },
      error => {
        console.error('Error adding blog:', error);
      }
    );
  }

  resetForm() {
    this.blog = new Blogmodel(); 
  }
}
