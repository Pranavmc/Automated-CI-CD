const http = require("http");
const server = http.createServer((req, res) => {
  res.end("CI/CD Deployment Successful!");
});
server.listen(3000, () => console.log("App running on 3000"));
