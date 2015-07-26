# JSON RPC 2.0 Notification

Constructor for
[JSON RPC 2.0 notification objects](http://www.jsonrpc.org/specification#notification).

## Installation

```js
npm install json-rpc-notification
```

## Usage

```js
new JsonRpcNotification(method[, params]);
```

Notification objects can be constructed with or without using the `new` keyword.

### Example

```js
var JsonRpcNotification = require('json-rpc-notification');

// Notification with params
new JsonRpcNotification('update', [1, 2, 3]);

// Notification without params
new JsonRpcNotification('foobar');
```

## Test

Run unit tests;

`$ npm test`

# License

[MIT](LICENSE)
