const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Middleware for testing route
app.use("/test", (req, res) => {
    res.send("Hello from the proxy server");
});

// Proxy middleware (Corrected)
app.use('/api/article', createProxyMiddleware({
    target: 'https://content.core.api.espn.com',
    changeOrigin: true,
    secure: true,
    headers: { 'Connection': 'keep-alive' }
}));


app.listen(3001, () => {
  console.log('Proxy server listening on port 3001');
});
