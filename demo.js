// Hàm số học
// function sum(param1, param2) { // đầu vào: tham số
//     let total = param1 + param2;
//     return total; //đầu ra: return
// }

// let s = sum(3, 4); //7 - 3,4 gọi là đối số
// console.log(s)

// // Hàm thủ tục - hàm thực thi
// function sayHello(str){
//     console.log(str);
// }

// sayHello("Hello");

// let a = 7;
// function test(param1) {
//     param1 = 9;
// }
// test(a);
// console.log(a);

// let numbers = [1,2,3];
// function test2(param){
//     param[0] = 10;
//     param[1] = 11;
//     param[2] = 12;
// }
// test2(numbers)
// console.log(numbers);

//tham trị: chỉ lấy giá trị
// a: tham trị - vì nó là kiểu dữ liệu nguyên thuỷ
// numbers: tham chiếu - vì nó là kiểu dữ liệu arr, object
//tham chiếu: chiếu đến vị trí bên vùng nhớ heap

// Đặt tên hàm
let color = "red"; //tính từ, danh từ
function changeColor() { //động từ, có nghĩa
    return;
    color = "blue";
}

changeColor();
console.log(changeColor());
console.log(color);