// Bài 1:
let myAge = 24;
console.log(`Tôi năm nay ${myAge} tuổi.`);

// Bài 2
const PI = 3.14159;
let r = 5;
console.log(`Diện tích hình tròn có bán kính ${r} là ${r * r * PI}.`);

//Bài 3:
let a = 7,
  b = 3;
console.log(`Tổng: ${a} + ${b} = ${a + b}`);
console.log(`Hiệu: ${a} - ${b} = ${a - b}`);
console.log(`Tích: ${a} * ${b} = ${a * b}`);
if (b === 0) {
  console.log("Số bị chia không hợp lệ.");
} else {
  console.log(`Thương: ${a} / ${b} = ${a / b}`);
}

console.log(`Số dư: ${a} % ${b} = ${a % b}`);

//Bài 4:
let userName = "Vũ Thị Phương Anh";
let defaultName = "Khách";

let displayName = userName || defaultName;
console.log(`Người dùng: ${displayName}.`);

//Bài 5:
let userAge = 18;
let hasLicense = true;
if (userAge >= 18 && hasLicense) {
  console.log("Đủ đều kiện.");
} else {
  console.log("Không đủ điều kiện");
}

//Bài 6:
let username = "user_01";
let password = "abc123";
console.log(username !== "" && password !== "");

//Bài 7:
let salePrice = 200000;
let regularPrice = 1000000;
let saleRate = 100 - (salePrice / regularPrice) * 100;
console.log(`Sản phẩm được giảm giá: ${saleRate}%`);

//Bài 8:
let x = 3;
let y = 9;

console.log(`x ban đầu: ${x}`);
console.log(`y ban đầu: ${y}`);

x = x + y;
y = x - y;
x = x - y;

console.log(`x sau khi hoán vị: ${x}`);
console.log(`y sau khi hoán vị: ${y}`);

//Bài 9:
const PRICE_1 = 1678;
const PRICE_2 = 1734;
const PRICE_3 = 2014;
const PRICE_4 = 2536;
const PRICE_5 = 2834;
const PRICE_6 = 2927;
const KWH_NUMBER_1 = 50;
const KWH_NUMBER_2 = 100;
const KWH_NUMBER_3 = 200;
const KWH_NUMBER_4 = 300;
const KWH_NUMBER_5 = 400;

let totalPrice = 0;
let kWh = 1;
// let kwh = 150 // 271,300
// let kWh = 250; //498,800
// let kWh = 500; //1,201,700

if (kWh <= KWH_NUMBER_1) {
  totalPrice += PRICE_1 * kWh;
} else if (kWh <= KWH_NUMBER_2) {
  totalPrice += PRICE_1 * KWH_NUMBER_1 + PRICE_2 * (kWh - KWH_NUMBER_1);
} else if (kWh <= KWH_NUMBER_3) {
  totalPrice +=
    PRICE_1 * KWH_NUMBER_1 +
    PRICE_2 * (KWH_NUMBER_2 - KWH_NUMBER_1) +
    (kWh - KWH_NUMBER_2) * PRICE_3;
} else if (kWh <= KWH_NUMBER_4) {
  totalPrice +=
    PRICE_1 * KWH_NUMBER_1 +
    PRICE_2 * (KWH_NUMBER_2 - KWH_NUMBER_1) +
    PRICE_3 * (KWH_NUMBER_3 - KWH_NUMBER_2) +
    (kWh - KWH_NUMBER_3) * PRICE_4;
} else if (kWh <= KWH_NUMBER_5) {
  totalPrice +=
    PRICE_1 * KWH_NUMBER_1 +
    PRICE_2 * (KWH_NUMBER_2 - KWH_NUMBER_1) +
    PRICE_3 * (KWH_NUMBER_3 - KWH_NUMBER_2) +
    PRICE_4 * (KWH_NUMBER_4 - KWH_NUMBER_3) +
    PRICE_5 * (kWh - KWH_NUMBER_4);
} else {
  totalPrice +=
    PRICE_1 * KWH_NUMBER_1 +
    PRICE_2 * (KWH_NUMBER_2 - KWH_NUMBER_1) +
    PRICE_3 * (KWH_NUMBER_3 - KWH_NUMBER_2) +
    PRICE_4 * (KWH_NUMBER_4 - KWH_NUMBER_3) +
    PRICE_5 * (KWH_NUMBER_5 - KWH_NUMBER_4) +
    PRICE_6 * (kWh - KWH_NUMBER_5);
}

console.log(
  "Tiền điện của " + kWh + " kWh là " + totalPrice.toLocaleString() + " VNĐ"
);

//Bài 10:
let n = 10;
let oddStr = "Số lẻ: ";
let evenStr = "Số chẵn: ";

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    evenStr = evenStr + i + " ";
  } else {
    oddStr = oddStr + i + " ";
  }
}

console.log(oddStr);
console.log(evenStr);
