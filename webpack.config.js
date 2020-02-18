const path = require('path');
module.exports = {
entry:["./src/index.js","./src/index.css"],
output:{
path:path.join(__dirname,'dist'),
filename:'bundle.js'
},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
