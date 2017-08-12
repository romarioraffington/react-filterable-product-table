import faker from 'faker';

export const generateProduct = () => ({
  category: faker.lorem.word(), 
  price: faker.commerce.price(),
  stocked: faker.random.boolean(), 
  name: faker.commerce.productName(),
});

export const generateProductList = (count = 4) => {
  const products = [];
  for (let i = 0; i < count; i++) {
    products.push(generateProduct());
  }
  return products;
}