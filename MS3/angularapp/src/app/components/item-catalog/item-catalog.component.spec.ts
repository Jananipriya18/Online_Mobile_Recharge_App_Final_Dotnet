import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ItemCatalogComponent } from './item-catalog.component';
import { GroceryService } from '../../services/grocery.service';
import { Items } from '../../models/items.model';
import { of } from 'rxjs';

describe('ItemCatalogComponent', () => {
  let component: ItemCatalogComponent;
  let fixture: ComponentFixture<ItemCatalogComponent>;
  let groceryServiceSpy: jasmine.SpyObj<GroceryService>;

  beforeEach(() => {
    groceryServiceSpy = jasmine.createSpyObj('GroceryService', ['getGroceryItems', 'addToCart', 'getShoppingCartItems']);
    TestBed.configureTestingModule({
      declarations: [ItemCatalogComponent],
      providers: [
        { provide: GroceryService, useValue: groceryServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(ItemCatalogComponent);
    component = fixture.componentInstance;
  });

  fit('should create ItemCatalogComponent', () => {
    expect(component).toBeTruthy();
  });

  fit('should load item catalog on init and display properties in HTML', fakeAsync(() => {
    const items: Items[] = [
      { itemId: 4, itemName: 'Item 1', itemDescription: 'Description 1', price: 10, quantityAvailable: 5, category: 'Category 1' },
      { itemId: 5, itemName: 'Item 2', itemDescription: 'Description 2', price: 15, quantityAvailable: 8, category: 'Category 2' }
    ];

    groceryServiceSpy.getGroceryItems.and.returnValue(of(items));

    fixture.detectChanges();
    
    tick(); // Wait for asynchronous operations to complete

    expect(groceryServiceSpy.getGroceryItems).toHaveBeenCalled();
    expect(component.catalog).toEqual(items);

    const itemRows = fixture.nativeElement.querySelectorAll('.item-row');
    expect(itemRows.length).toBe(items.length);

    itemRows.forEach((itemRow, index) => {
      const item = items[index];
      expect(itemRow.querySelector('td').textContent).toContain(item.itemName);
      expect(itemRow.querySelectorAll('td')[1].textContent).toContain(item.itemDescription);
      expect(itemRow.querySelectorAll('td')[2].textContent).toContain(`$${item.price}`);
      expect(itemRow.querySelectorAll('td')[3].textContent).toContain(item.quantityAvailable);
      expect(itemRow.querySelectorAll('td')[4].textContent).toContain(item.category);
    });
  }));

  fit('should add item to cart when addToCart is called', () => {
    const sampleItem: Items = { itemId: 3, itemName: 'Sample Item', itemDescription: 'Sample Description', price: 20, quantityAvailable: 3, category: 'Sample Category' };
    component.addToCart(sampleItem);

    expect(groceryServiceSpy.addToCart).toHaveBeenCalledWith(sampleItem);
  });
});
