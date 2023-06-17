/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
const pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
let address = '';
if(typeof __webpack_require__ !== 'function' && typeof require !== 'undefined'){
    let mac = '';
    const os = require('os');
    if(os.networkInterfaces) var networkInterfaces = os.networkInterfaces();
    if(networkInterfaces){
        loop:
        for(let interface_key in networkInterfaces){
            const networkInterface = networkInterfaces[interface_key];
            const length = networkInterface.length;
            for(var i = 0; i < length; i++){
                if(networkInterface[i] !== undefined && networkInterface[i].mac && networkInterface[i].mac != '00:00:00:00:00:00'){
                    mac = networkInterface[i].mac; break loop;
                }
            }
        }
        address = mac ? parseInt(mac.replace(/\:|\D+/gi, '')).toString(36) : '' ;
    }
} 

//  Exports
// ================================================
module.exports = module.exports.default = (prefix, suffix) => { return (prefix || '') + address + pid + now() + (suffix || ''); }
module.exports.process = (prefix, suffix) => { return (prefix || '') + pid + now() + (suffix || ''); }
module.exports.time    = (prefix, suffix) => { return (prefix || '') + now() + (suffix || ''); }

//  Helpers
// ================================================
function now(){
    const time = Date.now();
    const last = now.last || time;
    return (now.last = time > last ? time : last + 1).toString(36);
}
