# JSON RPC 2.0 Notification

Constructor for
[JSON RPC 2.0 notification objects](http://www.jsonrpc.org/specification#notification).

Also see related packages [json-rpc-response](https://github.com/claudijo/json-rpc-response),
[json-rpc-request](https://github.com/claudijo/json-rpc-request), and
[json-rpc-error](https://github.com/claudijo/json-rpc-error)

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
