'use strict';

const findBestEmployee = function (employees) {
    
  let bestEmployee = '';
    const values = Object.values(employees);
    const maxValue = Math.max(...values);
  for (const key in employees) {
    if (employees[key] === maxValue) {
      bestEmployee = key;
    }
  }
  return bestEmployee
};

const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
}; 
console.log(findBestEmployee(developers)); 

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
}; 
console.log(findBestEmployee(supports)); 

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
}
console.log(findBestEmployee(sellers)); 
  
// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).Сотрудники
// и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".