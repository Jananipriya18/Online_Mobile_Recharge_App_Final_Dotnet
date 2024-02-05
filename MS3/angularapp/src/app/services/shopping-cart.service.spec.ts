import { TestBed } from '@angular/core/testing';
import { ShoppingCartService } from './shopping-cart.service';

describe('ShoppingCartService', () => {
  let service: ShoppingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingCartService],
    });

    service = TestBed.inject(ShoppingCartService);
  });

  fit('shoppingCartService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('shoppingCartService_should_have_getShoppingCartItems_method', () => {
    expect(service.getShoppingCartItems).toBeDefined();
  });

  fit('shoppingCartService_should_have_addToCart_method', () => {
    expect(service.addToCart).toBeDefined();
  });

  fit('shoppingCartService_should_call_getShoppingCartItems_method_and_return_observable', (done) => {
    service.getShoppingCartItems().subscribe((items) => {
      expect(items).toEqual([]);
      done();
    });
  });

  fit('shoppingCartService_should_call_addToCart_method_and_update_items', (done) => {
    const newItem = { itemName: 'New Item', price: 10.99 };

    service.addToCart(newItem);

    service.getShoppingCartItems().subscribe((items) => {
      expect(items.length).toBe(1);
      expect(items[0]).toEqual(newItem);
      done();
    });
  });
});
