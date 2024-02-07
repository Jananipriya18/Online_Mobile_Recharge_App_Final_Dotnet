import { Component, OnInit } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-item-catalog',
  templateUrl: './item-catalog.component.html',
  styleUrls: ['./item-catalog.component.css']
})
export class ItemCatalogComponent implements OnInit {
  catalog: any[] = [];
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private groceryService: GroceryService) {}

  ngOnInit(): void {
    this.loadItemCatalog();
    this.loadShoppingCart();
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
    // Add the item to the grocery service's cart
    this.groceryService.addToCart(item);
    console.log('Added to cart:', item);
  }

  loadShoppingCart(): void {
    if (this.groceryService.getShoppingCartItems()) {
      this.groceryService.getShoppingCartItems().subscribe(
        (items: any[]) => {
          this.cartItems = items;
          this.calculateTotalAmount();
        },
        (error) => {
          console.error('Error fetching shopping cart items:', error);
        }
      );
    }
  }
  
  

  calculateTotalAmount(): void {
    const total = this.cartItems.reduce((total, item) => total + item.price, 0);
    this.totalAmount = parseFloat(total.toFixed(3));
  }
}
