var assert = require('assert');
var JsonRpcNotification = require('..');

var method = 'someMethod';
var params = 'some params';

describe('JSON RPC 2.0 notification', function() {
  it('should create notification using the `new` keyword', function() {
    var notification = new JsonRpcNotification(method, params);
    assert(notification.method === method);
    assert(notification.params === params);
  });

  it('should create notificationication without using the `new` keyword', function() {
    var notification = JsonRpcNotification(method, params);
    assert(notification.method === method);
    assert(notification.params === params);
  });

  it('should create notification with correct version', function() {
    var notification = new JsonRpcNotification(method, params);
    assert(notification.jsonrpc === '2.0');
  });

  it('should not include params property if params argument is omitted', function() {
    var notification = new JsonRpcNotification(method);
    assert(typeof notification.params === 'undefined');
  });

  it('should throw if method is not a string', function() {
    var requestError;

    try {
      new JsonRpcNotification(true, params);
    } catch (err) {
      requestError = err;
    }

    assert(requestError);
  });
});
