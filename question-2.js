function findProductPrice(products, name) {
  let midIndex;
  let leftIndex = 0;
  let rightIndex = products.length - 1;
  while (leftIndex <= rightIndex) {
    midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (products[midIndex].name === name) {
      return products[midIndex].price;
    } else if (products[midIndex].name < name) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
