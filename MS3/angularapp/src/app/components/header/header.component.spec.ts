import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('headerComponent_should_create_the_app', () => {
    expect(component).toBeTruthy();
  });

  fit('headerComponent_should_contain_an_h1_element_with_Online_Grocery_Store', () => {
    const h1Element: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toContain('Online Grocery Store');
  });

  fit('headerComponent_should_contain_a_navigation_menu_with_two_items', () => {
    const navElement: HTMLElement = fixture.nativeElement.querySelector('nav');
    expect(navElement).toBeTruthy();

    const navItems: NodeListOf<HTMLLIElement> = navElement.querySelectorAll('li');
    expect(navItems.length).toBe(2);

    const expectedLinks = ['/item-catalog', '/add-new-item'];
    navItems.forEach((item, index) => {
      const link: HTMLAnchorElement = item.querySelector('a');
      expect(link).toBeTruthy();
      expect(link.getAttribute('routerLink')).toBe(expectedLinks[index]);
    });
  });

//   fit('headerComponent_should call navigateTo method when a navigation link is clicked', () => {
//     spyOn(component, 'navigateTo');
    
//     const navItems: NodeListOf<HTMLLIElement> = fixture.nativeElement.querySelectorAll('li');
  
//     // Simulate a click on the first navigation item
//     const firstNavItemLink: HTMLAnchorElement = navItems[0].querySelector('a');
//     firstNavItemLink.click();
  
//     // Ensure the navigateTo method is called after a delay (for example, due to Angular's asynchronous behavior)
//     fixture.whenStable().then(() => {
//       // Check if the navigateTo method was called with the correct route
//       expect(component.navigateTo).toHaveBeenCalledWith('/item-catalog');
//     });
//   });
  
});
