// 항목을 하나씩 exports 객체에 추가하는 방법
module.exports.message = 'Util module';

module.exports.hello = (user) => {
    console.log(`Hello ${user}`);
};

module.exports.bye = () => {
    console.log('Bye');
};  