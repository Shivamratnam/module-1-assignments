const http = require('http');

const port = 8080;
const hostname = "localhost";

const httpServer = http.createServer( (req, res) => {
    res.end();
});

httpServer.listen(port, hostname, () => {
    console.log(`Server started at 'http://${hostname}:${port}`);
});