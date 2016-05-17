/* 
(The MIT License)
Copyright (c) 2014 Halász Ádám <mail@adamhalasz.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Unique Hexatridecimal ID Generator
var pid = process.pid.toString(36), address;
require('macaddress').one(function(error, macAddress){ if(error) throw error; address = macAddress; });
while(!address); // block to support synchronous initialization
address = parseInt(address.replace(/\:|\D+/gi, '')).toString(36);

module.exports = function(prefix){
	return (prefix || '') + address + pid + now().toString(36);
}

module.exports.process = function(prefix){
	return (prefix || '') + pid + now().toString(36);
}

module.exports.time = function(prefix){
	return (prefix || '') + now().toString(36);
}

function now(){
	var time = new Date().getTime();
	var last = now.last || time;
	return now.last = time > last ? time : last + 1;
}
