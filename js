function concat(arr1, arr2) {
  const concatenated = [];
  
  for (let i = 0; i < arr1.length; i++) {
    concatenated.push(arr1[i]);
  }
  
  for (let j = 0; j < arr2.length; j++) {
    concatenated.push(arr2[j]);
  }
  
  return concatenated;
}



function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}


function filter(arr, callback) {
  const filtered = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filtered.push(arr[i]);
    }
  }
  
  return filtered;
}



function flat(arr, depth = 1) {
  if (depth < 1) {
    return [...arr];
  }
  
  const flattened = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const subArray = flat(arr[i], depth - 1);
      flattened.push(...subArray);
    } else {
      flattened.push(arr[i]);
    }
  }
  
  return flattened;
}


function forEach(arr,callback){
    for(let i=0;i<arr.length;++i){
        callback(arr[i],i,arr);
    }
}


function indexOf(arr, element){
    for(let i=0;i<arr.length;++i){
        if(arr[i]==element){
            return i;
        }
    }
    return;
}


function indexOf(arr, element){
    for(let i=arr.length-1;i>=0;--i){
        if(arr[i]==element){
            return i;
        }
    }
    return;
}

function map(arr, callback) {
  const mapped = [];
  
  for (let i = 0; i < arr.length; ++i) {
    mapped.push(callback(arr[i], i, arr));
  }
  
  return mapped;
}

function reduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  
  for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  
  return accumulator;
}




const array9 = [1, 2, 3, 4, 5];
const sum = reduce(array9, (accumulator, element) => accumulator + element, 0);
console.log(sum); 


const array8 = [1, 2, 3, 4, 5];
const squared = map(array8, (element) => element * element);
console.log(squared); 


const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));




const array7 = [0, 1, 2, 3, 4, 5, 6];
console.log(indexOf(array7,4) );


const array6 = [1, 2, 3, 4, 5, 6];
forEach(array6,(element) => {
    console.log(element);
    
})


const array5 = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = flat(array5);
console.log(flattenedArray); 



const array4 = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = filter(array4, (element) => element % 2 != 0);
console.log(oddNumbers); 




const array3 = [1, 2, 3, 4, 5];
const allGreaterThanZero = every(array3, (element) => element > 0);
console.log(allGreaterThanZero);



const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = concat(array1, array2);
console.log(result); 
