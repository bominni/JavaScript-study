//ES6 for in - 주의
console.log('for in');
for(let i in arr) {
    console.log(i+0);
}

//ES6 for of
console.log('for of');
for(let i of arr) {
    console.log(i+0);
}

const arr = [1,3,5,7,9]

//전통적인 방법
console.log('traditional');
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

//ES6 Array.forEach
console.log('for each');
arr.forEach((item) => {
    console.log(item);
});

//ES6 for of
console.log('for of');
for(let i of arr) {
    console.log(i);
}

// const map = new Map();

// map.set('k1', 'v1');
// map.set('k2', 2);
// map.set('k3', 3.0);

// console.log(map);

// const arr = [1,2,3,4];
// const arr2 = arr.slice();

// console.log(arr);
// console.log(arr2);

// arr2.pop();

// console.log(arr);
// console.log(arr2);

// const arr = [1,2]

// // 인자가 2개 필요한 함수.
// function add(num1,num2) {
//     return num1+num2;
// }

// // Spread
// const result = add(...arr);
// console.log(result);

// const arr = [1,2,3,4,5];

// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr);

// const arr = [1,2,3,4,5,6];
// const value = arr.find((i) => {
//     if(i==3) return true;
//     else return false;
// });
// console.log(value);

// const arr = [1,2,3,4,5];

// console.log(arr.includes(0));
// arr.forEach((v,i) => {
//     console.log(`value:${v}, index:${i}`);
// });

// function add(n1, n2) {
//     return n1+n2;
// }

// function sub(n1, n2) {
//     return n1-n2;
// }

// function executor(f, a, b) {
//     return f(a,b)
// }

// const result = executor(add, 1, 1)
// console.log(result)

// function add(n1, n2) {
//     return n1+n2;
// }

// function sub(n1, n2) {
//     return n1-n2;
// }

// function executor(type) {
//     if(type=='add')
//         return add
//     else
//         return sub
// }

// const f = executor('add')
// console.log(f(1,1))

// function outerHeight() {
//     function inner() {
        
//     }
// }