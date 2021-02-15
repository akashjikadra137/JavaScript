# JavaScript
**Core Fundamentals**

### Introduction
* JavaScript initially known as LiveScript, was later known as JavaScript when it evolved and became fully independent language with its own specification known as **ECMAScript**.
* JavaScript is a asynchronous, non-blocking, concurrent programming language.

### Few points about JavaScript
* In JavaScript semicolon is not necessary. But it is a best practice to use semicolon.
* Semicolon must be used when there are multiple statements in the same line. Also JavaScript do not assume semicolon before `[]`(Array).  
* Semicolon is not used after a block. However, in case of function expression, semicolon is used after complition of block. 

### DataTypes in JavaScript
1) Number
2) String
3) Boolean
4) BigInt
5) Null
6) Undefined
7) Array
8) Objects
9) Symbol

> Out of all datatypes listed above, `number`, `string`, `boolean`, `BigInt`, `symbol`, `undefined` are primitive datatypes.

### typeOf()
It returns a `string` with the type name of datatype.
It can be used as an operator `typeof x` as well as a function `typeof(x)`.

### Interactions 
1) alert()
It shows a popup box displaying message that is passed in it.
It takes one argument and converts it into `string` and prints it into popup.
```JavaScript
alert("Hello World!");
```
2) prompt()
It takes two arguments let say `a` and `b`. Here `a` is the question you want to ask and `b` is default message. Second parameter is not mandatory.
If pressed `Ok`, it returns the input string else if you press `cancel`, it returns null as a result.
```JavaScript
var ans = prompt("Are you a Programmer?", "Not Sure");
```
3) confirm()
It takes one argument which will be a question that can be answered in yes or no.
If pressed `Ok`, it returns true else if you press `cancel`, it returns false as a result.
```JavaScript
var ans = confirm("Are you a Programmer?");
```

### Type Conversion
#### String(value)
Converts value to `string`.

#### Number(value)
* Converts value to `number`.
* Numeric Conversion happens automatically in mathematical operations.

#### Boolean(value)
Converts a value into `boolean`.

### Automatic type conversion
* Functions like `alert()` converts value into string automatically.
* Comparision operators also perform type conversion with `null` and `Undefined`.
```JavaScript
null >= 0 // -> true,  here null is converted into number
undefined > 0 // -> false, here undefined is converted into NaN
```

### Notes
* `break/continue` cannot be used after ternary operator `?` in a ternary operation.
* We can use `label` for loops to break out multiple loops.
* Functions with no return value or empty return returns `Undefined`.
* `[]` is thruhy value but not true.
```JavaScript
Boolean([]) // -> true
[] == true // -> false
```
* `null` is falsy value but not false.
```JavaScript
Boolean(null) // -> false
null == false // -> false
```
### Difference between `===` ans `Object.is()`
**`===`**
* It considers `0` and `-0` as a same `number`.
```JavaScript
NaN === 0/0     // -> false
NaN === NaN     // -> false
```
**`Object.is()`**
* It considers `0` and `-0` as different `numbers`.
```JavaScript
Object.is(NaN,0/0)  // -> true
Onject.is(NaN,NaN)  // -> true
```


### Some of the tricky statements and expressions
* `+` operator tries to convert non primitive operands to primitive(i.e `number` or `string`).
* first tries to find value of operand by `valueof()`. If it is String then both operand are concatenated as a string or they are added as number.
```JavaScript
+[]           // -> 0
+{}           // -> NaN
[] + {}       // -> "[object Object]"
{} + []       // -> 0
({} + [])     // -> "[object Object]"
{} + {}       // -> "[object Object][object Object]"
[] + []       // -> ""
NaN === NaN   // -> false
[] == []      // -> false
[] === []     // -> false
```
