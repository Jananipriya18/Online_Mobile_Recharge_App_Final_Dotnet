import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroceryService } from '../../services/grocery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
  newItemForm: FormGroup;
  newlyAddedItem: any; 

  constructor(
    private fb: FormBuilder, 
    private groceryService: GroceryService,
    private router: Router
  ) {
    this.newItemForm = this.fb.group({
      itemName: [''],
      itemDescription: [''],
      price: [null],
      quantityAvailable: [null],
      category: ['']
    });
  }

  addItem(): void {
    const newItem = this.newItemForm.value;
    this.groceryService.addGroceryItem(newItem).subscribe(
      (response) => {
        console.log('Item added successfully:', response);
        this.newlyAddedItem = newItem;
        this.newItemForm.reset();

        // Navigate to the 'item-catalog' page after adding the item
        this.router.navigate(['/item-catalog']);
      },
      (error) => {
        console.error('Error adding item:', error);
        console.log(error);

        if (error.error && error.error.errors) {
          console.log('Validation errors:', error.error.errors);
        }
      }
    );
  }  
}
