// const person = {
//   name: "John",
// };
// const p2 = person;

// const arr = ["red", "green", "green", "blue"];

// Array.prototype.indexOf2 = function (str) {
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] === str) return i;
//   }
//   return -1;
// };

// console.log(arr.indexOf2("red"));

//Xóa theo index
// let colors = ["red", "green", "yellow", "blue"];
// let input = prompt(`Nhập để xóa (${colors} )`);
// const index = colors.indexOf(input);

// if (index > -1) {
//   colors.splice(index, 1);
// }

// console.log(colors);

// includes, trong danh sách này có gồm cái này hay hông

// Array.prototype.includes2 = function (input) {
//   if ([NaN].includes(input)) return true;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i] == input) return true;
//   }
//   return false;
// };

// let colors = ["red", "green", "yellow", "blue", NaN];
// // let input = prompt(`Nhập màu cần tìm:`);
// console.log(colors.includes2(NaN));

// function showThis() {
//   console.log(this);
// }

// showThis();

// "use strict";

// function showThis() {
//   console.log(this);
// }

// showThis();

// const person = {
//   name: "John",
//   showThis: function () {
//     console.log(this);
//   },
// };

// person.showThis();

//CÚ PHÁP: const newFunc = oldFunction.bind(thisArg[, arg1[, arg2[, ...]]]);
