const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('FAYIS');
});

server.listen(3001, () => {
  console.log('App1 is running on http://localhost:3001');
});
