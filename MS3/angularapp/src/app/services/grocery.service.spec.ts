import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GroceryService } from './grocery.service';
import { Items } from '../models/items.model';

describe('GroceryService', () => {
  let service: GroceryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GroceryService],
    });

    service = TestBed.inject(GroceryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('groceryService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  it('groceryService_should_have_getGroceryItems_method', () => {
    expect(service.getGroceryItems).toBeDefined();
  });

  it('groceryService_should_have_addGroceryItem_method', () => {
    expect(service.addGroceryItem).toBeDefined();
  });

  it('groceryService_should_have_getShoppingCartItems_method', () => {
    expect(service.getShoppingCartItems).toBeDefined();
  });

  it('groceryService_should_call_getShoppingCartItems_method_and_return_data', (done) => {
    const mockCartItems: any[] = [
      { itemName: 'Cart Item 1', price: 10.99 },
      { itemName: 'Cart Item 2', price: 15.99 },
    ];

    service.getShoppingCartItems().subscribe(items => {
      expect(items).toEqual(mockCartItems);
      done();
    });

    // No HTTP request is expected for getShoppingCartItems
  });

  it('groceryService_should_have_addToCart_method', () => {
    expect(service.addToCart).toBeDefined();
  });

  it('groceryService_should_add_item_to_cart_and_update_subject_when_addToCart_is_called', () => {
    const sampleCartItem: any = { itemName: 'Sample Item', price: 20.99 };

    service.addToCart(sampleCartItem);

    service.getShoppingCartItems().subscribe(items => {
      expect(items.length).toBe(1);
      expect(items[0]).toEqual(sampleCartItem);
    });
  });

  it('groceryService_should_add_item_to_cart_and_emit_event_when_addToCart_is_called', (done) => {
    const sampleCartItem: any = { itemName: 'Sample Item', price: 20.99 };

    service.getShoppingCartItems().subscribe(items => {
      expect(items.length).toBe(0);  // Initial cart is empty
    });

    // Subscribe to the cartItemsSubject and expect it to emit the updated cart
    service['cartItemsSubject'].subscribe(items => {
      expect(items.length).toBe(1);
      expect(items[0]).toEqual(sampleCartItem);
      done();
    });

    service.addToCart(sampleCartItem);
  });

  it('groceryService_should_call_addGroceryItem_method_and_return_data', () => {
    const newItem: GroceryItem = { itemId: 3, itemName: 'New Item', itemDescription: 'New Description', price: 20.99, quantityAvailable: 20, category: 'New Category' };

    service.addGroceryItem(newItem).subscribe(item => {
      expect(item).toEqual(newItem);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('POST');

    req.flush(newItem);
  });

  it('groceryService_should_call_getGroceryItems_method_and_return_data', () => {
    const mockItems: GroceryItem[] = [
      { itemId: 1, itemName: 'Item 1', itemDescription: 'Description 1', price: 10.99, quantityAvailable: 50, category: 'Category 1' },
      { itemId: 2, itemName: 'Item 2', itemDescription: 'Description 2', price: 15.99, quantityAvailable: 30, category: 'Category 2' },
    ];

    service.getGroceryItems().subscribe(items => {
      expect(items).toEqual(mockItems);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('GET');

    req.flush(mockItems);
  });
});
