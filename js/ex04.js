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

const person = {
  name: "John",
};

console.log(person.toString());
