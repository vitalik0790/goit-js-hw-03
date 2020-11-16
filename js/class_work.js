'use strict';

const products = [
  {
    id: "1",
    name: "milk",
    value: "Молоко",
    price: 20,
    sale: true,
    quantity: 10,
  },
  {
    id: "2",
    name: "water",
    value: "Вода",
    price: 10,
    sale: false,
    quantity: 50,
  },
  {
    id: "3",
    name: "juice",
    value: "Сок",
    price: 34,
    sale: true,
    quantity: 24,
  },
  {
    id: "4",
    name: "fruitDrink",
    value: "Морс",
    price: 32,
    sale: true,
    quantity: 25,
  },
  {
    id: "5",
    name: "milkShake",
    value: "Молочный коктейль",
    price: 37,
    sale: false,
    quantity: 37,
  },
];

// 1. Создайте функцию getSaleProducts(), которая вернет новый массив со свойством sale равным true.
// 2. Создайте функцию getProductsName(), которая вернет новый массив со всеми названиями продуктов на русском языке.
// 3. Создайте функцию getTotalQuantity(), которая вернет общую сумму всех товаров на складе (свойство quantity).
// 4. Создайте функцию getProductById(), которая будет возвращать продукт по id.
// 5. Создайте функцию deleteProductById(), которая будет удялять из исходного массива products товар по id.
// 6. Создайте функцию createProduct(), которая будет добавлять новый продукт в исходный массив products. Товар передается в функцию в виде объекта
// 7. Создайте функцию findProductByName(), которая будет возвращать объект из массива products в зависимости от передаваемого значения name или value.

const findProductByName = (arr, option) => {
    for (const item of arr) {
        if (item.name === option || item.value === option) {
            return item
        }
    }
}

console.log(findProductByName(products, "Морс"));


// 7. Создайте функцию editProduct(), которая будет изменять объект products. В качестве аргументов, в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.
// 8. Создайте функцию modifyProductList(), которая будет возвращать новый массив с продуктами у которых будут только свойства id, name, value и price
// 9. Создайте функцию addToCart(), которая будет записывать товар по id в новый массив cart.