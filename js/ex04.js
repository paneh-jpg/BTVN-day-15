/*
const prototype = {
  getName() {
    return `${this.name} day he he`;
  },
};

const tom = Object.create(prototype);

tom.name = "Tom";
tom.hp = 1000;
tom.atk = 20;

// console.log(tom);

const jerry = Object.create(prototype);

jerry.name = "Jerry";
jerry.hp = 1000;
jerry.atk = 20;

jerry.getName = function () {
  return `Hello, Iam ${this.name}`;
};

console.log(jerry.getName());
*/

// 1) Object thường
const o = { a: 1 };
console.log(o + ""); // "[object Object]"
console.log(String(o)); // "[object Object]"

// 2) Array
console.log([1, 2, 3] + ""); // "1,2,3"
console.log(String([1, 2, 3])); // "1,2,3"

// 3) Date
const d = new Date();
console.log(d + ""); // "Wed Oct ..." (toString())
console.log(+d); // 1729... (ms)  -> valueOf()

// 4) Number wrapper
const n = new Number(999);
console.log(n + ""); // "999" (valueOf() -> 999)

// 5) Ưu tiên theo hint
const obj = {
  valueOf() {
    return 10;
  },
  toString() {
    return "ten";
  },
};
console.log(obj + 1); // 11   (number-hint: valueOf() trước)
console.log(`${obj}`); // "ten" (string-hint: toString() trước)
