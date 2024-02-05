import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
  newItemForm: FormGroup;
  newlyAddedItem: any; 

  constructor(private fb: FormBuilder, private groceryService: GroceryService) {
    this.newItemForm = this.fb.group({
      itemName: ['', Validators.required],
      itemDescription: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      quantityAvailable: [null, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  addItem(): void {
    if (this.newItemForm.valid) {
      const newItem = this.newItemForm.value;
      this.groceryService.addGroceryItem(newItem).subscribe(
        (response) => {
          console.log('Item added successfully:', response);
          this.newlyAddedItem = newItem;
          this.newItemForm.reset();
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
}
