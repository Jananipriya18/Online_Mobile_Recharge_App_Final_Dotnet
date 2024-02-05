import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private cartItems: any[] = [];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getShoppingCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.cartItemsSubject.next([...this.cartItems]);
  }
}
