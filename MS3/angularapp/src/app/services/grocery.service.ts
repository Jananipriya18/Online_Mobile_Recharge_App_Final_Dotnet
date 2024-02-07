import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroceryItem } from '../models/grocery-item.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private apiUrl = 'https://8080-fcebdccccdbcfacbdcbaeadbebabcdebdca.premiumproject.examly.io/api/GroceryItem'; 
  constructor(private http: HttpClient) {}
  private cartItems: any[] = [];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  // Get all grocery items
  getGroceryItems(): Observable<GroceryItem[]> {
    return this.http.get<GroceryItem[]>(this.apiUrl);
  }

  // Add a new grocery item
  addGroceryItem(groceryItem: GroceryItem): Observable<GroceryItem> {
    return this.http.post<GroceryItem>(this.apiUrl, groceryItem);
  }
  getShoppingCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.cartItemsSubject.next([...this.cartItems]);
  }

}
