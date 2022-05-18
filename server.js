const http = require('http');
const fs = require('fs');

const indexFile = fs.readFileSync('./index.html', { encoding: 'utf8' });
const pageFile = fs.readFileSync('./about.html', { encoding: 'utf8' });


http
  .createServer((request, response) => {
    if (request.url === '/') {
      response.end(indexFile);
    }

    if (request.url === '/about') {
      response.setHeader('Content-Type', 'text/plain');
      response.end(pageFile);
    }
  })
  .listen(8080);
