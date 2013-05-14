# SLNode Chat Examples

A pair of examples to showcase how to use `socket.io` with a static `express` server with `async` for control flow.

## Setup

    $ npm install

## Running the Simple Example

    $ node bin/simple 3000
       info  - socket.io started
    Listening on port 3000...

Once the example is running, open `http://localhost:3000` in a browser. As you enter your name, watch the Users list
(on the left) update. Once you press Enter or Send, the message is shared with all connected clients.

## Running the Cluster Example

    $ node bin/cluster 3000
       info  - socket.io started
    Worker 1838 listening on port 3000...
       info  - socket.io started
    Worker 1839 listening on port 3001...

Once the example is running, point one browser to `http://localhost:3000` and another to `http://localhost:3001`. Now,
messages sent to one server process will be shared with the other process.
