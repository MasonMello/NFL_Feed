/*const express = require('express');
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
*/

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173', // Your React dev server URL (e.g., Vite)
  })
);

app.get('/api/article/:id', async (req, res) => {
  try {
    const articleId = req.params.id;
    const response = await axios.get(
      `https://content.core.api.espn.com/v1/sports/news/${articleId}`
    );
    //res.send(response.data);
    console.log(response.data);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
