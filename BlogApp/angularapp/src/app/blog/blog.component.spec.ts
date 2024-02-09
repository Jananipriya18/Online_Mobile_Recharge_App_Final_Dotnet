import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlogComponent } from './blog.component';
import { BlogService } from '../service/blog.service';
import { of } from 'rxjs';
import { Blogmodel } from '../model/blog.model';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;
  let blogService: BlogService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [BlogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    blogService = TestBed.inject(BlogService);
    fixture.detectChanges();
  });

  fit('blogComponent_should be created', () => {
    expect(component).toBeTruthy();
  });

  fit('blogComponent_should call "addBlog" method and "resetForm" on successful blog addition', () => {
    const addBlogSpy = spyOn(blogService, 'addBlog').and.returnValue(of({
      blogSubject: 'Test Subject',
      blogContent: 'Test Content',
      authorName: 'Test Author',
      blogCategory: 'Test Category',
      date: '2022-01-01'
    } as Blogmodel));
    const resetFormSpy = spyOn(component, 'resetForm');
  
    component['addBlog']();
  
    expect(addBlogSpy).toHaveBeenCalled();
    expect(addBlogSpy).toHaveBeenCalledWith(component.blog);
    expect(resetFormSpy).toHaveBeenCalled();
  });
  
  fit('blogComponent_should reset the form when "resetForm" is called', () => {
    component.blog.blogSubject = 'Test Subject';
    component.blog.blogContent = 'Test Content';
    component.blog.authorName = 'Test Author';
    component.blog.blogCategory = 'Test Category';
    component.blog.date = '2022-01-01';

    component['resetForm']();

    const defaultBlog = new Blogmodel();
    expect(component.blog).toEqual(defaultBlog);
  });
  fit('blogComponent_should render header in HTML', () => {
    fixture.detectChanges(); // Trigger change detection
  
    // Check the presence of the header
    const headerElement = fixture.nativeElement.querySelector('h2');
    expect(headerElement).toBeTruthy();
    expect(headerElement.textContent).toContain('Add New Blog');
  });

  fit('blogComponent_should render form labels in HTML', () => {
    fixture.detectChanges(); 
  
    // Check the presence of form labels
    const labels = fixture.nativeElement.querySelectorAll('label');
    expect(labels.length).toBe(5); 
  
    const labelTitles = ['Blog Subject:', 'Blog Content:', 'Author Name:', 'Blog Category:', 'Date:'];
  
    labels.forEach((label, index) => {
      expect(label.textContent).toContain(labelTitles[index]);
    });
  });
    
});
