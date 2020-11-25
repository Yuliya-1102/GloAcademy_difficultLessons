'use strict';

let arr = ['155', '264', '458', '459', '234', '577', '725'];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i].slice(0, 1));
    if(num === 2 || num === 4){
        newArr.push(arr[i]);
        console.log(newArr);
    }
}


let arrPrime = [];

for (let i = 2; i <= 100; i++) {
    arrPrime = [];
    let j = 1;
    do {
        let res = i % j;
        arrPrime.push(res);
        j++;
    } while( j <= i);
    let arrNum = arr.filter(item => item === 0);
    if(arrNum.length <= 2){
        console.log(i, `Делители этого числа: 1 и ${i}`);
    }
}
