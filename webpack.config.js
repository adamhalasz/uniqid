const path = require('path');

module.exports = {
    entry: ['./index.js'],
    output: {
      filename: 'uniqid.min.js',
      path: path.resolve(__dirname, 'UMD'),
     
    library: {
      type: 'umd',
      name: 'uniqid',
    },
    // prevent error: `Uncaught ReferenceError: self is not define`
    globalObject: 'this',
    },
    mode: 'production',

  };
  