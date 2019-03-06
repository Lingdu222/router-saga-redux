const data = [
    {
        title: '1',
        id: 1
    },
    {
        title: '2',
        id: 2
    },
    {
        title: '3',
        id: 3
    }
]
const item = {
    title: '我是修改的',
    id: 1
}


// const data2 = data.map(i => (
//     i.id === item.id ? { ...i, ...item } : i
// ))
const data2 = data.map(i =>
    i.id === item.id ? { ...i, ...item } : i
)
// const data2 = data.map(i => {
//     if (i.id === item.id) {
//         return { ...i, ...item }
//     } else {
//         return i
//     }
// })

console.log(data2)

var simple = a => (a > 15 ? [15, a] : a);
console.log(simple(16))
console.log(simple(10))

// [1, 2, 3, 4].forEach(i => console.log(i));
// var array = [1, 2, 3, 4];

// for (var k = 0, length = array.length; k < length; k++) {
//     console.log(array[k]);
// }