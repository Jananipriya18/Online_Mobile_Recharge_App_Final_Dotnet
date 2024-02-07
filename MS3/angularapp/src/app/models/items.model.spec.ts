import { Items } from './items.model';

describe('ItemsModel', () => {
  fit('Items_should_update_property_values_using_setters', () => {
    // Arrange
    const item: Items = new Items();
    item['itemId'] = 1;
    item['itemName'] = 'Apple';
    item['itemDescription'] = 'Fresh and juicy red apple';
    item['price'] = 1.5;
    item['quantityAvailable'] = 50;
    item['category'] = 'Fruits';

    // Act & Assert
    // Check if the entire item object is truthy (defined)
    expect(item).toBeTruthy();

    // Check if individual properties are truthy (defined)
    expect(item['itemId']).toBeTruthy();
    expect(item['itemName']).toBeTruthy();
    expect(item['itemDescription']).toBeTruthy();
    expect(item['price']).toBeTruthy();
    expect(item['quantityAvailable']).toBeTruthy();
    expect(item['category']).toBeTruthy();

    // Check data types for each property
    expect(typeof item['itemId']).toEqual('number');
    expect(typeof item['itemName']).toEqual('string');
    expect(typeof item['itemDescription']).toEqual('string');
    expect(typeof item['price']).toEqual('number');
    expect(typeof item['quantityAvailable']).toEqual('number');
    expect(typeof item['category']).toEqual('string');
  });
});
