const array1 = [1, 2, 3];
const array2 = [4, [5, [6, 7]]];

// concat()
const concatArr = array1.concat(array2);
console.log(concatArr); 

// every()
const ZroicMec = array1.every((element) => element > 0);
console.log(ZroicMec); 

// filter()
const filterArr = array1.filter((element) => element > 1);
console.log(filterArr); 

// flat()
const flatArr = array2.flat();
console.log(flatArr); 

// forEach()
array1.forEach((element) => {
  console.log(element);
});


// indexOf()
const index = array1.indexOf(2);
console.log(index); 

// reduce()
const sum = array1.reduce((plus, current) => plus + current, 0);
console.log(sum); 

// reverse()
const reverseArr = array1.reverse();
console.log(reverseArr); 

// sort()
const sorteArr = array1.sort();
console.log(sorteArr); 


// slice()
const sliceArray = array1.slice(1, 2);
console.log(sliceArr); 

// splice()
const spliceArr = array1.splice(1, 1);
console.log(spliceArr); 
console.log(array1); 

// some()
const zuygTver = array1.some((element) => element % 2 == 0);
console.log(zuygTver);

// entries()
const entries = array1.entries();
for (const [index, value] of entries) {
  console.log(index, value);
}


// fill()
const filleArr = array1.fill(0);
console.log(filleArr); 

// find()
const findElem = array1.find((element) => element > 1);
console.log(findElem); 

// findIndex()
const findIndex = array1.findIndex((element) => element > 1);
console.log(findIndex); 

// includes()
const includesElem = array1.includes(1);
console.log(includesElem); 


// join()
const joinedArray = array1.join(' space between two digits ');
console.log(joinedArray);



