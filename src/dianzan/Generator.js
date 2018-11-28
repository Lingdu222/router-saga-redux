
// Generator 函数。它不同于普通函数，是可以暂停执行的，所以函数名之前要加星号，以示区别。
function* gen(x) {
    var y = yield x + 2;
    return y
}
//调用 Generator 函数，会返回一个内部指针（即遍历器 ）g, 即执行它不会返回结果，返回的是指针对象。
var g = gen(2)

//调用指针 g 的 next 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 yield 语句，上例是执行到 x + 2 为止。
//next 方法的作用是分阶段执行 Generator 函数。每次调用 next 方法，会返回一个对象，表示当前阶段的信息(value 属性和 done 属性。value 属性是 yield 语句后面表达式的值，表示当前阶段的值；done 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。)
console.log(g.next())//g=4
console.log(g.next())


// 数据交换

function* gen2(x) {
    var y = yield x + 2;
    return y
}
var g2 = gen2(3)
console.log(g2.next(3))
//第一个 next 方法的 value 属性，返回表达式 x + 2 的值（3）。第二个 next 方法带有参数2，这个参数可以传入 Generator 函数，作为上个阶段异步任务的返回结果，被函数体内的变量 y 接收。因此，这一步的 value 属性，返回的就是2（变量 y 的值）。
console.log(g2.next(9))


//Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
function* gen3(x) {
    try {
        var y = yield x + 2
    } catch (error) {
        console.log(error)
    }
    return y
}
var g3 = gen3(1)
console.log(g3.next())
//出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的。
console.log(g3.throw('你太笨了，出错了！！！！'))




//Generator函数的用法
// var fetch = require('node-fetch');

// function* gen() {
//     var url = 'https://api.github.com/users/github';
//     var result = yield fetch(url);
//     console.log(result.bio);
// }
// var g = gen();
// var result = g.next();

// result.value.then(function (data) {
//     return data.json();
// }).then(function (data) {
//     g.next(data);
// });