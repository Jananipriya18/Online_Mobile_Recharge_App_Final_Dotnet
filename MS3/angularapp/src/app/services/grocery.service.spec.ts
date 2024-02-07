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

  fit('groceryService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('groceryService_should_have_getGroceryItems_method', () => {
    expect(service['getGroceryItems']).toBeDefined();
  });

  fit('groceryService_should_have_addGroceryItem_method', () => {
    expect(service['addGroceryItem']).toBeDefined();
  });


  // fit('groceryService_should_call_getShoppingCartItems_method_and_return_data', (done) => {
  //   const mockCartItems: any[] = [
  //     { itemName: 'Cart Item 1', price: 10.99 },
  //     { itemName: 'Cart Item 2', price: 15.99 },
  //   ];

  //   service.getShoppingCartItems().subscribe(items => {
  //     expect(items).toEqual(mockCartItems);
  //     done();
  //   });

  //   // No HTTP request is expected for getShoppingCartItems
  // });


  // fit('groceryService_should_add_item_to_cart_and_emit_event_when_addToCart_is_called', (done) => {
  //   const sampleCartItem: any = { itemName: 'Sample Item', price: 20.99 };

  //   service.getShoppingCartItems().subscribe(items => {
  //     expect(items.length).toBe(0);  // Initial cart is empty
  //   });

  //   // Subscribe to the cartItemsSubject and expect it to emit the updated cart
  //   service['cartItemsSubject'].subscribe(items => {
  //     expect(items.length).toBe(1);
  //     expect(items[0]).toEqual(sampleCartItem);
  //     done();
  //   });

  //   service.addToCart(sampleCartItem);
  // });

  fit('groceryService_should_call_addGroceryItem_method_and_return_data', () => {
    const newItem: Items = { ['itemId']: 3, ['itemName']: 'New Item', ['itemDescription']: 'New Description', ['price']: 20.99, ['quantityAvailable']: 20, ['category']: 'New Category' };

    service['addGroceryItem'](newItem).subscribe(item => {
      expect(item).toEqual(newItem);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('POST');

    req.flush(newItem);
  });

  fit('groceryService_should_call_getGroceryItems_method_and_return_data', () => {
    const mockItems: Items[] = [
      { ['itemId']: 1, ['itemName']: 'Item 1', ['itemDescription']: 'Description 1', ['price']: 10.99, ['quantityAvailable']: 50, ['category']: 'Category 1' },
      { ['itemId']: 2, ['itemName']: 'Item 2', ['itemDescription']: 'Description 2', ['price']: 15.99, ['quantityAvailable']: 30, ['category']: 'Category 2' },
    ];

    service['getGroceryItems']().subscribe(items => {
      expect(items).toEqual(mockItems);
    });

    const req = httpTestingController.expectOne(service['apiUrl']);
    expect(req.request.method).toEqual('GET');

    req.flush(mockItems);
  });
});
