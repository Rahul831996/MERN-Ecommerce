const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://192.168.43.209:4000',
      changeOrigin: true,
    })
  );
};  