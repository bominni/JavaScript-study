// const data = require('./obj');
// const util = require('./each');

import obj from './obj.js'; // 이름은 자유롭게 지을 수 있다.
import {message, hello, bye} from './each.js'; // 이름을 맞춘다.

console.log(obj);
obj.sayHello();

console.log(message);
hello(obj.user);
bye();