const http = require("http");

const port = 7000;

var handleRequest = (req, res) => {
    res.end("You're a great individual, your parents love you");
}

var server = http.createServer(handleRequest);

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});