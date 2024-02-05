import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { BlogService } from '../service/blog.service';
import { of } from 'rxjs';
import { Blogmodel } from '../model/blog.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let blogService: BlogService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule],
      providers: [BlogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    blogService = TestBed.inject(BlogService);
    fixture.detectChanges();
  });

  fit('dashboardComponent_should create', () => {
    expect(component).toBeTruthy();
  });

  fit('dashboardComponent_should fetch and display blogs on initialization', () => {
    const mockBlogs: Blogmodel[] = [
      {
        blogSubject: 'Test Subject 1',
        blogContent: 'Test Content 1',
        authorName: 'Test Author 1',
        blogCategory: 'Test Category 1',
        date: '2022-01-01'
      },
      {
        blogSubject: 'Test Subject 2',
        blogContent: 'Test Content 2',
        authorName: 'Test Author 2',
        blogCategory: 'Test Category 2',
        date: '2022-01-02'
      }
    ];
  
    spyOn(blogService, 'getBlogs').and.returnValue(of(mockBlogs));
  
    component.ngOnInit();
  
    expect(blogService.getBlogs).toHaveBeenCalled();
    expect(component.blogs).toEqual(mockBlogs);
  });

  fit('dashboardComponent_should render header with correct text', () => {
    const header = fixture.nativeElement.querySelector('.dashboard-header');
    expect(header).toBeTruthy();
    expect(header.textContent).toContain('View Blogs');
  }); 

  // ...

fit('dashboardComponent_should render blog cards in HTML', () => {
    const mockBlogs: Blogmodel[] = [
      {
        blogSubject: 'Test Subject 1',
        blogContent: 'Test Content 1',
        authorName: 'Test Author 1',
        blogCategory: 'Test Category 1',
        date: '2022-01-01'
      },
      {
        blogSubject: 'Test Subject 2',
        blogContent: 'Test Content 2',
        authorName: 'Test Author 2',
        blogCategory: 'Test Category 2',
        date: '2022-01-02'
      }
    ];
  
    spyOn(blogService, 'getBlogs').and.returnValue(of(mockBlogs));
  
    component.ngOnInit();
  
    fixture.detectChanges(); // Trigger change detection
  
    // Check the presence of blog cards in the HTML
    const blogCards = fixture.nativeElement.querySelectorAll('.blog-card');
    expect(blogCards.length).toBe(mockBlogs.length);
  });
  
});
