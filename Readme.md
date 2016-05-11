![uniqid logo](http://i.imgur.com/OrZC1lc.png)

![unqiid npm badge](http://img.shields.io/npm/v/uniqid.svg) ![uniqid npm downloads badge](https://img.shields.io/npm/dm/uniqid.svg) 

### A Unique Hexatridecimal ID generator. 
It will always create unique id's based on the current time, process and machine name.

```
npm install uniqid
```

## Usage
```js
var uniqid = require('uniqid');

console.log(uniqid()); // -> 19fx7pio25mard
console.log(uniqid(), uniqid()); // -> 19fx7pio25mare, 19fz7pio25mark
```

## Features
- With the current time the ID's are always unique.
- With the Process PID the ID's are unique even if called at the same time from multiple processes.
- With the OS Hostname's first 3 letters the ID's are unique even if called at the same time from multiple machines if the OS Hostname is different.

## API:
####  **uniqid(** prefix *optional string* **)** 

```js
uniqid() -> "19fx7pio25mard"
uniqid('hello-') -> "hello-19fx7pio25mard"
```
 
## **License**

(The MIT License)

Copyright (c) 2014 Halász Ádám <mail@adamhalasz.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
