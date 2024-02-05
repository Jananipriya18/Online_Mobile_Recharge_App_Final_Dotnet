import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  fit('should create the app', () => {
    expect(app).toBeTruthy();
  });

//   fit('should contain app-header component', () => {
//     const headerElement = fixture.nativeElement.querySelector('app-header');
//     expect(headerElement).toBeTruthy();
//   });

//   fit('should contain router-outlet', () => {
//     const routerOutletElement = fixture.nativeElement.querySelector('router-outlet');
//     expect(routerOutletElement).toBeTruthy();
  // });
});
