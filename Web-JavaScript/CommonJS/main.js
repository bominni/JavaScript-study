const data = require('./obj');
const util = require('./each');

console.log(data);
data.sayHello();

console.log(util.message)
util.hello(data.user);
util.bye();