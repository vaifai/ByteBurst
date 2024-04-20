const net = require('net');

console.log("ByteBurst starting up...");

const server = net.createServer((connection) => {
    // Handle connection
    connection.on("data", (data) => {
        console.log('Received Data', data.toJSON());
        connection.write("+PONG\r\n");

    });
    connection.on("end", () => {
        // Handle disconnection
        console.log("Client closed");
    });
});

server.listen(5000, "127.0.0.1");