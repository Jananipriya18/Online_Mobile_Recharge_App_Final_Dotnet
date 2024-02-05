import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCatalogComponent } from './item-catalog.component';
import { GroceryService } from '../../services/grocery.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { GroceryItem } from '../../models/grocery-item.model';
import { of } from 'rxjs';

describe('ItemCatalogComponent', () => {
  let component: ItemCatalogComponent;
  let fixture: ComponentFixture<ItemCatalogComponent>;
  let groceryServiceSpy: jasmine.SpyObj<GroceryService>;
  let shoppingCartServiceSpy: jasmine.SpyObj<ShoppingCartService>;

  beforeEach(() => {
    groceryServiceSpy = jasmine.createSpyObj('GroceryService', ['getGroceryItems']);
    shoppingCartServiceSpy = jasmine.createSpyObj('ShoppingCartService', ['addToCart']);

    TestBed.configureTestingModule({
      declarations: [ItemCatalogComponent],
      providers: [
        { provide: GroceryService, useValue: groceryServiceSpy },
        { provide: ShoppingCartService, useValue: shoppingCartServiceSpy }
      ],
    });

    fixture = TestBed.createComponent(ItemCatalogComponent);
    component = fixture.componentInstance;
  });

  fit('item-catalogComponent_should_create', () => {
    expect(component).toBeTruthy();
  });

//   fit('item-catalogComponent_should_load_item_catalog_on_init_and_display_properties_in_HTML', () => {
//     const items: GroceryItem[] = [
//       { itemId: 4, itemName: 'Item 1', itemDescription: 'Description 1', price: 10, quantityAvailable: 5, category: 'Category 1' },
//       { itemId: 5, itemName: 'Item 2', itemDescription: 'Description 2', price: 15, quantityAvailable: 8, category: 'Category 2' }
//     ];

//     groceryServiceSpy.getGroceryItems.and.returnValue(of(items));

//     fixture.detectChanges();

//     expect(groceryServiceSpy.getGroceryItems).toHaveBeenCalled();
//     expect(component.catalog).toEqual(items);

//     const itemCards = fixture.nativeElement.querySelectorAll('.item-card');
//     expect(itemCards.length).toBe(items.length);

//     itemCards.forEach((itemCard, index) => {
//       const item = items[index];
//       expect(itemCard.querySelector('h3').textContent).toContain(item.itemName);
//       expect(itemCard.querySelector('p.item-description').textContent).toContain(item.itemDescription);
//       expect(itemCard.querySelector('p.price').textContent).toContain(`Price: $${item.price}`);
//       expect(itemCard.querySelector('p.quantity-available').textContent).toContain(`Quantity Available: ${item.quantityAvailable}`);
//       expect(itemCard.querySelector('p.category').textContent).toContain(`Category: ${item.category}`);
//     });
//   });

  fit('item-catalogComponent_should_add_item_to_cart_when_addToCart_is_called', () => {
    const sampleItem: GroceryItem = { itemId: 3, itemName: 'Sample Item', itemDescription: 'Sample Description', price: 20, quantityAvailable: 3, category: 'Sample Category' };
    component.addToCart(sampleItem);

    expect(shoppingCartServiceSpy.addToCart).toHaveBeenCalledWith(sampleItem);
  });
});
