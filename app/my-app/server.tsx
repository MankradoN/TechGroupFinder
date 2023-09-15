// server.ts
import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './src/pages/Home';
import Favorites from './src/pages/Favourites'; 

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the "build" directory (React app)
app.use(express.static(path.join(__dirname, 'build')));

// Define routes for the home and favorites pages
app.get('/', (req, res) => {
  const homeComponent = renderToString(<Home/>); // Render the Home component
  res.send(
    `<html>
      <head>
      <link rel="stylesheet" type="text/css" href="./src/styles.css">
      </head>
      <body>
        <div id="root">${homeComponent}</div>
        <script src="/static/js/main.js"></script>
      </body>
    </html>`
  );
});

app.get('/favorites', (req, res) => {
  const favouritesComponent = renderToString(<Favorites />); // Render the Favorites component
  res.send(
    `<html>
      <head>
      <link rel="stylesheet" type="text/css" href="./src/styles.css">
      </head>
      <body>
        <div id="root">${favouritesComponent}</div>
        <script src="/static/js/main.js"></script>
      </body>
    </html>`
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
