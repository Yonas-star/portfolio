const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3001;

const server = http.createServer((req, res) => {
  // Handle basePath
  let filePath = req.url;
  if (filePath.startsWith('/portfolio')) {
    filePath = filePath.replace('/portfolio', '');
  }
  if (filePath === '/') filePath = '/index.html';
  
  const fullPath = path.join(__dirname, 'out', filePath);
  
  // Get file extension
  const extname = path.extname(fullPath);
  let contentType = 'text/html';
  
  // Set content type based on file extension
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
  }
  
  // Read and serve the file
  fs.readFile(fullPath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, serve 404.html
        fs.readFile(path.join(__dirname, 'out', '404.html'), (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, 'localhost', () => {
  console.log(`Server running at http://localhost:${port}/portfolio/`);
});