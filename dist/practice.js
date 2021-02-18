"use strict";
var message = 'hello world';
var messages = [];
var numbers = [];
var mightBeUndefined = null;
mightBeUndefined = 'undefined';
var color; // 저 3가지중에서만 값을 받을수 있고 초기값 없음
color = "orange";
function sum(a, b) {
    return a + b;
}
var sumArray = function (numbersArr) { return numbersArr.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0); };
console.log(sumArray([1, 2, 3, 4]));
var nothingReturn = function () {
    console.log('return값 없는 함수로 결과값 타입 void로 설정 했는데 return 하려고 하면 오류남');
    // return 4
};
var numberOrString = function () { return 'string'; };
