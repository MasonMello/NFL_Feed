const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = [
  'http://localhost:3000', // Local React dev URL
  'https://espn-clone.onrender.com', // Deployed React app URL
  'https://nfl-feed-ussq.onrender.com', // Another deployed React app URL
  'https://nfl-feed.onrender.com' // Proxy server URL
];


app.use(
  cors({
    origin: function(origin, callback) {
      // Allow requests with no origin (like curl or server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.get('/api/article/:id', async (req, res) => {
  try {
    const articleId = req.params.id;
    const response = await axios.get(
      `https://content.core.api.espn.com/v1/sports/news/${articleId}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
