import { ComponentFixture, TestBed, async } from '@angular/core/testing';
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

  fit('should create ItemCatalogComponent', async(() => {
    expect(component).toBeTruthy();
  }));
});
