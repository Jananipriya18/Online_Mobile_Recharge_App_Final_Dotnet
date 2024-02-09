import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('headerComponent_should_be_created', () => {
    expect(component).toBeTruthy();
  });

  fit('headerComponent_should_have_a_navbar_with_a_routerLink', () => {
    const navLink = fixture.nativeElement.querySelector('.navbar-brand');
    expect(navLink).toBeTruthy();
    expect(navLink.getAttribute('routerLink')).toEqual('/');
  });

  fit('headerComponent_should_have_anchor_tags_with_routerLink_for_navigation', () => {
    const anchorTags = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(anchorTags.length).toBe(2);
    expect(anchorTags[0].getAttribute('routerLink')).toEqual('/addNewBlog');
    expect(anchorTags[1].getAttribute('routerLink')).toEqual('/viewBlogs');
  });

  fit('headerComponent_should_have_correct_text_in_navbar_brand', () => {
    const navbarBrand = fixture.nativeElement.querySelector('.navbar-brand');
    expect(navbarBrand.textContent.trim()).toEqual('Blog Application');
  });

  fit('headerComponent_should_have_correct_text_in_nav_links', () => {
    const navLinks = fixture.nativeElement.querySelectorAll('.nav-link');
    expect(navLinks.length).toBe(2);
    expect(navLinks[0].textContent.trim()).toEqual('Add New Blog');
    expect(navLinks[1].textContent.trim()).toEqual('View Blogs');
  });
});

