'use strict';

const showOne = document.querySelector('.showOne');
const showTwo = document.querySelector('.showTwo');

function showDays(){
  let monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  let weekArr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];


  let date = new Date();

  let year = date.getFullYear();
  let dateCurrent = date.getDate();
  let month = date.getMonth();

  date.setDate(date.getDate() -1);
  let dayCurrent = weekArr[date.getDay()];

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  function getMonth(){
    if(month === 0){
      return 1;
    } else {
      return month + 1;
    }
  }
  getMonth();

  function getHoursName(hours){
    if(hours === 1 || hours === 21){
      return 'час';
    } else if((hours >= 2 && hours <= 3) || (hours >= 22 && hours <= 24)){
      return 'часа';
    } else if((hours >= 5 && hours <= 20)){
      return 'часов';
    }
  }
  getHoursName(hours);

  const addZero = n => n < 10 ? '0' + n : n;

  let currentDayOne = (`Сегодня ${dayCurrent}, ${dateCurrent} ${monthArr[month]} ${year} года, ${addZero(hours)} ${getHoursName(hours)} ${addZero(minutes)} минуты ${addZero(seconds)} секунды`);
  let currentDayTwo =  (`${addZero(dateCurrent)}.${addZero(getMonth())}.${year} - ${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`);

  showOne.innerHTML = currentDayOne;
  showTwo.innerHTML = currentDayTwo;

}
showDays();
setInterval(showDays, 1000);
