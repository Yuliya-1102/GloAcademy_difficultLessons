'use strict';
const a = document.querySelector('#a');
const b = document.querySelector('#b');
const sum = document.querySelector('#sum');
const mult = document.querySelector('#mult');
const res = document.querySelector('#res');




const calculator = {
    a: a.value,
    b: b.value,
    sumRes: 0,
    multRes: 0,
    sum: function(){
      this.sumRes = +a.value + (+b.value);
      console.log(this.sumRes);
      this.showSum();
    },
    mult: function(){
      this.multRes = a.value * b.value;
      this.showMult();
    },
    showSum: function(){
        res.value = this.sumRes; 
    },
    showMult: function(){
        res.value = this.multRes;  
    },
    addEvent: function(){
        sum.addEventListener('click', this.sum.bind(this));  
        mult.addEventListener('click', this.mult.bind(this));    
    }
  }
calculator.addEvent();

