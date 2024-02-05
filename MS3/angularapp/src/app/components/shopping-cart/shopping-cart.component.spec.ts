import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';
import { of } from 'rxjs';


describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('shopping-cartComponent_should_be_created', () => {
    expect(component).toBeTruthy();
  });

  fit('shopping-cartComponent_should_load_shopping_cart_items_on_initialization', () => {
    spyOn(component['shoppingCartService'], 'getShoppingCartItems').and.returnValue(
      of([{ itemName: 'Test Item 1', price: 10 }, { itemName: 'Test Item 2', price: 20 }])
    );

    component.ngOnInit();
    expect(component.cartItems.length).toBe(2);
    expect(component.totalAmount).toBe(30);
  });

  fit('shopping-cartComponent_should_update_quantity_and_total_amount_on_item_addition', () => {
    const mockCartItem = { itemName: 'Test Item', price: 15 };
    component.cartItems = [mockCartItem];

    component.cartItems.push(mockCartItem);
    component.calculateTotalAmount();

    expect(component.cartItems.length).toBe(2);
    expect(component.totalAmount).toBe(30);
  });

  fit('shopping-cartComponent_should_handle_empty_cart_gracefully', () => {
    spyOn(component['shoppingCartService'], 'getShoppingCartItems').and.returnValue(of([]));
    component.ngOnInit();

    expect(component.cartItems.length).toBe(0);
    expect(component.totalAmount).toBe(0);
  });

  fit('shopping-cartComponent_should_calculate_total_amount_correctly', () => {
    component.cartItems = [
      { itemName: 'Test Item 1', price: 10 },
      { itemName: 'Test Item 2', price: 20 },
      { itemName: 'Test Item 3', price: 15 },
    ];

    component.calculateTotalAmount();

    expect(component.totalAmount).toBe(45);
  });

  fit('shopping-cartComponent_should_gracefully_handle_errors_during_data_fetching', () => {
    spyOn(component['shoppingCartService'], 'getShoppingCartItems').and.throwError('Service error');
  
    try {
      component.ngOnInit();
    } catch (error) {
    }
  
    expect(component.cartItems.length).toBe(0);
    expect(component.totalAmount).toBe(0);
  });
  fit('shopping-cartComponent_should_display_total_amount_in_html', () => {
    component.cartItems = [
      { itemName: 'Test Item 1', price: 10 },
      { itemName: 'Test Item 2', price: 20 },
    ];
  
    component.calculateTotalAmount();
  
    fixture.detectChanges();
  
    const compiled = fixture.nativeElement;
  
    const totalAmountElement = compiled.querySelector('.total-amount');
    expect(totalAmountElement).toBeTruthy();
  
    const totalAmountText = totalAmountElement.textContent.trim();
    expect(totalAmountText).toEqual('Total Amount: $30'); 
  });
    
});
