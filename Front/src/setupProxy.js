const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_USUARIOS } = require('./redux/constants');

module.exports = function(app) {
  app.use(
    '/usuarios',
    createProxyMiddleware({
      target: API_USUARIOS,
      changeOrigin: true
    })
  );
};