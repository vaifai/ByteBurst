const net = require('net');
const commands = require('./commands');
const getPort = require('./utils/helpers');

console.log("ByteBurst starting up...");
const PORT = getPort();

console.log(process.argv, PORT);

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

server.listen(PORT, "127.0.0.1");