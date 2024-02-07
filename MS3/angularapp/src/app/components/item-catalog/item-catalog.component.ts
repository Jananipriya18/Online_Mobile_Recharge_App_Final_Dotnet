import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.css']
})
export class ItemCatalogComponent implements OnInit {
  catalog: any[] = [];
  // cartItems: any[] = [];
  // totalAmount: number = 0;

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.loadItemCatalog();
    // this.loadShoppingCart();
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
}
