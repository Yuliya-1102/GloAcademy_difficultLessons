'use strict';

const worm = document.querySelector('.worm');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
let count = 0;

let flyInterval;
let flyAnimate = function(){
    flyInterval = requestAnimationFrame(flyAnimate);
    count++;
    if(count < 300){
        worm.style.top = count + 'px';
    } else{
        cancelAnimationFrame(flyInterval);
    }
};

flyInterval = requestAnimationFrame(flyAnimate);

let animate = true;
stop.addEventListener('click', function(){
    if(!animate){
        flyInterval = requestAnimationFrame(flyAnimate);
        animate = true;
    } else{
        cancelAnimationFrame(flyInterval);
        animate = false;
    }
});

reset.addEventListener('click', function(){
    count = 0;
    worm.style.top = count + 'px';
});