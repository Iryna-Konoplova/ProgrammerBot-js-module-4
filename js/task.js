/**
 * http://fecore.net.ua/books/m5ph3r-javascript/module-02/scope.html
 * http://fecore.net.ua/books/m5ph3r-javascript/module-04/closures.html
 * Измените анонимную функцию которая присваивается к result[i]
 * так, чтобы в результате в консоли мы послучили числа от 0 до 4 включительно
 */
// const result = [];
// for (var i = 0; i < 5; i++) {
//   result[i] = function () {
//     console.log(i);
//   };
// }
// result[0](); // 5, ожидаем 0
// result[1](); // 5, ожидаем 1
// result[2](); // 5, ожидаем 2
// result[3](); // 5, ожидаем 3
// result[4](); // 5, ожидаем 4



// const result = [];
// for (var i = 0; i < 5; i++) {
//     let index = i;
//   result[i] = function () {
//     console.log(index);
//   };
// }
// result[0](); // 5, ожидаем 0
// result[1](); // 5, ожидаем 1
// result[2](); // 5, ожидаем 2
// result[3](); // 5, ожидаем 3
// result[4](); // 5, ожидаем 4



const result = [];
for (var i = 0; i < 5; i++) {
   
  result[i] = function (i) {
    console.log(i); 
    }.bind(this, i); 
}


// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function 
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }


// const result = [];
// for (var i = 0; i < 5; i++) {
   
//     result[i] = (function (i) {
//         return function () {
//           console.log(i);
//       }
     
//     }(i));
// }





result[0](); // 5, ожидаем 0
// result[1](); // 5, ожидаем 1
// result[2](); // 5, ожидаем 2
// result[3](); // 5, ожидаем 3
// result[4](); // 5, ожидаем 4
