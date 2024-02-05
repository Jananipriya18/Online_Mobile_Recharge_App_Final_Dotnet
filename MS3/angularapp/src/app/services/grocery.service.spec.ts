import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GroceryService } from './grocery.service';
import { GroceryItem } from '../models/grocery-item.model';

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
    expect(service.getGroceryItems).toBeDefined();
  });

  fit('groceryService_should_have_addGroceryItem_method', () => {
    expect(service.addGroceryItem).toBeDefined();
  });

  fit('groceryService_should_call_getGroceryItems_method_and_return_data', () => {
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

  fit('groceryService_should_call_addGroceryItem_method_and_return_data', () => {
    const newItem: GroceryItem = { itemId: 3, itemName: 'New Item', itemDescription: 'New Description', price: 20.99, quantityAvailable: 20, category: 'New Category' };

    service.addGroceryItem(newItem).subscribe(item => {
      expect(item).toEqual(newItem);
    });

    const req = httpTestingController.expectOne(service['apiUrl']); 
    expect(req.request.method).toEqual('POST');

    req.flush(newItem);
  });
});
