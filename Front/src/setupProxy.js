const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/usuarios',
    createProxyMiddleware({
      target: 'https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/d4788f6c-c024-43ee-8253-b139c8997e9e/usuarios/1.0.0/m',
      changeOrigin: true,
      secure: false
    })
  );
};