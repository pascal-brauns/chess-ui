const development = require('./development');
const PATH = require('./PATH');
 
const server = {
  ...development,
  devServer: {
    publicPath: '/',
    contentBase: PATH.PUBLIC,
    proxy: {
      '/api': {
        target: 'http://localhost:80',
        pathRewrite: { '^/api': '' },
        secure: false
      },
      '/socket.io': {
        target: 'http://localhost:80',
        ws: true
    }
    }
  } 
};

module.exports = server;
