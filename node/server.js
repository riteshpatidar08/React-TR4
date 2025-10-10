const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/product') {
    // res.statusCode = 201;
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    return res.end('products');
  } else if (req.url === '/users') {
    const fs = require('fs');
    fs.readFile('./user.json', 'utf-8', (err, data) => {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(data);
    });
  } else {
    return res.end('hello from server');
  }
});

server.listen(3000, () => {
  console.log('server is running on 3000');
});

//note npm i -g nodemon
