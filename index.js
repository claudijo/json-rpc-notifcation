var JsonRpcNotification = function(method, params) {
  if (!(this instanceof JsonRpcNotification)) {
    return new JsonRpcNotification(method, params);
  }

  if (typeof method !== 'string') {
    throw new Error('Invalid method');
  }

  this.jsonrpc = '2.0';
  this.method = method;

  if (typeof params !== 'undefined') {
    this.params = params;
  }

};

module.exports = JsonRpcNotification;
