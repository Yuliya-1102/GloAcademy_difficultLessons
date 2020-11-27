'use strict';

let weekDays = document.querySelector('.weekDays');
let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let date = new Date();

date.setDate(date.getDate() -1);
let currentDay = date.getDay();

function addWeekDays(){
  for(let i = 0; i < week.length; i++){
    let p = document.createElement('p');
    p.innerHTML = week[i];
    if(i === 5 || i === 6){
      p.style.fontStyle = 'italic';
      if(i === currentDay){
        p.style.fontWeight = 'bold';
      }
    } else if(i === currentDay){
      p.style.fontWeight = 'bold';
    } 
    weekDays.append(p);
  }
}  
addWeekDays();
