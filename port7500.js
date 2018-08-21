const http = require("http");

const PORT = 7500;

var handleRequest = (req, res) => {
    res.end("You're an awful person, your parents hate you. LOK TAR OGAR");
};

var server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})