import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.css']
})
export class ItemCatalogComponent implements OnInit {
  catalog: any[] = [];

  constructor(private groceryService: GroceryService, private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.loadItemCatalog();
  }

  loadItemCatalog(): void {
    this.groceryService.getGroceryItems().subscribe(
      (items: any[]) => {
        this.catalog = items;
      },
      (error) => {
        console.error('Error fetching item catalog:', error);
      }
    );
  }

  addToCart(item: any): void {
    // Add the item to the shopping cart service
    this.shoppingCartService.addToCart(item);
    console.log('Added to cart:', item);
  }
}
