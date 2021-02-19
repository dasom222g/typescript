"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var numberOrString = function () { return 0; };
var Retangle = /** @class */ (function () {
    function Retangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Retangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Retangle;
}());
var retangle = new Retangle(100, 100);
console.log('retangle', retangle.getArea());
// generic
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
function merge2(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge2({ id: 1, content: 'foo' }, { id: 2, content: 'bar' });
console.log('merged', merged);
