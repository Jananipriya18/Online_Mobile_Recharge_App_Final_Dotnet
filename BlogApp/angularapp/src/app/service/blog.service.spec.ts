import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogService } from './blog.service';
import { Blogmodel } from '../model/blog.model';

describe('BlogService', () => {
  let service: BlogService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService]
    });

    service = TestBed.inject(BlogService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  fit('blogService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('blogService_should_add_a_blog', () => {
    const blogToAdd: Blogmodel = {
      blogSubject: 'Test Subject',
      blogContent: 'Test Content',
      authorName: 'Test Author',
      blogCategory: 'Test Category',
      date: '2022-01-01'
    };

    service.addBlog(blogToAdd).subscribe((addedBlog: Blogmodel) => {
      expect(addedBlog).toEqual(blogToAdd);
    });

    const req = httpTestingController.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('POST');
    req.flush(blogToAdd);
  });

  fit('blogService_should_get_blogs', () => {
    const mockBlogs: Blogmodel[] = [
      {
        blogSubject: 'Subject 1',
        blogContent: 'Content 1',
        authorName: 'Author 1',
        blogCategory: 'Category 1',
        date: '2022-01-01'
      },
      {
        blogSubject: 'Subject 2',
        blogContent: 'Content 2',
        authorName: 'Author 2',
        blogCategory: 'Category 2',
        date: '2022-01-02'
      }
    ];

    service.getBlogs().subscribe((blogs: Blogmodel[]) => {
      expect(blogs).toEqual(mockBlogs);
    });

    const req = httpTestingController.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockBlogs);
  });
});
