const http = require('http');
const port = process.env.APP_PORT || 3000;
const classDevops = process.env.CLASS || 3000;
const appEnv = process.env.APP_ENV || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("CLASS: " + classDevops);
  console.log("APP_ENV: " + appEnv);
});
