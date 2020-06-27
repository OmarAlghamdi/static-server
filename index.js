const http = require('http');
const fs = require('fs');

const PORT = 3000;
const PUBLIC_PATH = __dirname + '/public';

const server = http.createServer( (req, res) => {
    if (req.url === "/" || req.url === '/index') {
        fs.readFile(PUBLIC_PATH + '/index.html', (err, data) => {
            if (err) {
                console.log('Error', err.message);
    
                res.statusCode = 404;
                res.end('Something went wrong');
                return;
            }
    
            res.statusCode = 200;
            res.end(data);
            return;
        })
    } else {
        res.statusCode = 404;
        res.end('Page does not exist');
    }
    
})

server.listen(PORT, () => {
    console.log(`Serving at localhost:${PORT}`);
});