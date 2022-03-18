const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/user", "/auth", "/room"],
    createProxyMiddleware({
      target: process.env.REACT_APP_API_SERVER,
      changeOrigin: true,
    }),
  );
};
