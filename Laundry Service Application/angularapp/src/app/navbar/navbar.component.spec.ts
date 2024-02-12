import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    });

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  fit('should render two navigation links', () => {
    const linkElements = fixture.debugElement.queryAll(By.css('#nav-link'));
    expect(linkElements.length).toBe(2);
  });

  fit('should have a link to "Schedule Form"', () => {
    const linkElement = fixture.debugElement.query(By.css('[routerLink="/schedule-form"]'));
    expect(linkElement['nativeElement'].textContent).toContain('Schedule Form');
  });

  fit('should have a link to "Schedule Details"', () => {
    const linkElement = fixture.debugElement.query(By.css('[routerLink="/schedule-details"]'));
    expect(linkElement['nativeElement'].textContent).toContain('Schedule Details');
  });
});
