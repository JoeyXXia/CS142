## Adding JavaScript to Web Page

- inline script
- internal script
- external script
- multiple external scripts

### 1. variables

- var
- let 
- const

### 2. data types

### 3. Arrays

##### creating any array using split

```js
let js = 'javascript'
const charsJavascript = js.split('');
```

##### methods to manipulate array

- Array: to create an array

  ```js
  const eightEmptyValues = Array(8);
  // to create eight empty values
  ```

- fill: fill all the array elements with a static value

  ```js
  const four4values = Array(4).fill(4)
  ```

- concat: to concatenate two arrays.

  ```js
  const firstList = [1,2,3];
  const second = [4,5,6];
  const thirdList  = firstList.concat(secondList);
  // [1,2,3,4,5,6]
  ```

- length: to know the size of the array

  ```js
  const numbers = [1,2];
  console.log(numbers.length);
  // 2
  ```

- indexOf : to check if an item exist in an array,if it exists, it returns the index,else it returns -1

  ```js
  const numbers = [1,2,3];
  console.log(numbers.indexOf(1));
  // 0
  ```

- lastIndexOf: it gives the position the last item in the array ,if exists,it returns the index ,else it returns -1

  ```js
  const numbers = [1,2,3,4,5,3,1,2];
  console.log(numbers.lastIndexOf(2));
  // 7
  ```

- includes: to check if an item exists in an array, if exist,it returns the true,else it returns false

  ```js
  const numbers = [1,2,3];
  console.log(numbers.include(1))
  // true
  ```

- Array.isArray: to check if the data type is an array

  ```js
  const numbers = [1,2,3]
  console.log(Array.isArray(numbers))
  // true
  ```

- toString: converts array to string

  ```js
  const numbers = [1,2,4]
  console.log(numbers.toString());
  // 1,2,4
  ```

- join : it is used t join the elements of the array, the argument we passed in the join method will be joined  in the array and returns as a string. By default, it joins with a comma,but we can pass different string parameter which can be joined between the items

  ```js
  const names = ["xia", "xu", "is", "shabi"];
  
  console.log(names.join()); // xia,xu,is,shabi
  console.log(names.join('')); // xiaxuisshabi
  console.log(names.join(' ')); //  xia xu is shabi
  console.log(names.join('#')); // xia#xu#is#shabi
  ```

- slice: to cut out a multiple items in range. it takes three parameters: starting and ending position. It doesn't include the ending position.

  ```js
  const numbers = [1,2,3,4,5];
  console.log(numbers.slice(1,4))
  // [2,3,4]
  ```

- splice: it takes three parameters: starting position ,number of items to be removed and number of items to be added

  ```js
  const numbers = [1,2,3,4,5,6];
  console.log(numbers.splice(3, 3, 7,  8,9))
  // [1,2,3,7,8,9]
  ```

- push : adding item in the end. To add item to the end of an existing array

  ```js
  const arr = ['item1','item2','item3']
  arr.push('new item');
  // ['item1','item2','item3','new item']
  ```

- pop : removing item in the end

  ```js
  const numbers = [1,2,3,4,5];
  numbers.pop()
  // [1,2,3,4]
  ```

- shift: removing one array element in the beginning of the array

  ```js
  const numbers = [1,2,3,4,5];
  numbers.shift();
  // [2,3,4,5]
  ```

- unshift: adding array element in the beginning of the array

  ```js
  const numbers = [1,2,3]
  numbers.unshift(0)
  // [0,1,2,3]
  ```

- reverse: reverse the order of an array

  ```js
  const numbers = [1,2,3];
  numbers.reverse()
  // [3,2,1]
  ```

- sort: arrange array elements in ascending  order. Sort takes a callback function

  ```js
  // save
  ```


### Conditionals

- if 
- if else
- if .else if 
- switch
- ternary operator

### Loops

- for
- while
- do while
- for of 
- forEach
- for in

### scope

- window
- global
- local

### Object

nothing to mention, just look at the modern javascript

### Functions

- declaration function
- expression function
- anonymous function
- arrow function

### High Order Funtion

- callback
- returning function
- setInterval
- setTimeout

### Destructing and Spreading

to know

### Functional Programming

- forEach :to iterate through an array of items
- map: to modify an array
- filter: filter out items based on some criteria
- reduce: to sum or multiply
- find: return the first occurence of an item
- findIndex: return the index of the item
- some: return  a boolean
- every: just like the some



### Classes

just read the tutorial

### DOM

oooh