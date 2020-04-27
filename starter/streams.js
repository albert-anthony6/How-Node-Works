const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1
    // fs.readFile('./starter/test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2 - Streams (Problem with this solution is that the response cannot handle the amount of data at the dast rate it is being given by the stream. "Back Pressure")
    // const readable = fs.createReadStream('./starter/test-file.txt');
    // readable.on('data', (chunk) => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500; // 500 meaning server error
    //     res.end('File not found.');
    // });

    // Solution 3 - Streams using pipe();
    const readable = fs.createReadStream('./starter/test-file.txt');
    readable.pipe(res);
    // readableSource.pipe(writeableDest);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...');
});