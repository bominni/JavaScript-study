const data = {
    user: 'abcd',
    role: 'admin',
    sayHello() {
        console.log('Hello!!');
    }
};

//exports 객체를 내가 만든 객체로 한번에 할당
module.exports = data;