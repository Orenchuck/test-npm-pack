const http = require('http');
const url = require('url');

const server = http.createServer();
const port = 3000;
const hostname = '127.0.0.1';

const ipModule = require('./ip.js');

server.on('request', (req, res) => {
  const path = url.parse(req.url).pathname;
  let message = '';
  let yourIp;

  switch (path) {
    case '/':
      yourIp = ipModule.getIpInfo();
      if (yourIp) {
        message = yourIp;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(message);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('0.0.0.0');
      }
      break;
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write('Route not defined');
      res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});