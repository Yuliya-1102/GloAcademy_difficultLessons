'use strict';

const ul = document.querySelector('ul');
const btn = document.querySelector('button');
const input = document.querySelector('input');

let clicked =  function(){
  let li = document.createElement('li');
  li.textContent = input.value;
  if(input.value === ''){
    input.style.borderColor = 'red';
    btn.removeEventListener('click', clicked);
  } else{
    input.style.borderColor = '';
    ul.insertAdjacentElement('beforeend', li);
  }
  input.value = '';
};

btn.addEventListener('click', clicked);