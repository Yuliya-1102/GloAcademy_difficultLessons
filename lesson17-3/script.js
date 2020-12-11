'use strict';

const country = document.querySelector('#country');
const city = document.querySelector('#city');
const result = document.querySelector('.result');

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}

function selectСountry(){
  city.textContent = '';
  city.style.display = 'block';
  let countryValue = country.value;
  for(let key in cityArr){
    if(countryValue === key){
      cityArr[key].forEach((item) => {
        let option = document.createElement('option');
        option.textContent = item;
        city.append(option);
      })
    }
  }
}

function addText(){
  const option = document.querySelectorAll('option');
  let arr = [...option];
  let countryVal = country.value;
  let cityVal = city.value;
  arr.forEach((item) => {
    if(countryVal === item.value){
    result.textContent = item.textContent;
    };
    if(cityVal === item.value){
      result.textContent = result.textContent + ' ' + item.textContent;
    } 
  });

};

country.addEventListener('change', selectСountry);
city.addEventListener('change', addText);

