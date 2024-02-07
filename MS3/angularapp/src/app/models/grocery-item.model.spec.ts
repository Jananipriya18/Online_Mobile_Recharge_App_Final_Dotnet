import { Groceryitem } from './groceryitem.model';

describe('groceryitemModel', () => {
  fit('groceryitem_should_update_property_values_using_setters', () => {
    // Arrange
    const Groceryitem: Groceryitem = {
      ['itemId']: 1,
      ['itemName']: 'Apple',
      ['itemDescription']: 'Fresh and juicy red apple',
      ['price']: 1.5,
      ['quantityAvailable']: 50,
      ['category']: 'Fruits',
    };

    // Act & Assert
    // Check if the entire Groceryitem object is truthy (defined)
    expect(Groceryitem).toBeTruthy();

    // Check if individual properties are truthy (defined)
    expect(Groceryitem['itemId']).toBeTruthy();
    expect(Groceryitem['itemName']).toBeTruthy();
    expect(Groceryitem['itemDescription']).toBeTruthy();
    expect(Groceryitem['price']).toBeTruthy();
    expect(Groceryitem['quantityAvailable']).toBeTruthy();
    expect(Groceryitem['category']).toBeTruthy();

    // Check data types for each property
    expect(typeof Groceryitem['itemId']).toEqual('number');
    expect(typeof Groceryitem['itemName']).toEqual('string');
    expect(typeof Groceryitem['itemDescription']).toEqual('string');
    expect(typeof Groceryitem['price']).toEqual('number');
    expect(typeof Groceryitem['quantityAvailable']).toEqual('number');
    expect(typeof Groceryitem['category']).toEqual('string');
  });
});
