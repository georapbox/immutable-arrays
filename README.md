# immutable-arrays

Immutable versions of normally mutable array methods

[![npm version](https://img.shields.io/npm/v/immutable-arrays.svg)](http://badge.fury.io/js/immutable-arrays)
[![Build Status](https://travis-ci.com/georapbox/immutable-arrays.svg?branch=master)](https://travis-ci.com/georapbox/immutable-arrays)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9558f63e22c3e89d06c/maintainability)](https://codeclimate.com/github/georapbox/immutable-arrays/maintainability)
[![Issue Count](https://codeclimate.com/github/georapbox/immutable-arrays/badges/issue_count.svg)](https://codeclimate.com/github/georapbox/immutable-arrays)
[![Coverage Status](https://coveralls.io/repos/github/georapbox/immutable-arrays/badge.svg?branch=master)](https://coveralls.io/github/georapbox/immutable-arrays?branch=master)
[![npm license](https://img.shields.io/npm/l/immutable-arrays.svg)](http://badge.fury.io/js/immutable-arrays)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![npm downloads](https://img.shields.io/npm/dt/immutable-arrays.svg)](http://badge.fury.io/js/immutable-arrays)

## Install

```sh
$ npm install --save immutable-arrays
```

## Usage

The library is exported in the following formats:
- `UMD (Universal Module Definition)` for usage in browsers
- `CJS (CommonJS)` for usage in Node.js
- `ESM (Ecmascript Modules)` for usage in browsers or environments that support ESM

### Old school browser global

```html
<script src="https://unpkg.com/immutable-arrays@<VERSION_GOES_HERE>/dist/immutable-arrays.umd.min.js"></script>
```

After importing the library it can be accessed via the global variable `immutableArrays`.

### Node.js

```js
const push = require('immutable-arrays').push;
```

### ES2015 imports

```js
import { push } from 'immutable-arrays';
```

## API

### push(array, ...elementN) ⇒ <code>Array</code>
Adds one or more elements to the end of an array by returning
a new array instead of mutating the original one.

**Returns**: <code>Array</code> - A new array with the new entries added to the end.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |
| ...elementN | <code>\*</code> | The elements to add to the end of the array. |

**Example**  
```js
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = push(originalArray, 'f', 'g');
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

### pop(array) ⇒ <code>Array</code>
Removes the last element from an array by returning
a new array instead of mutating the original one.

**Returns**: <code>Array</code> - A new array with the last element removed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |

**Example**  
```js
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = pop(originalArray);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['a', 'b', 'c', 'd']
```

### shift(array) ⇒ <code>Array</code>
Removes the first element from an array.

**Returns**: <code>Array</code> - A new array with the first element removed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |

**Example**  
```js
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = shift(originalArray);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['b', 'c', 'd', 'e']
```

### unshift(array, ...elementN) ⇒ <code>Array</code>
Adds one or more elements to the beginning of an array.

**Returns**: <code>Array</code> - A new array with the new elements added to the front.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |
| ...elementN | <code>\*</code> | [description] The elements to add to the front of the array. |

**Example**  
```js
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = unshift(originalArray, 'f', 'g');
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['f', 'g', 'a', 'b', 'c', 'd', 'e']
```

### reverse(array) ⇒ <code>Array</code>
Reverses an array (not in place).
The first array element becomes the last, and the last array element becomes the first.

**Returns**: <code>Array</code> - A new array reversed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |

**Example**  
```js
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = reverse(originalArray);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['e', 'd', 'c', 'b', 'a']
```

### sort(array, [compareFunction]) ⇒ <code>Array</code>
Sorts the elements of an array (not in place) and returns a sorted array.

**Returns**: <code>Array</code> - A new sorted array.

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |
| [compareFunction] | <code>Function</code> | Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element. |

**Example**  
```js
const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
const stringArray = ['Blue', 'Humpback', 'Beluga'];

const resultArray = sort(numberArray, (a, b) => a - b);
// -> numberArray [20, 3, 4, 10, -3, 1, 0, 5]
// -> resultArray [-3, 0, 1, 3, 4, 5, 10, 20]

const resultArray = sort(numberArray, (a, b) => b - a);
// -> numberArray [20, 3, 4, 10, -3, 1, 0, 5]
// -> resultArray [20, 10, 5, 4, 3, 1, 0, -3]

const resultArray = sort(stringArray);
// -> stringArray ['Blue', 'Humpback', 'Beluga']
// -> resultArray ['Beluga', 'Blue', 'Humpback']

const resultArray = sort(stringArray, (a, b) => a.toLowerCase() < b.toLowerCase());
// -> stringArray ['Blue', 'Humpback', 'Beluga']
// -> resultArray ['Humpback', 'Blue', 'Beluga']
```

### splice(array, [start], [deleteCount], [...elementN]) ⇒ <code>Array</code>
Removes existing elements and/or adds new elements to an array.

**Returns**: <code>Array</code> - The result array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The original array. |
| [start] | <code>Number</code> | <code>array.length</code> | Zero based index at which to start changing the array.        If greater than the length of the array, actual starting index will be set to the length of the array. |
| [deleteCount] | <code>Number</code> | <code>array.length - start</code> | An integer indicating the number of old array elements to remove.        If `deleteCount` is 0, no elements are removed.        If `deleteCount` is lower than 0, `deleteCount` will be equal to 0.        If `deleteCount` is greater than the number of elements left in the array starting at        `start`, then all of the elements through the end of the array will be deleted.        If `deleteCount` is omitted, `deleteCount` will be equal to (`array.length - start`),        i.e., all of the elements beginning with `start` index on through the end of the array will be deleted. |
| [...elementN] | <code>\*</code> |  | The elements to add to the array, beginning at the start index.        If you don't specify any elements, will only remove elements from the array. |

**Example**  
```js
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, 0);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray []

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, 0, 1);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['b', 'c', 'd', 'e']

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, 0, 3);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['d', 'e']

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, 0, originalArray.length);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray []

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, 0, -3);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['a', 'b', 'c', 'd', 'e']

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, 0, 0, 'lorem', 'ipsum');
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['lorem', 'ipsum', 'a', 'b', 'c', 'd', 'e']

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, originalArray.length, 0, 'lorem', 'ipsum');
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['a', 'b', 'c', 'd', 'e', 'lorem', 'ipsum']

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, 0, 2, 'lorem', 'ipsum');
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['lorem', 'ipsum', 'c', 'd', 'e']

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = splice(originalArray, originalArray.length - 2, 2, 'lorem', 'ipsum');
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['a', 'b', 'c', 'lorem', 'ipsum']
```

### del(array, index) ⇒ <code>Array</code>
Deletes an element from an array by its index in the array.

**Returns**: <code>Array</code> - A new array with the element removed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |
| index | <code>Number</code> | The index of the element to delete in the original array. If index is a negative number, a copy of the original array is returned. |

**Example**  
```js
const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = del(originalArray, 2);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray ['a', 'b', 'd', 'e']

const resultArray2 = del(originalArray, -1);
// -> originalArray ['a', 'b', 'c', 'd', 'e']
// -> resultArray2 ['a', 'b', 'c', 'd', 'e']
```

## For developers

### Build the library

```sh
$ npm run dev
```
Builds the library and watches for changes while developing. If you want to build only for a specific format, there are other npm scripts available; check in `package.json`.

```sh
$ npm run build
```
Builds the library for production.

### Run the tests

```sh
$ npm run test
```

### Tests coverage

```sh
$ npm run coverage
```

## Changelog

For API updates and breaking changes, check the [CHANGELOG](https://github.com/georapbox/immutable-arrays/blob/master/CHANGELOG.md).

## License

[The MIT License (MIT)](https://georapbox.mit-license.org/@2017)

