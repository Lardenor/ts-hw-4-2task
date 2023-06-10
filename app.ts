function checkObjectName(param: any): void {
  if (typeof param === 'object' && param !== null && 'name' in param) {
    console.log(`Object name: ${param.name}`);
  } else {
    console.log('Parameter does not have a name property.');
  }
}

// Приклад використання

const object1 = { name: 'John Doe', age: 25 };
const object2 = { age: 25 };
const object3 = null;
const object4 = 'John Doe';

checkObjectName(object1); 
checkObjectName(object2); 
checkObjectName(object3); 
checkObjectName(object4); 
// !task 2
function checkNumberArray(param: any): void {
  if (Array.isArray(param) && param.every((value: any) => typeof value === 'number')) {
    const sum = param.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);
    console.log(`Sum of numbers: ${sum}`);
  } else {
    console.log('Parameter is not an array of numbers.');
  }
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, '3', 4, 5];
const array3 = '1,2,3,4,5';

checkNumberArray(array1);
checkNumberArray(array2);
checkNumberArray(array3);
