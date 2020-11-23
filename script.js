'use strict';

let lang = 'eng';
if (lang === 'eng'){
    console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
} else if (lang === 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
}

switch(lang){
    case 'eng':
        console.log('Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday');
    break;
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
    break;
}

let arr = {
    'ru': ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
    'eng': ['Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday']
};
console.log(arr[lang]);

let namePerson = 'Артем';
let result = (namePerson === 'Артем') ? 'директор' : (namePerson === 'Максим') ? 'преподаватель' : 'студент';
console.log(result);
