import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../models/items.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private apiUrl = 'https://8080-fcebdccccdbcfacbdcbaeadbebabcdebdca.premiumproject.examly.io/api/GroceryItem'; 
  private cartItems: Items[] = [];
  private cartItemsSubject: BehaviorSubject<Items[]> = new BehaviorSubject<Items[]>([]);

  constructor(private http: HttpClient) {}

  // Get all grocery items
  getGroceryItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.apiUrl);
  }

  // Add a new grocery item
  addGroceryItem(groceryItem: Items): Observable<Items> {
    return this.http.post<Items>(this.apiUrl, groceryItem);
  }

}
