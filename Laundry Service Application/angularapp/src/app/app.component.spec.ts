import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should render a table with specific columns', () => {
    const tableElement = fixture.debugElement.query(By.css('app-navbar'));
    expect(tableElement).toBeTruthy();
  });
});
