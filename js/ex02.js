// Câu lệnh rẽ nhánh
/* 1. if(condition){
     khối lệnh

}

2. if (condition){
true
}

else{
    false
}
     */

// let age = 19;

// if (age >= 18) {
//   console.log("Bạn đã đủ điều kiện uống rượu!");
// } else {
//   console.log("Bạn chưa đủ điều kiện uống rượu!");
// }

// if - else if - else if -..... else

// let salary = 4000000;
// let salaryTax;
// let salaryTotal;

// if (salary <= 0) {
//   console.log("Salary incorrect!");
// } else {
//   if (salary > 20000000) {
//     salaryTax = 70;
//   } else if (salary <= 20000000 && salary > 10000000) {
//     salaryTax = 50;
//   } else if (salary <= 10000000 && salary > 5000000) {
//     salaryTax = 30;
//   } else {
//     salaryTax = 0;
//   }
// }

// salaryTotal = salary - salary * (salaryTax / 100);

// console.log(`${salaryTotal.toLocaleString()}`);

// console.log("---------------------------------------");

// const PRICE_1 = 15000;
// const PRICE_2 = 13500;
// const PRICE_3 = 11000;
// const DISCOUNT = 10;
// const DISTANCE_1 = 1;
// const DISTANCE_2 = 5;
// const DISTANCE_3 = 120;

// let totalPrice = 0;
// let km = 6;

// if (km === DISTANCE_1) {
//   totalPrice += PRICE_1 * 1;
// } else if (km <= DISTANCE_2) {
//   totalPrice = DISTANCE_1 * 15000 + (km - DISTANCE_1) * PRICE_2;
// } else {
//   totalPrice =
//     DISTANCE_1 * 15000 +
//     (DISTANCE_2 - DISTANCE_1) * PRICE_2 +
//     (km - DISTANCE_2) * PRICE_3;

//   if (km > 120) {
//     totalPrice = totalPrice - totalPrice * (DISCOUNT / 100);
//   }
// }

// console.log(totalPrice);

// Switch Case : So sánh trong trường hợp 1 điều kiện và so sánh bằng.

const action = "add";

if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm mới");
} else if (action === "edit" || action === "update") {
  console.log("Cập nhật");
} else if (action === "delete" || action === "remove") {
  console.log("Xóa");
} else {
  console.log("Không hợp lệ");
}

//Tùy bài toán mà lựa chọn sử dụng switch - case hay if - else
