const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`
            <h1>Welcome to our home page</h1>
            <a href="/about">This is our about page</a>
        `);
        return;

    }
    if (req.url === "/about") {
        res.end("So we're actually no one");
        return;
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find the page that you are looking for</p>
        <a href="/">Return to the home page</a>
    `);
})

server.listen(5000)