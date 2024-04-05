const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
//   app.use('/api',
//     createProxyMiddleware({
//       // target: 'https://utapi.duckdns.org',

//       // target: 'http://uutt77.duckdns.org:10030',
//       target: 'http://localhost:8080/',

//       changeOrigin: true,
//     }),
//   );

  app.use('/auth',
    createProxyMiddleware({
      // target: 'https://utapi.duckdns.org',

      // target: 'http://uutt77.duckdns.org:10030',
      target: 'http://localhost:8081/api/v1',

      changeOrigin: true,
    }),
  );

  app.use('/users',
    createProxyMiddleware({
      // target: 'https://utapi.duckdns.org',

      // target: 'http://uutt77.duckdns.org:10030',
      target: 'http://localhost:8081/api/v1',

      changeOrigin: true,
    }),
  );
  
};