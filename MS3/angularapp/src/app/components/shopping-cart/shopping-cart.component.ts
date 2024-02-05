import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.loadShoppingCart();
  }

  loadShoppingCart(): void {
    this.shoppingCartService.getShoppingCartItems().subscribe(
      (items: any[]) => {
        this.cartItems = items;
        this.calculateTotalAmount();
      },
      (error) => {
        console.error('Error fetching shopping cart items:', error);
      }
    );
  }

  calculateTotalAmount(): void {
    const total = this.cartItems.reduce((total, item) => total + item.price, 0);
    this.totalAmount = parseFloat(total.toFixed(3));
  }  
}
