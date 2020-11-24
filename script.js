'use strict';

function addString(str){

    if(typeof(str) === 'string'){
        let string = str.trim();
        if(string.length > 30){
            return string.slice(0, 30) + '...';
        }
    } else{
        return 'Передана не строка';
    }
}
console.log(addString(' Как удалить пробелы? Для JavaScript такой проблемы не существует - все очень просто!  '));