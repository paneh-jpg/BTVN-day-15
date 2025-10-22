// for (let i = 0, j = 0; i <= 10, j <= 10; i++, j++) {
//   console.log(i);
//   console.log(j);
// }

//ĐK tăng -> Vòng lặp tăng, ĐK giảm -> Vòng lặp giảm

// Ứng dụng vòng lặp lồng nhau để in ra bảng cửu chương 1 -> 10;

for (j = 1; j <= 10; j++) {
  console.log(`Bảng cửu chương ${j}`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${j} x ${i} = ${1 * j}`);
  }
  console.log("----------");
}

// function sum(a) {
//   let sum = 0;
//   for (let i = 1; i <= a; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sum2(a) {
//   return (a * (a + 1)) / 2;
// }

// console.log(sum2(10));

// console.log(sum(10));

// let n = 5;
// let sum = 0;
// let result = 1;

// for (let i = 1; i <= n; i++) {
//   result *= i;
//   sum += result;
// }

// console.log(sum);
