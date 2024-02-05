import { GroceryItem } from './grocery-item.model';

describe('GroceryItem', () => {
  fit('GroceryItem_should_update_property_values_using_setters', () => {
    const groceryItem = new GroceryItem();

    groceryItem.itemId = 1;
    groceryItem.itemName = 'New Item';
    groceryItem.itemDescription = 'New Description';
    groceryItem.price = 10.99;
    groceryItem.quantityAvailable = 100;
    groceryItem.category = 'New Category';

    expect(groceryItem.itemId).toEqual(1);
    expect(groceryItem.itemName).toEqual('New Item');
    expect(groceryItem.itemDescription).toEqual('New Description');
    expect(groceryItem.price).toEqual(10.99);
    expect(groceryItem.quantityAvailable).toEqual(100);
    expect(groceryItem.category).toEqual('New Category');
  });
});
