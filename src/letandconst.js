
// let 只在所在的代码块内有效
{
  let a = 10;
  var b = 1;
}
// console.log(a); // 报错
// console.log(b); // 1

for (let i = 0; i < 10; i++) {

}
// console.log(i); //  报错


/*
* 循环体的部分是父作用域，内部是单独的子作用域，两个i不在同一个作用域
*/
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// log 三次abc

// 不存在变量提升
// console.log(foo); // undefined
// var foo = 2;

// console.log(bar); // 报错
// let bar = 3;

// var tmp = 123;
// if (true) {
//   tmp = 'abd'; // 存在暂时性死区
//   let tmp;
// }

// 调用f会报错
// function f() { console.log('I am outside!'); }
//
// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
//   }
//
//   f();
// }());

// do表达式 获取块级作用域返回值
// let x = do {
//   let t = f();
//   t * t + 1;
// }
