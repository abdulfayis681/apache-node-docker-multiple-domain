const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ANSIL');
});

server.listen(3002, () => {
  console.log('App2 is running on http://localhost:3002');
});
