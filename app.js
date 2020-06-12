const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/api', createProxyMiddleware({ target: 'https://10ax.online.tableau.com/api/3.4', changeOrigin: true }));
app.listen(PORT);