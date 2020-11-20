let num = 266219;
num = String(num).split('').reduce((result, current) => result * Number(current), 1);
console.log(num);	
alert(String(num**3).substr(0, 2));