var fruits = ['Banana','Apple','Orange'];
console.log(fruits);
//
//Using methods
fruits.push('Water melon'); // 'push' adds item at the end
console.log(fruits);
fruits.shift();            //'shift' removes the first item
console.log(fruits);
fruits.pop();              //'pop' removes the last element
console.log(fruits);
fruits.unshift('Jackfruit'); //unshift adds element at the beginning.
console.log(fruits);
console.log (fruits.indexOf('Orange'));
fruits.splice(1,2);//removes item with index number. here from index 1 and removes 2 items.
console.log(fruits);
