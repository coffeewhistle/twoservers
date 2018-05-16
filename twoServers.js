/* jshint esversion: 6 */

// Require/import the HTTP module
const HTTP = require("http");

// Define a port to listen for incoming requests
const PORT1 = 7000;
const PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest1(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You smell much better than you think");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const SERVER = HTTP.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
SERVER.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

const SERVER2 = HTTP.createServer(handleRequest2);

SERVER2.listen(PORT2, function() {
    console.log("Server 2 is listening on: http://localhost:" + PORT2);
});

function handleRequest2(request, response) {
    response.end("You smell worse than you think...");
}
