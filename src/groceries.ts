// Step 1:
// Write a createGroceries function that returns an array with 6 groceries items (each item is a string)
function createGroceries(): string[] {
  // write your code here...
  const groceriesItems: string[] = [
    "Orange",
    "Apple",
    "Banana",
    "Chips",
    "Candy",
    "Chocolate",
  ];
  return groceriesItems; // replace empty array with what you see is fit
}
console.log(createGroceries());
// Step 2:
// Write a getSecondGroceryItem function that returns the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries: string[]): string {
  // write your code here...

  return groceries[1]; // replace empty string with what you see is fit
}
console.log(getSecondGroceryItem(createGroceries()));

// Step 3:
// Write a getGroceriesCount that returns the length of the `groceries` argument
function getGroceriesCount(groceries: string[]): number {
  // write your code here...

  return groceries.length; // replace zero with what you see is fit
}
console.log(getGroceriesCount(createGroceries()));
// Step 4:
// Write a getLastGroceryItem function that returns the last grocery item from `groceries` argument
function getLastGroceryItem(groceries: string[]): string {
  // write your code here...

  return groceries[groceries.length - 1]; // replace empty string with what you see is fit
}
console.log(getLastGroceryItem(createGroceries()));
// Step 5:
// Write a removeLastGroceryItem function that removes the last grocery item and return it
function removeLastGroceryItem(groceries: string[]): string {
  // write your code here...
  if (groceries.length === 0) {
    return "empty";
  }
  return groceries.pop()!; // replace empty string with what you see is fit
}
console.log(removeLastGroceryItem(createGroceries()));
// Step 6:
// Write a addNewGroceries function that adds two new and different grocery items to the end of the groceries argument
// and returns the modified array
function addNewGroceries(
  groceries: string[],
  itemOne: string,
  itemTwo: string
): string[] {
  // write your code here...
  groceries.push(itemOne);
  groceries.push(itemTwo);
  return groceries; // replace empty array with what you see is fit
}
console.log(addNewGroceries(createGroceries(), "Milk", "Laban"));
// Step 7:
// Write a getFirstThreeGroceryItems function that returns a new array that contains the first three grocery items
function getFirstThreeGroceryItems(groceries: string[]): string[] {
  // write your code here...
  const newG: string[] = [groceries[0], groceries[1], groceries[2]];
  return newG; // replace empty array with what you see is fit
}
console.log(getFirstThreeGroceryItems(createGroceries()));
export {
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
};
