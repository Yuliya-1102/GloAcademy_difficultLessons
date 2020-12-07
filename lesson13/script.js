'use strict';

const wrapper = document.querySelector('.wrapper');
const color = document.querySelector('#color');
const change = document.querySelector('#change');



let choiceColor = '0123456789abcdef';
let arrColor = choiceColor.split('');


function changeColor(){
    let colorNew = '#';
    for (var i = 0; i < 6; i++) {
        colorNew += choiceColor[(Math.floor(Math.random() * 16))];
    }
    wrapper.style.backgroundColor = colorNew;
    change.style.color = colorNew;
    color.textContent = colorNew;
}
changeColor();

change.addEventListener('click', changeColor);
