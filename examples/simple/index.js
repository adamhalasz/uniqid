var uniqid = require('../../');
console.log(uniqid(), uniqid());
console.log(uniqid('prefix-'));
console.log(uniqid('prefix-', '-suffix'));
console.log(uniqid('', '-suffix'));
console.log(uniqid(undefined, '-suffix'));