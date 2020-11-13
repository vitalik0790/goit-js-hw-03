'use strict';

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
user.mood = 'happy';
user["full time"] = true;
user.hobby = 'skydiving';
user.premium = false;
 
const keys = Object.keys(user);

for (const key of keys) {
  message += (`${key}: ${user[key]}\n`);
}
 

console.log(message); 

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки ('\n')