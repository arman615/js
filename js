/*1*/
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


/*2*/
function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

/*3*/
function filter(arr, callback) {
  const filtered = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filtered.push(arr[i]);
    }
  }
  
  return filtered;
}


/*4*/
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



/*5*/
function forEach(arr,callback){
    for(let i=0;i<arr.length;++i){
        callback(arr[i],i,arr);
    }
}


/*6*/
function indexOf(arr, element){
    for(let i=0;i<arr.length;++i){
        if(arr[i]==element){
            return i;
        }
    }
    return;
}

/*7*/
function indexOf(arr, element){
    for(let i=arr.length-1;i>=0;--i){
        if(arr[i]==element){
            return i;
        }
    }
    return;
}



/*8*/
function map(arr, callback) {
  const mapped = [];
  
  for (let i = 0; i < arr.length; ++i) {
    mapped.push(callback(arr[i], i, arr));
  }
  
  return mapped;
}



/*9*/
function reduce(arr, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : arr[0];
  
  for (let i = initialValue !== undefined ? 0 : 1; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  
  return accumulator;
}



/*10*/
function slice(arr, start, end) {
  const sliced = [];
  
  if (end === undefined) {
    end = arr.length;
  }
  
  for (let i = start; i < end; ++i) {
    sliced.push(arr[i]);
  }
  
  return sliced;
}


/*11*/
function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

/*12*/
function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

/*13*/
function entries(arr) {
  let index = 0;
  
  return {
    next: function() {
      if (index < arr.length) {
        return {
          value: [index, arr[index++]],
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
}

/*14*/
Array.prototype.fill = function(value, start = 0, end = this.length) {
  if (start < 0) {
    start = this.length + start;
  }
  
  if (end < 0) {
    end = this.length + end;
  }
  
  for (let i = start; i < end; i++) {
    this[i] = value;
  }
  
  return this;
};

/*15*/
Array.prototype.find = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

/*16*/
Array.prototype.findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

/*17*/
Array.prototype.findIndex = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

/*18*/
Array.prototype.includes = function(value, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex = Math.max(0, this.length + fromIndex);
  }
  
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value || (Number.isNaN(this[i]) && Number.isNaN(value))) {
      return true;
    }
  }
  
  return false;
};

/*19*/
Array.prototype.join = function(separator = ',') {
  let result = '';
  
  for (let i = 0; i < this.length; i++) {
    result += String(this[i]);
    
    if (i < this.length - 1) {
      result += separator;
    }
  }
  
  return result;
};

/*20*/
function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    
    start++;
    end--;
  }
  
  return arr;
}




const array = [1, 2, 3, 4, 5];
const reversed = reverse(array);
console.log(reversed);


const array = [1, 2, 3, 4, 5];
console.log(array.join()); 

const array = [1, 2, 3, NaN, 5];
console.log(array.includes(3)); 

const array = [1, 2, 3, 4, 5];
const foundIndex = array.findIndex((element) => element > 2);
console.log(foundIndex);


const array16 = [1, 2, 3, 4, 5];
const foundIndex = array16.findIndex((element) => element > 2);
console.log(foundIndex); 


const array15 = [1, 2, 3, 4, 5];
const found = array15.find((element) => element > 2);
console.log(found); 


const array14 = [1, 2, 3, 4, 5];
array.fill(0, 1, 4);
console.log(array14);


const array13 = ['a', 'b', 'c'];
const iterator = entries(array13);

let result = iterator.next();
while (!result.done) {
  console.log(result.value); 
  result = iterator.next();
}



const array12 = [3, 1, 2, 5, 4];
const sorted = sort(array);
console.log(sorted); 

const array11 = [1, 2, 3, 4, 5];
const hasEvenNumber = some(array, (element) => element % 2 === 0);
console.log(hasEvenNumber); 


const array10 = [1, 2, 3, 4, 5];
const sliced = slice(array10, 1, 4);
console.log(sliced); 


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
