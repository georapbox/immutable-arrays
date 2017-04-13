# immutable-arrays

Immutable versions of normally mutable array methods

[![npm version](https://badge.fury.io/js/immutable-arrays.svg)](http://badge.fury.io/js/immutable-arrays)
[![Dependencies](https://david-dm.org/georapbox/immutable-arrays.svg?theme=shields.io)](https://david-dm.org/georapbox/immutable-arrays)
[![devDependency Status](https://david-dm.org/georapbox/immutable-arrays/dev-status.svg)](https://david-dm.org/georapbox/immutable-arrays#info=devDependencies)

## Install

```sh
$ npm install immutable-arrays
```

## Functions

<dl>
<dt><a href="#immutablePush">immutablePush(array, ...elementN)</a> ⇒ <code>Array</code></dt>
<dd><p>Adds one or more elements to the end of an array by returning
a new array instead of mutating the original one.</p>
</dd>
<dt><a href="#immutablePop">immutablePop(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Removes the last element from an array by returning
a new array instead of mutating the original one.</p>
</dd>
<dt><a href="#immutableDelete">immutableDelete(array, index)</a> ⇒ <code>Array</code></dt>
<dd><p>Deletes an element from an array by its index in the array.</p>
</dd>
<dt><a href="#immutableShift">immutableShift(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Removes the first element from an array.</p>
</dd>
<dt><a href="#immutableUnshift">immutableUnshift(array, ...elementN)</a> ⇒ <code>Array</code></dt>
<dd><p>Adds one or more elements to the beginning of an array.</p>
</dd>
<dt><a href="#immutableReverse">immutableReverse(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Reverses an array (not in place).
The first array element becomes the last, and the last array element becomes the first.</p>
</dd>
<dt><a href="#immutableSplice">immutableSplice(array, [start], [deleteCount], [...elementN])</a> ⇒ <code>Array</code></dt>
<dd><p>Removes existing elements and/or adds new elements to an array.</p>
</dd>
</dl>

<a name="immutablePush"></a>

## immutablePush(array, ...elementN) ⇒ <code>Array</code>
Adds one or more elements to the end of an array by returning
a new array instead of mutating the original one.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array with the new entries added to the end.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |
| ...elementN | <code>\*</code> | The elements to add to the end of the array. |

<a name="immutablePop"></a>

## immutablePop(array) ⇒ <code>Array</code>
Removes the last element from an array by returning
a new array instead of mutating the original one.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array with the last element removed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |

<a name="immutableDelete"></a>

## immutableDelete(array, index) ⇒ <code>Array</code>
Deletes an element from an array by its index in the array.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array with the element removed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |
| index | <code>Number</code> | The index of the element to delete in the original array. |

<a name="immutableShift"></a>

## immutableShift(array) ⇒ <code>Array</code>
Removes the first element from an array.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array with the first element removed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |

<a name="immutableUnshift"></a>

## immutableUnshift(array, ...elementN) ⇒ <code>Array</code>
Adds one or more elements to the beginning of an array.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array with the new elements added to the front.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |
| ...elementN | <code>\*</code> | [description] The elements to add to the front of the array. |

<a name="immutableReverse"></a>

## immutableReverse(array) ⇒ <code>Array</code>
Reverses an array (not in place).
The first array element becomes the last, and the last array element becomes the first.

**Kind**: global function  
**Returns**: <code>Array</code> - A new array reversed.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The original array. |

<a name="immutableSplice"></a>

## immutableSplice(array, [start], [deleteCount], [...elementN]) ⇒ <code>Array</code>
Removes existing elements and/or adds new elements to an array.

**Kind**: global function  
**Returns**: <code>Array</code> - The result array.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| array | <code>Array</code> |  | The original array. |
| [start] | <code>Number</code> | <code>array.length</code> | Zero based index at which to start changing the array.        If greater than the length of the array, actual starting index will be set to the length of the array. |
| [deleteCount] | <code>Number</code> | <code>array.length - start</code> | An integer indicating the number of old array elements to remove.        If `deleteCount` is 0, no elements are removed.        If `deleteCount` is lower than 0, `deleteCount` will be equal to 0.        If `deleteCount` is greater than the number of elements left in the array starting at        `start`, then all of the elements through the end of the array will be deleted.        If `deleteCount` is omitted, `deleteCount` will be equal to (`array.length - start`),        i.e., all of the elements beginning with `start` index on through the end of the array will be deleted. |
| [...elementN] | <code>\*</code> |  | The elements to add to the array, beginning at the start index.        If you don't specify any elements, will only remove elements from the array. |
