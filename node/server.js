const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/product') {
    return res.end('products')
  } else {
    return res.end('hello from server');
  }
});

server.listen(3000, () => {
  console.log('server is running on 3000');
});

//note npm i -g nodemon