// @ts-check

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
const breakLine = () => console.log("\n**************************\n");

/*---------- Question 1 ----------*/
products.forEach(({ product }) => console.log(product));
breakLine();

/*---------- Question 2 ----------*/
console.log(products.filter(({ product }) => product.length > 5));
breakLine();

/*---------- Question 3 ----------*/
const newProductsArray = products
  .filter(({ price }) => price.toString().trim())
  .map((item) => {
    return {
      ...item,
      price: parseInt(item.price),
    };
  });
const priceSumHandler = (acc, current) => (acc += current.price);
console.log(newProductsArray.reduce(priceSumHandler, 0));
breakLine();

/*---------- Question 4 ----------*/
const concatanateStringHandler = (acc, { product }, index) => {
  if (index === 0) return acc;
  return (acc += `, ${product}`);
};
console.log(products.reduce(concatanateStringHandler, products[0].product));
breakLine();

/*---------- Question 5 ----------*/
const pricesAsIntegerArray = newProductsArray.map(({ price }) => price);
const highest = Math.max(...pricesAsIntegerArray);
const lowest = Math.min(...pricesAsIntegerArray);
const highAndLowHandler = (acc, current) => {
  if (current.price === highest) acc["Highest"] = current.product;
  if (current.price === lowest) acc["Lowest"] = current.product;
  return acc;
};
const result = newProductsArray.reduce(highAndLowHandler, {});
console.log(`Highest: '${result.Highest}'. Lowest: '${result.Lowest}'`);
breakLine();

/*---------- Question 6 ----------*/
const myCustomHandler1 = (acc, current) => {
  if (current[0] === "product") acc["name"] = current[1];
  if (current[0] === "price") acc["cost"] = current[1];
  return acc;
};
const getNewProduct = (product) =>
  Object.entries(product).reduce(myCustomHandler1, {});

const myCustomHandler2 = (acc, current) => {
  return [...acc, getNewProduct(current)];
};
const newProductsWithNameAndCost = products.reduce(myCustomHandler2, []);
console.log(newProductsWithNameAndCost);
