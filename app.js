var http = require('http');
var Parser = require('./src/parser');
var BlogRoute = require('./src/blogRoute');

var port = process.env.port || 1337;

var app = http.createServer(function requestListener(req, res) {
  var blogRoute = new BlogRoute({ Parser: Parser, req: req, res: res });

  if (blogRoute.isValidRoute()) {
    blogRoute.route();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
  res.end('A simple micro blog website with no frills nor nonsense.');
});

app.listen(port);

console.log('Listening on http://localhost:' + port);
