import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AddNewItemComponent } from './add-new-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AddNewItemComponent', () => {
  let component: AddNewItemComponent;
  let fixture: ComponentFixture<AddNewItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewItemComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('add-new-itemComponent_should_be_created', () => {
    expect(component).toBeTruthy();
  });

  fit('add-new-itemComponent_should_contain_all_properties_in_the_form', () => {
    const itemNameInput = fixture.nativeElement.querySelector('#itemName');
    const itemDescriptionInput = fixture.nativeElement.querySelector('#itemDescription');
    const priceInput = fixture.nativeElement.querySelector('#price');
    const quantityAvailableInput = fixture.nativeElement.querySelector('#quantityAvailable');
    const categoryInput = fixture.nativeElement.querySelector('#category');
    const submitButton = fixture.nativeElement.querySelector('button');

    expect(itemNameInput).toBeTruthy();
    expect(itemDescriptionInput).toBeTruthy();
    expect(priceInput).toBeTruthy();
    expect(quantityAvailableInput).toBeTruthy();
    expect(categoryInput).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });

  // fit('add-new-itemComponent_should_display_required_error_messages', () => {
  //   component.newItemForm.controls['itemName'].markAsTouched();
  //   component.newItemForm.controls['itemDescription'].markAsTouched();
  //   component.newItemForm.controls['price'].markAsTouched();
  //   component.newItemForm.controls['quantityAvailable'].markAsTouched();
  //   component.newItemForm.controls['category'].markAsTouched();

  //   fixture.detectChanges();

  //   const errorMessageElements = fixture.nativeElement.querySelectorAll('.error-message');

  //   expect(errorMessageElements.length).toBe(5);

  //   const expectedMessages = [
  //     'Item Name is required.',
  //     'Item Description is required.',
  //     'Price is required.',
  //     'Quantity Available is required.',
  //     'Category is required.',
  //   ];

  //   errorMessageElements.forEach((element, index) => {
  //     expect(element.textContent.trim()).toBe(expectedMessages[index]);
  //   });
  // });

  // fit('add-new-itemComponent_should_display_min_error_messages_for_price_and_quantityAvailable', () => {
  //   component.newItemForm.controls['price'].setValue(-1);
  //   component.newItemForm.controls['quantityAvailable'].setValue(-1);

  //   component.newItemForm.controls['price'].markAsTouched();
  //   component.newItemForm.controls['quantityAvailable'].markAsTouched();

  //   fixture.detectChanges();

  //   const minErrorElements = fixture.nativeElement.querySelectorAll('.min-error-message');

  //   expect(minErrorElements.length).toBe(2);

  //   const expectedMessages = [
  //     'Price must be greater than or equal to 0.',
  //     'Quantity Available must be greater than or equal to 0.',
  //   ];

  //   minErrorElements.forEach((element, index) => {
  //     expect(element.textContent.trim()).toBe(expectedMessages[index]);
  //   });
  // });

  fit('add-new-itemComponent_should_disable_the_submit_button_when_the_form_is_invalid', () => {
    const submitButton = fixture.nativeElement.querySelector('button');
    expect(submitButton.disabled).toBeTruthy();

    component.newItemForm.setValue({
      ['itemName']: 'Test Item',
      ['itemDescription']: 'Test Description',
      ['price']: 10,
      ['quantityAvailable']: 5,
      ['category']: 'Test Category',
    });

    fixture.detectChanges();

    expect(submitButton.disabled).toBeFalsy();
  });
});
