console.log("22/10/2025");

console.log("-----------------------------");

// let a = 10;
// let b = "10";
// console.log(a !== b);

// let a = "Phuong Anh";
// let b = "Anh";

// So sánh từng kí tự một, A > P (A đứng trước P) trong bảng chữ cái.
// Nếu 2 kí tự giống nhau thì so sánh dịch dần vào trong.
// so a với A thì sẽ quy đổi về bảng mã ASCII và so sánh xem cái nào lớn hơn ví dụ 97 > 65

// console.log(a > b);

//Toán tử gán

// Value phải ở đằng trước, và giá trị cần gán ở đằng sau, tức là thằng đằng sau sẽ gán lên thằng đằng trước

//Dynamic Type => kiểu trong JS
// let a = 1;
// a += 10;

// +=, -=, *=, /=, %=, **=, %=  toán tử gán (cộng bằng, trừ bằng,...)
// console.log(a);

// Truthy và Falsy
// console.log(NaN && 0 && "a");

// let a = 10;
// let b = "b";
// let c = Number(b);

// let result = a && b && c;
// console.log(result);

// let a = 10;
// let b = "b";
// let c = Number(b);

// let result = a || b || c;
// console.log(result);

// console.log(!false);

//Toán tử nullish (??)
// Kiểm tra null và undefine => nếu đúng => Tìm đến biểu thức tiếp theo => Tìm liên tục đến khi nào khác null và undefine thì dừng
// let a = null;
// let b = 10;
// console.log(a ?? b ?? "Giá trị mặc định");

//Toán tử ba ngôi
//Điều kiện ? (Đúng: Làm việc này) : (Sai: Làm việc này)

// let a = 11;
// let result = a % 2 === 0 ? "Chẵn" : "Lẻ";
// console.log(result);

// let a = 10;
// let total = 1 + 2 + 3 + a <= 10 ? "20" : "5";
// console.log(total);
