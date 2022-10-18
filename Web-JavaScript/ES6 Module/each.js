// 항목을 하나씩 export 하는 방법
const message = 'Util moudele';

const hello = (user) => {
    console.log(`Hello ${user}`);
};

const bye = () => {
    console.log('Bye');
};

export {
    message,
    hello,
    bye
}